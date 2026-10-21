/**
 * i18n TRANSLATE — terjemahkan dictionary id → 29 bahasa via z-ai LLM.
 *
 * Prioritas: en → zh → 27 bahasa lain.
 * - en/zh  : ui + pages(meta) + pages.s(body) + data (LENGKAP)
 * - lainnya: ui + pages(meta) saja (body/data fallback ke English di runtime)
 *
 * Strategi: flatten string → batch kecil → LLM → validasi key → retry → tulis
 * compiled/{locale}.json. Progress disimpan di dictionaries/tmp agar bisa lanjut.
 *
 * Jalankan: bun run scripts/i18n-translate.ts [locale...]   (tanpa arg = semua)
 */
import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync, renameSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(process.cwd(), 'src/lib/i18n/dictionaries');
/** Partial progress DI LUAR src/ — menulis di dalam src/ memicu HMR Turbopack
 * (full reload → mismatch hidrasi sesaat saat dev). Dot-dir di root aman watcher. */
const TMP = join(process.cwd(), '.i18n-cache');
const COMPILED = join(ROOT, 'compiled');
mkdirSync(TMP, { recursive: true });

/** Tulis atomik: file sementara lalu rename — watcher tidak pernah melihat
 * JSON setengah jadi (mencegah "Unexpected token" saat HMR/reload). */
function writeAtomic(path: string, data: string) {
  const tmpPath = `${path}.${process.pid}.tmp`;
  writeFileSync(tmpPath, data);
  renameSync(tmpPath, path);
}

const idDict = JSON.parse(readFileSync(join(COMPILED, 'id.json'), 'utf8'));

const LANG_NAMES: Record<string, string> = {
  en: 'English', zh: 'Mandarin Chinese (Simplified, 简体中文)', es: 'Spanish', hi: 'Hindi',
  ar: 'Arabic (Modern Standard)', fr: 'French', bn: 'Bengali', pt: 'Portuguese (Brazil)',
  ru: 'Russian', ur: 'Urdu', de: 'German', ja: 'Japanese', mr: 'Marathi', te: 'Telugu',
  tr: 'Turkish', ta: 'Tamil', vi: 'Vietnamese', ko: 'Korean', it: 'Italian', th: 'Thai',
  fa: 'Persian', pl: 'Polish', nl: 'Dutch', uk: 'Ukrainian', my: 'Burmese', sw: 'Swahili',
  fil: 'Filipino (Tagalog-based)', ms: 'Malay', he: 'Hebrew',
};

/** en/zh mendapat body+data lengkap; 27 lainnya ui+meta saja */
const FULL_LOCALES = new Set(['en', 'zh']);
const ALL_LOCALES = Object.keys(LANG_NAMES);

/* ============ FLATTEN / UNFLATTEN ============ */

type Flat = Record<string, string>;

function flatten(obj: any, prefix = '', out: Flat = {}): Flat {
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'string') out[path] = v;
    else if (Array.isArray(v)) {
      v.forEach((item, i) => {
        if (typeof item === 'string') out[`${path}.${i}`] = item;
        else flatten(item, `${path}.${i}`, out);
      });
    } else if (v && typeof v === 'object') flatten(v, path, out);
  }
  return out;
}

function unflatten(flat: Flat): any {
  const root: any = {};
  for (const [path, val] of Object.entries(flat)) {
    const segs = path.split('.');
    let cur = root;
    for (let i = 0; i < segs.length - 1; i++) {
      const seg = segs[i];
      const nextIsNum = /^\d+$/.test(segs[i + 1]);
      if (!(seg in cur)) cur[seg] = nextIsNum ? [] : {};
      cur = cur[seg];
    }
    cur[segs[segs.length - 1]] = val;
  }
  return root;
}

/* ============ SUBSET (ui + meta, tanpa s & data & keywords) ============ */

function uiAndMetaSubset(dict: any): any {
  const pages: any = {};
  for (const [slug, p] of Object.entries<any>(dict.pages ?? {})) {
    pages[slug] = {
      navLabel: p.navLabel,
      seoTitle: p.seoTitle,
      metaDescription: p.metaDescription,
      h1: p.h1,
      eyebrow: p.eyebrow,
      intro: p.intro,
      menuDesc: p.menuDesc ?? '',
    };
  }
  return { ui: dict.ui, pages };
}

function bodySubset(dict: any): any {
  const pages: any = {};
  for (const [slug, p] of Object.entries<any>(dict.pages ?? {})) {
    if (p.s) pages[slug] = { s: p.s };
  }
  return { pages };
}

/* ============ LLM ============ */

type ZAIInstance = Awaited<ReturnType<typeof ZAI.create>>;
let zai: ZAIInstance | null = null;
async function getZAI(): Promise<ZAIInstance> {
  if (!zai) zai = await ZAI.create();
  return zai;
}

function extractJson(text: string): any {
  const t = text.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '');
  return JSON.parse(t);
}

async function translateBatch(
  lang: string,
  langName: string,
  batch: Flat,
  attempt = 1
): Promise<Flat> {
  const client = await getZAI();
  const prompt = [
    `Terjemahkan NILAI dari objek JSON berikut dari Bahasa Indonesia ke ${langName}.`,
    `Konteks: situs resmi PT Bambu Water Nusantara (bambuwater.web.id) — perusahaan air bambu untuk terapi kesehatan & distribusi bambu.`,
    `ATURAN KERAS:`,
    `1. KELUARAN HANYA JSON valid dengan KEY PERSIS SAMA — jangan ubah/tambah/hapus key.`,
    `2. Jangan terjemahkan: nama merek (Bambu Water Nusantara, BWN), domain (bambuwater.web.id), nama jurnal/publikasi, nama orang, alamat, nomor telepon, email, URL.`,
    `3. Pertahankan placeholder persis: {years}, {wa}, {hours}, {n}, {rating}, {name}, {type} dsb.`,
    `4. Pertahankan angka, satuan, emoji, dan format (Rp, %, dsb).`,
    `5. Gaya: profesional, ramah, seo-friendly. seoTitle/metaDescription tetap ringkas (metaDescription ≤160 karakter).`,
    `6. "Juni 2025" → nama bulan setara dalam ${langName} + 2025.`,
    ``,
    `JSON:`,
    JSON.stringify(batch),
  ].join('\n');

  try {
    const completion = await client.chat.completions.create({
      messages: [
        { role: 'assistant', content: 'You are a professional translator. Output ONLY valid JSON — no markdown, no commentary.' },
        { role: 'user', content: prompt },
      ],
      thinking: { type: 'disabled' },
    });
    const raw = completion.choices[0]?.message?.content ?? '';
    const parsed = extractJson(raw);
    /* Validasi: semua key ada & string tidak kosong */
    const out: Flat = {};
    let missing = 0;
    for (const k of Object.keys(batch)) {
      const v = parsed?.[k];
      if (typeof v === 'string' && v.trim().length > 0) out[k] = v;
      else missing++;
    }
    if (missing > 0 && attempt < 3) {
      console.log(`   ↻ ${missing} key hilang — retry ${attempt + 1}`);
      const retry = await translateBatch(lang, langName, Object.fromEntries(Object.entries(batch).filter(([k]) => !(k in out))), attempt + 1);
      return { ...out, ...retry };
    }
    return out;
  } catch (err) {
    const msg = (err as Error).message ?? '';
    /* 429 rate-limit → tunggu lebih lama (maks 8 percobaan) */
    if (msg.includes('429') && attempt <= 8) {
      const wait = Math.min(30000 * attempt, 120000);
      console.log(`   ⏳ 429 rate-limit — tunggu ${wait / 1000}s (percobaan ${attempt})`);
      await new Promise((r) => setTimeout(r, wait));
      return translateBatch(lang, langName, batch, attempt + 1);
    }
    if (attempt < 3) {
      await new Promise((r) => setTimeout(r, 3000 * attempt));
      return translateBatch(lang, langName, batch, attempt + 1);
    }
    console.error(`   ✗ batch gagal setelah 3 percobaan: ${msg.slice(0, 120)}`);
    return {};
  }
}

function chunkObject(obj: Flat, size: number): Flat[] {
  const entries = Object.entries(obj);
  const chunks: Flat[] = [];
  for (let i = 0; i < entries.length; i += size) {
    chunks.push(Object.fromEntries(entries.slice(i, i + size)));
  }
  return chunks;
}

async function translateLocale(locale: string, subset: any, batchSize = 45): Promise<Flat | null> {
  const flat = flatten(subset);
  const keys = Object.keys(flat);
  if (keys.length === 0) return null;
  const partialPath = join(TMP, `${locale}.partial.json`);
  const partial: Flat = existsSync(partialPath) ? JSON.parse(readFileSync(partialPath, 'utf8')) : {};
  /* DE-POISON: nilai partial yang identik dengan sumber id = fallback gagal dari
   * run lama (dulu id-fallback ditulis ke partial lalu dianggap "selesai").
   * Hapus agar di-terjemahkan ulang. Brand/angka yang memang sama akan
   * dikembalikan LLM apa adanya — hanya biaya kecil sekali per run. */
  let dePoisoned = 0;
  for (const k of Object.keys(partial)) {
    if (partial[k] === flat[k]) {
      delete partial[k];
      dePoisoned++;
    }
  }
  if (dePoisoned > 0) {
    writeAtomic(partialPath, JSON.stringify(partial, null, 0));
    console.log(`   🧹 de-poison ${dePoisoned} nilai id-fallback → diterjemahkan ulang`);
  }
  const chunks = chunkObject(flat, batchSize);
  const batchHash = keys.length; // sederhana
  console.log(`🌐 [${locale}] ${LANG_NAMES[locale]} — ${keys.length} string, ${chunks.length} batch (partial: ${Object.keys(partial).length})`);
  let done = 0;
  for (const chunk of chunks) {
    const chunkKeys = Object.keys(chunk);
    if (chunkKeys.every((k) => k in partial && partial[k])) {
      done++;
      continue;
    }
    const result = await translateBatch(locale, LANG_NAMES[locale], chunk);
    Object.assign(partial, result);
    writeAtomic(partialPath, JSON.stringify(partial, null, 0));
    done++;
    console.log(`   ✓ batch ${done}/${chunks.length}`);
    /* Jeda antar-batch untuk menghindari rate-limit */
    await new Promise((r) => setTimeout(r, 10000));
  }
  void batchHash;
  /* Key gagal TIDAK ditulis ke partial (dulu menjadi poison — dianggap selesai
   * padahal masih id). Merge main() mem-fallback ke id saat menulis compiled;
   * run berikutnya otomatis mencoba ulang key yang hilang. */
  return partial;
}

async function main() {
  const args = process.argv.slice(2);
  const targets = args.length > 0 ? args : ALL_LOCALES;
  /* zh diprioritaskan (bahasa priority #3), lalu sisanya */
  const order = ['zh', ...ALL_LOCALES.filter((l) => l !== 'zh')];
  const list = order.filter((l) => targets.includes(l));

  for (const locale of list) {
    const outPath = join(COMPILED, `${locale}.json`);
    const full = FULL_LOCALES.has(locale);
    const subset = full ? idDict : uiAndMetaSubset(idDict);

    const translated = await translateLocale(locale, subset);
    if (!translated) {
      console.log(`⚠ [${locale}] kosong — lewati`);
      continue;
    }

    /* Rangkai hasil: id sebagai basis, overlay terjemahan */
    const base = full ? idDict : uiAndMetaSubset(idDict);
    const merged = JSON.parse(JSON.stringify(base));
    const overlay = unflatten(JSON.parse(JSON.stringify(translated)));
    const deepMerge = (b: any, o: any): any => {
      if (o === undefined || o === null) return b;
      if (Array.isArray(o)) return o;
      if (typeof b === 'object' && typeof o === 'object' && b !== null) {
        const out: any = { ...b };
        for (const k of Object.keys(o)) out[k] = deepMerge(b?.[k], o[k]);
        return out;
      }
      return o;
    };
    const result = deepMerge(merged, overlay);
    writeAtomic(outPath, JSON.stringify(result, null, 1));
    const count = Object.keys(flatten(result)).length;
    console.log(`✅ compiled/${locale}.json — ${count} string${full ? ' (FULL: ui+meta+body+data)' : ' (ui+meta)'}`);
  }
  console.log('🎉 Selesai.');
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});

/**
 * i18n ARTICLES — terjemahkan 7 artikel kesehatan (id → en, zh) via z-ai LLM.
 * Output: dictionaries/articles/{locale}.json — { articles: { <slug>: ArticleData-ish } }
 * Jalankan SETELAH i18n-translate selesai (menghindari lonjakan concurrency).
 *   bun run scripts/i18n-articles.ts [locale...]
 */
import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { ARTICLES } from '../src/lib/articles';

const DIR = join(process.cwd(), 'src/lib/i18n/dictionaries/articles');
const TMP = join(process.cwd(), 'src/lib/i18n/dictionaries/tmp');
mkdirSync(DIR, { recursive: true });
mkdirSync(TMP, { recursive: true });

const LANG_NAMES: Record<string, string> = { en: 'English', zh: 'Mandarin Chinese (Simplified, 简体中文)' };

let zai: Awaited<ReturnType<typeof ZAI.create>> | null = null;
async function getZAI() {
  if (!zai) zai = await ZAI.create();
  return zai;
}

function extractJson(text: string): any {
  return JSON.parse(text.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, ''));
}

type Flat = Record<string, string>;

function flatten(obj: any, prefix = '', out: Flat = {}): Flat {
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'string') out[path] = v;
    else if (Array.isArray(v)) v.forEach((item, i) => flatten(item, `${path}.${i}`, out));
    else if (v && typeof v === 'object') flatten(v, path, out);
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

async function translateBatch(langName: string, batch: Flat, attempt = 1): Promise<Flat> {
  const client = await getZAI();
  const prompt = [
    `Terjemahkan NILAI objek JSON berikut dari Bahasa Indonesia ke ${langName}.`,
    `Konteks: artikel kesehatan edukatif situs PT Bambu Water Nusantara (air bambu untuk terapi).`,
    `ATURAN: 1) keluaran HANYA JSON valid, key persis sama; 2) jangan terjemahkan nama merek/jurnal/peneliti/obat generik (mis. metformin), URL, nomor; 3) pertahankan placeholder {years}/{wa}/{n} persis; 4) gaya jurnalistik kesehatan yang mudah dibaca; 5) "Juni 2025" → bulan setara ${langName} + 2025.`,
    ``,
    `JSON:`,
    JSON.stringify(batch),
  ].join('\n');
  try {
    const completion = await client.chat.completions.create({
      messages: [
        { role: 'assistant', content: 'You are a professional medical-health translator. Output ONLY valid JSON.' },
        { role: 'user', content: prompt },
      ],
      thinking: { type: 'disabled' },
    });
    const raw = completion.choices[0]?.message?.content ?? '';
    const parsed = extractJson(raw);
    const out: Flat = {};
    let missing = 0;
    for (const k of Object.keys(batch)) {
      const v = parsed?.[k];
      if (typeof v === 'string' && v.trim()) out[k] = v;
      else missing++;
    }
    if (missing > 0 && attempt < 3) {
      const rest = Object.fromEntries(Object.entries(batch).filter(([k]) => !(k in out)));
      return { ...out, ...(await translateBatch(langName, rest, attempt + 1)) };
    }
    return out;
  } catch (e) {
    if (attempt < 3) {
      await new Promise((r) => setTimeout(r, 1500 * attempt));
      return translateBatch(langName, batch, attempt + 1);
    }
    console.error(`   ✗ batch gagal: ${(e as Error).message?.slice(0, 100)}`);
    return {};
  }
}

/** Persiapan objek artikel yang akan diterjemahkan (tanpa field teknis) */
function prepArticle(a: any): any {
  return {
    category: a.category,
    title: a.title,
    seoTitle: a.seoTitle,
    metaDescription: a.metaDescription,
    excerpt: a.excerpt,
    updated: a.updated,
    heroImageAlt: a.heroImageAlt,
    intro: a.intro,
    keyPoints: a.keyPoints,
    sections: a.sections,
    conclusion: a.conclusion,
    faqs: a.faqs,
  };
}

async function main() {
  const args = process.argv.slice(2);
  const locales = args.length ? args : Object.keys(LANG_NAMES);

  for (const locale of locales) {
    const langName = LANG_NAMES[locale];
    if (!langName) continue;
    const outPath = join(DIR, `${locale}.json`);
    const partialPath = join(TMP, `articles-${locale}.partial.json`);
    const partial: Flat = existsSync(partialPath) ? JSON.parse(readFileSync(partialPath, 'utf8')) : {};
    const articlesOut: any = existsSync(outPath) ? JSON.parse(readFileSync(outPath, 'utf8')) : { articles: {} };
    articlesOut.articles = articlesOut.articles ?? {};

    for (const a of ARTICLES) {
      const prep = prepArticle(a);
      const flat = flatten(prep);
      const todo = flat;
      console.log(`📰 [${locale}] ${a.slug} — ${Object.keys(flat).length} string`);
      const chunks: Flat[] = [];
      const entries = Object.entries(todo);
      for (let i = 0; i < entries.length; i += 55) chunks.push(Object.fromEntries(entries.slice(i, i + 55)));

      let done = 0;
      for (const chunk of chunks) {
        if (Object.keys(chunk).every((k) => k in partial && partial[k])) {
          done++;
          continue;
        }
        const res = await translateBatch(langName, chunk);
        Object.assign(partial, res);
        writeFileSync(partialPath, JSON.stringify(partial, null, 0));
        done++;
        console.log(`   ✓ ${done}/${chunks.length}`);
      }
      /* key hilang → fallback id */
      for (const k of Object.keys(flat)) if (!(k in partial) || !partial[k]) partial[k] = flat[k];
      writeFileSync(partialPath, JSON.stringify(partial, null, 0));

      const translatedArticle = unflatten(JSON.parse(JSON.stringify(
        Object.fromEntries(Object.keys(flat).map((k) => [k, partial[k]]))
      )));
      articlesOut.articles[a.slug] = { ...translatedArticle, slug: a.slug };
      writeFileSync(outPath, JSON.stringify(articlesOut, null, 1));
    }
    console.log(`✅ articles/${locale}.json — ${Object.keys(articlesOut.articles).length} artikel`);
  }
  console.log('🎉 Artikel selesai.');
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});

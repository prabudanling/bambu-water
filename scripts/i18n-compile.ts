/**
 * i18n COMPILE — susun dictionary "id" (bahasa sumber) dari fragmen:
 *  - dictionaries/core.id.json            (UI inti: nav, common, footer, float, pageHero)
 *  - dictionaries/parts/*.id.json         (per-kelompok komponen: hero, about, faq, ...)
 *  - dictionaries/pages/*.id.json         (body string per halaman)
 *  - dictionaries/data/id.json            (data terstruktur: benefits, faqs, products, ...)
 *  - PAGES_META (pages-registry.ts)       (meta SEO 25 halaman — diambil langsung)
 * Output: dictionaries/compiled/id.json (+ en.json / zh.json stub agar app compile)
 *
 * Jalankan: bun run scripts/i18n-compile.ts
 */
import { readFileSync, writeFileSync, renameSync, existsSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { PAGES_META, NAV_GROUPS } from '../src/lib/pages-registry';

const ROOT = join(process.cwd(), 'src/lib/i18n/dictionaries');
const read = (p: string) => (existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : null);

/** Tulis atomik — watcher (Turbopack) tidak pernah melihat JSON setengah jadi. */
function writeAtomic(path: string, data: string) {
  const tmpPath = `${path}.${process.pid}.tmp`;
  writeFileSync(tmpPath, data);
  renameSync(tmpPath, path);
}

function deepMerge(base: any, overlay: any): any {
  if (overlay === undefined || overlay === null) return base;
  if (Array.isArray(base) || Array.isArray(overlay)) return overlay ?? base;
  if (typeof base === 'object' && typeof overlay === 'object') {
    const out: any = { ...base };
    for (const k of Object.keys(overlay)) out[k] = deepMerge(base?.[k], overlay[k]);
    return out;
  }
  return overlay;
}

/* ===== 1. UI inti + parts ===== */
let ui: any = {};
const core = read(join(ROOT, 'core.id.json'));
if (core?.ui) ui = deepMerge(ui, core.ui);
const partsDir = join(ROOT, 'parts');
if (existsSync(partsDir)) {
  for (const f of readdirSync(partsDir).filter((x) => x.endsWith('.id.json')).sort()) {
    const part = read(join(partsDir, f));
    if (part?.ui) ui = deepMerge(ui, part.ui);
  }
}

/* ===== 2. Nav groups: label grup + menuDesc per halaman dari NAV_GROUPS ===== */
ui.nav = ui.nav ?? {};
ui.nav.groups = ui.nav.groups ?? {};
for (const g of NAV_GROUPS) {
  ui.nav.groups[g.label] = g.label; // placeholder — label grup diterjemahkan di core/parts
  if (g.children) {
    for (const c of g.children) {
      const pm = (PAGES_META as any)[c.slug];
      if (pm) {
        pm.menuDesc = c.desc;
      }
    }
  }
}

/* ===== 3. Pages meta dari PAGES_META ===== */
const pages: any = {};
for (const [slug, m] of Object.entries(PAGES_META as any)) {
  pages[slug] = {
    navLabel: m.navLabel ?? m.h1,
    seoTitle: m.seoTitle,
    metaDescription: m.metaDescription,
    h1: m.h1,
    eyebrow: m.eyebrow,
    intro: m.intro,
    keywords: m.keywords ?? [],
    menuDesc: m.menuDesc ?? '',
  };
  /* body string per halaman dari pages/{slug}.id.json */
  const body = read(join(ROOT, 'pages', `${slug}.id.json`));
  if (body?.pages?.[slug]?.s) pages[slug].s = body.pages[slug].s;
}

/* ===== 4. Data terstruktur (data/id.json + data-parts/*.id.json) ===== */
const dataFile = read(join(ROOT, 'data', 'id.json'));
let data: any = dataFile?.data ?? {};
const dataPartsDir = join(ROOT, 'data-parts');
if (existsSync(dataPartsDir)) {
  for (const f of readdirSync(dataPartsDir).filter((x) => x.endsWith('.id.json')).sort()) {
    const part = read(join(dataPartsDir, f));
    if (part?.data) data = { ...data, ...part.data };
  }
}

/* ===== 5. Articles meta dipakai artikel-index via data.articles ===== */

const id = { ui, pages, data };

writeAtomic(join(ROOT, 'compiled', 'id.json'), JSON.stringify(id, null, 1));

/* en/zh stub agar import statis app tidak gagal sebelum terjemahan siap */
for (const loc of ['en', 'zh']) {
  const p = join(ROOT, 'compiled', `${loc}.json`);
  if (!existsSync(p)) writeAtomic(p, JSON.stringify({}, null, 1));
}

/* ===== Laporan ===== */
const countStrings = (o: any): number => {
  if (typeof o === 'string') return 1;
  if (Array.isArray(o)) return o.reduce((a: number, v: any) => a + countStrings(v), 0);
  if (o && typeof o === 'object')
    return Object.values(o).reduce((a: number, v: any) => a + countStrings(v), 0 as number);
  return 0;
};
console.log(`✅ compiled/id.json — ${countStrings(id)} string | ui sections: ${Object.keys(ui).join(', ')}`);
console.log(`   pages: ${Object.keys(pages).length} | data sections: ${Object.keys(data).join(', ') || '(kosong)'}`);

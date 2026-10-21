# PATTERN i18n — Konversi Komponen ke Multi-Bahasa (WAJIB DIBACA AGENT)

Situs ini mendapat fitur 30 bahasa. Semua string Indonesia di komponen dipindah ke dictionary.
**Bahasa sumber = Indonesia (id).** Terjemahan bahasa lain dibuat otomatis oleh skrip — agent HANYA membuat file `.id.json` + refactor komponen.

## Arsitektur

- `src/lib/i18n/config.ts` — 30 locale, parser hash `#/{locale}/{slug}`
- `src/lib/i18n/context.tsx` — `useI18n()` → `{ locale, rtl, t, tId, setLocale }`; `pageMeta(t, slug)` untuk meta halaman
- `t` = dictionary bahasa aktif (fallback otomatis: locale → en → id). **Selalu gunakan langsung `t.ui.xxx` / `t.data.xxx` / `t.pages['slug'].s.xxx`** — fallback sudah dijamin oleh merge.
- `tId` = dictionary id (sumber), dipakai untuk fallback manual jika perlu.

## ATURAN KONVERSI KOMPONEN

1. Tambahkan import: `import { useI18n } from '@/lib/i18n/context';`
2. Di dalam komponen: `const { t } = useI18n();` lalu `const s = t.ui.<namaSection>;`
3. Ganti setiap string literal Indonesia di JSX menjadi `s.<key>`.
4. **aria-label** berbahasa juga ikut dipindah ke dictionary (`ariaLabel` key).
5. Data dari `@/lib/company` (BENEFITS/FAQS/PRODUCTS/PROCESS/DELIVERY_TIERS/STATS/NUTRITION/PRICING dll):
   ```tsx
   const list = Array.isArray(t.data?.faqs) && t.data.faqs.length > 0 ? t.data.faqs : FAQS;
   ```
   Import tetap dipertahankan sebagai fallback. Data array hasil `t.data.x` harus di-map dengan tipe eksplisit bila TS error, contoh: `.map((f: { q: string; a: string }, i: number) => ...)`.
6. String di dalam `.map()`/array inline → pindah ke dictionary sebagai ARRAY dengan urutan yang sama, akses via indeks atau map langsung.
7. **JANGAN mengubah**: className, ikon, struktur JSX, logika, framer-motion props (kecuali string di dalamnya), href, layout. Hanya string tampilan & aria-label.
8. Nama perusahaan/domain/WA/nama orang/alamat TIDAK diterjemahkan — biarkan dari COMPANY/OFFICES.
9. Angka & format seperti "08.00 – 17.00 WIB" boleh tetap dalam dictionary untuk diterjemahkan konteksnya.

## FILE FRAGMENT YANG DIBUAT AGENT (hanya `.id.json`)

### A. String UI komponen → `src/lib/i18n/dictionaries/parts/<nama>.id.json`
```json
{
  "ui": {
    "<namaSection>": {
      "ariaLabel": "...",
      "eyebrow": "...",
      "title": "...",
      "description": "...",
      "items": [ { "title": "...", "text": "..." } ]
    }
  }
}
```
Gunakan nama section yang sudah ada di `compiled/id.json` bila sudah ada (cek dulu!), JANGAN duplikat key `ui` yang sama di dua file part (merge terakhir menang & merusak).

### B. Data array inline komponen → `src/lib/i18n/dictionaries/data-parts/<nama>.id.json`
```json
{ "data": { "testimonials": [ { "name": "...", "role": "...", "quote": "..." } ] } }
```

### C. String body halaman → `src/lib/i18n/dictionaries/pages/<slug>.id.json`
```json
{ "pages": { "<slug>": { "s": {
  "sectionA_eyebrow": "...",
  "sectionA_title": "...",
  "p1": "...",
  "listA": ["...", "..."]
} } } }
```
Komponen halaman mengambil: `const s = t.pages['<slug>'].s;`
**Catatan**: judul/eyebrow/intro HERO halaman TIDAK perlu masuk s (sudah otomatis via `pageMeta` — field h1/eyebrow/intro/navLabel dari PAGES_META). Agent cukup konversi body section di bawah hero.

## Contoh pola (SUDAH DIPAKAI — tiru gayanya)

Lihat `src/components/site/benefits.tsx` + `src/components/site/faq.tsx` + `src/components/site/page-hero.tsx` dan `src/lib/i18n/dictionaries/parts/benefits-faq.id.json`.

## Halaman yang JANGAN disentuh agent (sudah/melewati infra)
- `src/components/site/benefits.tsx` ✅, `faq.tsx` ✅, `page-hero.tsx` ✅
- `src/lib/i18n/**` (infra — JANGAN diubah)
- `src/lib/company.ts` (JANGAN diubah — hanya dibaca)
- `src/components/app/app-shell.tsx` (diubah orchestrator saja)
- `src/components/site/navbar.tsx` & `whatsapp-float.tsx` (diubah orchestrator)

## Setelah selesai
- Jalankan `bun run scripts/i18n-compile.ts` untuk memastikan JSON valid & ter-compile (harus exit 0).
- Jalankan `bun run lint` — harus bersih di file yang disentuh.
- APPEND worklog `/home/z/my-project/worklog.md` (jangan overwrite) sesuai template.

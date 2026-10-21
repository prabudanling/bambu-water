# Bambu Water Nusantara — bambuwater.web.id

> **Situs resmi PT Bambu Water Nusantara** — pionir, terbesar & pertama di Indonesia dalam air bambu terapi pengobatan sejak 2007, serta distribusi bambu berkualitas massal se-Indonesia.
> 🌏 bambuwater.web.id · WhatsApp **0813-1651-6524**

---

## 🇮🇩 Indonesia

Website korporas standar internasional dengan **2.646 halaman full-SEO Google**, 30 bahasa dunia, animasi Framer Motion, dan arsitektur hydration-proof.

### Fitur Utama

| Kategori | Detail |
|---|---|
| **Halaman Total** | 2.646 URL full-SEO (25 halaman inti + 2.621 halaman programatik) |
| **Halaman Kota** | 2.524 kota & kabupaten — 38 provinsi (`#/kota/{slug}`) |
| **Pusat Kesehatan** | 60+ kondisi terapi (`#/air-bambu-untuk/{slug}`) |
| **Katalog Layanan** | 25 layanan bisnis + 2.524 layanan pengiriman kota (`#/layanan/{slug}`) |
| **Jenis Bambu** | 8 varietas lengkap — harga, spesifikasi, FAQ (`#/bambu/{slug}`) |
| **Halaman Indeks** | 4 indeks dengan pencarian live: kota, kesehatan, layanan, bambu |
| **Bahasa** | 30 bahasa (id, en, zh, es, hi, ar, fr, ...) — RTL penuh |
| **SEO** | Meta dinamis per halaman · JSON-LD (10+ node) · Sitemap 2.646 URL · hreflang · canonical · OG/Twitter |
| **Animasi** | Framer Motion di seluruh section (reveal, stagger, parallax) |
| **Entitas** | JSON-LD Person/Organization graph (entity layer stealth) |

### Arsitektur Programatik — Auto-Pages Engine

```
src/lib/data/
  ├── cities.ts          # 2.524 kota · 38 provinsi · ETA per wilayah
  ├── conditions.ts      # 60 kondisi kesehatan + FAQ per kondisi
  ├── services.ts        # 25 layanan (langganan/kargo/kemitraan/bambu)
  └── bamboo-types.ts    # 8 jenis bambu + spesifikasi teknis
src/lib/auto-pages.ts    # Generator meta SEO (title/desc/keywords) per slug
src/components/pages/
  ├── auto-shared.tsx    # Blok bersama: hero, FAQ, JSON-LD, search
  └── auto-pages-renderer.tsx  # Dispatcher semua halaman programatik
```

**Routing hash-based hydration-proof**: `#/{locale}/{slug}` dalam satu route Next.js `/` — nol SSR hydration error, SEO tetap penuh via meta engine + JSON-LD + sitemap dinamis.

### Patches Engineering Penting

- **History Patch** (`use-hash-route.ts`): navigasi `<Link href="#/...">` Next.js memakai `pushState` (tanpa event `hashchange`) → dipatch agar SPA hash routing respons — hanya dispatch bila hash **benar-benar berubah**, async `setTimeout` agar tidak melanggar fase efek React (mencegah `useInsertionEffect` error & hydration mismatch).
- **Title Observer**: guard 2 detik melawan restorasi `<title>` oleh payload RSC Next.js.
- **i18n**: eager id/en/zh + lazy 27 bahasa; fallback id untuk konten programatik.

### Jalankan

```bash
bun install
bun run dev        # http://localhost:3000
bun run lint       # ESLint
bun run db:push    # Prisma schema
```

---

## 🇬🇧 English

Official corporate website of PT Bambu Water Nusantara — Indonesia's pioneer & largest therapeutic bamboo water producer since 2007, plus mass bamboo distribution nationwide.

- **2,646 full-SEO pages**: 25 core + 2,621 programmatic (2,524 city pages, 60+ health conditions, 25 services, 8 bamboo types, 4 searchable indexes)
- **30 languages** with full RTL, dynamic per-page meta, 10+ JSON-LD nodes, 2,646-URL sitemap, hreflang & canonical management
- **Stack**: Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui · Framer Motion · Prisma/SQLite · Bun

### Contact

PT Bambu Water Nusantara — Guntur Village No.50, Padasuka, Sukarame, Tasikmalaya, West Java
WhatsApp +62 813-1651-6524 · halo@bambuwater.web.id · Senin–Sabtu 08.00–17.00 WIB

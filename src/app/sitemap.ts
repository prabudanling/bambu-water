
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/company';
import { PAGES_META } from '@/lib/pages-registry';
import { getAllAutoMetas } from '@/lib/auto-pages';
import { LOCALES, localeUrl } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/config';

/**
 * Sitemap SEO — 25 halaman inti + 2.600+ halaman programatik
 * (kota, kondisi kesehatan, layanan, jenis bambu) × 30 bahasa.
 * Halaman inti: hreflang 30 locale penuh.
 * Halaman programatik: hreflang ringkas (id + en) agar sitemap efisien.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* ===== Halaman inti (25) — alternates 30 bahasa ===== */
  const core = Object.values(PAGES_META)
    .sort((a, b) => b.priority - a.priority)
    .map((p) => ({
      url:
        p.slug === 'beranda'
          ? `${SITE_URL}/`
          : `${SITE_URL}/#/${p.slug}`,
      lastModified: now,
      changeFrequency:
        (p.slug === 'beranda' || p.slug === 'artikel'
          ? 'weekly'
          : 'monthly') as MetadataRoute.Sitemap[number]['changeFrequency'],
      priority: p.priority as MetadataRoute.Sitemap[number]['priority'],
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [
            l.code,
            localeUrl(l.code as Locale, p.slug, SITE_URL),
          ]),
        ),
      } as MetadataRoute.Sitemap[number]['alternates'],
    }));

  /* ===== Halaman programatik (2.600+) — alternates id + en ===== */
  const auto = getAllAutoMetas()
    .sort((a, b) => b.priority - a.priority)
    .map((p) => ({
      url: `${SITE_URL}/#/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as MetadataRoute.Sitemap[number]['changeFrequency'],
      priority: p.priority as MetadataRoute.Sitemap[number]['priority'],
      alternates: {
        languages: {
          id: `${SITE_URL}/#/${p.slug}`,
          en: `${SITE_URL}/#/en/${p.slug}`,
        },
      } as MetadataRoute.Sitemap[number]['alternates'],
    }));

  return [...core, ...auto];
}

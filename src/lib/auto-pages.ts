/**
 * AUTO-PAGES ENGINE — generator metadata SEO programatik.
 * Menggabungkan data kota, kondisi kesehatan, layanan & jenis bambu
 * menjadi puluhan ribu URL full-SEO (title, description, keywords, OG).
 *
 * Skema slug:
 *   #/kota/{slug}            → halaman kota (2.524+)
 *   #/kota                   → indeks semua kota
 *   #/air-bambu-untuk/{slug} → halaman kondisi (62)
 *   #/kesehatan              → indeks kondisi
 *   #/layanan/{slug}         → halaman layanan (25)
 *   #/layanan                → indeks layanan
 *   #/bambu/{slug}           → halaman jenis bambu (8)
 *   #/bambu                  → indeks jenis bambu
 */

import type { PageMeta } from '@/lib/pages-registry';
import { SITE_URL } from '@/lib/pages-registry';
import { ALL_CITIES, PROVINCES, findCity, POPULAR_CITIES, type CityEntry } from '@/lib/data/cities';
import { CONDITIONS, findCondition, type ConditionData } from '@/lib/data/conditions';
import { SERVICES, findService, type ServiceData } from '@/lib/data/services';
import { BAMBOO_TYPES, findBambooType, type BambooTypeData } from '@/lib/data/bamboo-types';

const UPDATED = 'Juni 2025';

export type AutoPageKind = 'kota' | 'kesehatan' | 'layanan' | 'bambu' | 'indeks-kota' | 'indeks-kesehatan' | 'indeks-layanan' | 'indeks-bambu';

export type AutoPage =
  | { kind: 'kota'; city: CityEntry; meta: PageMeta }
  | { kind: 'kesehatan'; condition: ConditionData; meta: PageMeta }
  | { kind: 'layanan'; service: ServiceData; meta: PageMeta }
  | { kind: 'bambu'; bamboo: BambooTypeData; meta: PageMeta }
  | { kind: 'indeks-kota'; meta: PageMeta }
  | { kind: 'indeks-kesehatan'; meta: PageMeta }
  | { kind: 'indeks-layanan'; meta: PageMeta }
  | { kind: 'indeks-bambu'; meta: PageMeta };

/* ============ SLUG PREFIX ============ */

export const SLUG_PREFIX = {
  kota: 'kota',
  kesehatan: 'air-bambu-untuk',
  layanan: 'layanan',
  bambu: 'bambu',
  indeksKota: 'kota',
  indeksKesehatan: 'kesehatan',
  indeksLayanan: 'layanan',
  indeksBambu: 'bambu',
} as const;

/** Halaman indeks — meta statis SEO penuh */
const INDEX_METAS: Record<string, PageMeta> = {
  kota: {
    slug: 'kota',
    navLabel: 'Jangkauan Kota',
    seoTitle: 'Jual Air Bambu & Bambu Batang di 38 Provinsi — Indeks Kota Pengiriman',
    metaDescription:
      'Indeks lengkap 2.500+ kota & kabupaten pengiriman air bambu terapi dan bambu batang berkualitas — pilih kota Anda dan pesan via WhatsApp hari ini.',
    keywords: ['jual air bambu kota', 'distributor air bambu per kota', 'pengiriman air bambu seluruh indonesia', 'air bambu terdekat'],
    h1: 'Pilih Kota Anda — Jangkauan Pengiriman Se-Indonesia',
    eyebrow: 'Jangkauan Kota',
    intro: 'Dari Banda Aceh hingga Jayapura — 2.500+ kota dan kabupaten telah terjangkau jaringan distribusi air bambu & bambu berkualitas kami.',
    heroImage: '/images/product-bulk.jpg',
    priority: 0.8,
    updated: UPDATED,
  },
  kesehatan: {
    slug: 'kesehatan',
    navLabel: 'Pusat Kesehatan',
    seoTitle: 'Pusat Terapi Air Bambu — 60+ Kondisi Kesehatan & Cara Konsumsi Aman',
    metaDescription:
      'Kumpulan lengkap manfaat air bambu untuk 60+ kondisi kesehatan: demam, asam urat, maag, ginjal, hipertensi, kulit, sendi, hingga terapi wanita — panduan aman berbasis tradisi & riset.',
    keywords: ['terapi air bambu', 'air bambu untuk kesehatan', 'manfaat air bambu lengkap', 'pengobatan alami air bambu', 'minuman herbal nusantara'],
    h1: 'Pusat Terapi Air Bambu',
    eyebrow: 'Indeks Kesehatan',
    intro: 'Jelajahi manfaat air bambu untuk 60+ kondisi kesehatan — dari kearifan tabib Nusantara yang kini didukung kajian ilmiah modern.',
    heroImage: '/images/wellness.jpg',
    priority: 0.9,
    updated: UPDATED,
  },
  layanan: {
    slug: 'layanan',
    navLabel: 'Katalog Layanan',
    seoTitle: 'Katalog Layanan BWN — Langganan, Kargo, Kemitraan & Bambu Proyek',
    metaDescription:
      'Semua layanan PT Bambu Water Nusantara: langganan rumah tangga hingga klinik, kargo darat-laut-udara, kemitraan distributor & agen, pasokan bambu proyek konstruksi.',
    keywords: ['layanan air bambu', 'langganan air bambu', 'kargo air bambu', 'kemitraan distributor air bambu', 'pasokan bambu proyek'],
    h1: 'Katalog Layanan Bambu Water Nusantara',
    eyebrow: 'Semua Layanan',
    intro: 'Satu pintu untuk semua kebutuhan: langganan rutin, kargo volume besar, kemitraan bisnis, hingga pasokan bambu proyek — lengkap dengan skema fleksibel.',
    heroImage: '/images/product-bulk.jpg',
    priority: 0.9,
    updated: UPDATED,
  },
  bambu: {
    slug: 'bambu',
    navLabel: 'Jenis Bambu',
    seoTitle: '8 Jenis Bambu Berkualitas — Petung, Wulung, Apus, Ori & Lainnya',
    metaDescription:
      'Panduan lengkap 8 jenis bambu unggulan Nusantara: Petung konstruksi, Wulung hitam premium, Apus anyaman, Ori rangka, Gading lanskap — harga & spesifikasi per batang.',
    keywords: ['jenis bambu indonesia', 'bambu petung', 'bambu wulung', 'bambu apus', 'bambu ori', 'harga bambu per batang', 'bambu berkualitas'],
    h1: 'Panduan Jenis Bambu Nusantara',
    eyebrow: '8 Varietas Unggulan',
    intro: 'Kenali karakter, spesifikasi, dan harga 8 jenis bambu terbaik Nusantara — pilah paling presisi dari hutan rakyat terkurasi sejak 2007.',
    heroImage: '/images/product-bamboo-poles.jpg',
    priority: 0.9,
    updated: UPDATED,
  },
};

/* ============ META GENERATORS ============ */

function cityMeta(city: CityEntry): PageMeta {
  const popular = POPULAR_CITIES.some((c) => c.slug === city.slug);
  return {
    slug: `kota/${city.slug}`,
    seoTitle: `Jual Air Bambu di ${city.name} ${city.province} — Kirim Cepat | BWN`,
    metaDescription: `Air bambu terapi & bambu batang berkualitas dikirim ke ${city.name}, ${city.province} (${city.eta}). Grosir & retail, WA 0813-1651-6524.`,
    keywords: [
      `air bambu ${city.name.toLowerCase()}`,
      `jual air bambu ${city.name.toLowerCase()}`,
      `air bambu ${city.province.toLowerCase()}`,
      `distributor air bambu ${city.name.toLowerCase()}`,
      `bambu batang ${city.name.toLowerCase()}`,
      `air bambu terapi ${city.name.toLowerCase()}`,
    ],
    h1: `Air Bambu Terapi & Bambu Berkualitas di ${city.name}`,
    eyebrow: `${city.province} · ${city.region}`,
    intro: `Pengiriman air bambu suling, air bambu tabib, dan bambu batang pilihan (Petung, Wulung, Apus, Ori) ke ${city.name} dan sekitarnya — tiba dalam ${city.eta}.`,
    heroImage: '/images/hero-bamboo.jpg',
    priority: popular ? 0.8 : 0.7,
    updated: UPDATED,
  };
}

function conditionMeta(cond: ConditionData): PageMeta {
  return {
    slug: `air-bambu-untuk/${cond.slug}`,
    seoTitle: `Air Bambu untuk ${cond.name} — Manfaat, Cara Konsumsi & FAQ`,
    metaDescription: `Manfaat air bambu untuk ${cond.name.toLowerCase()} berdasarkan tradisi tabib Nusantara & kandungan ilmiah. Panduan konsumsi aman lengkap dengan FAQ.`,
    keywords: [
      `air bambu untuk ${cond.name.toLowerCase()}`,
      `manfaat air bambu ${cond.name.toLowerCase()}`,
      `terapi ${cond.name.toLowerCase()} alami`,
      `minuman herbal ${cond.name.toLowerCase()}`,
      'air bambu pengobatan',
    ],
    h1: `Air Bambu untuk ${cond.name}`,
    eyebrow: `Terapi Komplementer · ${cond.category}`,
    intro: cond.hook,
    heroImage: '/images/wellness.jpg',
    priority: 0.8,
    updated: UPDATED,
  };
}

function serviceMeta(service: ServiceData): PageMeta {
  return {
    slug: `layanan/${service.slug}`,
    seoTitle: `${service.name} — Skema, Syarat & Cara Mulai | BWN`,
    metaDescription: `${service.hook} ${service.moq}. Konsultasi & penawaran via WhatsApp 0813-1651-6524.`,
    keywords: [
      service.name.toLowerCase(),
      `layanan ${service.name.toLowerCase()}`,
      'bambu water nusantara layanan',
      service.slug.replace(/-/g, ' '),
      'air bambu grosir',
    ],
    h1: service.name,
    eyebrow: service.category,
    intro: service.hook,
    heroImage: '/images/product-bulk.jpg',
    priority: 0.8,
    updated: UPDATED,
  };
}

function bambooMeta(bamboo: BambooTypeData): PageMeta {
  return {
    slug: `bambu/${bamboo.slug}`,
    seoTitle: `${bamboo.name} (${bamboo.latin}) — Harga, Spesifikasi & Pemanfaatan`,
    metaDescription: `${bamboo.name}: ${bamboo.hook} Harga ${bamboo.priceRange}. Seleksi umur 3+ tahun, kirim per batang hingga per truk se-Indonesia.`,
    keywords: [
      bamboo.name.toLowerCase(),
      bamboo.latin.toLowerCase(),
      `harga ${bamboo.name.toLowerCase()}`,
      `jual ${bamboo.name.toLowerCase()}`,
      `spesifikasi ${bamboo.name.toLowerCase()}`,
      'bambu berkualitas',
    ],
    h1: `${bamboo.name} — ${bamboo.latin}`,
    eyebrow: `Bambu Nusantara · ${bamboo.category}`,
    intro: bamboo.hook,
    heroImage: '/images/product-bamboo-poles.jpg',
    priority: 0.8,
    updated: UPDATED,
  };
}

/* ============ LOOKUP ============ */

export function getAutoPage(fullSlug: string): AutoPage | null {
  /* Halaman indeks */
  if (fullSlug === 'kota') return { kind: 'indeks-kota', meta: INDEX_METAS.kota };
  if (fullSlug === 'kesehatan') return { kind: 'indeks-kesehatan', meta: INDEX_METAS.kesehatan };
  if (fullSlug === 'layanan') return { kind: 'indeks-layanan', meta: INDEX_METAS.layanan };
  if (fullSlug === 'bambu') return { kind: 'indeks-bambu', meta: INDEX_METAS.bambu };

  /* Halaman detail — format: prefix/slug */
  const slash = fullSlug.indexOf('/');
  if (slash === -1) return null;
  const prefix = fullSlug.slice(0, slash);
  const child = fullSlug.slice(slash + 1);

  if (prefix === 'kota') {
    const city = findCity(child);
    return city ? { kind: 'kota', city, meta: cityMeta(city) } : null;
  }
  if (prefix === 'air-bambu-untuk') {
    const cond = findCondition(child);
    return cond ? { kind: 'kesehatan', condition: cond, meta: conditionMeta(cond) } : null;
  }
  if (prefix === 'layanan') {
    const svc = findService(child);
    return svc ? { kind: 'layanan', service: svc, meta: serviceMeta(svc) } : null;
  }
  if (prefix === 'bambu') {
    const bamboo = findBambooType(child);
    return bamboo ? { kind: 'bambu', bamboo, meta: bambooMeta(bamboo) } : null;
  }
  return null;
}

/** Semua meta auto-pages (untuk sitemap & internal linking) */
export function getAllAutoMetas(): PageMeta[] {
  const metas: PageMeta[] = [
    INDEX_METAS.kota,
    INDEX_METAS.kesehatan,
    INDEX_METAS.layanan,
    INDEX_METAS.bambu,
  ];
  for (const city of ALL_CITIES) metas.push(cityMeta(city));
  for (const cond of CONDITIONS) metas.push(conditionMeta(cond));
  for (const svc of SERVICES) metas.push(serviceMeta(svc));
  for (const bamboo of BAMBOO_TYPES) metas.push(bambooMeta(bamboo));
  return metas;
}

/** Statistik situs untuk halaman indeks & hero */
export const SITE_STATS = {
  totalPages: 25 + 4 + ALL_CITIES.length + CONDITIONS.length + SERVICES.length + BAMBOO_TYPES.length,
  cityPages: ALL_CITIES.length,
  provinces: PROVINCES.length,
  conditions: CONDITIONS.length,
  services: SERVICES.length + ALL_CITIES.length,
  bambooTypes: BAMBOO_TYPES.length,
};

export { SITE_URL };

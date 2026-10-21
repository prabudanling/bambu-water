/**
 * TIPE & REGISTRASI ARTIKEL KESEHATAN — bambuwater.web.id
 * Data artikel ditulis di articles-a.ts (Task 3-a) dan articles-b.ts (Task 3-b).
 */

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  /** Daftar poin (dengan judul opsional) */
  list?: { title?: string; text: string }[];
  /** Judul kelompok list (opsional) */
  listTitle?: string;
  /** Kotak tips/peringatan yang disorot */
  callout?: string;
};

export type ArticleFaq = { q: string; a: string };

export type ArticleData = {
  /** Slug HARUS sama dengan registry di pages-registry.ts */
  slug: string;
  category: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Ringkasan untuk kartu artikel (≤180 karakter) */
  excerpt: string;
  readMinutes: number;
  /** Format "Juni 2025" */
  updated: string;
  /** Path gambar dari /public/images */
  heroImage: string;
  heroImageAlt: string;
  /** 2–3 paragraf pembuka setelah hero */
  intro: string[];
  /** 4–6 poin ringkasan utama */
  keyPoints: string[];
  sections: ArticleSection[];
  conclusion: string;
  faqs: ArticleFaq[];
  /** Slug artikel terkait (dari daftar 7 slug di bawah) */
  related: string[];
  /** Nama sumber/referensi */
  references: string[];
};

export const ARTICLE_SLUGS = [
  'air-bambu-gula-darah',
  'air-bambu-batu-ginjal',
  'air-bambu-kolesterol',
  'air-bambu-detoksifikasi',
  'air-bambu-tulang-silika',
  'air-bambu-kecantikan',
  'sejarah-air-bambu',
] as const;

import { ARTICLES_A } from './articles-a';
import { ARTICLES_B } from './articles-b';

type RawSection = {
  heading: string;
  paragraphs: string[];
  list?:
    | { title?: string; text: string }[]
    | { title?: string; text: string | string[] };
  listTitle?: string;
  callout?: string;
};

/** Normalisasi: dukung list berbentuk array ATAU objek {title, text: string[]} */
function normalizeArticle(raw: ArticleData): ArticleData {
  const sections = (raw.sections as unknown as RawSection[]).map((s) => {
    if (s.list && !Array.isArray(s.list) && typeof s.list === 'object') {
      const group = s.list;
      const items = Array.isArray(group.text)
        ? group.text.map((t) => ({ text: t }))
        : [{ text: String(group.text) }];
      return { ...s, list: items, listTitle: group.title ?? s.listTitle } as ArticleSection;
    }
    return s as ArticleSection;
  });
  return { ...raw, sections };
}

export const ARTICLES: ArticleData[] = [...(ARTICLES_A as unknown as ArticleData[]), ...(ARTICLES_B as unknown as ArticleData[])].map(
  normalizeArticle
);

export function getArticle(slug: string): ArticleData | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

/**
 * ============================================================
 *  LAYER BRANDING ENTITY (STEALTH) — bambuwater.web.id
 * ============================================================
 *  Kehadiran digital pemilik & sistem pendukung, tertanam DI DALAM
 *  sistem (JSON-LD entity graph, metadata author/creator, kredit mikro
 *  footer) — terbaca penuh oleh mesin pencari (Google Knowledge Graph,
 *  entity SEO, anchor cross-domain) namun TIDAK mendominasi permukaan
 *  visual situs.
 *
 *  Prinsip: "sembunyikan di permukaan, hadir di dalam sistem."
 *  - PERMUKAAN  : 1 baris mikro di footer (opacity rendah, 10px).
 *  - SISTEM     : Person schema + sameAs 6 jejaring sosial + 2 entitas
 *                 PT pendukung + meta author/creator + keywords.
 * ============================================================
 */

/** Pemilik / principal — H. Gugun Gunara, S.E. */
export const PRINCIPAL = {
  /** Nama tampil utama (Knowledge Graph) */
  name: 'Gugun Gunara',
  /** Nama formal sesuai akta */
  formalName: 'H. Gugun Gunara, S.E.',
  /** Semua nama & identitas digital yang dikenal publik — target naik di Google */
  alternateNames: [
    'Muhammad Lutfi Azmi',
    'Prabu Danling',
    'Prabudanling',
    'Santri Angon',
    'Gunzz Krenzz',
    'Boss Danling',
    'Gunara Corp',
  ],
  honorificPrefix: 'H.',
  jobTitle: 'Master Polymath • Sage Universal • The Ultimate Problem Solver',
  /** Deskripsi entitas untuk JSON-LD Person */
  description:
    'H. Gugun Gunara, S.E. — dikenal juga sebagai Muhammad Lutfi Azmi, Prabu Danling, atau Santri Angon — adalah Master Polymath, Sage Universal, dan The Ultimate Problem Solver. Pendiri PT Top Konsultan Internasional (topkonsultan.web.id) dan PT Digital Bisnis Manajemen (digiman.id), serta Direktur Utama sekaligus Dewan Pendiri PT Bambu Water Nusantara (bambuwater.web.id) — pionir air bambu pengobatan terbesar & pertama di Indonesia sejak 2007.',
  /** Jejaring sosial resmi — disematkan via sameAs (lapisan tak kasat mata) */
  social: {
    facebook: 'https://www.facebook.com/bossdanling',
    x: 'https://x.com/gunzz_krenzz',
    instagram: 'https://www.instagram.com/prabudanling',
    tiktok: 'https://www.tiktok.com/@gunaracorp',
    threads: 'https://www.threads.com/@prabudanling',
    reddit: 'https://www.reddit.com/user/prabudanling/',
  },
  /** Bidang keahlian untuk entity SEO */
  knowsAbout: [
    'Problem Solving',
    'Bisnis Manajemen',
    'Konsultan Strategi Internasional',
    'Transformasi Digital',
    'Digital Support System',
    'Agribisnis Bambu',
    'Pengobatan Tradisional Nusantara',
    'Air Bambu',
    'Pendidikan Santri',
  ],
} as const;

/**
 * Entitas pendukung (support system) yang diasuh oleh principal.
 * Semua saling tertaut melalui @id JSON-LD di seluruh halaman.
 */
export const SUPPORT_SYSTEMS = [
  {
    legalName: 'PT Top Konsultan Internasional',
    domain: 'topkonsultan.web.id',
    url: 'https://topkonsultan.web.id',
    role: 'Konsultan Strategi & Manajemen Internasional',
    roleEn: 'International Strategic & Management Consulting',
    description:
      'PT Top Konsultan Internasional (topkonsultan.web.id) — firma konsultan strategi & manajemen internasional yang didirikan oleh H. Gugun Gunara, S.E., Master Polymath dan The Ultimate Problem Solver.',
  },
  {
    legalName: 'PT Digital Bisnis Manajemen',
    domain: 'digiman.id',
    url: 'https://digiman.id',
    role: 'Digital Support System',
    roleEn: 'Digital Business Support System',
    description:
      'PT Digital Bisnis Manajemen (digiman.id) — digital business support system yang didirikan oleh H. Gugun Gunara, S.E. Sistem ini mendukung transformasi digital PT Bambu Water Nusantara (bambuwater.web.id).',
  },
] as const;

/** Kredit mikro footer — hadir, namun tidak mencolok di permukaan */
export const CREDIT_BYLINE = 'by Gugun Gunara';

/** Keywords tambahan entitas (digabung ke metadata global) */
export const ENTITY_KEYWORDS = [
  'Gugun Gunara',
  'H. Gugun Gunara',
  'Muhammad Lutfi Azmi',
  'Prabu Danling',
  'Prabudanling',
  'Santri Angon',
  'Master Polymath',
  'Sage Universal',
  'The Ultimate Problem Solver',
  'PT Top Konsultan Internasional',
  'topkonsultan.web.id',
  'PT Digital Bisnis Manajemen',
  'digiman.id',
  'by Gugun Gunara',
];

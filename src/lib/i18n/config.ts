/**
 * KONFIGURASI INTERNASIONALISASI — bambuwater.web.id
 * 30 bahasa teratas dunia. Prioritas: Indonesia (default) → English → 中文.
 * Routing tetap hash-based: #/{locale}/{slug} — locale default (id) tanpa prefix.
 */

export const DEFAULT_LOCALE = 'id' as const;

export type LocaleMeta = {
  /** Kode BCP-47 singkat */
  code: string;
  /** Nama asli bahasa (tampil di switcher) */
  native: string;
  /** Nama Inggris (sub-label) */
  english: string;
  /** Flag emoji */
  flag: string;
  /** og:locale format */
  og: string;
  /** RTL? */
  rtl: boolean;
  /** Urutan tampil di switcher (prioritas id/en/zh di atas) */
  order: number;
};

export const LOCALES: LocaleMeta[] = [
  { code: 'id', native: 'Bahasa Indonesia', english: 'Indonesian', flag: '🇮🇩', og: 'id_ID', rtl: false, order: 1 },
  { code: 'en', native: 'English', english: 'English', flag: '🇬🇧', og: 'en_US', rtl: false, order: 2 },
  { code: 'zh', native: '中文', english: 'Mandarin Chinese', flag: '🇨🇳', og: 'zh_CN', rtl: false, order: 3 },
  { code: 'es', native: 'Español', english: 'Spanish', flag: '🇪🇸', og: 'es_ES', rtl: false, order: 4 },
  { code: 'hi', native: 'हिन्दी', english: 'Hindi', flag: '🇮🇳', og: 'hi_IN', rtl: false, order: 5 },
  { code: 'ar', native: 'العربية', english: 'Arabic', flag: '🇸🇦', og: 'ar_AR', rtl: true, order: 6 },
  { code: 'fr', native: 'Français', english: 'French', flag: '🇫🇷', og: 'fr_FR', rtl: false, order: 7 },
  { code: 'bn', native: 'বাংলা', english: 'Bengali', flag: '🇧🇩', og: 'bn_IN', rtl: false, order: 8 },
  { code: 'pt', native: 'Português', english: 'Portuguese', flag: '🇧🇷', og: 'pt_BR', rtl: false, order: 9 },
  { code: 'ru', native: 'Русский', english: 'Russian', flag: '🇷🇺', og: 'ru_RU', rtl: false, order: 10 },
  { code: 'ur', native: 'اردو', english: 'Urdu', flag: '🇵🇰', og: 'ur_PK', rtl: true, order: 11 },
  { code: 'de', native: 'Deutsch', english: 'German', flag: '🇩🇪', og: 'de_DE', rtl: false, order: 12 },
  { code: 'ja', native: '日本語', english: 'Japanese', flag: '🇯🇵', og: 'ja_JP', rtl: false, order: 13 },
  { code: 'mr', native: 'मराठी', english: 'Marathi', flag: '🇮🇳', og: 'mr_IN', rtl: false, order: 14 },
  { code: 'te', native: 'తెలుగు', english: 'Telugu', flag: '🇮🇳', og: 'te_IN', rtl: false, order: 15 },
  { code: 'tr', native: 'Türkçe', english: 'Turkish', flag: '🇹🇷', og: 'tr_TR', rtl: false, order: 16 },
  { code: 'ta', native: 'தமிழ்', english: 'Tamil', flag: '🇮🇳', og: 'ta_IN', rtl: false, order: 17 },
  { code: 'vi', native: 'Tiếng Việt', english: 'Vietnamese', flag: '🇻🇳', og: 'vi_VN', rtl: false, order: 18 },
  { code: 'ko', native: '한국어', english: 'Korean', flag: '🇰🇷', og: 'ko_KR', rtl: false, order: 19 },
  { code: 'it', native: 'Italiano', english: 'Italian', flag: '🇮🇹', og: 'it_IT', rtl: false, order: 20 },
  { code: 'th', native: 'ไทย', english: 'Thai', flag: '🇹🇭', og: 'th_TH', rtl: false, order: 21 },
  { code: 'fa', native: 'فارسی', english: 'Persian', flag: '🇮🇷', og: 'fa_IR', rtl: true, order: 22 },
  { code: 'pl', native: 'Polski', english: 'Polish', flag: '🇵🇱', og: 'pl_PL', rtl: false, order: 23 },
  { code: 'nl', native: 'Nederlands', english: 'Dutch', flag: '🇳🇱', og: 'nl_NL', rtl: false, order: 24 },
  { code: 'uk', native: 'Українська', english: 'Ukrainian', flag: '🇺🇦', og: 'uk_UA', rtl: false, order: 25 },
  { code: 'my', native: 'မြန်မာ', english: 'Burmese', flag: '🇲🇲', og: 'my_MM', rtl: false, order: 26 },
  { code: 'sw', native: 'Kiswahili', english: 'Swahili', flag: '🇰🇪', og: 'sw_KE', rtl: false, order: 27 },
  { code: 'fil', native: 'Filipino', english: 'Filipino', flag: '🇵🇭', og: 'fil_PH', rtl: false, order: 28 },
  { code: 'ms', native: 'Bahasa Melayu', english: 'Malay', flag: '🇲🇾', og: 'ms_MY', rtl: false, order: 29 },
  { code: 'he', native: 'עברית', english: 'Hebrew', flag: '🇮🇱', og: 'he_IL', rtl: true, order: 30 },
];

export const LOCALE_CODES = LOCALES.map((l) => l.code);
export type Locale = (typeof LOCALE_CODES)[number];

const LOCALE_SET = new Set<string>(LOCALE_CODES);

export function isLocale(x: string): x is Locale {
  return LOCALE_SET.has(x);
}

export function localeMeta(code: string): LocaleMeta {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}

/** Daftar locale urut prioritas untuk switcher */
export const LOCALES_SORTED = [...LOCALES].sort((a, b) => a.order - b.order);

/** RTL locales untuk atribut dir */
export const RTL_LOCALES = new Set(LOCALES.filter((l) => l.rtl).map((l) => l.code));

/* ============ PARSER HASH ============ */

export type ParsedHash = { locale: Locale; slug: string };

/**
 * Parse "#/{locale}/{slug}" → { locale, slug }.
 * "#/faq" → { id, faq } · "#/en/faq" → { en, faq } · "#/" / "" → { id, beranda }.
 */
export function parseHash(hash: string): ParsedHash {
  const raw = hash.replace(/^#\/?/, '').trim();
  if (raw === '') return { locale: DEFAULT_LOCALE, slug: 'beranda' };
  const segs = raw.split('/').filter(Boolean);
  let locale: Locale = DEFAULT_LOCALE;
  if (segs.length > 0 && isLocale(segs[0])) {
    locale = segs[0];
    segs.shift();
  }
  const slug = segs.join('/') || 'beranda';
  return { locale, slug };
}

/** Bangun hash URL — locale default TANPA prefix agar URL bersih (SEO). */
export function buildHash(locale: Locale, slug: string): string {
  const s = slug === '' || slug === 'beranda' ? '' : `/${slug}`;
  return locale === DEFAULT_LOCALE ? `#${s}` : `#/${locale}${s}`;
}

/** href untuk halaman pada locale tertentu (absolute, untuk hreflang/sitemap/canonical).
 *  Locale HANYA di hash — tidak ada path prefix (route Next tetap satu: /). */
export function localeUrl(locale: Locale, slug: string, siteUrl: string): string {
  const slugPath = slug === '' || slug === 'beranda' ? '' : `/${slug}`;
  if (locale === DEFAULT_LOCALE) {
    return slugPath === '' ? `${siteUrl}/` : `${siteUrl}/#${slugPath}`;
  }
  return `${siteUrl}/#/${locale}${slugPath}`;
}

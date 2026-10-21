'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import { DEFAULT_LOCALE, LOCALES, localeMeta, parseHash, buildHash, type Locale } from './config';

/** Dictionary longgar — bentuk mengikuti compiled/id.json */
export type Dictionary = any;

/** Merge rekursif — array & primitive diganti penuh, objek digabung */
export function deepMerge(base: any, overlay: any): any {
  if (overlay === undefined || overlay === null) return base;
  if (Array.isArray(base) || Array.isArray(overlay)) return overlay ?? base;
  if (typeof base === 'object' && typeof overlay === 'object') {
    const out: any = { ...base };
    for (const k of Object.keys(overlay)) out[k] = deepMerge(base?.[k], overlay[k]);
    return out;
  }
  return overlay;
}

/** id = sumber kebenaran utama (selalu lengkap) */
import idSource from './dictionaries/compiled/id.json';
import enSource from './dictionaries/compiled/en.json';
import zhSource from './dictionaries/compiled/zh.json';

/** 3 bahasa prioritas dimuat eager (id → en → locale); 27 lainnya lazy */
const EAGER: Partial<Record<Locale, Dictionary>> = {
  id: idSource,
  en: deepMerge(idSource, enSource),
  zh: deepMerge(idSource, zhSource),
};

/** Loader lazy untuk 27 bahasa lain (chunk terpisah) */
const LAZY_LOADERS: Partial<Record<Locale, () => Promise<{ default: Dictionary }>>> = {
  es: () => import('./dictionaries/compiled/es.json'),
  hi: () => import('./dictionaries/compiled/hi.json'),
  ar: () => import('./dictionaries/compiled/ar.json'),
  fr: () => import('./dictionaries/compiled/fr.json'),
  bn: () => import('./dictionaries/compiled/bn.json'),
  pt: () => import('./dictionaries/compiled/pt.json'),
  ru: () => import('./dictionaries/compiled/ru.json'),
  ur: () => import('./dictionaries/compiled/ur.json'),
  de: () => import('./dictionaries/compiled/de.json'),
  ja: () => import('./dictionaries/compiled/ja.json'),
  mr: () => import('./dictionaries/compiled/mr.json'),
  te: () => import('./dictionaries/compiled/te.json'),
  tr: () => import('./dictionaries/compiled/tr.json'),
  ta: () => import('./dictionaries/compiled/ta.json'),
  vi: () => import('./dictionaries/compiled/vi.json'),
  ko: () => import('./dictionaries/compiled/ko.json'),
  it: () => import('./dictionaries/compiled/it.json'),
  th: () => import('./dictionaries/compiled/th.json'),
  fa: () => import('./dictionaries/compiled/fa.json'),
  pl: () => import('./dictionaries/compiled/pl.json'),
  nl: () => import('./dictionaries/compiled/nl.json'),
  uk: () => import('./dictionaries/compiled/uk.json'),
  my: () => import('./dictionaries/compiled/my.json'),
  sw: () => import('./dictionaries/compiled/sw.json'),
  fil: () => import('./dictionaries/compiled/fil.json'),
  ms: () => import('./dictionaries/compiled/ms.json'),
  he: () => import('./dictionaries/compiled/he.json'),
};

const cache = new Map<Locale, Dictionary>();

/* ============ STORE LOCALE (sinkron dengan hash URL) ============ */

let currentLocale: Locale = DEFAULT_LOCALE;
const listeners = new Set<() => void>();

if (typeof window !== 'undefined') {
  const emit = () => {
    const m = window.location.hash.match(/^#\/([a-z]{2,4})(\/|$)/);
    const next =
      m && LOCALES.some((l) => l.code === m[1]) ? (m[1] as Locale) : DEFAULT_LOCALE;
    if (next !== currentLocale) {
      currentLocale = next;
      listeners.forEach((fn) => fn());
    }
  };
  window.addEventListener('hashchange', emit);
  emit();
}

function subscribeLocale(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

const getLocaleSnapshot = () => currentLocale;
const getLocaleServer = () => DEFAULT_LOCALE as Locale;

/** Hook locale — aman hidrasi (render pertama selalu 'id', lalu sinkron hash) */
export function useLocale(): Locale {
  return useSyncExternalStore(subscribeLocale, getLocaleSnapshot, getLocaleServer);
}

/** Ganti bahasa global — menulis hash dengan prefix locale, slug dipertahankan.
 * WAJIB lewat parseHash/buildHash bersama (config.ts) — parser inline terbukti
 * gagal untuk hash locale-only (#/en) yang membuat switch balik ke id macet. */
export function setGlobalLocale(next: Locale) {
  if (typeof window === 'undefined') return;
  const { slug } = parseHash(window.location.hash);
  const target = buildHash(next, slug);
  if (window.location.hash === target || (target === '#' && window.location.hash === '')) {
    listeners.forEach((fn) => fn());
  } else {
    window.location.hash = target;
  }
}

/* ============ CONTEXT ============ */

type I18nValue = {
  locale: Locale;
  rtl: boolean;
  /** Dictionary bahasa aktif (fallback: locale → en → id) */
  t: Dictionary;
  /** Dictionary sumber id (untuk fallback manual bila perlu) */
  tId: Dictionary;
  setLocale: (l: Locale) => void;
};

const I18nContext = createContext<I18nValue>({
  locale: DEFAULT_LOCALE,
  rtl: false,
  t: idSource,
  tId: idSource,
  setLocale: setGlobalLocale,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useLocale();
  const [, forceUpdate] = useReducer((x: number) => x + 1, 0);

  /* Muat dictionary lazy saat locale bukan id/en/zh — setState hanya async (aman lint) */
  useEffect(() => {
    if (EAGER[locale] || cache.has(locale)) return;
    let alive = true;
    LAZY_LOADERS[locale]?.()
      .then((m) => {
        const merged = deepMerge(idSource, m.default);
        cache.set(locale, merged);
        if (alive) forceUpdate();
      })
      .catch(() => {
        /* gagal muat → tetap fallback id */
      });
    return () => {
      alive = false;
    };
  }, [locale]);

  /* Hydration: render pertama selalu id (server snapshot), lalu swap via store locale */
  const dict = EAGER[locale] ?? cache.get(locale) ?? idSource;

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      rtl: localeMeta(locale).rtl,
      t: dict,
      tId: idSource,
      setLocale: setGlobalLocale,
    }),
    [locale, dict]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  return useContext(I18nContext);
}

/** Helper mengambil meta halaman terjemahan: t.pages[slug] ?? id */
export function pageMeta(t: Dictionary, slug: string): any {
  const p = t?.pages?.[slug];
  if (p && (p.h1 || p.seoTitle)) return p;
  return idSource.pages[slug] ?? {};
}

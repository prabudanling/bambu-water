'use client';

import { useCallback, useSyncExternalStore } from 'react';
import {
  buildHash,
  DEFAULT_LOCALE,
  isLocale,
  parseHash,
  type Locale,
  type ParsedHash,
} from '@/lib/i18n/config';

function parseCurrent(): ParsedHash {
  if (typeof window === 'undefined') return { locale: DEFAULT_LOCALE, slug: 'beranda' };
  return parseHash(window.location.hash);
}

function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback);
  window.addEventListener('popstate', callback);
  return () => {
    window.removeEventListener('hashchange', callback);
    window.removeEventListener('popstate', callback);
  };
}

/* ============ PATCH NAVIGASI Next.js Link ============
 * <Link href="#/slug"> Next.js memakai history.pushState — yang TIDAK
 * memicu event 'hashchange'. Patch: setiap pushState/replaceState yang
 * BENAR-BENAR mengubah hash kita dispatch ulang event 'hashchange'.
 * ReplaceState dengan hash identik (normalisasi URL saat hidrasi Next.js)
 * TIDAK didispatch — mencegah re-render di tengah hidrasi (mismatch). */
if (typeof window !== 'undefined') {
  const g = window as typeof window & { __bwnHashPatched2?: boolean };
  if (!g.__bwnHashPatched2) {
    g.__bwnHashPatched2 = true;
    for (const method of ['pushState', 'replaceState'] as const) {
      const original = history[method].bind(history);
      history[method] = function patched(this: History, ...args: Parameters<History['pushState']>) {
        const hashBefore = location.hash;
        const result = original(...args);
        if (location.hash !== hashBefore) {
          /* Async — hindari update state sinkron di dalam fase efek React
           * (mencegah "useInsertionEffect must not schedule updates"). */
          window.setTimeout(() => {
            try {
              window.dispatchEvent(new Event('hashchange'));
            } catch {
              /* abaikan — jangan pernah gagalkan navigasi */
            }
          }, 0);
        }
        return result;
      };
    }
  }
}

const getSnapshot = () => {
  const { locale, slug } = parseCurrent();
  return `${locale}|${slug}`;
};
const getServerSnapshot = () => `${DEFAULT_LOCALE}|beranda`;

/**
 * Router hash locale-aware: #/{locale}/{slug} → { locale, slug }.
 * Beranda = '' atau '#/'. Locale default (id) tanpa prefix.
 * Berbasis useSyncExternalStore (tanpa setState di effect — aman hidrasi).
 */
export function useHashRoute() {
  const combined = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [localeStr, slug] = combined.split('|');
  const locale = (isLocale(localeStr) ? localeStr : DEFAULT_LOCALE) as Locale;

  /** Navigasi dalam locale aktif */
  const navigate = useCallback(
    (next: string) => {
      const current = parseCurrent();
      const target = buildHash(current.locale, next);
      if (window.location.hash === target) {
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      } else {
        window.location.hash = target;
      }
    },
    []
  );

  /** Ganti bahasa — tetap di halaman yang sama */
  const setLocale = useCallback((next: Locale) => {
    const current = parseCurrent();
    const target = buildHash(next, current.slug);
    if (window.location.hash === target) {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    } else {
      window.location.hash = target;
    }
  }, []);

  return { locale, slug, navigate, setLocale };
}

/** Setter elemen meta di <head> */
export function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = url;
}

/** Hapus semua link hreflang lama lalu tulis ulang (per halaman) */
export function setHreflang(alternates: Array<{ locale: string; url: string }>) {
  document.head
    .querySelectorAll('link[data-i18n-alternate="1"]')
    .forEach((el) => el.remove());
  for (const alt of alternates) {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = alt.locale;
    link.href = alt.url;
    link.setAttribute('data-i18n-alternate', '1');
    document.head.appendChild(link);
  }
}

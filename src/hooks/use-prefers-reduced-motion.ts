'use client';

import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener('change', onChange);
  return () => mql.removeEventListener('change', onChange);
}

/** Nilai nyata di client — dipakai SETELAH hidrasi selesai. */
const getSnapshot = () => window.matchMedia(QUERY).matches;

/** Nilai SSR — pastikan render hidrasi 100% identik dengan HTML server. */
const getServerSnapshot = () => false;

/**
 * Pengganti aman-hidrasi untuk `useReducedMotion` dari framer-motion.
 *
 * framer-motion membaca `window.matchMedia` SECARA SINKRON di render pertama
 * (initPrefersReducedMotion di motion-dom) sehingga user dengan pengaturan
 * OS "reduce motion" (mis. mode hemat baterai Android / animasi dimatikan di
 * Windows) mendapat render hidrasi BERBEDA dari HTML server → hydration
 * mismatch ("A tree hydrated but some attributes of the server rendered HTML
 * didn't match the client properties").
 *
 * useSyncExternalStore memakai getServerSnapshot SAAT HIDRASI (false, sama
 * dengan SSR) lalu sinkron ke nilai asli setelah hidrasi — tanpa mismatch.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

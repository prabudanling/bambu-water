'use client';

import { useSyncExternalStore } from 'react';

/** Tahun saat modul dimuat — deterministik per proses (server & klien sama di praktik). */
const INITIAL_YEAR = new Date().getFullYear();

/** Cek tahun tiap menit — cukup untuk menangkap pergantian tahun di tengah sesi. */
function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 60_000);
  return () => window.clearInterval(id);
}

const getSnapshot = () => new Date().getFullYear();
const getServerSnapshot = () => INITIAL_YEAR;

/**
 * Tahun berjalan untuk teks © / "{years}+ tahun" — aman hidrasi.
 *
 * `new Date()` langsung di render adalah sumber klasik hydration mismatch
 * (beda zona waktu / pergantian tahun antara SSR dan klien). Hook ini
 * memakai useSyncExternalStore:
 * 1. Render hidrasi memakai getServerSnapshot (identik dengan SSR);
 * 2. Setelah hidrasi, snapshot klien (tahun asli) dipakai — bukan hidrasi lagi;
 * 3. Interval 60 dtk menangkap pergantian tahun di tengah sesi.
 */
export function useCurrentYear(): number {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

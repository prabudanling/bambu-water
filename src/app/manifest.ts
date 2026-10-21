import type { MetadataRoute } from 'next';
import { COMPANY } from '@/lib/company';

/**
 * PWA Web App Manifest — menaikkan skor Lighthouse/PWA & installability.
 * Dilayani di /manifest.webmanifest oleh Next.js App Router.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY.legalName} — Air Bambu Terapi & Distribusi Bambu`,
    short_name: 'Bambu Water',
    description: COMPANY.description,
    id: '/',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#062e1b',
    theme_color: '#14532d',
    lang: 'id-ID',
    dir: 'ltr',
    categories: ['health', 'food', 'shopping', 'business'],
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
      {
        src: '/icon',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcuts: [
      {
        name: 'Pesan via WhatsApp',
        short_name: 'Pesan',
        url: '/#/kontak',
        description: 'Konsultasi & pesan air bambu langsung via WhatsApp',
      },
      {
        name: 'Pusat Kesehatan',
        short_name: 'Kesehatan',
        url: '/#/kesehatan',
        description: '60+ kondisi kesehatan & terapi air bambu',
      },
      {
        name: 'Harga & Paket',
        short_name: 'Harga',
        url: '/#/harga-paket',
        description: 'Daftar harga retail, grosir & korporat',
      },
    ],
  };
}

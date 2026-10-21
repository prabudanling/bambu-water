import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { COMPANY, SITE_URL } from '@/lib/company';
import { PRINCIPAL, SUPPORT_SYSTEMS, ENTITY_KEYWORDS } from '@/lib/branding';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

/** Kata kunci utama situs — 25 halaman full SEO bambuwater.web.id */
const SITE_KEYWORDS = [
  'bambuwater.web.id',
  'bambu water nusantara',
  'PT Bambu Water Nusantara',
  'air bambu',
  'air bambu pengobatan',
  'air bambu tabib',
  'air bambu suling',
  'air tuak bambu',
  'air sadapan bambu',
  'manfaat air bambu',
  'khasiat air bambu',
  'air bambu untuk demam',
  'air bambu untuk diabetes',
  'air bambu gula darah',
  'air bambu batu ginjal',
  'air bambu kolesterol',
  'air bambu detoksifikasi',
  'air bambu untuk kulit',
  'silika organik bambu',
  'minuman silika alami',
  'terapi air bambu',
  'pengobatan tradisional bambu',
  'minuman sehat alami Indonesia',
  'minuman antioksidan alami',
  'air bambu grosir',
  'jual air bambu',
  'air bambu murah',
  'suplier air bambu',
  'distributor air bambu',
  'jual bambu berkualitas',
  'bambu petung',
  'bambu betung',
  'bambu wulung',
  'bambu apus',
  'bambu ori',
  'harga bambu per batang',
  'pengiriman bambu seluruh indonesia',
  'distribusi bambu indonesia',
  'suplier bambu konstruksi',
  'pengiriman massal air bambu',
  'kargo bambu antar pulau',
  'harga air bambu',
  'pabrik air bambu',
  'produsen air bambu',
  'bambu water indonesia',
  ...ENTITY_KEYWORDS,
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Bambu Water Nusantara — Air Bambu Terapi Pengobatan Alami & Distribusi Bambu Se-Indonesia | bambuwater.web.id',
    template: '%s | bambuwater.web.id',
  },
  description:
    'Situs resmi PT Bambu Water Nusantara (bambuwater.web.id) — produsen air bambu suling & air bambu tabib untuk pengobatan dan terapi kesehatan alami. Distribusi air bambu serta bambu berkualitas (Petung, Wulung, Apus, Ori) dalam jumlah besar ke seluruh kota Indonesia. WhatsApp 0813-1651-6524.',
  keywords: SITE_KEYWORDS,
  applicationName: COMPANY.name,
  authors: [
    { name: COMPANY.legalName, url: SITE_URL },
    { name: PRINCIPAL.name, url: SUPPORT_SYSTEMS[0].url },
  ],
  creator: `${SUPPORT_SYSTEMS[1].legalName} (${SUPPORT_SYSTEMS[1].domain})`,
  publisher: COMPANY.legalName,
  category: 'Kesehatan & Minuman Herbal',
  classification: 'Health & Wellness, Food & Beverage, Construction Materials',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: '/',
    languages: { 'id-ID': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: 'Bambu Water Nusantara — bambuwater.web.id',
    title:
      'Bambu Water Nusantara — Air Bambu Terapi Pengobatan Alami | bambuwater.web.id',
    description:
      'Air sadapan bambu murni untuk pengobatan & terapi kesehatan alami. Distribusi air bambu suling & bambu berkualitas dalam jumlah besar ke seluruh Indonesia. Kaya silika organik & antioksidan. WA 0813-1651-6524.',
    images: [
      {
        url: '/images/hero-bamboo.jpg',
        width: 1344,
        height: 768,
        alt: 'Hutan bambu Indonesia dengan tetesan air sadapan di ruas bambu muda — Bambu Water Nusantara',
        type: 'image/jpeg',
      },
      {
        url: '/images/product-water-bottle.jpg',
        width: 1344,
        height: 768,
        alt: 'Botol air bambu suling premium Bambu Water Nusantara',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bambu Water Nusantara — Air Bambu Terapi Pengobatan Alami',
    description:
      'Produsen air bambu suling & tabib untuk pengobatan alami. Distribusi bambu berkualitas massal se-Indonesia. bambuwater.web.id',
    images: ['/images/hero-bamboo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-image-preview:large': undefined,
    },
  },
  appleWebApp: {
    capable: true,
    title: 'Bambu Water Nusantara',
    statusBarStyle: 'black-translucent',
  },
  other: {
    'geo.region': 'ID-JB',
    'geo.placename': 'Tasikmalaya, Jawa Barat, Indonesia',
    'geo.position': '-7.350603;108.224586',
    ICBM: '-7.350603, 108.224586',
    'distribution': 'global',
    'rating': 'general',
    'revisit-after': '7 days',
    'language': 'Indonesian',
    'contact': COMPANY.whatsappDisplay,
    'creator': `${SUPPORT_SYSTEMS[1].legalName} — ${SUPPORT_SYSTEMS[1].roleEn}`,
    'owner': PRINCIPAL.formalName,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#14532d',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${playfair.variable} ${jakarta.variable} antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

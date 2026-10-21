'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useHashRoute, setMeta, setCanonical, setHreflang } from '@/hooks/use-hash-route';
import { getPageMeta } from '@/lib/pages-registry';
import { getAutoPage } from '@/lib/auto-pages';
import { AutoPageRenderer, isAutoSlug } from '@/components/pages/auto-pages-renderer';
import { I18nProvider, useI18n, pageMeta } from '@/lib/i18n/context';
import { localeMeta, localeUrl, LOCALES, type Locale } from '@/lib/i18n/config';
import { SITE_URL, COMPANY } from '@/lib/company';
import { ENTITY_KEYWORDS } from '@/lib/branding';

import { JsonLd } from '@/components/site/json-ld';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { WhatsAppFloat } from '@/components/site/whatsapp-float';
import { ScrollProgress, BackToTop } from '@/components/site/motion-primitives';
import { CommandPalette } from '@/components/site/command-palette';

import { HomePage } from '@/components/pages/home';
import { TentangKamiPage } from '@/components/pages/tentang-kami';
import { ApaItuAirBambuPage } from '@/components/pages/apa-itu-air-bambu';
import { ManfaatAirBambuPage } from '@/components/pages/manfaat-air-bambu';
import { KandunganNutrisiPage } from '@/components/pages/kandungan-nutrisi';
import { PengobatanPage } from '@/components/pages/air-bambu-pengobatan';
import { ArtikelIndexPage } from '@/components/pages/artikel-index';
import { ArticlePage } from '@/components/pages/article-page';
import { AirBambuSulingPage } from '@/components/pages/air-bambu-suling';
import { AirBambuTabibPage } from '@/components/pages/air-bambu-tabib';
import { BambuBerkualitasPage } from '@/components/pages/bambu-berkualitas';
import { ProsesProduksiPage } from '@/components/pages/proses-produksi';
import { PengirimanMassalPage } from '@/components/pages/pengiriman-massal';
import { JangkauanKotaPage } from '@/components/pages/jangkauan-kota';
import { HargaPaketPage } from '@/components/pages/harga-paket';
import { CaraPemesananPage } from '@/components/pages/cara-pemesanan';
import { TestimoniPage } from '@/components/pages/testimoni';
import { FaqPage } from '@/components/pages/faq';
import { KontakPage } from '@/components/pages/kontak';
import { KalkulatorKesehatanPage } from '@/components/pages/kalkulator-kesehatan';
import { PetaSitusPage } from '@/components/pages/peta-situs';
import { GlossariumPage } from '@/components/pages/glossarium';
import { PerbandinganPage } from '@/components/pages/perbandingan';
import { LacakPesananPage } from '@/components/pages/lacak-pesanan';
import { KarierPage } from '@/components/pages/karier';
import KebijakanPrivasiPage from '@/components/pages/kebijakan-privasi';
import SyaratKetentuanPage from '@/components/pages/syarat-ketentuan';

const ARTICLE_SLUGS = [
  'air-bambu-gula-darah',
  'air-bambu-batu-ginjal',
  'air-bambu-kolesterol',
  'air-bambu-detoksifikasi',
  'air-bambu-tulang-silika',
  'air-bambu-kecantikan',
  'sejarah-air-bambu',
];

const PAGE_MAP: Record<string, () => React.ReactElement> = {
  beranda: () => <HomePage />,
  'tentang-kami': () => <TentangKamiPage />,
  'apa-itu-air-bambu': () => <ApaItuAirBambuPage />,
  'manfaat-air-bambu': () => <ManfaatAirBambuPage />,
  'kandungan-nutrisi': () => <KandunganNutrisiPage />,
  'air-bambu-pengobatan': () => <PengobatanPage />,
  'air-bambu-suling': () => <AirBambuSulingPage />,
  'air-bambu-tabib': () => <AirBambuTabibPage />,
  'bambu-berkualitas': () => <BambuBerkualitasPage />,
  'proses-produksi': () => <ProsesProduksiPage />,
  'pengiriman-massal': () => <PengirimanMassalPage />,
  'jangkauan-kota': () => <JangkauanKotaPage />,
  'harga-paket': () => <HargaPaketPage />,
  'cara-pemesanan': () => <CaraPemesananPage />,
  artikel: () => <ArtikelIndexPage />,
  testimoni: () => <TestimoniPage />,
  faq: () => <FaqPage />,
  kontak: () => <KontakPage />,
  'kalkulator-kesehatan': () => <KalkulatorKesehatanPage />,
  'peta-situs': () => <PetaSitusPage />,
  glossarium: () => <GlossariumPage />,
  perbandingan: () => <PerbandinganPage />,
  'lacak-pesanan': () => <LacakPesananPage />,
  karier: () => <KarierPage />,
  'kebijakan-privasi': () => <KebijakanPrivasiPage />,
  'syarat-ketentuan': () => <SyaratKetentuanPage />,
};

function Shell() {
  const { slug } = useHashRoute();
  const { locale, t } = useI18n();

  /* ===== Metadata dinamis per halaman + per bahasa (SEO maksimal) =====
   * <title> TIDAK dirender sebagai JSX — dikelola via effect di bawah. */
  useEffect(() => {
    const metaId = getAutoPage(slug)?.meta ?? getPageMeta(slug);
    const tm = pageMeta(t, slug);
    const seoTitle = (tm.seoTitle as string) || metaId.seoTitle;
    const desc = (tm.metaDescription as string) || metaId.metaDescription;
    const kwBase = Array.isArray(tm.keywords) && tm.keywords.length > 0
      ? (tm.keywords as string[])
      : (metaId.keywords ?? []);
    /* Entity layer: nama pemilik & support system melekat di meta setiap halaman */
    const kw = [...kwBase, ...ENTITY_KEYWORDS].join(', ');
    const url = localeUrl(locale, slug, SITE_URL);

    setMeta('name', 'description', desc);
    setMeta('name', 'keywords', kw);
    setMeta('name', 'twitter:title', seoTitle);
    setMeta('name', 'twitter:description', desc);
    setMeta('property', 'og:title', seoTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:site_name', `${COMPANY.name} — bambuwater.web.id`);
    setMeta('property', 'og:locale', localeMeta(locale).og);

    /* og:locale:alternate — bahasa prioritas */
    document.head
      .querySelectorAll('meta[property="og:locale:alternate"][data-i18n="1"]')
      .forEach((el) => el.remove());
    for (const l of LOCALES.filter(
      (x) => x.code !== locale && ['en', 'zh', 'es', 'ar', 'ja', 'hi'].includes(x.code)
    )) {
      const el = document.createElement('meta');
      el.setAttribute('property', 'og:locale:alternate');
      el.setAttribute('content', l.og);
      el.setAttribute('data-i18n', '1');
      document.head.appendChild(el);
    }
    if (metaId.heroImage) setMeta('property', 'og:image', `${SITE_URL}${metaId.heroImage}`);
    setCanonical(url);

    /* hreflang — 30 locale + x-default */
    setHreflang([
      ...LOCALES.map((l) => ({ locale: l.code, url: localeUrl(l.code, slug, SITE_URL) })),
      { locale: 'x-default', url: `${SITE_URL}/` },
    ]);

    /* <html lang> & <html dir> (RTL untuk arab, urdu, farsi, ibrani) */
    const lm = localeMeta(locale);
    document.documentElement.lang = lm.code;
    document.documentElement.dir = lm.rtl ? 'rtl' : 'ltr';

    /* Bersihkan duplikat meta yang tersisa dari snapshot halaman sebelumnya */
    ['description', 'keywords'].forEach((n) => {
      const metas = Array.from(document.head.querySelectorAll<HTMLMetaElement>(`meta[name="${n}"]`));
      metas.slice(1).forEach((m2) => m2.remove());
    });

    /* Tulis <title> — pastikan hanya SATU title dengan teks benar.
     * Next.js memulihkan elemen <title> dari payload RSC SETELAH hidrasi;
     * observer 2 detik membalik restorasi tersebut (guard same-value). */
    const ours = `${seoTitle} | bambuwater.web.id`;
    const applyTitle = () => {
      const titles = document.head.querySelectorAll('title');
      if (titles.length === 0) {
        const el = document.createElement('title');
        el.textContent = ours;
        document.head.prepend(el);
      } else {
        if (titles[0].textContent !== ours) titles[0].textContent = ours;
        for (let i = 1; i < titles.length; i++) titles[i].remove();
      }
    };
    applyTitle();

    const observer = new MutationObserver(applyTitle);
    observer.observe(document.head, { subtree: true, childList: true, characterData: true });
    const disarm = window.setTimeout(() => observer.disconnect(), 2000);
    const sweep = window.setTimeout(applyTitle, 2200);

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    return () => {
      observer.disconnect();
      window.clearTimeout(disarm);
      window.clearTimeout(sweep);
    };
  }, [slug, locale, t]);

  const renderPage = () => {
    /* Halaman programatik: kota, kondisi kesehatan, layanan, jenis bambu + indeks */
    if (isAutoSlug(slug)) return <AutoPageRenderer slug={slug} />;
    if (PAGE_MAP[slug]) return PAGE_MAP[slug]();
    if (ARTICLE_SLUGS.includes(slug)) return <ArticlePage slug={slug} />;
    return PAGE_MAP.beranda();
  };

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <JsonLd locale={locale} />
      <Navbar activeSlug={slug} />
      <CommandPalette />

      <main className="flex-1" id="konten-utama">
        {/* TANPA AnimatePresence mode="wait" — navigasi cepat bisa membuat exit
         * animation macet dan membekukan seluruh subtree halaman. Enter animation
         * saja: halaman lama langsung diganti, halaman baru fade+slide masuk. */}
        <motion.div
          key={`${locale}|${slug}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {renderPage()}
        </motion.div>
      </main>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}

export function AppShell() {
  return (
    <I18nProvider>
      <Shell />
    </I18nProvider>
  );
}

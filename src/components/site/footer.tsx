'use client';

import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY, OFFICES, waLink } from '@/lib/company';
import { PRINCIPAL, SUPPORT_SYSTEMS, CREDIT_BYLINE } from '@/lib/branding';
import { useI18n } from '@/lib/i18n/context';
import { useCurrentYear } from '@/hooks/use-current-year';
import { Logo } from './logo';

type FooterLink = { slug: string; href: string; label: string };
type FooterColumn = { key: string; heading: string; links: FooterLink[] };

/** Sitemap footer — halaman inti + alat baru bambuwater.web.id */
const FOOTER_NAV: FooterColumn[] = [
  {
    key: 'explore',
    heading: 'Jelajahi',
    links: [
      { slug: 'beranda', href: '#/', label: 'Beranda' },
      { slug: 'tentang-kami', href: '#/tentang-kami', label: 'Tentang Kami' },
      { slug: 'testimoni', href: '#/testimoni', label: 'Testimoni' },
      { slug: 'faq', href: '#/faq', label: 'FAQ' },
      { slug: 'karier', href: '#/karier', label: 'Karier' },
      { slug: 'kontak', href: '#/kontak', label: 'Kontak' },
    ],
  },
  {
    key: 'health',
    heading: 'Kesehatan',
    links: [
      { slug: 'apa-itu-air-bambu', href: '#/apa-itu-air-bambu', label: 'Apa Itu Air Bambu' },
      { slug: 'manfaat-air-bambu', href: '#/manfaat-air-bambu', label: 'Manfaat Air Bambu' },
      { slug: 'kandungan-nutrisi', href: '#/kandungan-nutrisi', label: 'Kandungan Nutrisi' },
      { slug: 'air-bambu-pengobatan', href: '#/air-bambu-pengobatan', label: 'Untuk Pengobatan' },
      { slug: 'sejarah-air-bambu', href: '#/sejarah-air-bambu', label: 'Sejarah Air Bambu' },
    ],
  },
  {
    key: 'products',
    heading: 'Produk & Layanan',
    links: [
      { slug: 'air-bambu-suling', href: '#/air-bambu-suling', label: 'Air Bambu Suling' },
      { slug: 'air-bambu-tabib', href: '#/air-bambu-tabib', label: 'Air Bambu Tabib' },
      { slug: 'bambu-berkualitas', href: '#/bambu-berkualitas', label: 'Bambu Berkualitas' },
      { slug: 'harga-paket', href: '#/harga-paket', label: 'Harga & Paket' },
      { slug: 'pengiriman-massal', href: '#/pengiriman-massal', label: 'Pengiriman Massal' },
      { slug: 'jangkauan-kota', href: '#/jangkauan-kota', label: 'Jangkauan Kota' },
      { slug: 'proses-produksi', href: '#/proses-produksi', label: 'Proses Produksi' },
      { slug: 'cara-pemesanan', href: '#/cara-pemesanan', label: 'Cara Pemesanan' },
    ],
  },
  {
    key: 'articles',
    heading: 'Artikel Kesehatan',
    links: [
      { slug: 'artikel', href: '#/artikel', label: 'Semua Artikel' },
      { slug: 'air-bambu-gula-darah', href: '#/air-bambu-gula-darah', label: 'Air Bambu & Gula Darah' },
      { slug: 'air-bambu-batu-ginjal', href: '#/air-bambu-batu-ginjal', label: 'Air Bambu & Batu Ginjal' },
      { slug: 'air-bambu-kolesterol', href: '#/air-bambu-kolesterol', label: 'Air Bambu & Kolesterol' },
      { slug: 'air-bambu-detoksifikasi', href: '#/air-bambu-detoksifikasi', label: 'Detoksifikasi Alami' },
      { slug: 'air-bambu-tulang-silika', href: '#/air-bambu-tulang-silika', label: 'Tulang & Sendi' },
      { slug: 'air-bambu-kecantikan', href: '#/air-bambu-kecantikan', label: 'Kecantikan & Kulit' },
    ],
  },
  {
    key: 'programatik',
    heading: 'Jelajahi Lebih Lanjut',
    links: [
      { slug: 'kesehatan', href: '#/kesehatan', label: 'Pusat Kesehatan (60+ Kondisi)' },
      { slug: 'layanan', href: '#/layanan', label: 'Katalog Layanan' },
      { slug: 'kota', href: '#/kota', label: 'Jangkauan 2.500+ Kota' },
      { slug: 'bambu', href: '#/bambu', label: 'Panduan Jenis Bambu' },
      { slug: 'kota/jakarta-selatan', href: '#/kota/jakarta-selatan', label: 'Air Bambu Jakarta Selatan' },
      { slug: 'kota/bandung', href: '#/kota/bandung', label: 'Air Bambu Bandung' },
      { slug: 'kota/surabaya', href: '#/kota/surabaya', label: 'Air Bambu Surabaya' },
      { slug: 'air-bambu-untuk/asam-urat', href: '#/air-bambu-untuk/asam-urat', label: 'Air Bambu & Asam Urat' },
    ],
  },
  {
    key: 'tools',
    heading: 'Alat & Bantuan',
    links: [
      { slug: 'kalkulator-kesehatan', href: '#/kalkulator-kesehatan', label: 'Kalkulator Kesehatan' },
      { slug: 'perbandingan', href: '#/perbandingan', label: 'Perbandingan Minuman' },
      { slug: 'lacak-pesanan', href: '#/lacak-pesanan', label: 'Lacak Pesanan' },
      { slug: 'glossarium', href: '#/glossarium', label: 'Glossarium Istilah' },
      { slug: 'peta-situs', href: '#/peta-situs', label: 'Peta Situs' },
      { slug: 'kebijakan-privasi', href: '#/kebijakan-privasi', label: 'Kebijakan Privasi' },
      { slug: 'syarat-ketentuan', href: '#/syarat-ketentuan', label: 'Syarat & Ketentuan' },
    ],
  },
];

export function Footer() {
  const { t } = useI18n();
  const s = t.ui.footer;
  const common = t.ui.common;
  const year = useCurrentYear();

  /* Label aktif dari dictionary (t.pages[slug].navLabel / articleLinks); fallback label id */
  const resolveLabel = (colKey: string, slug: string, index: number, fallback: string): string => {
    if (colKey === 'articles') {
      const arr = s.articleLinks;
      if (Array.isArray(arr) && typeof arr[index] === 'string') return arr[index];
      return fallback;
    }
    const overridden = s.labelOverrides?.[slug];
    if (typeof overridden === 'string') return overridden;
    const nav = t.pages?.[slug]?.navLabel;
    if (typeof nav === 'string' && nav.length > 0) return nav;
    return fallback;
  };

  const columns = FOOTER_NAV.map((col) => ({
    heading: s.columns?.[col.key] ?? col.heading,
    links: col.links.map((l, i) => ({ ...l, label: resolveLabel(col.key, l.slug, i, l.label) })),
  }));

  return (
    <footer className="relative mt-auto bg-emerald-950 text-emerald-50" aria-label={s.ariaLabel}>
      {/* CTA band */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden
          className="animate-soft-pulse absolute -left-20 top-0 h-64 w-64 rounded-full bg-teal-500/15 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-soft-pulse absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl"
          style={{ animationDelay: '2s' }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-14 text-center sm:px-6 md:flex-row md:text-left">
          <div>
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              {s.ctaTitle} <span className="text-shimmer-gold">{s.ctaHighlight}</span>
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-emerald-100/75">
              {s.ctaDesc} {s.ctaConsult} {COMPANY.whatsappDisplay}.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href={waLink(s.waMessage)}
              target="_blank"
              rel="noopener noreferrer external"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-7 py-4 text-base font-bold text-white shadow-xl shadow-emerald-900/40 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-2xl"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {s.waCta} {COMPANY.whatsappDisplay}
            </a>
            <a
              href="#/kontak"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 px-7 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold"
            >
              {s.ctaForm}
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </div>
        </div>
      </div>

      {/* Kolom footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo dark />
          <p className="mt-4 text-sm leading-relaxed text-emerald-100/70">
            {COMPANY.description}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-emerald-100/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
            <span className="font-semibold text-white">{COMPANY.domain}</span>
            — {common.officialSite}
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Instagram, href: COMPANY.social.instagram, label: s.socialLabels?.[0] ?? 'Instagram Bambu Water Nusantara' },
              { icon: Facebook, href: COMPANY.social.facebook, label: s.socialLabels?.[1] ?? 'Facebook Bambu Water Nusantara' },
              { icon: Linkedin, href: COMPANY.social.linkedin, label: s.socialLabels?.[2] ?? 'LinkedIn Bambu Water Nusantara' },
            ].map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer external"
                aria-label={soc.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-emerald-100 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-gold/20 hover:text-gold"
              >
                <soc.icon className="h-4.5 w-4.5" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <nav aria-label={`${s.navAria} ${col.heading}`} key={col.heading}>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-gold">{col.heading}</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-emerald-100/75 transition-colors hover:text-white hover:underline hover:decoration-gold/60 hover:underline-offset-4"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Kontak baris */}
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 text-sm text-emerald-100/75 sm:px-6 md:grid-cols-3">
          <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-3 transition-colors hover:text-white">
            <Phone className="h-4.5 w-4.5 shrink-0 text-teal-300" aria-hidden />
            {COMPANY.phone} ({s.phoneNote})
          </a>
          <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 break-all transition-colors hover:text-white">
            <Mail className="h-4.5 w-4.5 shrink-0 text-teal-300" aria-hidden />
            {COMPANY.email}
          </a>
          <span className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-300" aria-hidden />
            <span>
              <strong className="text-white">{OFFICES[0].label}:</strong> {OFFICES[0].address}
              <span className="mt-1 block text-xs text-emerald-100/60">
                {OFFICES[1].label}: {OFFICES[1].city} • {OFFICES[2].label}: {OFFICES[2].city} — {s.fullAddressNote}
              </span>
            </span>
          </span>
        </div>
      </div>

      {/* Bar bawah */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-emerald-100/60 sm:px-6 md:flex-row md:text-left">
          <p suppressHydrationWarning>
            © {year} {COMPANY.legalName} • {COMPANY.domain}. {common.copyright}
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
              {common.legalPt}
            </span>
            <span aria-hidden className="hidden md:inline">•</span>
            <span>{common.notMedicalAdvice}</span>
          </p>
        </div>
      </div>

      {/* Kredit sistem — hadir di dalam sistem, halus di permukaan (entity layer) */}
      <div className="border-t border-white/5" aria-label="Sistem pendukung digital">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-3 text-center text-[10px] leading-relaxed text-emerald-100/30 sm:px-6">
          <span title={`${PRINCIPAL.formalName} — ${PRINCIPAL.jobTitle}`}>{CREDIT_BYLINE}</span>
          <span aria-hidden>•</span>
          <a
            href={SUPPORT_SYSTEMS[0].url}
            target="_blank"
            rel="noopener noreferrer external"
            title={`${SUPPORT_SYSTEMS[0].legalName} — ${SUPPORT_SYSTEMS[0].role}`}
            className="transition-colors duration-300 hover:text-emerald-100/60 hover:underline hover:underline-offset-2"
          >
            {SUPPORT_SYSTEMS[0].legalName}
          </a>
          <span aria-hidden>•</span>
          <a
            href={SUPPORT_SYSTEMS[1].url}
            target="_blank"
            rel="noopener noreferrer external"
            title={`${SUPPORT_SYSTEMS[1].legalName} — ${SUPPORT_SYSTEMS[1].role} (support system bambuwater.web.id)`}
            className="transition-colors duration-300 hover:text-emerald-100/60 hover:underline hover:underline-offset-2"
          >
            {SUPPORT_SYSTEMS[1].legalName} ({SUPPORT_SYSTEMS[1].domain})
          </a>
        </div>
      </div>
    </footer>
  );
}

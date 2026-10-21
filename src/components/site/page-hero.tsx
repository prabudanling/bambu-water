'use client';

import { motion } from 'framer-motion';
import { ChevronRight, CalendarClock } from 'lucide-react';
import { SITE_URL, COMPANY } from '@/lib/company';
import { useI18n, pageMeta } from '@/lib/i18n/context';

/** JSON-LD BreadcrumbList per halaman */
function BreadcrumbJsonLd({ slug, label, homeLabel }: { slug: string; label: string; homeLabel: string }) {
  const items = [
    { '@type': 'ListItem', position: 1, name: homeLabel, item: `${SITE_URL}/` },
    {
      '@type': 'ListItem',
      position: 2,
      name: label,
      item: slug === 'beranda' ? `${SITE_URL}/` : `${SITE_URL}/#/${slug}`,
    },
  ];
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Hero standar semua halaman konten.
 * Latar gradien hijau bambu + gambar + breadcrumb + H1 + pengantar.
 */
export function PageHero({
  slug,
  showBreadcrumb = true,
}: {
  slug: string;
  showBreadcrumb?: boolean;
}) {
  const { t } = useI18n();
  const hs = t.ui.pageHero;
  const meta = pageMeta(t, slug);
  const navLabel = meta.navLabel ?? meta.h1;

  return (
    <section className="relative overflow-hidden bg-emerald-950 pt-32 pb-16 sm:pt-40 sm:pb-20" aria-labelledby="page-title">
      {/* Latar gambar + overlay */}
      {meta.heroImage && (
        <div aria-hidden className="absolute inset-0">
          <img
            src={meta.heroImage}
            alt=""
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/70 to-emerald-950" />
        </div>
      )}
      {/* Ornamen cahaya */}
      <div aria-hidden className="animate-soft-pulse absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
      <div aria-hidden className="animate-soft-pulse absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl" style={{ animationDelay: '2.5s' }} />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* Breadcrumb visual */}
        {showBreadcrumb && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs text-emerald-100/85 backdrop-blur"
          >
            <a href="#/" className="transition-colors hover:text-white hover:underline">
              {hs.breadcrumbHome}
            </a>
            <ChevronRight className="h-3 w-3 text-gold" aria-hidden />
            <span className="font-semibold text-white" aria-current="page">
              {navLabel}
            </span>
            <BreadcrumbJsonLd slug={slug} label={navLabel} homeLabel={hs.breadcrumbHome} />
          </motion.nav>
        )}

        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
          {meta.eyebrow}
        </motion.span>

        <motion.h1
          id="page-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-5 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          {meta.h1}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-emerald-50/85 sm:text-lg"
        >
          {meta.intro}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-6 inline-flex items-center gap-2 text-xs text-emerald-100/60"
        >
          <CalendarClock className="h-3.5 w-3.5 text-gold/80" aria-hidden />
          {hs.updatedPrefix} {meta.updated} • {COMPANY.domain}
        </motion.p>
      </div>
    </section>
  );
}

/* Section wrapper konten halaman */
export function PageSection({
  children,
  className = '',
  bg = 'light',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  bg?: 'light' | 'cream' | 'dark';
  id?: string;
}) {
  const bgClass =
    bg === 'dark'
      ? 'bg-emerald-950 text-emerald-50'
      : bg === 'cream'
        ? 'bg-secondary/40'
        : 'bg-background';
  return (
    <section id={id} className={`${bgClass} py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

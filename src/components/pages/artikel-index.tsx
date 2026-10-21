'use client';

import { motion } from 'framer-motion';
import { Clock, Search } from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { CtaBand } from '@/components/site/cta-band';
import { ARTICLES } from '@/lib/articles';
import { useI18n } from '@/lib/i18n/context';
import { useArticleTranslations } from '@/lib/i18n/articles';

/** Halaman 14/25 — Index semua artikel */
export function ArtikelIndexPage() {
  const { t } = useI18n();
  const tr = useArticleTranslations();
  const s = t.pages['artikel'].s;
  /* Kartu artikel: judul/excerpt/kategori memakai terjemahan bila tersedia (en/zh) */
  const ART = ARTICLES.map((a) => {
    const tr2 = tr?.articles?.[a.slug];
    return tr2 ? { ...a, ...tr2 } : a;
  });

  return (
    <>
      <PageHero slug="artikel" />

      <PageSection bg="light">
        <SectionHeading
          eyebrow={s.headingEyebrow}
          title={s.headingTitle}
          highlight={s.headingHighlight}
          description={s.headingDescription}
        />

        {/* Artikel unggulan pertama */}
        {ART[0] && (
          <Reveal className="mx-auto mt-12 max-w-4xl">
            <motion.a
              href={`#/${ART[0].slug}`}
              whileHover={{ y: -4 }}
              className="group grid overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-xl shadow-emerald-900/10 sm:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto">
                { }
                <img
                  src={ART[0].heroImage}
                  alt={ART[0].heroImageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-emerald-950">
                  {s.featuredBadge}
                </span>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-9">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{ART[0].category}</span>
                <h3 className="mt-2 font-serif text-2xl font-bold leading-snug text-foreground group-hover:text-primary">
                  {ART[0].title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ART[0].excerpt}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {ART[0].readMinutes} {t.ui.common.minutes} • {ART[0].updated}
                </p>
              </div>
            </motion.a>
          </Reveal>
        )}

        {/* Grid artikel lainnya */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ART.slice(1).map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08}>
              <motion.a
                href={`#/${a.slug}`}
                whileHover={{ y: -6 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-emerald-900/10"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  { }
                  <img
                    src={a.heroImage}
                    alt={a.heroImageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{a.category}</span>
                  <h3 className="mt-1.5 font-serif text-lg font-bold leading-snug text-foreground group-hover:text-primary">
                    {a.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                  <p className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {a.readMinutes} {t.ui.common.minutes}
                  </p>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>

        {/* Info pencarian SEO */}
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-secondary/50 p-5">
            <Search className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {s.searchInfo}{' '}
              <strong className="text-foreground">&quot;{s.searchQuery}&quot;</strong>
              {s.searchTail}
            </p>
          </div>
        </Reveal>
      </PageSection>

      <CtaBand />
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Eye, Target, HeartHandshake, ShieldCheck, Scale, MapPin } from 'lucide-react';
import { COMPANY } from '@/lib/company';
import { useI18n } from '@/lib/i18n/context';
import { useCurrentYear } from '@/hooks/use-current-year';
import { Reveal, StaggerContainer, StaggerItem } from './reveal';
import { SectionHeading } from './section-heading';

const VALUE_ICONS = {
  'shield-check': ShieldCheck,
  'heart-handshake': HeartHandshake,
  scale: Scale,
} as const;

/** Fallback lokal — versi terjemahan live ada di t.data.about.values */
const VALUES = [
  {
    icon: 'shield-check',
    title: 'Murni & Teruji',
    text: 'Setiap tetes melewati distilasi bertahap dan uji mutu sebelum sampai ke tangan Anda.',
  },
  {
    icon: 'heart-handshake',
    title: 'Mitra Petani Bambu',
    text: 'Bermitra dengan petani hutan bambu rakyat — membeli hasil panen dengan harga adil.',
  },
  {
    icon: 'scale',
    title: 'Badan Hukum Resmi',
    text: 'PT berakta resmi dengan dewan pendiri, komisaris, direksi, dan dewan pakar lintas bidang — aman untuk kontrak & pengadaan besar.',
  },
];

export function About() {
  const { t } = useI18n();
  const s = t.ui.about;
  const values =
    Array.isArray(t.data?.about?.values) && t.data.about.values.length > 0
      ? t.data.about.values
      : VALUES;
  const years = useCurrentYear() - 2007;

  return (
    <section id="tentang" className="relative overflow-hidden py-24 sm:py-28" aria-label={s.ariaLabel}>
      <div
        aria-hidden
        className="animate-soft-pulse pointer-events-none absolute -right-40 top-24 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-soft-pulse pointer-events-none absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-teal-100/50 blur-3xl"
        style={{ animationDelay: '2s' }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={s.eyebrow}
          title={s.title}
          highlight={s.highlight}
          description={s.description}
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Gambar plantasi */}
          <Reveal direction="right" className="relative">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-emerald-900/20">
              { }
              <img
                src="/images/about-plantation.jpg"
                alt={s.imgAlt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-emerald-900 backdrop-blur">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />
                  {s.landChip}
                </span>
              </div>
            </div>

            {/* Kartu legal melayang */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="absolute -bottom-10 -right-3 w-56 rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-xl shadow-emerald-900/15 sm:-right-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-bamboo">{s.expLabel}</p>
              <p className="mt-1 font-serif text-lg font-bold text-foreground">{s.expSince}</p>
              <p className="font-serif text-2xl font-bold text-primary">{s.expHighlight}</p>
              <p suppressHydrationWarning className="mt-1 text-xs text-muted-foreground">{s.expYears.replace('{years}', String(years))}</p>
            </motion.div>
          </Reveal>

          {/* Narasi perusahaan */}
          <div>
            <Reveal direction="left">
              <p className="text-lg leading-relaxed text-foreground/85">
                <strong className="font-semibold text-primary">{COMPANY.legalName}</strong>{' '}
                {s.narrLead}{' '}
                <em>{s.narrEm}</em>. {s.narrAfter}
              </p>
            </Reveal>

            <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2">
              <StaggerItem>
                <div className="h-full rounded-2xl border border-emerald-900/10 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <Eye className="h-8 w-8 text-primary" aria-hidden />
                  <h3 className="mt-3 font-serif text-lg font-bold">{s.visionTitle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.visionText}
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="h-full rounded-2xl border border-emerald-900/10 bg-gradient-to-br from-amber-50 to-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <Target className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-3 font-serif text-lg font-bold">{s.missionTitle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.missionText}
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>

        {/* Nilai perusahaan */}
        <StaggerContainer className="mt-20 grid gap-5 md:grid-cols-3">
          {values.map((v: { icon: string; title: string; text: string }) => {
            const Icon = VALUE_ICONS[v.icon as keyof typeof VALUE_ICONS] ?? ShieldCheck;
            return (
              <StaggerItem key={v.title}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-emerald-900/10 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-bold">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

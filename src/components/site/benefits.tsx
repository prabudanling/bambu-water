'use client';

import { motion } from 'framer-motion';
import {
  Thermometer,
  Wind,
  HeartPulse,
  Activity,
  Droplets,
  ShieldCheck,
  Sparkles,
  Flower2,
  BookOpenCheck,
  ArrowUpRight,
} from 'lucide-react';
import { BENEFITS } from '@/lib/company';
import { useI18n } from '@/lib/i18n/context';
import { StaggerContainer, StaggerItem, Reveal } from './reveal';
import { SectionHeading } from './section-heading';

const ICONS = {
  thermometer: Thermometer,
  wind: Wind,
  'heart-pulse': HeartPulse,
  activity: Activity,
  droplets: Droplets,
  'shield-check': ShieldCheck,
  sparkles: Sparkles,
  'flower-2': Flower2,
} as const;

const SOURCES_FALLBACK = [
  {
    title: 'Journal of Medicinal Plant Research (2015)',
    detail:
      'Ekstrak bambu terdokumentasi memberi proteksi terhadap stres oksidatif, inflamasi, lipotoksisitas, kanker, dan penyakit kardiovaskular.',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4659479',
  },
  {
    title: 'TIME — “Bamboo Water Is Now a Thing”',
    detail:
      'Media internasional melaporkan air bambu sebagai fenomena minuman kesehatan global dengan efek antioksidan & antimikroba.',
    href: 'https://time.com/3821886/bamboo-water',
  },
];

const SOURCE_HREFS = [
  'https://pmc.ncbi.nlm.nih.gov/articles/PMC4659479',
  'https://time.com/3821886/bamboo-water',
];

export function Benefits() {
  const { t } = useI18n();
  const s = t.ui.benefits;
  const list = Array.isArray(t.data?.benefits) && t.data.benefits.length > 0 ? t.data.benefits : BENEFITS;
  const sources = Array.isArray(s.sources) && s.sources.length > 0 ? s.sources : SOURCES_FALLBACK;

  return (
    <section
      id="manfaat"
      className="relative overflow-hidden bg-emerald-950 py-24 text-emerald-50 sm:py-28"
      aria-label={s.ariaLabel}
    >
      {/* Ornamen latar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23a7f3d0' stroke-width='2'%3E%3Crect x='52' y='10' width='16' height='100' rx='8'/%3E%3Cline x1='48' y1='40' x2='72' y2='40'/%3E%3Cline x1='48' y1='80' x2='72' y2='80'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div
        aria-hidden
        className="animate-soft-pulse absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-soft-pulse absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"
        style={{ animationDelay: '2.5s' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow={s.eyebrow}
          title={s.title}
          highlight={s.highlight}
          description={s.description}
        />

        <StaggerContainer className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {list.map((b: { icon: string; title: string; description: string }, i: number) => {
            const Icon = ICONS[b.icon];
            return (
              <StaggerItem key={b.title}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-teal-300/40 hover:bg-white/[0.1]"
                >
                  <span
                    aria-hidden
                    className="absolute -right-4 -top-4 font-serif text-[5rem] font-bold text-white/[0.05] transition-colors duration-500 group-hover:text-teal-200/10"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400/30 to-emerald-500/20 text-teal-200 ring-1 ring-teal-300/30 transition-all duration-300 group-hover:scale-110 group-hover:text-teal-100">
                    <Icon className="h-6.5 w-6.5" aria-hidden />
                  </span>
                  <h3 className="relative mt-4 font-serif text-lg font-bold leading-snug text-white">
                    {b.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-emerald-100/75">
                    {b.description}
                  </p>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Rujukan ilmiah */}
        <Reveal className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-md sm:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/20 text-gold ring-1 ring-gold/40">
                <BookOpenCheck className="h-5.5 w-5.5" aria-hidden />
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold text-white">{s.research}</h3>
                <p className="text-sm text-emerald-100/70">{s.researchSub}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {sources.map((sr: { title: string; detail: string }, si: number) => (
                <a
                  key={si}
                  href={SOURCE_HREFS[si] ?? SOURCE_HREFS[0]}
                  target="_blank"
                  rel="noopener noreferrer external"
                  className="group rounded-2xl border border-white/10 bg-emerald-900/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/40 hover:bg-emerald-900/70"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-teal-100">{sr.title}</p>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-100/70">{sr.detail}</p>
                </a>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-emerald-100/55">
              {s.disclaimer}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

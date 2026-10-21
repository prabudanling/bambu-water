'use client';

import { Atom, FlaskConical, ShieldCheck } from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { Science } from '@/components/site/science';
import { CtaBand } from '@/components/site/cta-band';
import { useI18n } from '@/lib/i18n/context';

const RESEARCH_ICONS = [FlaskConical, Atom, ShieldCheck];

const COMPONENTS_FALLBACK = [
  {
    name: 'Silika Organik (Si)',
    level: 'Tertinggi di alam — hingga ~70%',
    role: 'Membangun kolagen, kepadatan tulang, kekuatan rambut & kuku, serta elastisitas pembuluh darah.',
  },
  {
    name: 'Flavonoid & Polifenol',
    level: 'Antioksidan utama',
    role: 'Melawan radikal bebas, meredakan peradangan, dan melindungi jantung serta pembuluh darah.',
  },
  {
    name: 'Klorofil Alami',
    level: 'Detoks alami',
    role: 'Mendukung pembersihan tubuh, regenerasi sel, dan menetralkan bau badan dari dalam.',
  },
  {
    name: 'Asam Amino Esensial',
    level: 'Blok bangun protein',
    role: 'Mendukung perbaikan jaringan, enzim pencernaan, dan energi harian.',
  },
  {
    name: 'Kalium, Kalsium & Magnesium',
    level: 'Elektrolit alami',
    role: 'Menyeimbangkan cairan tubuh, menjaga fungsi otot & saraf, serta kesehatan tulang.',
  },
];

const RESEARCH_FALLBACK = [
  {
    title: 'Kajian 2015 — J. Medicinal Plant Research',
    text: 'Ekstrak bambu terbukti memberi efek proteksi oksidatif, anti-inflamasi, dan melindungi kardiovaskular pada model uji (PMC4659479).',
  },
  {
    title: 'Silika Tertinggi di Alam',
    text: 'Ekstrak daun bambu (Bambusa vulgaris) mencatat kandungan silika organik hingga 70% — tertinggi di antara tanaman yang dikaji.',
  },
  {
    title: 'TIME 2015 — Tren Dunia',
    text: '"Bamboo Water Is Now a Thing" — media global menyoroti bambu sebagai sumber minuman fungsional masa depan.',
  },
];

/** Halaman 5/25 — Kandungan Nutrisi & Sains */
export function KandunganNutrisiPage() {
  const { t } = useI18n();
  const s = t.pages['kandungan-nutrisi'].s;
  const components = Array.isArray(s.components) && s.components.length > 0 ? s.components : COMPONENTS_FALLBACK;
  const research = Array.isArray(s.research) && s.research.length > 0 ? s.research : RESEARCH_FALLBACK;

  return (
    <>
      <PageHero slug="kandungan-nutrisi" />

      {/* Grafik nutrisi animasi */}
      <PageSection bg="light">
        <SectionHeading
          eyebrow={s.science_eyebrow}
          title={s.science_title}
          highlight={s.science_highlight}
          description={s.science_desc}
        />
        <div className="mt-4">
          <Science />
        </div>
      </PageSection>

      {/* Detail komponen */}
      <PageSection bg="cream">
        <SectionHeading
          eyebrow={s.components_eyebrow}
          title={s.components_title}
          highlight={s.components_highlight}
        />
        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {components.map((c: { name: string; level: string; role: string }, i: number) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-900/10">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-serif text-lg font-bold text-foreground">{c.name}</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{c.level}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      {/* Riset */}
      <PageSection bg="dark">
        <SectionHeading
          eyebrow={s.research_eyebrow}
          title={s.research_title}
          highlight={s.research_highlight}
          dark
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {research.map((r: { title: string; text: string }, i: number) => {
            const Icon = RESEARCH_ICONS[i] ?? FlaskConical;
            return (
              <Reveal key={r.title} delay={i * 0.12}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <Icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 font-serif text-lg font-bold text-white">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-50/80">{r.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.2} className="mx-auto mt-10 max-w-3xl">
          <p className="text-center text-xs leading-relaxed text-emerald-50/60">
            {s.disclaimer}
          </p>
        </Reveal>
      </PageSection>

      <CtaBand
        waMessage={s.cta_wa}
        title={s.cta_title}
        description={s.cta_desc}
      />
    </>
  );
}

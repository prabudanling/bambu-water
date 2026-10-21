'use client';

import { Droplets, Sun, Leaf, FlaskConical, Timer, Sprout } from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/site/reveal';
import { CtaBand } from '@/components/site/cta-band';
import { useI18n } from '@/lib/i18n/context';

const ORIGIN_ICONS = [Sprout, Timer, Droplets, FlaskConical];

const ORIGIN_STEPS_FALLBACK = [
  { title: 'Terbentuk di Dalam Ruas', text: 'Air hujan dan kelembapan diserap akar rizoma bambu, naik melalui batang, lalu berkondensasi menjadi sadapan murni di ruas bambu muda.' },
  { title: 'Momentum Panen', text: 'Kandungan mineral paling optimal saat bambu berumur 1–3 tahun — dipanen subuh saat sadapan segar.' },
  { title: 'Teknik Mata Tunas', text: 'Tabib tradisional membuka "mata tunas" di ruas untuk mengalirkan sadapan tanpa merusak pohon — warisan Nusantara.' },
  { title: 'Distilasi Higienis', text: 'Untuk konsumsi harian, sadapan disuling bertahap agar mineral terjaga dan mikrobiologi terjamin.' },
];

const TYPES_FALLBACK = [
  { name: 'Air Sadapan Mentah (Tabib)', desc: 'Langsung dari ruas — dipakai tabib untuk terapi, harus segar & diolah tepat.', badge: 'Tradisional' },
  { name: 'Air Bambu Suling', desc: 'Dimurnikan bertahap — aman harian, tahan simpan, mineral & silika terjaga.', badge: 'Populer' },
  { name: 'Ekstrak Daun Bambu', desc: 'Sumber riset ilmiah modern — silika hingga 70% dan antioksidan tinggi.', badge: 'Riset' },
];

const DIFFS_FALLBACK = [
  { label: 'vs Air Mineral', text: 'Air bambu unggul kandungan silika organik & flavonoid unik yang tidak dimiliki air mineral biasa.' },
  { label: 'vs Air Kelapa', text: 'Keduanya minuman alami; air bambu lebih rendah gula alami dan kaya silika untuk tulang & kulit.' },
  { label: 'vs Teh Daun', text: 'Tanpa kafein — cocok dikonsumsi kapan saja, bahkan untuk anak dan ibu hamil (dengan anjuran).' },
];

/** Halaman 3/25 — Apa Itu Air Bambu */
export function ApaItuAirBambuPage() {
  const { t } = useI18n();
  const s = t.pages['apa-itu-air-bambu'].s;
  const originSteps = Array.isArray(s.origin_steps) && s.origin_steps.length > 0 ? s.origin_steps : ORIGIN_STEPS_FALLBACK;
  const types = Array.isArray(s.types) && s.types.length > 0 ? s.types : TYPES_FALLBACK;
  const diffs = Array.isArray(s.diffs) && s.diffs.length > 0 ? s.diffs : DIFFS_FALLBACK;

  return (
    <>
      <PageHero slug="apa-itu-air-bambu" />

      <PageSection bg="light">
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <Reveal>
            <p>
              <strong className="text-foreground">{s.p1_strong1}</strong> {s.p1_a} <em>{s.p1_em1}</em> {s.p1_b} <em>{s.p1_em2}</em> {s.p1_c} <strong className="text-foreground">{s.p1_strong2}</strong> {s.p1_d}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              {s.p2}
            </p>
          </Reveal>
        </div>

        {/* Bagaimana terbentuk */}
        <div className="mt-16">
          <SectionHeading
            eyebrow={s.origin_eyebrow}
            title={s.origin_title}
            highlight={s.origin_highlight}
          />
          <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {originSteps.map((step: { title: string; text: string }, i: number) => {
              const Icon = ORIGIN_ICONS[i] ?? Droplets;
              return (
                <StaggerItem key={step.title}>
                  <div className="relative h-full rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-emerald-900/10">
                    <span className="absolute right-5 top-5 font-serif text-3xl font-bold text-primary/10">{i + 1}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </PageSection>

      {/* Jenis */}
      <PageSection bg="cream">
        <SectionHeading
          eyebrow={s.types_eyebrow}
          title={s.types_title}
          highlight={s.types_highlight}
          description={s.types_desc}
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
          {types.map((ty: { name: string; desc: string; badge: string }, i: number) => (
            <Reveal key={ty.name} delay={i * 0.12}>
              <div className="h-full rounded-3xl border border-primary/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-900/10">
                <span className="inline-flex rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">{ty.badge}</span>
                <h3 className="mt-4 font-serif text-xl font-bold text-foreground">{ty.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ty.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      {/* Perbandingan */}
      <PageSection bg="light">
        <SectionHeading
          eyebrow={s.diffs_eyebrow}
          title={s.diffs_title}
          highlight={s.diffs_highlight}
        />
        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {diffs.map((d: { label: string; text: string }, i: number) => (
            <Reveal key={d.label} delay={i * 0.1}>
              <div className="flex flex-col gap-2 rounded-2xl border border-primary/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:gap-6">
                <span className="shrink-0 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">{d.label}</span>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mx-auto mt-10 max-w-3xl">
          <div className="rounded-2xl border-l-4 border-gold bg-gold/10 p-5">
            <p className="text-sm leading-relaxed text-foreground">
              <strong>{s.fact_strong}</strong> {s.fact_a} <em>{s.fact_em}</em> {s.fact_b}
            </p>
          </div>
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

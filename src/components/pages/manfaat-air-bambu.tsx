'use client';

import { CheckCircle2, Droplets, Info } from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/site/reveal';
import { Benefits } from '@/components/site/benefits';
import { ReasonsSection } from '@/components/site/reasons';
import { CtaBand } from '@/components/site/cta-band';
import { useI18n } from '@/lib/i18n/context';
import { BENEFITS } from '@/lib/company';

const DAILY_GUIDE_FALLBACK = [
  { time: 'Pagi (kamar mandi)', text: '1 gelas (±250 ml) air bambu suling saat perut kosong — membantu detoks & pencernaan.' },
  { time: 'Siang', text: '1 gelas setelah makan — melancarkan metabolisme dan menjaga hidrasi mineral.' },
  { time: 'Sore/Senja', text: '1 gelas hangat — menenangkan dan mendukung pemulihan tubuh.' },
];

/** Halaman 4/25 — Manfaat Air Bambu */
export function ManfaatAirBambuPage() {
  const { t } = useI18n();
  const s = t.pages['manfaat-air-bambu'].s;
  const benefits = Array.isArray(t.data?.benefits) && t.data.benefits.length > 0 ? t.data.benefits : BENEFITS;
  const dailyGuide = Array.isArray(s.daily_guide) && s.daily_guide.length > 0 ? s.daily_guide : DAILY_GUIDE_FALLBACK;

  return (
    <>
      <PageHero slug="manfaat-air-bambu" />

      {/* Rahasia Kaisar China + 10 alasan */}
      <ReasonsSection compact={false} />

      {/* Ringkasan 8 manfaat — komponen kartu animasi */}
      <PageSection bg="light">
        <SectionHeading
          eyebrow={s.benefits_eyebrow}
          title={s.benefits_title}
          highlight={s.benefits_highlight}
          description={s.benefits_desc}
        />
        <div className="mt-4">
          <Benefits />
        </div>
      </PageSection>

      {/* Daftar detail */}
      <PageSection bg="cream">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal direction="right">
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              {s.inner_title} <span className="text-primary">{s.inner_highlight}</span>
            </h2>
            <ul className="mt-6 space-y-4">
              {benefits.slice(0, 4).map((b: { title: string; description: string }) => (
                <li key={b.title} className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="font-semibold text-foreground">{b.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              {s.outer_title} <span className="text-primary">{s.outer_highlight}</span>
            </h2>
            <ul className="mt-6 space-y-4">
              {benefits.slice(4).map((b: { title: string; description: string }) => (
                <li key={b.title} className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="font-semibold text-foreground">{b.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </PageSection>

      {/* Panduan konsumsi */}
      <PageSection bg="light">
        <SectionHeading
          eyebrow={s.guide_eyebrow}
          title={s.guide_title}
          highlight={s.guide_highlight}
          description={s.guide_desc}
        />
        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {dailyGuide.map((g: { time: string; text: string }, i: number) => (
            <Reveal key={g.time} delay={i * 0.1}>
              <div className="flex flex-col gap-3 rounded-2xl border border-primary/10 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                  <Droplets className="h-4 w-4" aria-hidden />
                  {g.time}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{g.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <StaggerContainer className="mx-auto mt-8 max-w-4xl">
          <StaggerItem>
            <div className="flex items-start gap-3 rounded-2xl border-l-4 border-gold bg-gold/10 p-5">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden />
              <p className="text-sm leading-relaxed text-foreground">
                <strong>{s.note_strong}</strong> {s.note_a} <strong>{s.note_strong2}</strong> {s.note_b}
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </PageSection>

      <CtaBand
        waMessage={s.cta_wa}
        title={s.cta_title}
        description={s.cta_desc}
      />
    </>
  );
}

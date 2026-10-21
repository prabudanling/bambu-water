'use client';

import { HeartHandshake, Stethoscope, BookOpen, Users } from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/site/reveal';
import { Process } from '@/components/site/process';
import { CtaBand } from '@/components/site/cta-band';
import { useI18n } from '@/lib/i18n/context';

const PRACTITIONER_ICONS = [Users, Stethoscope, BookOpen, HeartHandshake];

const THERAPY_USES_FALLBACK = [
  {
    title: 'Demam & Panas Dalam',
    text: 'Sifat mendinginkan alami air bambu dipakai tabib Nusantara menurunkan suhu tubuh — diminum hangat perlahan.',
    audience: 'Keluarga',
  },
  {
    title: 'Batuk & Dahak',
    text: 'Membantu melapangkan saluran napas dan melunakkan dahak secara alami tanpa kafein.',
    audience: 'Keluarga',
  },
  {
    title: 'Pendamping Diabetes & Kolesterol',
    text: 'Dikonsumsi sebagai minuman rendah gula pengganti minuman manis, dalam program pola hidup sehat penderita.',
    audience: 'Dengan pengawasan medis',
  },
  {
    title: 'Pemulihan & Daya Tahan',
    text: 'Mineral, asam amino, dan antioksidan mendukung pemulihan tubuh pasien sakit atau pasca operasi (sesuai anjuran).',
    audience: 'Pasien & lansia',
  },
];

const PRACTITIONERS_FALLBACK = [
  { title: 'Tabib & Praktisi Tradisional', text: 'Air Bambu Tabib (sadapan mentah) untuk praktik pengobatan komplementer sesuai tradisi.' },
  { title: 'Klinik Terapi & Spa', text: 'Pasokan rutin air bambu suling untuk program detoks & terapi minum klien.' },
  { title: 'Komunitas Herbal & Edukasi', text: 'Materi edukasi + sampel untuk sosialisasi pengobatan tradisional di komunitas.' },
  { title: 'Rumah Sehat & Panti', text: 'Kemitraan pasokan minuman sehat alami bagi penghuni program pemulihan.' },
];

/** Halaman 6/25 — Air Bambu untuk Pengobatan */
export function PengobatanPage() {
  const { t } = useI18n();
  const s = t.pages['air-bambu-pengobatan'].s;
  const therapyUses = Array.isArray(s.therapy_uses) && s.therapy_uses.length > 0 ? s.therapy_uses : THERAPY_USES_FALLBACK;
  const practitioners = Array.isArray(s.practitioners) && s.practitioners.length > 0 ? s.practitioners : PRACTITIONERS_FALLBACK;

  return (
    <>
      <PageHero slug="air-bambu-pengobatan" />

      <PageSection bg="light">
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <Reveal>
            <p>
              {s.p1_a} <strong className="text-foreground">{s.p1_strong1}</strong>
              {s.p1_b} <em>{s.p1_em}</em> {s.p1_c}{' '}
              <strong className="text-foreground">{s.p1_strong2}</strong>.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border-l-4 border-gold bg-gold/10 p-5 text-sm sm:text-base">
              <strong className="text-foreground">{s.principle_strong}</strong> {s.principle_a}{' '}
              <strong>{s.principle_strong2}</strong> {s.principle_b}
            </div>
          </Reveal>
        </div>
      </PageSection>

      {/* Kegunaan terapi */}
      <PageSection bg="cream">
        <SectionHeading
          eyebrow={s.therapy_eyebrow}
          title={s.therapy_title}
          highlight={s.therapy_highlight}
        />
        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2">
          {therapyUses.map((use: { title: string; text: string; audience: string }) => (
            <StaggerItem key={use.title}>
              <div className="h-full rounded-3xl border border-primary/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-emerald-900/10">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">{use.audience}</span>
                <h3 className="mt-3 font-serif text-xl font-bold text-foreground">{use.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{use.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </PageSection>

      {/* Praktisi */}
      <PageSection bg="light">
        <SectionHeading
          eyebrow={s.pract_eyebrow}
          title={s.pract_title}
          highlight={s.pract_highlight}
          description={s.pract_desc}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {practitioners.map((p: { title: string; text: string }, i: number) => {
            const Icon = PRACTITIONER_ICONS[i] ?? Users;
            return (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group h-full rounded-3xl border border-primary/10 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-emerald-900/10">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </PageSection>

      {/* Kualitas produksi */}
      <PageSection bg="cream">
        <SectionHeading
          eyebrow={s.quality_eyebrow}
          title={s.quality_title}
          highlight={s.quality_highlight}
        />
        <div className="mt-4">
          <Process />
        </div>
      </PageSection>

      <CtaBand
        waMessage={s.cta_wa}
        title={s.cta_title}
        description={s.cta_desc}
      />
    </>
  );
}

'use client';

import { Factory, Microscope, Award, Sparkles, GraduationCap } from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/site/reveal';
import { Process } from '@/components/site/process';
import { CtaBand } from '@/components/site/cta-band';
import { PRODUCTION_TEAM_NOTE } from '@/lib/company';
import { useI18n } from '@/lib/i18n/context';

const QC_STEPS = [
  { icon: Microscope, title: 'Uji Mikrobiologi', text: 'Setiap batch diperiksa parameter TPC & patogen sebelum lolos kemasan.' },
  { icon: Factory, title: 'Fasilitas Higienis', text: 'Ruang produksi terkontrol dengan sanitasi berkala dan aliran satu arah.' },
  { icon: Sparkles, title: 'Kemasan Food-Grade', text: 'Botol, jerigen, dan drum bersertifikat food-grade, disegel tamper-proof.' },
  { icon: Award, title: 'Jejak Batch', text: 'Setiap kemasan tercatat asal panen & tanggal produksi — transparan penuh.' },
];

/** Fallback string halaman (id) — dipakai bila fragment halaman belum ter-compile */
const S_FALLBACK = {
  introBefore: 'Kepercayaan 18+ tahun kami bangun dari satu hal: ',
  introStrong: 'transparansi mutu',
  introAfter:
    '. Dari rumpun bambu di hutan rakyat hingga segel kemasan dibuka di rumah Anda, setiap tahap tercatat dan terstandar — memadukan kearifan panen tradisional dengan teknologi distilasi modern.',
  timelineEyebrow: 'Tahapan',
  timelineTitle: 'Dari Hutan ke',
  timelineHighlight: 'Gelas Anda',
  qcEyebrow: 'Kontrol Mutu',
  qcTitle: '4 Lapis Jaminan',
  qcHighlight: 'Kualitas',
  commitmentStrong: 'Komitmen berkelanjutan:',
  commitment:
    ' kami hanya memanen bambu muda tanpa menebang rumpun — kelestarian hutan bambu rakyat adalah syarat keberlangsungan bisnis kami sejak 2007.',
  teamEyebrow: 'Tim Produksi',
  teamTitle: 'Disuling Santri Berpengalaman,',
  teamHighlight: 'Diawasi Dewan Pakar Lintas Bidang',
  santriTitle: 'Santri Berpengalaman',
  santriText:
    'Proses penyulingan kami dipercayakan kepada santri-santri berpengalaman — pekerja yang menjunjung kehati-hatian, kejujuran, dan ketelitian. Nilai-nilai inilah yang menjadikan setiap tetes air bambu kami bersih, halal, dan penuh keberkahan.',
  pakarTitle: 'Dewan Pakar Lintas Bidang',
  pakarText:
    'Produksi kami dibackup dewan pakar lintas bidang — dari ahli teknologi pangan, praktisi pengobatan tradisional, hingga pakar mutu — memastikan setiap batch memenuhi standar keamanan dan khasiatnya terjaga.',
  ctaTitle: 'Ingin Melihat Langsung Prosesnya?',
  ctaDescription: 'Jadwalkan kunjungan fasilitas kami — terbuka untuk mitra, distributor, dan komunitas edukasi.',
  ctaWaMessage: 'Halo! Saya ingin tahu lebih detail tentang proses produksi & uji mutu air bambu BWN.',
};

/** Halaman 18/25 — Proses Produksi & Distilasi */
export function ProsesProduksiPage() {
  const { t } = useI18n();
  const s: Record<string, any> = { ...S_FALLBACK, ...(t.pages?.['proses-produksi']?.s ?? {}) };
  const qcSteps = Array.isArray(s.qcSteps) && s.qcSteps.length > 0 ? s.qcSteps : QC_STEPS;
  const teamNote = t.data?.productionNote ?? PRODUCTION_TEAM_NOTE;

  return (
    <>
      <PageHero slug="proses-produksi" />

      <PageSection bg="light">
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <Reveal>
            <p>
              {s.introBefore}
              <strong className="text-foreground">{s.introStrong}</strong>
              {s.introAfter}
            </p>
          </Reveal>
        </div>
      </PageSection>

      {/* Timeline 4 tahap (komponen animasi) */}
      <PageSection bg="cream">
        <SectionHeading
          eyebrow={s.timelineEyebrow}
          title={s.timelineTitle}
          highlight={s.timelineHighlight}
        />
        <div className="mt-4">
          <Process />
        </div>
      </PageSection>

      {/* Kontrol mutu */}
      <PageSection bg="light">
        <SectionHeading
          eyebrow={s.qcEyebrow}
          title={s.qcTitle}
          highlight={s.qcHighlight}
        />
        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {qcSteps.map((q: { title: string; text: string }, i: number) => {
            const Icon = QC_STEPS[i]?.icon ?? Microscope;
            return (
              <StaggerItem key={i}>
                <div className="group h-full rounded-3xl border border-primary/10 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-emerald-900/10">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{q.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <Reveal delay={0.2} className="mx-auto mt-10 max-w-3xl">
          <div className="rounded-2xl border-l-4 border-gold bg-gold/10 p-5">
            <p className="text-sm leading-relaxed text-foreground">
              <strong>{s.commitmentStrong}</strong>
              {s.commitment}
            </p>
          </div>
        </Reveal>
      </PageSection>

      {/* Santri + Dewan Pakar */}
      <PageSection bg="dark">
        <SectionHeading
          eyebrow={s.teamEyebrow}
          title={s.teamTitle}
          highlight={s.teamHighlight}
          dark
        />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <GraduationCap className="h-10 w-10 text-gold" aria-hidden />
              <h3 className="mt-4 font-serif text-xl font-bold text-white">{s.santriTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-emerald-50/80 sm:text-base">
                {s.santriText}
              </p>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <Award className="h-10 w-10 text-gold" aria-hidden />
              <h3 className="mt-4 font-serif text-xl font-bold text-white">{s.pakarTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-emerald-50/80 sm:text-base">
                {s.pakarText}
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="mx-auto mt-10 max-w-3xl">
          <p className="text-center text-sm leading-relaxed text-emerald-50/70">{teamNote}</p>
        </Reveal>
      </PageSection>

      <CtaBand
        waMessage={s.ctaWaMessage}
        title={s.ctaTitle}
        description={s.ctaDescription}
      />
    </>
  );
}

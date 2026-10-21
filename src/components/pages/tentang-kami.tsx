'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Award, Leaf, Factory, Truck, Users, BadgeCheck, GraduationCap, MapPin } from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/site/reveal';
import { Leadership } from '@/components/site/leadership';
import { CtaBand } from '@/components/site/cta-band';
import { useI18n } from '@/lib/i18n/context';
import { useCurrentYear } from '@/hooks/use-current-year';
import { COMPANY, BRAND_CLAIM, OFFICES, PRODUCTION_TEAM_NOTE } from '@/lib/company';

const VALUE_ICONS = [Leaf, Factory, Truck, Users];
const LEGAL_ICONS = [BadgeCheck, Award, GraduationCap, ShieldCheck];

const VALUES_FALLBACK = [
  {
    title: 'Berkelanjutan',
    description: 'Panen tanpa merusak rumpun — hutan bambu rakyat kami jaga agar tetap lestari untuk generasi berikutnya.',
  },
  {
    title: 'Higienis & Standar',
    description: 'Distilasi bertahap, uji mikrobiologi, dan kemasan food-grade pada setiap batch produksi.',
  },
  {
    title: 'Jangkauan Nasional',
    description: 'Jaringan kargo darat, laut, dan udara menjangkau 38 provinsi Indonesia.',
  },
  {
    title: 'Memberdayakan Rakyat',
    description: 'Berkemitran dengan petani hutan rakyat di Jawa Barat dan Nusantara.',
  },
];

const MILESTONES_FALLBACK = [
  { year: '2007', title: 'Awal Mula', text: 'BWN lahir sebagai pionir penyediaan air bambu untuk pengobatan tradisional — yang pertama di Indonesia.' },
  { year: '2012', title: 'Distilasi Modern', text: 'Fasilitas distilasi pertama kami beroperasi — memadukan kearifan tabib dengan standar higienis modern.' },
  { year: '2017', title: 'Jangkauan Nasional', text: 'Distribusi massal bambu & air bambu menjangkau seluruh provinsi, dari Sabang sampai Merauke.' },
  { year: '2025', title: 'Badan Hukum Resmi', text: 'PT Bambu Water Nusantara resmi berbadan hukum dengan akta pendirian tercatat — fondasi ekspansi lebih besar.' },
];

const LEGAL_FALLBACK = [
  { label: 'Status', value: 'Badan Hukum PT Resmi (Akta Pendirian)' },
  { label: 'Pengalaman', value: 'Sejak 2007 ({years}+ tahun)' },
  { label: 'Produksi', value: 'Disuling santri berpengalaman' },
  { label: 'Pengawasan', value: 'Dewan pakar lintas bidang' },
];

/** Halaman 2/25 — Tentang Kami */
export function TentangKamiPage() {
  const { t } = useI18n();
  const s = t.pages['tentang-kami'].s;
  const brandClaim = t.data?.brandClaim ?? BRAND_CLAIM;
  const productionNote = t.data?.productionNote ?? PRODUCTION_TEAM_NOTE;
  const values = Array.isArray(s.values) && s.values.length > 0 ? s.values : VALUES_FALLBACK;
  const milestones = Array.isArray(s.milestones) && s.milestones.length > 0 ? s.milestones : MILESTONES_FALLBACK;
  const legal = Array.isArray(s.legal) && s.legal.length > 0 ? s.legal : LEGAL_FALLBACK;
  const years = useCurrentYear() - 2007;

  return (
    <>
      <PageHero slug="tentang-kami" />

      {/* Narasi utama + klaim */}
      <PageSection bg="light">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">
              <Award className="h-3.5 w-3.5" aria-hidden />
              {brandClaim}
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              {s.story_title} <span className="text-primary">{s.story_highlight}</span> {s.story_title_end}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                {s.p1_a} <strong className="text-foreground">{s.p1_strong}</strong>
                {s.p1_b}
              </p>
              <p>
                {s.p2_a} <strong className="text-foreground">{s.p2_strong}</strong> {s.p2_b}
              </p>
            </div>

            {/* Kartu legal */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {legal.map((l: { label: string; value: string }, i: number) => {
                const Icon = LEGAL_ICONS[i] ?? BadgeCheck;
                return (
                  <div key={l.label} className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{l.label}</p>
                      <p suppressHydrationWarning className="mt-0.5 text-sm font-semibold text-foreground">{l.value.replace('{years}', String(years))}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-emerald-900/20">
              { }
              <img
                src="/images/about-plantation.jpg"
                alt={s.img_alt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-emerald-900 backdrop-blur">
                  {s.img_caption}
                </p>
              </div>
            </div>

            {/* Visi Misi */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary/10 bg-secondary/50 p-5">
                <Eye className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 font-serif text-lg font-bold text-foreground">{s.vision_title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.vision_text}
                </p>
              </div>
              <div className="rounded-2xl border border-primary/10 bg-secondary/50 p-5">
                <Target className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 font-serif text-lg font-bold text-foreground">{s.mission_title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.mission_text}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </PageSection>

      {/* Perjalanan */}
      <PageSection bg="cream" id="perjalanan">
        <SectionHeading
          eyebrow={s.journey_eyebrow}
          title={s.journey_title}
          highlight={s.journey_highlight}
          description={s.journey_desc}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m: { year: string; title: string; text: string }, i: number) => (
            <Reveal key={m.year} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="relative h-full rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-emerald-900/10"
              >
                <span className="font-serif text-4xl font-bold text-primary/15">{m.year}</span>
                <h3 className="mt-2 text-lg font-bold text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                <span aria-hidden className="absolute right-5 top-5 h-2 w-2 rounded-full bg-gold" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      {/* Nilai */}
      <PageSection bg="light">
        <SectionHeading
          eyebrow={s.values_eyebrow}
          title={s.values_title}
          highlight={s.values_highlight}
        />
        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v: { title: string; description: string }, i: number) => {
            const Icon = VALUE_ICONS[i] ?? Leaf;
            return (
              <StaggerItem key={v.title}>
                <div className="group h-full rounded-3xl border border-primary/10 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-emerald-900/10">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </PageSection>

      {/* Kantor Pusat & Branch Office */}
      <PageSection bg="cream" id="kantor">
        <SectionHeading
          eyebrow={s.offices_eyebrow}
          title={s.offices_title}
          highlight={s.offices_highlight}
          description={s.offices_desc}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {OFFICES.map((o, i) => (
            <Reveal key={o.id} delay={i * 0.1}>
              <div className={`h-full rounded-3xl border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-900/10 ${i === 0 ? 'border-gold/40 bg-gradient-to-br from-amber-50 to-white' : 'border-primary/10 bg-white'}`}>
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${i === 0 ? 'bg-gold text-emerald-950' : 'bg-primary/10 text-primary'}`}>
                  {o.label}
                </span>
                <div className="mt-4 flex items-start gap-3">
                  <MapPin className={`mt-1 h-5 w-5 shrink-0 ${i === 0 ? 'text-amber-700' : 'text-primary'}`} aria-hidden />
                  <p className="text-sm leading-relaxed text-muted-foreground">{o.address}</p>
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                  {o.city}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mx-auto mt-10 max-w-3xl">
          <div className="flex items-start gap-3 rounded-2xl border-l-4 border-gold bg-gold/10 p-5">
            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden />
            <p className="text-sm leading-relaxed text-foreground">{productionNote}</p>
          </div>
        </Reveal>
      </PageSection>

      {/* Pimpinan */}
      <Leadership />

      <CtaBand
        title={s.cta_title}
        description={s.cta_desc}
        waMessage={s.cta_wa}
      />
    </>
  );
}

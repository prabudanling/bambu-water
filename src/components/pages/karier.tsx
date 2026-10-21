'use client';

import { Briefcase, HeartHandshake, GraduationCap, TrendingUp, MapPin, Clock3, MessageCircle } from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { CtaBand } from '@/components/site/cta-band';
import { AutoJsonLd, breadcrumbNode } from '@/components/pages/auto-shared';
import { waLink, SITE_URL, COMPANY } from '@/lib/company';
import { StaggerContainer, StaggerItem } from '@/components/site/reveal';

/* ============================================================
   KARIER — bergabung dengan misi bambu Nusantara
   ============================================================ */

const VALUES = [
  {
    icon: HeartHandshake,
    title: 'Amanah pada Kesehatan',
    desc: 'Setiap botol yang keluar pabrik adalah janji. Tim mutu berhak menahan pengiriman tanpa takut salah — kesehatan pelanggan di atas target penjualan.',
  },
  {
    icon: GraduationCap,
    title: 'Belajar Tanpa Henti',
    desc: 'Kami mendanai pelatihan: teknik sadapan berkelanjutan, food safety, hingga digital marketing. Karyawan yang tumbuh = perusahaan yang tumbuh.',
  },
  {
    icon: TrendingUp,
    title: 'Karisma Wilayah',
    desc: 'Kami mempekerjakan warga lokal di sekitar hutan bambu Tasikmalaya — dari petani mitra, tim panen, hingga admin. Ekonomi desa ikut bergerak.',
  },
];

const POSITIONS = [
  {
    title: 'Staf Produksi & Uji Mutu',
    loc: 'Tasikmalaya, Jawa Barat',
    type: 'Penuh Waktu',
    desc: 'Mengawasi sadapan, distilasi, dan uji mutu batch harian. Latar belakang kimia pangan atau pengalaman food industry jadi nilai plus besar.',
  },
  {
    title: 'Admin Penjualan WhatsApp',
    loc: 'Tasikmalaya (hybrid)',
    type: 'Penuh Waktu',
    desc: 'Menangani 50–100 chat pelanggan/hari: konsultasi terapi, penawaran grosir, hingga follow-up kontrak. Komunikasi hangat & cepat adalah kuncinya.',
  },
  {
    title: 'Digital Marketing & SEO',
    loc: 'Remote (Indonesia)',
    type: 'Kontrak / Freelance',
    desc: 'Mengelola konten edukasi, SEO programatik 2.500+ halaman, dan iklan lokal. Terbuka untuk portofolio nyata meski tanpa ijazah formal.',
  },
  {
    title: 'Petani Mitra Sadapan',
    loc: 'Jawa Barat & Jawa Tengah',
    type: 'Kemitraan',
    desc: 'Rumpun bambu Anda kami sadap dengan protokol berkelanjutan + harga fair trade. Pelatihan teknik mata tunas gratis untuk mitra baru.',
  },
];

const jsonLd = [
  breadcrumbNode([
    { name: 'Beranda', url: `${SITE_URL}/` },
    { name: 'Karier', url: `${SITE_URL}/#/karier` },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#/karier#webpage`,
    name: 'Karier — Bergabung dengan PT Bambu Water Nusantara',
    url: `${SITE_URL}/#/karier`,
    description: 'Lowongan kerja dan kemitraan di PT Bambu Water Nusantara: produksi, admin penjualan, digital marketing, dan petani mitra sadapan.',
  },
  ...POSITIONS.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: p.title,
    description: p.desc,
    employmentType: p.type === 'Penuh Waktu' ? 'FULL_TIME' : 'CONTRACTOR',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'PT Bambu Water Nusantara',
      sameAs: SITE_URL,
      logo: `${SITE_URL}/logo-bwn.svg`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tasikmalaya',
        addressRegion: 'Jawa Barat',
        addressCountry: 'ID',
      },
    },
    datePosted: '2025-06-01',
    validThrough: '2026-12-31T23:59:59+07:00',
  })),
];

export function KarierPage() {
  return (
    <>
      <AutoJsonLd nodes={jsonLd} />
      <PageHero slug="karier" />

      <PageSection bg="light">
        <SectionHeading
          eyebrow="Bergabung dengan Kami"
          title="Karier di"
          highlight="Bambu Water Nusantara"
          description="Kami sedang menumbuhkan tim yang percaya bisnis bisa sehat sekaligus berkah. Lihat nilai kerja kami dan posisi yang terbuka saat ini."
        />

        {/* Nilai kerja */}
        <StaggerContainer className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {VALUES.map((v) => (
            <StaggerItem key={v.title}>
              <div className="card-lift h-full rounded-3xl border border-primary/10 bg-white p-7 shadow-sm">
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <v.icon className="h-6.5 w-6.5" aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </PageSection>

      {/* Posisi terbuka */}
      <PageSection bg="cream">
        <SectionHeading eyebrow="Posisi Terbuka" title="Lamar Sekarang" highlight="— 4 Peluang" />
        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {POSITIONS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <article className="card-lift rounded-3xl border border-primary/10 bg-white p-7 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="flex items-center gap-2.5 font-serif text-lg font-bold text-foreground">
                      <Briefcase className="h-5 w-5 text-primary" aria-hidden />
                      {p.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden />
                        {p.loc}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5 text-gold" aria-hidden />
                        {p.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href={waLink(`Halo! Saya ingin melamar posisi ${p.title} di Bambu Water Nusantara. Berikut data diri saya:`)}
                    target="_blank"
                    rel="noopener noreferrer external"
                    className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    Lamar via WA
                  </a>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-3xl border border-primary/15 bg-white p-7 text-sm leading-relaxed text-muted-foreground shadow-sm">
            <strong className="font-semibold text-foreground">Tidak menemukan posisi yang cocok?</strong>{' '}
            Kirim CV spontan beserta cerita singkat kenapa Anda percaya pada misi bambu Nusantara ke email{' '}
            <a href={`mailto:${COMPANY.email}`} className="link-underline font-semibold text-primary">
              {COMPANY.email}
            </a>{' '}
            — kami menyimpan profil talenta dan menghubungi begitu posisi baru terbuka.
          </div>
        </Reveal>
      </PageSection>

      <CtaBand />
    </>
  );
}

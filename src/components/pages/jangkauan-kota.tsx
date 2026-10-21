'use client';

import { MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { CtaBand } from '@/components/site/cta-band';
import { waLink } from '@/lib/company';
import { useI18n } from '@/lib/i18n/context';

/** Pulau + kota — nama kota TIDAK diterjemahkan (hanya nama pulau via s.islands) */
const ISLANDS: { name: string; icon: string; cities: string[] }[] = [
  {
    name: 'Pulau Jawa',
    icon: '🏙️',
    cities: ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi', 'Bandung', 'Cirebon', 'Semarang', 'Solo', 'Yogyakarta', 'Surabaya', 'Malang', 'Banyuwangi', 'Serang', 'Tasikmalaya'],
  },
  {
    name: 'Sumatera',
    icon: '🌴',
    cities: ['Medan', 'Padang', 'Palembang', 'Pekanbaru', 'Batam', 'Bandar Lampung', 'Banda Aceh', 'Jambi', 'Bengkulu', 'Binjai'],
  },
  {
    name: 'Kalimantan',
    icon: '🌿',
    cities: ['Balikpapan', 'Banjarmasin', 'Pontianak', 'Samarinda', 'Palangkaraya', 'Tarakan'],
  },
  {
    name: 'Sulawesi',
    icon: '🌺',
    cities: ['Makassar', 'Manado', 'Palu', 'Kendari', 'Gorontalo', 'Palopo'],
  },
  {
    name: 'Bali & Nusa Tenggara',
    icon: '🏝️',
    cities: ['Denpasar', 'Mataram', 'Kupang', 'Bima', 'Sumba'],
  },
  {
    name: 'Maluku & Papua',
    icon: '⛵',
    cities: ['Ambon', 'Ternate', 'Jayapura', 'Sorong', 'Timika', 'Manokwari'],
  },
];

/** Fallback string halaman (id) — dipakai bila fragment halaman belum ter-compile */
const S_FALLBACK = {
  scopeEyebrow: 'Cakupan Wilayah',
  scopeTitle: '38 Provinsi,',
  scopeHighlight: 'Satu Jaringan Terpercaya',
  scopeDescription:
    'Sejak 2007 jaringan distribusi kami tumbuh dari Jawa Barat ke seluruh Nusantara — kota Anda pasti terjangkau.',
  islands: ISLANDS.map((island) => island.name),
  citiesSuffix: '+ kota',
  notListedStrong: 'Kota Anda tidak tercantum?',
  notListed:
    ' Kami tetap bisa mengirim ke hampir semua wilayah Indonesia melalui mitra ekspedisi lokal — tanyakan langsung kepada tim kami.',
  checkCity: 'Cek Kota Saya',
  checkWaMessage: 'Halo! Apakah Bambu Water Nusantara mengirim ke kota saya?',
};

/** Halaman 20/25 — Jangkauan Kota */
export function JangkauanKotaPage() {
  const { t } = useI18n();
  const s: Record<string, any> = { ...S_FALLBACK, ...(t.pages?.['jangkauan-kota']?.s ?? {}) };
  /* Nama pulau dari dictionary, ikon & kota tetap dari data komponen (kota tidak diterjemahkan) */
  const islands =
    Array.isArray(s.islands) && s.islands.length === ISLANDS.length
      ? ISLANDS.map((island, i) => ({ ...island, name: s.islands[i] as string }))
      : ISLANDS;

  return (
    <>
      <PageHero slug="jangkauan-kota" />

      <PageSection bg="light">
        <SectionHeading
          eyebrow={s.scopeEyebrow}
          title={s.scopeTitle}
          highlight={s.scopeHighlight}
          description={s.scopeDescription}
        />

        <div className="mt-14 space-y-8">
          {islands.map((island, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8">
                <h3 className="flex items-center gap-3 font-serif text-xl font-bold text-foreground">
                  <span aria-hidden className="text-2xl">{island.icon}</span>
                  {island.name}
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    {island.cities.length}
                    {s.citiesSuffix}
                  </span>
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {island.cities.map((city: string, ci: number) => (
                    <span
                      key={ci}
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-secondary/50 px-3.5 py-1.5 text-sm text-foreground/85 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    >
                      <MapPin className="h-3 w-3 text-primary" aria-hidden />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-primary/15 bg-secondary/50 p-7 text-center sm:p-9">
            <p className="text-base leading-relaxed text-muted-foreground">
              <strong className="text-foreground">{s.notListedStrong}</strong>
              {s.notListed}
            </p>
            <Button asChild size="lg" className="rounded-full bg-emerald-600 px-8 py-6 text-white hover:bg-emerald-700">
              <a href={waLink(s.checkWaMessage)} target="_blank" rel="noopener noreferrer external" className="gap-2">
                <MessageCircle className="h-5 w-5" aria-hidden />
                {s.checkCity}
              </a>
            </Button>
          </div>
        </Reveal>
      </PageSection>

      <CtaBand />
    </>
  );
}

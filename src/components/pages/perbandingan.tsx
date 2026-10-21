'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Minus, Droplets, Leaf, Scale } from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { CtaBand } from '@/components/site/cta-band';
import { AutoJsonLd, faqNode, breadcrumbNode } from '@/components/pages/auto-shared';
import { SITE_URL } from '@/lib/company';
import { cn } from '@/lib/utils';

/* ============================================================
   PERBANDINGAN — air bambu vs minuman sehat populer
   Tabel interaktif tab-switch + matriks sifat.
   ============================================================ */

type Level = 'high' | 'mid' | 'low' | 'no';

const LEVEL_META: Record<Level, { icon: React.ComponentType<{ className?: string }>; label: string; cls: string }> = {
  high: { icon: Check, label: 'Tinggi', cls: 'text-emerald-700 bg-emerald-100' },
  mid: { icon: Minus, label: 'Sedang', cls: 'text-amber-700 bg-amber-100' },
  low: { icon: Minus, label: 'Rendah', cls: 'text-amber-700/80 bg-amber-50' },
  no: { icon: X, label: 'Tidak Ada', cls: 'text-red-700 bg-red-50' },
};

const CRITERIA = [
  { key: 'silika', label: 'Silika organik (kolagen alami)' },
  { key: 'antioksidan', label: 'Kadar antioksidan flavonoid' },
  { key: 'mineral', label: 'Mineral unik (bukan tambahan)' },
  { key: 'kalori', label: 'Rendah kalori & tanpa gula tambahan' },
  { key: 'tradisi', label: 'Rekam jejak terapi tradisional' },
  { key: 'rasa', label: 'Netral & mudah dikonsumsi harian' },
  { key: 'keberlanjutan', label: 'Jejak karbon rendah' },
] as const;

const DRINKS = [
  {
    id: 'bambu',
    name: 'Air Bambu',
    tagline: 'Sadapan langsung dari ruas bambu muda',
    scores: { silika: 'high', antioksidan: 'high', mineral: 'high', kalori: 'high', tradisi: 'high', rasa: 'high', keberlanjutan: 'high' } as Record<string, Level>,
    note: 'Satu-satunya minuman di daftar ini yang lahir langsung dari sadapan tumbuhan — bukan hasil olahan, penyulingan air sumber, atau seduhan. Kombinasi silika organik + flavonoid + mineral terlarut alami menjadikannya kandidat terapi komplementer paling lengkap, dengan rekam jejak tabib Nusantara ratusan tahun.',
  },
  {
    id: 'mineral',
    name: 'Air Mineral',
    tagline: 'Air sumber pegunungan kemasan',
    scores: { silika: 'low', antioksidan: 'no', mineral: 'mid', kalori: 'high', tradisi: 'low', rasa: 'high', keberlanjutan: 'mid' } as Record<string, Level>,
    note: 'Basis hidrasi harian yang aman dan netral — namun kandungan mineralnya bergantung sumber mata air, umumnya kalsium-magnesium dengan silika rendah, dan tanpa senyawa bioaktif seperti flavonoid. Bagus untuk hidrasi, bukan untuk terapi spesifik.',
  },
  {
    id: 'teh',
    name: 'Teh Hijau',
    tagline: 'Seduhan daun Camellia sinensis',
    scores: { silika: 'no', antioksidan: 'high', mineral: 'low', kalori: 'high', tradisi: 'high', rasa: 'mid', keberlanjutan: 'high' } as Record<string, Level>,
    note: 'Sangat kaya katekin (EGCG) dengan riset kesehatan melimpah. Namun mengandung kafein yang membatasi konsumsi malam hari, taninnya dapat mengganggu penyerapan zat besi, dan rasanya pahit bagi sebagian orang.',
  },
  {
    id: 'kelapa',
    name: 'Air Kelapa',
    tagline: 'Endosperm cair Cocos nucifera',
    scores: { silika: 'no', antioksidan: 'mid', mineral: 'high', kalori: 'mid', tradisi: 'high', rasa: 'high', keberlanjutan: 'mid' } as Record<string, Level>,
    note: 'Elektrolit alami (kalium, natrium) yang populer untuk rehidrasi pascasport. Kandungan kaliumnya tinggi — perlu perhatian bagi penderita gangguan ginjal. Berbeda peran dari air bambu yang menitikberatkan silika dan antioksidan.',
  },
  {
    id: 'infused',
    name: 'Infused Water',
    tagline: 'Air rendaman buah & herbal',
    scores: { silika: 'no', antioksidan: 'low', mineral: 'low', kalori: 'high', tradisi: 'low', rasa: 'high', keberlanjutan: 'high' } as Record<string, Level>,
    note: 'Menarik secara rasa dan vitamin larut air, namun konsentrasi zat aktifnya sangat tipis dan bergantung bahan segar harian. Lebih tepat diposisikan sebagai variasi rasa, bukan sumber mineral terapi.',
  },
] as const;

const FAQ = [
  {
    q: 'Apakah air bambu lebih baik daripada air mineral?',
    a: 'Keduanya punya peran berbeda. Air mineral tetap menjadi basis hidrasi harian yang aman dan murah. Air bambu unggul ketika Anda mencari nilai tambah terapi: silika organik untuk kolagen dan tulang, flavonoid antioksidan, serta rekam jejak pengobatan tradisional. Banyak pelanggan kami mengombinasikan keduanya — air mineral untuk rutinitas, air bambu sebagai minuman kesehatan terjadwal.',
  },
  {
    q: 'Bisakah air bambu menggantikan teh hijau untuk antioksidan?',
    a: 'Teh hijau tetap juara katekin dan tidak perlu "digantikan" bila Anda menyukainya. Namun air bambu menawarkan spektrum berbeda — silika organik yang hampir tak ditemukan pada minuman lain — tanpa kafein sehingga aman dikonsumsi kapan pun. Konsumsi keduanya bergantian justru memberi keragaman senyawa aktif bagi tubuh.',
  },
  {
    q: 'Kenapa air bambu menang di kriteria keberlanjutan?',
    a: 'Rumpun bambu tumbuh hingga puluhan tahun tanpa perlu ditebang habis — sadapan diambil selektif 1–2 ruas per rumpun per musim, dan bambu beregenerasi dari rizoma tanpa replanting. Dibanding industri yang memanen pohon utuh atau memompa akuifer dalam, jejak ekologis panen sadapan jauh lebih ringan.',
  },
];

export function PerbandinganPage() {
  const [active, setActive] = useState(0);
  const drink = DRINKS[active];

  const jsonLd = [
    faqNode(FAQ),
    breadcrumbNode([
      { name: 'Beranda', url: `${SITE_URL}/` },
      { name: 'Perbandingan Minuman', url: `${SITE_URL}/#/perbandingan` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${SITE_URL}/#/perbandingan#article`,
      headline: 'Perbandingan Air Bambu vs Air Mineral, Teh Hijau, Air Kelapa & Infused Water',
      description:
        'Matriks perbandingan 7 kriteria kesehatan: silika organik, antioksidan, mineral alami, kalori, rekam jejak terapi, rasa, dan keberlanjutan.',
      image: `${SITE_URL}/images/product-water-bottle.jpg`,
      author: { '@type': 'Organization', name: 'PT Bambu Water Nusantara' },
      publisher: { '@type': 'Organization', name: 'PT Bambu Water Nusantara' },
    },
  ];

  return (
    <>
      <AutoJsonLd nodes={jsonLd} />
      <PageHero slug="perbandingan" />

      <PageSection bg="light">
        <SectionHeading
          eyebrow="Matriks 7 Kriteria"
          title="Air Bambu vs"
          highlight="Minuman Sehat Populer"
          description="Data objektif membantu keputusan terbaik. Pilih minuman pada tab — matriks dan analisisnya berganti dengan animasi halus."
        />

        {/* Tab minuman */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Pilih minuman untuk dibandingkan">
          {DRINKS.map((d, i) => (
            <button
              key={d.id}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={cn(
                'relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300',
                active === i
                  ? 'text-white shadow-lg shadow-emerald-900/25'
                  : 'border border-primary/20 bg-white text-muted-foreground hover:border-primary/45 hover:text-primary'
              )}
            >
              {active === i && (
                <motion.span
                  layoutId="drink-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-700 to-emerald-600"
                  transition={{ type: 'spring', stiffness: 340, damping: 30 }}
                />
              )}
              <span className="relative">{d.name}</span>
            </button>
          ))}
        </div>

        {/* Panel aktif */}
        <div className="mx-auto mt-8 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -14, filter: 'blur(6px)' }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-xl shadow-emerald-900/8"
            >
              {/* Kepala panel */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-gradient-to-r from-secondary/60 to-transparent px-7 py-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">{drink.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{drink.tagline}</p>
                </div>
                {active === 0 && (
                  <span className="animate-glow-pulse inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white">
                    <Droplets className="h-3.5 w-3.5" aria-hidden />
                    Skor Terlengkap 7/7
                  </span>
                )}
              </div>

              {/* Matriks kriteria */}
              <ul className="divide-y divide-border/70 px-7">
                {CRITERIA.map((c, ci) => {
                  const lv = LEVEL_META[drink.scores[c.key] as Level];
                  const Icon = lv.icon;
                  return (
                    <motion.li
                      key={c.key}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 * ci, duration: 0.35 }}
                      className="flex items-center justify-between gap-4 py-3.5"
                    >
                      <span className="text-sm text-foreground/85">{c.label}</span>
                      <span className={cn('inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold', lv.cls)}>
                        <Icon className="h-3.5 w-3.5" aria-hidden />
                        {lv.label}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Analisis */}
              <div className="m-7 rounded-2xl border border-primary/12 bg-secondary/40 p-6">
                <h3 className="flex items-center gap-2 font-serif text-base font-bold text-foreground">
                  <Scale className="h-4.5 w-4.5 text-gold" aria-hidden />
                  Analisis Jujur Kami
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{drink.note}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </PageSection>

      {/* Pesan inti */}
      <PageSection bg="dark">
        <div className="mx-auto max-w-3xl text-center">
          <Leaf className="mx-auto h-10 w-10 text-gold" aria-hidden />
          <h2 className="mt-5 font-serif text-2xl font-bold text-white sm:text-3xl">
            Tidak Ada Minuman Sempurna — Ada Minuman yang Tepat untuk Tujuan Anda
          </h2>
          <p className="mt-4 text-base leading-relaxed text-emerald-50/85">
            Hidrasi dasar? Air mineral cukup. Antioksidan kafein-free tambahan? Air bambu unggul. Rehidrasi pascasport? Air kelapa andal. Kami menyajikan perbandingan jujur karena kami yakin: pelanggan yang paham perbedaan adalah pelanggan yang paling puas jangka panjang.
          </p>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection bg="light">
        <SectionHeading eyebrow="FAQ Perbandingan" title="Pertanyaan" highlight=" yang Sering Muncul" />
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {FAQ.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm">
                <h3 className="font-serif text-base font-bold text-foreground">{f.q}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <CtaBand />
    </>
  );
}

'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Droplets, Activity, HeartPulse, Info, MessageCircle } from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { CtaBand } from '@/components/site/cta-band';
import { AutoJsonLd, faqNode, breadcrumbNode } from '@/components/pages/auto-shared';
import { waLink, SITE_URL } from '@/lib/company';

/* ============================================================
   KALKULATOR KESEHATAN — alat interaktif 3in1
   1. Kebutuhan air harian (bobot × aktivitas, formula EFSA-tuned)
   2. BMI & kategori
   3. Rekomendasi dosis terapi air bambu harian
   ============================================================ */

const AKTIVITAS = [
  { id: 'sedentari', label: 'Jarang bergerak (kerja kantoran)', factor: 0.032 },
  { id: 'ringan', label: 'Aktivitas ringan (jalan 1–2 km/hari)', factor: 0.038 },
  { id: 'sedang', label: 'Aktif sedang (olahraga 3–5x/minggu)', factor: 0.044 },
  { id: 'berat', label: 'Sangat aktif (pekerja fisik / atlet)', factor: 0.052 },
] as const;

const FAQ = [
  {
    q: 'Apakah kalkulator ini menggantikan saran dokter?',
    a: 'Tidak. Kalkulator ini memberikan estimasi umum berdasarkan formula hidrasi standar (referensi EFSA & Kemenkes) dan dimaksudkan sebagai panduan edukatif. Kebutuhan cairan setiap orang berbeda tergantung kondisi medis, iklim, dan intensitas aktivitas. Untuk program terapi spesifik — terutama bila Anda memiliki kondisi ginjal, jantung, atau diabetes — selalu konsultasikan terlebih dahulu dengan dokter atau ahli gizi Anda.',
  },
  {
    q: 'Kenapa hasil kebutuhan air diberikan dalam rentang?',
    a: 'Tubuh manusia bersifat dinamis: suhu udara, kelembapan, tingkat keringat, dan metabolisme individu membuat kebutuhan cairan berfluktuasi setiap hari. Karena itu kami menampilkan rentang (bukan angka tunggal) agar Anda memiliki panduan fleksibel — gunakan batas bawah pada hari yang sejuk dan santai, serta batas atas saat cuaca panas, berolahraga, atau aktif fisik tinggi.',
  },
  {
    q: 'Bagaimana cara mulai terapi air bambu sesuai dosis hasil kalkulator?',
    a: 'Mulailah perlahan: ganti 1–2 gelas air minum harian Anda dengan air bambu suling Bambu Water Nusantara selama 7 hari pertama, lalu naikkan bertahap mendekati rekomendasi kalkulator. Air bambu tabib (sadapan mentah) sebaiknya dikonsumsi sesuai anjuran — 3–5 sendok makan per hari untuk orang dewasa — atau sesuai arahan tabib/terapis pendamping Anda. Tim kami siap membantu via WhatsApp untuk menyusun jadwal konsumsi yang pas.',
  },
  {
    q: 'Apakah BMI dari kalkulator ini akurat untuk atlet?',
    a: 'BMI memiliki keterbatasan yang dikenal luas: ia tidak membedakan massa otot dan lemak. Bagi atlet, binaragawan, ibu hamil, atau lansia dengan massa otot rendah, angka BMI dapat menyesatkan. Gunakan hasil BMI sebagai petunjuk kasar, dan untuk pengukuran komposisi tubuh yang lebih tepat pertimbangkan analisis BIA (bioelectrical impedance) atau konsultasi profesional kesehatan.',
  },
];

export function KalkulatorKesehatanPage() {
  const [berat, setBerat] = useState(60);
  const [aktivitas, setAktivitas] = useState<(typeof AKTIVITAS)[number]['id']>('ringan');
  const [usia, setUsia] = useState(30);

  const hasil = useMemo(() => {
    const f = AKTIVITAS.find((a) => a.id === aktivitas)?.factor ?? 0.038;
    const dasar = berat * f * 1000; // ml
    const koreksiUsia = usia >= 55 ? 0.94 : usia < 18 ? 0.92 : 1;
    const min = Math.round((dasar * koreksiUsia) / 50) * 50;
    const max = Math.round((min * 1.18) / 50) * 50;
    const gelas = Math.round(min / 250);
    const dosisTerapi = Math.max(2, Math.round((min / 1000) * 0.15) * 10); // ml air bambu per hari
    return { min, max, gelas, dosisTerapi };
  }, [berat, aktivitas, usia]);

  const [tinggi, setTinggi] = useState(170);
  const bmi = useMemo(() => berat / (tinggi / 100) ** 2, [berat, tinggi]);
  const kategoriBmi =
    bmi < 18.5
      ? { label: 'Berat kurang', color: 'text-sky-700 bg-sky-100 border-sky-200' }
      : bmi < 25
        ? { label: 'Ideal', color: 'text-emerald-700 bg-emerald-100 border-emerald-200' }
        : bmi < 30
          ? { label: 'Berat berlebih', color: 'text-amber-700 bg-amber-100 border-amber-200' }
          : { label: 'Obesitas', color: 'text-red-700 bg-red-100 border-red-200' };

  const jsonLd = [
    faqNode(FAQ),
    breadcrumbNode([
      { name: 'Beranda', url: `${SITE_URL}/` },
      { name: 'Kalkulator Kesehatan', url: `${SITE_URL}/#/kalkulator-kesehatan` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Kalkulator Kebutuhan Air & Terapi Air Bambu',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web',
      url: `${SITE_URL}/#/kalkulator-kesehatan`,
      description:
        'Kalkulator interaktif kebutuhan air harian, BMI, dan dosis terapi air bambu berdasarkan berat badan, usia, dan tingkat aktivitas.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
      publisher: { '@type': 'Organization', name: 'PT Bambu Water Nusantara' },
    },
  ];

  return (
    <>
      <AutoJsonLd nodes={jsonLd} />
      <PageHero slug="kalkulator-kesehatan" />

      <PageSection bg="light">
        <SectionHeading
          eyebrow="Alat Interaktif Gratis"
          title="Hitung Kebutuhan Cairan"
          highlight="& Dosis Terapi Anda"
          description="Geser slider, dapatkan hasil instan. Formula hidrasi standar kesehatan + rekomendasi dosis air bambu yang dipersonalisasi."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* Panel input */}
          <Reveal>
            <div className="rounded-3xl border border-primary/15 bg-white p-7 shadow-lg shadow-emerald-900/5 sm:p-9">
              <h2 className="flex items-center gap-2.5 font-serif text-xl font-bold text-foreground">
                <Calculator className="h-6 w-6 text-primary" aria-hidden />
                Data Anda
              </h2>

              <div className="mt-7 space-y-8">
                {/* Berat badan */}
                <div>
                  <div className="flex items-baseline justify-between">
                    <label htmlFor="berat" className="text-sm font-semibold text-foreground">
                      Berat badan
                    </label>
                    <span className="font-serif text-2xl font-bold text-primary">
                      {berat} <span className="text-sm text-muted-foreground">kg</span>
                    </span>
                  </div>
                  <input
                    id="berat"
                    type="range"
                    min={25}
                    max={150}
                    value={berat}
                    onChange={(e) => setBerat(Number(e.target.value))}
                    className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-emerald-600"
                    aria-valuetext={`${berat} kilogram`}
                  />
                  <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                    <span>25 kg</span>
                    <span>150 kg</span>
                  </div>
                </div>

                {/* Tinggi badan */}
                <div>
                  <div className="flex items-baseline justify-between">
                    <label htmlFor="tinggi" className="text-sm font-semibold text-foreground">
                      Tinggi badan
                    </label>
                    <span className="font-serif text-2xl font-bold text-primary">
                      {tinggi} <span className="text-sm text-muted-foreground">cm</span>
                    </span>
                  </div>
                  <input
                    id="tinggi"
                    type="range"
                    min={120}
                    max={210}
                    value={tinggi}
                    onChange={(e) => setTinggi(Number(e.target.value))}
                    className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-emerald-600"
                    aria-valuetext={`${tinggi} sentimeter`}
                  />
                  <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                    <span>120 cm</span>
                    <span>210 cm</span>
                  </div>
                </div>

                {/* Usia */}
                <div>
                  <div className="flex items-baseline justify-between">
                    <label htmlFor="usia" className="text-sm font-semibold text-foreground">
                      Usia
                    </label>
                    <span className="font-serif text-2xl font-bold text-primary">
                      {usia} <span className="text-sm text-muted-foreground">tahun</span>
                    </span>
                  </div>
                  <input
                    id="usia"
                    type="range"
                    min={5}
                    max={90}
                    value={usia}
                    onChange={(e) => setUsia(Number(e.target.value))}
                    className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-emerald-600"
                    aria-valuetext={`${usia} tahun`}
                  />
                  <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                    <span>5 th</span>
                    <span>90 th</span>
                  </div>
                </div>

                {/* Aktivitas */}
                <fieldset>
                  <legend className="text-sm font-semibold text-foreground">Tingkat aktivitas harian</legend>
                  <div className="mt-3 grid gap-2">
                    {AKTIVITAS.map((a) => (
                      <label
                        key={a.id}
                        className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition-all duration-300 ${
                          aktivitas === a.id
                            ? 'border-primary/40 bg-primary/5 font-semibold text-primary shadow-sm'
                            : 'border-border bg-white text-muted-foreground hover:border-primary/25 hover:bg-secondary/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="aktivitas"
                          value={a.id}
                          checked={aktivitas === a.id}
                          onChange={() => setAktivitas(a.id)}
                          className="accent-emerald-600"
                        />
                        {a.label}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>
          </Reveal>

          {/* Panel hasil */}
          <Reveal delay={0.12}>
            <div className="gradient-border sticky top-28 rounded-3xl bg-emerald-950 p-7 text-white shadow-xl shadow-emerald-900/20 sm:p-9">
              <h2 className="flex items-center gap-2.5 font-serif text-xl font-bold">
                <Droplets className="h-6 w-6 text-gold" aria-hidden />
                Hasil Personal Anda
              </h2>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${hasil.min}-${hasil.gelas}`}
                  initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
                  transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <div className="mt-7 rounded-2xl bg-white/8 p-6 backdrop-blur-sm ring-1 ring-white/10">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200/80">
                      Kebutuhan cairan harian
                    </p>
                    <p className="mt-2 font-serif text-4xl font-bold text-white">
                      {(hasil.min / 1000).toFixed(1)}–{(hasil.max / 1000).toFixed(1)}
                      <span className="ml-2 text-lg text-emerald-200/80">liter</span>
                    </p>
                    <p className="mt-2 text-sm text-emerald-100/75">
                      ≈ {hasil.gelas} gelas @250 ml — sekitar {Math.ceil(hasil.gelas / 8)} botol 2 L per hari
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/8 p-5 backdrop-blur-sm ring-1 ring-white/10">
                      <HeartPulse className="h-5 w-5 text-gold" aria-hidden />
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-emerald-200/80">
                        Dosis terapi air bambu
                      </p>
                      <p className="mt-1 font-serif text-2xl font-bold">{hasil.dosisTerapi} ml</p>
                      <p className="mt-1 text-xs text-emerald-100/70">per hari (suling / tabib)</p>
                    </div>
                    <div className="rounded-2xl bg-white/8 p-5 backdrop-blur-sm ring-1 ring-white/10">
                      <Activity className="h-5 w-5 text-gold" aria-hidden />
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-emerald-200/80">
                        BMI Anda
                      </p>
                      <p className="mt-1 font-serif text-2xl font-bold">{bmi.toFixed(1)}</p>
                      <span className={`mt-1.5 inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${kategoriBmi.color}`}>
                        {kategoriBmi.label}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start gap-2.5 rounded-2xl border border-gold/30 bg-gold/10 p-4 text-xs leading-relaxed text-emerald-100/85">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                    Estimasi edukatif berbasis formula hidrasi standar (EFSA & Kemenkes). Bukan pengganti saran dokter — kondisi ginjal & jantung tertentu butuh batasan cairan khusus.
                  </div>

                  <a
                    href={waLink(
                      `Halo! Saya sudah hitung kebutuhan air di kalkulator: ${hasil.gelas} gelas/hari & dosis terapi ${hasil.dosisTerapi} ml. Mohon rekomendasi paket air bambu yang cocok.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer external"
                    className="mt-6 flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-emerald-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden />
                    Konsultasi Paket Sesuai Hasil Ini — Gratis
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </PageSection>

      {/* Cara pakai hasil */}
      <PageSection bg="cream">
        <SectionHeading
          eyebrow="Panduan Singkat"
          title="Dari Angka"
          highlight="Menjadi Kebiasaan Sehat"
        />
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            {
              n: '01',
              t: 'Bagi merata sepanjang hari',
              d: 'Jangan menunggu haus — tubuh sudah 1–2% terdehidrasi saat rasa haus muncul. Bagi total kebutuhan menjadi 8–12 waktu minum, mulai dari segelas air bambu hangat pagi hari saat perut kosong untuk penyerapan silika optimal.',
            },
            {
              n: '02',
              t: 'Naikkan dosis bertahap',
              d: 'Pekan pertama ganti 20% air minum biasa dengan air bambu, pekan kedua 40%, hingga penuh di pekan ketiga. Transisi bertahap memberi waktu tubuh beradaptasi dan membuat kebiasaan baru bertahan lebih lama secara psikologis.',
            },
            {
              n: '03',
              t: 'Pantau & sesuaikan',
              d: 'Perhatikan warna urin (target: kuning jerami muda), tingkat energi, dan kualitas kulit selama dua pekan pertama. Saat cuaca ekstrem atau aktivitas melonjak, tambahkan 500–750 ml dari batas atas rentang hasil kalkulator.',
            },
          ].map((item, i) => (
            <Reveal key={item.n} delay={i * 0.1}>
              <div className="card-lift h-full rounded-3xl border border-primary/10 bg-white p-7 shadow-sm">
                <span className="font-serif text-4xl font-bold text-primary/20">{item.n}</span>
                <h3 className="mt-3 font-serif text-lg font-bold text-foreground">{item.t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <Reveal>
        <div className="mx-auto max-w-4xl px-4 pb-4 pt-2 sm:px-6">
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center text-xs leading-relaxed text-amber-800">
            <strong>Catatan penting:</strong> kalkulator ini bersifat komplementer-edukatif dan bukan alat diagnosis.
            Ibu hamil/menyusui, penderita penyakit ginjal kronis, gagal jantung, dan anak di bawah 5 tahun memerlukan
            panduan cairan individual dari tenaga medis profesional.
          </p>
        </div>
      </Reveal>

      <CtaBand />
    </>
  );
}

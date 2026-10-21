'use client';

import { motion } from 'framer-motion';
import { Truck, Boxes, Clock, MapPin, Building2, Warehouse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CITIES, COMPANY } from '@/lib/company';
import { Reveal, StaggerContainer, StaggerItem } from './reveal';
import { SectionHeading } from './section-heading';

const TIERS = [
  {
    icon: Truck,
    title: 'Reguler & Retail',
    desc: 'Botol, galon, hingga batang satuan untuk rumah, kafe, dan UMKM.',
    speed: '1–3 hari (Jawa)',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Boxes,
    title: 'Grosir & Palet',
    desc: 'Karton, jerigen, drum 30 L, dan bambu per ikat untuk toko & distributor.',
    speed: '2–5 hari kerja',
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    icon: Warehouse,
    title: 'Kargo Proyek Besar',
    desc: 'Truk penuh untuk konstruksi, pengadaan pemerintah, dan industri.',
    speed: 'Terjadwal & terpantau',
    gradient: 'from-amber-500 to-orange-500',
  },
];

function CityMarquee({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? [...CITIES].reverse() : [...CITIES];
  return (
    <div className="relative overflow-hidden py-3" aria-hidden>
      <div
        className="animate-marquee flex w-max gap-3"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {[...items, ...items].map((city, i) => (
          <span
            key={`${city}-${i}`}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-medium text-emerald-50 backdrop-blur"
          >
            <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden />
            {city}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-emerald-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-emerald-950 to-transparent" />
    </div>
  );
}

export function Delivery() {
  return (
    <section
      id="pengiriman"
      className="relative overflow-hidden bg-emerald-950 py-24 text-white sm:py-28"
      aria-label="Pengiriman massal ke seluruh Indonesia"
    >
      {/* Titik arsipelago dekoratif */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {[
          { top: '12%', left: '10%' }, { top: '22%', left: '26%' }, { top: '9%', left: '44%' },
          { top: '30%', left: '60%' }, { top: '14%', left: '76%' }, { top: '38%', left: '88%' },
          { top: '62%', left: '14%' }, { top: '70%', left: '38%' }, { top: '58%', left: '68%' },
          { top: '72%', left: '84%' },
        ].map((pos, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-teal-300/50"
            style={pos}
            animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.9, 0.3] }}
            transition={{ repeat: Infinity, duration: 3 + i * 0.4, delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Jangkauan Nasional"
          title="Pengiriman Massal"
          highlight="Se-Indonesia"
          description="Air bambu suling maupun bambu batang berkualitas — dikirim dari gudang kami ke kota Anda, dalam skala apa pun."
        />

        {/* Marquee kota */}
        <Reveal className="mt-14">
          <CityMarquee />
          <CityMarquee reverse />
        </Reveal>

        {/* Stat jalur */}
        <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3" stagger={0.12}>
          {TIERS.map((t) => (
            <StaggerItem key={t.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-gold/40"
              >
                <span
                  className={`flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br ${t.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <t.icon className="h-6.5 w-6.5" aria-hidden />
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-white">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-100/75">{t.desc}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-teal-200">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {t.speed}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA kargo */}
        <Reveal className="mx-auto mt-14 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-r from-emerald-900 via-emerald-900/80 to-emerald-950 p-8 sm:p-10">
            <div
              aria-hidden
              className="animate-soft-pulse absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl"
            />
            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div className="flex items-start gap-4">
                <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold/20 text-gold ring-1 ring-gold/40 sm:flex">
                  <Building2 className="h-7 w-7" aria-hidden />
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Pengadaan instansi, hotel, proyek & distributor?
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-emerald-100/80">
                    Tim khusus korporat kami siap menyusun kontrak pasokan bulanan — harga khusus,
                    jadwal terjamin, dan dokumen lengkap untuk tender.
                  </p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="shrink-0 rounded-full bg-gold px-8 py-6 text-base font-bold text-emerald-950 shadow-xl shadow-amber-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300"
              >
                <a href={`mailto:${COMPANY.emailSales}?subject=${encodeURIComponent('Permintaan Penawaran Korporat')}`}>
                  Hubungi Tim Korporat
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from './section-heading';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

/** Fallback lokal — versi terjemahan live ada di t.data.testimonials */
const TESTIMONIALS = [
  {
    name: 'Bpk. Hendra Wijaya',
    role: 'Pemilik Kafe Sehat, Bandung',
    text: 'Air bambu suling dari BWN jadi andalan menu signature kami. Pelanggan betah, rasanya bening dan segar — beda dari air biasa. Pengiriman selalu tepat waktu.',
    rating: 5,
  },
  {
    name: 'Ibu Ratna Sari',
    role: 'Praktisi Terapi Herbal, Surabaya',
    text: 'Saya sudah mencari air tuak bambu berkualitas bertahun-tahun. Sadapan tabib dari BWN konsisten kemurniannya, dan ini membantu banyak klien program detoks saya.',
    rating: 5,
  },
  {
    name: 'Ir. Bambang Prasetyo',
    role: 'Kontraktor Bangunan Hijau, Jakarta',
    text: 'Untuk paviliun bambu resor kami di Bali, BWN memasok ratusan batang bambu petung dan wulung dalam dua pengiriman kargo. Batangnya lurus, kering, tanpa cacat.',
    rating: 5,
  },
  {
    name: 'Ibu Nurul Hidayah',
    role: 'Ibu Rumah Tangga, Yogyakarta',
    text: 'Anak saya sering panas dalam. Sejak rutin minum air bambu ini setiap pagi, keluhannya jauh berkurang. Rasanya lembut, tidak ada aftertaste sama sekali.',
    rating: 5,
  },
  {
    name: 'Bpk. Darmawan Lisdiyanto',
    role: 'Distributor Herbal, Medan',
    text: 'Ambil grosir galon 19 L setiap bulan untuk jaringan toko saya di Sumatera. Margin sehat, mutu stabil, tim korporatnya profesional mengurus dokumen pengiriman.',
    rating: 5,
  },
];

export function Testimonials() {
  const { t } = useI18n();
  const s = t.ui.testimonials;
  const list =
    Array.isArray(t.data?.testimonials) && t.data.testimonials.length > 0
      ? t.data.testimonials
      : TESTIMONIALS;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % list.length), 5200);
    return () => clearInterval(timer);
  }, [paused, list.length]);

  const current = list[index];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-background via-emerald-50/50 to-background py-24 sm:py-28"
      aria-label={s.ariaLabel}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={s.eyebrow}
          title={s.title}
          highlight={s.highlight}
          description={s.description}
        />

        <div
          className="relative mx-auto mt-16 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Ornamen kutip */}
          <Quote
            aria-hidden
            className="absolute -top-8 left-1/2 h-20 w-20 -translate-x-1/2 text-primary/10"
          />

          <div className="relative min-h-[300px] sm:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="rounded-3xl border border-emerald-900/10 bg-white p-8 text-center shadow-xl shadow-emerald-900/10 sm:p-10"
              >
                <div className="flex justify-center gap-1" aria-label={s.ratingAria.replace('{rating}', String(current.rating))}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-5 font-serif text-lg italic leading-relaxed text-foreground/90 sm:text-xl">
                  “{current.text}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold text-primary">{current.name}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{current.role}</p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Kontrol */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIndex((index - 1 + list.length) % list.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-900/15 bg-white text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
              aria-label={s.prevAria}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <div className="flex gap-2">
              {list.map((tm: { name: string }, i: number) => (
                <button
                  key={tm.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={s.dotAria.replace('{n}', String(i + 1))}
                  className={cn(
                    'h-2.5 rounded-full transition-all duration-300',
                    i === index ? 'w-8 bg-primary' : 'w-2.5 bg-emerald-900/20 hover:bg-emerald-900/40'
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIndex((index + 1) % list.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-900/15 bg-white text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
              aria-label={s.nextAria}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

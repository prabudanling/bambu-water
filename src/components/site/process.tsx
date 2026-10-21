'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sprout, Droplet, Factory, Truck } from 'lucide-react';
import { PROCESS } from '@/lib/company';
import { SectionHeading } from './section-heading';

const STEP_ICONS = [Sprout, Droplet, Factory, Truck];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.6'] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="proses"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 via-background to-background py-24 sm:py-28"
      aria-label="Proses produksi air bambu"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Dari Hutan ke Gelas"
          title="Empat Tahap"
          highlight="Kesempurnaan"
          description="Setiap langkah kami diawasi ketat — menjaga kemurnian sari bambu sejak panen hingga tiba di rumah Anda."
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-4xl">
          {/* Garis progres vertikal (desktop) */}
          <div aria-hidden className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-emerald-900/10 md:block">
            <motion.div
              style={{ scaleY: lineScale }}
              className="h-full w-full origin-top rounded-full bg-gradient-to-b from-emerald-500 via-teal-500 to-amber-400"
            />
          </div>
          {/* Garis kiri (mobile) */}
          <div aria-hidden className="absolute left-6 top-0 h-full w-1 rounded-full bg-emerald-900/10 md:hidden">
            <motion.div
              style={{ scaleY: lineScale }}
              className="h-full w-full origin-top rounded-full bg-gradient-to-b from-emerald-500 via-teal-500 to-amber-400"
            />
          </div>

          <ol className="space-y-12 md:space-y-16">
            {PROCESS.map((step, i) => {
              const Icon = STEP_ICONS[i];
              const isRight = i % 2 === 1;
              return (
                <li key={step.step} className="relative md:grid md:grid-cols-2 md:gap-12">
                  {/* Simpul ikon */}
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                    className="absolute left-6 top-1 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-900/30 ring-4 ring-background md:left-1/2"
                  >
                    <Icon className="h-5.5 w-5.5" aria-hidden />
                  </motion.span>

                  <motion.div
                    initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className={`ml-16 pl-2 md:ml-0 ${isRight ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'} md:pl-0`}
                  >
                    <div
                      className={`group rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-900/10 sm:p-7 ${
                        !isRight ? 'md:text-right' : ''
                      }`}
                    >
                      <span className="font-serif text-sm font-bold tracking-[0.25em] text-gold">
                        TAHAP {step.step}
                      </span>
                      <h3 className="mt-2 font-serif text-xl font-bold text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

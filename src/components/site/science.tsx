'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FlaskConical, Beaker, Microscope } from 'lucide-react';
import { NUTRITION } from '@/lib/company';
import { useI18n } from '@/lib/i18n/context';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

type Nutrient = { name: string; value: number; note: string };

function NutrientBar({
  item,
  index,
  active,
}: {
  item: Nutrient;
  index: number;
  active: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-semibold text-foreground">{item.name}</h3>
        <motion.span
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 + index * 0.12 }}
          className="font-serif text-xl font-bold text-primary"
        >
          {item.value}%
        </motion.span>
      </div>
      <div className="mt-2 h-3 overflow-hidden rounded-full bg-emerald-900/10">
        <motion.div
          initial={{ width: 0 }}
          animate={active ? { width: `${item.value}%` } : {}}
          transition={{ duration: 1.1, delay: 0.15 + index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative h-full rounded-full bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </motion.div>
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.note}</p>
    </div>
  );
}

export function Science() {
  const { t } = useI18n();
  const s = t.ui.science;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const nutrition =
    Array.isArray(t.data?.science?.nutrition) && t.data.science.nutrition.length > 0
      ? t.data.science.nutrition
      : NUTRITION;

  return (
    <section className="relative overflow-hidden py-24 sm:py-28" aria-label={s.ariaLabel}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={s.eyebrow}
          title={s.title}
          highlight={s.highlight}
          description={s.description}
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Gambar wellness */}
          <Reveal direction="right" className="relative order-2 lg:order-1">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-emerald-900/20">
              { }
              <img
                src="/images/wellness.jpg"
                alt={s.imgAlt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent" />
            </div>

            {/* Label mineral mengapung */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -top-5 left-6 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-emerald-900 shadow-lg"
            >
              <Beaker className="h-4 w-4 text-primary" aria-hidden />
              {s.electrolyteLabel}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-6 right-4 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-emerald-900 shadow-lg sm:right-8"
            >
              <Microscope className="h-4 w-4 text-primary" aria-hidden />
              {s.microTestLabel}
            </motion.div>
          </Reveal>

          {/* Bar nutrisi */}
          <Reveal direction="left" className="order-1 lg:order-2">
            <div
              ref={ref}
              className="rounded-3xl border border-emerald-900/10 bg-white/80 p-7 shadow-xl shadow-emerald-900/10 backdrop-blur sm:p-9"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FlaskConical className="h-5.5 w-5.5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold">{s.cardTitle}</h3>
                  <p className="text-sm text-muted-foreground">{s.cardSub}</p>
                </div>
              </div>
              <div className="mt-8 space-y-7">
                {nutrition.map((item: Nutrient, i: number) => (
                  <NutrientBar key={item.name} item={item} index={i} active={inView} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

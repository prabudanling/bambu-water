'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { STATS } from '@/lib/company';
import { useI18n } from '@/lib/i18n/context';

type StatItem = { prefix: string; value: number; suffix: string; label: string };

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}

function formatNumber(n: number, locale: string, millionSuffix: string, thousandSuffix: string) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toLocaleString(locale)}${millionSuffix}`;
  if (n >= 1_000) return `${(n / 1_000).toLocaleString(locale)}${thousandSuffix}`;
  return n.toLocaleString(locale);
}

function StatCard({
  stat,
  active,
}: {
  stat: StatItem;
  active: boolean;
}) {
  const { locale, t } = useI18n();
  const fmt = t.ui.stats;
  const value = useCountUp(stat.value, active);
  return (
    <div className="group relative rounded-2xl border border-emerald-900/10 bg-white/70 p-6 text-center shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-emerald-900/10">
      <p className="font-serif text-3xl font-bold text-primary sm:text-4xl">
        {stat.prefix}
        {formatNumber(value, locale, fmt.millionSuffix, fmt.thousandSuffix)}
        <span className="text-xl text-gold sm:text-2xl">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm leading-snug text-muted-foreground">{stat.label}</p>
      <span
        aria-hidden
        className="absolute inset-x-8 bottom-0 h-0.5 origin-center scale-x-0 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />
    </div>
  );
}

export function StatsStrip() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const list: readonly StatItem[] =
    Array.isArray(t.data?.stats) && t.data.stats.length > 0 ? t.data.stats : STATS;

  return (
    <div className="relative z-20 -mt-14 px-4 sm:px-6">
      <div ref={ref} className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((s) => (
          <StatCard key={s.label} stat={s} active={inView} />
        ))}
      </div>
    </div>
  );
}

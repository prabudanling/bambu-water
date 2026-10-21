'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Droplets, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MagneticButton } from '@/components/site/motion-primitives';
import { useI18n } from '@/lib/i18n/context';

const DROPLETS = [
  { left: '8%', delay: 0, duration: 9, size: 10 },
  { left: '18%', delay: 2.4, duration: 11, size: 7 },
  { left: '31%', delay: 5.1, duration: 8.5, size: 12 },
  { left: '44%', delay: 1.2, duration: 10, size: 6 },
  { left: '57%', delay: 3.8, duration: 12, size: 9 },
  { left: '69%', delay: 0.7, duration: 9.5, size: 7 },
  { left: '81%', delay: 4.4, duration: 11.5, size: 11 },
  { left: '92%', delay: 2.9, duration: 8, size: 8 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useI18n();
  const s = t.ui.hero;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.22]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="beranda"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-emerald-950"
      aria-label={s.ariaLabel}
    >
      {/* Latar foto hutan bambu + parallax */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        { }
        <img
          src="/images/hero-bamboo.jpg"
          alt={s.imageAlt}
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/55 to-emerald-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,45,27,0.55)_100%)]" />
      </motion.div>

      {/* Aurora mesh — cahaya hidup sinematik */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-aurora absolute -left-1/4 top-[-20%] h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.28),transparent_65%)] blur-3xl" />
        <div className="animate-aurora absolute -right-1/4 top-[10%] h-[60vh] w-[55vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.22),transparent_65%)] blur-3xl" style={{ animationDelay: '-7s' }} />
        <div className="animate-aurora absolute bottom-[-25%] left-1/4 h-[55vh] w-[60vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.14),transparent_60%)] blur-3xl" style={{ animationDelay: '-14s' }} />
        <div className="animate-orb absolute right-[12%] top-[24%] h-16 w-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm" style={{ animationDelay: '-2s' }} />
        <div className="animate-orb absolute left-[16%] top-[58%] h-10 w-10 rounded-full border border-teal-200/25 bg-teal-200/10" style={{ animationDelay: '-5s' }} />
      </div>

      {/* Tetesan air jatuh */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {DROPLETS.map((d, i) => (
          <span
            key={i}
            className="animate-float-drop absolute top-0 block rounded-full bg-gradient-to-b from-white/90 to-teal-200/60 shadow-[0_0_12px_rgba(255,255,255,0.45)]"
            style={{
              left: d.left,
              width: d.size,
              height: d.size * 1.4,
              animationDelay: `${d.delay}s`,
              animationDuration: `${d.duration}s`,
              borderRadius: '50% 50% 55% 55% / 40% 40% 60% 60%',
            }}
          />
        ))}
      </div>

      {/* Siluet bambu bergoyang */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 opacity-40 sm:h-56">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="h-full w-full">
          <g className="animate-bamboo-sway" style={{ transformOrigin: 'bottom center' }}>
            <rect x="60" y="0" width="16" height="220" rx="8" fill="#0a2e1c" />
            <rect x="56" y="60" width="24" height="5" rx="2.5" fill="#0a2e1c" />
            <rect x="56" y="130" width="24" height="5" rx="2.5" fill="#0a2e1c" />
          </g>
          <g className="animate-bamboo-sway" style={{ transformOrigin: 'bottom center', animationDelay: '1.2s' }}>
            <rect x="180" y="30" width="13" height="190" rx="6.5" fill="#0a2e1c" opacity="0.85" />
            <rect x="177" y="85" width="19" height="4" rx="2" fill="#0a2e1c" />
          </g>
          <g className="animate-bamboo-sway" style={{ transformOrigin: 'bottom center', animationDelay: '2.1s' }}>
            <rect x="1310" y="0" width="16" height="220" rx="8" fill="#0a2e1c" />
            <rect x="1306" y="70" width="24" height="5" rx="2.5" fill="#0a2e1c" />
            <rect x="1306" y="145" width="24" height="5" rx="2.5" fill="#0a2e1c" />
          </g>
          <g className="animate-bamboo-sway" style={{ transformOrigin: 'bottom center', animationDelay: '0.7s' }}>
            <rect x="1200" y="24" width="13" height="196" rx="6.5" fill="#0a2e1c" opacity="0.85" />
            <rect x="1197" y="90" width="19" height="4" rx="2" fill="#0a2e1c" />
          </g>
        </svg>
      </div>

      {/* Konten utama */}
      <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-32 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-50 backdrop-blur-md sm:text-sm"
          >
            <Leaf className="h-4 w-4 text-gold" aria-hidden />
            {s.badge}
            <span className="hidden h-1 w-1 rounded-full bg-gold sm:block" />
            <span className="hidden sm:block">{s.badgeSince}</span>
          </motion.div>

          <h1 className="text-4xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 34, filter: 'blur(14px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.95, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {s.titleLine1}
            </motion.span>
            <motion.span
              className="animate-gradient-flow block bg-gradient-to-r from-emerald-200 via-teal-100 to-amber-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 34, filter: 'blur(14px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.95, delay: 0.48, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {s.titleLine2}
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 34, filter: 'blur(14px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.95, delay: 0.66, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {s.titleLine3}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.84 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-emerald-50/90 sm:text-lg"
          >
            {s.subtitle}{' '}
            <strong className="font-semibold text-white">{s.subtitleHighlight}</strong>{' '}
            {s.subtitleAfter}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 1 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MagneticButton>
              <Button
                asChild
                size="lg"
                className="group relative h-14 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 text-base font-semibold text-white shadow-xl shadow-emerald-900/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-800/40"
              >
                <a href="#/air-bambu-suling">
                  <span aria-hidden className="shine-overlay" />
                  {s.ctaPrimary}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden />
                </a>
              </Button>
            </MagneticButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-white/40 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white"
            >
              <a href="#/pengiriman-massal" className="gap-2.5">
                <Truck className="h-5 w-5" aria-hidden />
                {s.ctaSecondary}
              </a>
            </Button>
          </motion.div>

          {/* Kepercayaan */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.25 }}
            className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-emerald-50/85"
          >
            <li className="flex items-center gap-2">
              <Droplets className="h-4.5 w-4.5 text-teal-300" aria-hidden />
              {s.trust[0]}
            </li>
            <li className="flex items-center gap-2">
              <Leaf className="h-4.5 w-4.5 text-emerald-300" aria-hidden />
              {s.trust[1]}
            </li>
            <li className="flex items-center gap-2">
              <Truck className="h-4.5 w-4.5 text-amber-300" aria-hidden />
              {s.trust[2]}
            </li>
          </motion.ul>
        </div>
      </motion.div>

      {/* Riak air di bawah */}
      <div aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2">
        {[0, 0.7, 1.4].map((d) => (
          <span
            key={d}
            className="animate-ripple absolute bottom-0 left-1/2 h-24 w-72 -translate-x-1/2 rounded-[100%] border border-teal-200/40"
            style={{ animationDelay: `${d}s` }}
          />
        ))}
      </div>

      {/* Indikator gulir */}
      <motion.a
        href="#/tentang-kami"
        aria-label={s.scrollAriaLabel}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-current p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-current" />
        </motion.span>
      </motion.a>
    </section>
  );
}

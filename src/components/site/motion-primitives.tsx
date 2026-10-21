'use client';

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
  useInView,
  animate,
  AnimatePresence,
} from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

/* ============================================================
   MOTION PRIMITIVES v2 — Bambu Water Nusantara
   Kumpulan primitif animasi premium, GPU-accelerated,
   dan ramah prefers-reduced-motion.
   ============================================================ */

/* ---------- 1. ScrollProgress — bilah kemajuan baca di puncak ---------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, oklch(0.55 0.13 145), oklch(0.72 0.12 80), oklch(0.75 0.14 128))',
      }}
    />
  );
}

/* ---------- 2. ReadingProgress — kemajuan baca per artikel ---------- */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]"
    >
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-primary via-gold to-bamboo-light"
        style={{ scaleX }}
      />
    </div>
  );
}

/* ---------- 3. CountUp — angka yang menghitung naik saat terlihat ---------- */
export function CountUp({
  to,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
}: {
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return undefined;
    const controls = animate(0, to, {
      duration,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  /* reduced-motion: tampilkan nilai final langsung tanpa animasi */
  const display = reduce ? to : value;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString('id-ID', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/* ---------- 4. TiltCard — kartu 3D merespons kursor ---------- */
export function TiltCard({
  children,
  className,
  intensity = 8,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const reduce = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-intensity, intensity]);
  const springX = useSpring(rotateX, { stiffness: 260, damping: 24 });
  const springY = useSpring(rotateY, { stiffness: 260, damping: 24 });

  if (reduce) return <div className={className}>{children}</div>;

  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d', perspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

/* ---------- 5. MagneticButton — tombol tertarik mengikuti kursor ---------- */
export function MagneticButton({
  children,
  className,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  if (reduce) return <div className={className}>{children}</div>;

  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

/* ---------- 6. BackToTop — kembali ke atas dengan cincin kemajuan ---------- */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const reduce = usePrefersReducedMotion();
  const circumference = 2 * Math.PI * 20;
  const dash = useTransform(scrollYProgress, [0, 1], [circumference, 0]);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Kembali ke atas"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
          }
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
          className="fixed bottom-24 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950 text-white shadow-lg shadow-emerald-900/30 sm:bottom-24"
        >
          <svg className="absolute inset-0 h-12 w-12 -rotate-90" viewBox="0 0 48 48" aria-hidden>
            <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/15" />
            <motion.circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-gold"
              strokeDasharray={circumference}
              style={{ strokeDashoffset: dash }}
            />
          </svg>
          <ArrowUp className="relative h-5 w-5" aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ---------- 7. ParallaxOrnament — ornamen paralaks saat scroll ---------- */
export function ParallaxOrnament({
  children,
  speed = 0.25,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -160 * speed]);

  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} style={{ y: yPos }}>
      {children}
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const offset = (dir: Direction, dist = 44): { x?: number; y?: number } => {
  switch (dir) {
    case 'up':
      return { y: dist };
    case 'down':
      return { y: -dist };
    case 'left':
      return { x: dist };
    case 'right':
      return { x: -dist };
    default:
      return {};
  }
};

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className,
  once = true,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = usePrefersReducedMotion();
  const o = reduce ? {} : offset(direction);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...o }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = 'up',
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const reduce = usePrefersReducedMotion();
  const o = reduce ? {} : offset(direction, 36);

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...o },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

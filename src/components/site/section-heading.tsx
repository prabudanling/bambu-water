'use client';

import { cn } from '@/lib/utils';
import { Reveal } from './reveal';

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  dark = false,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'center' | 'left';
  dark?: boolean;
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      <Reveal direction="down">
        <span
          className={cn(
            'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]',
            dark
              ? 'border-white/20 bg-white/10 text-emerald-100'
              : 'border-primary/20 bg-primary/5 text-primary'
          )}
        >
          <span className={cn('h-1.5 w-1.5 rounded-full', dark ? 'bg-gold' : 'bg-bamboo')} aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={cn(
            'mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]',
            dark ? 'text-white' : 'text-foreground'
          )}
        >
          {title}{' '}
          {highlight && (
            <span className={cn(dark ? 'text-shimmer-gold' : 'text-primary')}>{highlight}</span>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p
            className={cn(
              'mt-4 text-base leading-relaxed sm:text-lg',
              dark ? 'text-emerald-50/80' : 'text-muted-foreground'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

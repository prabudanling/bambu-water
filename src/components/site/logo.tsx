'use client';

import { cn } from '@/lib/utils';

export function LogoMark({ className }: { className?: string }) {
  return (
     
    <img
      src="/logo-bwn.svg"
      alt="Logo Bambu Water Nusantara — batang bambu dengan tetesan air murni"
      className={cn('h-11 w-11 shrink-0', className)}
      width={44}
      height={44}
      loading="eager"
    />
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="#/"
      className="group flex items-center gap-3"
      aria-label="Bambu Water Nusantara — kembali ke beranda"
    >
      <LogoMark className="transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110" />
      <span className="flex flex-col leading-none">
        <span className={cn('font-serif text-lg font-bold tracking-tight', dark ? 'text-white' : 'text-primary')}>
          Bambu Water
        </span>
        <span className={cn('text-[0.65rem] font-semibold uppercase tracking-[0.32em]', dark ? 'text-gold' : 'text-bamboo')}>
          Nusantara
        </span>
      </span>
    </a>
  );
}

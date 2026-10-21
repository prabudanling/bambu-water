'use client';

import { useState } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LOCALES_SORTED, localeMeta } from '@/lib/i18n/config';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

/**
 * Pemilih bahasa — 30 bahasa teratas dunia.
 * Prioritas (id → en → zh) dipisah garis di atas, sisanya urut abjad native.
 */
export function LanguageSwitcher({ onDark = false, compact = false }: { onDark?: boolean; compact?: boolean }) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);

  const current = localeMeta(locale);
  const s = t.ui.languageSwitcher;
  const top = LOCALES_SORTED.filter((l) => l.order <= 3);
  const rest = LOCALES_SORTED
    .filter((l) => l.order > 3)
    .sort((a, b) => a.native.localeCompare(b.native));

  const renderRow = (code: string) => {
    const l = localeMeta(code);
    const active = code === locale;
    return (
      <button
        key={code}
        type="button"
        onClick={() => {
          setLocale(l.code as never);
          setOpen(false);
        }}
        role="menuitemradio"
        aria-checked={active}
        lang={l.code}
        className={cn(
          'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors',
          active ? 'bg-primary/10' : 'hover:bg-emerald-50'
        )}
      >
        <span className="text-lg leading-none" aria-hidden>
          {l.flag}
        </span>
        <span className="min-w-0 flex-1">
          <span className={cn('block truncate text-sm font-semibold', active ? 'text-primary' : 'text-foreground')}>
            {l.native}
          </span>
          <span className="block truncate text-[11px] text-muted-foreground">{l.english}</span>
        </span>
        {active && <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />}
      </button>
    );
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        aria-label={`${s.current}: ${current.native}`}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
          compact ? 'h-9' : 'h-11',
          onDark
            ? 'border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20'
            : 'border-emerald-900/10 bg-white/80 text-foreground hover:border-primary/30 hover:text-primary'
        )}
      >
        <Globe className="h-4 w-4" aria-hidden />
        <span className="hidden sm:inline">{current.flag}</span>
        <span className="max-w-[7rem] truncate text-xs font-bold sm:text-sm">{current.code.toUpperCase()}</span>
        <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-300', open && 'rotate-180')} aria-hidden />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="max-h-[min(26rem,70vh)] w-72 overflow-y-auto rounded-2xl border-emerald-900/10 bg-white p-2 shadow-2xl shadow-emerald-950/20"
      >
        <p className="px-3 pb-2 pt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
          {s.count ?? '30 Bahasa'}
        </p>
        {top.map((l) => renderRow(l.code))}
        <div className="my-2 border-t border-emerald-900/10" aria-hidden />
        <div role="separator" aria-hidden />
        {rest.map((l) => renderRow(l.code))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

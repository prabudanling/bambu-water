'use client';

import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Command, CornerDownLeft, X } from 'lucide-react';
import { PAGES_META } from '@/lib/pages-registry';
import { getAllAutoMetas } from '@/lib/auto-pages';
import { useHashRoute } from '@/hooks/use-hash-route';
import { cn } from '@/lib/utils';

/* ============================================================
   COMMAND PALETTE — pencarian situs super cepat (Ctrl/Cmd+K)
   Indeks: 33 halaman inti + 2.600+ halaman programatik.
   UX boost + internal linking. Keyboard: ↑↓ navigasi, Enter buka.
   ============================================================ */

type Item = { slug: string; label: string; group: string };

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { navigate } = useHashRoute();

  /* Indeks dibangun sekali */
  const INDEX: Item[] = useMemo(() => {
    const core: Item[] = Object.values(PAGES_META).map((m) => ({
      slug: m.slug,
      label: m.navLabel ?? m.h1,
      group: 'Halaman',
    }));
    const auto: Item[] = getAllAutoMetas().map((m) => ({
      slug: m.slug,
      label: m.h1,
      group: m.slug.startsWith('kota/')
        ? 'Kota'
        : m.slug.startsWith('air-bambu-untuk/')
          ? 'Kesehatan'
          : m.slug.startsWith('layanan/')
            ? 'Layanan'
            : m.slug.startsWith('bambu/')
              ? 'Bambu'
              : 'Indeks',
    }));
    return [...core, ...auto];
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      /* Default: halaman inti populer */
      return INDEX.filter((i) => i.group === 'Halaman').slice(0, 10);
    }
    const needle = q.replace(/\s+/g, '-');
    return INDEX.filter(
      (i) => i.label.toLowerCase().includes(q) || i.slug.toLowerCase().includes(needle) || i.slug.includes(q)
    ).slice(0, 24);
  }, [INDEX, query]);

  /* Ref cermin status open (disinkron via effect, dibaca di listener event) */
  const openRef = useRef(false);
  useEffect(() => {
    openRef.current = open;
  }, [open]);

  /* Kunci scroll body + fokus input saat dibuka (tanpa setState) */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const id = requestAnimationFrame(() => inputRef.current?.focus());
      return () => {
        cancelAnimationFrame(id);
        document.body.style.overflow = '';
      };
    }
    document.body.style.overflow = '';
    return undefined;
  }, [open]);

  /* Shortcut global + event kustom dari navbar (setState di callback event = legal) */
  useEffect(() => {
    const reset = () => {
      setQuery('');
      setActiveIdx(0);
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (openRef.current) {
          setOpen(false);
        } else {
          reset();
          setOpen(true);
        }
      }
      if (e.key === 'Escape') setOpen(false);
    };
    const onOpen = () => {
      reset();
      setOpen(true);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('bwn:open-palette', onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('bwn:open-palette', onOpen);
    };
  }, []);

  const pick = useCallback(
    (item: Item) => {
      setOpen(false);
      navigate(item.slug);
    },
    [navigate]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[activeIdx]) {
      e.preventDefault();
      pick(results[activeIdx]);
    }
  };

  /* Scroll item aktif ke pandangan */
  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-idx="${activeIdx}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [activeIdx]);

  return (
    <>
      {/* Trigger tersembunyi untuk aksesibilitas & shortcut hint di navbar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[100] flex items-start justify-center bg-emerald-950/60 px-4 pt-[12vh] backdrop-blur-sm"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Pencarian situs"
          >
            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="glass w-full max-w-xl overflow-hidden rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Input */}
              <div className="flex items-center gap-3 border-b border-border/70 px-5 py-4">
                <Search className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActiveIdx(0);
                  }}
                  onKeyDown={onKeyDown}
                  placeholder="Cari kota, kondisi kesehatan, layanan, halaman…"
                  aria-label="Ketik kata kunci pencarian"
                  className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/70"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Tutup pencarian"
                  className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <X className="h-4.5 w-4.5" aria-hidden />
                </button>
              </div>

              {/* Hasil */}
              <div ref={listRef} className="max-h-[46vh] overflow-y-auto overscroll-contain p-2">
                {results.length === 0 && (
                  <p className="px-4 py-10 text-center text-sm text-muted-foreground">
                    Tidak ditemukan. Coba kata kunci lain — mis. nama kota, &ldquo;ginjal&rdquo;, atau &ldquo;kargo&rdquo;.
                  </p>
                )}
                {results.map((item, i) => {
                  const isCity = item.group === 'Kota';
                  return (
                    <button
                      key={item.slug}
                      type="button"
                      data-idx={i}
                      onMouseEnter={() => setActiveIdx(i)}
                      onClick={() => pick(item)}
                      className={cn(
                        'flex w-full items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-left text-sm transition-colors duration-150',
                        i === activeIdx ? 'bg-primary/10 text-primary' : 'text-foreground/80'
                      )}
                    >
                      <span className="flex min-w-0 items-center gap-2.5">
                        <span
                          className={cn(
                            'shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide',
                            isCity ? 'bg-gold/20 text-amber-700' : 'bg-secondary text-muted-foreground'
                          )}
                        >
                          {item.group}
                        </span>
                        <span className="truncate font-medium">{item.label}</span>
                      </span>
                      {i === activeIdx && (
                        <CornerDownLeft className="h-4 w-4 shrink-0 text-primary/60" aria-hidden />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-between gap-3 border-t border-border/70 bg-secondary/40 px-5 py-2.5 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <kbd className="rounded border border-border bg-white px-1.5 py-0.5 font-mono">↑↓</kbd>
                  navigasi
                  <kbd className="ml-2 rounded border border-border bg-white px-1.5 py-0.5 font-mono">Enter</kbd>
                  buka
                </span>
                <span className="flex items-center gap-1.5">
                  <Command className="h-3 w-3" aria-hidden />
                  {results.length.toLocaleString('id-ID')} dari 2.679 halaman
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Tombol pemicu yang dipasang di navbar (event kustom → palette) */
export function CommandPaletteTrigger({ onDark = true }: { onDark?: boolean }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent('bwn:open-palette'))}
      aria-label="Buka pencarian situs (Ctrl+K)"
      className={cn(
        'hidden items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs backdrop-blur transition-all duration-300 xl:inline-flex',
        onDark
          ? 'border-white/25 bg-white/10 text-white/85 hover:bg-white/20'
          : 'border-emerald-900/15 bg-emerald-950/5 text-foreground/75 hover:bg-emerald-950/10'
      )}
    >
      <Search className="h-3.5 w-3.5" aria-hidden />
      Cari
      <kbd className="rounded border border-current/30 bg-black/5 px-1 font-mono text-[10px] opacity-70">Ctrl K</kbd>
    </button>
  );
}

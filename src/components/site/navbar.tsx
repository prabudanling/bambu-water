'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_GROUPS } from '@/lib/pages-registry';
import { COMPANY, waLink } from '@/lib/company';
import { useHashRoute, setCanonical } from '@/hooks/use-hash-route';
import { useI18n, pageMeta } from '@/lib/i18n/context';
import { Logo } from './logo';
import { LanguageSwitcher } from './language-switcher';
import { cn } from '@/lib/utils';

/**
 * Mega Menu Bambu Water Nusantara
 * - Desktop: bar grup dengan dropdown animasi (hover & klik)
 * - Mobile: drawer dengan accordion per grup
 */
export function Navbar({ activeSlug }: { activeSlug: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const { navigate } = useHashRoute();
  const { t } = useI18n();
  const ns = t.ui.nav;

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40));

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (slug: string) => {
    setOpenGroup(null);
    setOpen(false);
    navigate(slug);
  };

  const onDark = !scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-500 sm:px-6"
      >
        <div
          className={cn(
            'flex w-full items-center justify-between rounded-2xl px-4 py-2 transition-all duration-500',
            scrolled
              ? 'border border-emerald-900/10 bg-white/85 shadow-lg shadow-emerald-900/10 backdrop-blur-xl'
              : 'border border-transparent bg-transparent'
          )}
        >
          <Logo dark={onDark} />

          {/* ===== Desktop Mega Menu ===== */}
          <nav aria-label="Navigasi utama" className="hidden items-center gap-0.5 lg:flex">
            {NAV_GROUPS.map((group) => {
              const isActive =
                group.slug === activeSlug ||
                group.children?.some((c) => c.slug === activeSlug);

              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => group.children && setOpenGroup(group.label)}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <button
                    type="button"
                    onClick={() => (group.slug ? go(group.slug) : setOpenGroup(openGroup === group.label ? null : group.label))}
                    aria-expanded={group.children ? openGroup === group.label : undefined}
                    aria-haspopup={group.children ? 'true' : undefined}
                    className={cn(
                      'relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300',
                      isActive
                        ? onDark
                          ? 'text-white'
                          : 'text-primary'
                        : onDark
                          ? 'text-white/75 hover:text-white'
                          : 'text-foreground/70 hover:text-primary'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className={cn('absolute inset-0 rounded-full', onDark ? 'bg-white/15' : 'bg-primary/10')}
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{ns.groups?.[group.label] ?? group.label}</span>
                    {group.children && (
                      <ChevronDown
                        className={cn(
                          'relative h-3.5 w-3.5 transition-transform duration-300',
                          openGroup === group.label && 'rotate-180'
                        )}
                        aria-hidden
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {group.children && openGroup === group.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border border-emerald-900/10 bg-white p-2 shadow-2xl shadow-emerald-950/20">
                          {group.children.map((child, i) => {
                            const childMeta = pageMeta(t, child.slug);
                            const childLabel = childMeta.navLabel ?? child.label;
                            const childDesc = childMeta.menuDesc ?? child.desc;
                            const childActive = activeSlug === child.slug;
                            return (
                              <motion.a
                                key={child.slug}
                                href={`#/${child.slug}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  go(child.slug);
                                }}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.04 }}
                                className={cn(
                                  'group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors',
                                  childActive ? 'bg-primary/10' : 'hover:bg-emerald-50'
                                )}
                              >
                                <span
                                  className={cn(
                                    'mt-1.5 h-2 w-2 shrink-0 rounded-full transition-all duration-300',
                                    childActive
                                      ? 'bg-gold shadow-[0_0_8px_rgba(217,164,65,0.8)]'
                                      : 'bg-bamboo/40 group-hover:bg-bamboo group-hover:scale-125'
                                  )}
                                  aria-hidden
                                />
                                <span>
                                  <span
                                    className={cn(
                                      'block text-sm font-semibold',
                                      childActive ? 'text-primary' : 'text-foreground'
                                    )}
                                  >
                                    {childLabel}
                                  </span>
                                  <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                    {childDesc}
                                  </span>
                                </span>
                                <ArrowRight
                                  className="ml-auto mt-1 h-3.5 w-3.5 shrink-0 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                                  aria-hidden
                                />
                              </motion.a>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher onDark={onDark} />
            <Button
              asChild
              className={cn(
                'hidden rounded-full px-5 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex',
                onDark
                  ? 'bg-gold text-emerald-950 shadow-amber-900/30 hover:bg-amber-300'
                  : 'bg-primary text-primary-foreground shadow-emerald-900/20 hover:bg-primary/90'
              )}
            >
              <a href={`#/${'kontak'}`} onClick={(e) => { e.preventDefault(); go('kontak'); }} className="gap-2">
                <Phone className="h-4 w-4" aria-hidden />
                {ns.orderCta}
              </a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={cn(
                'inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur lg:hidden',
                onDark
                  ? 'border-white/25 bg-white/10 text-white'
                  : 'border-emerald-900/10 bg-white/80 text-foreground'
              )}
              aria-label={ns.openMenu}
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </motion.div>

      {/* ===== Drawer Mobile ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-emerald-950/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-cream shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-emerald-900/10 p-5">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-900/10 bg-white text-foreground"
                  aria-label={ns.closeMenu}
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <nav aria-label="Navigasi seluler" className="flex-1 overflow-y-auto overscroll-contain p-4">
                {NAV_GROUPS.map((group, gi) => (
                  <motion.div
                    key={group.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + gi * 0.05 }}
                    className="mb-1"
                  >
                    {group.children ? (
                      <div className="overflow-hidden rounded-xl">
                        <button
                          type="button"
                          onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                          aria-expanded={openGroup === group.label}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-primary/5"
                        >
                          {ns.groups?.[group.label] ?? group.label}
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 text-primary transition-transform duration-300',
                              openGroup === group.label && 'rotate-180'
                            )}
                            aria-hidden
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {openGroup === group.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28 }}
                            >
                              <div className="ml-4 space-y-0.5 border-l-2 border-primary/15 pb-2 pl-3">
                                {group.children.map((child) => (
                                  <a
                                    key={child.slug}
                                    href={`#/${child.slug}`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      go(child.slug);
                                    }}
                                    className={cn(
                                      'block rounded-lg px-3 py-2 text-sm transition-colors',
                                      activeSlug === child.slug
                                        ? 'bg-primary/10 font-semibold text-primary'
                                        : 'text-foreground/75 hover:bg-primary/5 hover:text-primary'
                                    )}
                                  >
                                    {pageMeta(t, child.slug).navLabel ?? child.label}
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href="#/"
                        onClick={(e) => {
                          e.preventDefault();
                          go(group.slug!);
                        }}
                        className={cn(
                          'block rounded-xl px-4 py-3.5 text-base font-semibold transition-colors',
                          activeSlug === group.slug
                            ? 'bg-primary/10 text-primary'
                            : 'text-foreground hover:bg-primary/5 hover:text-primary'
                        )}
                      >
                        {ns.groups?.[group.label] ?? group.label}
                      </a>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="space-y-3 border-t border-emerald-900/10 p-5">
                <LanguageSwitcher compact />
                <Button asChild className="w-full rounded-full bg-primary text-primary-foreground">
                  <a
                    href={`#/${'kontak'}`}
                    onClick={(e) => { e.preventDefault(); go('kontak'); }}
                    className="gap-2"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    {ns.orderCta}
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full rounded-full border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                  <a href={waLink()} target="_blank" rel="noopener noreferrer external" className="gap-2">
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    {ns.waCta} {COMPANY.whatsappDisplay}
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

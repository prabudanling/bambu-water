'use client';

import { useMemo, useState } from 'react';
import { Search, Map as MapIcon, ChevronDown, ChevronUp, LayoutGrid, Sprout, Briefcase, HeartPulse } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { CtaBand } from '@/components/site/cta-band';
import { PAGES_META, NAV_GROUPS } from '@/lib/pages-registry';
import { getAllAutoMetas } from '@/lib/auto-pages';
import { AutoJsonLd, breadcrumbNode } from '@/components/pages/auto-shared';
import { SITE_URL } from '@/lib/company';
import { cn } from '@/lib/utils';

/* ============================================================
   PETA SITUS (HTML SITEMAP) — indeks telusuri semua halaman
   Halaman inti + halaman programatik (kota, kondisi, layanan,
   bambu) dengan pencarian live. Boost internal-linking SEO.
   ============================================================ */

type Group = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  links: { slug: string; label: string }[];
};

export function PetaSitusPage() {
  const auto = useMemo(() => getAllAutoMetas(), []);
  const [query, setQuery] = useState('');

  const groups: Group[] = useMemo(() => {
    const core = Object.values(PAGES_META).map((m) => ({
      slug: m.slug === 'beranda' ? '' : m.slug,
      label: m.navLabel ?? m.h1,
    }));
    const autoGroups: Group[] = [
      {
        id: 'kesehatan',
        title: 'Terapi per Kondisi Kesehatan',
        icon: HeartPulse,
        links: auto
          .filter((m) => m.slug.startsWith('air-bambu-untuk/'))
          .map((m) => ({ slug: m.slug, label: m.h1 })),
      },
      {
        id: 'kota',
        title: 'Jangkauan Pengiriman per Kota & Kabupaten',
        icon: MapIcon,
        links: auto
          .filter((m) => m.slug.startsWith('kota/'))
          .map((m) => ({ slug: m.slug, label: m.h1 })),
      },
      {
        id: 'layanan',
        title: 'Layanan & Skema Kerja Sama',
        icon: Briefcase,
        links: auto
          .filter((m) => m.slug.startsWith('layanan/'))
          .map((m) => ({ slug: m.slug, label: m.h1 })),
      },
      {
        id: 'bambu',
        title: 'Jenis Bambu Unggulan',
        icon: Sprout,
        links: auto
          .filter((m) => m.slug.startsWith('bambu/'))
          .map((m) => ({ slug: m.slug, label: m.h1 })),
      },
      {
        id: 'indeks',
        title: 'Halaman Indeks Direktori',
        icon: LayoutGrid,
        links: auto
          .filter(
            (m) =>
              m.slug === 'kota' ||
              m.slug === 'kesehatan' ||
              m.slug === 'layanan' ||
              m.slug === 'bambu'
          )
          .map((m) => ({ slug: m.slug, label: m.h1 })),
      },
    ];

    /* Halaman inti dikelompokkan mengikuti struktur menu */
    const coreGroup: Group = {
      id: 'inti',
      title: 'Halaman Utama & Konten Inti',
      icon: LayoutGrid,
      links: core,
    };

    return [coreGroup, ...autoGroups];
  }, [auto]);

  const q = query.trim().toLowerCase();
  const filtered = useMemo(
    () =>
      groups
        .map((g) => ({
          ...g,
          links: q ? g.links.filter((l) => l.label.toLowerCase().includes(q) || l.slug.includes(q.replace(/\s+/g, '-'))) : g.links,
        }))
        .filter((g) => g.links.length > 0),
    [groups, q]
  );

  const totalLinks = groups.reduce((a, g) => a + g.links.length, 0);

  const jsonLd = [
    breadcrumbNode([
      { name: 'Beranda', url: `${SITE_URL}/` },
      { name: 'Peta Situs', url: `${SITE_URL}/#/peta-situs` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#/peta-situs#webpage`,
      name: 'Peta Situs — Indeks Semua Halaman',
      url: `${SITE_URL}/#/peta-situs`,
      description: `Direktori lengkap ${totalLinks}+ halaman bambuwater.web.id: kesehatan, kota pengiriman, layanan, jenis bambu, dan artikel.`,
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
  ];

  return (
    <>
      <AutoJsonLd nodes={jsonLd} />
      <PageHero slug="peta-situs" />

      <PageSection bg="light">
        <SectionHeading
          eyebrow="Direktori Navigasi"
          title="Peta Situs Lengkap"
          highlight={`— ${totalLinks} Halaman Terindeks`}
          description="Temukan halaman mana pun dalam sekejap: dari terapi kesehatan, 2.500+ kota pengiriman, hingga katalog layanan. Gunakan pencarian di bawah."
        />

        {/* Pencarian global */}
        <Reveal className="mx-auto mt-10 max-w-2xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-primary/60" aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari halaman… mis. ginjal, bandung, kargo"
              aria-label="Cari halaman di peta situs"
              className="w-full rounded-full border border-primary/20 bg-white py-4 pl-13 pr-5 text-sm shadow-lg shadow-emerald-900/5 outline-none transition-all duration-300 focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
            />
          </div>
          {q && (
            <p className="mt-3 text-center text-xs text-muted-foreground" aria-live="polite">
              {filtered.reduce((a, g) => a + g.links.length, 0)} hasil untuk{' '}
              <span className="font-semibold text-primary">&ldquo;{query}&rdquo;</span>
            </p>
          )}
        </Reveal>

        {/* Grup tautan */}
        <div className="mx-auto mt-10 max-w-6xl space-y-6">
          {filtered.map((g, gi) => (
            <SitemapGroup key={g.id} group={g} defaultOpen={gi === 0 || (g.links.length <= 40)} />
          ))}
          {filtered.length === 0 && (
            <p className="py-16 text-center text-sm text-muted-foreground">
              Tidak ada halaman cocok. Coba kata kunci lain — mis. nama kota, kondisi kesehatan, atau jenis layanan.
            </p>
          )}
        </div>

        {/* Rujukan XML */}
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-3xl border border-primary/15 bg-secondary/50 p-6 text-center">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Mesin pencari dapat menelusuri versi mesin di{' '}
              <a href="/sitemap.xml" className="link-underline font-semibold text-primary" rel="internal">
                sitemap.xml
              </a>{' '}
              — dipbarui otomatis setiap kali halaman baru terbit.
            </p>
          </div>
        </Reveal>
      </PageSection>

      <CtaBand />
    </>
  );
}

/* Grup bisa dilipat dengan animasi halus */
function SitemapGroup({ group, defaultOpen }: { group: Group; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const Icon = group.icon;

  return (
    <Reveal>
      <div className="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/30"
        >
          <span className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-5.5 w-5.5" aria-hidden />
            </span>
            <span>
              <span className="block font-serif text-base font-bold text-foreground sm:text-lg">
                {group.title}
              </span>
              <span className="text-xs text-muted-foreground">{group.links.length} halaman</span>
            </span>
          </span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {open ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" aria-hidden />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" aria-hidden />
            )}
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <ul className={cn('grid gap-x-6 gap-y-1 border-t border-border/60 px-6 py-5', group.links.length > 30 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2')}>
                {group.links.map((l) => (
                  <li key={l.slug || 'beranda'}>
                    <a
                      href={l.slug ? `#/${l.slug}` : '#/'}
                      className="block truncate rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:bg-primary/5 hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

'use client';

/**
 * BLOK BERSAMA HALAMAN PROGRAMATIK — dipakai CityPage, ConditionPage,
 * ServicePage, BambooTypePage & halaman indeks.
 * Konsisten dengan desain situs: emerald-950/green palette, gold accent,
 * Framer Motion reveal, shadcn Card/Accordion.
 */

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ChevronRight, Check, MessageCircle, Leaf, Sparkles,
  ShieldCheck, Clock, PackageCheck, Star,
} from 'lucide-react';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { waLink, COMPANY } from '@/lib/company';
import { SITE_URL } from '@/lib/pages-registry';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/site/reveal';

/* ============ JSON-LD tambahan per halaman programatik ============ */

export function AutoJsonLd({ nodes }: { nodes: Record<string, unknown>[] }) {
  return (
    <>
      {nodes.map((node, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
    </>
  );
}

export function breadcrumbNode(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}/${it.url}`,
    })),
  };
}

export function faqNode(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceNode(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}/${url}`,
    provider: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: COMPANY.legalName,
      telephone: COMPANY.phone,
      areaServed: 'Indonesia',
    },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
  };
}

export function productNode(name: string, description: string, url: string, price: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url: `${SITE_URL}/${url}`,
    brand: { '@type': 'Brand', name: COMPANY.name },
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/${url}`,
    },
  };
}

/* ============ HERO HALAMAN PROGRAMATIK ============ */

export function AutoHero({
  eyebrow, title, intro, children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-emerald-950 text-white" aria-labelledby="auto-hero-title">
      <div aria-hidden className="animate-soft-pulse absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-500/15 blur-3xl" />
      <div aria-hidden className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
          {eyebrow}
        </motion.span>
        <motion.h1
          id="auto-hero-title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-emerald-50/85 sm:text-lg"
        >
          {intro}
        </motion.p>
        {children}
      </div>
    </section>
  );
}

/* ============ CTA BAND WHATSAPP ============ */

export function AutoCta({
  title = 'Siap Memesan? Konsultasi Gratis!',
  subtitle = 'Tim kami siap membantu kebutuhan terapi keluarga hingga kontrak distribusi massal — balasan cepat di jam kerja.',
  message,
}: {
  title?: string;
  subtitle?: string;
  message?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 py-14 text-white">
      <div aria-hidden className="animate-soft-pulse absolute -left-10 top-0 h-52 w-52 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-emerald-50/85">{subtitle}</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gold text-emerald-950 hover:bg-gold/90 shadow-lg shadow-black/20"
            >
              <a href={waLink(message)} target="_blank" rel="noopener noreferrer" aria-label="Pesan via WhatsApp">
                <MessageCircle className="mr-2 h-5 w-5" aria-hidden />
                WhatsApp {COMPANY.whatsappDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/15"
            >
              <Link href="#/kontak">Formulir Pemesanan <ChevronRight className="ml-1 h-4 w-4" aria-hidden /></Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-emerald-50/60">{COMPANY.operationalHours}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ SECTION WRAPPER ============ */

export function AutoSection({
  eyebrow, title, description, children, dark = false, className = '',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section className={`py-14 sm:py-16 ${dark ? 'bg-emerald-950/95 text-white' : 'bg-background'} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={eyebrow ? 'mb-10' : 'mb-8'}>
          {eyebrow && (
            <Reveal direction="down">
              <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${dark ? 'border-white/20 bg-white/10 text-emerald-100' : 'border-primary/20 bg-primary/5 text-primary'}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-gold' : 'bg-bamboo'}`} aria-hidden />
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.08}>
            <h2 className={`mt-4 text-2xl font-bold leading-tight sm:text-3xl ${dark ? 'text-white' : 'text-foreground'}`}>
              {title}
            </h2>
          </Reveal>
          {description && (
            <Reveal delay={0.14}>
              <p className={`mt-3 max-w-3xl leading-relaxed ${dark ? 'text-emerald-50/80' : 'text-muted-foreground'}`}>
                {description}
              </p>
            </Reveal>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ============ FAQ ACCORDION ============ */

export function AutoFaq({ faqs, title = 'Pertanyaan yang Sering Diajukan' }: {
  faqs: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <AutoSection title={title} className="bg-muted/40">
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold sm:text-lg">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AutoSection>
  );
}

/* ============ BREADCRUMB ============ */

export function AutoBreadcrumb({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border/60 bg-muted/50">
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1.5 px-4 py-3 text-xs text-muted-foreground sm:px-6 lg:px-8 sm:text-sm">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden />}
            {it.href ? (
              <Link href={it.href} className="hover:text-primary hover:underline">{it.label}</Link>
            ) : (
              <span aria-current="page" className="font-medium text-foreground">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ============ GRID KARTU FITUR ============ */

export function FeatureGrid({ items, columns = 4 }: {
  items: { icon: 'leaf' | 'sparkles' | 'shield' | 'clock' | 'package' | 'star'; title: string; desc: string }[];
  columns?: number;
}) {
  const iconMap = {
    leaf: Leaf, sparkles: Sparkles, shield: ShieldCheck,
    clock: Clock, package: PackageCheck, star: Star,
  };
  return (
    <StaggerContainer className={`grid gap-5 sm:grid-cols-2 ${columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
      {items.map((it, i) => {
        const Icon = iconMap[it.icon];
        return (
          <StaggerItem key={i}>
            <div className="group h-full rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-base font-semibold leading-snug">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}

/* ============ CHECKLIST ============ */

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card px-4 py-3">
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check className="h-3 w-3" aria-hidden />
          </span>
          <span className="text-sm leading-relaxed">{it}</span>
        </li>
      ))}
    </ul>
  );
}

/* ============ CHIP LINK INTERNAL ============ */

export function LinkChips({ items, baseHref, max }: {
  items: { label: string; slug: string }[];
  baseHref: string;
  max?: number;
}) {
  const shown = max ? items.slice(0, max) : items;
  return (
    <div className="flex flex-wrap gap-2">
      {shown.map((it) => (
        <Link
          key={it.slug}
          href={`${baseHref}/${it.slug}`}
          className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/90 transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
        >
          {it.label}
        </Link>
      ))}
    </div>
  );
}

/* ============ SEARCH / FILTER UNTUK INDEKS BESAR ============ */

export function SearchableList({
  items, placeholder = 'Cari...', renderItem,
}: {
  items: { label: string; slug: string; sub?: string }[];
  placeholder?: string;
  renderItem: (item: { label: string; slug: string; sub?: string }) => ReactNode;
}) {
  const [q, setQ] = useState('');
  const filtered = q.trim()
    ? items.filter((it) => (it.label + ' ' + (it.sub ?? '')).toLowerCase().includes(q.trim().toLowerCase()))
    : items;
  return (
    <div>
      <div className="mb-6">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="w-full max-w-md rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
        />
        <p className="mt-2 text-xs text-muted-foreground" aria-live="polite">
          {q ? `${filtered.length} hasil untuk "${q}"` : `${items.length} entri`}
        </p>
      </div>
      {filtered.length > 0 ? (
        <div className="grid max-h-[32rem] gap-2.5 overflow-y-auto pr-2 sm:grid-cols-2 lg:grid-cols-3 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:hover:bg-primary/40 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1.5">
          {filtered.map(renderItem)}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground">
          Tidak ditemukan. Coba kata kunci lain — atau hubungi kami via WhatsApp untuk wilayah khusus.
        </p>
      )}
    </div>
  );
}

/* ============ BADGE STATUS ============ */

export function StatusBadge({ children }: { children: ReactNode }) {
  return (
    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/15">
      {children}
    </Badge>
  );
}

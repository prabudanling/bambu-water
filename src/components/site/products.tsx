'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, MessageCircle, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PRODUCTS, COMPANY } from '@/lib/company';
import { Reveal, StaggerContainer, StaggerItem } from './reveal';
import { SectionHeading } from './section-heading';
import { cn } from '@/lib/utils';

export function Products() {
  const [active, setActive] = useState(0);

  const waHref = (product: string) =>
    `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
      `Halo Bambu Water Nusantara, saya tertarik dengan produk ${product}. Mohon info harga & pengiriman.`
    )}`;

  return (
    <section id="produk" className="relative overflow-hidden py-24 sm:py-28" aria-label="Produk kami">
      <div
        aria-hidden
        className="animate-soft-pulse pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Produk Kami"
          title="Tiga Solusi,"
          highlight="Satu Kemurnian"
          description="Dari botol untuk rumah Anda hingga kargo truk untuk proyek besar — semua dengan standar kualitas yang sama."
        />

        {/* Tab produk */}
        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                'relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300',
                active === i
                  ? 'text-primary-foreground'
                  : 'border border-emerald-900/15 bg-white text-foreground/70 hover:border-primary/40 hover:text-primary'
              )}
              aria-pressed={active === i}
            >
              {active === i && (
                <motion.span
                  layoutId="product-pill"
                  className="absolute inset-0 rounded-full bg-primary shadow-lg shadow-emerald-900/25"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{p.name.split('(')[0].split('Premium')[0].trim()}</span>
            </button>
          ))}
        </Reveal>

        {/* Kartu produk aktif */}
        <div className="relative mx-auto mt-12 max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.article
              key={PRODUCTS[active].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-2xl shadow-emerald-900/15 lg:grid-cols-2"
            >
              {/* Gambar */}
              <div className="group relative min-h-[280px] overflow-hidden lg:min-h-[460px]">
                { }
                <img
                  src={PRODUCTS[active].image}
                  alt={`${PRODUCTS[active].name} — ${PRODUCTS[active].tagline} dari Bambu Water Nusantara`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/55 via-transparent to-transparent" />
                <Badge className="absolute left-5 top-5 rounded-full bg-gold px-4 py-1.5 text-sm font-bold text-emerald-950 shadow-lg">
                  {PRODUCTS[active].badge}
                </Badge>
                <p className="absolute bottom-5 left-5 right-5 font-serif text-2xl font-bold text-white drop-shadow-lg">
                  {PRODUCTS[active].tagline}
                </p>
              </div>

              {/* Detail */}
              <div className="flex flex-col p-7 sm:p-10">
                <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                  {PRODUCTS[active].name}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{PRODUCTS[active].description}</p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {PRODUCTS[active].features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-bamboo">
                    Tersedia dalam kemasan
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {PRODUCTS[active].sizes.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center gap-1.5 rounded-full border border-emerald-900/15 bg-emerald-50 px-3.5 py-1.5 text-sm font-medium text-emerald-900"
                      >
                        <Package className="h-3.5 w-3.5" aria-hidden />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="flex-1 rounded-full bg-primary py-6 text-base font-semibold shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90">
                    <a href="#/kontak">Minta Penawaran</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 rounded-full border-primary/40 py-6 text-base font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/10"
                  >
                    <a href={waHref(PRODUCTS[active].name)} target="_blank" rel="noopener noreferrer external" className="gap-2">
                      <MessageCircle className="h-5 w-5" aria-hidden />
                      Chat WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Indikator */}
        <div className="mt-8 flex justify-center gap-2">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Tampilkan produk ${p.name}`}
              className={cn(
                'h-2.5 rounded-full transition-all duration-300',
                active === i ? 'w-8 bg-primary' : 'w-2.5 bg-emerald-900/20 hover:bg-emerald-900/40'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

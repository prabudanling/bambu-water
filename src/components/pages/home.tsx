'use client';

import { Hero } from '@/components/site/hero';
import { StatsStrip } from '@/components/site/stats-strip';
import { About } from '@/components/site/about';
import { Benefits } from '@/components/site/benefits';
import { ReasonsSection } from '@/components/site/reasons';
import { Science } from '@/components/site/science';
import { Process } from '@/components/site/process';
import { Products } from '@/components/site/products';
import { Delivery } from '@/components/site/delivery';
import { Leadership } from '@/components/site/leadership';
import { Testimonials } from '@/components/site/testimonials';
import { Faq } from '@/components/site/faq';
import { Contact } from '@/components/site/contact';

/** Halaman 1/25 — Beranda (komposisi semua section utama) */
export function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <About />
      <Benefits />
      <ReasonsSection />
      <Science />
      <Process />
      <Products />
      <Delivery />
      <Leadership />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}

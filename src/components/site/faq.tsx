'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, MessageCircleQuestion } from 'lucide-react';
import { FAQS, COMPANY } from '@/lib/company';
import { useI18n } from '@/lib/i18n/context';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function Faq() {
  const [openItem, setOpenItem] = useState<string>('');
  const { t } = useI18n();
  const s = t.ui.faq;
  const list = Array.isArray(t.data?.faqs) && t.data.faqs.length > 0 ? t.data.faqs : FAQS;

  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-28" aria-label={s.ariaLabel}>
      <div
        aria-hidden
        className="animate-soft-pulse pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-teal-100/50 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={s.eyebrow}
          title={s.title}
          highlight={s.highlight}
          description={s.description}
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <Reveal>
            <Accordion
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
              className="space-y-3"
            >
              {list.map((f: { q: string; a: string }, i: number) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="overflow-hidden rounded-2xl border border-emerald-900/10 bg-white px-6 shadow-sm transition-all duration-300 data-[state=open]:border-primary/30 data-[state=open]:shadow-md"
                >
                  <AccordionTrigger className="gap-4 py-5 text-left font-serif text-base font-bold text-foreground hover:no-underline hover:text-primary sm:text-lg">
                    <span className="flex items-start gap-3">
                      <HelpCircle
                        className={`mt-0.5 h-5 w-5 shrink-0 transition-colors ${openItem === `faq-${i}` ? 'text-primary' : 'text-bamboo/60'}`}
                        aria-hidden
                      />
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-9 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={0.15} className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              {s.moreAsk}{' '}
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent('Halo, saya ingin bertanya tentang produk Bambu Water Nusantara')}`}
                target="_blank"
                rel="noopener noreferrer external"
                className="inline-flex items-center gap-1.5 font-semibold text-primary underline decoration-gold/60 decoration-2 underline-offset-4 transition-colors hover:text-bamboo"
              >
                <MessageCircleQuestion className="h-4 w-4" aria-hidden />
                {s.moreCta}
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Search, MessageCircle, CreditCard, PackageCheck, Clock3, ShieldCheck } from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { QuoteForm } from '@/components/site/quote-form';
import { CtaBand } from '@/components/site/cta-band';
import { waLink, COMPANY, SITE_URL } from '@/lib/company';
import { useI18n } from '@/lib/i18n/context';

const STEP_ICONS = [Search, MessageCircle, CreditCard, PackageCheck];

/** JSON-LD HowTo — rich result langkah pemesanan di Google */
function HowToJsonLd({ steps }: { steps: { title: string; text: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${SITE_URL}/#/cara-pemesanan#howto`,
    name: 'Cara Memesan Air Bambu & Bambu Batang di Bambu Water Nusantara',
    description:
      'Empat langkah mudah memesan air bambu suling, air bambu tabib, dan bambu batang: pilih produk, konfirmasi WhatsApp, pembayaran, dan pengiriman.',
    totalTime: 'PT15M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'IDR', value: '150000' },
    step: steps.map((st, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: st.title.replace(/^\d\. /, ''),
      text: st.text.replace('{wa}', COMPANY.whatsappDisplay),
      url: `${SITE_URL}/#/cara-pemesanan#langkah-${i + 1}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** Halaman 22/25 — Cara Pemesanan */
export function CaraPemesananPage() {
  const { t } = useI18n();
  const s = t.pages['cara-pemesanan'].s;

  return (
    <>
      <HowToJsonLd steps={s.steps} />
      <PageHero slug="cara-pemesanan" />

      <PageSection bg="light">
        <SectionHeading
          eyebrow={s.stepsEyebrow}
          title={s.stepsTitle}
          highlight={s.stepsHighlight}
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.steps.map((step: { title: string; text: string }, i: number) => {
            const StepIcon = STEP_ICONS[i];
            return (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="relative h-full rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-emerald-900/10">
                  <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-xs font-bold text-emerald-950 shadow">
                    {s.stepLabel} {i + 1}
                  </span>
                  <span className="mt-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <StepIcon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{step.title.replace(/^\d\. /, '')}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text.replace('{wa}', COMPANY.whatsappDisplay)}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </PageSection>

      {/* Form + info pembayaran */}
      <PageSection bg="cream">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>

          <div className="space-y-6 lg:col-span-2">
            <Reveal direction="left">
              <div className="rounded-3xl border border-primary/15 bg-white p-6 shadow-sm">
                <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
                  <CreditCard className="h-5 w-5 text-primary" aria-hidden />
                  {s.paymentTitle}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {s.paymentMethods.map((m: string) => (
                    <li key={m} className="flex items-center gap-2.5 text-sm text-foreground/85">
                      <ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="rounded-3xl border border-primary/15 bg-white p-6 shadow-sm">
                <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
                  <Clock3 className="h-5 w-5 text-primary" aria-hidden />
                  {s.shippingTitle}
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-foreground/85">
                  {s.shipping.map((row: { area: string; eta: string }) => (
                    <li key={row.area} className="flex justify-between gap-3"><span>{row.area}</span><strong className="text-primary">{row.eta}</strong></li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <div className="rounded-3xl bg-primary p-6 text-primary-foreground shadow-lg shadow-emerald-900/20">
                <h3 className="font-serif text-lg font-bold">{s.chatTitle}</h3>
                <p className="mt-2 text-sm text-primary-foreground/85">
                  {s.chatDesc.replace('{hours}', COMPANY.operationalHours)}
                </p>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer external"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-emerald-800 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <MessageCircle className="h-4.5 w-4.5" aria-hidden />
                  {s.chatWaLabel} {COMPANY.whatsappDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </PageSection>

      {/* FAQ singkat */}
      <PageSection bg="light">
        <SectionHeading eyebrow={s.faqEyebrow} title={s.faqTitle} highlight={s.faqHighlight} />
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {s.quickFaqs.map((f: { q: string; a: string }, i: number) => (
            <Reveal key={f.q} delay={i * 0.08}>
              <div className="rounded-2xl border border-primary/10 bg-white p-5 shadow-sm">
                <p className="font-semibold text-foreground">{f.q}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </Reveal>
          ))}
          <p className="pt-2 text-center text-sm text-muted-foreground">
            {s.faqMore} <a href="#/faq" className="font-semibold text-primary underline decoration-gold underline-offset-4 hover:text-primary/80">{s.faqMoreLink}</a>
          </p>
        </div>
      </PageSection>

      <CtaBand />
    </>
  );
}

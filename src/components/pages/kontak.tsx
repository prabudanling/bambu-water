'use client';

import { Phone, Mail, MapPin, Clock, MessageCircle, Building2 } from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { QuoteForm } from '@/components/site/quote-form';
import { CtaBand } from '@/components/site/cta-band';
import { COMPANY, OFFICES, waLink } from '@/lib/company';
import { useI18n } from '@/lib/i18n/context';

const CONTACT_CARDS = [
  {
    icon: MessageCircle,
    value: COMPANY.whatsappDisplay,
    href: waLink(),
    highlight: true,
  },
  {
    icon: Phone,
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`,
    note: COMPANY.operationalHours,
  },
  {
    icon: Mail,
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: Mail,
    value: COMPANY.emailSales,
    href: `mailto:${COMPANY.emailSales}`,
  },
];

/** Halaman 25/25 — Kontak */
export function KontakPage() {
  const { t } = useI18n();
  const s = t.pages['kontak'].s;

  return (
    <>
      <PageHero slug="kontak" />

      <PageSection bg="light">
        {/* Kartu kontak */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map((c, i) => (
            <Reveal key={`${c.value}-${i}`} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer external' : undefined}
                className={`group flex h-full flex-col rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 ${
                  c.highlight
                    ? 'border-emerald-500/40 bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-lg shadow-emerald-900/20 hover:shadow-xl'
                    : 'border-primary/10 bg-white hover:shadow-lg hover:shadow-emerald-900/10'
                }`}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${c.highlight ? 'bg-white/15 text-white' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                  <c.icon className="h-6 w-6" aria-hidden />
                </span>
                <h2 className={`mt-4 text-sm font-bold uppercase tracking-wider ${c.highlight ? 'text-emerald-50' : 'text-muted-foreground'}`}>
                  {s.cards[i].title}
                </h2>
                <p className={`mt-1 break-all font-serif text-lg font-bold ${c.highlight ? 'text-white' : 'text-foreground'}`}>
                  {c.value}
                </p>
                <p className={`mt-2 text-xs leading-relaxed ${c.highlight ? 'text-emerald-50/80' : 'text-muted-foreground'}`}>
                  {c.note ?? s.cards[i].note}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Form + info perusahaan */}
        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>

          <div className="space-y-6 lg:col-span-2">
            <Reveal direction="left">
              <div className="rounded-3xl border border-primary/15 bg-white p-6 shadow-sm">
                <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
                  <Building2 className="h-5 w-5 text-primary" aria-hidden />
                  {s.identityTitle}
                </h2>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.legalLabel}</dt>
                    <dd className="mt-0.5 font-semibold text-foreground">{COMPANY.legalName} — {s.legalValue}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.foundedLabel}</dt>
                    <dd className="mt-0.5 font-semibold text-foreground">{s.foundedValue}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.siteLabel}</dt>
                    <dd className="mt-0.5 font-semibold text-foreground">{COMPANY.domain}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="rounded-3xl border border-primary/15 bg-white p-6 shadow-sm">
                <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden />
                  {s.addressTitle}
                </h2>
                <div className="mt-4 space-y-3">
                  {OFFICES.map((o) => (
                    <div key={o.id} className="rounded-2xl bg-secondary/50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary">{o.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{o.address}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {COMPANY.operationalHours}
                </p>
                <div className="mt-4 rounded-2xl bg-secondary/50 p-4 text-sm leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">{s.areaLabel}</strong> {s.areaText}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </PageSection>

      <CtaBand
        waMessage="Halo Bambu Water Nusantara! Saya ingin berkonsultasi."
        title={s.ctaTitle}
        description={s.ctaDescription.replace('{wa}', COMPANY.whatsappDisplay)}
      />
    </>
  );
}

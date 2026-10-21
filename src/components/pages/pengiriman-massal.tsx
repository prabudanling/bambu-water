'use client';

import { Truck, Ship, Plane, PackageCheck, ShieldCheck, MapPinned, Boxes, Clock3 } from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/site/reveal';
import { CtaBand } from '@/components/site/cta-band';
import { DELIVERY_TIERS } from '@/lib/company';
import { useI18n } from '@/lib/i18n/context';

const TIER_ICONS = { truck: Truck, ship: Ship, plane: Plane } as const;

const CAPABILITIES = [
  { icon: Boxes, title: 'Kapasitas Massal', text: 'Botol harian, jerigen/drum palet, hingga truk penuh bambu batang 200–400 batang per kirim.' },
  { icon: PackageCheck, title: 'Packing Aman', text: 'Karton double-wall, segel kayu, strapping, dan cold-pack untuk sadapan segar jarak jauh.' },
  { icon: MapPinned, title: 'Pelacakan Kiriman', text: 'Nomor resi & update status via WhatsApp sampai barang diterima.' },
  { icon: Clock3, title: 'Jadwal Rutin', text: 'Kontrak pengiriman mingguan/bulanan untuk distributor, klinik, dan proyek.' },
];

/** Fallback alur pengiriman (id) */
const FLOW_STEPS_FALLBACK = [
  { title: 'Konsultasi & Penawaran', text: 'Sampaikan jenis, volume, dan kota tujuan — penawaran resmi kami kirim maks. 1×24 jam.' },
  { title: 'Kontrak & DP', text: 'Sepakati harga, jadwal, dan syarat. DP 50% memulai produksi/pengadaan.' },
  { title: 'Produksi & Packing', text: 'Produksi sesuai jadwal + packing standar kargo (segel kayu untuk muatan penuh).' },
  { title: 'Kirim & Lacak', text: 'Barang berangkat dengan resi terlacak — pelunasan saat serah terima.' },
];

/** Fallback string halaman (id) — dipakai bila fragment halaman belum ter-compile */
const S_FALLBACK = {
  tiersEyebrow: 'Layanan Kargo',
  tiersTitle: 'Tiga Jalur Pengiriman',
  tiersHighlight: 'Sesuai Kebutuhan Anda',
  tiersDescription: 'Dari kurir reguler hingga kargo udara — semua distandarkan dengan packing aman.',
  capEyebrow: 'Kapabilitas',
  capTitle: 'Volume Besar?',
  capHighlight: 'Siap.',
  flowEyebrow: 'Alur Kirim',
  flowTitle: 'Bagaimana Pesanan Besar',
  flowHighlight: 'Diproses',
  ctaTitle: 'Minta Penawaran Kargo Sekarang',
  ctaDescription: 'Kirim detail kebutuhan Anda — penawaran resmi dengan estimasi ongkos kirim maksimal 1×24 jam kerja.',
  ctaWaMessage: 'Halo! Saya ingin minta penawaran pengiriman massal. Berikut detail kebutuhan saya:',
};

/** Halaman 19/25 — Pengiriman Massal */
export function PengirimanMassalPage() {
  const { t } = useI18n();
  const s: Record<string, any> = { ...S_FALLBACK, ...(t.pages?.['pengiriman-massal']?.s ?? {}) };
  const tiers =
    Array.isArray(t.data?.deliveryTiers) && t.data.deliveryTiers.length > 0
      ? t.data.deliveryTiers
      : DELIVERY_TIERS;
  const capabilities =
    Array.isArray(s.capabilities) && s.capabilities.length > 0 ? s.capabilities : CAPABILITIES;
  const flowSteps =
    Array.isArray(s.flowSteps) && s.flowSteps.length > 0 ? s.flowSteps : FLOW_STEPS_FALLBACK;

  return (
    <>
      <PageHero slug="pengiriman-massal" />

      {/* Tiga tier layanan */}
      <PageSection bg="light">
        <SectionHeading
          eyebrow={s.tiersEyebrow}
          title={s.tiersTitle}
          highlight={s.tiersHighlight}
          description={s.tiersDescription}
        />
        <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map(
            (
              tier: { name: string; eta: string; description: string; area: string; features: string[]; icon?: string },
              i: number
            ) => {
              const Icon = TIER_ICONS[tier.icon as keyof typeof TIER_ICONS] ?? Truck;
              return (
                <StaggerItem key={i}>
                  <div className="group flex h-full flex-col rounded-3xl border border-primary/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-900/10">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-7 w-7" aria-hidden />
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-bold text-foreground">{tier.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">{tier.eta}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.description}</p>
                    <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                      <MapPinned className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                      {tier.area}
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-border pt-4">
                      {tier.features.map((f: string, fi: number) => (
                        <li key={fi} className="flex items-center gap-2 text-sm text-foreground/80">
                          <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            }
          )}
        </StaggerContainer>
      </PageSection>

      {/* Kapabilitas */}
      <PageSection bg="cream">
        <SectionHeading
          eyebrow={s.capEyebrow}
          title={s.capTitle}
          highlight={s.capHighlight}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c: { title: string; text: string }, i: number) => {
            const Icon = CAPABILITIES[i]?.icon ?? Boxes;
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-emerald-900/10">
                  <Icon className="h-8 w-8 text-primary" aria-hidden />
                  <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </PageSection>

      {/* Alur pengiriman */}
      <PageSection bg="dark">
        <SectionHeading
          eyebrow={s.flowEyebrow}
          title={s.flowTitle}
          highlight={s.flowHighlight}
          dark
        />
        <div className="mx-auto mt-12 max-w-4xl">
          {flowSteps.map((st: { title: string; text: string }, i: number) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-5 border-b border-white/10 py-6 last:border-0">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/15 font-serif text-xl font-bold text-gold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">{st.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-emerald-50/80">{st.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <CtaBand
        waMessage={s.ctaWaMessage}
        title={s.ctaTitle}
        description={s.ctaDescription}
      />
    </>
  );
}

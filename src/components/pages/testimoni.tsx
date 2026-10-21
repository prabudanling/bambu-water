'use client';

import { Star, Quote, MapPin, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/site/reveal';
import { CtaBand } from '@/components/site/cta-band';
import { useI18n } from '@/lib/i18n/context';

const TESTIMONIALS = [
  {
    name: 'Ibu Ratna Dewi',
    role: 'Ibu Rumah Tangga',
    city: 'Bandung',
    rating: 5,
    text: 'Sudah 2 tahun langganan galon air bambu suling untuk keluarga. Anak saya yang sering panas dalam jadi jarang mengeluh, dan rasanya memang segar banget — beda dari air biasa.',
  },
  {
    name: 'Ki Darma Saputra',
    role: 'Tabib Tradisional',
    city: 'Tasikmalaya',
    rating: 5,
    text: 'Sebagai tabib, kualitas sadapan segar itu mutlak. Air Bambu Tabib dari BWN selalu tiba segar dengan segel rapi. Teknik mata tunas mereka benar — ini sadapan sejati.',
  },
  {
    name: 'Andi Prasetyo',
    role: 'Pemilik Kafe Sehat',
    city: 'Yogyakarta',
    rating: 5,
    text: 'Kami pakai air bambu untuk menu signature "Bamboo Infuse". Pelanggan suka ceritanya, dan pasokan BWN konsisten tiap minggu. Margin bagus karena harga grosir transparan.',
  },
  {
    name: 'Hj. Siti Maryam',
    role: 'Penderita Diabetes',
    city: 'Surabaya',
    rating: 5,
    text: 'Dokter saya sarankan kurangi minuman manis. Air bambu jadi teman setia — rasanya tidak hambar tapi juga tidak naikkan gula darah saya. Terima kasih BWN, pengiriman ke Surabaya juga cepat.',
  },
  {
    name: 'Ir. Bambang Wijaya',
    role: 'Kontraktor Konstruksi',
    city: 'Semarang',
    rating: 5,
    text: 'Proyek rumah bambu 120 batang Petung — semua lurus, kering, dan sesuai spesifikasi. Kargo tiba utuh dengan segel kayu. Sudah 3 proyek pakai BWN, tidak pernah kecewa.',
  },
  {
    name: 'Dra. Lusiana Hakim',
    role: 'Pemilik Klinik Terapi',
    city: 'Jakarta',
    rating: 5,
    text: 'Klinik kami mengintegrasikan terapi minum air bambu. Kontrak pasokan bulanan BWN sangat profesional — jadwal selalu tepat dan ada laporan mutu per batch.',
  },
  {
    name: 'Made Wirawan',
    role: 'Pengrajin Furniture',
    city: 'Denpasar',
    rating: 5,
    text: 'Bambu Wulung-nya benar-benar premium — warna hitam pekat, kilau alami, bebas kutu. Kerajinan saya kini diekspor ke Bali-Australia route. BWN pemasok yang bisa diandalkan.',
  },
  {
    name: 'Rina Kartika',
    role: 'Content Creator Kesehatan',
    city: 'Medan',
    rating: 5,
    text: 'Awalnya skeptis, setelah riset untuk konten saya jadi pengguna rutin. Kulit dan rambut terasa bedanya. Pengiriman ke Medan aman, packing kuat.',
  },
];

function Stars({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex gap-0.5" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < n ? 'fill-gold text-gold' : 'text-muted-foreground/30'}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

/** Halaman 23/25 — Testimoni */
export function TestimoniPage() {
  const { t } = useI18n();
  const s = t.pages['testimoni'].s;
  const list =
    Array.isArray(t.data?.testimonials) && t.data.testimonials.length > 0
      ? t.data.testimonials
      : TESTIMONIALS;

  return (
    <>
      <PageHero slug="testimoni" />

      <PageSection bg="light">
        <SectionHeading
          eyebrow={s.headingEyebrow}
          title={s.headingTitle}
          highlight={s.headingHighlight}
          description={s.headingDescription}
        />

        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-2">
          {list.map((tm: { name: string; role: string; city: string; rating: number; text: string }) => (
            <StaggerItem key={tm.name}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative h-full rounded-3xl border border-primary/10 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-emerald-900/10"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" aria-hidden />
                <Stars n={tm.rating} label={s.ratingAria.replace('{n}', String(tm.rating))} />
                <p className="mt-4 text-sm leading-relaxed text-foreground/85 sm:text-base">“{tm.text}”</p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-serif text-lg font-bold text-primary">
                    {tm.name.replace(/^(Ibu|Hj\.|Ir\.|Dra\.|Ki)\s+/, '').charAt(0)}
                  </span>
                  <div>
                    <p className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                      {tm.name}
                      <BadgeCheck className="h-4 w-4 text-primary" aria-label={s.verified} />
                    </p>
                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      {tm.role} • <MapPin className="h-3 w-3" aria-hidden /> {tm.city}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="grid gap-4 rounded-3xl border border-primary/15 bg-secondary/50 p-7 text-center sm:grid-cols-3">
            <div>
              <p className="font-serif text-3xl font-bold text-primary">18+</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.statYearsLabel}</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-primary">38</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.statProvincesLabel}</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-primary">4,9/5</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.statSatisfactionLabel}</p>
            </div>
          </div>
        </Reveal>
      </PageSection>

      <CtaBand
        waMessage="Halo! Saya ingin bergabung sebagai pelanggan air bambu BWN."
        title={s.ctaTitle}
        description={s.ctaDescription}
      />
    </>
  );
}

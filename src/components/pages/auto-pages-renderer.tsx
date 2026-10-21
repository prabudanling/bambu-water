'use client';

/**
 * RENDERER HALAMAN PROGRAMATIK — bambuwater.web.id
 * Halaman: kota (2.500+), kondisi kesehatan (62), layanan (25),
 * jenis bambu (8), dan 4 halaman indeks. Dispatcher: <AutoPageRenderer slug/>.
 */

import Link from 'next/link';
import {
  MessageCircle, MapPin, Truck, PackageCheck, Timer, Leaf, Droplets,
  Building2, Handshake, Boxes, HardHat, ArrowRight, Info, FlaskConical,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { waLink, PRICING, COMPANY } from '@/lib/company';
import {
  findCity, POPULAR_CITIES, ALL_CITIES, PROVINCES, ETA_BY_REGION,
} from '@/lib/data/cities';
import {
  findCondition, CONDITIONS, conditionsByCategory, CONDITION_CATEGORIES,
  DISCLAIMER_TEXT, type ConditionData,
} from '@/lib/data/conditions';
import {
  findService, SERVICES, servicesByCategory, SERVICE_CATEGORIES, type ServiceData,
} from '@/lib/data/services';
import { findBambooType, BAMBOO_TYPES, type BambooTypeData } from '@/lib/data/bamboo-types';
import { getAutoPage, type AutoPage } from '@/lib/auto-pages';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/site/reveal';
import {
  AutoHero, AutoCta, AutoSection, AutoFaq, AutoBreadcrumb, AutoJsonLd,
  FeatureGrid, CheckList, LinkChips, SearchableList, StatusBadge,
  breadcrumbNode, faqNode, serviceNode, productNode,
} from './auto-shared';

/* ==================================================================== */
/* HALAMAN KOTA — "Air Bambu di {Kota}"                                  */
/* ==================================================================== */

function CityPage({ city }: { city: NonNullable<ReturnType<typeof findCity>> }) {
  const waMsg = `Halo Bambu Water Nusantara! Saya ingin memesan air bambu / bambu batang untuk dikirim ke ${city.name}, ${city.province}.`;
  const otherCities = POPULAR_CITIES.filter((c) => c.slug !== city.slug).slice(0, 11);

  return (
    <>
      <AutoJsonLd nodes={[
        serviceNode(
          `Pengiriman Air Bambu & Bambu Batang di ${city.name}`,
          `Distribusi air bambu terapi dan bambu berkualitas ke ${city.name}, ${city.province} dalam ${city.eta}.`,
          `#/kota/${city.slug}`,
        ),
        faqNode([
          { q: `Berapa lama pengiriman air bambu ke ${city.name}?`, a: `Pengiriman ke ${city.name}, ${city.province} memakan waktu sekitar ${city.eta} melalui jaringan kargo darat, laut, atau udara kami.` },
          { q: `Apakah bisa pesan grosir untuk ${city.name}?`, a: 'Bisa — mulai jerigen hingga truk penuh untuk air bambu maupun bambu batang, dengan harga grosir khusus.' },
          { q: `Bagaimana cara memesan air bambu di ${city.name}?`, a: 'Pesan via WhatsApp 0813-1651-6524 atau formulir pemesanan di situs ini — konfirmasi, pembayaran, lalu pengiriman dengan packing aman.' },
        ]),
        breadcrumbNode([
          { name: 'Beranda', url: '' },
          { name: 'Jangkauan Kota', url: '#/kota' },
          { name: city.name, url: `#/kota/${city.slug}` },
        ]),
      ]} />

      <AutoHero
        eyebrow={`${city.province} · ${city.region}`}
        title={`Air Bambu Terapi & Bambu Berkualitas di ${city.name}`}
        intro={`Pengiriman air bambu suling, air bambu tabib, dan bambu batang pilihan (Petung, Wulung, Apus, Ori) ke ${city.name} dan sekitarnya — tiba dalam ${city.eta}.`}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-gold text-emerald-950 hover:bg-gold/90 shadow-lg shadow-black/20">
            <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden />
              Pesan ke {city.name}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/15">
            <Link href="#/harga-paket">Lihat Harga & Paket</Link>
          </Button>
        </div>
      </AutoHero>

      {/* Statistik kirim */}
      <section className="border-b border-border/60 bg-muted/40 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { icon: Timer, label: 'Estimasi tiba', value: city.eta },
            { icon: MapPin, label: 'Wilayah', value: city.province },
            { icon: Truck, label: 'Moda', value: city.region === 'Maluku & Papua' ? 'Udara & Laut' : city.region === 'Jawa' ? 'Darat Reguler' : 'Darat & Laut' },
            { icon: PackageCheck, label: 'Min. order', value: 'Bebas — dari 1 botol' },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-3">
                <s.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-sm font-semibold">{s.value}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <AutoSection
        eyebrow="Produk untuk Anda"
        title={`Apa Saja yang Dikirim ke ${city.name}?`}
        description="Tiga lini produk utama kami — semua dengan packing food-grade dan jaminan mutu yang sama di seluruh Indonesia."
      >
        <StaggerContainer className="grid gap-5 md:grid-cols-3">
          {[
            { title: 'Air Bambu Suling', desc: 'Minuman terapi harian — botol 600 ml, 1,5 L, hingga galon 19 L. Disuling bertahap, aman konsumsi rutin.', price: 'Mulai Rp 15.000', icon: Droplets },
            { title: 'Air Bambu Tabib', desc: 'Sadapan mentah segar untuk terapis & tabib — dipanen teknik mata tunas, kirim ekspres agar tetap segar.', price: 'Mulai Rp 85.000', icon: Leaf },
            { title: 'Bambu Berkualitas', desc: 'Petung konstruksi, Wulung hitam premium, Apus anyaman, Ori rangka — per batang hingga per truk.', price: 'Mulai Rp 45.000', icon: Boxes },
          ].map((p, i) => (
            <StaggerItem key={i}>
              <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <p.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Badge className="bg-gold/15 text-amber-800 hover:bg-gold/20">{p.price}</Badge>
                    <Link href="#/harga-paket" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                      Detail <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AutoSection>

      <AutoSection
        dark
        title={`Mengapa Warga ${city.name} Memilih Bambu Water Nusantara?`}
        description="Sejak 2007 — pionir, terbesar, dan pertama di Indonesia. Ribuan pelanggan di 38 provinsi mempercayakan terapi dan proyek mereka kepada kami."
      >
        <FeatureGrid items={[
          { icon: 'shield', title: 'Badan Hukum Resmi', desc: 'PT Bambu Water Nusantara — akta pendirian tercatat, komisaris & direksi lengkap, uji mutu setiap batch.' },
          { icon: 'clock', title: `Tiba ${city.eta}`, desc: `Jadwal kargo rutin ke ${city.province} — packing strapping & food-grade aman jarak jauh.` },
          { icon: 'leaf', title: 'Kualitas Seleksi', desc: 'Bambu umur 3+ tahun dari hutan rakyat terkurasi; sadapan teknik mata tunas tradisional.' },
          { icon: 'package', title: 'Retail & Grosir', desc: 'Dari 1 botol untuk keluarga hingga kargo truk untuk distributor dan proyek di ' + city.name + '.' },
        ]} />
      </AutoSection>

      <AutoSection
        title={`Cara Pesan Air Bambu ke ${city.name}`}
        description="Empat langkah sederhana — selesai dalam hitungan menit."
      >
        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: '01', t: 'Pilih Produk', d: 'Tentukan air bambu (suling/tabib) atau bambu batang beserta volume yang Anda butuhkan.' },
            { n: '02', t: 'Chat WhatsApp', d: `Kirim pesan ke 0813-1651-6524 — sebutkan ${city.name} sebagai tujuan pengiriman.` },
            { n: '03', t: 'Bayar Aman', d: 'Transfer, QRIS, atau pembayaran sesuai kesepakatan — faktur resmi tersedia.' },
            { n: '04', t: 'Terima Kiriman', d: `Tiba di ${city.name} dalam ${city.eta} dengan packing aman — siap dinikmati.` },
          ].map((s) => (
            <StaggerItem key={s.n}>
              <div className="relative h-full rounded-2xl border border-border/70 bg-card p-6">
                <span className="absolute right-4 top-4 text-4xl font-bold text-primary/10" aria-hidden>{s.n}</span>
                <h3 className="text-base font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden /> Mulai Pesan via WhatsApp
            </a>
          </Button>
        </div>
      </AutoSection>

      <AutoFaq faqs={[
        { q: `Berapa lama pengiriman ke ${city.name}?`, a: `Estimasi ${city.eta} setelah pembayaran terkonfirmasi. Untuk volume besar atau kota satelit sekitar ${city.name}, hubungi kami untuk estimasi presisi.` },
        { q: `Apakah ada minimum order untuk ${city.name}?`, a: 'Tidak ada minimum khusus — dari 1 botol 600 ml hingga truk penuh. Harga grosir berlaku mulai volume tertentu.' },
        { q: `Apakah air bambu sampai ${city.name} tetap segar?`, a: `Ya. Air bambu suling memiliki daya tahan baik dan dikemas food-grade; untuk wilayah jauh kami gunakan moda ${city.region === 'Maluku & Papua' ? 'udara' : 'darat/laut'} tercepat yang tersedia.` },
      ]} />

      <AutoSection title={`Kota Populer Lainnya`} description={`Melayani seluruh ${PROVINCES.length} provinsi Indonesia — temukan kota Anda:`} className="border-t border-border/60">
        <LinkChips items={otherCities.map((c) => ({ label: `Air Bambu ${c.name}`, slug: c.slug }))} baseHref="#/kota" />
        <div className="mt-5">
          <Link href="#/kota" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
            Lihat semua 2.500+ kota <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </AutoSection>

      <AutoCta message={waMsg} />
    </>
  );
}

/* ==================================================================== */
/* HALAMAN KONDISI KESEHATAN — "Air Bambu untuk {Kondisi}"               */
/* ==================================================================== */

function ConditionPage({ cond }: { cond: ConditionData }) {
  const waMsg = `Halo Bambu Water Nusantara! Saya tertarik dengan air bambu untuk ${cond.name}. Mohon informasi produk & harga.`;
  const related = CONDITIONS.filter((c) => c.category === cond.category && c.slug !== cond.slug).slice(0, 8);

  return (
    <>
      <AutoJsonLd nodes={[
        faqNode(cond.faqs),
        serviceNode(
          `Terapi Pendamping Air Bambu untuk ${cond.name}`,
          cond.hook,
          `#/air-bambu-untuk/${cond.slug}`,
        ),
        breadcrumbNode([
          { name: 'Beranda', url: '' },
          { name: 'Pusat Kesehatan', url: '#/kesehatan' },
          { name: `Air Bambu untuk ${cond.name}`, url: `#/air-bambu-untuk/${cond.slug}` },
        ]),
      ]} />

      <AutoHero
        eyebrow={`Terapi Komplementer · ${cond.category}`}
        title={`Air Bambu untuk ${cond.name}`}
        intro={cond.hook}
      >
        <div className="mt-7 flex flex-wrap gap-2">
          {cond.nutrients.map((n) => (
            <Badge key={n} variant="outline" className="border-white/25 bg-white/10 text-emerald-50">
              <FlaskConical className="mr-1.5 h-3.5 w-3.5" aria-hidden /> {n}
            </Badge>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-gold text-emerald-950 hover:bg-gold/90 shadow-lg shadow-black/20">
            <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden /> Tanya Produk
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/15">
            <Link href="#/manfaat-air-bambu">Semua Manfaat Air Bambu</Link>
          </Button>
        </div>
      </AutoHero>

      <AutoSection
        eyebrow="Tradisi & Riset"
        title={`Bagaimana Air Bambu Bekerja untuk ${cond.name}?`}
      >
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Air bambu — atau <em>air tuak bambu</em> dalam sebagian tradisi — adalah sadapan alami yang terbentuk di dalam ruas bambu muda, dikumpulkan dengan teknik mata tunas sebagaimana dilakukan tabib Nusantara selama berabad-abad. Untuk {cond.name.toLowerCase()}, air bambu ditempatkan sebagai <strong>minuman terapi komplementer</strong>: pendamping pola hidup sehat dan pengobatan medis, bukan penggantinya.
              </p>
              <p>
                Kandungan yang paling relevan untuk {cond.name.toLowerCase()} adalah {cond.nutrients.join(', ').toLowerCase()}. Kajian ilmiah seperti yang dipublikasikan Journal of Medicinal Plant Research (2015) menunjukkan ekstrak bambu memiliki aktivitas antioksidan dan anti-inflamasi yang menopang fungsi tubuh secara umum. Sementara tradisi pengobatan Nusantara telah lama menjadikan air bambu minuman pilihan saat tubuh membutuhkan penyejuk dan pemulihan.
              </p>
              <p>
                Prinsip penggunaan yang tepat adalah <strong>konsistensi dan proporsi</strong>: air bambu dikonsumsi rutin sebagai bagian dari hidrasi harian, disertai pola makan bergizi, gerak fisik, istirahat cukup, dan evaluasi medis bila gejala menetap. Banyak pelanggan kami mengombinasikan air bambu suling sebagai minuman harian keluarga — menjadikan terapi terasa alami, bukan seperti mengobat.
              </p>
              <p>
                Di Bambu Water Nusantara, setiap batch melewati distilasi bertahap dan uji mutu mikrobiologi sebelum dikirim ke seluruh Indonesia — memastikan yang Anda konsumsi untuk {cond.name.toLowerCase()} adalah sadapan terbaik standar produksi kami sejak 2007.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-2">
            <Card className="sticky top-24 overflow-hidden border-primary/20">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Droplets className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold">Cara Konsumsi Tradisional</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cond.usage}</p>
                <div className="mt-5 rounded-xl bg-muted/60 p-4">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    <Info className="mr-1 inline h-3.5 w-3.5" aria-hidden /> {DISCLAIMER_TEXT}
                  </p>
                </div>
                <Button asChild className="mt-5 w-full bg-primary hover:bg-primary/90">
                  <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" aria-hidden /> Konsultasi Gratis
                  </a>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </AutoSection>

      <AutoFaq faqs={cond.faqs} title={`FAQ — Air Bambu untuk ${cond.name}`} />

      {related.length > 0 && (
        <AutoSection
          title={`Kondisi Terkait di Kategori ${cond.category}`}
          description="Eksplorasi manfaat air bambu untuk kondisi lain yang berdekatan:"
        >
          <LinkChips items={related.map((c) => ({ label: `Air Bambu untuk ${c.name}`, slug: c.slug }))} baseHref="#/air-bambu-untuk" />
          <div className="mt-5">
            <Link href="#/kesehatan" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
              Lihat semua {CONDITIONS.length}+ kondisi <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </AutoSection>
      )}

      <AutoCta message={waMsg} title={`Mulai Terapi ${cond.name} dengan Air Bambu`} />
    </>
  );
}

/* ==================================================================== */
/* HALAMAN LAYANAN — "{Nama Layanan}"                                    */
/* ==================================================================== */

function ServicePage({ svc }: { svc: ServiceData }) {
  const waMsg = `Halo Bambu Water Nusantara! Saya tertarik dengan layanan "${svc.name}". Mohon penawaran & informasi lengkapnya.`;
  const related = SERVICES.filter((s) => s.category === svc.category && s.slug !== svc.slug).slice(0, 8);

  return (
    <>
      <AutoJsonLd nodes={[
        serviceNode(svc.name, svc.hook, `#/layanan/${svc.slug}`),
        faqNode(svc.faqs),
        breadcrumbNode([
          { name: 'Beranda', url: '' },
          { name: 'Katalog Layanan', url: '#/layanan' },
          { name: svc.name, url: `#/layanan/${svc.slug}` },
        ]),
      ]} />

      <AutoHero
        eyebrow={svc.category}
        title={svc.name}
        intro={svc.hook}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-gold text-emerald-950 hover:bg-gold/90 shadow-lg shadow-black/20">
            <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden /> Minta Penawaran
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/15">
            <Link href="#/kontak">Formulir Kontak</Link>
          </Button>
        </div>
      </AutoHero>

      <AutoSection title="Apa Saja yang Anda Dapatkan?" description={`Layanan ${svc.name.toLowerCase()} dirancang dengan skema yang jelas dan transparan:`}>
        <CheckList items={svc.features} />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Building2 className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-semibold">Paling Cocok Untuk</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{svc.idealFor}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-gold/30 bg-gold/5 p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-amber-700">
                <PackageCheck className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-semibold">Volume / Ketentuan</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{svc.moq}</p>
            </div>
          </Reveal>
        </div>
      </AutoSection>

      <AutoSection
        dark
        title="Proses Kerja Sama — 4 Langkah"
        description="Dari konsultasi pertama hingga layanan berjalan rutin:"
      >
        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: '01', t: 'Konsultasi', d: 'Ceritakan kebutuhan Anda via WhatsApp 0813-1651-6524 — volume, lokasi, dan jadwal.' },
            { n: '02', t: 'Penawaran', d: 'Kami susun penawaran resmi: harga, ketentuan volume, dan estimasi jadwal pengiriman.' },
            { n: '03', t: 'Kesepakatan', d: 'Sepakati skema kerja sama — dari order satu kali hingga kontrak langganan/kemitraan.' },
            { n: '04', t: 'Eksekusi', d: 'Produksi, pengemasan, dan pengiriman berjalan sesuai jadwal — monitoring penuh.' },
          ].map((s) => (
            <StaggerItem key={s.n}>
              <div className="relative h-full rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                <span className="absolute right-4 top-4 text-4xl font-bold text-white/10" aria-hidden>{s.n}</span>
                <h3 className="text-base font-semibold text-white">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-50/75">{s.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AutoSection>

      <AutoFaq faqs={svc.faqs} title={`FAQ — ${svc.name}`} />

      {related.length > 0 && (
        <AutoSection title="Layanan Terkait" description={`Layanan lain dalam kategori ${svc.category}:`}>
          <LinkChips items={related.map((s) => ({ label: s.name, slug: s.slug }))} baseHref="#/layanan" />
          <div className="mt-5">
            <Link href="#/layanan" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
              Lihat semua layanan <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </AutoSection>
      )}

      <AutoCta message={waMsg} title={`Mulai ${svc.name} Hari Ini`} subtitle="Konsultasi gratis, penawaran resmi dalam 1 hari kerja." />
    </>
  );
}

/* ==================================================================== */
/* HALAMAN JENIS BAMBU — "Bambu {Nama}"                                  */
/* ==================================================================== */

function BambooTypePage({ bamboo }: { bamboo: BambooTypeData }) {
  const waMsg = `Halo Bambu Water Nusantara! Saya ingin memesan ${bamboo.name}. Mohon info stok, harga & pengiriman.`;
  const related = BAMBOO_TYPES.filter((b) => b.slug !== bamboo.slug);

  return (
    <>
      <AutoJsonLd nodes={[
        productNode(bamboo.name, bamboo.hook, `#/bambu/${bamboo.slug}`, bamboo.priceRange.replace(/[^0-9]/g, '').slice(0, 6) || '85000'),
        faqNode(bamboo.faqs),
        breadcrumbNode([
          { name: 'Beranda', url: '' },
          { name: 'Jenis Bambu', url: '#/bambu' },
          { name: bamboo.name, url: `#/bambu/${bamboo.slug}` },
        ]),
      ]} />

      <AutoHero
        eyebrow={`Bambu Nusantara · ${bamboo.category}`}
        title={`${bamboo.name} — ${bamboo.latin}`}
        intro={bamboo.hook}
      >
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Badge className="bg-gold text-emerald-950 hover:bg-gold/90 px-4 py-2 text-sm">
            {bamboo.priceRange}
          </Badge>
          <Button asChild size="lg" className="bg-white text-emerald-950 hover:bg-emerald-50 shadow-lg shadow-black/20">
            <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden /> Cek Stok & Pesan
            </a>
          </Button>
        </div>
      </AutoHero>

      <AutoSection eyebrow="Spesifikasi Teknis" title={`Spesifikasi ${bamboo.name}`}>
        <div className="overflow-hidden rounded-2xl border border-border/70">
          <table className="w-full text-left text-sm">
            <tbody>
              {bamboo.specs.map((s, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/40'}>
                  <th scope="row" className="w-1/3 px-5 py-3.5 font-semibold">{s.label}</th>
                  <td className="px-5 py-3.5 text-muted-foreground">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AutoSection>

      <AutoSection
        dark
        title={`Pemanfaatan ${bamboo.name}`}
        description={`Kegunaan yang paling sesuai dengan karakter ${bamboo.name.toLowerCase()}:`}
      >
        <CheckList items={bamboo.applications} />
      </AutoSection>

      <AutoSection eyebrow="Perawatan" title="Tips Perawatan & Penyimpanan">
        <Reveal>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-base leading-relaxed text-muted-foreground">
            {bamboo.careTips}
          </div>
        </Reveal>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            { icon: HardHat, t: 'Proyek Besar?', d: 'Per ikat hingga per truk — kontrak pasokan proyek tersedia dengan harga khusus.' },
            { icon: Handshake, t: 'Jadi Mitra?', d: 'Skema distributor kota & agen provinsi terbuka — margin menarik, dukungan penuh.' },
            { icon: Truck, t: 'Kirim ke Mana Saja', d: '38 provinsi Indonesia — kargo darat, laut, dan udara dengan packing aman.' },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border/70 bg-card p-6">
                <c.icon className="mb-3 h-6 w-6 text-primary" aria-hidden />
                <h3 className="font-semibold">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </AutoSection>

      <AutoFaq faqs={bamboo.faqs} title={`FAQ — ${bamboo.name}`} />

      <AutoSection title="Jenis Bambu Lainnya" description="Bandingkan karakter 8 varietas unggulan Nusantara kami:">
        <LinkChips items={related.map((b) => ({ label: b.name, slug: b.slug }))} baseHref="#/bambu" />
        <div className="mt-5">
          <Link href="#/bambu" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
            Panduan lengkap jenis bambu <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </AutoSection>

      <AutoCta message={waMsg} title={`Pesan ${bamboo.name} Hari Ini`} subtitle="Stok terseleksi setiap minggu — pastikan volume Anda terjadwal." />
    </>
  );
}

/* ==================================================================== */
/* HALAMAN INDEKS                                                        */
/* ==================================================================== */

function IndexKota() {
  const waMsg = 'Halo Bambu Water Nusantara! Saya ingin tanya pengiriman ke kota saya.';
  return (
    <>
      <AutoJsonLd nodes={[breadcrumbNode([{ name: 'Beranda', url: '' }, { name: 'Jangkauan Kota', url: '#/kota' }])]} />
      <AutoHero
        eyebrow="Jangkauan Kota"
        title="Pilih Kota Anda — 2.500+ Tujuan Pengiriman"
        intro={`Jaringan distribusi air bambu & bambu berkualitas kami menjangkau ${PROVINCES.length} provinsi — dari Banda Aceh hingga Papua. Pilih kota untuk melihat detail pengiriman.`}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-gold text-emerald-950 hover:bg-gold/90 shadow-lg shadow-black/20">
            <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden /> Tanya Kota Saya
            </a>
          </Button>
        </div>
      </AutoHero>

      <AutoSection title="Kota-Kota Populer" description="Tujuan pengiriman terbanyak — klik kota untuk halaman detailnya:">
        <LinkChips items={POPULAR_CITIES.map((c) => ({ label: `Air Bambu ${c.name}`, slug: c.slug }))} baseHref="#/kota" />
      </AutoSection>

      <AutoSection
        eyebrow="Indeks Lengkap"
        title="Semua Kota & Kabupaten"
        description="Gunakan pencarian untuk menemukan kota/kabupaten Anda dengan cepat:"
      >
        <SearchableList
          items={ALL_CITIES.map((c) => ({ label: c.name, slug: c.slug, sub: c.province }))}
          placeholder="Cari kota atau kabupaten..."
          renderItem={(it) => (
            <Link
              key={it.slug}
              href={`#/kota/${it.slug}`}
              className="group flex items-center justify-between rounded-xl border border-border/60 bg-card px-4 py-3 transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              <div>
                <p className="text-sm font-semibold group-hover:text-primary">Air Bambu di {it.label}</p>
                <p className="text-xs text-muted-foreground">{it.sub}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" aria-hidden />
            </Link>
          )}
        />
      </AutoSection>

      <AutoSection dark title="Estimasi Waktu per Wilayah" description="Referensi cepat waktu tempuh kargo ke wilayah Anda:">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(ETA_BY_REGION).map(([region, eta], i) => (
            <Reveal key={region} delay={i * 0.06}>
              <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                <div>
                  <p className="font-semibold text-white">{region}</p>
                  <p className="text-xs text-emerald-50/70">{PROVINCES.filter((p) => p.region === region).length} provinsi</p>
                </div>
                <Badge variant="outline" className="border-gold/40 bg-gold/10 text-amber-200">{eta}</Badge>
              </div>
            </Reveal>
          ))}
        </div>
      </AutoSection>

      <AutoCta message={waMsg} />
    </>
  );
}

function IndexKesehatan() {
  const waMsg = 'Halo Bambu Water Nusantara! Saya ingin konsultasi manfaat air bambu untuk kesehatan saya.';
  return (
    <>
      <AutoJsonLd nodes={[breadcrumbNode([{ name: 'Beranda', url: '' }, { name: 'Pusat Kesehatan', url: '#/kesehatan' }])]} />
      <AutoHero
        eyebrow="Indeks Kesehatan"
        title="Pusat Terapi Air Bambu — 60+ Kondisi"
        intro="Warisan tabib Nusantara yang kini didukung kajian ilmiah. Jelajahi manfaat air bambu per kondisi — lengkap dengan cara konsumsi aman dan FAQ."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-gold text-emerald-950 hover:bg-gold/90 shadow-lg shadow-black/20">
            <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden /> Konsultasi Gratis
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/15">
            <Link href="#/kandungan-nutrisi">Kandungan Nutrisi</Link>
          </Button>
        </div>
      </AutoHero>

      {CONDITION_CATEGORIES.map((cat) => {
        const items = conditionsByCategory(cat);
        if (items.length === 0) return null;
        return (
          <AutoSection key={cat} eyebrow={cat} title={`Air Bambu untuk ${cat}`}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((c, i) => (
                <Reveal key={c.slug} delay={Math.min(i * 0.04, 0.3)}>
                  <Link
                    href={`#/air-bambu-untuk/${c.slug}`}
                    className="group block h-full rounded-2xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
                  >
                    <h3 className="text-sm font-semibold leading-snug group-hover:text-primary">
                      Air Bambu untuk {c.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{c.hook}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </AutoSection>
        );
      })}

      <AutoSection dark title="Catatan Penting" description="Prinsip penggunaan terapi komplementer yang bertanggung jawab:">
        <Reveal>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-base leading-relaxed text-emerald-50/85">
            {DISCLAIMER_TEXT}
          </div>
        </Reveal>
      </AutoSection>

      <AutoCta message={waMsg} title="Konsultasikan Kebutuhan Terapi Anda" />
    </>
  );
}

function IndexLayanan() {
  const waMsg = 'Halo Bambu Water Nusantara! Saya ingin tahu lebih detail tentang layanan Anda.';
  const iconByCat: Record<string, typeof Truck> = {
    'Langganan & Kontrak Pasokan': Building2,
    'Kargo & Logistik': Truck,
    'Kemitraan Bisnis': Handshake,
    'Bambu & Proyek': HardHat,
  };
  return (
    <>
      <AutoJsonLd nodes={[breadcrumbNode([{ name: 'Beranda', url: '' }, { name: 'Katalog Layanan', url: '#/layanan' }])]} />
      <AutoHero
        eyebrow="Semua Layanan"
        title="Katalog Layanan Bambu Water Nusantara"
        intro="Satu pintu untuk semua kebutuhan — langganan rutin keluarga & klinik, kargo volume besar, kemitraan bisnis, hingga pasokan bambu proyek. Plus layanan pengiriman khusus di 2.500+ kota."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-gold text-emerald-950 hover:bg-gold/90 shadow-lg shadow-black/20">
            <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden /> Konsultasi Layanan
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/15">
            <Link href="#/harga-paket">Harga & Paket</Link>
          </Button>
        </div>
      </AutoHero>

      {SERVICE_CATEGORIES.map((cat) => {
        const items = servicesByCategory(cat);
        const Icon = iconByCat[cat] ?? Boxes;
        return (
          <AutoSection key={cat} eyebrow={cat} title={`Layanan ${cat}`}>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {items.map((s, i) => (
                <Reveal key={s.slug} delay={Math.min(i * 0.06, 0.4)}>
                  <Link
                    href={`#/layanan/${s.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="text-base font-semibold leading-snug group-hover:text-primary">{s.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.hook}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <StatusBadge>{s.moq}</StatusBadge>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary" aria-hidden />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </AutoSection>
        );
      })}

      <AutoSection dark title="Pengiriman per Kota" description={`Di luar layanan di atas, kami juga melayani pengiriman khusus ke ${ALL_CITIES.length}+ kota & kabupaten di ${PROVINCES.length} provinsi:`}>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Button asChild size="lg" className="bg-gold text-emerald-950 hover:bg-gold/90">
            <Link href="#/kota">
              Jelajahi 2.500+ Kota <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <p className="text-sm text-emerald-50/70">Halaman khusus per kota dengan estimasi waktu, produk, dan cara pesan lokal.</p>
        </div>
      </AutoSection>

      <AutoCta message={waMsg} />
    </>
  );
}

function IndexBambu() {
  const waMsg = 'Halo Bambu Water Nusantara! Saya butuh bantuan memilih jenis bambu untuk kebutuhan saya.';
  return (
    <>
      <AutoJsonLd nodes={[breadcrumbNode([{ name: 'Beranda', url: '' }, { name: 'Jenis Bambu', url: '#/bambu' }])]} />
      <AutoHero
        eyebrow="8 Varietas Unggulan"
        title="Panduan Jenis Bambu Nusantara"
        intro="Petung, Betung, Wulung, Apus, Ori, Ampel, Gading, dan Ater — kenali karakter, spesifikasi, dan harga masing-masing untuk memilih yang tepat."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-gold text-emerald-950 hover:bg-gold/90 shadow-lg shadow-black/20">
            <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden /> Konsultasi Pilihan
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/15">
            <Link href="#/bambu-berkualitas">Produk Bambu Massal</Link>
          </Button>
        </div>
      </AutoHero>

      <AutoSection title="Semua Jenis Bambu" description="Klik setiap jenis untuk halaman detail lengkap — spesifikasi teknis, pemanfaatan, perawatan, dan FAQ:">
        <div className="grid gap-5 md:grid-cols-2">
          {BAMBOO_TYPES.map((b, i) => (
            <Reveal key={b.slug} delay={Math.min(i * 0.06, 0.4)}>
              <Link
                href={`#/bambu/${b.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-primary">{b.name}</h3>
                    <p className="mt-0.5 text-xs italic text-muted-foreground">{b.latin}</p>
                  </div>
                  <StatusBadge>{b.category}</StatusBadge>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{b.hook}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="text-sm font-semibold text-primary">{b.priceRange}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary" aria-hidden />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </AutoSection>

      <AutoSection
        dark
        eyebrow="Standar Seleksi"
        title="Kenapa Bambu Kami Berbeda?"
        description="Empat pilar kualitas yang kami jaga sejak 2007:"
      >
        <FeatureGrid items={[
          { icon: 'leaf', title: 'Umur 3+ Tahun', desc: 'Hanya batang matang yang dipanen — serat padat, kuat, dan tahan lama.' },
          { icon: 'shield', title: 'Lurus & Kering Merata', desc: 'Seleksi visual ketat dan pengeringan tepat sebelum dikirim ke Anda.' },
          { icon: 'package', title: 'Treatment & Fumigasi', desc: 'Perlindungan dasar dari hama dan jamur untuk umur pakai maksimal.' },
          { icon: 'star', title: 'Hutan Rakyat Terkurasi', desc: 'Sumber berkelanjutan yang mendukung ekonomi petani bambu lokal.' },
        ]} />
      </AutoSection>

      <AutoCta message={waMsg} title="Masih Ragu Pilih Jenis Bambu?" subtitle="Konsultasi gratis — ceritakan kebutuhan proyek Anda, kami rekomendasikan yang tepat." />
    </>
  );
}

/* ==================================================================== */
/* DISPATCHER                                                            */
/* ==================================================================== */

export function AutoPageRenderer({ slug }: { slug: string }) {
  const page: AutoPage | null = getAutoPage(slug);
  if (!page) return null;
  switch (page.kind) {
    case 'kota': return <CityPage city={page.city} />;
    case 'kesehatan': return <ConditionPage cond={page.condition} />;
    case 'layanan': return <ServicePage svc={page.service} />;
    case 'bambu': return <BambooTypePage bamboo={page.bamboo} />;
    case 'indeks-kota': return <IndexKota />;
    case 'indeks-kesehatan': return <IndexKesehatan />;
    case 'indeks-layanan': return <IndexLayanan />;
    case 'indeks-bambu': return <IndexBambu />;
    default: return null;
  }
}

/** Slug halaman programatik (untuk routing di app-shell) */
export function isAutoSlug(slug: string): boolean {
  return (
    slug === 'kota' || slug === 'kesehatan' || slug === 'layanan' || slug === 'bambu' ||
    slug.startsWith('kota/') || slug.startsWith('air-bambu-untuk/') ||
    slug.startsWith('layanan/') || slug.startsWith('bambu/')
  );
}

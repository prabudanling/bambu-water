'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PackageSearch,
  PackageCheck,
  MessageCircle,
  ClipboardList,
  Boxes,
  Truck,
  MapPin,
  Home,
  ShieldCheck,
} from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { CtaBand } from '@/components/site/cta-band';
import { AutoJsonLd, faqNode, breadcrumbNode } from '@/components/pages/auto-shared';
import { waLink, SITE_URL, COMPANY } from '@/lib/company';
import { cn } from '@/lib/utils';

/* ============================================================
   LACAK PESANAN — timeline status animasi
   Demo interaktif: input nomor pesanan → simulasi tahapan.
   ============================================================ */

const STAGES = [
  { icon: ClipboardList, title: 'Pesanan Diterima', desc: 'Detail pesanan tercatat & diverifikasi tim admin kami.' },
  { icon: MessageCircle, title: 'Konfirmasi WhatsApp', desc: 'Admin mengonfirmasi produk, volume, alamat & total biaya via WA 0813-1651-6524.' },
  { icon: Boxes, title: 'Packing & Uji Mutu', desc: 'Produk dikemas multi-lapis dengan dokumen uji mutu batch terlampir.' },
  { icon: Truck, title: 'Serah ke Ekspedisi', desc: 'Paket diserahkan ke armada kargo darat/laut/udara sesuai tujuan.' },
  { icon: MapPin, title: 'Dalam Perjalanan', desc: 'Paket bergerak — resi aktif dan dapat dipantau di situs ekspedisi.' },
  { icon: Home, title: 'Tiba di Tujuan', desc: 'Paket sampai. Periksa kondisi sebelum tanda tangan penerimaan.' },
];

const FAQ = [
  {
    q: 'Di mana saya mendapatkan nomor pesanan?',
    a: 'Nomor pesanan dibuat otomatis oleh admin saat konfirmasi pertama di WhatsApp, berformat BWN-YYYYMMDD-XXX (contoh: BWN-20250615-014). Nomor ini tercantum pada balasan konfirmasi dan pada tanda terima digital yang dikirim kembali kepada Anda. Simpan nomor tersebut untuk melacak seluruh tahapan pengiriman.',
  },
  {
    q: 'Berapa lama waktu pengiriman dari konfirmasi sampai tiba?',
    a: 'Produksi dan packing memakan 1 hari kerja setelah pembayaran terverifikasi. Estimasi perjalanan: Jawa 1–3 hari, Sumatra, Bali, Kalimantan & Sulawesi 3–6 hari, serta Indonesia Timur (Maluku, Papua, NTT) 5–9 hari. Kargo udara tersedia untuk kebutuhan mendesak dengan biaya tambahan sesuai berat dan rute.',
  },
  {
    q: 'Apakah status di halaman ini real-time dari ekspedisi?',
    a: 'Halaman ini menampilkan simulasi alur tahapan pesanan BWN untuk membantu Anda memahami prosesnya. Untuk posisi paket secara real-time, admin kami mengirimkan nomor resi ekspedisi resmi (JNE, SiCepat, J&T Cargo, atau kargo laut) yang dapat Anda lacak langsung di situs/aplikasi ekspedisi tersebut kapan pun.',
  },
  {
    q: 'Bagaimana jika paket terlambat atau rusak saat tiba?',
    a: 'Hubungi kami maksimal 24 jam sejak paket tiba dengan menyertakan foto/video kondisi paket. Seluruh pengiriman sudah dilindungi packing multi-lapis dan asuransi kargo untuk volume tertentu. Kami akan mengirim pengganti atau mengompensasi sesuai kesepakatan — reputasi 2.500+ kota yang kami layani adalah komitmen yang kami jaga.',
  },
];

function seedStatus(orderId: string) {
  /* Deterministik dari kode pesanan → simulasi yang konsisten per nomor */
  let h = 0;
  for (const ch of orderId) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h % STAGES.length;
}

export function LacakPesananPage() {
  const [orderId, setOrderId] = useState('');
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [stage, setStage] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = orderId.trim().toUpperCase() || 'BWN-DEMO-001';
    setSubmitted(id);
    setStage(0); /* reset di handler event — bukan di effect */
  };

  /* Animasi maju bertahap setelah submit */
  useEffect(() => {
    if (!submitted) return undefined;
    const target = seedStatus(submitted);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setStage((s) => {
        if (s >= target) {
          if (timerRef.current) clearInterval(timerRef.current);
          return s;
        }
        return s + 1;
      });
    }, 900);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [submitted]);

  const jsonLd = [
    faqNode(FAQ),
    breadcrumbNode([
      { name: 'Beranda', url: `${SITE_URL}/` },
      { name: 'Lacak Pesanan', url: `${SITE_URL}/#/lacak-pesanan` },
    ]),
  ];

  return (
    <>
      <AutoJsonLd nodes={jsonLd} />
      <PageHero slug="lacak-pesanan" />

      <PageSection bg="light">
        <SectionHeading
          eyebrow="Pantau Kiriman Anda"
          title="Lacak Pesanan"
          highlight="— 6 Tahapan Transparan"
          description="Masukkan nomor pesanan BWN untuk melihat alur status. Demo ini menampilkan simulasi tahapan; posisi real-time dikirim via resi ekspedisi resmi."
        />

        {/* Form */}
        <Reveal className="mx-auto mt-10 max-w-xl">
          <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row" role="search" aria-label="Lacak pesanan">
            <label htmlFor="order-id" className="sr-only">
              Nomor pesanan
            </label>
            <input
              id="order-id"
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="BWN-20250615-014"
              className="h-14 flex-1 rounded-full border border-primary/20 bg-white px-6 text-sm shadow-lg shadow-emerald-900/5 outline-none transition-all duration-300 focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
            />
            <button
              type="submit"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 text-sm font-bold text-white shadow-xl shadow-emerald-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <PackageSearch className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" aria-hidden />
              Lacak
            </button>
          </form>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Coba demo dengan kode apa pun — mis. <button type="button" onClick={() => setOrderId('BWN-20250615-014')} className="link-underline font-semibold text-primary">BWN-20250615-014</button>
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="mx-auto mt-12 max-w-3xl">
          <AnimatePresence>
            {submitted && (
              <motion.div
                key={submitted}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/15 bg-white px-6 py-4 shadow-sm">
                  <span className="flex items-center gap-2.5 text-sm">
                    <PackageCheck className="h-5 w-5 text-primary" aria-hidden />
                    Pesanan <strong className="font-mono text-primary">{submitted}</strong>
                  </span>
                  <span className="rounded-full bg-secondary/60 px-3.5 py-1 text-xs font-bold text-primary">
                    Tahap {stage + 1} dari {STAGES.length}
                  </span>
                </div>

                <ol className="relative space-y-0" aria-live="polite">
                  {STAGES.map((st, i) => {
                    const done = i < stage;
                    const current = i === stage;
                    const Icon = st.icon;
                    return (
                      <li key={st.title} className="relative flex gap-5 pb-9 last:pb-0">
                        {/* Garis vertikal */}
                        {i < STAGES.length - 1 && (
                          <span
                            aria-hidden
                            className={cn(
                              'absolute left-6 top-14 h-[calc(100%-3.5rem)] w-0.5 rounded-full transition-colors duration-700',
                              done ? 'bg-primary' : 'bg-border'
                            )}
                          />
                        )}
                        {/* Node ikon */}
                        <motion.span
                          animate={
                            current
                              ? { scale: [1, 1.1, 1] }
                              : { scale: 1 }
                          }
                          transition={current ? { repeat: Infinity, duration: 1.6 } : { duration: 0.3 }}
                          className={cn(
                            'relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500',
                            done && 'border-primary bg-primary text-white',
                            current && 'border-primary bg-primary/10 text-primary shadow-lg shadow-primary/20',
                            !done && !current && 'border-border bg-white text-muted-foreground/50'
                          )}
                        >
                          <Icon className="h-5.5 w-5.5" aria-hidden />
                        </motion.span>
                        {/* Teks */}
                        <div className={cn('pt-2 transition-opacity duration-500', done || current ? 'opacity-100' : 'opacity-45')}>
                          <h3 className={cn('font-serif text-base font-bold', current ? 'text-primary' : 'text-foreground')}>
                            {st.title}
                            {done && <span className="ml-2 text-xs font-semibold text-primary">✓ selesai</span>}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{st.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>

                <div className="mt-8 flex flex-col items-center gap-3 rounded-3xl border border-primary/15 bg-secondary/40 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Butuh detail resi ekspedisi atau bantuan pesanan? Admin kami siap membalas cepat di jam kerja
                    {' '}
                    {COMPANY.whatsappDisplay}.
                  </p>
                  <a
                    href={waLink(`Halo! Saya ingin menanyakan pesanan ${submitted}.`)}
                    target="_blank"
                    rel="noopener noreferrer external"
                    className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500"
                  >
                    <MessageCircle className="h-4.5 w-4.5" aria-hidden />
                    Tanya Admin via WA
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!submitted && (
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-dashed border-primary/25 bg-white/60 p-10 text-center">
                <ShieldCheck className="mx-auto h-10 w-10 text-primary/50" aria-hidden />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Masukkan nomor pesanan di atas untuk melihat simulasi enam tahapan pengiriman —
                  dari pesanan diterima hingga tiba di tujuan Anda.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection bg="cream">
        <SectionHeading eyebrow="FAQ Pengiriman" title="Pertanyaan Seputar" highlight="Lacak Pesanan" />
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {FAQ.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm">
                <h3 className="font-serif text-base font-bold text-foreground">{f.q}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <CtaBand />
    </>
  );
}

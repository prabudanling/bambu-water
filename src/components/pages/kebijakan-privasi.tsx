import { ShieldCheck } from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { AutoJsonLd, breadcrumbNode } from '@/components/pages/auto-shared';
import { SITE_URL, COMPANY } from '@/lib/company';

/* ============================================================
   KEBIJAKAN PRIVASI — server component (statis, cepat)
   ============================================================ */

const SECTIONS = [
  {
    title: '1. Informasi yang Kami Kumpulkan',
    body: [
      'Saat Anda menghubungi PT Bambu Water Nusantara melalui formulir pemesanan, WhatsApp, email, atau telepon, kami mengumpulkan data yang Anda berikan secara sukarela: nama lengkap, nomor WhatsApp/telepon, alamat email, alamat pengiriman, serta detail kebutuhan produk yang Anda sampaikan. Kami tidak mengumpulkan data lebih dari yang diperlukan untuk memproses pesanan dan memberikan layanan terbaik.',
      'Data teknis non-identifikasi seperti jenis perangkat, browser, dan halaman yang dikunjungi dapat tercatat secara agregat untuk keperluan perbaikan situs. Data ini tidak dapat digunakan untuk mengidentifikasi individu secara langsung.',
    ],
  },
  {
    title: '2. Cara Kami Menggunakan Data',
    body: [
      'Data pribadi Anda kami gunakan secara terbatas untuk: memproses dan mengirim pesanan, mengonfirmasi detail pembayaran, menginformasikan status pengiriman, menjawab pertanyaan layanan, serta — hanya dengan persetujuan Anda — mengirimkan penawaran langganan atau program kemitraan yang relevan.',
      'Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak ketiga dalam bentuk apa pun. Pembagian data hanya terjadi kepada mitra ekspedisi sebatas data pengiriman yang diperlukan (nama penerima, alamat, nomor telepon) agar paket Anda tiba dengan aman.',
    ],
  },
  {
    title: '3. Penyimpanan & Keamanan',
    body: [
      'Data pesanan disimpan pada sistem internal dengan akses terbatas kepada staf yang berwenang. Komunikasi WhatsApp terlindungi enkripsi bawaan platform. Dokumen transaksi disimpan sesuai kebutuhan administrasi perusahaan dan ketentuan hukum yang berlaku di Indonesia.',
      'Meskipun kami menerapkan langkah pengamanan yang wajar sesuai standar industri, tidak ada sistem yang 100% aman. Kami menyarankan agar Anda tidak mengirimkan data sensitif di luar kebutuhan pemesanan (misalnya nomor kartu kredit melalui chat).',
    ],
  },
  {
    title: '4. Hak Anda',
    body: [
      'Anda berhak untuk: meminta salinan data pribadi yang kami simpan, meminta koreksi data yang tidak akurat, meminta penghapusan data setelah transaksi selesai (dengan pengecualian data wajib untuk pelaporan pajak/akuntansi), serta menarik persetujuan komunikasi pemasaran kapan saja.',
      'Permintaan dapat dikirim ke email resmi kami dan akan diproses maksimal 14 hari kerja. Verifikasi identitas ringan mungkin diminta untuk melindungi data Anda dari akses pihak yang tidak berwenang.',
    ],
  },
  {
    title: '5. Cookie & Teknologi Pelacakan',
    body: [
      'Situs ini menggunakan penyimpanan lokal browser yang minimal (misalnya preferensi bahasa) — bukan cookie iklan pihak ketiga. Apabila di kemudian hari kami memasang alat analitik, kebijakan ini akan diperbarui dan pengunjung akan diberi tahu sebelumnya.',
    ],
  },
  {
    title: '6. Perubahan Kebijakan',
    body: [
      'Kebijakan ini dapat kami perbarui sewaktu-waktu mengikuti perkembangan layanan atau regulasi. Tanggal pembaruan terakhir selalu tercantum di halaman ini. Perubahan berlaku sejak dipublikasikan di bambuwater.web.id.',
    ],
  },
  {
    title: '7. Kontak Perlindungan Data',
    body: [
      `Pertanyaan, permintaan data, atau keluhan privasi dapat disampaikan melalui email ${COMPANY.email} atau WhatsApp ${COMPANY.whatsappDisplay} (jam kerja Senin–Sabtu 08.00–17.00 WIB). Kami menangani setiap permintaan privasi dengan serius dan transparan.`,
    ],
  },
];

export default function KebijakanPrivasiPage() {
  const jsonLd = [
    breadcrumbNode([
      { name: 'Beranda', url: `${SITE_URL}/` },
      { name: 'Kebijakan Privasi', url: `${SITE_URL}/#/kebijakan-privasi` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#/kebijakan-privasi#webpage`,
      name: 'Kebijakan Privasi',
      url: `${SITE_URL}/#/kebijakan-privasi`,
      description: 'Bagaimana PT Bambu Water Nusantara mengumpulkan, menggunakan, dan melindungi data pribadi Anda.',
    },
  ];

  return (
    <>
      <AutoJsonLd nodes={jsonLd} />
      <PageHero slug="kebijakan-privasi" />

      <PageSection bg="light">
        <SectionHeading
          eyebrow="Transparansi Data"
          title="Kebijakan Privasi"
          highlight="— Data Anda Aman"
          description="Ringkas, jelas, tanpa bahasa legal yang membingungkan. Ketahui persis data apa yang kami kumpulkan dan bagaimana kami melindunginya."
        />

        <Reveal className="mx-auto mt-8 max-w-3xl">
          <div className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-secondary/40 px-5 py-4">
            <ShieldCheck className="h-6 w-6 shrink-0 text-primary" aria-hidden />
            <p className="text-xs leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Ringkasan 10 detik:</strong> kami hanya mengumpulkan data yang Anda
              berikan untuk pemesanan, tidak pernah menjualnya, dan Anda dapat meminta hapus kapan saja via email.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl space-y-8 pb-2">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <article className="rounded-3xl border border-primary/10 bg-white p-7 shadow-sm sm:p-8">
                <h2 className="font-serif text-lg font-bold text-foreground sm:text-xl">{s.title}</h2>
                <div className="mt-3 space-y-3.5">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <p className="text-center text-xs text-muted-foreground">
              Terakhir diperbarui: <strong className="text-foreground">Juni 2025</strong> •{' '}
              {COMPANY.legalName} • {COMPANY.domain}
            </p>
          </Reveal>
        </div>
      </PageSection>
    </>
  );
}

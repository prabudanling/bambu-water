import { FileText } from 'lucide-react';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { AutoJsonLd, breadcrumbNode } from '@/components/pages/auto-shared';
import { SITE_URL, COMPANY } from '@/lib/company';

/* ============================================================
   SYARAT & KETENTUAN — server component (statis, cepat)
   ============================================================ */

const SECTIONS = [
  {
    title: '1. Penerimaan Ketentuan',
    body: [
      'Dengan mengakses bambuwater.web.id dan/atau melakukan pemesanan produk kepada PT Bambu Water Nusantara ("BWN", "kami"), Anda menyatakan telah membaca, memahami, dan menyetujui syarat dan ketentuan yang diuraikan pada halaman ini beserta Kebijakan Privasi kami. Apabila Anda tidak menyetujui sebagian atau seluruh ketentuan, mohon menghentikan penggunaan layanan.',
    ],
  },
  {
    title: '2. Produk & Klaim Kesehatan',
    body: [
      'Produk kami — air bambu suling, air bambu tabib, dan bambu batang — adalah produk komplementer-alami. Seluruh konten edukasi di situs ini (termasuk artikel, halaman kondisi kesehatan, dan kalkulator) bersifat informasi umum dan BUKAN diagnosis, resep, atau pengganti nasihat dokter.',
      'Selalu konsultasikan dengan tenaga medis profesional sebelum menjadikan produk kami bagian dari program kesehatan Anda, terutama bagi ibu hamil/menyusui, bayi, penderita penyakit kronis (ginjal, jantung, diabetes), atau mereka yang sedang menjalani pengobatan tertentu. Hasil pengalaman tiap individu dapat berbeda-beda.',
    ],
  },
  {
    title: '3. Pemesanan, Harga & Pembayaran',
    body: [
      'Harga yang tercantum dapat berubah sewaktu-waktu mengikuti musim panen dan biaya logistik; harga final dan mengikat adalah yang dikonfirmasi admin melalui WhatsApp/email pada saat pemesanan. Pesanan dianggap sah setelah pembayaran diterima pada rekening resmi BWN dan konfirmasi diterima admin.',
      'Kami tidak bertanggung jawab atas transfer ke rekening di luar yang tercantum resmi oleh admin kami. Selalu pastikan nomor WhatsApp resmi ' + COMPANY.whatsappDisplay + ' sebelum bertransaksi.',
    ],
  },
  {
    title: '4. Pengiriman & Risiko',
    body: [
      'Estimasi waktu pengiriman adalah perkiraan baik-baik berdasarkan jadwal armada ekspedisi mitra; keterlambatan due force majeure (bencana alam, kerusuhan, gangguan cuaca ekstrem, kebijakan pemerintah) berada di luar kendali kami. Inspeksi kondisi paket dilakukan saat penyerahan — klaim kerusakan fisik diterima maksimal 24 jam setelah paket diterima disertai bukti foto/video.',
    ],
  },
  {
    title: '5. Retur & Penggantian',
    body: [
      'Produk cair konsumsi yang telah dikirim tidak dapat dikembalikan hanya karena perubahan pikiran. Penggantian penuh atau kompensasi diberikan apabila: produk tiba rusak/bocor, jenis/volume tidak sesuai pesanan, atau terbukti cacat produksi — dengan syarat bukti disertakan dalam 24–48 jam sejak penerimaan sesuai kategori klaim yang dijelaskan pada halaman FAQ.',
    ],
  },
  {
    title: '6. Kemitraan & Distribusi',
    body: [
      'Skema distributor kota, reseller, dan kontrak pasokan diatur dalam perjanjian tertulis terpisah yang berisi wilayah, harga, target, dan kewajiban para pihak. Materi pemasaran resmi hanya yang diterbitkan langsung oleh BWN; klaim di luar materi resmi oleh mitra menjadi tanggung jawab mitra yang bersangkutan.',
    ],
  },
  {
    title: '7. Hak Kekayaan Intelektual',
    body: [
      'Seluruh konten di bambuwater.web.id — teks, foto, logo, desain, struktur halaman, dan basis data programatik — adalah milik PT Bambu Water Nusantara dan dilindungi undang-undang. Dilarang menyalin, mereplikasi, atau memanfaatkan konten untuk tujuan komersial tanpa izin tertulis. Kutipan singkat diperbolehkan dengan mencantumkan atribusi dan tautan sumber.',
    ],
  },
  {
    title: '8. Hukum yang Berlaku & Penyelesaian Sengketa',
    body: [
      'Syarat dan ketentuan ini tunduk pada hukum Republik Indonesia. Segala perselisihan akan diupayakan diselesaikan terlebih dahulu secara musyawarah; bila tidak tercapai, para pihak sepakat menyelesaikannya melalui pengadilan yang berwenang di wilayah hukum Tasikmalaya, Jawa Barat.',
    ],
  },
  {
    title: '9. Kontak',
    body: [
      `Pertanyaan mengenai syarat dan ketentuan ini dapat dikirim ke ${COMPANY.email} atau WhatsApp ${COMPANY.whatsappDisplay} pada jam kerja Senin–Sabtu 08.00–17.00 WIB.`,
    ],
  },
];

export default function SyaratKetentuanPage() {
  const jsonLd = [
    breadcrumbNode([
      { name: 'Beranda', url: `${SITE_URL}/` },
      { name: 'Syarat & Ketentuan', url: `${SITE_URL}/#/syarat-ketentuan` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#/syarat-ketentuan#webpage`,
      name: 'Syarat & Ketentuan',
      url: `${SITE_URL}/#/syarat-ketentuan`,
      description: 'Ketentuan penggunaan situs, pemesanan produk, pengiriman, kemitraan, dan hak kekayaan intelektual PT Bambu Water Nusantara.',
    },
  ];

  return (
    <>
      <AutoJsonLd nodes={jsonLd} />
      <PageHero slug="syarat-ketentuan" />

      <PageSection bg="light">
        <SectionHeading
          eyebrow="Perjanjian Layanan"
          title="Syarat & Ketentuan"
          highlight="— Jelas untuk Kedua Pihak"
          description="Aturan main yang melindungi Anda dan kami: produk, pemesanan, pengiriman, kemitraan, hingga hak konten."
        />

        <Reveal className="mx-auto mt-8 max-w-3xl">
          <div className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-secondary/40 px-5 py-4">
            <FileText className="h-6 w-6 shrink-0 text-primary" aria-hidden />
            <p className="text-xs leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Ringkasan 10 detik:</strong> konten kesehatan bersifat edukasi
              komplementer, harga mengikat saat konfirmasi admin, klaim kerusakan 24 jam sejak tiba, dan seluruh
              konten situs dilindungi hak cipta.
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

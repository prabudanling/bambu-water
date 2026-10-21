'use client';

import { useMemo, useState } from 'react';
import { Search, BookMarked } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageHero, PageSection } from '@/components/site/page-hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { CtaBand } from '@/components/site/cta-band';
import { AutoJsonLd, faqNode, breadcrumbNode } from '@/components/pages/auto-shared';
import { SITE_URL } from '@/lib/company';

/* ============================================================
   GLOSSARIUM AIR BAMBU — kamus istilah terkurasi (40 entri)
   Long-tail SEO: istilah teknis, tradisional & ilmiah.
   ============================================================ */

type Term = { term: string; cat: string; def: string };

const TERMS: Term[] = [
  { term: 'Air Bambu', cat: 'Dasar', def: 'Cairan bening yang tersadap dari ruas bambu muda (umur 1–3 tahun) pada fase vegetatif aktif. Secara tradisional disebut air tuak bambu; kaya silika organik, flavonoid, dan antioksidan. Di Nusantara digunakan berabad-abad sebagai minuman terapi oleh para tabib tradisional.' },
  { term: 'Air Sadapan Bambu', cat: 'Dasar', def: 'Sinonim air bambu — menekankan metode pengambilan yang menyerupai "menyadap" cairan alami dari dalam ruas, bukan menggiling batang. Sadapan diambil melalui lubang kecil lalu ditutup agar bambu dapat dipanen ulang.' },
  { term: 'Air Tuak Bambu', cat: 'Tradisi', def: 'Istilah vernakular Sunda dan Jawa untuk air bambu. Disebut "tuak" karena metode takaran sadapannya serupa pengetapan nira; namun berbeda dari tuak kelapa — air bambu tak mengandung alkohol dan tak difermentasi.' },
  { term: 'Air Bambu Tabib', cat: 'Produk', def: 'Produk sadapan bambu mentah (raw) yang dikemas segar tanpa distilasi berat, ditujukan untuk terapis, tabib, dan konsumen terapi. Dipercaya mempertahankan enzim dan senyawa bioaktif alami sadapan.' },
  { term: 'Air Bambu Suling', cat: 'Produk', def: 'Air bambu yang dimurnikan melalui distilasi uap bertekanan lalu dikemas higienis. Rasa lebih ringan dan aman dikonsumsi harian sebagai minuman kesehatan rutin keluarga.' },
  { term: 'Silika Organik', cat: 'Sains', def: 'Senyawa silikon (Si) berbentuk organik yang mudah diserap tubuh, terkandung tinggi dalam air bambu. Berperan pada sintesis kolagen, kepadatan tulang, kekuatan rambut-kuku, dan elastisitas pembuluh darah.' },
  { term: 'Flavonoid', cat: 'Sains', def: 'Kelompok antioksidan polifenol tumbuhan. Air bambu mengandung flavonoid seperti orientin dan isovitexin yang membantu menetralkan radikal bebas dan meredakan peradangan.' },
  { term: 'Polifenol', cat: 'Sains', def: 'Mikronutrien tumbuhan dengan aktivitas antioksidan kuat. Dalam air bambu bekerja sinergis dengan flavonoid melindungi sel dari stres oksidatif penuahan dini.' },
  { term: 'Antioksidan', cat: 'Sains', def: 'Zat yang menetralisir radikal bebas — molekul tidak stabil penyebab kerusakan sel, penuaan dini, dan berbagai penyakit kronis. Kandungan antioksidan air bambu diperoleh langsung dari metabolisme tanaman bambu.' },
  { term: 'Teknik Mata Tunas', cat: 'Produksi', def: 'Metode sadapan tradisional: lubang kecil dibuat tepat di bawah mata tunas (buku tempat tunas tumbuh) — titik aliran cairan paling deras. Teknik ini menjaga bambu tetap hidup dan produktif hingga 5–8 tahun.' },
  { term: 'Fase Vegetatif', cat: 'Produksi', def: 'Periode pertumbuhan aktif bambu (musim penghujan awal) ketika aliran cairan dalam ruas maksimal. Panen sadapan dijadwalkan mengikuti fase ini agar volume dan kandungan nutrisi optimal.' },
  { term: 'Distilasi Uap', cat: 'Produksi', def: 'Proses pemurnian dengan memanaskan air bambu hingga menguap lalu mengembunkannya kembali. Menghilangkan mikroorganisme dan kotoran tanpa mengorbankan mineral larut seperti silika.' },
  { term: 'Demulensi', cat: 'Sains', def: 'Sifat pelapis lembut (lendir tumbuhan) yang membantu menenangkan mukosa lambung dan tenggorokan. Inilah alasan air bambu terasa "lembut" di tenggorokan dan dipakai untuk keluhannya maag dan batuk berkepanjangan.' },
  { term: 'Diuretik Alami', cat: 'Sains', def: 'Zat yang mendorong produksi urin membantu ginjal membuang endapan mineral dan toksin. Air bambu dikenal sebagai diuretik lembut — mendukung program pencegahan batu ginjal tanpa memaksakan tubuh.' },
  { term: 'Terapi Komplementer', cat: 'Kesehatan', def: 'Pendekatan pendukung yang berjalan beriringan (bukan pengganti) pengobatan medis modern. Air bambu diposisikan sebagai terapi komplementer: melengkapi pola hidup sehat dan pengobatan dokter, bukan menggantikannya.' },
  { term: 'Detoksifikasi', cat: 'Kesehatan', def: 'Proses tubuh menetralisir dan membuang zat toksik melalui hati, ginjal, kulit, dan usus. Konsumsi cairan mineral alami seperti air bambu mendukung jalur detoks alami ini.' },
  { term: 'MOQ', cat: 'Bisnis', def: 'Minimum Order Quantity — batas minimal pemesanan untuk skema grosir atau kontrak pasokan. Untuk air bambu suling umumnya 1 kartu (12 botol); untuk bambu batang dihitung per ikat atau truk.' },
  { term: 'Kontrak Pasokan', cat: 'Bisnis', def: 'Perjanjian suplai rutin berkala (bulanan/tahunan) dengan harga terkunci dan jadwal tetap. Digunakan klinik, hotel, kafe, dan distributor kota agar stok stabil tanpa fluktuasi harga.' },
  { term: 'Distributor Kota', cat: 'Bisnis', def: 'Mitra eksklusif yang memasarkan produk BWN di satu wilayah kota/kabupaten, dengan dukungan harga khusus, materi promosi, dan prioritas pasokan. Skema utama ekspansi 2.500+ kota BWN.' },
  { term: 'Bambu Petung', cat: 'Jenis Bambu', def: 'Dendrocalamus asper — bambu bertubuh besar (diameter 10–20 cm), dinding tebal, paling populer untuk konstruksi dan volume sadapan besar. Tumbuh subur di ketinggian 400–1.000 mdpl.' },
  { term: 'Bambu Wulung', cat: 'Jenis Bambu', def: 'Gigantochloa atroviolacea — bambu hitam kehijauan elegan, andalan dekorasi dan furnitur premium. Sadapannya bernuansa mineral lebih kompleks dan diminati pasar niche.' },
  { term: 'Bambu Apus', cat: 'Jenis Bambu', def: 'Gigantochloa apus — bambu panjang dan lentur, sejak dulu bahan rangka rumah adat dan jembatan tradisional. Diameter 6–12 cm dengan ruas yang rapat.' },
  { term: 'Bambu Ori', cat: 'Jenis Bambu', def: 'Bambusa vulgaris var. striata — bambu kuning bergaris emas, primadona tanaman hias lanskap dan bonsai bambu. Dijual per batang untuk dekorasi taman dan interior.' },
  { term: 'Sadapan Berkelanjutan', cat: 'Keberlanjutan', def: 'Prinsip panen yang menjaga populasi rumpun bambu: maksimal 2 ruas disadap per rumpun per musim, rotasi lahan 3 tahun, dan penjarengan tunas. Menjamin pasokan jangka panjang tanpa merusak hutan.' },
  { term: 'Rumpun Bambu', cat: 'Keberlanjutan', def: 'Koloni bambu yang tumbuh dari rizoma induk yang sama. Satu rumpun petung dewasa mampu memproduksi ratusan batang sepanjang hidupnya — aset pasokan terpenting mitra petani kami.' },
  { term: 'Rizoma', cat: 'Botani', def: 'Batang cabang bawah tanah tempat bambu menyimpan cadangan makanan dan memunculkan tunas baru. Kesehatan rizoma menentukan produktivitas sadapan satu rumpun.' },
  { term: 'Klorofil', cat: 'Sains', def: 'Pigmen hijau fotosintesis. Jejak klorofil dalam sadapan bambu muda memberi warna kehijauan samar dan kontribusi antioksidan tambahan pada produk tabib (raw).' },
  { term: 'Asam Amino', cat: 'Sains', def: 'Blok pembangun protein — sebagian bersifat esensial (harus dari makanan). Analisis laboratorium menunjukkan air bambu mengandung jejak asam amino seperti lisin dan leusin dalam bentuk terlarut.' },
  { term: 'Kadar TDS', cat: 'Mutu', def: 'Total Dissolved Solids — total zat padat terlarut (mineral, garam). Air bambu suling BWN distandarisasi TDS rendah-namun-mineral agar aman harian; angka ini diuji tiap batch produksi.' },
  { term: 'Uji Mutu Batch', cat: 'Mutu', def: 'Pemeriksaan mikrobiologi (TPC, E. coli) dan fisikokimia (pH, TDS, kejernihan) per batch produksi sebelum distribusi. Dokumen hasil tersedia bagi mitra korporat yang memintanya.' },
  { term: ' Packing Aman Kargo'.trim(), cat: 'Logistik', def: 'Protokol pengemasan multi-lapis: bubble wrap, kayu palet, strapping, dan kartu "Fragile — Cairan". Menjamin tingkat pecah <0,5% untuk kiriman antar pulau laut-udara.' },
  { term: 'Kargo LCL', cat: 'Logistik', def: 'Less than Container Load — pengiriman bervolume kecil yang digabung dalam satu kontainer dengan kiriman lain. Opsi ekonomis untuk distributor kota baru yang belum mengisi satu truk penuh.' },
  { term: 'Kargo FCL', cat: 'Logistik', def: 'Full Container Load — kontainer penuh untuk satu pemesan. Harga per liter/jerigen paling efisien; dipakai kontrak pasokan hotel, rumah sakit, dan distributor besar.' },
  { term: 'ETA Pengiriman', cat: 'Logistik', def: 'Estimated Time of Arrival — estimasi tiba. Jawa 1–3 hari, Sumatra/Bali/Kalimantan/Sulawesi 3–6 hari, Indonesia Timur 5–9 hari, tergantung ketersediaan armada ekspedisi mitra.' },
  { term: 'Tabib Tradisional', cat: 'Tradisi', def: 'Praktisi pengobatan warisan budaya yang menggunakan ramuan alami — termasuk air bambu — dalam perawatan pasien. BWN menjalin kemitraan formal dengan komunitas tabib di Jawa Barat dan Jawa Tengah.' },
  { term: 'Sehat dari Dalam', cat: 'Kesehatan', def: 'Filosofi perawatan yang memulai dari nutrisi internal — "beauty and health from within". Silika dan antioksidan air bambu bekerja dari dalam: kulit, rambut, tulang, hingga pembuluh darah.' },
  { term: 'Ramah Gula Darah', cat: 'Kesehatan', def: 'Istilah untuk minuman tanpa gula tambahan dan indeks glikemik rendah. Air bambu murni mengandung gula alami sangat rendah sehingga relatif aman bagi pemantau gula darah — dengan tetap memperhatikan total asupan harian dan arahan dokter.' },
  { term: 'Silica-Collagen Pathway', cat: 'Sains', def: 'Mekanisme sinergi: silika mengaktivasi enzim lisil oksidase yang menyilangkan serat kolagen — membuat kulit kenyal, tulang padat, dan pembuluh darah elastis. Alasan utama air bambu dijuluki "kolagen alami dari bambu".' },
  { term: 'Bisnis Berkelanjutan', cat: 'Keberlanjutan', def: 'Model usaha yang menyeimbangkan profit, lingkungan, dan masyarakat: panen ramah rumpun, beli-tani langsung dari petani mitra (fair trade), dan kemasan yang terus dikurangi plastiknya.' },
  { term: 'Tasikmalaya', cat: 'Perusahaan', def: 'Kota dan kabupaten di Jawa Barat — basis produksi dan kantor pusat PT Bambu Water Nusantara sejak pendirian. Wilayah pegunungan ini terkenal rumpun bambu petung berkualitas ekspor.' },
  { term: 'Hak Kekayaan Intelektual', cat: 'Perusahaan', def: 'Perlindungan legal atas merek, desain kemasan, dan konten edukasi BWN. Seluruh materi di bambuwater.web.id dilindungi — dilarang direplikasi tanpa izin tertulis.' },
];

const CATS = ['Semua', 'Dasar', 'Sains', 'Produk', 'Produksi', 'Kesehatan', 'Tradisi', 'Bisnis', 'Logistik', 'Jenis Bambu', 'Keberlanjutan', 'Botani', 'Mutu', 'Perusahaan'];

const FAQ = [
  {
    q: 'Untuk siapa glossarium air bambu ini dibuat?',
    a: 'Glossarium ini dirancang untuk tiga kelompok: konsumen baru yang ingin memahami istilah pada kemasan dan artikel kami, terapis dan tabib yang memerlukan referensi teknis cepat, serta calon mitra bisnis — distributor, reseller, klinik — yang menemukan istilah logistik dan kontrak saat berdiskusi dengan tim kami. Setiap definisi ditulis ringkas namun lengkap konteksnya.',
  },
  {
    q: 'Apakah definisi di halaman ini berdasarkan sumber ilmiah?',
    a: 'Definisi kategori Sains dan Kesehatan disusun merujuk pada literatur nutrisi umum dan kajian komposisi air bambu yang dipublikasikan, sedangkan istilah tradisi memuat pemakaian istilah dalam masyarakat Sunda-Jawa sebagaimana diwariskan para tabib. Halaman ini bersifat edukatif dan bukan pengganti nasihat medis profesional.',
  },
  {
    q: 'Bolehkah saya mengutip atau membagikan istilah dari glossarium ini?',
    a: 'Tentu — silakan bagikan tautan glossarium kepada siapa pun yang membutuhkan; konten edukatif kami terbuka untuk dibaca. Namun pengambilan seluruh isi untuk direplikasi di situs lain tanpa izin tertulis tidak diizinkan karena dilindungi hak kekayaan intelektual PT Bambu Water Nusantara.',
  },
];

export function GlossariumPage() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('Semua');

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return TERMS.filter(
      (t) =>
        (cat === 'Semua' || t.cat === cat) &&
        (!needle || t.term.toLowerCase().includes(needle) || t.def.toLowerCase().includes(needle))
    );
  }, [q, cat]);

  const jsonLd = [
    faqNode(FAQ),
    breadcrumbNode([
      { name: 'Beranda', url: `${SITE_URL}/` },
      { name: 'Glossarium', url: `${SITE_URL}/#/glossarium` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      '@id': `${SITE_URL}/#/glossarium#termset`,
      name: 'Glossarium Air Bambu Bambu Water Nusantara',
      description: 'Kamus istilah air bambu: sains, tradisi tabib, produksi, mutu, hingga istilah bisnis dan logistik.',
      url: `${SITE_URL}/#/glossarium`,
      hasDefinedTerm: TERMS.map((t) => ({
        '@type': 'DefinedTerm',
        name: t.term,
        description: t.def,
      })),
    },
  ];

  return (
    <>
      <AutoJsonLd nodes={jsonLd} />
      <PageHero slug="glossarium" />

      <PageSection bg="light">
        <SectionHeading
          eyebrow={`Kamus Istilah — ${TERMS.length} Entri`}
          title="Glossarium"
          highlight="Air Bambu Nusantara"
          description="Semua istilah teknis, ilmiah, dan tradisional yang Anda temui di situs ini — dijelaskan bahasa sederhana. Cari atau filter per kategori."
        />

        {/* Kontrol pencarian + filter */}
        <Reveal className="mx-auto mt-10 max-w-4xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-primary/60" aria-hidden />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari istilah… mis. silika, sadapan, MOQ"
              aria-label="Cari istilah di glossarium"
              className="w-full rounded-full border border-primary/20 bg-white py-4 pl-13 pr-5 text-sm shadow-lg shadow-emerald-900/5 outline-none transition-all duration-300 focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
            />
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter kategori istilah">
            {CATS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  cat === c
                    ? 'border-primary bg-primary text-white shadow-md shadow-emerald-900/20'
                    : 'border-primary/20 bg-white text-muted-foreground hover:border-primary/45 hover:text-primary'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground" aria-live="polite">
            {list.length} istilah ditampilkan
          </p>
        </Reveal>

        {/* Kartu istilah */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((t) => (
              <motion.article
                layout
                key={t.term}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="card-lift rounded-3xl border border-primary/10 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
                    <BookMarked className="h-4.5 w-4.5 shrink-0 text-gold" aria-hidden />
                    {t.term}
                  </h2>
                  <span className="shrink-0 rounded-full bg-secondary/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                    {t.cat}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.def}</p>
              </motion.article>
            ))}
          </AnimatePresence>
          {list.length === 0 && (
            <p className="col-span-full py-16 text-center text-sm text-muted-foreground">
              Istilah tidak ditemukan. Coba kata kunci atau kategori lain.
            </p>
          )}
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection bg="cream">
        <SectionHeading eyebrow="Info Glossarium" title="Pertanyaan" highlight="Tentang Halaman Ini" />
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

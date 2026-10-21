'use client';

import { ProductPageTemplate, type ProductDetail } from './product-template';

const PRODUCT: ProductDetail = {
  slug: 'air-bambu-tabib',
  image: '/images/process-harvest.jpg',
  imageAlt: 'Panen Air Bambu Tabib — sadapan mentah segar langsung dari ruas bambu muda',
  tagline: 'Sadapan Mentah Segar Sesuai Tradisi Tabib Nusantara',
  description: [
    'Air Bambu Tabib adalah sadapan mentah murni yang diambil langsung dari ruas bambu muda menggunakan teknik mata tunas — persis seperti yang dipraktikkan tabib Nusantara berabad-abad lamanya.',
    'Dipanen segar per pesanan subuh dan dikirim dengan prioritas kecepatan. Tanpa proses apa pun — tanpa suling, tanpa pengawet — agar energi dan kandungan alaminya utuh untuk praktik pengobatan komplementer Anda.',
  ],
  sizes: [
    { name: 'Jerigen 5 L', note: 'Sadapan segar harian' },
    { name: 'Jerigen 10 L', note: 'Praktik tabib / keluarga terapi' },
    { name: 'Drum 30 L', note: 'Klinik & komunitas tabib' },
  ],
  features: [
    'Panen segar per pesanan (subuh)',
    'Teknik mata tunas tradisional',
    '100% tanpa pengawet & proses',
    'Untuk terapis & tabib',
    'Pengiriman prioritas / cold-pack',
    'Ketersediaan terbatas harian',
  ],
  specs: [
    { label: 'Asal', value: 'Rumpun Terkurasi' },
    { label: 'Proses', value: 'Mentah — Tanpa Proses' },
    { label: 'Panen', value: 'Subuh, Per Pesanan' },
    { label: 'Simpan', value: '1–3 Hari (Segar)' },
  ],
  uses: [
    { title: 'Praktik Tabib Tradisional', text: 'Bahan utama terapi minum sesuai metode tabib — demam, panas dalam, dan pemulihan.', icon: 'droplets' },
    { title: 'Klinik Terapi Komplementer', text: 'Pasokan rutin untuk klinik yang mengintegrasikan terapi alami.', icon: 'droplets' },
    { title: 'Terapi Keluarga Tradisional', text: 'Untuk keluarga yang menjalankan tradisi pengobatan leluhur di rumah.', icon: 'droplets' },
    { title: 'Riset & Edukasi', text: 'Sampel murni untuk penelitian dan pembelajaran pengobatan tradisional.', icon: 'droplets' },
    { title: 'Ritual & Budaya', text: 'Upacara adat dan tradisi kesehatan komunitas.', icon: 'droplets' },
    { title: 'Grosir Terapis', text: 'Kontrak bulanan untuk jaringan tabib di kota Anda.', icon: 'droplets' },
  ],
  howTo: [
    'Pesan sebelum pukul 15.00 WIB untuk panen subuh besoknya.',
    'Terima dengan segel utuh — cek kondisi segera saat tiba.',
    'Simpan dingin (kulkas) dan gunakan dalam 1–3 hari untuk kualitas terbaik.',
    'Gunakan sesuai anjuran tabib atau tenaga kesehatan Anda.',
  ],
  faqs: [
    { q: 'Mengapa daya tahan simpannya pendek?', a: 'Karena 100% mentah tanpa proses apa pun — persis seperti keluar dari ruas bambu. Ini justru bukti keasliannya. Untuk konsumsi harian dengan simpan lama, pilih Air Bambu Suling.' },
    { q: 'Apakah tersedia setiap hari?', a: 'Ketersediaan mengikuti panen dan cuaca. Kami sarankan pesan H-1 dan untuk kebutuhan besar (drum), hubungi kami untuk jadwal pasokan.' },
    { q: 'Bisa dikirim ke luar kota?', a: 'Bisa — menggunakan ekspedisi prioritas dengan cold-pack (opsional). Untuk jarak jauh, kami rekomendasikan Air Bambu Tabib dikonsumsi dalam 1–2 hari setelah tiba.' },
    { q: 'Apakah ada garansi kualitas?', a: 'Ya. Jika sadapan tiba dalam kondisi tidak layak (busuk/tercemar), kami ganti atau kembalikan dana. Kepuasan praktisi adalah prioritas kami.' },
  ],
  related: [
    { label: 'Air Bambu Suling', slug: 'air-bambu-suling' },
    { label: 'Proses Produksi', slug: 'proses-produksi' },
    { label: 'Untuk Pengobatan', slug: 'air-bambu-pengobatan' },
  ],
  waMessage: 'Halo! Saya ingin memesan Air Bambu Tabib (sadapan mentah segar). Mohon info ketersediaan hari ini.',
};

/** Halaman 16/25 — Produk Air Bambu Tabib */
export function AirBambuTabibPage() {
  return <ProductPageTemplate p={PRODUCT} />;
}

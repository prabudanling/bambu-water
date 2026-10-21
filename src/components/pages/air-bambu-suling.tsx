'use client';

import { ProductPageTemplate, type ProductDetail } from './product-template';

const PRODUCT: ProductDetail = {
  slug: 'air-bambu-suling',
  image: '/images/product-water-bottle.jpg',
  imageAlt: 'Botol Air Bambu Suling Premium Bambu Water Nusantara — minuman terapi harian',
  tagline: 'Sari Sadapan Bambu yang Dimurnikan untuk Konsumsi Harian',
  description: [
    'Air Bambu Suling Premium adalah sadapan bambu muda pilihan yang dimurnikan melalui distilasi bertahap — membuang mikroorganisme tanpa menghilangkan silika organik, mineral, dan rasa segar alaminya.',
    'Hasilnya: minuman terapi lembut dengan pH seimbang alami, bebas klorin dan logam berat, aman dikonsumsi setiap hari oleh seluruh anggota keluarga. Tersedia dari botol praktis 600 ml hingga drum 30 L untuk kebutuhan grosir.',
  ],
  sizes: [
    { name: 'Botol 600 ml', note: 'Karton isi 24 — cocok untuk acara & kantor' },
    { name: 'Botol 1,5 L', note: 'Untuk keluarga kecil' },
    { name: 'Galon 19 L', note: 'Dispenser rumah & kantor' },
    { name: 'Jerigen 10 L', note: 'Grosir min. 10 pcs' },
    { name: 'Drum 30 L', note: 'Distributor & klinik' },
  ],
  features: [
    'Distilasi bertahap higienis',
    'Bebas klorin & logam berat',
    'pH seimbang alami',
    'Kemasan food-grade',
    'Tanpa pengawet & pemanis',
    'Uji mutu per batch',
  ],
  specs: [
    { label: 'Asal', value: 'Hutan Rakyat JB' },
    { label: 'Proses', value: 'Distilasi 3 Tahap' },
    { label: 'Kemasan', value: 'Food-Grade' },
    { label: 'Simpan', value: '6–12 Bulan' },
  ],
  uses: [
    { title: 'Minuman Harian Keluarga', text: 'Pengganti air putih biasa dengan tambahan mineral & silika — aman untuk semua usia.', icon: 'droplets' },
    { title: 'Program Detoks 7 Hari', text: 'Pelengkap program detoksifikasi alami — lihat panduan di artikel kami.', icon: 'droplets' },
    { title: 'Terapi Pendamping', text: 'Untuk penderita diabetes/kolesterol sebagai pengganti minuman manis (dengan anjuran medis).', icon: 'droplets' },
    { title: 'Acara & Reseller', text: 'Karton botol untuk acara, kantor, hotel, atau bisnis minuman sehat Anda.', icon: 'droplets' },
    { title: 'Grosir & Distributor', text: 'Harga khusus untuk jerigen/drum dengan kontrak pasokan rutin.', icon: 'droplets' },
    { title: 'Kafe & Resto Sehat', text: 'Bahan dasar menu signature: infuse bamboo water, smoothie, hingga es teh bambu.', icon: 'droplets' },
  ],
  howTo: [
    'Simpan di tempat sejuk, jauhkan dari sinar matahari langsung.',
    'Konsumsi 1–3 gelas per hari — optimal saat perut kosong di pagi hari.',
    'Setelah dibuka, habiskan dalam 2–3 hari (kemasan kecil) atau simpan di kulkas.',
    'Untuk program terapi, konsultasikan durasi dengan tabib atau tenaga kesehatan Anda.',
  ],
  faqs: [
    { q: 'Apa bedanya dengan air bambu tabib?', a: 'Air bambu suling sudah dimurnikan dengan distilasi bertahap sehingga aman untuk konsumsi harian semua orang dengan daya tahan simpan lebih lama. Air bambu tabib adalah sadapan mentah segar yang ditujukan untuk praktik terapi tabib.' },
    { q: 'Rasanya seperti apa?', a: 'Sangat lembut dan segar — sedikit manis alami dengan aroma bambu yang samar. Banyak pelanggan menyebutnya "seperti air hujan murni dari dalam batang bambu".' },
    { q: 'Apakah bisa untuk bayi & ibu hamil?', a: 'Ya, air bambu suling aman untuk semua usia karena telah dimurnikan. Untuk ibu hamil dan bayi di bawah 1 tahun, sebaiknya tetap konsultasikan dengan dokter atau bidan.' },
    { q: 'Berapa lama daya tahan simpan?', a: 'Kemasan tertutup: 6–12 bulan di tempat sejuk. Setelah dibuka: 2–3 hari suhu ruang, hingga 7 hari di kulkas.' },
  ],
  related: [
    { label: 'Air Bambu Tabib', slug: 'air-bambu-tabib' },
    { label: 'Bambu Berkualitas', slug: 'bambu-berkualitas' },
    { label: 'Harga & Paket', slug: 'harga-paket' },
  ],
  waMessage: 'Halo! Saya ingin memesan Air Bambu Suling Premium. Mohon info harga & ketersediaan.',
};

/** Halaman 15/25 — Produk Air Bambu Suling */
export function AirBambuSulingPage() {
  return <ProductPageTemplate p={PRODUCT} />;
}

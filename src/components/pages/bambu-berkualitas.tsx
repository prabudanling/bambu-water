'use client';

import { ProductPageTemplate, type ProductDetail } from './product-template';

const PRODUCT: ProductDetail = {
  slug: 'bambu-berkualitas',
  image: '/images/product-bamboo-poles.jpg',
  imageAlt: 'Tumpukan batang bambu berkualitas Petung, Wulung, Apus, dan Ori siap kirim massal',
  tagline: 'Petung, Wulung, Apus & Ori — Terseleksi, Siap Kirim Massal',
  description: [
    'Kami menyediakan bambu berkualitas berumur 3+ tahun dari hutan rakyat terkurasi: Bambu Petung untuk konstruksi, Wulung untuk estetika premium, Apus untuk tali & anyaman, serta Ori untuk rangka ringan.',
    'Setiap batang terseleksi lurus, kering merata, dan bebas hama — dengan opsi pengeringan & fumigasi. Kirim per batang, per ikat, hingga per truk penuh ke seluruh Indonesia.',
  ],
  sizes: [
    { name: 'Per batang', note: 'Retail proyek kecil' },
    { name: 'Per ikat', note: '10–25 batang/ikat' },
    { name: 'Per truk/kargo', note: 'Volume proyek besar' },
  ],
  features: [
    'Seleksi umur 3+ tahun',
    'Lurus & kering merata',
    'Pengeringan & fumigasi',
    'Bebas hama & jamur',
    'Sertifikasi asal hutan rakyat',
    'Muat kargo darat & laut',
  ],
  specs: [
    { label: 'Jenis', value: '4 Varietas Premium' },
    { label: 'Panjang', value: '8–12 Meter' },
    { label: 'Diameter', value: '5–18 Cm' },
    { label: 'Umur', value: '3+ Tahun' },
  ],
  uses: [
    { title: 'Konstruksi & Bangunan', text: 'Petung untuk struktur rumah bambu, jembatan, dan bangunan tahan gempa.', icon: 'tree' },
    { title: 'Aransemen & Interior', text: 'Wulung hitam premium untuk dinding, plafon, dan furnitur estetik.', icon: 'tree' },
    { title: 'Kerajinan & Anyaman', text: 'Apus yang lentur untuk tas, tikar, topi, dan kerajinan ekspor.', icon: 'tree' },
    { title: 'Furniture & Rangka', text: 'Ori yang ramping untuk kursi, meja, dan rangka ringan.', icon: 'tree' },
    { title: 'Lanskap & Taman', text: 'Batang hidup & potong untuk greening proyek properti dan resor.', icon: 'tree' },
    { title: 'Industri & Ekspor', text: 'Pasokan massal berkelanjutan untuk pabrik, kontraktor, dan eksportir.', icon: 'tree' },
  ],
  howTo: [
    'Tentukan jenis, ukuran (panjang & diameter), dan jumlah kebutuhan Anda.',
    'Minta penawaran via WhatsApp — sertakan lokasi kirim untuk estimasi ongkos kargo.',
    'Untuk proyek besar, kami berikan sampel batang sebelum kontrak.',
    'Pengiriman dijadwalkan sesuai armada — segel kayu & strapping untuk muatan penuh.',
  ],
  faqs: [
    { q: 'Jenis bambu apa yang paling kuat untuk konstruksi?', a: 'Bambu Petung/Betung (Dendrocalamus asper) adalah pilihan utama konstruksi — diameter besar, serat padat, dan terbukti digunakan bangunan bambu modern Indonesia yang tahan gempa.' },
    { q: 'Apakah bambu sudah kering/treatment?', a: 'Ya, kami sediakan opsi bambu kering angin dan bambu treatment (perendaman borax + fumigasi) agar tahan kutu dan jamur hingga bertahun-tahun.' },
    { q: 'Berapa minimal pemesanan untuk kargo?', a: 'Untuk harga kargo terbaik, minimal 1 truk kecil (±200–400 batang tergantung ukuran). Di bawah itu tetap kami layani via ekspedisi reguler.' },
    { q: 'Bisa kirim ke luar Jawa?', a: 'Bisa. Kami rutin mengirim kargo bambu ke Sumatera, Kalimantan, Sulawesi, Bali & NT, hingga Papua via jalur laut dengan packing aman.' },
  ],
  related: [
    { label: 'Air Bambu Suling', slug: 'air-bambu-suling' },
    { label: 'Pengiriman Massal', slug: 'pengiriman-massal' },
    { label: 'Harga & Paket', slug: 'harga-paket' },
  ],
  waMessage: 'Halo! Saya ingin memesan bambu batang berkualitas (Petung/Wulung/Apus/Ori). Mohon penawaran.',
};

/** Halaman 17/25 — Produk Bambu Berkualitas */
export function BambuBerkualitasPage() {
  return <ProductPageTemplate p={PRODUCT} />;
}

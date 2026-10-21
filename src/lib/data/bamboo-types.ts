/**
 * DATA JENIS BAMBU — 8 varietas unggulan Nusantara
 * Halaman programatik: #/bambu/{slug} — "Bambu {Nama} — Harga & Spesifikasi".
 */

export type BambooTypeData = {
  slug: string;
  name: string;
  latin: string;
  category: 'Konstruksi' | 'Estetika & Dekorasi' | 'Kerajinan & Anyaman' | 'Struktur Ringan';
  hook: string;
  priceRange: string;
  specs: { label: string; value: string }[];
  applications: string[];
  careTips: string;
  faqs: { q: string; a: string }[];
};

export const BAMBOO_TYPES: BambooTypeData[] = [
  {
    slug: 'petung',
    name: 'Bambu Petung',
    latin: 'Dendrocalamus asper',
    category: 'Konstruksi',
    hook: 'Raja bambu konstruksi Indonesia — diameter besar dan dinding tebal menjadikan Petung pilihan pertama untuk struktur bangunan.',
    priceRange: 'Rp 85.000 – 150.000 / batang',
    specs: [
      { label: 'Panjang', value: '8–12 meter' },
      { label: 'Diameter', value: '10–18 cm' },
      { label: 'Ketebalan dinding', value: 'Tebal (kuat struktur)' },
      { label: 'Umur panen', value: '3–4 tahun' },
      { label: 'Warna', value: 'Hijau kekuningan tua' },
    ],
    applications: ['Struktur bangunan & rangka', 'Scaffolding proyek', 'Jembatan bambu', 'Green building & arsitektur bambu', 'Tiang utama rumah panggung'],
    careTips: 'Simpan terangkat dari tanah, sirkulasi udara lancar, hindari kontak langsung tanah basah. Treatment pengeringan & fumigasi memperpanjang umur pakai bertahun-tahun.',
    faqs: [
      { q: 'Berapa batang untuk satu rumah bambu?', a: 'Tergantung desain — rumah bambu umumnya 300–800 batang. Kirim desain Anda, tim kami hitung estimasi.' },
      { q: 'Apakah Petung tahan lama di luar ruang?', a: 'Dengan treatment tepat dan perawatan dasar, Petung bertahan bertahun-tahun untuk struktur luar ruang.' },
      { q: 'Bisa kirim ke luar Jawa?', a: 'Bisa — per ikat hingga truk penuh via kargo darat & laut ke seluruh Indonesia.' },
    ],
  },
  {
    slug: 'betung',
    name: 'Bambu Betung',
    latin: 'Dendrocalamus asper (Betung)',
    category: 'Konstruksi',
    hook: 'Saudara besar Petung di Sumatera — raksasa lembut dengan serat kuat untuk konstruksi dan tepung bambu.',
    priceRange: 'Rp 80.000 – 140.000 / batang',
    specs: [
      { label: 'Panjang', value: '8–12 meter' },
      { label: 'Diameter', value: '10–20 cm' },
      { label: 'Ketebalan dinding', value: 'Tebal' },
      { label: 'Umur panen', value: '3–4 tahun' },
      { label: 'Warna', value: 'Hijau keabu-abuan' },
    ],
    applications: ['Konstruksi struktur', 'Bahan tepung & serat bambu', 'Kerajinan besar', 'Furniture struktural'],
    careTips: 'Keringkan terlebih dahulu sebelum penggunaan konstruksi untuk menghindari perubahan bentuk. Simpan vertikal di tempat berangin.',
    faqs: [
      { q: 'Apa bedanya Betung dan Petung?', a: 'Keduanya satu spesies (Dendrocalamus asper) dengan nama daerah berbeda — Betung populer di Sumatera, Petung di Jawa. Kualitas setara.' },
      { q: 'Cocok untuk tepung bambu?', a: 'Ya — Betung adalah bahan baku utama industri tepung & serat bambu Indonesia.' },
      { q: 'Stok tersedia rutin?', a: 'Ya, stok terseleksi dari hutan rakyat terkurasi — pesan volume via WhatsApp.' },
    ],
  },
  {
    slug: 'wulung',
    name: 'Bambu Wulung',
    latin: 'Gigantochloa atroviolacea',
    category: 'Estetika & Dekorasi',
    hook: 'Keunggulan hitam elegan alami — Wulung adalah pilihan desainer untuk estetika premium tanpa pewarna.',
    priceRange: 'Rp 120.000 – 250.000 / batang',
    specs: [
      { label: 'Panjang', value: '6–10 meter' },
      { label: 'Diameter', value: '6–12 cm' },
      { label: 'Warna', value: 'Hitam keunguan alami' },
      { label: 'Umur panen', value: '3+ tahun' },
      { label: 'Finish', value: 'Kilau alami dengan treatment' },
    ],
    applications: ['Furniture premium & interior', 'Dekorasi ruang & kafe', 'Pagar & fasad estetik', 'Arsitektur tropis modern', 'Peralatan musik (angklung)'],
    careTips: 'Hindari sinar matahari langsung berlebihan agar warna hitam tetap dalam. Treatment kilau menjaga tampilan premium lebih lama.',
    faqs: [
      { q: 'Apakah warna hitamnya asli?', a: 'Ya — Wulung berwarna hitam keunguan alami tanpa pewarnaan. Treatment menonjolkan kilau premiumnya.' },
      { q: 'Kenapa lebih mahal dari Petung?', a: 'Ketersediaan lebih terbatas dan nilainya estetika — dibandingkan spesifikasi, Wulung memang kelas premium.' },
      { q: 'Cocok untuk kafe bergaya hits?', a: 'Sangat — Wulung adalah favorit desainer interior kafe & restoran bertema natural.' },
    ],
  },
  {
    slug: 'apus',
    name: 'Bambu Apus',
    latin: 'Gigantochloa apus',
    category: 'Kerajinan & Anyaman',
    hook: 'Raja serat lentur — Apus mudah dibelit dan dianyam, tulang punggung industri kerajinan & tali bambu Nusantara.',
    priceRange: 'Rp 45.000 – 90.000 / batang',
    specs: [
      { label: 'Panjang', value: '7–10 meter' },
      { label: 'Diameter', value: '4–8 cm' },
      { label: 'Sifat serat', value: 'Kuat & lentur' },
      { label: 'Umur panen', value: '3+ tahun' },
      { label: 'Warna', value: 'Hijau kekuningan' },
    ],
    applications: ['Anyaman & tenun bambu', 'Tali bambu tradisional', 'Kerangka kerajinan', 'Lidi & tusuk sate industri', 'Kerangka payung & kipas'],
    careTips: 'Simpan kering dan berventilasi. Untuk anyaman, rendam sebentar agar serat lebih lentur saat dikerjakan.',
    faqs: [
      { q: 'Bisa dipilah untuk lidi sate?', a: 'Ya — pilah diameter & kualitas serat sesuai standar industri lidi. Pesan volume rutin tersedia.' },
      { q: 'Apakah Apus mudah patah saat dianyam?', a: 'Justru sebaliknya — serat Apus paling lentur di antara bambu Nusantara, ideal untuk anyaman halus.' },
      { q: 'Minimum order untuk sentra kerajinan?', a: 'Mulai 100 batang; volume rutin bulanan dapat kontrak pasokan.' },
    ],
  },
  {
    slug: 'ori',
    name: 'Bambu Ori',
    latin: 'Bambusa blumeana',
    category: 'Struktur Ringan',
    hook: 'Ramping, lentur, dan andal — Ori adalah andalan rangka ringan, rumpun penahan erosi, dan kebutuhan pertanian.',
    priceRange: 'Rp 55.000 – 110.000 / batang',
    specs: [
      { label: 'Panjang', value: '6–9 meter' },
      { label: 'Diameter', value: '4–7 cm' },
      { label: 'Karakter', value: 'Ramping & lentur' },
      { label: 'Umur panen', value: '3+ tahun' },
      { label: 'Warna', value: 'Hijau segar' },
    ],
    applications: ['Rangka ringan & tiang penopang', 'Tutor tanaman & pertanian', 'Penahan erosi & konservasi', 'Kerangka tenda & nursery'],
    careTips: 'Cukup ringan namun pastikan titik sambungan terikat kuat. Simpan kering untuk menjaga kekuatan serat.',
    faqs: [
      { q: 'Bisa untuk rangka tanaman hop/sayur?', a: 'Ya — Ori adalah pilihan klasik tutor tanaman merambat dan rangka greenhouse sederhana.' },
      { q: 'Berapa umur untuk penahan erosi?', a: 'Rumpun hidup Ori tumbuh berdekatan dan akar kuat — efektif sebagai bio-barrier erosi bantaran sungai.' },
      { q: 'Tersedia volume besar?', a: 'Tersedia per ikat hingga per truk — ideal untuk proyek konservasi skala besar.' },
    ],
  },
  {
    slug: 'ampel',
    name: 'Bambu Ampel',
    latin: 'Bambusa vulgaris',
    category: 'Struktur Ringan',
    hook: 'Serbaguna klasik pekarangan — Ampel tumbuh merata dan mudah diolah untuk kebutuhan sehari-hari.',
    priceRange: 'Rp 40.000 – 80.000 / batang',
    specs: [
      { label: 'Panjang', value: '6–9 meter' },
      { label: 'Diameter', value: '5–10 cm' },
      { label: 'Karakter', value: 'Serbaguna & mudah olah' },
      { label: 'Umur panen', value: '3+ tahun' },
      { label: 'Warna', value: 'Hijau cerah' },
    ],
    applications: ['Pagar & pembatas pekarangan', 'Kerajinan rumah tangga', 'Tiang penopang ringan', 'Sarana pertanian'],
    careTips: 'Cukup keringkan sebelum digunakan untuk konstruksi ringan. Hindari kontak tanah langsung agar tahan lama.',
    faqs: [
      { q: 'Ampel atau Apus untuk anyaman?', a: 'Apus lebih lentur untuk anyaman halus; Ampel lebih cocok untuk kebutuhan struktural ringan & pagar.' },
      { q: 'Tumbuh cepat tidak?', a: 'Sangat — Ampel salah satu bambu paling cepat tumbuh, sehingga pasokannya stabil sepanjang tahun.' },
      { q: 'Bisa kombinasi jenis dalam satu kiriman?', a: 'Bisa — mixed load Ampel + jenis lain diatur agar logistik efisien.' },
    ],
  },
  {
    slug: 'gading',
    name: 'Bambu Gading',
    latin: 'Bambusa vulgaris var. striata',
    category: 'Estetika & Dekorasi',
    hook: 'Garis-garis emas alami di batang hijau — Gading adalah perhiasan taman dan lansia tropis.',
    priceRange: 'Rp 90.000 – 180.000 / batang',
    specs: [
      { label: 'Panjang', value: '5–8 meter' },
      { label: 'Diameter', value: '5–10 cm' },
      { label: 'Pola', value: 'Belang kuning emas alami' },
      { label: 'Umur panen', value: '3+ tahun' },
      { label: 'Kegunaan utama', value: 'Ornamen & lansekap' },
    ],
    applications: ['Lansia & taman premium', 'Dekorasi acara & wedding', 'Interior statement piece', 'Fasad estetik'],
    careTips: 'Sebagai elemen lansekap, rumpun perlu dikontrol agar tidak melebar berlebihan. Potong rumpun samping secara rutin.',
    faqs: [
      { q: 'Pola kuningnya alami?', a: 'Ya — belang emas adalah variasi alami varietas striata, bukan lukisan atau pemutihan.' },
      { q: 'Bisa untuk dekorasi wedding?', a: 'Sangat populer — arche bambu gading adalah background foto favorit acara outdoor.' },
      { q: 'Bisa ditanam langsung?', a: 'Kami menyediakan batang panen; untuk tanaman hidup bibit, diskusikan kebutuhan via WhatsApp.' },
    ],
  },
  {
    slug: 'ater',
    name: 'Bambu Ater',
    latin: 'Gigantochloa atter',
    category: 'Kerajinan & Anyaman',
    hook: 'Andalan anyaman Tasikmalaya — Ater adalah bahan utama keranjang, tikar, dan industri anyaman Nusantara.',
    priceRange: 'Rp 50.000 – 95.000 / batang',
    specs: [
      { label: 'Panjang', value: '7–10 meter' },
      { label: 'Diameter', value: '4–8 cm' },
      { label: 'Sifat serat', value: 'Halus & kuat' },
      { label: 'Umur panen', value: '3+ tahun' },
      { label: 'Warna', value: 'Hijau kecoklatan' },
    ],
    applications: ['Anyaman keranjang & tikar', 'Industri kerajinan Tasikmalaya', 'Serat bambu siap olah', 'Craft ekspor'],
    careTips: 'Serat halus Ater bekerja terbaik saat kering terkontrol. Simpan di ruang berventilasi jauh dari lembap ekstrem.',
    faqs: [
      { q: 'Ater vs Apus untuk anyaman?', a: 'Ater seratnya lebih halus untuk anyaman rapat (keranjang, tikar); Apus lebih lentur untuk belitan & tali.' },
      { q: 'Kota Tasikmalaya memang pusat Ater?', a: 'Ya — dari kota asal kami, Ater telah menopang industri anyaman Tasikmalaya puluhan tahun.' },
      { q: 'Bisa kontrak untuk ekspor craft?', a: 'Bisa — pasokan rutin terjadwal untuk workshop & eksportir kerajinan.' },
    ],
  },
];

export function findBambooType(slug: string): BambooTypeData | undefined {
  return BAMBOO_TYPES.find((b) => b.slug === slug);
}

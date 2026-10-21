/**
 * PUSAT DATA PERUSAHAAN — PT BAMBU WATER NUSANTARA
 * Semua konten situs bersumber dari dokumen akta pendirian resmi
 * dan riset kesehatan air bambu dari sumber kredibel
 * (Journal of Medicinal Plant Research 2015 / PMC4659479, TIME, RRI, Klikdokter, dsb).
 */

/** Domain resmi situs — bambuwater.web.id */
export const SITE_URL = 'https://bambuwater.web.id';

/** Klaim keunggulan utama brand */
export const BRAND_CLAIM = 'Sejak 2007 — Terbesar & Pertama di Indonesia';
export const YEARS_OF_EXPERIENCE = new Date().getFullYear() - 2007;

export const COMPANY = {
  legalName: 'PT Bambu Water Nusantara',
  name: 'Bambu Water Nusantara',
  shortName: 'BWN',
  domain: 'bambuwater.web.id',
  tagline: 'Pionir Air Bambu Indonesia Sejak 2007',
  description:
    'PT Bambu Water Nusantara — sejak 2007 pionir, terbesar, dan pertama di Indonesia dalam penyediaan air bambu alami untuk pengobatan serta distribusi bambu berkualitas dalam jumlah besar ke seluruh Indonesia.',
  foundedYear: 2007,
  email: 'halo@bambuwater.web.id',
  emailSales: 'sales@bambuwater.web.id',
  phone: '+62 813-1651-6524',
  whatsapp: '6281316516524',
  whatsappDisplay: '+62 813-1651-6524',
  city: 'Tasikmalaya',
  province: 'Jawa Barat',
  country: 'Indonesia',
  operationalHours: 'Senin – Sabtu, 08.00 – 17.00 WIB',
  social: {
    instagram: 'https://instagram.com/bambuwater',
    facebook: 'https://facebook.com/bambuwater',
    linkedin: 'https://linkedin.com/company/bambuwater',
  },
} as const;

/** Alamat resmi — Pusat & Branch Office */
export const OFFICES = [
  {
    id: 'pusat',
    label: 'Kantor Pusat',
    icon: 'landmark',
    address:
      'Guntur Village No.50, Kampung Gunung Guntur, Desa Padasuka, Kecamatan Sukarame, Kabupaten Tasikmalaya, Jawa Barat 46461',
    city: 'Tasikmalaya',
  },
  {
    id: 'branch-2',
    label: 'Branch Office 2',
    icon: 'building',
    address:
      'Perumahan Andalusia Garden, Cluster Granada No. 11, Mangkubumi, Tasikmalaya, Jawa Barat',
    city: 'Tasikmalaya',
  },
  {
    id: 'branch-3',
    label: 'Branch Office 3',
    icon: 'building',
    address:
      'Muararajeun Lama No. 26, Cihaurgeulis, Cibeunying Kaler, Bandung, Jawa Barat 40122',
    city: 'Bandung',
  },
] as const;

/** Catatan produksi: disuling santri + dewan pakar */
export const PRODUCTION_TEAM_NOTE =
  'Air bambu kami disuling oleh santri berpengalaman dan diawasi dewan pakar lintas bidang — memadukan kehati-hatian, kejujuran, dan standar mutu modern.';

/** Struktur pengurus — dewan pendiri, komisaris & direksi */
export const LEADERSHIP = {
  pendiri: [
    { name: 'Ko Abuy', role: 'Dewan Pendiri' },
    { name: 'H. Gugun Gunara, S.E', role: 'Dewan Pendiri' },
  ],
  komisaris: [
    { name: 'Hj. Qonitah Lutfiah, S.E., M.M.', role: 'Komisaris Utama', shares: '30%' },
    { name: 'Drs. Arif Rachman Hakim', role: 'Komisaris', shares: '15%' },
    { name: 'Jajang Sutivana', role: 'Komisaris', shares: '15%' },
  ],
  direktur: [
    { name: 'H. Gugun Gunara, S.E', role: 'Direktur Utama', shares: '25%' },
    { name: 'Rahmadini', role: 'Direktur', shares: '5%' },
    { name: 'H. Abdul Rohman', role: 'Direktur', shares: '5%' },
    { name: 'H. Solihin', role: 'Direktur', shares: '5%' },
  ],
} as const;

/** Divisi Manager Operasional */
export const OPERATIONS_MANAGERS = [
  { name: 'Mr. Aceng Kurnia', role: 'Manager Operasional' },
  { name: 'Mr. Yudi Oktora', role: 'Manager Operasional' },
  { name: 'Mr. Mahbub', role: 'Manager Operasional' },
  { name: 'Mr. Soleh M Ramdani', role: 'Manager Operasional' },
  { name: 'Mr. Ivan Nugraha', role: 'Manager Operasional' },
  { name: 'Mr. Hendri Sutiana', role: 'Manager Operasional' },
] as const;

/** Manfaat air bambu berdasarkan riset & pengobatan tradisional */
export const BENEFITS = [
  {
    icon: 'thermometer',
    title: 'Menurunkan Demam & Panas Dalam',
    description:
      'Efek mendinginkan alami air bambu sejak lama dimanfaatkan pengobatan tradisional Nusantara untuk meredakan demam dan panas dalam.',
  },
  {
    icon: 'wind',
    title: 'Melegakan Batuk & Dahak',
    description:
      'Membantu membersihkan saluran pernapasan dari dahak dan meredakan iritasi tenggorokan secara alami.',
  },
  {
    icon: 'heart-pulse',
    title: 'Menjaga Kesehatan Jantung',
    description:
      'Kandungan flavonoid dan polifenol air bambu membantu melindungi jantung dan pembuluh darah dari serangan radikal bebas.',
  },
  {
    icon: 'activity',
    title: 'Mendukung Gula Darah Normal',
    description:
      'Dalam tradisi herbal, air tuak bambu dipercaya membantu menurunkan kadar gula darah dan menjaga metabolisme tubuh.',
  },
  {
    icon: 'droplets',
    title: 'Melancarkan Pencernaan',
    description:
      'Mineral alami dan sifat alkali air bambu membantu melancarkan sistem pencernaan dan detoksifikasi tubuh.',
  },
  {
    icon: 'shield-check',
    title: 'Meningkatkan Daya Tahan Tubuh',
    description:
      'Antioksidan, asam amino, dan mineral esensial dalam air bambu mendukung sistem imun agar tetap prima.',
  },
  {
    icon: 'sparkles',
    title: 'Silika untuk Kulit, Rambut & Kuku',
    description:
      'Silika organik bambu — salah satu yang tertinggi di alam — mendukung produksi kolagen untuk kulit kenyal, rambut, dan kuku kuat.',
  },
  {
    icon: 'flower-2',
    title: 'Meredakan Nyeri Menstruasi',
    description:
      'Pengobatan tradisional memanfaatkan air bambu untuk meredakan nyeri haid dan membantu mengurangi perdarahan berlebih.',
  },
] as const;

/** Kandungan nutrisi (persentase ilustratif berdasarkan riset) */
export const NUTRITION = [
  { name: 'Silika Organik', value: 70, note: 'Ekstrak daun bambu berkisar hingga 70% silika — tertinggi di alam' },
  { name: 'Flavonoid & Polifenol', value: 85, note: 'Antioksidan pelindung sel dari radikal bebas' },
  { name: 'Klorofil Alami', value: 75, note: 'Mendukung detoksifikasi dan regenerasi sel' },
  { name: 'Asam Amino Esensial', value: 65, note: 'Blok pembangun protein bagi jaringan tubuh' },
  { name: 'Mineral Kalium, Kalsium & Magnesium', value: 80, note: 'Elektrolit alami penyeimbang cairan tubuh' },
] as const;

/** Produk utama */
export const PRODUCTS = [
  {
    id: 'air-bambu-suling',
    name: 'Air Bambu Suling Premium',
    tagline: 'Minuman terapi sehari-hari',
    image: '/images/product-water-bottle.jpg',
    sizes: ['Botol 600 ml', 'Botol 1,5 L', 'Galon 19 L'],
    description:
      'Air sadapan bambu muda yang disuling higienis untuk mempertahankan mineral dan silika alaminya. Cocok untuk konsumsi harian, program detoks, dan pendamping terapi kesehatan.',
    features: ['Suling bertahap higienis', 'Bebas klorin & logam berat', 'pH seimbang alami', 'Kemasan food-grade'],
    badge: 'Unggulan',
  },
  {
    id: 'air-bambu-tabib',
    name: 'Air Bambu Tabib (Sadapan Mentah)',
    tagline: 'Tradisi pengobatan Nusantara',
    image: '/images/process-harvest.jpg',
    sizes: ['Jerigen 5 L', 'Jerigen 10 L', 'Drum 30 L'],
    description:
      'Sadapan air bambu murni langsung dari ruas bambu muda — dipanen dengan teknik mata tunas sesuai tradisi tabib, dikirim segar untuk kebutuhan terapi, pengobatan komplementer, dan penyembuhan.',
    features: ['Panen segar per pesanan', 'Teknik mata tunas tradisional', 'Tanpa pengawet', 'Untuk terapis & tabib'],
    badge: 'Terapi',
  },
  {
    id: 'bambu-berkualitas',
    name: 'Bambu Berkualitas Konstruksi & Kerajinan',
    tagline: 'Petung, Wulung, Apus, Ori',
    image: '/images/product-bamboo-poles.jpg',
    sizes: ['Per batang', 'Per ikat', 'Per truk/kargo'],
    description:
      'Bambu pilihan berumur 3+ tahun: Petung untuk konstruksi, Wulung untuk estetika, Apus untuk tali & kerajinan, dan Ori untuk rangka. Terseleksi lurus, kering merata, dan bebas hama.',
    features: ['Seleksi umur 3+ tahun', 'Lurus & kering merata', 'Pengeringan & fumigasi', 'Sertifikasi asal hutan rakyat'],
    badge: 'Massal',
  },
] as const;

/** Tahapan proses produksi */
export const PROCESS = [
  {
    step: '01',
    title: 'Panen Berkelanjutan',
    description:
      'Bambu muda dipilih dari hutan bambu rakyat terkurasi — dipanen tanpa merusak rumpun agar hutan tetap lestari.',
  },
  {
    step: '02',
    title: 'Sadapan Air Bambu',
    description:
      'Air sadapan diambil dengan teknik mata tunas di ruas bambu muda saat kandungan mineralnya paling tinggi.',
  },
  {
    step: '03',
    title: 'Distilasi & Uji Mutu',
    description:
      'Disuling bertahap pada fasilitas higienis, diuji mikrobiologi & mineral, dipastikan layak konsumsi sesuai standar.',
  },
  {
    step: '04',
    title: 'Pengemasan & Distribusi',
    description:
      'Dikemas food-grade lalu dikirim ke seluruh Indonesia — mulai botol satuan hingga kargo truk dalam jumlah besar.',
  },
] as const;

/** Cakupan kota pengiriman */
export const CITIES = [
  'Jakarta', 'Bandung', 'Surabaya', 'Medan', 'Makassar', 'Semarang', 'Palembang',
  'Yogyakarta', 'Denpasar', 'Balikpapan', 'Pontianak', 'Manado', 'Padang', 'Pekanbaru',
  'Banjarmasin', 'Jayapura', 'Ambon', 'Banda Aceh', 'Solo', 'Malang', 'Batam',
  'Bandar Lampung', 'Cirebon', 'Bogor', 'Tasikmalaya', 'Kupang', 'Palu', 'Kendari',
  'Mataram', 'Ternate', 'Samarinda', 'Sorong',
] as const;

/** Statistik highlight (berdasar riset) */
export const STATS = [
  { prefix: '', value: YEARS_OF_EXPERIENCE, suffix: '+', label: 'Tahun pengalaman — Terbesar & Pertama di Indonesia sejak 2007' },
  { prefix: '', value: 2100000, suffix: ' ha', label: 'Lahan bambu Indonesia — terluas di dunia' },
  { prefix: '', value: 70, suffix: '%', label: 'Kandungan silika organik ekstrak daun bambu' },
  {
    value: 38,
    suffix: ' Provinsi',
    prefix: '',
    label: 'Jangkauan pengiriman seluruh Indonesia',
  },
] as const;

/** Link WhatsApp resmi dengan pesan siap kirim */
export const waLink = (message?: string) =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    message ?? 'Halo Bambu Water Nusantara! Saya ingin bertanya tentang air bambu / bambu batang.'
  )}`;

/** FAQ — juga dipakai untuk JSON-LD FAQPage */
export const FAQS = [
  {
    q: 'Apa itu air bambu dan dari mana asalnya?',
    a: 'Air bambu (air tuak bambu) adalah sadapan alami yang terbentuk di dalam ruas bambu muda. Air ini dikumpulkan dengan teknik mata tunas, lalu dapat dikonsumsi langsung atau disuling untuk keamanan dan daya tahan simpan yang lebih baik.',
  },
  {
    q: 'Apa manfaat air bambu untuk kesehatan?',
    a: 'Berdasarkan kajian ilmiah (Journal of Medicinal Plant Research, 2015), ekstrak bambu memiliki efek proteksi antioksidan, anti-inflamasi, dan mendukung kesehatan kardiovaskular. Dalam pengobatan tradisional Nusantara, air bambu dimanfaatkan untuk meredakan demam, batuk dan dahak, melancarkan pencernaan, membantu menurunkan gula darah dan kolesterol, serta menjaga daya tahan tubuh. Air bambu adalah pendamping terapi alami — bukan pengganti obat dokter.',
  },
  {
    q: 'Apakah air bambu aman dikonsumsi setiap hari?',
    a: 'Ya. Air bambu suling kami melewati proses distilasi bertahap dan uji mutu mikrobiologi sehingga aman dikonsumsi harian. Untuk air sadapan mentah (Air Bambu Tabib), kami merekomendasikan konsumsi sesuai anjuran terapis atau tenaga kesehatan.',
  },
  {
    q: 'Apakah bisa memesan air bambu dan bambu batang dalam jumlah besar?',
    a: 'Bisa. Kami melayani pemesanan grosir dan kargo — air bambu suling dalam jerigen/drum maupun bambu batang berkualitas (Petung, Wulung, Apus, Ori) per ikat hingga per truk, dengan pengiriman ke seluruh provinsi Indonesia.',
  },
  {
    q: 'Jenis bambu apa saja yang tersedia?',
    a: 'Kami menyediakan Bambu Petung/Betung (Dendrocalamus asper) untuk konstruksi, Bambu Wulung (hitam) untuk estetika dan kerajinan premium, Bambu Apus untuk tali dan anyaman, serta Bambu Ori untuk rangka ringan. Semua terseleksi umur 3+ tahun, lurus, dan kering merata.',
  },
  {
    q: 'Bagaimana cara memesan dan berapa lama pengirimannya?',
    a: 'Anda dapat memesan melalui formulir di situs ini, WhatsApp, atau email sales. Pesanan reguler Jabodetabek & Jawa Barat 1–3 hari kerja; luar Jawa 3–7 hari kerja tergantung lokasi dan volume. Pengiriman besar menggunakan armada kargo terpercaya.',
  },
  {
    q: 'Apakah PT Bambu Water Nusantara badan hukum resmi?',
    a: 'Ya, kami badan hukum Perseroan Terbatas resmi dengan Akta Pendirian yang tercatat — didukung dewan pendiri, susunan komisaris dan direksi yang lengkap, divisi manager operasional, serta dewan pakar lintas bidang yang mengawasi mutu produksi.',
  },
  {
    q: 'Apa perbedaan Air Bambu Suling dan Air Bambu Tabib?',
    a: 'Air Bambu Suling adalah sadapan bambu yang dimurnikan melalui distilasi bertahap — aman untuk konsumsi harian dengan daya tahan lebih lama. Air Bambu Tabib adalah sadapan mentah segar langsung dari ruas bambu, dipanen dengan teknik tradisional untuk kebutuhan terapis, tabib, dan praktik pengobatan komplementer.',
  },
  {
    q: 'Apakah air bambu bisa menjadi pengganti obat dokter?',
    a: 'Tidak. Air bambu adalah minuman terapi alami pendamping pola hidup sehat, bukan obat. Untuk kondisi medis tertentu seperti diabetes, hipertensi, atau penyakit ginjal, tetap konsultasikan dengan dokter atau tenaga kesehatan Anda sebelum menjadikan air bambu bagian dari program kesehatan.',
  },
  {
    q: 'Apakah melayani pengiriman ke luar Pulau Jawa?',
    a: 'Melayani. Kami mengirim ke 38 provinsi di seluruh Indonesia — Sumatera, Kalimantan, Sulawesi, Bali & Nusa Tenggara, Maluku, hingga Papua — melalui jaringan kargo darat, laut, dan udara dengan packing aman untuk pengiriman jarak jauh.',
  },
] as const;

/** Tipe layanan pengiriman */
export const DELIVERY_TIERS = [
  {
    name: 'Reguler',
    area: 'Jabodetabek & Jawa Barat',
    eta: '1–3 hari kerja',
    icon: 'truck',
    description: 'Kurir terpercaya dengan packing food-grade aman untuk pesanan botol hingga jerigen.',
    features: ['Min. pemesanan bebas', 'Packing food-grade', 'Lacak pengiriman'],
  },
  {
    name: 'Kargo Antar Pulau',
    area: 'Seluruh Jawa, Sumatera, Kalimantan, Sulawesi, Bali & NT',
    eta: '3–7 hari kerja',
    icon: 'ship',
    description: 'Kargo darat & laut dengan volume besar untuk distributor, reseller, dan proyek.',
    features: ['Min. 1 jerigen / 10 batang', 'Segel kayu & strapping', 'Asuransi kargo opsional'],
  },
  {
    name: 'Ekspres Udara',
    area: 'Maluku, Papua & NTT',
    eta: '2–5 hari kerja',
    icon: 'plane',
    description: 'Pengiriman udara untuk wilayah timur Indonesia — segar sampai tujuan.',
    features: ['Prioritas penerbangan', 'Cold-pack opsional', 'Cocok untuk terapis & klinik'],
  },
] as const;

/** Rentang harga indikatif (negosiasi untuk volume besar) */
export const PRICING = {
  airBambu: [
    { product: 'Botol 600 ml', price: 'Rp 15.000', unit: 'per botol', note: 'Karton isi 24 botol' },
    { product: 'Botol 1,5 L', price: 'Rp 32.000', unit: 'per botol', note: 'Karton isi 12 botol' },
    { product: 'Galon 19 L', price: 'Rp 95.000', unit: 'per galon', note: 'Termasuk galon food-grade' },
    { product: 'Jerigen 10 L', price: 'Rp 60.000', unit: 'per jerigen', note: 'Grosir min. 10 pcs' },
    { product: 'Drum 30 L', price: 'Rp 165.000', unit: 'per drum', note: 'Grosir min. 5 drum' },
  ],
  airTabib: [
    { product: 'Jerigen 5 L', price: 'Rp 85.000', unit: 'per jerigen', note: 'Sadapan segar harian' },
    { product: 'Jerigen 10 L', price: 'Rp 160.000', unit: 'per jerigen', note: 'Sadapan segar harian' },
    { product: 'Drum 30 L', price: 'Rp 450.000', unit: 'per drum', note: 'Untuk klinik & komunitas tabib' },
  ],
  bambu: [
    { product: 'Bambu Petung (konstruksi)', price: 'Rp 85.000 – 150.000', unit: 'per batang', note: 'Panjang 8–12 m, Ø 10–18 cm' },
    { product: 'Bambu Wulung (hitam)', price: 'Rp 120.000 – 250.000', unit: 'per batang', note: 'Estetika premium, treatment kilau' },
    { product: 'Bambu Apus (tali & anyam)', price: 'Rp 45.000 – 90.000', unit: 'per batang', note: 'Serat kuat, lentur' },
    { product: 'Bambu Ori (rangka ringan)', price: 'Rp 55.000 – 110.000', unit: 'per batang', note: 'Ramping untuk furniture' },
  ],
} as const;

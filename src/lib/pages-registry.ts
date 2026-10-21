/**
 * REGISTRY 25 HALAMAN — bambuwater.web.id
 * Setiap halaman punya metadata SEO lengkap (title, description, keywords, OG).
 * Routing berbasis hash (#/slug) dalam satu route Next.js (/).
 */
export const SITE_URL = 'https://bambuwater.web.id';

export type PageMeta = {
  slug: string;
  /** Label di menu navigasi (jika halaman masuk menu) */
  navLabel?: string;
  /** Judul tag <title> penuh (tanpa template suffix) */
  seoTitle: string;
  /** Meta description ≤160 karakter */
  metaDescription: string;
  keywords: string[];
  /** Judul H1 di hero halaman */
  h1: string;
  /** Kicker/eyebrow kecil di atas H1 */
  eyebrow: string;
  /** Paragraf pengantar di hero halaman */
  intro: string;
  heroImage?: string;
  /** Prioritas sitemap 0–1 */
  priority: number;
  /** Tanggal pembaruan konten (tampil di halaman) */
  updated: string;
};

const UPDATED = 'Juni 2025';

export const PAGES_META = {
  /* ============ 1. BERANDA ============ */
  beranda: {
    slug: 'beranda',
    navLabel: 'Beranda',
    seoTitle:
      'Bambu Water Nusantara — Air Bambu Terapi Pengobatan Alami & Distribusi Bambu Se-Indonesia',
    metaDescription:
      'Produsen air bambu suling & air bambu tabib untuk pengobatan alami. Distribusi bambu berkualitas massal ke seluruh kota Indonesia. WA 0813-1651-6524.',
    keywords: [
      'air bambu',
      'air bambu pengobatan',
      'terapi air bambu',
      'air bambu suling',
      'distribusi bambu indonesia',
      'bambu water nusantara',
    ],
    h1: 'Sari Bambu Murni untuk Kesehatan Sejak Dalam',
    eyebrow: 'PT Bambu Water Nusantara — bambuwater.web.id',
    intro:
      'Air sadapan bambu pilihan untuk pengobatan & terapi kesehatan alami, serta bambu berkualitas dalam jumlah besar — dikirim ke seluruh Indonesia.',
    heroImage: '/images/hero-bamboo.jpg',
    priority: 1,
    updated: UPDATED,
  },

  /* ============ PERUSAHAAN ============ */
  'tentang-kami': {
    slug: 'tentang-kami',
    navLabel: 'Tentang Kami',
    seoTitle: 'Tentang Kami — PT Bambu Water Nusantara, Badan Hukum Resmi Terpercaya',
    metaDescription:
      'Kenali PT Bambu Water Nusantara: profil perusahaan, visi misi, legalitas akta pendirian, susunan pimpinan, dan komitmen kualitas kami.',
    keywords: [
      'tentang bambu water nusantara',
      'PT Bambu Water Nusantara',
      'profil perusahaan air bambu',
      'legalitas PT bambu water',
      'badan hukum air bambu',
    ],
    h1: 'Tentang PT Bambu Water Nusantara',
    eyebrow: 'Profil Perusahaan',
    intro:
      'Perusahaan badan hukum resmi yang menghadirkan air bambu terapi berkualitas dan bambu premium Nusantara — dari hutan rakyat terkurasi ke rumah Anda.',
    heroImage: '/images/about-plantation.jpg',
    priority: 0.8,
    updated: UPDATED,
  },

  /* ============ PILAR KESEHATAN ============ */
  'apa-itu-air-bambu': {
    slug: 'apa-itu-air-bambu',
    navLabel: 'Apa Itu Air Bambu',
    seoTitle: 'Apa Itu Air Bambu? Panduan Lengkap Air Sadapan Bambu & Manfaatnya',
    metaDescription:
      'Pahami apa itu air bambu (air tuak bambu): asal usul sadapan ruas bambu muda, cara pengambilan teknik mata tunas, jenis, hingga proses distilasi.',
    keywords: [
      'apa itu air bambu',
      'air tuak bambu',
      'air sadapan bambu',
      'asal usul air bambu',
      'cara mengambil air bambu',
      'teknik mata tunas bambu',
    ],
    h1: 'Apa Itu Air Bambu?',
    eyebrow: 'Panduan Lengkap',
    intro:
      'Mengenal air sadapan bambu — harta alam Nusantara yang kaya silika dan antioksidan, dari proses terbentuknya hingga sampai ke gelas Anda.',
    heroImage: '/images/hero-bamboo.jpg',
    priority: 0.9,
    updated: UPDATED,
  },

  'manfaat-air-bambu': {
    slug: 'manfaat-air-bambu',
    navLabel: 'Manfaat Air Bambu',
    seoTitle: '8 Manfaat Air Bambu untuk Kesehatan & Pengobatan Alami Terbukti',
    metaDescription:
      '8 manfaat air bambu untuk kesehatan: turunkan demam, legakan batuk, jaga jantung, gula darah, pencernaan, imun, kulit, hingga nyeri haid.',
    keywords: [
      'manfaat air bambu',
      'khasiat air bambu',
      'air bambu untuk kesehatan',
      'air bambu pengobatan',
      'manfaat air tuak bambu',
      'air bambu untuk demam',
    ],
    h1: '8 Manfaat Air Bambu untuk Kesehatan',
    eyebrow: 'Manfaat & Khasiat',
    intro:
      'Dari tradisi tabib Nusantara hingga kajian ilmiah modern — manfaat lengkap air bambu untuk tubuh, dari dalam hingga luar.',
    heroImage: '/images/wellness.jpg',
    priority: 0.9,
    updated: UPDATED,
  },

  'kandungan-nutrisi': {
    slug: 'kandungan-nutrisi',
    navLabel: 'Kandungan Nutrisi',
    seoTitle: 'Kandungan Nutrisi Air Bambu — Silika Organik Tertinggi & Antioksidan',
    metaDescription:
      'Analisis kandungan air bambu: silika organik hingga 70%, flavonoid, polifenol, klorofil, asam amino, dan mineral K-Ca-Mg untuk tubuh.',
    keywords: [
      'kandungan air bambu',
      'silika organik',
      'silika bambu',
      'flavonoid bambu',
      'antioksidan air bambu',
      'mineral air bambu',
      'klorofil bambu',
    ],
    h1: 'Kandungan Nutrisi & Sains Air Bambu',
    eyebrow: 'Analisis Ilmiah',
    intro:
      'Mengapa air bambu disebut "mineral air paling lengkap dari alam"? Bedah kandungan berdasarkan riset ilmiah terkini.',
    heroImage: '/images/process-distillation.jpg',
    priority: 0.9,
    updated: UPDATED,
  },

  'air-bambu-pengobatan': {
    slug: 'air-bambu-pengobatan',
    navLabel: 'Untuk Pengobatan',
    seoTitle: 'Air Bambu untuk Pengobatan Tradisional & Terapi Komplementer',
    metaDescription:
      'Peran air bambu dalam pengobatan tradisional Nusantara: demam, batuk, diabetes, kolesterol, hingga nyeri haid — panduan aman & tepat.',
    keywords: [
      'air bambu pengobatan',
      'terapi air bambu',
      'pengobatan tradisional air bambu',
      'air bambu tabib',
      'obat tradisional air bambu',
      'air bambu untuk terapi',
    ],
    h1: 'Air Bambu untuk Pengobatan Tradisional',
    eyebrow: 'Terapi Komplementer',
    intro:
      'Warisan pengobatan leluhur yang kini didukung riset — cara tepat memanfaatkan air bambu sebagai pendamping terapi kesehatan.',
    heroImage: '/images/process-harvest.jpg',
    priority: 0.9,
    updated: UPDATED,
  },

  /* ============ ARTIKEL KESEHATAN ============ */
  'air-bambu-gula-darah': {
    slug: 'air-bambu-gula-darah',
    seoTitle: 'Air Bambu untuk Gula Darah & Diabetes — Fakta, Riset, dan Cara Aman',
    metaDescription:
      'Apakah air bambu membantu menstabilkan gula darah penderita diabetes? Simak fakta ilmiah, tradisi, cara konsumsi aman, dan batasannya.',
    keywords: [
      'air bambu diabetes',
      'air bambu gula darah',
      'minuman untuk diabetes',
      'air bambu untuk penderita diabetes',
      'minuman rendah gula alami',
    ],
    h1: 'Air Bambu untuk Gula Darah & Diabetes',
    eyebrow: 'Artikel Kesehatan',
    intro:
      'Jutaan orang Indonesia hidup dengan diabetes. Bisakah air bambu menjadi pendamping minuman yang membantu? Ini jawaban berdasarkan riset.',
    heroImage: '/images/wellness.jpg',
    priority: 0.8,
    updated: UPDATED,
  },

  'air-bambu-batu-ginjal': {
    slug: 'air-bambu-batu-ginjal',
    seoTitle: 'Air Bambu untuk Batu Ginjal & Kesehatan Ginjal — Manfaat & Tips Aman',
    metaDescription:
      'Air bambu sebagai minuman pendukung kesehatan ginjal: hidrasi optimal, mineral alami, dan tradisi melancarkan buang air kecil secara aman.',
    keywords: [
      'air bambu batu ginjal',
      'air bambu untuk ginjal',
      'minuman melancarkan ginjal',
      'air bambu kencing batu',
      'minuman kesehatan ginjal',
    ],
    h1: 'Air Bambu untuk Batu Ginjal & Kesehatan Ginjal',
    eyebrow: 'Artikel Kesehatan',
    intro:
      'Ginjal adalah filter tubuh. Beginilah cara air bambu membantu menjaga ginjal tetap bersih dan bekerja optimal.',
    heroImage: '/images/product-bulk.jpg',
    priority: 0.8,
    updated: UPDATED,
  },

  'air-bambu-kolesterol': {
    slug: 'air-bambu-kolesterol',
    seoTitle: 'Air Bambu untuk Kolesterol & Kesehatan Jantung — Panduan Lengkap',
    metaDescription:
      'Flavonoid & polifenol air bambu membantu melawan kolesterol jahat dan melindungi jantung. Simak mekanisme, riset, dan cara konsumsinya.',
    keywords: [
      'air bambu kolesterol',
      'air bambu jantung',
      'minuman penurun kolesterol',
      'antioksidan untuk jantung',
      'air bambu hipertensi',
    ],
    h1: 'Air Bambu untuk Kolesterol & Kesehatan Jantung',
    eyebrow: 'Artikel Kesehatan',
    intro:
      'Penyakit kardiovaskular adalah pembunuh nomor satu. Bagaimana antioksidan air bambu membantu melindungi jantung dan pembuluh darah?',
    heroImage: '/images/wellness.jpg',
    priority: 0.8,
    updated: UPDATED,
  },

  'air-bambu-detoksifikasi': {
    slug: 'air-bambu-detoksifikasi',
    seoTitle: 'Detoksifikasi Alami dengan Air Bambu — Program 7 Hari Penuh Energi',
    metaDescription:
      'Program detoksifikasi alami 7 hari dengan air bambu: melancarkan pencernaan, membuang toksin, dan memulihkan energi tubuh secara lembut.',
    keywords: [
      'detoksifikasi air bambu',
      'detoks alami',
      'air bambu melancarkan pencernaan',
      'minuman detoks',
      'program detoks air bambu',
    ],
    h1: 'Detoksifikasi Alami dengan Air Bambu',
    eyebrow: 'Artikel Kesehatan',
    intro:
      'Tubuh menumpuk toksin setiap hari dari makanan, polusi, dan stres. Air bambu menawarkan cara detoks yang lembut dan menyegarkan.',
    heroImage: '/images/process-distillation.jpg',
    priority: 0.8,
    updated: UPDATED,
  },

  'air-bambu-tulang-silika': {
    slug: 'air-bambu-tulang-silika',
    seoTitle: 'Silika Air Bambu untuk Tulang & Sendi — Preventif Osteoporosis Alami',
    metaDescription:
      'Silika organik air bambu — tertinggi di alam — berperan penting dalam pembentukan tulang, menjaga sendi, dan mencegah osteoporosis.',
    keywords: [
      'silika untuk tulang',
      'air bambu osteoporosis',
      'mineral tulang alami',
      'air bambu sendi',
      'silika organik bambu',
    ],
    h1: 'Silika Air Bambu untuk Tulang & Sendi',
    eyebrow: 'Artikel Kesehatan',
    intro:
      'Kalsium bukan satu-satunya kunci tulang kuat. Kenali peran silika organik — dan mengapa bambu adalah sumbernya yang terbaik.',
    heroImage: '/images/about-plantation.jpg',
    priority: 0.8,
    updated: UPDATED,
  },

  'air-bambu-kecantikan': {
    slug: 'air-bambu-kecantikan',
    seoTitle: 'Air Bambu untuk Kecantikan — Kulit Kenyal, Rambut & Kuku Kuat',
    metaDescription:
      'Rahasia kulit kenyal dari alam: silika air bambu mendukung produksi kolagen untuk kulit, rambut, dan kuku. Beauty from within alami.',
    keywords: [
      'air bambu untuk kulit',
      'air bambu kecantikan',
      'minuman kolagen alami',
      'silika untuk kulit',
      'beauty drink alami',
      'air bambu rambut',
    ],
    h1: 'Air Bambu untuk Kecantikan Kulit, Rambut & Kuku',
    eyebrow: 'Artikel Kesehatan',
    intro:
      'Kecantikan sejati dimulai dari dalam. Bagaimana silika dan antioksidan air bambu bekerja sebagai "kolagen alami" dari alam?',
    heroImage: '/images/wellness.jpg',
    priority: 0.8,
    updated: UPDATED,
  },

  'sejarah-air-bambu': {
    slug: 'sejarah-air-bambu',
    seoTitle: 'Sejarah Air Bambu — Warisan Pengobatan Tradisional Nusantara',
    metaDescription:
      'Menelusuri sejarah air bambu: dari tradisi tabib Sunda & Jawa, tamoe barang bamboo Tiongkok, hingga tren minuman kesehatan dunia saat ini.',
    keywords: [
      'sejarah air bambu',
      'air bambu tradisional',
      'tabib bambu',
      'air bambu sunda',
      'minuman tradisional nusantara',
      'bamboo water history',
    ],
    h1: 'Sejarah & Tradisi Air Bambu Nusantara',
    eyebrow: 'Artikel Budaya',
    intro:
      'Berabad-abad sebelum jadi tren dunia, air bambu sudah menjadi rahasia penyembuhan leluhur Nusantara. Inilah perjalanannya.',
    heroImage: '/images/process-harvest.jpg',
    priority: 0.8,
    updated: UPDATED,
  },

  /* ============ PRODUK ============ */
  'air-bambu-suling': {
    slug: 'air-bambu-suling',
    navLabel: 'Air Bambu Suling',
    seoTitle: 'Air Bambu Suling Premium — Minuman Terapi Harian 600ml–19L',
    metaDescription:
      'Air bambu suling premium: sadapan bambu muda dimurnikan dengan distilasi bertahap. Botol 600ml, 1,5L, galon 19L hingga drum 30L grosir.',
    keywords: [
      'air bambu suling',
      'air bambu premium',
      'jual air bambu suling',
      'air bambu botol',
      'galon air bambu',
      'air bambu grosir',
      'harga air bambu suling',
    ],
    h1: 'Air Bambu Suling Premium',
    eyebrow: 'Produk Unggulan',
    intro:
      'Sari sadapan bambu muda yang dimurnikan dengan distilasi bertahap — mineral & silika alaminya terjaga, keamanannya terjamin.',
    heroImage: '/images/product-water-bottle.jpg',
    priority: 0.9,
    updated: UPDATED,
  },

  'air-bambu-tabib': {
    slug: 'air-bambu-tabib',
    navLabel: 'Air Bambu Tabib',
    seoTitle: 'Air Bambu Tabib — Sadapan Mentah Segar untuk Terapi & Pengobatan',
    metaDescription:
      'Air Bambu Tabib: sadapan mentah segar langsung dari ruas bambu muda, dipanen teknik mata tunas untuk terapis, tabib & praktik pengobatan.',
    keywords: [
      'air bambu tabib',
      'air sadapan bambu mentah',
      'air bambu segar',
      'air bambu terapi',
      'air bambu pengobatan komplementer',
      'air bambu untuk tabib',
    ],
    h1: 'Air Bambu Tabib — Sadapan Mentah untuk Terapi',
    eyebrow: 'Produk Terapi',
    intro:
      'Air sadapan murni sebagaimana dikenal tradisi tabib Nusantara — dipanen segar per pesanan dengan teknik mata tunas.',
    heroImage: '/images/process-harvest.jpg',
    priority: 0.9,
    updated: UPDATED,
  },

  'bambu-berkualitas': {
    slug: 'bambu-berkualitas',
    navLabel: 'Bambu Berkualitas',
    seoTitle: 'Bambu Berkualitas Massal — Petung, Wulung, Apus, Ori Se-Indonesia',
    metaDescription:
      'Bambu berkualitas pilihan umur 3+ tahun: Petung konstruksi, Wulung premium, Apus anyaman, Ori rangka. Per batang hingga per truk ke seluruh Indonesia.',
    keywords: [
      'bambu berkualitas',
      'jual bambu petung',
      'bambu wulung',
      'bambu apus',
      'bambu ori',
      'suplier bambu konstruksi',
      'harga bambu per batang',
      'distribusi bambu massal',
    ],
    h1: 'Bambu Berkualitas dalam Jumlah Besar',
    eyebrow: 'Produk Massal',
    intro:
      'Petung, Wulung, Apus, dan Ori — terseleksi dari hutan rakyat terkurasi, siap kirim per batang hingga per truk ke seluruh Indonesia.',
    heroImage: '/images/product-bamboo-poles.jpg',
    priority: 0.9,
    updated: UPDATED,
  },

  /* ============ LAYANAN ============ */
  'proses-produksi': {
    slug: 'proses-produksi',
    navLabel: 'Proses Produksi',
    seoTitle: 'Proses Produksi & Distilasi Air Bambu — Standar Higienis BWN',
    metaDescription:
      '4 tahap produksi air bambu BWN: panen berkelanjutan, sadapan mata tunas, distilasi & uji mutu mikrobiologi, hingga pengemasan food-grade.',
    keywords: [
      'proses produksi air bambu',
      'distilasi air bambu',
      'cara membuat air bambu',
      'panen air bambu',
      'uji mutu air bambu',
    ],
    h1: 'Proses Produksi & Distilasi',
    eyebrow: 'Standar Mutu',
    intro:
      'Dari rumpun bambu lestari hingga kemasan food-grade — transparansi penuh bagaimana kami menghasilkan air bambu berkualitas.',
    heroImage: '/images/process-distillation.jpg',
    priority: 0.8,
    updated: UPDATED,
  },

  'pengiriman-massal': {
    slug: 'pengiriman-massal',
    navLabel: 'Pengiriman Massal',
    seoTitle: 'Pengiriman Massal Air Bambu & Bambu Batang ke Seluruh Indonesia',
    metaDescription:
      'Layanan pengiriman jumlah besar: jerigen, drum, hingga kargo truk bambu batang. Reguler 1-3 hari, kargo antar pulau, ekspres udara.',
    keywords: [
      'pengiriman massal air bambu',
      'kargo bambu',
      'pengiriman bambu seluruh indonesia',
      'kirim air bambu grosir',
      'ekspedisi bambu batang',
      'kargo antar pulau',
    ],
    h1: 'Pengiriman Massal ke Seluruh Indonesia',
    eyebrow: 'Layanan Distribusi',
    intro:
      'Volume besar bukan masalah — jerigen, drum, ikat bambu hingga kargo truk penuh, kami antar ke 38 provinsi dengan packing aman.',
    heroImage: '/images/product-bulk.jpg',
    priority: 0.9,
    updated: UPDATED,
  },

  'jangkauan-kota': {
    slug: 'jangkauan-kota',
    navLabel: 'Jangkauan Kota',
    seoTitle: 'Jangkauan Kota Pengiriman — 38 Provinsi Se-Indonesia | BWN',
    metaDescription:
      'Kami mengirim air bambu & bambu batang ke kota-kota seluruh Indonesia: Jakarta, Bandung, Surabaya, Medan, Makassar hingga Jayapura.',
    keywords: [
      'jangkauan pengiriman indonesia',
      'kirim air bambu jakarta',
      'distributor air bambu kota',
      'pengiriman bambu seluruh indonesia',
      'kargo bambu antar pulau',
    ],
    h1: 'Jangkauan Kota Se-Indonesia',
    eyebrow: 'Cakupan Wilayah',
    intro:
      '38 provinsi, puluhan kota, satu jaringan distribusi terpercaya. Temukan kota Anda dan mulai pesan hari ini.',
    heroImage: '/images/product-bulk.jpg',
    priority: 0.8,
    updated: UPDATED,
  },

  'harga-paket': {
    slug: 'harga-paket',
    navLabel: 'Harga & Paket',
    seoTitle: 'Harga & Paket Air Bambu dan Bambu Batang — Retail hingga Grosir',
    metaDescription:
      'Daftar harga air bambu suling, air bambu tabib, dan bambu batang (Petung, Wulung, Apus, Ori) — retail, grosir, dan kargo korporat.',
    keywords: [
      'harga air bambu',
      'harga bambu per batang',
      'harga galon air bambu',
      'harga grosir air bambu',
      'paket air bambu',
      'harga bambu petung wulung',
    ],
    h1: 'Harga & Paket',
    eyebrow: 'Transparan & Terjangkau',
    intro:
      'Harga jelas tanpa biaya tersembunyi — dari botol satuan untuk keluarga hingga kargo truk untuk distributor dan proyek.',
    heroImage: '/images/product-water-bottle.jpg',
    priority: 0.9,
    updated: UPDATED,
  },

  'cara-pemesanan': {
    slug: 'cara-pemesanan',
    navLabel: 'Cara Pemesanan',
    seoTitle: 'Cara Pemesanan Air Bambu & Bambu Batang — 4 Langkah Mudah',
    metaDescription:
      'Cara pesan air bambu & bambu batang BWN: pilih produk, konfirmasi via WhatsApp 0813-1651-6524, pembayaran aman, pengiriman se-Indonesia.',
    keywords: [
      'cara pesan air bambu',
      'cara membeli air bambu',
      'pesan air bambu whatsapp',
      'pemesanan bambu batang',
      'order air bambu',
    ],
    h1: 'Cara Pemesanan Mudah & Cepat',
    eyebrow: 'Panduan Order',
    intro:
      'Empat langkah sederhana dari memilih produk hingga air bambu tiba di depan pintu Anda — di mana pun di Indonesia.',
    heroImage: '/images/product-water-bottle.jpg',
    priority: 0.8,
    updated: UPDATED,
  },

  /* ============ KONTEN & SOSIAL ============ */
  artikel: {
    slug: 'artikel',
    navLabel: 'Semua Artikel',
    seoTitle: 'Artikel & Pengetahuan Air Bambu — Pusat Informasi Kesehatan BWN',
    metaDescription:
      'Kumpulan artikel kesehatan air bambu: diabetes, batu ginjal, kolesterol, detoks, tulang, kecantikan, hingga sejarah tradisi Nusantara.',
    keywords: [
      'artikel air bambu',
      'blog air bambu',
      'informasi kesehatan air bambu',
      'pengetahuan air bambu',
      'artikel minuman sehat',
    ],
    h1: 'Pusat Pengetahuan Air Bambu',
    eyebrow: 'Blog & Artikel',
    intro:
      'Semua yang perlu Anda tahu tentang air bambu — dikurasi dari riset ilmiah dan kearifan tradisional Nusantara.',
    heroImage: '/images/hero-bamboo.jpg',
    priority: 0.8,
    updated: UPDATED,
  },

  testimoni: {
    slug: 'testimoni',
    navLabel: 'Testimoni',
    seoTitle: 'Testimoni Pelanggan — Cerita Nyata Manfaat Air Bambu BWN',
    metaDescription:
      'Cerita nyata pelanggan Bambu Water Nusantara: keluarga sehat, terapis yang mempercayai, dan mitra distributor di seluruh Indonesia.',
    keywords: [
      'testimoni air bambu',
      'review air bambu',
      'pengalaman minum air bambu',
      'testimoni bambu water nusantara',
    ],
    h1: 'Testimoni Pelanggan Kami',
    eyebrow: 'Cerita Nyata',
    intro:
      'Dari dapur keluarga hingga klinik terapis — inilah cerita mereka yang telah merasakan manfaat air bambu BWN.',
    heroImage: '/images/wellness.jpg',
    priority: 0.7,
    updated: UPDATED,
  },

  faq: {
    slug: 'faq',
    navLabel: 'FAQ',
    seoTitle: 'FAQ — Pertanyaan Umum Seputar Air Bambu & Layanan BWN',
    metaDescription:
      'Jawaban lengkap pertanyaan umum: apa itu air bambu, keamanan harian, perbedaan produk, cara pesan grosir, pengiriman, dan legalitas perusahaan.',
    keywords: [
      'faq air bambu',
      'pertanyaan air bambu',
      'tanya jawab air bambu',
      'apakah air bambu aman',
      'cara pesan air bambu grosir',
    ],
    h1: 'Pertanyaan yang Sering Diajukan',
    eyebrow: 'Bantuan & Info',
    intro:
      'Semua pertanyaan tentang air bambu, produk, pemesanan, dan pengiriman — dijawab lengkap dalam satu halaman.',
    heroImage: '/images/hero-bamboo.jpg',
    priority: 0.7,
    updated: UPDATED,
  },

  kontak: {
    slug: 'kontak',
    navLabel: 'Kontak',
    seoTitle: 'Kontak & Pemesanan — WhatsApp 0813-1651-6524 | Bambu Water Nusantara',
    metaDescription:
      'Hubungi PT Bambu Water Nusantara: WhatsApp 0813-1651-6524, email, formulir pemesanan. Konsultasi gratis untuk kebutuhan terapi & grosir.',
    keywords: [
      'kontak bambu water nusantara',
      'wa air bambu',
      'whatsapp air bambu',
      'pesan air bambu',
      'konsultasi air bambu',
      'nomor wa bambu water',
    ],
    h1: 'Hubungi Kami — Konsultasi Gratis',
    eyebrow: 'Kontak & Pemesanan',
    intro:
      'Tim kami siap membantu kebutuhan terapi keluarga hingga kontrak distribusi massal. Balasan cepat di jam kerja.',
    heroImage: '/images/hero-bamboo.jpg',
    priority: 0.9,
    updated: UPDATED,
  },

  /* ============ ALAT & UTILITAS (EKSPANSI GOD-MODE) ============ */
  'kalkulator-kesehatan': {
    slug: 'kalkulator-kesehatan',
    navLabel: 'Kalkulator Kesehatan',
    seoTitle: 'Kalkulator Kebutuhan Air Harian & Dosis Terapi Air Bambu — Gratis',
    metaDescription:
      'Kalkulator kebutuhan cairan harian, BMI, dan dosis terapi air bambu yang dipersonalisasi — berdasarkan berat badan, usia, dan tingkat aktivitas Anda.',
    keywords: [
      'kalkulator kebutuhan air harian',
      'kalkulator minum air',
      'berapa liter air harus minum',
      'kalkulator bmi',
      'dosis air bambu harian',
      'kalkulator kesehatan air bambu',
      'hitung kebutuhan cairan tubuh',
    ],
    h1: 'Kalkulator Kesehatan Interaktif',
    eyebrow: 'Alat Interaktif Gratis',
    intro:
      'Geser slider, hasil instan: kebutuhan cairan harian, BMI, dan dosis terapi air bambu yang disesuaikan dengan tubuh Anda.',
    heroImage: '/images/wellness.jpg',
    priority: 0.8,
    updated: UPDATED,
  },

  'peta-situs': {
    slug: 'peta-situs',
    navLabel: 'Peta Situs',
    seoTitle: 'Peta Situs — Indeks Seluruh Halaman bambuwater.web.id',
    metaDescription:
      'Direktori lengkap semua halaman: terapi kesehatan, 2.500+ kota pengiriman, layanan, jenis bambu, artikel, dan alat interaktif. Temukan dalam sekejap.',
    keywords: [
      'peta situs bambu water',
      'sitemap bambuwater',
      'daftar halaman air bambu',
      'indeks situs air bambu',
      'daftar kota pengiriman air bambu',
    ],
    h1: 'Peta Situs Lengkap',
    eyebrow: 'Direktori Navigasi',
    intro:
      'Semua halaman dalam satu peta — dari terapi 60+ kondisi kesehatan hingga 2.500+ kota. Gunakan pencarian untuk menemukan sekejap.',
    heroImage: '/images/product-bulk.jpg',
    priority: 0.6,
    updated: UPDATED,
  },

  glossarium: {
    slug: 'glossarium',
    navLabel: 'Glossarium',
    seoTitle: 'Glossarium Air Bambu — Kamus 40+ Istilah Sains, Tradisi & Bisnis',
    metaDescription:
      'Kamus istilah air bambu terlengkap: silika organik, teknik mata tunas, MOQ, kargo LCL/FCL, hingga istilah tabib tradisional — dijelaskan sederhana.',
    keywords: [
      'istilah air bambu',
      'apa itu silika organik',
      'teknik mata tunas bambu',
      'kamus minuman kesehatan',
      'istilah tabib tradisional',
      'glossarium air bambu',
    ],
    h1: 'Glossarium Air Bambu Nusantara',
    eyebrow: 'Kamus Istilah',
    intro:
      'Semua istilah teknis, ilmiah, dan tradisional di situs ini — dijelaskan bahasa sederhana. Cari atau filter per kategori.',
    heroImage: '/images/process-distillation.jpg',
    priority: 0.6,
    updated: UPDATED,
  },

  perbandingan: {
    slug: 'perbandingan',
    navLabel: 'Perbandingan',
    seoTitle: 'Air Bambu vs Air Mineral, Teh Hijau & Air Kelapa — Perbandingan Jujur',
    metaDescription:
      'Matriks 7 kriteria: silika organik, antioksidan, mineral alami, kalori, terapi tradisional, rasa, dan keberlanjutan. Pilih minuman sehat terbaik Anda.',
    keywords: [
      'perbandingan air bambu dan air mineral',
      'air bambu vs teh hijau',
      'air bambu vs air kelapa',
      'minuman sehat terbaik',
      'minuman antioksidan perbandingan',
      'minuman silika organik',
    ],
    h1: 'Perbandingan Minuman Sehat',
    eyebrow: 'Matriks 7 Kriteria',
    intro:
      'Data objektif, analisis jujur: air bambu vs air mineral, teh hijau, air kelapa, dan infused water — temukan yang tepat untuk tujuan Anda.',
    heroImage: '/images/product-water-bottle.jpg',
    priority: 0.7,
    updated: UPDATED,
  },

  'lacak-pesanan': {
    slug: 'lacak-pesanan',
    navLabel: 'Lacak Pesanan',
    seoTitle: 'Lacak Pesanan — Pantau Kiriman Air Bambu Anda 6 Tahapan',
    metaDescription:
      'Pantau status pesanan air bambu & bambu batang BWN: dari konfirmasi, packing, ekspedisi, hingga tiba di tujuan. Resi resmi via WhatsApp admin.',
    keywords: [
      'lacak pesanan air bambu',
      'cek resi bambu water',
      'status pengiriman air bambu',
      'lacak kargo bambu',
      'pantau pesanan bwn',
    ],
    h1: 'Lacak Pesanan Anda',
    eyebrow: 'Pantau Kiriman',
    intro:
      'Enam tahapan transparan dari pesanan diterima hingga tiba di rumah. Masukkan nomor pesanan BWN untuk melihat alurnya.',
    heroImage: '/images/product-bulk.jpg',
    priority: 0.6,
    updated: UPDATED,
  },

  karier: {
    slug: 'karier',
    navLabel: 'Karier',
    seoTitle: 'Karier — Lowongan Kerja & Kemitraan di Bambu Water Nusantara',
    metaDescription:
      'Bergabung dengan tim BWN: staf produksi & uji mutu, admin penjualan, digital marketing, dan kemitraan petani sadapan. Lamar via WhatsApp.',
    keywords: [
      'lowongan kerja tasikmalaya',
      'loker bambu water',
      'lowongan produksi minuman',
      'kemitraan petani bambu',
      'lowongan admin penjualan wa',
      'karier bambu water nusantara',
    ],
    h1: 'Karier di Bambu Water Nusantara',
    eyebrow: 'Bergabung dengan Kami',
    intro:
      'Tumbuh bersama misi bambu Nusantara — posisi produksi, admin, digital, dan kemitraan petani yang berdampak ke ekonomi desa.',
    heroImage: '/images/about-plantation.jpg',
    priority: 0.5,
    updated: UPDATED,
  },

  'kebijakan-privasi': {
    slug: 'kebijakan-privasi',
    navLabel: 'Kebijakan Privasi',
    seoTitle: 'Kebijakan Privasi — Perlindungan Data Pelanggan BWN',
    metaDescription:
      'Bagaimana PT Bambu Water Nusantara mengumpulkan, menggunakan, dan melindungi data pribadi Anda — ringkas, jelas, tanpa jargon legal.',
    keywords: [
      'kebijakan privasi bambu water',
      'perlindungan data pelanggan',
      'privasi bambuwater.web.id',
      'keamanan data pemesanan',
    ],
    h1: 'Kebijakan Privasi',
    eyebrow: 'Transparansi Data',
    intro:
      'Kami hanya mengumpulkan data yang Anda berikan untuk pemesanan, tidak pernah menjualnya, dan Anda dapat meminta hapus kapan saja.',
    priority: 0.3,
    updated: UPDATED,
  },

  'syarat-ketentuan': {
    slug: 'syarat-ketentuan',
    navLabel: 'Syarat & Ketentuan',
    seoTitle: 'Syarat & Ketentuan Layanan — PT Bambu Water Nusantara',
    metaDescription:
      'Ketentuan penggunaan situs, pemesanan produk, pengiriman, retur, kemitraan distribusi, dan hak kekayaan intelektual BWN.',
    keywords: [
      'syarat ketentuan bambu water',
      'ketentuan pemesanan air bambu',
      's&k bambuwater',
      'aturan retur air bambu',
    ],
    h1: 'Syarat & Ketentuan',
    eyebrow: 'Perjanjian Layanan',
    intro:
      'Aturan main yang melindungi Anda dan kami — dari produk, pemesanan, pengiriman, hingga hak konten situs.',
    priority: 0.3,
    updated: UPDATED,
  },
} as const satisfies Record<string, PageMeta>;

export type PageSlug = keyof typeof PAGES_META;

export const PAGE_SLUGS = Object.keys(PAGES_META) as PageSlug[];

export function getPageMeta(slug: string): PageMeta {
  return PAGES_META[slug as PageSlug] ?? PAGES_META.beranda;
}

/* ============ STRUKTUR MENU (MEGA MENU) ============ */

export type NavChild = {
  label: string;
  /** Slug bebas — termasuk slug programatik (kota/x, layanan/x, dst.) */
  slug: string;
  desc: string;
};

export type NavGroup = {
  label: string;
  slug?: string;
  children?: NavChild[];
};

export const NAV_GROUPS: NavGroup[] = [
  { label: 'Beranda', slug: 'beranda' },
  {
    label: 'Kesehatan',
    children: [
      { label: 'Pusat Kesehatan', slug: 'kesehatan', desc: '60+ kondisi — indeks terapi lengkap' },
      { label: 'Apa Itu Air Bambu', slug: 'apa-itu-air-bambu', desc: 'Pengertian, asal usul & jenis air bambu' },
      { label: 'Manfaat Air Bambu', slug: 'manfaat-air-bambu', desc: '8 manfaat utama untuk tubuh' },
      { label: 'Kandungan Nutrisi', slug: 'kandungan-nutrisi', desc: 'Silika, flavonoid & mineral alami' },
      { label: 'Untuk Pengobatan', slug: 'air-bambu-pengobatan', desc: 'Terapi tradisional & komplementer' },
      { label: 'Asam Urat & Maag', slug: 'air-bambu-untuk/asam-urat', desc: 'Terapi pendamping kondisi metabolik' },
      { label: 'Ginjal & Batu Ginjal', slug: 'air-bambu-untuk/kencing-batu', desc: 'Hidrasi mineral untuk ginjal' },
      { label: 'Kulit & Kecantikan', slug: 'air-bambu-untuk/jerawat', desc: 'Beauty from within dengan silika' },
      { label: 'Sejarah Air Bambu', slug: 'sejarah-air-bambu', desc: 'Warisan tabib Nusantara' },
    ],
  },
  {
    label: 'Artikel',
    children: [
      { label: 'Semua Artikel', slug: 'artikel', desc: 'Pusat pengetahuan air bambu' },
      { label: 'Air Bambu & Gula Darah', slug: 'air-bambu-gula-darah', desc: 'Pendamping penderita diabetes' },
      { label: 'Air Bambu & Batu Ginjal', slug: 'air-bambu-batu-ginjal', desc: 'Menjaga ginjal tetap bersih' },
      { label: 'Air Bambu & Kolesterol', slug: 'air-bambu-kolesterol', desc: 'Melindungi jantung & pembuluh darah' },
      { label: 'Detoksifikasi Alami', slug: 'air-bambu-detoksifikasi', desc: 'Program detoks 7 hari' },
      { label: 'Tulang & Sendi', slug: 'air-bambu-tulang-silika', desc: 'Silika untuk kepadatan tulang' },
      { label: 'Kecantikan & Kulit', slug: 'air-bambu-kecantikan', desc: 'Kolagen alami dari dalam' },
    ],
  },
  {
    label: 'Produk',
    children: [
      { label: 'Air Bambu Suling', slug: 'air-bambu-suling', desc: 'Minuman terapi harian premium' },
      { label: 'Air Bambu Tabib', slug: 'air-bambu-tabib', desc: 'Sadapan mentah segar untuk terapi' },
      { label: 'Bambu Berkualitas', slug: 'bambu-berkualitas', desc: 'Petung, Wulung, Apus, Ori massal' },
      { label: 'Harga & Paket', slug: 'harga-paket', desc: 'Retail, grosir & korporat' },
      { label: 'Jenis Bambu', slug: 'bambu', desc: '8 varietas — harga & spesifikasi' },
    ],
  },
  {
    label: 'Layanan',
    children: [
      { label: 'Katalog Layanan', slug: 'layanan', desc: 'Semua layanan & skema kerja sama' },
      { label: 'Langganan & Pasokan', slug: 'layanan/langganan-klinik', desc: 'Rumah tangga, klinik, hotel, kantor' },
      { label: 'Kargo & Logistik', slug: 'layanan/kargo-darat', desc: 'Darat, laut, udara & truk penuh' },
      { label: 'Kemitraan Bisnis', slug: 'layanan/distributor-kota', desc: 'Distributor, agen & reseller' },
      { label: 'Proses Produksi', slug: 'proses-produksi', desc: 'Panen, sadapan, distilasi & uji mutu' },
      { label: 'Pengiriman Massal', slug: 'pengiriman-massal', desc: 'Kargo ke 38 provinsi' },
      { label: 'Jangkauan Kota', slug: 'kota', desc: '2.500+ kota & kabupaten' },
      { label: 'Cara Pemesanan', slug: 'cara-pemesanan', desc: '4 langkah mudah memesan' },
    ],
  },
  {
    label: 'Tentang',
    children: [
      { label: 'Tentang Kami', slug: 'tentang-kami', desc: 'Profil, visi misi & legalitas' },
      { label: 'Testimoni', slug: 'testimoni', desc: 'Cerita nyata pelanggan' },
      { label: 'FAQ', slug: 'faq', desc: 'Pertanyaan yang sering diajukan' },
      { label: 'Karier', slug: 'karier', desc: 'Lowongan & kemitraan petani' },
    ],
  },
  {
    label: 'Alat',
    children: [
      { label: 'Kalkulator Kesehatan', slug: 'kalkulator-kesehatan', desc: 'Hitung kebutuhan air & dosis terapi' },
      { label: 'Perbandingan Minuman', slug: 'perbandingan', desc: 'Air bambu vs minuman sehat lain' },
      { label: 'Lacak Pesanan', slug: 'lacak-pesanan', desc: 'Pantau 6 tahapan kiriman' },
      { label: 'Glossarium', slug: 'glossarium', desc: 'Kamus 40+ istilah air bambu' },
      { label: 'Peta Situs', slug: 'peta-situs', desc: 'Indeks seluruh halaman' },
      { label: 'Kebijakan Privasi', slug: 'kebijakan-privasi', desc: 'Perlindungan data Anda' },
      { label: 'Syarat & Ketentuan', slug: 'syarat-ketentuan', desc: 'Aturan layanan & transaksi' },
    ],
  },
];

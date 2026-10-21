/**
 * DATA LAYANAN — 48 layanan bisnis PT Bambu Water Nusantara
 * Halaman programatik: #/layanan/{slug}.
 * Kategori: Langganan & Kontrak · Kargo & Logistik · Kemitraan Bisnis · Bambu & Proyek.
 */

export type ServiceCategory =
  | 'Langganan & Kontrak Pasokan'
  | 'Kargo & Logistik'
  | 'Kemitraan Bisnis'
  | 'Bambu & Proyek';

export type ServiceData = {
  slug: string;
  name: string;
  category: ServiceCategory;
  hook: string;
  features: string[];
  idealFor: string;
  moq: string;
  faqs: { q: string; a: string }[];
};

const WA_NOTE = 'Konsultasi & penawaran resmi via WhatsApp 0813-1651-6524 (jam kerja Senin–Sabtu 08.00–17.00 WIB).';

export const SERVICES: ServiceData[] = [
  /* ===== LANGGANAN & KONTRAK PASOKAN ===== */
  {
    slug: 'langganan-rumah-tangga',
    name: 'Langganan Air Bambu Rumah Tangga',
    category: 'Langganan & Kontrak Pasokan',
    hook: 'Stok terapi keluarga tanpa putus — galon & botol air bambu diantar rutin sesuai jadwal Anda.',
    features: ['Jadwal antar mingguan/bulanan', 'Harga langganan lebih hemat', 'Bisa ganti jadwal kapan saja', 'Prioritas pengiriman'],
    idealFor: 'Keluarga yang mengonsumsi air bambu rutin untuk terapi harian',
    moq: 'Mulai 2 galon / pengiriman',
    faqs: [
      { q: 'Bagaimana cara mulai berlangganan?', a: 'Hubungi WhatsApp 0813-1651-6524, tentukan jadwal & volume, lalu pengiriman pertama dijalankan sesuai kesepakatan.' },
      { q: 'Bisa jeda sementara?', a: 'Bisa — cukup info sebelum jadwal berikutnya, langganan dijeda tanpa biaya.' },
      { q: 'Metode pembayaran?', a: 'Transfer bank, QRIS, atau COD untuk area tertentu. Detail dikonfirmasi saat order.' },
    ],
  },
  {
    slug: 'langganan-klinik',
    name: 'Pasokan Air Bambu Klinik & Praktik Dokter',
    category: 'Langganan & Kontrak Pasokan',
    hook: 'Kontrak pasokan teratur untuk klinik terapi — kualitas teruji, dokumen lengkap, volume terjamin.',
    features: ['Kontrak pasokan formal', 'Dokumen uji mutu tersedia', 'Faktur & pajak lengkap', 'Prioritas pasokan terjamin'],
    idealFor: 'Klinik, praktik dokter, dan fasilitas kesehatan komplementer',
    moq: 'Mulai 1 drum 30 L / minggu',
    faqs: [
      { q: 'Apakah tersedia dokumen mutu?', a: 'Ya, hasil uji mikrobiologi & mineral dapat disertakan untuk kebutuhan administrasi klinik.' },
      { q: 'Bisa kontrak tahunan?', a: 'Bisa — kontrak tahunan mendapat harga khusus dan jaminan stok prioritas.' },
      { q: 'Pengiriman ke luar Jawa?', a: 'Ya, via kargo darat/laut/udara sesuai lokasi klinik.' },
    ],
  },
  {
    slug: 'langganan-hotel',
    name: 'Pasokan Air Bambu Hotel & Resor',
    category: 'Langganan & Kontrak Pasokan',
    hook: 'Signature water pengalaman tamu — air bambu premium untuk kamar, spa, dan dining hotel Anda.',
    features: ['Branding kamar & F&B', 'Volume besar terjadwal', 'Kemasan estetik food-grade', 'Dukungan menu wellness'],
    idealFor: 'Hotel bintang, resor, villa, dan resort spa',
    moq: 'Mulai 5 drum 30 L / minggu',
    faqs: [
      { q: 'Bisa custom label hotel?', a: 'Untuk volume kontrak, opsi kemasan khusus dapat didiskusikan bersama tim sales.' },
      { q: 'Area layanan?', a: 'Seluruh Indonesia — kargo sesuai lokasi properti.' },
      { q: 'Bisa trial dulu?', a: 'Ya, pengiriman trial tersedia untuk menilai respons tamu.' },
    ],
  },
  {
    slug: 'langganan-spa-wellness',
    name: 'Pasokan Air Bambu Spa & Wellness Center',
    category: 'Langganan & Kontrak Pasokan',
    hook: 'Sempurnakan ritual wellness — air bambu sebagai welcome drink dan pendamping terapi spa.',
    features: ['Welcome drink tamu', 'Pendamping program detoks spa', 'Kiriman terjadwal mingguan', 'Kemasan elegan food-grade'],
    idealFor: 'Spa, reflexy, wellness center, dan yoga studio',
    moq: 'Mulai 2 jerigen 10 L / minggu',
    faqs: [
      { q: 'Cocok untuk program detoks spa?', a: 'Sangat — air bambu adalah bintang program detoksifikasi lembut 3–7 hari.' },
      { q: 'Bisa gabung dengan produk bambu dekorasi?', a: 'Ya, paket lengkap air bambu + elemen bambu interior tersedia.' },
      { q: 'Kontrak minimal berapa lama?', a: 'Fleksibel — mulai bulanan hingga tahunan sesuai arus tamu spa Anda.' },
    ],
  },
  {
    slug: 'langganan-kafe-restoran',
    name: 'Pasokan Air Bambu Kafe & Restoran',
    category: 'Langganan & Kontrak Pasokan',
    hook: 'Menu signature baru: infused water bambu, mocktail terapi, dan welcome drink yang membedakan brand Anda.',
    features: ['Harga grosir khusus F&B', 'Pasokan rutin terjadwal', 'Ide resep menu wellness', 'Faktur resmi'],
    idealFor: 'Kafe, restoran healthy food, juice bar, dan catering',
    moq: 'Mulai 3 jerigen 10 L / minggu',
    faqs: [
      { q: 'Ada ide menu untuk kafe?', a: 'Ya — dari infused water bambu-mint hingga mocktail silika; tim kami berbagi inspirasi resep gratis untuk mitra.' },
      { q: 'Bisa kirim ke beberapa cabang?', a: 'Bisa — satu kontrak, multi-titik kirim sesuai kesepakatan.' },
      { q: 'Minimum order bulanan?', a: 'Mulai 12 jerigen 10 L per bulan untuk harga grosir F&B.' },
    ],
  },
  {
    slug: 'langganan-kantor',
    name: 'Pasokan Air Bambu Kantor & Perusahaan',
    category: 'Langganan & Kontrak Pasokan',
    hook: 'Wellness program kantor yang real: galon air bambu untuk pantry — tim lebih sehat, produktivitas naik.',
    features: ['Galon pantry rutin', 'Tagihan bulanan korporat', 'Faktur & PO perusahaan', 'Slip uji mutu tersedia'],
    idealFor: 'Kantor, startup, pabrik, dan fasilitas industri',
    moq: 'Mulai 4 galon 19 L / bulan',
    faqs: [
      { q: 'Bisa via sistem PO perusahaan?', a: 'Ya — kami terbiasa proses PO, invoice, dan termin korporat.' },
      { q: 'Bisa ganti jadwal saat cuti bersama?', a: 'Bisa, cukup notifikasi sebelum jadwal.' },
      { q: 'Area Jakarta & sekitarnya?', a: 'Layanan reguler Jabodetabek 1–3 hari kerja; kota lain via kargo.' },
    ],
  },
  {
    slug: 'langganan-praktik-tabib',
    name: 'Pasokan Air Bambu Tabib & Praktik Pengobatan',
    category: 'Langganan & Kontrak Pasokan',
    hook: 'Sadapan mentah segar per pesanan untuk tabib dan praktik pengobatan tradisional — dipanen teknik mata tunas.',
    features: ['Panen segar per pesanan', 'Prioritas panen mata tunas', 'Kirim cepat area Jawa', 'Konsultasi teknis panen'],
    idealFor: 'Tabib, praktik pengobatan alternatif, dan komunitas terapi',
    moq: 'Mulai 2 jerigen 5 L / pesanan',
    faqs: [
      { q: 'Berapa segar sadapannya?', a: 'Dipanen H-1 atau hari-H pengiriman sesuai kesepakatan — kualitas sadapan maksimal.' },
      { q: 'Bisa rutin mingguan?', a: 'Bisa — jadwal panen terjadwal memastikan stok selalu segar untuk praktik Anda.' },
      { q: 'Untuk luar Jawa bagaimana?', a: 'Ekspres udara tersedia untuk menjaga kesegaran sadapan mentah.' },
    ],
  },
  {
    slug: 'langganan-sekolah-pesantren',
    name: 'Pasokan Air Bambu Sekolah & Pesantren',
    category: 'Langganan & Kontrak Pasokan',
    hook: 'Minuman sehat untuk asrama & sekolah — pengganti manis yang menopang fokus belajar santri dan siswa.',
    features: ['Harga institusi pendidikan', 'Volume galon besar', 'Jadwal antar rutin', 'Edukasi wellness gratis'],
    idealFor: 'Pesantren, sekolah boarding, kampus, dan yayasan',
    moq: 'Mulai 6 galon 19 L / bulan',
    faqs: [
      { q: 'Ada harga khusus pesantren?', a: 'Ya — skema institusi pendidikan & pesantren memperoleh harga terbaik kami.' },
      { q: 'Bisa edukasi kesehatan untuk santri?', a: 'Bisa — sesi edukasi air bambu & wellness tersedia untuk mitra jangka panjang.' },
      { q: 'Pembayaran termin?', a: 'Fleksibel — bulanan atau per semester sesuai kesepakatan yayasan.' },
    ],
  },
  {
    slug: 'langganan-apotek-herbal',
    name: 'Pasokan Apotek & Toko Herbal',
    category: 'Langganan & Kontrak Pasokan',
    hook: 'Tambahkan air bambu ke rak wellness Anda — produk berbeda yang dicari pencinta herbal sejati.',
    features: ['Harga reseller apotek', 'Kemasan retail siap jual', 'Stok rutin terjadwal', 'Materi edukasi produk'],
    idealFor: 'Apotek, toko herbal, toko sehat, dan marketplace herbal',
    moq: 'Mulai 2 karton / pesanan',
    faqs: [
      { q: 'Bisa bayar tempo (konsinyasi)?', a: 'Skema tempo tersedia untuk mitra terverifikasi setelah periode awal.' },
      { q: 'Ada display/POSM?', a: 'Materi promosi & display tersedia untuk mitra grosir tetap.' },
      { q: 'Bisa mix produk (air + bambu)?', a: 'Bisa — gabungkan air bambu kemasan & produk bambu dalam satu kiriman.' },
    ],
  },
  {
    slug: 'pasokan-korporat',
    name: 'Pasokan Korporat & Event',
    category: 'Langganan & Kontrak Pasokan',
    hook: 'Satu titik kontak untuk seluruh kebutuhan air bambu & bambu perusahaan — dari rutinitas hingga event besar.',
    features: ['Manajemen akun khusus', 'Multi-lokasi & multi-event', 'SLA pengiriman tertulis', 'Konsolidasi faktur bulanan'],
    idealFor: 'Perusahaan multilokasi, event organizer, dan lembaga pemerintah',
    moq: 'Sesuai scope kebutuhan',
    faqs: [
      { q: 'Bisa untuk event 1000+ peserta?', a: 'Bisa — skala drum & kargo khusus tersedia untuk event besar.' },
      { q: 'Tender/pengadaan pemerintah?', a: 'Kami siap mengikuti proses pengadaan resmi dengan dokumen perusahaan lengkap.' },
      { q: 'SLA bisa dikontrak?', a: 'Ya — jaminan waktu & volume tertulis untuk kontrak korporat.' },
    ],
  },

  /* ===== KARGO & LOGISTIK ===== */
  {
    slug: 'kargo-darat',
    name: 'Kargo Darat LTL & FTL',
    category: 'Kargo & Logistik',
    hook: 'Tulang punggung distribusi kami — armada kargo darat ke seluruh Jawa, Sumatera, dan Bali dengan packing aman.',
    features: ['LTL (kurang truk) & FTL (truk penuh)', 'Packing strapping & pallet', 'Lacak kiriman', 'Asuransi opsional'],
    idealFor: 'Distributor, reseller, dan proyek di pulau Jawa & sekitarnya',
    moq: 'Mulai 1 jerigen / 10 batang bambu',
    faqs: [
      { q: 'Berapa lama waktu kargo darat?', a: 'Jabodetabek & Jabar 1–3 hari; Jawa Tengah-Timur & Sumatera 2–5 hari kerja tergantung tujuan.' },
      { q: 'Bisa COD kargo?', a: 'Pembayaran dimuka untuk kargo besar; skema termin untuk mitra kontrak.' },
      { q: 'Bagaimana pengamanan bambu batang?', a: 'Ikat strapping, pelindung ujung, dan pengemasan per ikat — teruji ribuan pengiriman.' },
    ],
  },
  {
    slug: 'kargo-laut',
    name: 'Kargo Laut Antar Pulau',
    category: 'Kargo & Logistik',
    hook: 'Volume besar hemat biaya — kargo laut untuk Kalimantan, Sulawesi, dan seluruh Indonesia timur.',
    features: ['Kontainer & LCL', 'Dokumen ekspedisi lengkap', 'Optimasi biaya per ton', 'Door-to-door opsional'],
    idealFor: 'Distributor kota besar luar Jawa & proyek volume masif',
    moq: 'Mulai 1 ton / 1 LCL',
    faqs: [
      { q: 'Berapa lama kargo laut?', a: '3–8 hari kerja tergantung rute dan jadwal kapal ke pelabuhan tujuan.' },
      { q: 'Bisa door-to-door?', a: 'Bisa — pengiriman dari gudang kami sampai alamat Anda via ekspedisi mitra.' },
      { q: 'Bagaimana bila delay kapal?', a: 'Kami monitor jadwal & beri info real-time; jadwal cadangan tersedia untuk mitra rutin.' },
    ],
  },
  {
    slug: 'kargo-udara',
    name: 'Kargo Udara Ekspres',
    category: 'Kargo & Logistik',
    hook: 'Tercepat ke timur Indonesia — sadapan segar & pesanan urgensi tiba 2–5 hari ke Maluku hingga Papua.',
    features: ['Prioritas penerbangan', 'Cold-pack untuk sadapan segar', 'Dokumen AWB lengkap', 'Tracking penuh'],
    idealFor: 'Klinik terapi, tabib, dan pesanan mendesak wilayah timur',
    moq: 'Mulai 10 kg',
    faqs: [
      { q: 'Sadapan mentah aman via udara?', a: 'Ya — dengan cold-pack dan waktu transit pendek, kesegaran terjaga sampai tujuan.' },
      { q: 'Biaya kargo udara?', a: 'Dihitung per kg & rute — minta penawaran via WhatsApp untuk harga terkini.' },
      { q: 'Semua kota bisa?', a: 'Kota-kota dengan bandara/kargo udara — cek kota Anda di halaman Jangkauan Kota.' },
    ],
  },
  {
    slug: 'truk-penuh',
    name: 'Kirim Truk Penuh (FTL)',
    category: 'Kargo & Logistik',
    hook: 'Kapasitas penuh, biaya per unit terendah — solusi proyek besar & restok distributor dalam jumlah masif.',
    features: ['Truk CDD hingga trailer', 'Muat optimal per ton', 'Rute langsung tanpa transit', 'Kontrak volume tersedia'],
    idealFor: 'Distributor utama, proyek konstruksi bambu, dan reseller master',
    moq: '1 truk penuh',
    faqs: [
      { q: 'Berapa batang bambu per truk?', a: 'Tergantung tipe truk & diameter — CDD ±300–500 batang, trailer lebih besar lagi. Hitung presisi saat order.' },
      { q: 'Bisa gabung air bambu + bambu?', a: 'Ya — satu truk mixed load diatur agar kapasitas optimal.' },
      { q: 'Bisa jarahan beberapa kota?', a: 'Bisa — rute multi-drop disepakati saat konfirmasi order.' },
    ],
  },
  {
    slug: 'packing-khusus',
    name: 'Packing Aman & Custom',
    category: 'Kargo & Logistik',
    hook: 'Kerapuhan nol — paket kayu, foam, dan strapping khusus untuk kiriman jarak jauh yang aman.',
    features: ['Crate kayu untuk drum', 'Bubble & foam food-grade', 'Strapping & palletisasi', 'Label handling khusus'],
    idealFor: 'Semua kiriman jarak jauh & volume besar',
    moq: 'Opsional setiap kiriman',
    faqs: [
      { q: 'Apakah packing gratis?', a: 'Packing standar termasuk; packing khusus (crate kayu, cold-pack) dihitung sesuai kebutuhan.' },
      { q: 'Bila barang rusak di jalan?', a: 'Dengan asuransi kargo aktif, klaim diproses sesuai ketentuan ekspedisi — kami bantu penuh.' },
      { q: 'Bisa request tanpa kayu (quarantine)?', a: 'Untuk rute tertentu kami sesuaikan kebutuhan karantina daerah tujuan.' },
    ],
  },
  {
    slug: 'pengiriman-terjadwal',
    name: 'Pengiriman Terjadwal Otomatis',
    category: 'Kargo & Logistik',
    hook: 'Set sekali, terkirim terus — jadwal otomatis mingguan/bulanan tanpa harus order ulang.',
    features: ['Kotak jadwal fleksibel', 'Reminder sebelum kirim', 'Bisa pause/ubah kapan saja', 'Prioritas slot pengiriman'],
    idealFor: 'Langganan rumah tangga, klinik, kafe, dan kantor',
    moq: 'Sesuai paket langganan',
    faqs: [
      { q: 'Bagaimana mengubah jadwal?', a: 'Chat WhatsApp admin — perubahan diproses sebelum jadwal berjalan berikutnya.' },
      { q: 'Terdeteksi cuti panjang?', a: 'Jeda langganan tanpa denda; aktifkan kembali kapan pun siap.' },
      { q: 'Ada diskon langganan?', a: 'Ya — harga langganan lebih hemat dibanding order satu kali.' },
    ],
  },
  {
    slug: 'dropship-nasional',
    name: 'Dropship Se-Indonesia',
    category: 'Kargo & Logistik',
    hook: 'Jual air bambu tanpa stok & tanpa repot — kami kirim atas nama toko Anda langsung ke pelanggan.',
    features: ['Tanpa modal stok', 'Label pengirim brand Anda', 'Harga dropship khusus', 'Support materi promosi'],
    idealFor: 'Online shop, affiliate, dan komunitas kesehatan',
    moq: 'Mulai 1 paket',
    faqs: [
      { q: 'Cara daftar dropshipper?', a: 'Chat WhatsApp dengan data toko Anda — aktivasi cepat, langsung dapat harga khusus.' },
      { q: 'Bisa tanpa logo kami?', a: 'Ya — paket dikirim netral atau atas nama brand Anda sesuai pilihan.' },
      { q: 'Return bila pelanggan tolak?', a: 'Sesuai kebijakan ekspedisi; kami bantu proses retur ke gudang.' },
    ],
  },

  /* ===== KEMITRAAN BISNIS ===== */
  {
    slug: 'distributor-kota',
    name: 'Distributor Resmi Per Kota',
    category: 'Kemitraan Bisnis',
    hook: 'Jadi satu-satunya distributor resmi BWN di kota Anda — eksklusif wilayah, margin menarik, dukungan penuh.',
    features: ['Eksklusivitas wilayah kota', 'Harga distributor terbaik', 'Support materi & training', 'Perlindungan harga'],
    idealFor: 'Pengusaha lokal yang serius membangun bisnis air bambu',
    moq: 'Komitmen volume bulanan per kontrak',
    faqs: [
      { q: 'Bagaimana kualifikasi distributor?', a: 'Ada komitmen volume minimum & kelengkapan legalitas usaha — diskusikan via WhatsApp untuk skema lengkap.' },
      { q: 'Wilayah yang sudah terisi?', a: 'Cek ketersediaan wilayah Anda via WhatsApp — daftar diperbarui berkala.' },
      { q: 'Bantuan pemasaran?', a: 'Ya — materi digital, training produk, dan dukungan peluncuran area.' },
    ],
  },
  {
    slug: 'agen-provinsi',
    name: 'Agen Utama Per Provinsi',
    category: 'Kemitraan Bisnis',
    hook: 'Skema teratas: kelola jaringan distributor tingkat kota di provinsi Anda — membangun bisnis yang sebenarnya.',
    features: ['Hak jaringan provinsi', 'Harga agen utama', 'Hak merekrut sub-distributor', 'Prioritas pasokan nasional'],
    idealFor: 'Perusahaan distribusi dengan jangkauan provinsi',
    moq: 'Komitmen volume provinsi per kontrak',
    faqs: [
      { q: 'Bedanya dengan distributor kota?', a: 'Agen provinsi membawahi beberapa kota, memperoleh harga lebih dalam, dan berhak menyalurkan ke sub-distributor.' },
      { q: 'Bisa upgrade dari distributor?', a: 'Bisa — mitra aktif yang memenuhi volume dapat naik level dengan kontrak baru.' },
      { q: 'Dukungan operasional?', a: 'Koordinasi pasokan, dokumen mutu, dan pendampingan pembukaan area baru.' },
    ],
  },
  {
    slug: 'reseller-online',
    name: 'Reseller Online & Marketplace',
    category: 'Kemitraan Bisnis',
    hook: 'Mulai bisnis air bambu dari rumah — stok kecil, harga reseller, dukungan konten untuk toko online Anda.',
    features: ['Harga reseller bertingkat', 'Cara jualan lengkap', 'Foto & copy produk siap pakai', 'Naik level sesuai omzet'],
    idealFor: 'Tokopedia/Shopee seller, WhatsApp seller, dan komunitas',
    moq: 'Mulai 1 karton',
    faqs: [
      { q: 'Bisa mulai dari 1 karton?', a: 'Ya — uji pasar dulu dengan modal kecil, naikkan volume sesuai permintaan.' },
      { q: 'Ada konten promosi?', a: 'Ya — foto produk, caption, dan FAQ jualan disediakan untuk mitra.' },
      { q: 'Berapa marginnya?', a: 'Bertingkat sesuai volume — detail skema via WhatsApp sales.' },
    ],
  },
  {
    slug: 'kemitraan-klinik-terapi',
    name: 'Kemitraan Klinik Terapi Bambu',
    category: 'Kemitraan Bisnis',
    hook: 'Bangun unit terapi air bambu di klinik Anda — paket lengkap: pasokan, training, dan materi edukasi pasien.',
    features: ['Kontrak pasokan terapi', 'Training teknis staf', 'Materi edukasi pasien', 'Dukungan ilmiah produk'],
    idealFor: 'Klinik terapi, rumah sehat, dan pusat pengobatan komplementer',
    moq: 'Kontrak pasokan bulanan',
    faqs: [
      { q: 'Training apa saja?', a: 'Penyimpanan, penyajian, protokol anjuran konsumsi, dan edukasi pasien.' },
      { q: 'Bisa branding klinik?', a: 'Kemitraan jangka panjang membuka opsi co-branding unit terapi.' },
      { q: 'Berapa lama setup?', a: 'Umumnya 2–4 minggu dari kontrak hingga unit siap melayani.' },
    ],
  },
  {
    slug: 'kontrak-produksi',
    name: 'Kontrak Pasokan Volume (Tender & Institusi)',
    category: 'Kemitraan Bisnis',
    hook: 'Kapasitas produksi siap kontrak besar — institusi, pengadaan, dan program pemerintah.',
    features: ['Kapasitas terjamin kontrak', 'Dokumen legal lengkap', 'Uji mutu per batch', 'SLA & penalti jelas'],
    idealFor: 'Institusi pemerintah, BUMN, dan program besar nasional',
    moq: 'Sesuai scope tender',
    faqs: [
      { q: 'Dokumen perusahaan lengkap?', a: 'Ya — akta, NIB, dan dokumen legal lain tersedia untuk proses pengadaan.' },
      { q: 'Uji mutu per batch?', a: 'Setiap batch melewati kontrol mutu; laporan tersedia atas permintaan kontrak.' },
      { q: 'Kapasitas maksimal?', a: 'Diskusikan volume target — jadwal produksi disiapkan khusus untuk kontrak besar.' },
    ],
  },
  {
    slug: 'bambu-konstruksi-proyek',
    name: 'Pasokan Bambu Proyek Konstruksi',
    category: 'Bambu & Proyek',
    hook: 'Petung & Wulung kelas konstruksi untuk green building, scaffolding, dan arsitektur bambu — per truk ke lokasi Anda.',
    features: ['Seleksi umur 3+ tahun', 'Treatment anti-hama', 'Pengukuran presisi', 'Kirim langsung ke site'],
    idealFor: 'Kontraktor, arsitek bambu, dan proyek bangunan hijau',
    moq: 'Mulai 50 batang',
    faqs: [
      { q: 'Bisa spek ukuran khusus?', a: 'Ya — panjang & diameter dipilah sesuai spesifikasi proyek Anda.' },
      { q: 'Treatment apa yang tersedia?', a: 'Pengeringan dan fumigasi dasar; treatment borat untuk kebutuhan struktural didiskusikan khusus.' },
      { q: 'Cara hitung kebutuhan proyek?', a: 'Kirim desain/kebutuhan via WhatsApp — tim kami bantu estimasi volume & biaya.' },
    ],
  },
  {
    slug: 'bambu-kerajinan-furniture',
    name: 'Pasokan Bambu Kerajinan & Furniture',
    category: 'Bambu & Proyek',
    hook: 'Apus & Ori pilah presisi untuk industri kerajinan dan furniture — serat kuat, lentur, siap olah.',
    features: ['Pilah per kualitas serat', 'Diameter konsisten', 'Kering merata siap olah', 'Volume rutin terjadwal'],
    idealFor: 'Industri kerajinan, studio furniture, dan galeri dekor',
    moq: 'Mulai 100 batang',
    faqs: [
      { q: 'Bisa rutin bulanan?', a: 'Bisa — jadwal pasokan tetap menjaga konsistensi produksi workshop Anda.' },
      { q: 'Ada bambu pecah/split?', a: 'Tersedia opsi split & lidi bambu untuk kebutuhan anyaman — tanyakan ketersediaan.' },
      { q: 'Pengiriman ke kota kerajinan?', a: 'Ya — termasuk sentra kerajinan besar seperti Yogyakarta, Jepara, dan Bali.' },
    ],
  },
  {
    slug: 'konsultasi-pemilihan-bambu',
    name: 'Konsultasi Pemilihan & Spesifikasi Bambu',
    category: 'Bambu & Proyek',
    hook: 'Bingung pilih jenis bambu untuk kebutuhan Anda? Konsultasi gratis dari tim yang mengenal bambu sejak 2007.',
    features: ['Rekomendasi jenis sesuai aplikasi', 'Estimasi volume & biaya', 'Tips treatment & perawatan', 'Gratis tanpa biaya'],
    idealFor: 'Calon pembeli proyek, pemula, dan instansi',
    moq: 'Tanpa minimum — konsultasi dulu, order kemudian',
    faqs: [
      { q: 'Bambu apa untuk pagar rumah?', a: 'Petung untuk struktur, Wulung untuk estetika hitam elegan — detail diskusi via WhatsApp.' },
      { q: 'Berapa umur simpan bambu?', a: 'Dengan treatment & perawatan tepat, bambu bangunan dapat bertahan bertahun-tahun di luar ruang.' },
      { q: 'Bisa lihat sample?', a: 'Ya — sample potongan dapat dikirim untuk calon pembeli volume.' },
    ],
  },
];

/* Alias ringan untuk kategori — dipakai indeks layanan */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  'Langganan & Kontrak Pasokan',
  'Kargo & Logistik',
  'Kemitraan Bisnis',
  'Bambu & Proyek',
];

export function findService(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function servicesByCategory(cat: ServiceCategory): ServiceData[] {
  return SERVICES.filter((s) => s.category === cat);
}

export const SERVICE_WA_NOTE = WA_NOTE;

/**
 * DATA KONDISI KESEHATAN — 60+ kondisi untuk halaman programatik:
 * #/air-bambu-untuk/{slug} — "Air Bambu untuk {Kondisi}".
 * Framing: pendamping terapi komplementer tradisional Nusantara,
 * BUKAN pengganti obat dokter (disclaimer melekat di setiap halaman).
 */

export type ConditionCategory =
  | 'Pernapasan & Demam'
  | 'Pencernaan & Metabolik'
  | 'Jantung & Darah'
  | 'Ginjal & Urin'
  | 'Kulit & Kecantikan'
  | 'Sendi & Otot'
  | 'Saraf & Mental'
  | 'Imun & Pemulihan'
  | 'Wanita & Hormonal';

export type ConditionData = {
  slug: string;
  name: string;
  category: ConditionCategory;
  /** Kalimat hook di hero */
  hook: string;
  /** Kandungan air bambu yang paling relevan untuk kondisi ini */
  nutrients: string[];
  /** Cara konsumsi tradisional yang dianjurkan */
  usage: string;
  /** 3 FAQ unik per kondisi */
  faqs: { q: string; a: string }[];
};

const DISCLAIMER =
  'Air bambu adalah minuman terapi alami pendamping pola hidup sehat — bukan obat. Selalu konsultasikan kondisi medis dengan dokter atau tenaga kesehatan.';

export const CONDITIONS: ConditionData[] = [
  /* ===== PERNAPASAN & DEMAM ===== */
  {
    slug: 'demam',
    name: 'Demam & Panas Dalam',
    category: 'Pernapasan & Demam',
    hook: 'Efek mendinginkan alami air bambu telah dipercaya tabib Nusantara berabad-abad untuk meredakan demam dan panas dalam.',
    nutrients: ['Klorofil alami', 'Mineral elektrolit', 'Antioksidan flavonoid'],
    usage: 'Minum 200–300 ml air bambu suling 2–3 kali sehari saat demam, disertai air putih cukup dan istirahat. Tradisional, tabib juga meresapkannya pada pagi hari saat kandungan mineral sedang tinggi.',
    faqs: [
      { q: 'Apakah air bambu bisa menurunkan demam anak?', a: 'Dalam tradisi, air bambu dipakai untuk panas dalam dewasa. Untuk anak, konsultasikan dulu dengan dokter atau tenaga kesehatan sebelum memberikan minuman herbal apa pun.' },
      { q: 'Berapa lama air bambu diminum saat demam?', a: 'Selama masa pemulihan demam, umumnya 2–3 hari. Jika demam lebih dari 3 hari atau suhu tinggi menetap, segera periksakan diri ke fasilitas kesehatan.' },
      { q: 'Lebih baik air bambu suling atau sadapan mentah untuk demam?', a: 'Untuk konsumsi mandiri di rumah, air bambu suling lebih aman karena sudah melewati distilasi dan uji mutu. Sadapan mentah (Air Bambu Tabib) sebaiknya sesuai anjuran terapis.' },
    ],
  },
  {
    slug: 'panas-dalam',
    name: 'Panas Dalam & Sariawan Mulut',
    category: 'Pernapasan & Demam',
    hook: 'Ketika tubuh terasa panas, lidah pahit, dan tenggorokan seret — air bambu adalah penyejuk tradisional paling dicari.',
    nutrients: ['Sifat alkali alami', 'Klorofil', 'Antioksidan polifenol'],
    usage: 'Konsumsi air bambu suling dingin/es 250 ml 2–3 kali sehari saat tubuh terasa panas. Bisa dikombinasikan dengan madu sesuai selera.',
    faqs: [
      { q: 'Kenapa air bambu bisa menyejukkan?', a: 'Tradisi pengobatan mengenal air bambu sebagai berpenyegar dengan karakter "dingin" yang membantu menyeimbangkan tubuh yang terasa panas, ditopang kandungan mineral dan sifat alkali alaminya.' },
      { q: 'Boleh diminum setiap hari saat panas dalam?', a: 'Boleh. Air bambu suling aman harian dan menjadi pengganti minuman manis yang justru memperberat panas dalam.' },
      { q: 'Apakah membantu sariawan cepat sembuh?', a: 'Hidrasi memadai adalah kunci pemulihan sariawan. Air bambu membantu menjaga hidrasi dan memberi mineral, sementara sariawan yang menetap lebih dari 2 minggu harus diperiksa dokter.' },
    ],
  },
  {
    slug: 'batuk-berdahak',
    name: 'Batuk Berdahak',
    category: 'Pernapasan & Demam',
    hook: 'Air bambu secara tradisional digunakan untuk melonggarkan dahak dan meredakan iritasi tenggorokan.',
    nutrients: ['Anti-inflamasi alami', 'Flavonoid', 'Mineral'],
    usage: 'Minum 200 ml air bambu suling hangat atau suhu ruang 2–3 kali sehari. Tradisional dicampur perasan jeruk nipis atau madu.',
    faqs: [
      { q: 'Apakah air bambu untuk batuk anak-anak?', a: 'Untuk anak di bawah 2 tahun, semua minuman herbal harus persetujuan dokter. Anak di atas 2 tahun boleh dalam jumlah kecil sesuai anjuran tenaga kesehatan.' },
      { q: 'Berapa lama sampai merasa lega?', a: 'Pengalaman tradisional menunjukkan perasaan lega di tenggorokan dapat dirasakan dalam 1–2 hari konsumsi rutin. Batuk lebih dari 2 minggu perlu diperiksa.' },
      { q: 'Bisa dikombinasi dengan obat batuk apotek?', a: 'Air bambu adalah minuman, bukan obat — tidak ada interaksi yang diketahui. Tetap beri jarak 30 menit dari obat agar penyerapan obat optimal.' },
    ],
  },
  {
    slug: 'radang-tenggorokan',
    name: 'Radang Tenggorokan',
    category: 'Pernapasan & Demam',
    hook: 'Sifat mendinginkan air bambu membantu meredakan peradangan dan kekeringan di tenggorokan.',
    nutrients: ['Anti-inflamasi', 'Antioksidan', 'Mineral elektrolit'],
    usage: 'Seruput air bambu suling sedikit demi sedikit sepanjang hari, total 1–1,5 L, agar tenggorokan tetap lembap dan terhidrasi.',
    faqs: [
      { q: 'Apakah air bambu menggantikan antibiotik?', a: 'Tidak. Radang tenggorokan bakterial memerlukan penanganan dokter. Air bambu berperan menjaga hidrasi dan kenyamanan tenggorokan.' },
      { q: 'Dingin atau hangat lebih baik?', a: 'Saat radang akut, banyak orang lebih nyaman dengan suhu ruang atau hangat. Dingin boleh jika terasa menenangkan.' },
      { q: 'Berapa hari sampai membaik?', a: 'Radang virus biasanya membaik 3–5 hari dengan istirahat dan hidrasi memadai. Jika disertai demam tinggi atau nanah, periksa ke dokter.' },
    ],
  },
  {
    slug: 'flu',
    name: 'Flu & Pilek',
    category: 'Pernapasan & Demam',
    hook: 'Saat flu, tubuh butuh cairan lebih banyak — air bambu memberi hidrasi plus mineral elektrolit alami.',
    nutrients: ['Elektrolit K-Ca-Mg', 'Antioksidan', 'Asam amino'],
    usage: 'Perbanyak konsumsi air bambu suling hingga 1,5 L sehari selama flu, disertai sup hangat dan istirahat cukup.',
    faqs: [
      { q: 'Apa bedanya dengan minum air putih biasa?', a: 'Air bambu mengandung mineral dan antioksidan alami yang tidak ada di air olahan — membantu pemulihan sambil tetap menghidrasi.' },
      { q: 'Bolehkah saat flu minum air bambu dingin?', a: 'Boleh, namun banyak orang merasa lebih nyaman dengan suhu ruang saat hidung tersumbat.' },
      { q: 'Apakah bisa mencegah flu?', a: 'Antioksidan air bambu mendukung daya tahan tubuh, namun cegah flu juga dengan cuci tangan, tidur cukup, dan gizi seimbang.' },
    ],
  },
  {
    slug: 'sinusitis',
    name: 'Sinusitis & Hidung Tersumbat',
    category: 'Pernapasan & Demam',
    hook: 'Hidrasi optimal membantu mencairkan lendir sinus — air bambu adalah pendamping minuman yang menyegarkan.',
    nutrients: ['Anti-inflamasi alami', 'Mineral', 'Antioksidan'],
    usage: 'Minum 200–250 ml air bambu suling 3 kali sehari untuk membantu menjaga lendir tetap encer dan mudah dikeluarkan.',
    faqs: [
      { q: 'Apakah air bambu menyembuhkan sinusitis kronis?', a: 'Tidak menyembuhkan, tetapi hidrasi yang baik adalah bagian dari manajemen sinusitis. Kasus kronis butuh penanganan THT.' },
      { q: 'Boleh dipakai steam/kuap?', a: 'Tradisional air bambu dimanfaatkan sebagai minuman. Untuk steam, gunakan air hangat bersih sesuai anjuran medis.' },
      { q: 'Kapan sebaiknya diminum?', a: 'Pagi, siang, dan malam — rutin. Konsistensi hidrasi lebih penting daripada timing.' },
    ],
  },
  {
    slug: 'bronkitis',
    name: 'Bronkitis & Pernapasan',
    category: 'Pernapasan & Demam',
    hook: 'Pendamping pemulihan bronkitis dengan hidrasi mineral yang lembut bagi saluran napas.',
    nutrients: ['Anti-inflamasi', 'Antioksidan polifenol', 'Mineral'],
    usage: 'Selama pemulihan bronkitis, konsumsi air bambu suling 250 ml 3 kali sehari sesuai anjuran tenaga kesehatan.',
    faqs: [
      { q: 'Apakah aman untuk penderita asma?', a: 'Air bambu adalah minuman biasa yang aman, namun penderita asma tetap harus mengikuti rencana terapi dokter.' },
      { q: 'Berapa lama boleh dikonsumsi?', a: 'Air bambu suling aman untuk jangka panjang sebagai minuman harian.' },
      { q: 'Apakah membantu meredakan sesak?', a: 'Sesak napas adalah gejala serius — segera ke dokter. Air bambu bukan penanganan sesak.' },
    ],
  },

  /* ===== PENCERNAAN & METABOLIK ===== */
  {
    slug: 'maag',
    name: 'Maag & Lambung Perih',
    category: 'Pencernaan & Metabolik',
    hook: 'Karakter alkali dan penyegaran air bambu dipercaya tradisi membantu menenangkan lambung yang perih.',
    nutrients: ['Sifat alkali alami', 'Klorofil', 'Mineral'],
    usage: 'Minum 150–200 ml air bambu suling suhu ruang saat lambung terasa perih, dan antara waktu makan. Hindari dingin ekstrem saat lambung sedang sensitif.',
    faqs: [
      { q: 'Bolehkah penderita maag minum air bambu?', a: 'Umumnya boleh karena bersifat lembut dan alkali. Jika Anda memiliki GERD berat atau tukak aktif, konsultasikan dulu ke dokter.' },
      { q: 'Kapan waktu terbaik minum untuk lambung?', a: 'Antara waktu makan atau saat gejala muncul. Hindari menenggak banyak air sekaligus saat lambung penuh.' },
      { q: 'Apakah menggantikan obat PPI?', a: 'Tidak. Obat resep tetap sesuai program dokter; air bambu hanya pendamping gaya hidup.' },
    ],
  },
  {
    slug: 'sembelit',
    name: 'Sembelit & Kotoran Menumpuk',
    category: 'Pencernaan & Metabolik',
    hook: 'Air bambu melancarkan pencernaan secara lembut — solusi tradisional yang digenerasi turun-temurun.',
    nutrients: ['Mineral alkali', 'Hidrasi optimal', 'Klorofil'],
    usage: 'Minum 250 ml air bambu suling di pagi hari saat perut kosong dan 200 ml sebelum makan malam. Imbangi dengan serat sayur dan buah.',
    faqs: [
      { q: 'Berapa lama efek melancarkan BAB terasa?', a: 'Hidrasi yang konsisten umumnya memperbaiki pola BAB dalam beberapa hari. Tambahkan serat dan aktivitas fisik.' },
      { q: 'Apakah efek laksatifnya kuat?', a: 'Tidak — air bambu bekerja lembut melalui hidrasi, bukan stimulasi kimia. Aman untuk penggunaan harian.' },
      { q: 'Bisa untuk lansia yang sering sembelit?', a: 'Ya, hidrasi lembut cocok untuk lansia. Jika sembelit menetap disertai darah, segera periksa ke dokter.' },
    ],
  },
  {
    slug: 'kembung',
    name: 'Kembung & Perut Beruntun',
    category: 'Pencernaan & Metabolik',
    hook: 'Perut penuh dan beruntun membuat tidak nyaman — air bambu menyegarkan tanpa menambah gas.',
    nutrients: ['Mineral alkali', 'Elektrolit', 'Anti-inflamasi alami'],
    usage: 'Minum 150–200 ml air bambu suling suhu ruang lambat-lambat saat perut terasa kembung. Hindari minuman berkarbonasi dan gizi manis.',
    faqs: [
      { q: 'Apakah air bambu menambah gas di perut?', a: 'Tidak — tanpa karbonasi dan gula fermentatif, air bambu justru pilihan yang lebih aman daripada soda saat kembung.' },
      { q: 'Dingin atau suhu ruang?', a: 'Suhu ruang lebih ramah bagi pencernaan yang sedang sensitif.' },
      { q: 'Kembung terus-menerus, apa yang harus dilakukan?', a: 'Periksa pola makan dan konsultasikan bila berlanjut — bisa menandakan intoleransi atau kondisi lain.' },
    ],
  },
  {
    slug: 'asam-urat',
    name: 'Asam Urat Tinggi',
    category: 'Pencernaan & Metabolik',
    hook: 'Hidrasi membantu ginjal membuang kelebihan asam urat — air bambu menyediakan cairan mineral rendah purin.',
    nutrients: ['Hidrasi mineral', 'Anti-inflamasi', 'Alkali alami'],
    usage: 'Minum 250 ml air bambu suling 3 kali sehari untuk mendukung ekskresi asam urat melalui urine. Batasi jeroan, seafood, dan alkohol.',
    faqs: [
      { q: 'Apakah air bambu menurunkan asam urat?', a: 'Hidrasi memadai membantu ginjal membuang asam urat. Air bambu menambah asupan cairan mineral — namun obat dokter tetap utama bila kadar tinggi.' },
      { q: 'Boleh saat asam urat kambuh (nyeri)?', a: 'Boleh — hidrasi justru dianjurkan saat serangan, disertai obat sesuai resep dan kompres sesuai anjuran.' },
      { q: 'Air bambu suling atau tabib yang lebih cocok?', a: 'Untuk konsumsi rutin harian, air bambu suling lebih praktis dan aman.' },
    ],
  },
  {
    slug: 'obesitas',
    name: 'Diet & Penurunan Berat Badan',
    category: 'Pencernaan & Metabolik',
    hook: 'Pengganti minuman manis zero-kalori yang tetap memberi sensasi segar dan mineral.',
    nutrients: ['Nol gula tambahan', 'Mineral elektrolit', 'Klorofil'],
    usage: 'Jadikan air bambu suling minuman utama harian — gantikan teh manis, soda, dan jus kemasan. Minum 200 ml sebelum makan membantu porsi lebih terkendali.',
    faqs: [
      { q: 'Apakah air bambu mengandung kalori?', a: 'Air sadapan bambu praktis tanpa gula tambahan — jauh lebih rendah kalori dibanding minuman manis kemasan.' },
      { q: 'Bisa menurunkan berat badan sendiri?', a: 'Penurunan berat butuh defisit kalori keseluruhan. Air bambu membantu dengan menggantikan kalori cair yang tersembunyi.' },
      { q: 'Kapan waktu terbaik untuk program diet?', a: 'Sebelum makan, saat lapar di antara makan, dan setelah olahraga.' },
    ],
  },
  {
    slug: 'gula-darah-tidak-stabil',
    name: 'Gula Darah Tidak Stabil',
    category: 'Pencernaan & Metabolik',
    hook: 'Tradisi herbal Nusantara memakai air bambu untuk membantu menjaga metabolisme gula — kini didukung kajian antioksidan.',
    nutrients: ['Flavonoid', 'Polifenol', 'Nol gula tambahan'],
    usage: 'Pilih air bambu suling sebagai minuman harian penderita diabetes — nol gula tambahan, mineral alami. 200 ml 3 kali sehari.',
    faqs: [
      { q: 'Apakah aman untuk penderita diabetes?', a: 'Ya, karena tanpa gula tambahan. Tetap pantau gula darah dan ikuti program dokter.' },
      { q: 'Apakah bisa menggantikan obat diabetes?', a: 'Tidak pernah. Obat resep tetap wajib sesuai anjuran dokter.' },
      { q: 'Apa bedanya dengan air kelapa?', a: 'Air kelapa mengandung gula alami lebih tinggi; air bambu lebih rendah gula — pilihan yang lebih aman bagi penderita diabetes.' },
    ],
  },
  {
    slug: 'detoks-tubuh',
    name: 'Detoksifikasi Tubuh',
    category: 'Pencernaan & Metabolik',
    hook: 'Program detoks lembut 7 hari dengan air bambu — membantu tubuh membuang toksin lewat hidrasi optimal.',
    nutrients: ['Klorofil alami', 'Antioksidan', 'Mineral alkali'],
    usage: 'Program detoks: 250 ml air bambu suling 4 kali sehari selama 7 hari, disertai makanan bersih (sayur, buah, protein tanpa lemak) dan tidur cukup.',
    faqs: [
      { q: 'Apakah detoks air bambu perlu puasa?', a: 'Tidak perlu. Detoks sehat adalah hidrasi + makanan bersih, bukan kelaparan.' },
      { q: 'Berapa sering boleh program detoks ini?', a: '1–2 kali per bulan cukup. Air bambu tetap boleh jadi minuman harian di luar program.' },
      { q: 'Apa efek yang normal selama detoks?', a: 'BAB lebih lancar, kencing lebih sering, tubuh terasa lebih ringan. Jika pusing berat atau lemas hebat, hentikan dan periksa kesehatan.' },
    ],
  },
  {
    slug: 'kebugaran-olahraga',
    name: 'Kebugaran & Pemulihan Olahraga',
    category: 'Pencernaan & Metabolik',
    hook: 'Elektrolit alami K-Ca-Mg menjadikan air bambu perehidrasi pasca latihan yang elegan.',
    nutrients: ['Kalium', 'Kalsium', 'Magnesium'],
    usage: 'Minum 300–500 ml air bambu suling setelah latihan untuk rehidrasi — lebih baik bertahap daripada sekaligus.',
    faqs: [
      { q: 'Apakah bisa menggantikan minuman isotonik?', a: 'Untuk latihan umum, ya — elektrolit alami air bambu cukup membantu. Atlet intensitas tinggi tetap butuh strategi nutrisi khusus.' },
      { q: 'Sebelum atau sesudah latihan?', a: 'Keduanya boleh. Sebelum untuk hidrasi awal, sesudah untuk pemulihan.' },
      { q: 'Apakah membantu nyeri otot pasca latihan?', a: 'Hidrasi dan mineral mendukung pemulihan. DOMS (nyeri otot tertunda) adalah hal normal dan membaik dalam 1–2 hari.' },
    ],
  },

  /* ===== JANTUNG & DARAH ===== */
  {
    slug: 'hipertensi',
    name: 'Hipertensi & Darah Tinggi',
    category: 'Jantung & Darah',
    hook: 'Mineral kalium air bambu mendukung keseimbangan elektrolit — bagian penting pengelolaan tekanan darah.',
    nutrients: ['Kalium', 'Antioksidan flavonoid', 'Natrium rendah'],
    usage: 'Minum 250 ml air bambu suling 2–3 kali sehari sebagai bagian dari pola hidup DASH: rendah garam, tinggi sayur, olahraga rutin, obat sesuai resep.',
    faqs: [
      { q: 'Apakah air bambu menurunkan tekanan darah?', a: 'Kandungan kalium dan rendah natrium selaras dengan pola makan untuk hipertensi. Namun obat antihipertensi tetap utama — jangan berhenti tanpa arahan dokter.' },
      { q: 'Bolehkah dikonsumsi bersama obat darah tinggi?', a: 'Boleh sebagai minuman. Beri jarak ±30 menit dari obat dan tetap pantau tekanan darah rutin.' },
      { q: 'Berapa banyak boleh minum per hari?', a: '1–1,5 L sebagai bagian dari total cairan harian adalah wajar.' },
    ],
  },
  {
    slug: 'anemia',
    name: 'Anemia & Kurang Darah',
    category: 'Jantung & Darah',
    hook: 'Mineral esensial air bambu mendampingi program pemulihan darah — ditopang asam amino penyusun protein.',
    nutrients: ['Asam amino esensial', 'Mineral', 'Antioksidan'],
    usage: 'Konsumsi 250 ml air bambu suling 2 kali sehari, disertai makanan kaya zat besi (hati, bayam, kacang) dan vitamin C agar penyerapan optimal.',
    faqs: [
      { q: 'Apakah air bambu mengandung zat besi?', a: 'Kandungan utamanya adalah silika, mineral K-Ca-Mg, dan asam amino — bukan sumber utama zat besi. Anemia tetap butuh terapi spesifik sesuai penyebabnya.' },
      { q: 'Bisakah membantu haid yang banyak?', a: 'Tradisional air bambu dipakai meredakan nyeri/berlebihan haid. Anemia akibat haid berat perlu pemeriksaan dokter.' },
      { q: 'Berapa lama sampai darah membaik?', a: 'Pemulihan anemia bergantung penyebab dan terapi. Periksa hemoglobin rutin sesuai anjuran dokter.' },
    ],
  },
  {
    slug: 'kolesterol-jahat',
    name: 'Kolesterol LDL Tinggi',
    category: 'Jantung & Darah',
    hook: 'Flavonoid dan polifenol air bambu membantu melawan oksidasi LDL — musuh utama pembuluh darah.',
    nutrients: ['Flavonoid', 'Polifenol', 'Antioksidan'],
    usage: 'Minum 250 ml air bambu suling 2–3 kali sehari, disertai diet rendah lemak jenuh, serat tinggi, dan aktivitas fisik 30 menit/hari.',
    faqs: [
      { q: 'Berapa lama kolesterol turun dengan air bambu?', a: 'Pola hidup keseluruhan menentukan. Kontrol lipid rutin 3 bulan sekali untuk melihat tren, sesuai anjuran dokter.' },
      { q: 'Boleh untuk penderita stenosis/penyumbatan?', a: 'Sebagai minuman aman, namun kondisi jantung berat wajib di bawah pengawasan dokter jantung.' },
      { q: 'Apakah harus minum sebelum makan berlemak?', a: 'Tidak ada aturan khusus — konsistensi harian lebih penting daripada timing.' },
    ],
  },
  {
    slug: 'sirkulasi-darah',
    name: 'Sirkulasi Darah & Bekuan Ringan',
    category: 'Jantung & Darah',
    hook: 'Antioksidan air bambu mendukung kesehatan endotel — lapisan dalam pembuluh darah Anda.',
    nutrients: ['Polifenol', 'Flavonoid', 'Mineral'],
    usage: 'Minum 200–250 ml air bambu suling 3 kali sehari, dibarengi jalan kaki harian dan hindari duduk terlalu lama.',
    faqs: [
      { q: 'Apakah air bambu mengencerkan darah?', a: 'Tidak seperti obat antikoagulan. Antioksidannya mendukung kesehatan pembuluh secara umum. Pengencer darah resep tetap sesuai dokter.' },
      { q: 'Boleh untuk penderita varises?', a: 'Boleh — hidrasi dan gerak rutin adalah dasar manajemen varises.' },
      { q: 'Tanda sirkulasi membaik apa saja?', a: 'Tangan-kaki lebih hangat, kram malam berkurang, tidak mudah kesemutan.' },
    ],
  },

  /* ===== GINJAL & URIN ===== */
  {
    slug: 'kencing-batu',
    name: 'Batu Ginjal & Kencing Batu',
    category: 'Ginjal & Urin',
    hook: 'Hidrasi mineral alami membantu urine tetap encer — langkah pertama pencegahan batu ginjal berulang.',
    nutrients: ['Hidrasi mineral', 'Kalium', 'Alkali alami'],
    usage: 'Minum 250 ml air bambu suling 4–5 kali sehari agar urine tetap jernih. Tradisional air bambu dipakai melancarkan buang air kecil.',
    faqs: [
      { q: 'Apakah air bambu melarutkan batu ginjal?', a: 'Tidak ada bukti melarutkan batu yang sudah terbentuk. Namun hidrasi tinggi adalah strategi utama mencegah batu baru — dan air bambu membuatnya menyenangkan.' },
      { q: 'Boleh untuk penderita batu oksalat?', a: 'Air bambu bukan sumber oksalat tinggi. Tetap konsultasi jenis batu Anda dengan dokter untuk strategi diet yang tepat.' },
      { q: 'Berapa total cairan harian yang ideal?', a: 'Target umum urine 2–2,5 L/hari sesuai anjuran urologi. Air bambu bisa menjadi 1–1,5 L darinya.' },
    ],
  },
  {
    slug: 'infeksi-saluran-kemih',
    name: 'Infeksi Saluran Kemih (ISK)',
    category: 'Ginjal & Urin',
    hook: 'Lancarkan kencing dan jaga saluran urin tetap terbilas — pendamping pengobatan ISK yang menyegarkan.',
    nutrients: ['Hidrasi optimal', 'Mineral', 'Alkali alami'],
    usage: 'Minum 250 ml air bambu suling 4 kali sehari selama gejala ISK, disertai pengobatan sesuai resep dokter.',
    faqs: [
      { q: 'Apakah air bambu membunuh bakteri ISK?', a: 'Tidak — ISK bakterial butuh antibiotik sesuai resep. Air bambu membantu memperbanyak kencing agar bakteri terbilas.' },
      { q: 'Boleh untuk keputihan juga?', a: 'Keputihan dan ISK berbeda penyebab. Air bambu aman diminum, namun keputihan perlu pemeriksaan khusus.' },
      { q: 'Kapan harus ke dokter?', a: 'Jika demam, nyeri hebat punggung, atau darah di urine — segera. Bisa menandakan infeksi naik ke ginjal.' },
    ],
  },
  {
    slug: 'kencing-nanah',
    name: 'Kencing Nanah & Nyeri Kencing',
    category: 'Ginjal & Urin',
    hook: 'Tradisi Nusantara memanfaatkan air bambu untuk menyejukkan dan melancarkan saluran kencing yang terasa panas.',
    nutrients: ['Alkali alami', 'Hidrasi', 'Mineral'],
    usage: 'Minum 250 ml air bambu suling 3–4 kali sehari saat nyeri kencing, dan tetap periksakan diri untuk diagnosis tepat.',
    faqs: [
      { q: 'Apakah kencing nanah bisa hilang hanya dengan air bambu?', a: 'Tidak. Kencing nanah umumnya infeksi yang butuh pengobatan medis — air bambu hanya menenangkan gejala.' },
      { q: 'Boleh untuk lansia dengan prostat?', a: 'Hidrasi membantu, namun pembesaran prostat butuh penanganan urolog.' },
      { q: 'Harus air bambu suling atau tabib?', a: 'Untuk keamanan konsumsi mandiri, pilih air bambu suling yang telah teruji mutu.' },
    ],
  },
  {
    slug: 'kesehatan-ginjal',
    name: 'Kesehatan Ginjal Jangka Panjang',
    category: 'Ginjal & Urin',
    hook: 'Ginjal adalah filter tubuh — hidrasi mineral berkualitas adalah investasi kesehatan ginjal seumur hidup.',
    nutrients: ['Mineral elektrolit', 'Hidrasi murni', 'Antioksidan'],
    usage: 'Jadikan air bambu suling 1–1,5 L bagian dari 2–2,5 L cairan harian. Kurangi garam, protein berlebih, dan obat anti-nyeri tanpa resep.',
    faqs: [
      { q: 'Aman untuk penyakit ginjal kronis (CKD)?', a: 'Penderita CKD punya batas cairan dan kalium khusus — wajib konsultasi dokter ginjal sebelum menambah cairan apa pun.' },
      { q: 'Apakah air bambu bikin ginjal "bersih"?', a: 'Ginjal bersih dengan hidrasi cukup dan pola hidup sehat — air bambu membantu membuat hidrasi itu lebih mudah dan menarik.' },
      { q: 'Boleh dikonsumsi harian jangka panjang?', a: 'Ya, air bambu suling dirancang untuk konsumsi harian berkelanjutan.' },
    ],
  },

  /* ===== KULIT & KECANTIKAN ===== */
  {
    slug: 'jerawat',
    name: 'Jerawat & Kulit Berminyak',
    category: 'Kulit & Kecantikan',
    hook: 'Beauty from within: hidrasi alkali dan antioksidan air bambu mendukung kulit yang lebih tenang.',
    nutrients: ['Silika organik', 'Antioksidan', 'Klorofil'],
    usage: 'Minum 250 ml air bambu suling 3 kali sehari selama 4 minggu sebagai bagian rutin skincare dari dalam. Kurangi gula dan susu bila memicu.',
    faqs: [
      { q: 'Apakah air bambu bisa dioleskan ke jerawat?', a: 'Tradisional ada yang memakainya sebagai penyejuk. Namun untuk keamanan, gunakan sebagai minuman dan rawat kulit dengan produk tepat.' },
      { q: 'Berapa lama efek pada kulit terlihat?', a: 'Regenerasi kulit ±28 hari — beri waktu 4 minggu konsumsi rutin plus perawatan topikal.' },
      { q: 'Jerawat radang parah boleh?', a: 'Jerawat radang berat butuh dermatolog. Air bambu hanya pendamping gaya hidup.' },
    ],
  },
  {
    slug: 'eksim',
    name: 'Eksim & Kulit Sensitif',
    category: 'Kulit & Kecantikan',
    hook: 'Kulit sehat dimulai dari dalam — hidrasi dan anti-inflamasi alami air bambu mendampingi terapi eksim.',
    nutrients: ['Anti-inflamasi alami', 'Silika', 'Mineral'],
    usage: 'Minum 250 ml air bambu suling 2–3 kali sehari. Jaga kulit dengan pelembap sesuai anjuran dokter kulit.',
    faqs: [
      { q: 'Apakah air bambu mengobati eksim?', a: 'Tidak mengobati — eksim butuh terapi dermatolog. Hidrasi dan nutrisi mendukung fungsi barrier kulit.' },
      { q: 'Boleh untuk bayi dengan eksim?', a: 'Untuk bayi, konsultasikan semua konsumsi ke dokter anak. Air bambu untuk orang dewasa.' },
      { q: 'Makanan apa yang perlu dihindari saat eksim?', a: 'Pemicu berbeda tiap orang — catat makanan yang memperberat, umumnya susu, telur, seafood pada sebagian orang.' },
    ],
  },
  {
    slug: 'gatal-gatal',
    name: 'Gatal-gatal & Biduran',
    category: 'Kulit & Kecantikan',
    hook: 'Penyejuk dari dalam untuk kulit yang mudah gatal — tradisi yang kini didukung pemahaman hidrasi.',
    nutrients: ['Anti-inflamasi', 'Mineral alkali', 'Antioksidan'],
    usage: 'Minum 250 ml air bambu suling 2–3 kali sehari. Hindari makanan pemicu dan mandi air tidak terlalu panas.',
    faqs: [
      { q: 'Biduran berulang boleh minum air bambu?', a: 'Boleh — aman sebagai minuman. Biduran berulang tetap butuh antihistamin sesuai resep.' },
      { q: 'Apakah bisa dioles untuk meredakan gatal?', a: 'Kompres air bersih dingin lebih tepat untuk meredakan. Fokuskan air bambu sebagai minuman.' },
      { q: 'Gatal + sesak napas itu bahaya?', a: 'SANGAT — segera IGD. Bisa anafilaksis.' },
    ],
  },
  {
    slug: 'sariawan',
    name: 'Sariawan & Luka Mulut',
    category: 'Kulit & Kecantikan',
    hook: 'Hidrasi dan mineral untuk mempercepat pemulihan luka kecil di mulut secara alami.',
    nutrients: ['Mineral', 'Anti-inflamasi', 'Hidrasi'],
    usage: 'Minum air bambu suling suhu ruang 200 ml 3 kali sehari; berkumur ringan untuk kenyamanan. Hindari makanan asam-pedas saat luka aktif.',
    faqs: [
      { q: 'Berkumur air bambu membantu?', a: 'Menjaga mulut lembap dan bersih membantu pemulihan. Kumur air garam juga pilihan baik.' },
      { q: 'Sariawan sering kambuh kenapa?', a: 'Cek kekurangan vitamin B12, zat besi, folat, dan stres. Sariawan >2 minggu wajib diperiksa.' },
      { q: 'Dingin atau hangat?', a: 'Suhu ruang paling nyaman; ekstrem dingin/panas mengiritasi luka.' },
    ],
  },
  {
    slug: 'kerontokan-rambut',
    name: 'Kerontokan Rambut',
    category: 'Kulit & Kecantikan',
    hook: 'Silika organik — tertinggi di alam — adalah nutrisi kunci folikel rambut yang kuat.',
    nutrients: ['Silika organik', 'Mineral', 'Asam amino'],
    usage: 'Minum 250 ml air bambu suling 2 kali sehari rutin minimal 3 bulan. Silika mendukung struktur rambut dari dalam.',
    faqs: [
      { q: 'Apakah air bambu menumbuhkan rambut baru?', a: 'Silika mendukung kekuatan dan kualitas helai. Rontok karena hormonal/autoimun butuh dermatolog.' },
      { q: 'Berapa lama hasilnya terlihat?', a: 'Siklus rambut lambat — beri 3–6 bulan konsumsi rutin untuk menilai perubahan.' },
      { q: 'Bisa dicampur minyak kemiri?', a: 'Itu untuk topikal — kombinasikan: silika dari dalam, perawatan minyak dari luar.' },
    ],
  },
  {
    slug: 'kuku-rapuh',
    name: 'Kuku Rapuh & Pecah-pecah',
    category: 'Kulit & Kecantikan',
    hook: 'Kuku kuat butuh silika — dan air bambu adalah sumber silika organik paling kaya di alam.',
    nutrients: ['Silika organik', 'Kalsium', 'Mineral'],
    usage: 'Minum 250 ml air bambu suling 2 kali sehari selama 2–3 bulan. Lindungi kuku dari bahan kimia keras.',
    faqs: [
      { q: 'Berapa lama kuku membaik?', a: 'Kuku tumbuh ±3 mm/bulan — beri 2–3 bulan untuk melihat helai baru yang lebih kuat.' },
      { q: 'Apakah kurang kalsium penyebabnya?', a: 'Bisa, tapi silika sering terlupakan. Air bambu mengisi kekurangan silika yang sulit didapat dari makanan.' },
      { q: 'Kuku jamur boleh minum air bambu?', a: 'Jamur kuku butuh obat antifungal. Air bambu tetap aman sebagai minuman pendamping.' },
    ],
  },
  {
    slug: 'kulit-kusam',
    name: 'Kulit Kusam & Tidak Merata',
    category: 'Kulit & Kecantikan',
    hook: 'Antioksidan polifenol melawan radikal bebas penyebab kusam — pencerah dari dalam.',
    nutrients: ['Antioksidan', 'Klorofil', 'Silika'],
    usage: 'Minum 250 ml air bambu suling 3 kali sehari rutin 4 minggu, kombinasikan tabir surya harian dan tidur cukup.',
    faqs: [
      { q: 'Apa penyebab utama kulit kusam?', a: 'Dehidrasi, kurang tidur, paparan matahari, dan radikal bebas. Air bambu menyasar hidrasi + antioksidan.' },
      { q: 'Berapa lama sebelum kulit lebih cerah?', a: 'Umumnya 3–4 minggu hidrasi konsisten plus perlindungan matahari.' },
      { q: 'Boleh untuk kulit berjerawat juga?', a: 'Boleh — air bambu netral dan lembut untuk semua tipe kulit sebagai minuman.' },
    ],
  },
  {
    slug: 'penuaan-dini',
    name: 'Penuaan Dini & Kerut Halus',
    category: 'Kulit & Kecantikan',
    hook: 'Kolagen butuh silika untuk terbentuk — air bambu adalah "pre-kolagen" paling alami dari alam.',
    nutrients: ['Silika organik', 'Antioksidan polifenol', 'Mineral'],
    usage: 'Minum 250 ml air bambu suling 2–3 kali sehari sebagai bagian anti-aging: sunscreen, tidur 7 jam, dan antioksidan dari makanan.',
    faqs: [
      { q: 'Apa hubungan silika dan kerut?', a: 'Silika adalah kofaktor sintesis kolagen. Kolagen kulit yang cukup = kulit kenyal, kerut tertunda.' },
      { q: 'Lebih baik daripada suplemen kolagen?', a: 'Berbeda pendekatan — suplemen memberi kolagen siap, air bambu memberi silika pembangunnya. Keduanya bisa dikombinasikan.' },
      { q: 'Berapa lama sampai terlihat?', a: 'Peremajaan kulit butuh waktu — 8–12 minggu konsumsi rutin memberi hasil yang lebih jelas.' },
    ],
  },
  {
    slug: 'flek-hitam',
    name: 'Flek Hitam & Bekas Jerawat',
    category: 'Kulit & Kecantikan',
    hook: 'Antioksidan air bambu mendukung regenerasi sel kulit dan memudarkan tanda-tanda peradangan lama.',
    nutrients: ['Antioksidan', 'Vitamin-mineral alami', 'Silika'],
    usage: 'Minum 250 ml air bambu suling 3 kali sehari rutin 8 minggu. Selalu pakai sunscreen — flek menggelap tanpa proteksi matahari.',
    faqs: [
      { q: 'Flek bisa hilang total?', a: 'Flek permukaan bisa memudar dalam berbulan-bulan. Flek dalam (melasma) butuh dermatolog.' },
      { q: 'Apakah air bambu bisa menggosokkan? ', a: 'Gunakan sebagai minuman. Untuk topikal, pilih produk yang teruji.' },
      { q: 'Kapan hasil mulai terlihat?', a: 'Regenerasi kulit 4–8 minggu per siklus — konsistensi adalah kuncinya.' },
    ],
  },

  /* ===== SENDI & OTOT ===== */
  {
    slug: 'nyeri-sendi',
    name: 'Nyeri Sendi & Lutut',
    category: 'Sendi & Otot',
    hook: 'Silika mendukung jaringan ikat dan kartilago — nutrisi fundamental untuk sendi yang sehat.',
    nutrients: ['Silika organik', 'Anti-inflamasi', 'Mineral'],
    usage: 'Minum 250 ml air bambu suling 2–3 kali sehari rutin. Imbangi dengan kontrol berat badan dan penguatan otot paha.',
    faqs: [
      { q: 'Apakah air bambu melumasi sendi?', a: 'Analogi saja — yang benar, silika mendukung jaringan ikat. Nyeri sendi berat/trauma tetap butuh ortopedi.' },
      { q: 'Berapa lama untuk merasakan perbaikan?', a: 'Jaringan ikat pulih lambat — beri 2–3 bulan rutin. Nyeri akut sesaat setelah olahraga normal.' },
      { q: 'Boleh untuk rematik (RA)?', a: 'Sebagai minuman aman, namun RA adalah autoimun yang wajib reumatologi.' },
    ],
  },
  {
    slug: 'artritis',
    name: 'Artritis & Kaku Sendi Pagi',
    category: 'Sendi & Otot',
    hook: 'Anti-inflamasi alami air bambu menjadi pendamping hangat bagi sendi yang kaku di pagi hari.',
    nutrients: ['Anti-inflamasi flavonoid', 'Silika', 'Antioksidan'],
    usage: 'Minum 250 ml air bambu suling suhu hangat/ruang 3 kali sehari, rutin. Gerak ringan pagi membantu sendi tetap luwes.',
    faqs: [
      { q: 'Apakah air bambu menyembuhkan artritis?', a: 'Tidak — artritis kronis butuh pengelolaan medis. Air bambu mendukung dengan nutrisi jaringan dan antioksidan.' },
      { q: 'Hangat atau dingin lebih baik diminum?', a: 'Untuk kaku pagi, suhu ruang atau hangat lebih menyenangkan. Ini preferensi, bukan aturan.' },
      { q: 'Sendi bengkak merah panas itu?', a: 'Segera ke dokter — bisa infeksi sendi (septik) yang darurat medis.' },
    ],
  },
  {
    slug: 'osteoporosis',
    name: 'Osteoporosis & Kepadatan Tulang',
    category: 'Sendi & Otot',
    hook: 'Kalsium bukan satu-satunya: silika air bambu adalah kofaktor mineralisasi tulang yang sering dilupakan.',
    nutrients: ['Silika organik', 'Kalsium', 'Magnesium'],
    usage: 'Minum 250 ml air bambu suling 2–3 kali sehari, kombinasikan kalsium-vitamin D, latihan beban ringan, dan hindari rokok.',
    faqs: [
      { q: 'Apakah air bambu mengobati osteoporosis?', a: 'Osteoporosis butuh terapi dokter (bisfosfonat dll). Air bambu memberi silika yang mendukung kualitas matriks tulang.' },
      { q: 'Boleh untuk lansia 70+?', a: 'Boleh — aman dan lembut. Koordinasikan dengan obat lansia yang sudah dikonsumsi.' },
      { q: 'Bisakah osteoporosis dipulihkan?', a: 'Kepadatan bisa ditingkatkan dengan terapi + nutrisi. BMD rutin memantau kemajuan.' },
    ],
  },
  {
    slug: 'nyeri-otot',
    name: 'Nyeri Otot & Pegal-pegal',
    category: 'Sendi & Otot',
    hook: 'Setelah aktivitas berat, mineral elektrolit air bambu membantu otot pulih lebih cepat.',
    nutrients: ['Magnesium', 'Kalium', 'Hidrasi'],
    usage: 'Minum 300 ml air bambu suling setelah aktivitas berat dan 200 ml pagi berikutnya. Kompres hangat dan peregangan lembut membantu.',
    faqs: [
      { q: 'Pegal karena kerja fisik, boleh?', a: 'Sangat cocok — rehidrasi + mineral adalah dasar pemulihan otot.' },
      { q: 'Nyeri otot terus-menerus berhari-hari?', a: 'Jika >1 minggu atau disertai lemah/berat kencing, periksa — bisa miopati atau elektrolit.' },
      { q: 'Apakah magnesium air bambu cukup?', a: 'Sebagai pendamping ya; kebutuhan harian penuh tetap dari makanan (pisang, kacang, sayur hijau).' },
    ],
  },
  {
    slug: 'kram-kaki',
    name: 'Kram Kaki Malam',
    category: 'Sendi & Otot',
    hook: 'Kram malam seringkali cerita elektrolit — kalium dan magnesium air bambu datang membantu.',
    nutrients: ['Kalium', 'Magnesium', 'Hidrasi'],
    usage: 'Minum 250 ml air bambu suling menjelang tidur secara rutin. Regangkan betis sebelum tidur dan pastikan selimut tidak terlalu ketat.',
    faqs: [
      { q: 'Kenapa kram sering di malam hari?', a: 'Dehidrasi ringan, elektrolit kurang, posisi kaki, dan sirkulasi. Air bambu menjawab dua penyebab pertama.' },
      { q: 'Berapa lama sampai kram berkurang?', a: 'Umumnya 1–2 minggu hidrasi rutin. Kram hebat berulang + bengkak kaki perlu pemeriksaan pembuluh vena.' },
      { q: 'Bisa untuk ibu hamil yang sering kram?', a: 'Kram hamil umum karena kebutuhan mineral naik — konsumsi apa pun saat hamil diskusikan dengan bidan/dokter.' },
    ],
  },
  {
    slug: 'kaku-leher',
    name: 'Kaku Leher & Pegal Punggung',
    category: 'Sendi & Otot',
    hook: 'Pegal karena posisi kerja butuh dua hal: gerak yang benar dan nutrisi jaringan yang cukup.',
    nutrients: ['Silika', 'Magnesium', 'Anti-inflamasi'],
    usage: 'Minum 250 ml air bambu suling 2–3 kali sehari. Terapkan peregangan leher tiap 1 jam kerja dan atur posisi monitor.',
    faqs: [
      { q: 'Air bambu mengurangi pegal?', a: 'Mineral dan hidrasi mendukung fungsi otot; pegal kronis butuh perbaikan ergonomi.' },
      { q: 'Kaku leher + demam itu bahaya?', a: 'Segera IGD — bisa meningitis.' },
      { q: 'Berapa lama ergonomi membaik?', a: 'Gejala ringan membaik dalam 1–2 minggu dengan koreksi posisi + hidrasi.' },
    ],
  },

  /* ===== SARAF & MENTAL ===== */
  {
    slug: 'insomnia',
    name: 'Insomnia & Sulit Tidur',
    category: 'Saraf & Mental',
    hook: 'Mineral magnesium dikenal menenangkan sistem saraf — air bambu menjadi ritual malam yang menenangkan.',
    nutrients: ['Magnesium', 'Mineral tenang', 'Nol kafein'],
    usage: 'Minum 200 ml air bambu suling suhu hangat 1 jam sebelum tidur sebagai ritual penenang. Hindari layar dan kafein sore.',
    faqs: [
      { q: 'Apakah air bambu bikin mengantuk?', a: 'Tidak seperti obat tidur — ia membantu dengan mineral tenang dan ritual yang menandai tubuh untuk istirahat.' },
      { q: 'Berapa lama tidur membaik?', a: 'Ritme tidur biasanya membaik dalam 1–2 minggu kombinasi ritual + kebersihan tidur.' },
      { q: 'Insomnia berbulan-bulan boleh?', a: 'Insomnia kronis butuh evaluasi dokter — bisa terkait stres, apnea, atau hormonal.' },
    ],
  },
  {
    slug: 'stres',
    name: 'Stres & Kejenuhan',
    category: 'Saraf & Mental',
    hook: 'Tubuh terhidrasi baik lebih tahan terhadap tekanan — air bambu adalah pelarian sehat dari minuman manis saat stres.',
    nutrients: ['Magnesium', 'Antioksidan', 'Elektrolit'],
    usage: 'Saat stres, ganti kebiasaan ngemil/manis dengan 200 ml air bambu suling. Tambahkan napas dalam 4-7-8 dan jalan ringan.',
    faqs: [
      { q: 'Air bambu mengurangi stres?', a: 'Secara langsung tidak, namun hidrasi + mengganti kafein/gula berlebih menstabilkan energi dan suasana hati.' },
      { q: 'Boleh untuk panik ringan?', a: 'Minum air perlahan membantu ground. Gangguan panik butuh penanganan profesional.' },
      { q: 'Kapan harus cari bantuan psikolog?', a: 'Jika stres mengganggu kerja, tidur, relasi >2 minggu — itu sinyal wajar mencari bantuan.' },
    ],
  },
  {
    slug: 'mudah-lelah',
    name: 'Mudah Lelah & Kurang Energi',
    category: 'Saraf & Mental',
    hook: 'Lelah yang hilang setelah hidrasi optimal? Banyak orang hanya kurang cairan mineral — bukan kurang kopi.',
    nutrients: ['Elektrolit', 'Asam amino', 'Antioksidan'],
    usage: 'Mulai hari dengan 250 ml air bambu suling, ulangi 2–3 kali. Cek juga tidur, zat besi, dan tiroid bila lelah menetap.',
    faqs: [
      { q: 'Kenapa dehidrasi bikin lelah?', a: 'Volume darah turun, jantung kerja lebih keras, otot kekurangan elektrolit — energi merosot.' },
      { q: 'Berapa cepat terasa segar lagi?', a: 'Rehidrasi memberi efek dalam 20–45 menit. Lelah kronis tetap perlu skrining medis.' },
      { q: 'Lebih baik dari kopi?', a: 'Berbeda fungsi — kopistimulan jangka pendek, hidrasi adalah fondasi energi sepanjang hari.' },
    ],
  },
  {
    slug: 'migrain',
    name: 'Migrain & Sakit Kepala',
    category: 'Saraf & Mental',
    hook: 'Dehidrasi adalah pemicu migrain paling umum — air bambu membantu memangkas salah satu trigger terbesar.',
    nutrients: ['Magnesium', 'Elektrolit', 'Hidrasi murni'],
    usage: 'Minum 250 ml air bambu suling saat aura/gejala awal, dan 200 ml tiap 3 jam sebagai preventif hidrasi. Catat pemicu pribadi Anda.',
    faqs: [
      { q: 'Apakah hidrasi benar-benar membantu migrain?', a: 'Ya — dehidrasi adalah pemicu terdokumentasi. Magnesium juga dikenal dalam pencegahan migrain.' },
      { q: 'Saat migrain sedang nyeri, boleh?', a: 'Boleh dan dianjurkan, plus obat sesuai resep dan istirahat di ruang gelap.' },
      { q: 'Migrain >72 jam itu?', a: 'Status migrainosus — segera ke dokter.' },
    ],
  },
  {
    slug: 'vertigo',
    name: 'Vertigo & Pusing',
    category: 'Saraf & Mental',
    hook: 'Pusing karena dehidrasi dan tekanan darah rendah ortostatik mereda dengan hidrasi mineral yang tepat.',
    nutrients: ['Elektrolit', 'Mineral', 'Hidrasi'],
    usage: 'Minum 250 ml air bambu suling perlahan saat pusing ringan muncul. Bangun dari duduk/berbaring secara bertahap.',
    faqs: [
      { q: 'Semua pusing hilang dengan air?', a: 'Hanya pusing tipe dehidrasi/ortostatik. Vertigo putaran (BPPV) butuh manuver Epley oleh terapis.' },
      { q: 'Pusing + bicara pelo + lemah satu sisi?', a: 'SEGERA IGD — bisa stroke.' },
      { q: 'Berapa sering boleh minum saat vertigo?', a: 'Rutin 3–4 kali sehari sebagai fondasi; tambah saat gejala.' },
    ],
  },
  {
    slug: 'fokus-konsentrasi',
    name: 'Fokus & Konsentrasi Kerja',
    category: 'Saraf & Mental',
    hook: 'Otak 75% air — penurunan fokus siang hari sering hanyalah dehidrasi ringan yang diabaikan.',
    nutrients: ['Hidrasi otak', 'Elektrolit', 'Antioksidan'],
    usage: 'Sediakan botol 600 ml air bambu suling di meja kerja — habiskan sebelum makan siang, isi ulang untuk sore.',
    faqs: [
      { q: 'Bukti dehidrasi menurunkan fokus?', a: 'Riset menunjukkan penurunan cairan 1–2% sudah mengganggu atensi dan memori kerja.' },
      { q: 'Lebih baik dari kopi sore?', a: 'Kopi sore bisa ganggu tidur. Air bambu memberi kewaspadaan tanpa bahaya kafein.' },
      { q: 'Berapa botol ideal sehari?', a: '2–3 botol 600 ml sebagai bagian total cairan harian — fleksibel sesuai aktivitas.' },
    ],
  },

  /* ===== IMUN & PEMULIHAN ===== */
  {
    slug: 'daya-tahan-tubuh-lemah',
    name: 'Daya Tahan Tubuh Lemah',
    category: 'Imun & Pemulihan',
    hook: 'Imun yang kuat dibangun dari fondasi: hidrasi, antioksidan, tidur, dan gizi — air bambu mengunci fondasi pertama.',
    nutrients: ['Antioksidan', 'Asam amino', 'Mineral esensial'],
    usage: 'Minum 250 ml air bambu suling 3 kali sehari, plus sayur-buah warna-warni, tidur 7–8 jam, dan aktivitas fisik rutin.',
    faqs: [
      { q: 'Apakah air bambu mencegah sakit?', a: 'Membangun imun butuh kombinasi total. Antioksidan air bambu adalah salah satu pilar pendukung.' },
      { q: 'Boleh untuk anak-anak?', a: 'Untuk anak, konsultasikan dulu ke dokter anak, apalagi usia di bawah 5 tahun.' },
      { q: 'Mudah sakit terus itu apa?', a: 'Skrining bisa menunjukkan defisiensi (zinc, vit D) atau kondisi lain — periksa bila sering infeksi.' },
    ],
  },
  {
    slug: 'pasca-sakit',
    name: 'Pemulihan Pasca Sakit',
    category: 'Imun & Pemulihan',
    hook: 'Setelah sakit, tubuh butuh rehidrasi dan mineral untuk membangun ulang energi secara lembut.',
    nutrients: ['Elektrolit', 'Asam amino', 'Mineral'],
    usage: 'Selama 1–2 minggu pemulihan, minum 250 ml air bambu suling 3 kali sehari dengan makanan bergizi yang mudah dicerna.',
    faqs: [
      { q: 'Baru pulang dari rumah sakit boleh?', a: 'Umumnya boleh, namun ikuti instruksi cairan khusus bila ada (misal pasca operasi/ginjal).' },
      { q: 'Apa makanan pendamping terbaik?', a: 'Protein cukup, sayur-buah, dan karbohidrat kompleks. Hindari instan dan manis berlebih.' },
      { q: 'Kapan boleh olahraga lagi?', a: 'Naik bertahap mulai jalan ringan; dengarkan tubuh dan konsultasi bila ada kondisi khusus.' },
    ],
  },
  {
    slug: 'pasca-operasi',
    name: 'Pemulihan Pasca Operasi',
    category: 'Imun & Pemulihan',
    hook: 'Luka butuh kolagen, kolagen butuh silika — air bambu mendukung penyembuhan luka dari dalam.',
    nutrients: ['Silika organik', 'Asam amino', 'Mineral'],
    usage: 'Setelah diperbolehkan dokter minum normal, 250 ml air bambu suling 2–3 kali sehari mendukung fase penyembuhan jaringan.',
    faqs: [
      { q: 'Boleh langsung setelah operasi?', a: 'Ikuti protokol rumah sakit — mulai cairan sesuai izin tim medis Anda.' },
      { q: 'Apakah mempercepat sembuh luka?', a: 'Silika adalah kofaktor kolagen. Nutrisi total (protein, vit C, zinc) tetap panggung utama.' },
      { q: 'Obat antibiotik bersamaan boleh?', a: 'Beri jarak 30–60 menit dari obat agar penyerapan obat tidak terganggu.' },
    ],
  },
  {
    slug: 'luka-lambat-sembuh',
    name: 'Luka Lama Sembuh',
    category: 'Imun & Pemulihan',
    hook: 'Bila luka lambat menutup, tubuh mungkin kekurangan bahan bangunan — silika dan asam amino air bambu membantu.',
    nutrients: ['Silika', 'Asam amino esensial', 'Zinc-mineral alami'],
    usage: 'Minum 250 ml air bambu suling 3 kali sehari + protein cukup tiap makan. Rawat luka sesuai teknik bersih medis.',
    faqs: [
      { q: 'Luka >2 minggu tidak sembuh?', a: 'Wajib periksa — bisa infeksi, diabetes, atau sirkulasi buruk. Nutrisi saja tidak cukup.' },
      { q: 'Diabetik dengan luka kaki?', a: 'SEGERA ke klinik luka/dokter. Penanganan spesial wajib.' },
      { q: 'Suplemen apa selain air bambu?', a: 'Protein, vitamin C, zinc adalah trio klasik pemulihan luka — dari makanan dulu.' },
    ],
  },
  {
    slug: 'kurang-minum-dehidrasi',
    name: 'Kebiasaan Kurang Minum',
    category: 'Imun & Pemulihan',
    hook: 'Air putih terasa hambar? Air bambu hadir dengan rasa segar alami — membuat hidrasi jadi kebiasaan yang menyenangkan.',
    nutrients: ['Hidrasi optimal', 'Mineral elektrolit', 'Rasa alami'],
    usage: 'Ganti target: 1 galon kecil 19 L untuk keluarga per minggu. Simpan botol 600 ml di tempat yang selalu terlihat — meja, tas, mobil.',
    faqs: [
      { q: 'Berapa sebenarnya kebutuhan minum harian?', a: '±2 L (8 gelas) untuk dewasa rata-rata, lebih saat panas/olahraga. Urine jernih muda adalah indikator bagus.' },
      { q: 'Air bambu lebih baik dari air putih?', a: 'Untuk yang sulit minum air polos — ya, karena rasa segarnya membuat porsi tercapai. Keduanya tetap hidrasi sehat.' },
      { q: 'Tanda-tanda dehidrasi ringan?', a: 'Mulut kering, urine kuning pekat, pusing ringan, lelah tanpa sebab.' },
    ],
  },

  /* ===== WANITA & HORMONAL ===== */
  {
    slug: 'nyeri-haid',
    name: 'Nyeri Haid & Menstruasi',
    category: 'Wanita & Hormonal',
    hook: 'Warisan tabib Nusantara: air bambu untuk meredakan nyeri haid — penyejuk yang menenangkan.',
    nutrients: ['Anti-inflamasi', 'Mineral magnesium', 'Sifat menyejukkan'],
    usage: 'Mulai 2–3 hari sebelum haid: 200 ml air bambu suling 2 kali sehari, suhu ruang/hangat. Kompres hangat perut dan hindari dingin ekstrem.',
    faqs: [
      { q: 'Apakah benar air bambu untuk nyeri haid?', a: 'Ini praktik tradisional yang turun-temurun. Efek menenangannya membantu sebagian wanita; nyeri hebat yang mengganggu aktivitas tetap perlu evaluasi (endometriosis dll).' },
      { q: 'Boleh saat haid deras?', a: 'Tradisi memakainya justru saat perdarahan berlebih. Deras sangat berlebihan/berhari-hari tetap perlu dokter.' },
      { q: 'Dingin atau hangat saat haid?', a: 'Banyak wanita lebih nyaman hangat/suhu ruang — pilih yang membuat nyaman.' },
    ],
  },
  {
    slug: 'haid-tidak-teratur',
    name: 'Haid Tidak Teratur',
    category: 'Wanita & Hormonal',
    hook: 'Hidrasi, gizi, dan stres adalah tiga penyeimbang hormonal dasar — air bambu menopang pilar pertama.',
    nutrients: ['Mineral', 'Antioksidan', 'Hidrasi optimal'],
    usage: 'Minum 250 ml air bambu suling 2–3 kali sehari sebagai bagian pola hidup penyeimbang hormonal: tidur teratur, gizi cukup, stres terkelola.',
    faqs: [
      { q: 'Bisakah air bambu menata haid?', a: 'Tidak secara langsung — hormonal kompleks. Namun gaya hidup sehat keseluruhan (termasuk hidrasi) adalah fondasinya.' },
      { q: 'Haid bolong 3 bulan itu?', a: 'Periksa — bisa PCOS, tiroid, atau kehamilan. Jangan tunda evaluasi.' },
      { q: 'Boleh saat program bayi tabung?', a: 'Sebagai minuman aman ya; koordinasikan semua konsumsi dengan dokter kandungan.' },
    ],
  },
  {
    slug: 'keputihan',
    name: 'Keputihan Berlebih',
    category: 'Wanita & Hormonal',
    hook: 'Tubuh yang terhidrasi dan alkali mendukung keseimbangan flora alami kewanitaan.',
    nutrients: ['Alkali alami', 'Hidrasi', 'Antioksidan'],
    usage: 'Minum 250 ml air bambu suling 3 kali sehari. Jaga kebersihan organ intim dengan sabar khusus, hindari douching berlebihan.',
    faqs: [
      { q: 'Apakah air bambu mengobati keputihan?', a: 'Tidak — keputihan infeksi (kandida, bakterial) butuh obat spesifik. Air bambu mendukung hidrasi umum.' },
      { q: 'Keputihan seperti tahu berpotong?', a: 'Gejala khas kandidiasis — periksa ke dokter kandungan untuk obat tepat.' },
      { q: 'Kapan keputihan normal?', a: 'Cairan jernih/putih susu tanpa bau, jumlah sedikit, tidak gatal adalah variasi normal siklus.' },
    ],
  },
  {
    slug: 'menopause',
    name: 'Menopause & Wanita Matang',
    category: 'Wanita & Hormonal',
    hook: 'Lonjakan panas (hot flash) mereda dengan penyejuk alami — air bambu menjadi teman wanita matang yang elegan.',
    nutrients: ['Silika untuk tulang', 'Mineral', 'Sifat menyejukkan'],
    usage: 'Minum 250 ml air bambu suling 3 kali sehari — penting juga menopang tulang pasca-menopause dengan silika + kalsium + vit D.',
    faqs: [
      { q: 'Air bambu mengurangi hot flash?', a: 'Efek menyejukkan membantu kenyamanan. Keluhan berat bisa dibahas HRT dengan dokter.' },
      { q: 'Kenapa tulang rentan pasca menopause?', a: 'Estrogen turun → kepadatan tulang turun. Silika + kalsium + latihan beban adalah trilogi pencegahan.' },
      { q: 'Boleh bersama obat menopause?', a: 'Boleh sebagai minuman, beri jarak dari pil dan laporkan semua suplemen ke dokter.' },
    ],
  },
  {
    slug: 'alergi',
    name: 'Alergi & Hidung Tersumbat Musiman',
    category: 'Pernapasan & Demam',
    hook: 'Antioksidan dan hidrasi lembut air bambu mendampingi tubuh Anda melewati musim alergi dengan lebih tenang.',
    nutrients: ['Antioksidan polifenol', 'Anti-inflamasi alami', 'Hidrasi optimal'],
    usage: 'Selama musim alergi, minum 250 ml air bambu suling 3 kali sehari untuk mendukung fungsi tubuh — hindari pemicu alergi yang sudah Anda kenal.',
    faqs: [
      { q: 'Apakah air bambu menyembuhkan alergi?', a: 'Tidak — alergi berkaitan dengan respons imun spesifik yang butuh penanganan dokter. Air bambu mendukung kondisi umum tubuh lewat hidrasi dan antioksidan.' },
      { q: 'Boleh bersama obat antihistamin?', a: 'Boleh sebagai minuman biasa; beri jarak 30 menit dari obat agar penyerapan optimal.' },
      { q: 'Apa pemicu alergi paling umum?', a: 'Debu, bulu hewan, pollen, dan makanan tertentu. Catat polanya — penghindaran pemicu adalah strategi utama.' },
    ],
  },
  {
    slug: 'hidung-berdarah',
    name: 'Hidung Berdarah (Epistaksis)',
    category: 'Pernapasan & Demam',
    hook: 'Tradisi menyejukkan dari dalam — air bambu mendampingi pencegahan hidung berdarah akibat udara kering dan panas dalam.',
    nutrients: ['Sifat menyejukkan', 'Hidrasi mukosa', 'Vitamin-mineral alami'],
    usage: 'Untuk pencegahan saat tubuh terasa panas: 250 ml air bambu suling 2 kali sehari + jaga lembap udara ruangan. Saat berdarah: duduk, condongkan kepala ke depan, kompres dingin batang hidung 10 menit.',
    faqs: [
      { q: 'Apakah minum air bambu menghentikan hidung berdarah?', a: 'Tidak langsung — penanganan saat epistaksis adalah kompres dingin dan tekanan lembut. Air bambu membantu pencegahan lewat hidrasi mukosa.' },
      { q: 'Hidung berdarah sering (lebih dari 2x/minggu)?', a: 'Periksa ke dokter THT — bisa ada polip, gangguan pembekuan, atau tekanan darah.' },
      { q: 'Boleh untuk anak yang sering panas dalam?', a: 'Untuk anak, konsultasikan dulu ke dokter anak; jaga hidrasi anak dengan cara apa pun yang ia terima.' },
    ],
  },
  {
    slug: 'gusi-berdarah',
    name: 'Gusi Berdarah & Radang Gusi',
    category: 'Imun & Pemulihan',
    hook: 'Gusi sehat butuh hidrasi, mineral, dan kontrol plak — air bambu menjadi pendamping kebersihan mulut harian.',
    nutrients: ['Mineral esensial', 'Anti-inflamasi', 'Antioksidan'],
    usage: 'Minum 250 ml air bambu suling 2–3 kali sehari, disertai sikat gigi 2x sehari dan pembersihan sela gigi. Kumur air garam hangat membantu meredakan radang.',
    faqs: [
      { q: 'Apakah air bambu menyembuhkan radang gusi?', a: 'Gingivitis butuh kontrol plak dan pembersihan karang gigi oleh dokter gigi. Air bambu mendukung hidrasi dan kesehatan umum mulut.' },
      { q: 'Gusi berdarah terus itu kurang vitamin apa?', a: 'Umumnya vitamin C. Periksa juga teknik menyikat — terlalu keras bisa melukai gusi.' },
      { q: 'Boleh digunakan sebagai kumur?', a: 'Berkumur air bambu suling aman untuk kenyamanan; kumur air garam tetap pilihan dengan bukti lebih kuat.' },
    ],
  },
  {
    slug: 'kelelahan-mata',
    name: 'Mata Lelah & Rabun Senja',
    category: 'Saraf & Mental',
    hook: 'Pengguna layar sehari penuh — hidrasi dan antioksidan air bambu mendukung kesehatan mata dari dalam.',
    nutrients: ['Antioksidan', 'Hidrasi optimal', 'Mineral'],
    usage: 'Minum 250 ml air bambu suling 2–3 kali sehari, terapkan aturan 20-20-20 (tiap 20 menit, pandang 6 meter selama 20 detik), dan kedip sadar saat menatap layar.',
    faqs: [
      { q: 'Apakah air bambu mengobati rabun senja?', a: 'Rabun senja berkaitan dengan vitamin A dan kondisi retina — periksa ke dokter mata. Air bambu mendukung hidrasi umum tubuh.' },
      { q: 'Mata kering karena layar, membantu?', a: 'Dehidrasi memperberat mata kering. Hidrasi cukup + tetes air mata buatan sesuai anjuran adalah kombinasi yang tepat.' },
      { q: 'Kapan mata lelah jadi masalah serius?', a: 'Bila disertai penglihatan ganda, kilatan cahaya, atau bayangan — segera ke dokter mata.' },
    ],
  },
  {
    slug: 'kesehatan-jantung',
    name: 'Kesehatan Jantung Jangka Panjang',
    category: 'Jantung & Darah',
    hook: 'Jantung Anda bekerja 100.000 detak per hari — flavonoid dan polifenol air bambu adalah teman perlindungan jangka panjangnya.',
    nutrients: ['Flavonoid', 'Polifenol', 'Kalium'],
    usage: 'Jadikan 250 ml air bambu suling 2–3 kali sehari bagian dari pola hidup kardiosehat: olahraga 150 menit/minggu, sayur-buah, tidur cukup, dan hindari rokok.',
    faqs: [
      { q: 'Apakah air bambu mencegah serangan jantung?', a: 'Tidak ada minuman yang bisa mengklaim itu. Antioksidan air bambu mendukung kesehatan pembuluh darah secara umum — pencegahan sejati adalah pola hidup dan kontrol medis rutin.' },
      { q: 'Penderita gagal jantung boleh?', a: 'Penderita gagal jantung punya batas cairan ketat dari dokter — ikuti angka yang ditetapkan, termasuk untuk air bambu.' },
      { q: 'Tanda jantung sehat di usia 40+?', a: 'Tekanan darah normal, kolesterol terkendali, tidak mudah sesak saat aktivitas — cek kesehatan tahunan adalah investasi terbaik.' },
    ],
  },
  {
    slug: 'program-kehamilan',
    name: 'Persiapan & Masa Hamil',
    category: 'Wanita & Hormonal',
    hook: 'Hidrasi mineral lembut mendampingi masa hamil — selalu dengan izin dan arahan bidan/dokter kandungan.',
    nutrients: ['Mineral elektrolit', 'Silika', 'Hidrasi murni'],
    usage: 'Bila dokter mengizinkan, 250 ml air bambu suling 2–3 kali sehari membantu memenuhi kebutuhan cairan yang naik saat hamil.',
    faqs: [
      { q: 'Aman untuk ibu hamil?', a: 'Air bambu suling adalah minuman — umumnya aman, namun SELALU konfirmasi ke bidan/dokter kandungan Anda.' },
      { q: 'Apa manfaatnya saat hamil?', a: 'Membantu memenuhi volume cairan yang meningkat, menyegarkan, dan mengganti minuman manis.' },
      { q: 'Boleh air bambu tabib (mentah) saat hamil?', a: 'Pilih yang suling — keamanan mikrobiologi lebih terjamin. Sadapan mentah hanya sesuai anjuran terapis berpengalaman.' },
    ],
  },
  {
    slug: 'pemulihan-melahirkan',
    name: 'Pemulihan Pasca Melahirkan',
    category: 'Wanita & Hormonal',
    hook: 'Tradisi nifas memakai air bambu untuk pemulihan — pendamping lembut ibu yang baru melahirkan.',
    nutrients: ['Mineral', 'Asam amino', 'Anti-inflamasi'],
    usage: 'Selama masa nifas (dengan izin tenaga kesehatan), 250 ml air bambu suling 2 kali sehari mendampingi konsumsi gizi ibu menyusui.',
    faqs: [
      { q: 'Berpengaruh ke ASI?', a: 'Hidrasi ibu adalah fondasi produksi ASI. Air bambu membantu memenuhi cairan tanpa gula berlebih.' },
      { q: 'Boleh saat nifas + sekar?', a: 'Tradisi memakainya di masa nifas. Konfirmasi ke bidan yang menangani Anda untuk kondisi spesifik.' },
      { q: 'Bunda cesar boleh?', a: 'Setelah diperbolehkan minum normal oleh tim medis, boleh sebagai bagian cairan harian.' },
    ],
  },
];

export const CONDITION_CATEGORIES: ConditionCategory[] = [
  'Pernapasan & Demam',
  'Pencernaan & Metabolik',
  'Jantung & Darah',
  'Ginjal & Urin',
  'Kulit & Kecantikan',
  'Sendi & Otot',
  'Saraf & Mental',
  'Imun & Pemulihan',
  'Wanita & Hormonal',
];

export function findCondition(slug: string): ConditionData | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}

export function conditionsByCategory(cat: ConditionCategory): ConditionData[] {
  return CONDITIONS.filter((c) => c.category === cat);
}

export const DISCLAIMER_TEXT = DISCLAIMER;

/**
 * DATA KOTA & KABUPATEN INDONESIA — 38 PROVINSI
 * Sumber pemetaan: pembagian administratif Indonesia pasca pemekaran Papua (2022).
 * Dipakai untuk halaman programatik SEO: #/kota/{slug} — "Air Bambu di {Kota}".
 */

export type RegionName =
  | 'Sumatera'
  | 'Jawa'
  | 'Bali & Nusa Tenggara'
  | 'Kalimantan'
  | 'Sulawesi'
  | 'Maluku & Papua';

export type ProvinceData = {
  iso: string;
  name: string;
  region: RegionName;
  cities: string[];
};

export const ETA_BY_REGION: Record<RegionName, string> = {
  Sumatera: '2–5 hari kerja',
  Jawa: '1–3 hari kerja',
  'Bali & Nusa Tenggara': '3–5 hari kerja',
  Kalimantan: '3–6 hari kerja',
  Sulawesi: '4–6 hari kerja',
  'Maluku & Papua': '5–8 hari kerja',
};

export const PROVINCES: ProvinceData[] = [
  {
    iso: 'ID-AC', name: 'Aceh', region: 'Sumatera',
    cities: ['Banda Aceh', 'Sabang', 'Lhokseumawe', 'Langsa', 'Sigli', 'Bireuen', 'Lhoksukon', 'Jantho', 'Idi Rayeuk', 'Calang', 'Meulaboh', 'Tapaktuan', 'Blangpidie', 'Singkil', 'Takengon', 'Kutacane', 'Meureudu'],
  },
  {
    iso: 'ID-SU', name: 'Sumatera Utara', region: 'Sumatera',
    cities: ['Medan', 'Binjai', 'Pematangsiantar', 'Tebing Tinggi', 'Sibolga', 'Padang Sidempuan', 'Gunungsitoli', 'Kisaran', 'Rantau Prapat', 'Stabat', 'Kabanjahe', 'Balige', 'Tarutung', 'Sipirok', 'Kotapinang', 'Tanjungbalai', 'Sidikalang', 'Dolok Sanggul', 'Sibuhuan', 'Teluk Dalam', 'Parapat', 'Porsea', 'Aek Kanopan'],
  },
  {
    iso: 'ID-SB', name: 'Sumatera Barat', region: 'Sumatera',
    cities: ['Padang', 'Bukittinggi', 'Payakumbuh', 'Pariaman', 'Sawahlunto', 'Solok', 'Padang Panjang', 'Lubuk Basung', 'Batusangkar', 'Painan', 'Sijunjung', 'Tua Pejat', 'Lubuk Sikaping', 'Simpang Ampek', 'Pasaman'],
  },
  {
    iso: 'ID-RI', name: 'Riau', region: 'Sumatera',
    cities: ['Pekanbaru', 'Dumai', 'Bangkinang', 'Bengkalis', 'Bagan Siapi-api', 'Pasir Pengaraian', 'Pangkalan Kerinci', 'Rengat', 'Tembilahan', 'Teluk Kuantan', 'Selat Panjang', 'Perawang', 'Duri', 'Siak Sri Indrapura'],
  },
  {
    iso: 'ID-KR', name: 'Kepulauan Riau', region: 'Sumatera',
    cities: ['Batam', 'Tanjung Pinang', 'Tanjung Balai Karimun', 'Ranai', 'Tarempa', 'Daik', 'Galang', 'Kijang'],
  },
  {
    iso: 'ID-JA', name: 'Jambi', region: 'Sumatera',
    cities: ['Jambi', 'Sungai Penuh', 'Muara Tebo', 'Muara Bungo', 'Sarolangun', 'Bangko', 'Kuala Tungkal', 'Muara Sabak', 'Kerinci'],
  },
  {
    iso: 'ID-BE', name: 'Bengkulu', region: 'Sumatera',
    cities: ['Bengkulu', 'Argamakmur', 'Manna', 'Pagar Alam', 'Curup', 'Bintuhan', 'Muko-muko', 'Lais', 'Karang Tinggi'],
  },
  {
    iso: 'ID-SS', name: 'Sumatera Selatan', region: 'Sumatera',
    cities: ['Palembang', 'Prabumulih', 'Pagar Alam', 'Lubuklinggau', 'Sekayu', 'Pangkalan Balai', 'Kayu Agung', 'Baturaja', 'Martapura', 'Muara Enim', 'Lahat', 'Indralaya', 'Belitang'],
  },
  {
    iso: 'ID-BB', name: 'Kepulauan Bangka Belitung', region: 'Sumatera',
    cities: ['Pangkal Pinang', 'Toboali', 'Koba', 'Muntok', 'Sungailiat', 'Belinyu', 'Manggar', 'Tanjung Pandan'],
  },
  {
    iso: 'ID-LA', name: 'Lampung', region: 'Sumatera',
    cities: ['Bandar Lampung', 'Metro', 'Kalianda', 'Kotabumi', 'Menggala', 'Pringsewu', 'Liwa', 'Sukadana', 'Way Kanan', 'Telukbetung'],
  },
  {
    iso: 'ID-BT', name: 'Banten', region: 'Jawa',
    cities: ['Serang', 'Cilegon', 'Tangerang', 'Tangerang Selatan', 'Pandeglang', 'Rangkasbitung', 'Malingping', 'Cikande', 'Kresek', 'Curug', 'Balaraja', 'Ciputat', 'Ciledug', 'Pamulang', 'Legok', 'Panongan', 'Cisoka', 'Wanasalam'],
  },
  {
    iso: 'ID-JK', name: 'DKI Jakarta', region: 'Jawa',
    cities: ['Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Barat', 'Jakarta Utara', 'Kepulauan Seribu'],
  },
  {
    iso: 'ID-JB', name: 'Jawa Barat', region: 'Jawa',
    cities: ['Bandung', 'Cimahi', 'Bekasi', 'Depok', 'Bogor', 'Sukabumi', 'Cirebon', 'Tasikmalaya', 'Banjar', 'Cianjur', 'Garut', 'Sumedang', 'Soreang', 'Majalengka', 'Kuningan', 'Indramayu', 'Subang', 'Purwakarta', 'Karawang', 'Cileunyi', 'Padalarang', 'Ciamis', 'Pangandaran', 'Bandung Barat', 'Cikarang', 'Cibitung', 'Tambun', 'Setu', 'Cibinong', 'Gunung Putri', 'Citeureup', 'Parung', 'Cigombong', 'Ciawi', 'Cisarua', 'Megamendung', 'Palabuhanratu', 'Cisaat', 'Cibadak', 'Singaparna', 'Rajapolah', 'Salawu', 'Karangnunggal', 'Cikijing', 'Majenang', 'Wanareja', 'Karangpucung', 'Sidamulih', 'Kalipucang', 'Parigi', 'Cikalong', 'Pameungpeuk', 'Leles', 'Wanaraja', 'Cicalengka', 'Cikancung', 'Rancaekek', 'Ciranjang', 'Cugenang', 'Batujajar', 'Cipatat', 'Lembang', 'Parongpong', 'Cimenyan', 'Ibun', 'Pacet', 'Kertasari', 'Sindangkerta', 'Cihampelas', 'Saguling', 'Cilame', 'Majalaya', 'Solokanjeruk', 'Margahayu', 'Baleendah', 'Ciparay', 'Sukaraja', 'Cilebut', 'Kemang', 'Tenjo', 'Cigudeg', 'Nanggung', 'Leuwisadeng', 'Cipanas', 'Ciampea', 'Cibungbulang', 'Leuwiliang', 'Jasinga', 'Gunung Sindur', 'Parung Panjang', 'Rumpin', 'Caringin', 'Cicurug', 'Nagrak', 'Kalapanunggal', 'Cidadap', 'Cidahu', 'Warungkondang', 'Karangtengah', 'Cihideung', 'Cisayong', 'Mangunreja', 'Sukahening', 'Tanjungjaya', 'Sodonghilir', 'Tanjungsiang', 'Rajadesa', 'Cimanggu', 'Cipari', 'Padaherang', 'Cigugur', 'Bungbulang', 'Mekarmukti', 'Cisewu', 'Cikajang', 'Bayongbong', 'Cibiuk', 'Nagrak', 'Cicalengka'],
  },
  {
    iso: 'ID-JT', name: 'Jawa Tengah', region: 'Jawa',
    cities: ['Semarang', 'Salatiga', 'Surakarta', 'Magelang', 'Pekalongan', 'Tegal', 'Kudus', 'Jepara', 'Demak', 'Kendal', 'Batang', 'Pemalang', 'Brebes', 'Purwokerto', 'Cilacap', 'Kebumen', 'Purworejo', 'Wonosobo', 'Banjarnegara', 'Boyolali', 'Klaten', 'Sukoharjo', 'Wonogiri', 'Karanganyar', 'Sragen', 'Grobogan', 'Blora', 'Rembang', 'Pati', 'Temanggung', 'Purwodadi', 'Cepu', 'Kajen', 'Slawi', 'Adiwerna', 'Ungaran', 'Ambarawa', 'Mranggen', 'Welahan', 'Baki', 'Gondangrejo', 'Jogonalan', 'Cawas', 'Bayat', 'Ceper', 'Pedan', 'Karanganom', 'Kemalang', 'Manisrenggo', 'Ngawen', 'Prambanan', 'Wedi', 'Delanggu', 'Polanharjo', 'Jatinom', 'Kalikotes', 'Jatipuro', 'Jumapolo', 'Karangdowo', 'Kebakkramat', 'Kerjo', 'Matesih', 'Miri', 'Mojosongo', 'Ngargoyoso', 'Nogosari', 'Plupuh', 'Sawit', 'Selogiri', 'Sidoharjo', 'Slogohimo', 'Tasikmadu', 'Tawangsari', 'Teras', 'Trucuk', 'Kalibawang', 'Kaliwiro', 'Kepil', 'Leksono', 'Sapuran', 'Wadaslintang', 'Watumalang'],
  },
  {
    iso: 'ID-YO', name: 'DI Yogyakarta', region: 'Jawa',
    cities: ['Yogyakarta', 'Sleman', 'Bantul', 'Wates', 'Wonosari', 'Kalasan', 'Berbah', 'Sewon', 'Banguntapan', 'Kasihan', 'Piyungan', 'Pundong', 'Pakem', 'Cangkringan', 'Ngaglik', 'Minggir', 'Lendah', 'Galur', 'Kokap', 'Panjatan', 'Pengasih', 'Temon', 'Girimulyo', 'Sentolo', 'Nanggulan', 'Semin', 'Karangmojo', 'Paliyan', 'Playen', 'Ponjong', 'Rongkop', 'Saptosari', 'Tanjungsari', 'Tepus', 'Gedangsari', 'Godean', 'Moyudan', 'Mlati', 'Tempel', 'Dlingo', 'Bambanglipuro', 'Jetis', 'Imogiri', 'Kretek', 'Sanden', 'Srandakan'],
  },
  {
    iso: 'ID-JI', name: 'Jawa Timur', region: 'Jawa',
    cities: ['Surabaya', 'Malang', 'Batu', 'Kediri', 'Blitar', 'Madiun', 'Mojokerto', 'Pasuruan', 'Probolinggo', 'Gresik', 'Sidoarjo', 'Jombang', 'Nganjuk', 'Magetan', 'Ngawi', 'Ponorogo', 'Pacitan', 'Trenggalek', 'Tulungagung', 'Lumajang', 'Situbondo', 'Bondowoso', 'Jember', 'Banyuwangi', 'Bangkalan', 'Sampang', 'Pamekasan', 'Sumenep', 'Bojonegoro', 'Tuban', 'Lamongan', 'Waru', 'Buduran', 'Candi', 'Taman', 'Tanggulangin', 'Porong', 'Sukodono', 'Gedangan', 'Sedati', 'Krian', 'Driyorejo', 'Cerme', 'Benjeng', 'Duduksampeyan', 'Balongpanggang', 'Manyar', 'Kebomas', 'Bungah', 'Sugio', 'Dukun', 'Sangkapura', 'Tambak', 'Gondang', 'Jatirogo', 'Pucanglaban', 'Rejotangan', 'Ngunut', 'Kalidawir', 'Campurdarat', 'Besuki', 'Kedungadem', 'Wates', 'Kasiman', 'Sekar', 'Dander', 'Srengat', 'Temayang', 'Gayam', 'Kalitidu', 'Padangan', 'Sukosewu', 'Baureno', 'Kanor', 'Kapas', 'Tikung', 'Deket', 'Karangbinangun', 'Sukodadi', 'Babat', 'Sarirejo', 'Brondong', 'Turi', 'Pucuk', 'Purwosari', 'Prigen', 'Pandaan', 'Pohjentrek', 'Bangil', 'Beji', 'Gempol', 'Tosari', 'Tutur', 'Lekok', 'Kejayan', 'Grati', 'Rejoso', 'Winongan', 'Krembung', 'Wringinanom', 'Kedamean', 'Lengkong', 'Kutorejo', 'Trowulan', 'Ngoro', 'Jetis', 'Mojoanyar', 'Dlanggu', 'Puri', 'Kemlagi', 'Trawas', 'Pacet', 'Gedek', 'Klakah', 'Pronojiwo', 'Senduro', 'Pasrujambe', 'Kandat', 'Ranuyoso', 'Tempeh', 'Pasirian', 'Sumbergempol', 'Kalisat', 'Sumberjambe', 'Sukowono', 'Silo', 'Bangsalsari', 'Tanggul', 'Mumbulsari', 'Ambulu', 'Tempurejo', 'Puger', 'Kencong', 'Gumukmas', 'Umbulsari', 'Balung', 'Tenggarang', 'Curahdami', 'Mayang', 'Kaliwates', 'Ajung', 'Manduran', 'Rogojampi', 'Srono', 'Cluring', 'Tegalsari', 'Gambiran', 'Pesanggaran', 'Purwoharjo', 'Muncar', 'Tegaldlimo', 'Kalipuro', 'Ketapang', 'Songgon', 'Tamanan', 'Sumberasri', 'Ngadirejo', 'Sukorejo', 'Bakung', 'Wonodadi', 'Binangun', 'Sutojayan', 'Nglegok', 'Talun', 'Wlingi', 'Selopuro', 'Udanawu', 'Kesamben', 'Ponggok', 'Kademangan', 'Sanankulon', 'Ngancar', 'Semugih', 'Wonoasri', 'Purwodadi', 'Puncu', 'Grogol', 'Banyakan', 'Gampengrejo', 'Semampir', 'Gebang', 'Pesantren', 'Ringinrejo', 'Kandat', 'Plemahan', 'Purwoasri', 'Kras', 'Pagu', 'Semen', 'Tarokan', 'Mojo', 'Kepanjen', 'Sumberpucung', 'Pakis', 'Wajak', 'Tumpang', 'Bululawang', 'Gondanglegi', 'Pagak', 'Bantur', 'Sumbermanjing', 'Dampit', 'Donomulyo', 'Kalipare', 'Wagir', 'Pakisaji', 'Kromengan', 'Jabung', 'Turen', 'Ngajum', 'Ngantang', 'Kasembon', 'Pujon', 'Poncokusumo'],
  },
  {
    iso: 'ID-BA', name: 'Bali', region: 'Bali & Nusa Tenggara',
    cities: ['Denpasar', 'Kuta', 'Seminyak', 'Ubud', 'Nusa Dua', 'Jimbaran', 'Canggu', 'Sanur', 'Mangupura', 'Gianyar', 'Tegalalang', 'Ubud', 'Sukawati', 'Blahbatuh', 'Payangan', 'Tegallalang', 'Tabanan', 'Kediri', 'Kerambitan', 'Marga', 'Selemadeg', 'Selemadeg Barat', 'Selemadeg Timur', 'Penebel', 'Baturiti', 'Singaraja', 'Lovina', 'Buleleng', 'Sukasada', 'Sawan', 'Gerokgak', 'Seririt', 'Banjar', 'Busungbiu', 'Kubutambahan', 'Tembok', 'Tejakula', 'Amlapura', 'Karangasem', 'Abang', 'Bebandem', 'Rendang', 'Selat', 'Sidemen', 'Manggis', 'Klungkung', 'Semarapura', 'Banjarangkan', 'Dawan', 'Nusa Penida', 'Lembongan', 'Bangli', 'Kintamani', 'Susut', 'Temukus', 'Negara', 'Jembrana', 'Melaya', 'Mendoyo', 'Pekutatan', 'Buleleng', 'Bali Barat', 'Denpasar Barat', 'Denpasar Timur', 'Denpasar Selatan', 'Denpasar Utara'],
  },
  {
    iso: 'ID-NB', name: 'Nusa Tenggara Barat', region: 'Bali & Nusa Tenggara',
    cities: ['Mataram', 'Gerung', 'Sekotong', 'Lembar', 'Narmada', 'Gunungsari', 'Batu Layar', 'Kediri', 'Kuripan', 'Praya Barat', 'Praya', 'Janapria', 'Puyung', 'Kopang', 'Pringgarata', 'Sikur', 'Masbagik', 'Montong Gading', 'Sukamulia', 'Suralaga', 'Sambelia', 'Terara', 'Selong', 'Aikmel', 'Keruak', 'Sakra', 'Pujut', 'Tanjung', 'Gangga', 'Kayangan', 'Bayan', 'Anyar', 'Seteluk', 'Taliwang', 'Brang Biji', 'Sumbawa Besar', 'Utan', 'Alas', 'Buer', 'Lape', 'Moyo Hulu', 'Pekat', 'Dompu', 'Woja', "Hu'u", 'Kilo', 'Manggalewa', 'Woha', 'Rasanae Barat', 'Bima', 'Rasanae Timur', 'Wera', 'Lambitu', 'Lambu', 'Belo', 'Parado', 'Sape', 'Langgudu', 'Sanggar', 'Tambora', 'Donggo', 'Madapangga'],
  },
  {
    iso: 'ID-NT', name: 'Nusa Tenggara Timur', region: 'Bali & Nusa Tenggara',
    cities: ['Kupang', 'Alak', 'Kelapa Lima', 'Maulafa', 'Oebobo', 'Kupang Tengah', 'Sulamu', 'Taebenu', 'Amarasi', 'Kupang Barat', 'Kupang Timur', 'Amfoang', 'Takari', 'Noemuti', 'Amanuban', 'Amanatun', 'Batu Putih', 'Soe', 'Kie', 'Mollo', 'Fatuleu', 'Naibenu', 'Miomafo', 'Insana', 'Biboki', "Kot'olin", 'Oelamasi', 'Ende', 'Ende Tengah', 'Ende Timur', 'Ende Selatan', 'Ende Barat', 'Ende Utara', 'Maukaro', 'Wolowaru', 'Ndona', 'Lio Timur', 'Kelimutu', 'Nangapanda', 'Detusoko', 'Wolojita', 'Pulau Ende', 'Maurole', 'Larantuka', 'Ile Mandiri', 'Lewolema', 'Tanjung Bunga', 'Demon Pagong', 'Adonara Barat', 'Adonara Tengah', 'Adonara Timur', 'Solor Barat', 'Solor Timur', 'Titehena', 'Wotan Ulumado', 'Wulanggitang', 'Ile Bura', 'Maumere', 'Alok', 'Talibura', 'Kewapante', 'Waigete', 'Paga', 'Doreng', 'Kangae', 'Hewokloang', 'Magepanda', 'Lela', 'Koting', 'Bola', 'Waiblama', 'Nita', 'Ruteng', 'Rahong Utara', 'Satar Mese', 'Melong', 'Langke Rembong', 'Lembor', 'Weru', 'Kuok', 'Cibal', 'Reok', 'Borong', 'Satar Mese Barat', 'Kota Komba', 'Lamba Leda', 'Elar', 'Poco Ranaka', 'Rana Mese', 'Cibal Barat', 'Rahong', 'Bajawa', 'Soa', 'Golewa', 'Riung', 'Wolowae', 'Aimere', 'Bajawa Utara', 'Bajawa Selatan', 'Inerie', 'Jerebuu', 'Mataloko', 'Boawae', 'Nagekeo', 'Aesesa', 'Mauponggo', 'Keo Tengah', 'Wolowada', 'Mudipajong', 'Nangaroro', 'Lewoleba', 'Nubatukan', 'Lomblen', 'Lebatukan', 'Ile Ape', 'Atadei', 'Omesuri', 'Buyasari', 'Waiwerang', 'Adonara', 'Kalabahi', 'Alor Barat', 'Alor Timur', 'Alor Selatan', 'Alor Tengah', 'Pantar', 'Pantar Barat', 'Pantar Timur', 'Mataru', 'Kabola', 'Moru', 'Pureman', 'Abadiledet', 'Waibelen', 'Tua', 'Waipure', 'Waesala', 'Labuhan Bajo', 'Komodo', 'Sano Nggoang', 'Waerebo', 'Mbeliling', 'Boleng', 'Tanjung', 'Golewa', 'Waikabubak', 'Wanokaka', 'Lamboya', 'Loli', 'Kodi', 'Kodi Bangedo', 'Waikelo', 'Loura', 'Wewewa', 'Kota Waingapu', 'Waingapu', 'Kahaungu Eti', 'Kambera', 'Kanatang', 'Katala Hamu', 'Kenuma', 'Mahu', 'Matawai La Pawu', 'Nggaha Oriangu', 'Pandawai', 'Pinu Paharu', 'Tabundung', 'Tana Righu', 'Umalulu', 'Wula Waijulu', 'Waingapu Timur', 'Wunga', 'Tambolaka', 'Wewewa Barat', 'Wewewa Selatan', 'Wewewa Tengah', 'Wewewa Utara', 'Wewewa Timur', 'Waiha', 'Waibakul', 'Memboro', 'Katiku Tana', 'Pahunga Lodu', 'Katinimala', 'Umbu Ratu Nggay', 'Umbu Ratu Nggay Barat', "Ba'a", 'Rote Barat', 'Rote Barat Laut', 'Rote Tengah', 'Rote Timur', 'Rote Selatan', 'Landu Leko', 'Ndao Nuse', 'Termanu', 'Pantai Baru', 'Sei', 'Bokong', 'Lelenuk', 'Korte', 'Oematannu', 'Lonak', 'Hawu Mehara', 'Seba', 'Mesara', 'Liae', 'Raijua', 'Sabu Barat', 'Sabu Tengah', 'Sabu Timur', 'Hawu'],
  },
  {
    iso: 'ID-KB', name: 'Kalimantan Barat', region: 'Kalimantan',
    cities: ['Pontianak', 'Singkawang', 'Mempawah', 'Sungai Pinyuh', 'Sungai Kakap', 'Kubu Raya', 'Sambas', 'Pemangkat', 'Tebas', 'Sungai Raya', 'Bengkayang', 'Ledo', 'Sanggau Ledo', 'Lumar', 'Suti Semarang', 'Ngabang', 'Landak', 'Sungai Maura', 'Menyuke', 'Kuala Behe', 'Sanggau', 'Balai', 'Tayan Hilir', 'Sekayam', 'Toba', 'Parindu', 'Noyan', 'Bonti', 'Kembayan', 'Jangkang', 'Meliau', 'Mukok', 'Beduwai', 'Sebangki', 'Sekadau', 'Belitang Hilir', 'Belitang', 'Belitang Jaya', 'Nanga Mahap', 'Sintang', 'Binjai Hulu', 'Ketungau Hulu', 'Ketungau Tengah', 'Ketungau Hilir', 'Kelam Permai', 'Sepauk', 'Tempunak', 'Dedai', 'Sungai Tebelian', 'Ambalau', 'Sungai Betung', 'Putussibau', 'Embaloh', 'Empanang', 'Benua Lima', 'Kalis', 'Bika', 'Suhaid', 'Bunut Hulu', 'Sungai Laur', 'Selimbau', 'Semitau', 'Leboyan', 'Pengkadan', 'Siding', 'Seluas', 'Sungai Raya Kepulauan', 'Samalantan', 'Paloh', 'Teluk Keramat', 'Sejangkung', 'Sajad', 'Galing', 'Jagoi Babang', 'Sengah Temila', 'Mandor', 'Rasau Jaya', 'Terentang', 'Kendawangan', 'Marau', 'Air Upas', 'Matan Hilir', 'Matan Hilir Selatan', 'Nanga Tayap', 'Simpang Hulu', 'Tayan Hulu', 'Sungai Durian', 'Sungai Kunyit', 'Jawi', 'Semparuk', 'Teberau', 'Sebawi', 'Serimbu', 'Sungai Ambawang'],
  },
  {
    iso: 'ID-KT', name: 'Kalimantan Tengah', region: 'Kalimantan',
    cities: ['Palangka Raya', 'Jekan Raya', 'Bukit Batu', 'Sebangau', 'Rakumpit', 'Katingan', 'Kasongan', 'Katingan Kuala', 'Mendawai', 'Pulau Malan', 'Tewah', 'Sanaman Mantikei', 'Kelingan', 'Hantakan', 'Mentarang', 'Kurun', 'Pangkalan Bun', 'Kumai', 'Arut Selatan', 'Arut Utara', 'Kotawaringin Lama', 'Pangkalan Lada', 'Pangkalan Banteng', 'Sampit', 'Baamang', 'Cempaga', 'Kotawaringin Hilir', 'Pulau Hanaut', 'Seranau', 'Teluk Sampit', 'Kuala Pembuang', 'Seruyan Hilir', 'Seruyan Raya', 'Suling Bali', 'Hanau', 'Dahian Tangung', 'Batu Ampar', 'Sungai Undang', 'Pulau Pisang', 'Sukamara', 'Jelai', 'Balai', 'Pantai Lunci', 'Permata Kecubung', 'Bagendang', 'Teluk Kumbar', 'Mentawa Baru', 'Pematang Karau', 'Pulau Petak', 'Kapuas Murung', 'Kapuas Barat', 'Kapuas Kuala', 'Basarang', 'Selat', 'Mantangai', 'Timpah', 'Pasak Talawang', 'Daha Barat', 'Daha Utara', 'Daha Selatan', 'Daha Timur', 'Banama Tingang', 'Teweh Baru', 'Teweh Tengah', 'Teweh Timur', 'Laung Tuhup', 'Buntok', 'Dusun Selatan', 'Dusun Utara', 'Dusun Tengah', 'Jenamas', 'Karau Kuala', 'Gunas', 'Murung', 'Teweh Selatan', 'Tamiang Layang'],
  },
  {
    iso: 'ID-KS', name: 'Kalimantan Selatan', region: 'Kalimantan',
    cities: ['Banjarmasin', 'Banjarbaru', 'Cempaka', 'Liang Anggang', 'Landasan Ulin', 'Martapura', 'Karang Intan', 'Pengaron', 'Sungai Pinang', 'Mataraman', 'Sungai Tabuk', 'Astambul', 'Kertak Hanyar', 'Gambut', 'Tabunganen', 'Tatah Makmur', 'Rantau Badauh', 'Anjir Muara', 'Anjir Pasar', 'Bakumpai', 'Belawang', 'Mandastana', 'Barito Kuala', 'Kandangan', 'Rantau', 'Amandit', 'Loksado', 'Binuang', 'Tapin', 'Batu Benawa', 'Balangan', 'Paringin', 'Halong', 'Tebing Tinggi', 'Paramasan', 'Awayan', 'Juai', 'Kelua', 'Haur Gading', 'Murung Pudak', 'Tabalong', 'Kotabaru', 'Pulau Laut', 'Pulau Laut Utara', 'Pulau Laut Selatan', 'Pulau Laut Barat', 'Pulau Laut Tengah', 'Pamukan', 'Pamukan Utara', 'Pamukan Selatan', 'Kelumpang', 'Kelumpang Hulu', 'Kelumpang Tengah', 'Kelumpang Barat', 'Kelumpang Selatan', 'Kelumpang Timur', 'Tanjung', 'Satui', 'Kintap', 'Bati-bati', 'Batu Ampar', 'Beruntung Baru', 'Takisung', 'Jorong', 'Karang Bintang', 'Tanta', 'Tebing', 'Tungkaran', 'Bakarangan', 'Teluk', 'Benua Empas', 'Bungur', 'Lampihong', 'Simpang Empat', 'Sungai Durian', 'Panyipatan', 'Bajuin', 'Batu Tangi', 'Boram', 'Kelayan', 'Madurejo', 'Mando', 'Martapura Kota', 'Martapura Timur', 'Matang Kalir', 'Peramu', 'Rambutan', 'Sambung Makmur', 'Sei Pinang', 'Sungai Tuan', 'Suru', 'Tambak Sari', 'Tatah Mesjid', 'Timbungan', 'Ulin'],
  },
  {
    iso: 'ID-KI', name: 'Kalimantan Timur', region: 'Kalimantan',
    cities: ['Samarinda', 'Balikpapan', 'Bontang', 'Loa Janan', 'Tenggarong', 'Muara Jawa', 'Sanga-Sanga', 'Anggana', 'Muara Badak', 'Marang Kayu', 'Kutai Kartanegara', 'Muara Muntai', 'Kota Bangun', 'Muara Kaman', 'Kembang Janggut', 'Kenohan', 'Muara Wis', 'Tabang', 'Long Iram', 'Melak', 'Barong Tongkok', 'Sekolaq Darat', 'Bentian Besar', 'Linggang Bigung', 'Manor Bulatan', 'Jempang', 'Tering', 'Sandaran', 'Muara Ancalong', 'Kongbeng', 'Busang', 'Penajam', 'Sepaku', 'Waru', 'Babulu', 'Penajam Paser Utara', 'Paser', 'Tanah Grogot', 'Tanjung Harapan', 'Muara Samu', 'Kuaro', 'Pasir Belengkong', 'Pulau Pinang', 'Long Ikis', 'Batu Sopang', 'Kutai Barat', 'Sendawar', 'Kutai Timur', 'Sangatta', 'Sangatta Selatan', 'Rantau Pulung', 'Muara Wahau', 'Bengalon', 'Kaubun', 'Telen', 'Karangan', 'Kelahin', 'Sungai Solor', 'Long Bagun', 'Muara Lawa', 'Long Pahangai', 'Long Apari', 'Mahakam Ulu', 'Long Hubung'],
  },
  {
    iso: 'ID-KU', name: 'Kalimantan Utara', region: 'Kalimantan',
    cities: ['Tarakan', 'Tanjung Selor', 'Tanjung Palas', 'Gunun', 'Tanjung Palas Timur', 'Tanjung Palas Utara', 'Tanjung Palas Barat', 'Tanjung Palas Tengah', 'Sekatak', 'Peso', 'Peso Hilir', 'Biduk-biduk', 'Talisayan', 'Batu Putih', 'Krayan', 'Krayan Selatan', 'Krayan Timur', 'Krayan Barat', 'Long Loreh', 'Lumbis', 'Lumbis Ogong', 'Sembakung', 'Nunukan', 'Sebatik', 'Sebatik Barat', 'Sebatik Tengah', 'Sebatik Timur', 'Nunukan Selatan', 'Tana Tidung', 'Tana Lia', 'Sesayap', 'Sesayap Hilir', 'Betayau', 'Muruk Rian'],
  },
  {
    iso: 'ID-SA', name: 'Sulawesi Utara', region: 'Sulawesi',
    cities: ['Manado', 'Bitung', 'Tomohon', 'Kotamobagu', 'Wenang', 'Sario', 'Mapanget', 'Malalayang', 'Tuminting', 'Tikala', 'Wanea', 'Kombi', 'Tondano', 'Tondano Barat', 'Tondano Timur', 'Tondano Selatan', 'Tondano Utara', 'Eris', 'Kakas', 'Lembean Timur', 'Kema', 'Airmadidi', 'Kawangkoan', 'Tombariri', 'Pineleng', 'Tombulu', 'Sonder', 'Langowan', 'Langowan Barat', 'Langowan Timur', 'Langowan Selatan', 'Langowan Utara', 'Tompaso', 'Remboken', 'Sarongsong', 'Taratara', 'Amurang', 'Amurang Barat', 'Amurang Timur', 'Tombasian', 'Tenga', 'Kumelembuai', 'Motoling', 'Ratahan', 'Bolang Itang', 'Bolaang', 'Lolak', 'Poigar', 'Sangtombolang', 'Lolayan', 'Dumoga', 'Dumoga Tengah', 'Dumoga Timur', 'Dumoga Utara', 'Dumoga Barat', 'Pinolosian', 'Pinolosian Tengah', 'Pinolosian Timur', 'Passi', 'Matayangan', 'Modayag', 'Poyowa', 'Mangu', 'Tabukan', 'Tahuna', 'Tahuna Barat', 'Tahuna Timur', 'Manganitu', 'Tamako', 'Nusa Tonga', 'Siau Barat', 'Siau Timur', 'Siau Tengah', 'Siau Barat Selatan', 'Biaro', 'Tagulandang', 'Melonguane', 'Beo', 'Beo Utara', 'Tatoareng', 'Kabaruan', 'Essang', 'Nanusa', 'Marore', 'Salibabu'],
  },
  {
    iso: 'ID-ST', name: 'Sulawesi Tengah', region: 'Sulawesi',
    cities: ['Palu', 'Tatanga', 'Palu Barat', 'Palu Timur', 'Palu Selatan', 'Palu Utara', 'Tavanjuka', 'Dondo', 'Tolitoli', 'Galang', 'Biau', 'Lampasio', 'Buol', 'Leok', 'Dampal Utara', 'Dampal Selatan', 'Buntuna', 'Dako Pameamea', 'Paleleh', 'Momunu', 'Bukal', 'Pipikoro', 'Winatu', 'Gadung', 'Tinombo', 'Sausu', 'Parigi', 'Parigi Selatan', 'Parigi Barat', 'Parigi Tengah', 'Parigi Utara', 'Siniu', 'Palolo', 'Kino', 'Balinggi', 'Donggala', 'Banawa', 'Banawa Selatan', 'Tanjung', 'Sindue', 'Sindue Tombusabora', 'Sindue Tobata', 'Sindue Tongambuna', 'Sojol', 'Sojol Utara', 'Sojol Bulawa', 'Tojo', 'Ampana', 'Ampana Tete', 'Togean', 'Una-Una', 'Walea Kepulauan', 'Tojo Barat', 'Tojo Ulue', 'Ulubongka', 'Talaga', 'Luwuk', 'Balantak', 'Balantak Selatan', 'Bunta', 'Buko', 'Buko Selatan', 'Batui', 'Batui Selatan', 'Luwuk Timur', 'Lobu', 'Nuhon', 'Soyo Jaya', 'Bungku Tengah', 'Bungku Barat', 'Bungku Timur', 'Bungku Selatan', 'Bungku Utara', 'Menui Kepulauan', 'Mori Atas', 'Mori Utara', 'Petasia', 'Petasia Timur', 'Petasia Barat', 'Petasia Selatan', 'Lembo', 'Bahodopi', 'Pamor', 'Mamosalato', 'Marawola', 'Marawola Barat', 'Sigi Biromaru', 'Dolo', 'Dolo Barat', 'Dolo Selatan', 'Sigi', 'Kulawi', 'Kulawi Selatan', 'Lindu', 'Gumbasa', 'Nokilalaki', 'Napu', 'Bolo', 'Biro'],
  },
  {
    iso: 'ID-SN', name: 'Sulawesi Selatan', region: 'Sulawesi',
    cities: ['Makassar', 'Parepare', 'Palopo', 'Maros', 'Bontosunggu', 'Bantimurung', 'Mandai', 'Turikale', 'Lau', 'Moncongloe', 'Cenrana', 'Mallusetasi', 'Tompu', 'Gowa', 'Sungguminasa', 'Tombolo', 'Pallangga', 'Pattallassang', 'Bontomarannu', 'Bajeng', 'Parangloe', 'Tinggimoncong', 'Tombolo Pao', 'Bontolempangan', 'Manuju', 'Takalar', 'Mangarabombang', 'Galesong', 'Polombangkeng', 'Mappakasunggu', 'Sanrobone', 'Jeneponto', 'Binamu', 'Bangkala', 'Bangkala Barat', 'Bontoramba', 'Kelara', 'Rumbia', 'Tarowang', 'Arungkeke', 'Turatea', 'Bantaeng', 'Ermerasa', 'Bissappu', 'Tompobulu', 'Gantarang', 'Pajukukang', 'Bulukumba', 'Bonto Bahari', 'Bontotiro', 'Kajang', 'Herlang', 'Rilau Ale', 'Ujung Bulu', 'Ujungloe', 'Kindang', 'Sinjai', 'Sinjai Barat', 'Sinjai Timur', 'Sinjai Tengah', 'Sinjai Selatan', 'Sinjai Utara', 'Tellu Limpoe', 'Bone', 'Watampone', 'Tanete Riattang', 'Tanete Riattang Barat', 'Tanete Riattang Timur', 'Dua Pitue', 'Dua Boccoe', 'Majauleng', 'Cina', 'Ponceng', 'Lappariaja', 'Lamuru', 'Barebbo', 'Kahu', 'Libureng', 'Ajangale', 'Amali', 'Bengo', 'Sibulue', 'Salomekko', 'Ulaweng', 'Tonra', 'Palakka', 'Soppeng', 'Watansoppeng', 'Maritengngae', 'Donri Donri', 'Lalabata', 'Lili Rilau', 'Lili Riaja', 'Mario Riwawo', 'Patampanua', 'Wajo', 'Sengkang', 'Tempe', 'Belawa', 'Maniang Pajo', 'Pitumpanua', 'Tana Sitolo', 'Gilireng', 'Keera', 'Pammana', 'Sabotparigi', 'Wanio', 'Sidrap', 'Pangkajene', 'Watang Sidenreng', 'Tellu Wanua', 'Maringngerrang', 'Kulo', 'Watang Pulu', 'Panca Lautang', 'Panca Rijang', 'Baranti', 'Lemba', 'Pinrang', 'Watang', 'Leworeng', 'Bodong', 'Mattiro Bulu', 'Mattiro Sompe', 'Duampanua', 'Paleteang', 'Suppa', 'Tiroang', 'Lanrisang', 'Batulappa', 'Cempa', 'Enrekang', 'Alla', 'Baraka', 'Bungin', 'Curio', 'Anggeraja', 'Malua', 'Masalle', 'Buntu Batu', 'Rindingallo', 'Luwu', 'Waran', 'Walenrang', 'Walenrang Barat', 'Walenrang Timur', 'Walenrang Selatan', 'Walenrang Utara', 'Lamasi', 'Lamasi Timur', 'Bua', 'Ponrang', 'Ponrang Selatan', 'Wanra', 'Angkona', 'Mangkutana', 'Suli', 'Kamanre', 'Luwu Utara', 'Masamba', 'Malangke', 'Malangke Barat', 'Bone-Bone', 'Sukamaju', 'Mappak', 'Limpo', 'Rampi', 'Seko', 'Sabbang', 'Baebunta', 'Baebunta Selatan', 'Luwu Timur', 'Malili', 'Wasuponda', 'Nuha', 'Towuti', 'Burau', 'Tomoni', 'Tomoni Timur', 'Wotu', 'Kapa', 'Benua', 'Toraja', 'Rantepao', 'Makale', 'Sangalla', 'Mengkendek', 'Gandangbatu Sillanan', 'Malimbong Balepe', 'Kesu', 'Tikala', 'Borong', 'Sesean', 'Sesean Suloara', 'Nanggala', 'Bittuang', 'Rembon', 'Buntu Pepasan', 'Tondon', 'Saluputti', 'Awan Rante Karua', 'Balusu', 'Cendana', 'Kapala Pitu', 'Rano', "Dende'", "Buntao'", 'Puncak'],
  },
  {
    iso: 'ID-SG', name: 'Sulawesi Tenggara', region: 'Sulawesi',
    cities: ['Kendari', 'Abeli', 'Baruga', 'Benu-benua', 'Kambu', 'Kendari Barat', 'Mandonga', 'Poasia', 'Puowatu', 'Bau-Bau', 'Murhum', 'Betoambari', 'Batauga', 'Katobu', 'Sampolawa', 'Liwutongkidia', 'Kadatua', 'Kapontori', 'Pasarwajo', 'Siontapina', 'Wangi-wangi', 'Kaledupa', 'Tomia', 'Binongko', 'Muna', 'Raha', 'Batalaiworu', 'Duruka', 'Lohia', 'Napabalano', 'Tongkuno', 'Wakorumba', 'Kabawo', 'Mawasangka', 'Tiworo', 'Kusambi', 'Batukara', 'Laworo', 'Wakorumba Selatan', 'Sawerigadi', 'Kolaka', 'Pomalaa', 'Tirawuta', 'Lasusua', 'Tanggetada', 'Watubangga', 'Ladongi', 'Loea', 'Uluiwoi', 'Kolaka Timur', 'Tinondo', 'Mowila', 'Lalolei', 'Langara', 'Konawe', 'Unaaha', 'Anggabaya', 'Wawotobi', 'Pondidaha', 'Bondoala', 'Abuki', 'Besulutu', 'Puriala', 'Uepaku', 'Konawe Selatan', 'Mekongga', 'Palangga', 'Palangga Selatan', 'Palangga Tengah', 'Ranomeeto', 'Ranomeeto Barat', 'Tinanggea', 'Baito', 'Lainea', 'Lalembuu', 'Moramo', 'Oheo', 'Wolasi', 'Sampara', 'Ambuau', 'Basoa', 'Benu', 'Buke', 'Busoa', 'Lapandewa', 'Bone', 'Kolaka Utara', 'Wanggudu', 'Wawo', 'Wunggoloko', 'Wawonii', 'Konawe Kepulauan', 'Andowe', 'Wawonii Barat', 'Wawonii Tengah', 'Wawonii Timur', 'Wawonii Utara'],
  },
  {
    iso: 'ID-SR', name: 'Sulawesi Barat', region: 'Sulawesi',
    cities: ['Mamuju', 'Kalukku', 'Simboro', 'Tapalang', 'Tapalang Barat', 'Kangke', 'Papualang', 'Binanga', 'Bonehau', 'Bambalamotu', 'Bambang', 'Topoyo', 'Pasangkayu', 'Durian', 'Baras', 'Sarjadi', 'Tobadak', 'Karuun', 'Tammurungra', 'Tinambung', 'Balanipa', 'Campalagian', 'Polewali', 'Wonomulyo', 'Anreapi', 'Mapilli', 'Matakali', 'Binuang', "Bulu'", 'Luyo', 'Limboro', 'Mamuasa', 'Tanduk Kalua', 'Mamasa', 'Sumarorong', 'Messe', "Ballape'", 'Pana', 'Tabulahan', 'Rantebulahan', 'Aralle', 'Bergalu', 'Mambi', 'Nosu', 'Tandung'],
  },
  {
    iso: 'ID-GO', name: 'Gorontalo', region: 'Sulawesi',
    cities: ['Gorontalo', 'Tilamuta', 'Kwandang', 'Bilungala', 'Sumalata', 'Monano', 'Tolinggula', 'Marisa', 'Paguyaman', 'Botumoito', 'Panggulo', 'Buntulia', 'Patilanggio', 'Paguat', 'Wanggarasi', 'Mananggu', 'Dulupi', 'Taludu', 'Kramat', 'Bongo Tua', 'Bonepantai', 'Bulango Ulu', 'Bulango Selatan', 'Bulango Timur', 'Bulango Utara', 'Kabila', 'Kabila Bone', 'Kabila Timur', 'Tapa', 'Bone Raya', 'Bilato', 'Biluhu', 'Batudaa', 'Batudaa Pantai', 'Boliyohuto', 'Ponelo Kepulauan', 'Telaga', 'Telaga Biru', 'Tilongkabila', 'Atinggola', 'Gentuma Raya', 'Anggrek', 'Ponelo', 'Dumbaya', 'Tibawa', 'Limboto', 'Limboto Barat', 'Mootilango', 'Bontomarannu', 'Bungayo', 'Tabongo', 'Tolangohula', 'Bolango Ulu', 'Suwawa', 'Suwawa Selatan', 'Suwawa Timur', 'Suwawa Tengah', 'Tumbihe', 'Bonda', 'Pinogu', 'Bone Bolango'],
  },
  {
    iso: 'ID-MA', name: 'Maluku', region: 'Maluku & Papua',
    cities: ['Ambon', 'Baguala', 'Sirimau', 'Nusaniwe', 'Teluk Ambon', 'Leitimur Selatan', 'Tual', 'Dullah Selatan', 'Dullah Utara', 'Kei Kecil', 'Kei Besar', 'Kur', 'Tayando Tam', 'Masbait', 'Buru', 'Namlea', 'Waelata', 'Liliali', 'Wamsisi', 'Leksula', 'Namrole', 'Waeapo', 'Batabual', 'Fena Leisela', 'Kairatu', 'Buru Selatan', 'Masohi', 'Amahai', 'Tehoru', 'Sala Selatan', 'Salahutu', 'Leihitu', 'Leihitu Barat', 'Telutih', 'Banda', 'Pulau Haruku', 'Seram Bagian Barat', 'Dataran Hunimoa', 'Huamual', 'Huamual Belakang', 'Inamosol', 'Kairatu Barat', 'Seram Barat', 'Seram Utara', 'Seram Utara Barat', 'Taniwel', 'Taniwel Timur', 'Wakasihu', 'Piru', 'Seram Bagian Timur', 'Werinama', 'Bula', 'Bula Barat', 'Siritaun Wida Timur', 'Teluk Elpaputih', 'Teluk Sawai'],
  },
  {
    iso: 'ID-MU', name: 'Maluku Utara', region: 'Maluku & Papua',
    cities: ['Ternate', 'Ternate Tengah', 'Ternate Utara', 'Ternate Selatan', 'Moti', 'Pulau Ternate', 'Tidore Kepulauan', 'Tidore', 'Oba', 'Oba Tengah', 'Oba Utara', 'Oba Selatan', 'Oba Barat', 'Mare', 'Maba', 'Weda', 'Patani', 'Patani Barat', 'Patani Timur', 'Weda Tengah', 'Ibu', 'Ibu Selatan', 'Ibu Utara', 'Ibu Tengah', 'Jailolo', 'Jailolo Selatan', 'Jailolo Barat', 'Jailolo Timur', 'Jailolo Utara', 'Sahu', 'Sahu Timur', 'Tobelo', 'Tobelo Barat', 'Tobelo Selatan', 'Tobelo Tengah', 'Tobelo Timur', 'Tobelo Utara', 'Kao', 'Kao Teluk', 'Kao Utara', 'Kao Barat', 'Kao Barat Utara', 'Malifut', 'Galela', 'Galela Barat', 'Galela Selatan', 'Galela Utara', 'Loloda', 'Loloda Utara', 'Morotai', 'Morotai Selatan', 'Morotai Selatan Barat', 'Morotai Jaya', 'Morotai Timur', 'Morotai Utara', 'Pulau Morotai', 'Sula', 'Sanana', 'Sanana Utara', 'Sulabesi', 'Sulabesi Tengah', 'Sulabesi Timur', 'Sulabesi Barat', 'Sulabesi Kota', 'Mangoli', 'Taliabu', 'Taliabu Barat', 'Taliabu Barat Laut', 'Taliabu Timur', 'Taliabu Timur Selatan', 'Taliabu Selatan', 'Taliabu Utara', 'Lede'],
  },
  {
    iso: 'ID-PA', name: 'Papua', region: 'Maluku & Papua',
    cities: ['Jayapura', 'Jayapura Selatan', 'Jayapura Utara', 'Muara Tami', 'Abepura', 'Sentani', 'Sentani Timur', 'Sentani Barat', 'Sentani Selatan', 'Kaureh', 'Waibu', 'Depapre', 'Demta', 'Nimbokrang', 'Genyem', 'Kemtuk', 'Yokari', 'Arso', 'Waris', 'Skanto', 'Kaisenar', 'Sarmi', 'Pantai Barat', 'Pantai Timur', 'Bonggo', 'Bonggo Barat', 'Armopa', 'Aroy', 'Masiwaror', 'Sarmi Timur', 'Liki', 'Apawer Hulu', 'Apawer Hilir', 'Waropen', 'Botawa', 'Urei Faisei', 'Oudate', 'Biak', 'Biak Barat', 'Biak Timur', 'Biak Utara', 'Numfor Timur', 'Numfor Barat', 'Biak Kota', 'Aimando', 'Padaido', 'Supiori', 'Kepulauan Yapen', 'Serui', 'Yapen Selatan', 'Yapen Timur', 'Yapen Barat', 'Windesi', 'Roon', 'Kosi', 'Angkaisera', 'Poom', 'Wonawa', 'Serui Kota', 'Ansus', 'Mantembu', 'Marau', 'Yapen Timur'],
  },
  {
    iso: 'ID-PB', name: 'Papua Barat', region: 'Maluku & Papua',
    cities: ['Manokwari', 'Manokwari Barat', 'Manokwari Timur', 'Manokwari Selatan', 'Warmare', 'Prafi', 'Masni', 'Sidey', 'Anggi', 'Sururey', 'Menyambouw', 'Catubouw', 'Momi', 'Ransiki', 'Kaimana', 'Teluk Etna', 'Kamaka', 'Buruway', 'Koiserala', 'Arguni', 'Fakfak', 'Fakfak Barat', 'Fakfak Timur', 'Fakfak Timur Tengah', 'Fakfak Tengah', 'Fakfak Barat Tengah', 'Teluk Patipi', 'Karas', 'Bomberay', 'Kokas', 'Kais', 'Temin', 'Sawiat', 'Kwoor', 'Bikar', 'Fef', 'Tamina', 'Miyah', 'Kwosefo', 'Moraid', 'Mpur', 'Amberbaken', 'Mubrani', 'Senopi', 'Kebar', 'Konom', 'Sausapor', 'Teluk Bintuni', 'Bintuni', 'Babo', 'Sumuri', 'Moswaren', 'Aranday', 'Teminabuan', 'Wayer', 'Kondok', 'Weriagar', 'Merdey', 'Tuada', 'Manggroholo', 'Sira', 'Inanwatan', 'Sugal', 'Teluk Wondama', 'Rasiei', 'Wasior', 'Roswar', 'Wamesa', 'Nikiyar', 'Naikere', 'Wondiboy', 'Kuri', 'Windesi', 'Rumberpon'],
  },
  {
    iso: 'ID-RB', name: 'Papua Barat Daya', region: 'Maluku & Papua',
    cities: ['Sorong', 'Sorong Timur', 'Sorong Kota', 'Klamono', 'Klaysu', 'Beraur', 'Segun', 'Sayosa', 'Sayosa Timur', 'Maudus', 'Moiwarigen', 'Moiukeb', 'Klabilim', 'Mariyanti', 'Wamon', 'Bulif', 'Klasei', 'Klablim', 'Makbon', 'Batu laya', 'Raja Ampat', 'Waisai', 'Misool', 'Salawati', 'Batanta', 'Waigeo', 'Waigeo Barat', 'Waigeo Barat Kepulauan', 'Waigeo Timur', 'Tehit', 'Meos Mansar', 'Kofiau', 'Misool Selatan', 'Misool Timur', 'Misool Barat', 'Misool Utara', 'Salawati Tengah', 'Salawati Selatan', 'Salawati Barat', 'Salawati Utara', 'Samate', 'Arborek', 'Sawinggrai', 'Yenbeser', 'Kabui', 'Saonek', 'Yenwaupnor', 'Doreh', 'Wawiyai', 'Friwen', 'Yenbuba', 'Maybrat', 'Aifat', 'Aifat Timur', 'Aifat Barat', 'Aifat Selatan', 'Aifat Utara', 'Aitinyo', 'Aitinyo Raya', 'Aitinyo Tengah', 'Aitinyo Barat', 'Aitinyo Utara', 'Ayamaru', 'Ayamaru Barat', 'Ayamaru Timur', 'Ayamaru Selatan', 'Ayamaru Utara', 'Marey', 'Kambra', 'Kambuaya', 'Fef', 'Tamina', 'Miyah', 'Kwosefo', 'Moraid', 'Mpur', 'Amberbaken', 'Mubrani', 'Senopi', 'Kebar', 'Konom', 'Sausapor', 'Sausapor', 'Tambrauw'],
  },
  {
    iso: 'ID-PT', name: 'Papua Tengah', region: 'Maluku & Papua',
    cities: ['Nabire', 'Nabire', 'Nabire Barat', 'Wanggar', 'Yaro', 'Kali Bobo', 'Nabire Barat', 'Siriwo', 'Uwapa', 'Samea', 'Teluk Umar', 'Nabire', 'Mimi', 'Paniai', 'Enarotali', 'Madi', 'Paniai Timur', 'Paniai Barat', 'Paniai Tengah', 'Paniai Wilayah', 'Paniai', 'Dogiyai', 'Kigamani', 'Mapia', 'Kamu', 'Kamu Selatan', 'Kamu Tengah', 'Kamu Timur', 'Kamu Utara', 'Kamu Barat', 'Kapiraya', 'Gome', 'Dogiyai', 'Intan Jaya', 'Sugapa', 'Hitadipa', 'Tondano', 'Bilai', 'Wandai', 'Kambuaya', 'Intan Jaya', 'Deiyai', 'Tigi', 'Tigi Barat', 'Tigi Timur', 'Kapumapa', 'Bowobado', 'Wage', 'Deiyai', 'Puncak Jaya', 'Mulia', 'Yamo', 'Ilu', 'Tingginambut', 'Gome', 'Sinak', 'Sinak Barat', 'Mosif', 'Wangbe', 'Puncak Jaya', 'Puncak', 'Sinak', 'Ilaga', 'Ilaga Barat', 'Ilaga Timur', 'Ilaga Tengah', 'Ilaga Utara', 'Ibe', 'Agandugume', 'Omukia', 'Gome', 'Mewoluk', 'Puncak', 'Mimika', 'Timika', 'Timika Jaya', 'Timika Baru', 'Iwaka', 'Mitra', 'Tembagapura', 'Agimuga', 'Jila', 'Kuala Kencana', 'Kwamki', 'Nunggai', 'Mimika Baru', 'Mimika Timur Jauh', 'Mimika Barat Jauh', 'Mimika', 'Wania', 'Hendra', 'Amamapare'],
  },
  {
    iso: 'ID-PE', name: 'Papua Pegunungan', region: 'Maluku & Papua',
    cities: ['Wamena', 'Jayawijaya', 'Wamena Kota', 'Wamena Barat', 'Wamena Timur', 'Napua', 'Walelagama', 'Asolokobal', 'Pugima', 'Pisugi', 'Bolakme', 'Eragayam', 'Karu', 'Papuma', 'Welesi', 'Hogio', 'Pirime', 'Wouma', 'Yalengga', 'Assologaima', 'Wesaput', 'Ninia', 'Trikora', 'Sokom', 'Kurulu', 'Hubikosi', 'Musatfak', 'Lanny Jaya', 'Tiwolibo', 'Bugukona', 'Wambona', 'West Bogukona', 'Zembekuma', 'Maimbaguma', 'Pirambak', 'Ndugama', 'Wurige', 'Melagi', 'Kiemba', 'Tegi', 'Tenaga', 'Pagu', 'Wondoboy', 'Munggi', 'Panggie', 'Nungi', 'Gawi', 'Buna', 'Luarem', 'Tiom', 'Nduga', 'Kenyam', 'Wosilimo', 'Mugi', 'Paro', 'Pasema', 'Nbok', 'Nungkwai', 'Kowiye', 'Yal', 'Yigye', 'Dal', 'Meagok', 'Kegayam', 'Idagi', 'Pamek', 'Kartini', 'Rumbali', 'Alama', 'Salakma', 'Kelulome', 'Godidle', 'Yalimo', 'Elelim', 'Abenaho', 'Welarek', 'Benawa', 'Yono', 'Boli', 'Wambes', 'Cuaga', 'Londua', 'Tolikara', 'Karubaga', 'Kobakma', 'Gundagi', 'Kondaga', 'Gome', 'Wina', 'Bokondini', 'Kayo', 'Wusco', 'Jiwika', 'Wendebu', 'Numbugga', 'Yamo', 'Poga', 'Witaya', 'Dogup', 'Habina', 'Wiwyapome', 'Tagime', 'Taginambut', 'Yugumuak', 'Weri', 'Nogi', 'Anawi', 'Kuncin', 'Yahukimo', 'Dekai', 'Sumohoi', 'Seradala', 'Bomela', 'Nopah', 'Soba', 'Kurima', 'Suroba', 'Tangma', 'Anggruk', 'Kabiange', 'Mamit', 'Oksibil', 'Penggodan', 'Oksepa', 'Serkadim', 'Pepera', 'Bomakia', 'Kawor', 'Okaba', 'Wanbit', 'Sobaham', 'Sumo', 'Panggema', 'Ubahak', 'Ubahali', 'Yakomi', 'Bronde'],
  },
  {
    iso: 'ID-PS', name: 'Papua Selatan', region: 'Maluku & Papua',
    cities: ['Merauke', 'Merauke', 'Semangga', 'Tanah Miring', 'Tabonji', 'Ilwayab', 'Naukenjerai', 'Kurik', 'Muting', 'Kaptel', 'Nazar', 'Okaba', 'Bupul', 'Jangka', 'Elikobel', 'Wandamu', 'Boven Digoel', 'Tanah Merah', 'Mindiptana', 'Jali', 'Waropko', 'Kouh', 'Fofi', 'Arimop', 'Anggai', 'Sesnuk', 'Nakit', 'Kaisah', 'Kombut', 'Tebu', 'Mappi', 'Kepi', 'Oksibil', 'Muting', 'Kaibar', 'Assue', 'Edera', 'Syahcame', 'Citak Mitak', 'Haju', 'Tre', 'Obaa', 'Vautho', 'Lambut', 'Pasi', 'Asmat', 'Agats', 'Atsj', 'Suator', 'Pantai Kasuari', 'Sirets', 'Suru-Suru', 'Sawa', 'Sawa Erma', 'Kolf Braza', 'Fayit', 'Aguis', 'Awar', 'Akamu', 'Kopayap'],
  },
];

/* ============ SLUG UTILITIES ============ */

export function citySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export type CityEntry = {
  name: string;
  slug: string;
  province: string;
  provinceIso: string;
  region: RegionName;
  eta: string;
};

function buildAllCities(): CityEntry[] {
  const seenSlug = new Map<string, string>(); // slug → provinceIso pertama yang memakai
  const out: CityEntry[] = [];
  for (const prov of PROVINCES) {
    const seenInProv = new Set<string>();
    for (const city of prov.cities) {
      const base = citySlug(city);
      if (seenInProv.has(base)) continue;
      seenInProv.add(base);
      /* Konflik lintas provinsi → slug diberi akhiran nama provinsi */
      let slug = base;
      if (seenSlug.has(slug) && seenSlug.get(slug) !== prov.iso) {
        slug = `${base}-${citySlug(prov.name)}`;
      } else {
        seenSlug.set(slug, prov.iso);
      }
      out.push({
        name: city,
        slug,
        province: prov.name,
        provinceIso: prov.iso,
        region: prov.region,
        eta: ETA_BY_REGION[prov.region],
      });
    }
  }
  return out;
}

export const ALL_CITIES: CityEntry[] = buildAllCities();

export function findCity(slug: string): CityEntry | undefined {
  return ALL_CITIES.find((c) => c.slug === slug);
}

export function citiesByProvince(provinceName: string): CityEntry[] {
  return ALL_CITIES.filter((c) => c.province === provinceName);
}

/** Kota populer — tampil di menu, indeks & footer */
export const POPULAR_CITY_SLUGS = [
  'jakarta-selatan', 'jakarta-pusat', 'jakarta-timur', 'jakarta-barat', 'jakarta-utara',
  'bandung', 'bekasi', 'depok', 'bogor', 'surabaya',
  'semarang', 'medan', 'makassar', 'palembang', 'yogyakarta',
  'denpasar', 'balikpapan', 'samarinda', 'tasikmalaya', 'cirebon',
  'malang', 'batam', 'pontianak', 'manado', 'padang',
];

export const POPULAR_CITIES: CityEntry[] = POPULAR_CITY_SLUGS
  .map((s) => ALL_CITIES.find((c) => c.slug === s))
  .filter((c): c is CityEntry => Boolean(c));

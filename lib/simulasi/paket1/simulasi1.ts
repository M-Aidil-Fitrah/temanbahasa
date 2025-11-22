"use server";

export const simulasiPaket1 = [
  // ========================
  // SEKSI 1 - MENDENGARKAN (40 SOAL)
  // ========================
  
  // DIALOG 1 - Rapat Kantor (5 soal)
  {
    id: "P1-S1-001",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-1.mp3",
    script: "A: Selamat pagi, Bu Rina. Apakah rapat bulanan sudah dijadwalkan?\nB: Sudah, Pak. Rapat akan dilaksanakan hari Kamis pukul 10 pagi di ruang rapat lantai 3.\nA: Baik. Apakah semua kepala divisi sudah dikonfirmasi?\nB: Sudah, Pak. Semua akan hadir kecuali Pak Budi yang sedang dinas luar kota.\nA: Kalau begitu, tolong siapkan notulensi untuk menggantikan beliau.",
    question: "Kapan rapat bulanan akan dilaksanakan?",
    options: [
      "Hari Rabu pukul 10 pagi",
      "Hari Kamis pukul 10 pagi",
      "Hari Jumat pukul 10 pagi",
      "Hari Kamis pukul 9 pagi"
    ],
    correct: "Hari Kamis pukul 10 pagi",
    explanation: "Bu Rina menyebutkan rapat akan dilaksanakan hari Kamis pukul 10 pagi."
  },
  {
    id: "P1-S1-002",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-1.mp3",
    script: "A: Selamat pagi, Bu Rina. Apakah rapat bulanan sudah dijadwalkan?\nB: Sudah, Pak. Rapat akan dilaksanakan hari Kamis pukul 10 pagi di ruang rapat lantai 3.\nA: Baik. Apakah semua kepala divisi sudah dikonfirmasi?\nB: Sudah, Pak. Semua akan hadir kecuali Pak Budi yang sedang dinas luar kota.\nA: Kalau begitu, tolong siapkan notulensi untuk menggantikan beliau.",
    question: "Di mana rapat akan dilaksanakan?",
    options: [
      "Ruang rapat lantai 2",
      "Ruang rapat lantai 3",
      "Ruang rapat lantai 4",
      "Ruang meeting lantai 3"
    ],
    correct: "Ruang rapat lantai 3",
    explanation: "Lokasi rapat disebutkan di ruang rapat lantai 3."
  },
  {
    id: "P1-S1-003",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-1.mp3",
    script: "A: Selamat pagi, Bu Rina. Apakah rapat bulanan sudah dijadwalkan?\nB: Sudah, Pak. Rapat akan dilaksanakan hari Kamis pukul 10 pagi di ruang rapat lantai 3.\nA: Baik. Apakah semua kepala divisi sudah dikonfirmasi?\nB: Sudah, Pak. Semua akan hadir kecuali Pak Budi yang sedang dinas luar kota.\nA: Kalau begitu, tolong siapkan notulensi untuk menggantikan beliau.",
    question: "Siapa yang tidak dapat hadir dalam rapat?",
    options: [
      "Bu Rina",
      "Pak Budi",
      "Semua kepala divisi",
      "Pembuat notulensi"
    ],
    correct: "Pak Budi",
    explanation: "Pak Budi tidak dapat hadir karena sedang dinas luar kota."
  },
  {
    id: "P1-S1-004",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-1.mp3",
    script: "A: Selamat pagi, Bu Rina. Apakah rapat bulanan sudah dijadwalkan?\nB: Sudah, Pak. Rapat akan dilaksanakan hari Kamis pukul 10 pagi di ruang rapat lantai 3.\nA: Baik. Apakah semua kepala divisi sudah dikonfirmasi?\nB: Sudah, Pak. Semua akan hadir kecuali Pak Budi yang sedang dinas luar kota.\nA: Kalau begitu, tolong siapkan notulensi untuk menggantikan beliau.",
    question: "Mengapa Pak Budi tidak dapat hadir?",
    options: [
      "Sedang sakit",
      "Sedang cuti",
      "Sedang dinas luar kota",
      "Sedang rapat di tempat lain"
    ],
    correct: "Sedang dinas luar kota",
    explanation: "Bu Rina menjelaskan Pak Budi sedang dinas luar kota."
  },
  {
    id: "P1-S1-005",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-1.mp3",
    script: "A: Selamat pagi, Bu Rina. Apakah rapat bulanan sudah dijadwalkan?\nB: Sudah, Pak. Rapat akan dilaksanakan hari Kamis pukul 10 pagi di ruang rapat lantai 3.\nA: Baik. Apakah semua kepala divisi sudah dikonfirmasi?\nB: Sudah, Pak. Semua akan hadir kecuali Pak Budi yang sedang dinas luar kota.\nA: Kalau begitu, tolong siapkan notulensi untuk menggantikan beliau.",
    question: "Apa yang diminta untuk disiapkan menggantikan Pak Budi?",
    options: [
      "Surat pengganti",
      "Notulensi",
      "Laporan rapat",
      "Dokumen rapat"
    ],
    correct: "Notulensi",
    explanation: "Diminta untuk menyiapkan notulensi sebagai pengganti Pak Budi."
  },

  // DIALOG 2 - Perpustakaan (5 soal)
  {
    id: "P1-S1-006",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-2.mp3",
    script: "A: Permisi, saya ingin meminjam buku tentang sejarah Indonesia.\nB: Silakan. Buku sejarah ada di rak nomor 5, bagian kiri.\nA: Berapa lama masa peminjaman bukunya?\nB: Untuk buku umum, masa peminjamannya dua minggu. Bisa diperpanjang satu kali.\nA: Apakah perlu membawa kartu anggota?\nB: Ya, kartu anggota wajib dibawa setiap meminjam buku.",
    question: "Buku apa yang ingin dipinjam pengunjung?",
    options: [
      "Buku sastra Indonesia",
      "Buku sejarah Indonesia",
      "Buku geografi Indonesia",
      "Buku budaya Indonesia"
    ],
    correct: "Buku sejarah Indonesia",
    explanation: "Pengunjung menyebutkan ingin meminjam buku tentang sejarah Indonesia."
  },
  {
    id: "P1-S1-007",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-2.mp3",
    script: "A: Permisi, saya ingin meminjam buku tentang sejarah Indonesia.\nB: Silakan. Buku sejarah ada di rak nomor 5, bagian kiri.\nA: Berapa lama masa peminjaman bukunya?\nB: Untuk buku umum, masa peminjamannya dua minggu. Bisa diperpanjang satu kali.\nA: Apakah perlu membawa kartu anggota?\nB: Ya, kartu anggota wajib dibawa setiap meminjam buku.",
    question: "Di mana letak buku sejarah?",
    options: [
      "Rak nomor 3, bagian kanan",
      "Rak nomor 5, bagian kanan",
      "Rak nomor 5, bagian kiri",
      "Rak nomor 4, bagian kiri"
    ],
    correct: "Rak nomor 5, bagian kiri",
    explanation: "Petugas menyebutkan buku sejarah ada di rak nomor 5, bagian kiri."
  },
  {
    id: "P1-S1-008",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-2.mp3",
    script: "A: Permisi, saya ingin meminjam buku tentang sejarah Indonesia.\nB: Silakan. Buku sejarah ada di rak nomor 5, bagian kiri.\nA: Berapa lama masa peminjaman bukunya?\nB: Untuk buku umum, masa peminjamannya dua minggu. Bisa diperpanjang satu kali.\nA: Apakah perlu membawa kartu anggota?\nB: Ya, kartu anggota wajib dibawa setiap meminjam buku.",
    question: "Berapa lama masa peminjaman buku umum?",
    options: [
      "Satu minggu",
      "Dua minggu",
      "Tiga minggu",
      "Satu bulan"
    ],
    correct: "Dua minggu",
    explanation: "Petugas menjelaskan masa peminjaman buku umum adalah dua minggu."
  },
  {
    id: "P1-S1-009",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-2.mp3",
    script: "A: Permisi, saya ingin meminjam buku tentang sejarah Indonesia.\nB: Silakan. Buku sejarah ada di rak nomor 5, bagian kiri.\nA: Berapa lama masa peminjaman bukunya?\nB: Untuk buku umum, masa peminjamannya dua minggu. Bisa diperpanjang satu kali.\nA: Apakah perlu membawa kartu anggota?\nB: Ya, kartu anggota wajib dibawa setiap meminjam buku.",
    question: "Berapa kali buku dapat diperpanjang masa peminjamannya?",
    options: [
      "Tidak bisa diperpanjang",
      "Satu kali",
      "Dua kali",
      "Tiga kali"
    ],
    correct: "Satu kali",
    explanation: "Petugas menyebutkan buku bisa diperpanjang satu kali."
  },
  {
    id: "P1-S1-010",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-2.mp3",
    script: "A: Permisi, saya ingin meminjam buku tentang sejarah Indonesia.\nB: Silakan. Buku sejarah ada di rak nomor 5, bagian kiri.\nA: Berapa lama masa peminjaman bukunya?\nB: Untuk buku umum, masa peminjamannya dua minggu. Bisa diperpanjang satu kali.\nA: Apakah perlu membawa kartu anggota?\nB: Ya, kartu anggota wajib dibawa setiap meminjam buku.",
    question: "Apa yang wajib dibawa saat meminjam buku?",
    options: [
      "KTP",
      "Kartu pelajar",
      "Kartu anggota",
      "Surat izin"
    ],
    correct: "Kartu anggota",
    explanation: "Petugas menjelaskan kartu anggota wajib dibawa setiap meminjam buku."
  },

  // DIALOG 3 - Stasiun Kereta (5 soal)
  {
    id: "P1-S1-011",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-3.mp3",
    script: "A: Permisi, apakah kereta jurusan Bandung sudah berangkat?\nB: Belum, Pak. Kereta akan berangkat 15 menit lagi dari peron 2.\nA: Apakah ada penundaan jadwal?\nB: Tidak ada penundaan. Kereta tepat waktu hari ini.\nA: Terima kasih informasinya.",
    question: "Kereta tujuan mana yang ditanyakan penumpang?",
    options: [
      "Jakarta",
      "Surabaya",
      "Bandung",
      "Yogyakarta"
    ],
    correct: "Bandung",
    explanation: "Penumpang menanyakan kereta jurusan Bandung."
  },
  {
    id: "P1-S1-012",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-3.mp3",
    script: "A: Permisi, apakah kereta jurusan Bandung sudah berangkat?\nB: Belum, Pak. Kereta akan berangkat 15 menit lagi dari peron 2.\nA: Apakah ada penundaan jadwal?\nB: Tidak ada penundaan. Kereta tepat waktu hari ini.\nA: Terima kasih informasinya.",
    question: "Apakah kereta sudah berangkat?",
    options: [
      "Sudah berangkat",
      "Belum berangkat",
      "Dibatalkan",
      "Ditunda"
    ],
    correct: "Belum berangkat",
    explanation: "Petugas menjawab kereta belum berangkat."
  },
  {
    id: "P1-S1-013",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-3.mp3",
    script: "A: Permisi, apakah kereta jurusan Bandung sudah berangkat?\nB: Belum, Pak. Kereta akan berangkat 15 menit lagi dari peron 2.\nA: Apakah ada penundaan jadwal?\nB: Tidak ada penundaan. Kereta tepat waktu hari ini.\nA: Terima kasih informasinya.",
    question: "Berapa menit lagi kereta akan berangkat?",
    options: [
      "10 menit",
      "15 menit",
      "20 menit",
      "30 menit"
    ],
    correct: "15 menit",
    explanation: "Petugas mengatakan kereta akan berangkat 15 menit lagi."
  },
  {
    id: "P1-S1-014",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-3.mp3",
    script: "A: Permisi, apakah kereta jurusan Bandung sudah berangkat?\nB: Belum, Pak. Kereta akan berangkat 15 menit lagi dari peron 2.\nA: Apakah ada penundaan jadwal?\nB: Tidak ada penundaan. Kereta tepat waktu hari ini.\nA: Terima kasih informasinya.",
    question: "Dari peron berapa kereta akan berangkat?",
    options: [
      "Peron 1",
      "Peron 2",
      "Peron 3",
      "Peron 4"
    ],
    correct: "Peron 2",
    explanation: "Kereta akan berangkat dari peron 2."
  },
  {
    id: "P1-S1-015",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-3.mp3",
    script: "A: Permisi, apakah kereta jurusan Bandung sudah berangkat?\nB: Belum, Pak. Kereta akan berangkat 15 menit lagi dari peron 2.\nA: Apakah ada penundaan jadwal?\nB: Tidak ada penundaan. Kereta tepat waktu hari ini.\nA: Terima kasih informasinya.",
    question: "Bagaimana kondisi jadwal kereta hari ini?",
    options: [
      "Ada penundaan",
      "Dibatalkan",
      "Tepat waktu",
      "Dipercepat"
    ],
    correct: "Tepat waktu",
    explanation: "Petugas menyebutkan tidak ada penundaan, kereta tepat waktu."
  },

  // DIALOG 4 - Rumah Sakit (5 soal)
  {
    id: "P1-S1-016",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-4.mp3",
    script: "A: Selamat siang, Dokter. Bagaimana kondisi pasien di ruang 205?\nB: Kondisinya sudah membaik, Suster. Demamnya sudah turun sejak tadi pagi.\nA: Apakah obatnya perlu dilanjutkan?\nB: Ya, berikan obat yang sama selama tiga hari ke depan.\nA: Baik, Dokter. Apakah pasien sudah boleh makan makanan biasa?\nB: Boleh, tetapi hindari makanan yang terlalu pedas atau berminyak.",
    question: "Di ruang berapa pasien yang dibicarakan?",
    options: [
      "Ruang 203",
      "Ruang 204",
      "Ruang 205",
      "Ruang 206"
    ],
    correct: "Ruang 205",
    explanation: "Suster menanyakan kondisi pasien di ruang 205."
  },
  {
    id: "P1-S1-017",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-4.mp3",
    script: "A: Selamat siang, Dokter. Bagaimana kondisi pasien di ruang 205?\nB: Kondisinya sudah membaik, Suster. Demamnya sudah turun sejak tadi pagi.\nA: Apakah obatnya perlu dilanjutkan?\nB: Ya, berikan obat yang sama selama tiga hari ke depan.\nA: Baik, Dokter. Apakah pasien sudah boleh makan makanan biasa?\nB: Boleh, tetapi hindari makanan yang terlalu pedas atau berminyak.",
    question: "Bagaimana kondisi pasien saat ini?",
    options: [
      "Semakin parah",
      "Tetap sama",
      "Sudah membaik",
      "Kritis"
    ],
    correct: "Sudah membaik",
    explanation: "Dokter menyebutkan kondisi pasien sudah membaik."
  },
  {
    id: "P1-S1-018",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-4.mp3",
    script: "A: Selamat siang, Dokter. Bagaimana kondisi pasien di ruang 205?\nB: Kondisinya sudah membaik, Suster. Demamnya sudah turun sejak tadi pagi.\nA: Apakah obatnya perlu dilanjutkan?\nB: Ya, berikan obat yang sama selama tiga hari ke depan.\nA: Baik, Dokter. Apakah pasien sudah boleh makan makanan biasa?\nB: Boleh, tetapi hindari makanan yang terlalu pedas atau berminyak.",
    question: "Kapan demam pasien mulai turun?",
    options: [
      "Sejak kemarin",
      "Sejak tadi pagi",
      "Sejak siang tadi",
      "Sejak semalam"
    ],
    correct: "Sejak tadi pagi",
    explanation: "Dokter menjelaskan demam sudah turun sejak tadi pagi."
  },
  {
    id: "P1-S1-019",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-4.mp3",
    script: "A: Selamat siang, Dokter. Bagaimana kondisi pasien di ruang 205?\nB: Kondisinya sudah membaik, Suster. Demamnya sudah turun sejak tadi pagi.\nA: Apakah obatnya perlu dilanjutkan?\nB: Ya, berikan obat yang sama selama tiga hari ke depan.\nA: Baik, Dokter. Apakah pasien sudah boleh makan makanan biasa?\nB: Boleh, tetapi hindari makanan yang terlalu pedas atau berminyak.",
    question: "Berapa hari obat perlu dilanjutkan?",
    options: [
      "Satu hari",
      "Dua hari",
      "Tiga hari",
      "Empat hari"
    ],
    correct: "Tiga hari",
    explanation: "Dokter meminta obat diberikan selama tiga hari ke depan."
  },
  {
    id: "P1-S1-020",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-4.mp3",
    script: "A: Selamat siang, Dokter. Bagaimana kondisi pasien di ruang 205?\nB: Kondisinya sudah membaik, Suster. Demamnya sudah turun sejak tadi pagi.\nA: Apakah obatnya perlu dilanjutkan?\nB: Ya, berikan obat yang sama selama tiga hari ke depan.\nA: Baik, Dokter. Apakah pasien sudah boleh makan makanan biasa?\nB: Boleh, tetapi hindari makanan yang terlalu pedas atau berminyak.",
    question: "Makanan apa yang harus dihindari pasien?",
    options: [
      "Makanan manis dan asin",
      "Makanan pedas dan berminyak",
      "Makanan dingin dan panas",
      "Makanan keras dan lembek"
    ],
    correct: "Makanan pedas dan berminyak",
    explanation: "Dokter menyarankan hindari makanan pedas atau berminyak."
  },

  // MONOLOG 1 - Pengumuman Sekolah (5 soal)
  {
    id: "P1-S1-021",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-1.mp3",
    script: "Pengumuman untuk seluruh siswa kelas 12. Kegiatan ujian praktik akan dilaksanakan minggu depan, mulai hari Senin hingga Jumat. Setiap siswa wajib membawa peralatan praktik sesuai dengan mata pelajaran masing-masing. Bagi siswa yang berhalangan hadir karena sakit, wajib menyerahkan surat keterangan dokter paling lambat tiga hari setelah ujian. Ujian susulan akan diadakan pada minggu berikutnya. Terima kasih atas perhatiannya.",
    question: "Untuk siapa pengumuman ini ditujukan?",
    options: [
      "Seluruh siswa kelas 11",
      "Seluruh siswa kelas 12",
      "Seluruh guru",
      "Seluruh siswa"
    ],
    correct: "Seluruh siswa kelas 12",
    explanation: "Pengumuman ditujukan untuk seluruh siswa kelas 12."
  },
  {
    id: "P1-S1-022",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-1.mp3",
    script: "Pengumuman untuk seluruh siswa kelas 12. Kegiatan ujian praktik akan dilaksanakan minggu depan, mulai hari Senin hingga Jumat. Setiap siswa wajib membawa peralatan praktik sesuai dengan mata pelajaran masing-masing. Bagi siswa yang berhalangan hadir karena sakit, wajib menyerahkan surat keterangan dokter paling lambat tiga hari setelah ujian. Ujian susulan akan diadakan pada minggu berikutnya. Terima kasih atas perhatiannya.",
    question: "Kapan ujian praktik akan dilaksanakan?",
    options: [
      "Minggu ini",
      "Minggu depan",
      "Bulan depan",
      "Dua minggu lagi"
    ],
    correct: "Minggu depan",
    explanation: "Ujian praktik akan dilaksanakan minggu depan."
  },
  {
    id: "P1-S1-023",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-1.mp3",
    script: "Pengumuman untuk seluruh siswa kelas 12. Kegiatan ujian praktik akan dilaksanakan minggu depan, mulai hari Senin hingga Jumat. Setiap siswa wajib membawa peralatan praktik sesuai dengan mata pelajaran masing-masing. Bagi siswa yang berhalangan hadir karena sakit, wajib menyerahkan surat keterangan dokter paling lambat tiga hari setelah ujian. Ujian susulan akan diadakan pada minggu berikutnya. Terima kasih atas perhatiannya.",
    question: "Berapa hari ujian praktik berlangsung?",
    options: [
      "3 hari (Senin-Rabu)",
      "4 hari (Senin-Kamis)",
      "5 hari (Senin-Jumat)",
      "6 hari (Senin-Sabtu)"
    ],
    correct: "5 hari (Senin-Jumat)",
    explanation: "Ujian praktik dilaksanakan mulai hari Senin hingga Jumat (5 hari)."
  },
  {
    id: "P1-S1-024",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-1.mp3",
    script: "Pengumuman untuk seluruh siswa kelas 12. Kegiatan ujian praktik akan dilaksanakan minggu depan, mulai hari Senin hingga Jumat. Setiap siswa wajib membawa peralatan praktik sesuai dengan mata pelajaran masing-masing. Bagi siswa yang berhalangan hadir karena sakit, wajib menyerahkan surat keterangan dokter paling lambat tiga hari setelah ujian. Ujian susulan akan diadakan pada minggu berikutnya. Terima kasih atas perhatiannya.",
    question: "Batas waktu penyerahan surat keterangan dokter adalah?",
    options: [
      "Satu hari setelah ujian",
      "Dua hari setelah ujian",
      "Tiga hari setelah ujian",
      "Seminggu setelah ujian"
    ],
    correct: "Tiga hari setelah ujian",
    explanation: "Surat keterangan dokter harus diserahkan paling lambat tiga hari setelah ujian."
  },
  {
    id: "P1-S1-025",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-1.mp3",
    script: "Pengumuman untuk seluruh siswa kelas 12. Kegiatan ujian praktik akan dilaksanakan minggu depan, mulai hari Senin hingga Jumat. Setiap siswa wajib membawa peralatan praktik sesuai dengan mata pelajaran masing-masing. Bagi siswa yang berhalangan hadir karena sakit, wajib menyerahkan surat keterangan dokter paling lambat tiga hari setelah ujian. Ujian susulan akan diadakan pada minggu berikutnya. Terima kasih atas perhatiannya.",
    question: "Kapan ujian susulan akan diadakan?",
    options: [
      "Hari Sabtu minggu depan",
      "Minggu berikutnya",
      "Dua minggu kemudian",
      "Bulan depan"
    ],
    correct: "Minggu berikutnya",
    explanation: "Ujian susulan akan diadakan pada minggu berikutnya."
  },

  // MONOLOG 2 - Berita Cuaca (5 soal)
  {
    id: "P1-S1-026",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-2.mp3",
    script: "Prakiraan cuaca untuk wilayah Jakarta dan sekitarnya hari ini. Pagi hari cuaca cerah berawan dengan suhu sekitar 26 derajat celsius. Memasuki siang hari, suhu akan meningkat hingga 32 derajat. Sore hari diperkirakan akan turun hujan ringan hingga sedang di beberapa wilayah. Masyarakat diimbau membawa payung atau jas hujan saat bepergian. Cuaca diprediksi kembali cerah pada malam hari dengan suhu 24 derajat celsius.",
    question: "Untuk wilayah mana prakiraan cuaca ini?",
    options: [
      "Bandung dan sekitarnya",
      "Jakarta dan sekitarnya",
      "Surabaya dan sekitarnya",
      "Yogyakarta dan sekitarnya"
    ],
    correct: "Jakarta dan sekitarnya",
    explanation: "Prakiraan cuaca untuk wilayah Jakarta dan sekitarnya."
  },
  {
    id: "P1-S1-027",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-2.mp3",
    script: "Prakiraan cuaca untuk wilayah Jakarta dan sekitarnya hari ini. Pagi hari cuaca cerah berawan dengan suhu sekitar 26 derajat celsius. Memasuki siang hari, suhu akan meningkat hingga 32 derajat. Sore hari diperkirakan akan turun hujan ringan hingga sedang di beberapa wilayah. Masyarakat diimbau membawa payung atau jas hujan saat bepergian. Cuaca diprediksi kembali cerah pada malam hari dengan suhu 24 derajat celsius.",
    question: "Berapa suhu pada pagi hari?",
    options: [
      "24 derajat celsius",
      "26 derajat celsius",
      "28 derajat celsius",
      "32 derajat celsius"
    ],
    correct: "26 derajat celsius",
    explanation: "Suhu pagi hari sekitar 26 derajat celsius."
  },
  {
    id: "P1-S1-028",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-2.mp3",
    script: "Prakiraan cuaca untuk wilayah Jakarta dan sekitarnya hari ini. Pagi hari cuaca cerah berawan dengan suhu sekitar 26 derajat celsius. Memasuki siang hari, suhu akan meningkat hingga 32 derajat. Sore hari diperkirakan akan turun hujan ringan hingga sedang di beberapa wilayah. Masyarakat diimbau membawa payung atau jas hujan saat bepergian. Cuaca diprediksi kembali cerah pada malam hari dengan suhu 24 derajat celsius.",
    question: "Berapa suhu tertinggi pada siang hari?",
    options: [
      "28 derajat celsius",
      "30 derajat celsius",
      "32 derajat celsius",
      "34 derajat celsius"
    ],
    correct: "32 derajat celsius",
    explanation: "Suhu akan meningkat hingga 32 derajat pada siang hari."
  },
  {
    id: "P1-S1-029",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-2.mp3",
    script: "Prakiraan cuaca untuk wilayah Jakarta dan sekitarnya hari ini. Pagi hari cuaca cerah berawan dengan suhu sekitar 26 derajat celsius. Memasuki siang hari, suhu akan meningkat hingga 32 derajat. Sore hari diperkirakan akan turun hujan ringan hingga sedang di beberapa wilayah. Masyarakat diimbau membawa payung atau jas hujan saat bepergian. Cuaca diprediksi kembali cerah pada malam hari dengan suhu 24 derajat celsius.",
    question: "Bagaimana cuaca pada sore hari?",
    options: [
      "Cerah berawan",
      "Mendung",
      "Hujan ringan hingga sedang",
      "Hujan lebat"
    ],
    correct: "Hujan ringan hingga sedang",
    explanation: "Sore hari diperkirakan turun hujan ringan hingga sedang."
  },
  {
    id: "P1-S1-030",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-2.mp3",
    script: "Prakiraan cuaca untuk wilayah Jakarta dan sekitarnya hari ini. Pagi hari cuaca cerah berawan dengan suhu sekitar 26 derajat celsius. Memasuki siang hari, suhu akan meningkat hingga 32 derajat. Sore hari diperkirakan akan turun hujan ringan hingga sedang di beberapa wilayah. Masyarakat diimbau membawa payung atau jas hujan saat bepergian. Cuaca diprediksi kembali cerah pada malam hari dengan suhu 24 derajat celsius.",
    question: "Apa imbauan untuk masyarakat?",
    options: [
      "Tetap di rumah",
      "Membawa payung atau jas hujan",
      "Mengurangi aktivitas luar",
      "Memakai kacamata hitam"
    ],
    correct: "Membawa payung atau jas hujan",
    explanation: "Masyarakat diimbau membawa payung atau jas hujan saat bepergian."
  },

  // MONOLOG 3 - Iklan Produk (5 soal)
  {
    id: "P1-S1-031",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-3.mp3",
    script: "Memperkenalkan sabun mandi herbal \"Segar Alami\" yang terbuat dari bahan-bahan alami pilihan. Sabun ini mengandung ekstrak lidah buaya dan minyak zaitun yang dapat melembapkan kulit. Cocok untuk semua jenis kulit, termasuk kulit sensitif. Tersedia dalam tiga varian aroma: lavender, melati, dan peppermint. Dapatkan diskon 30 persen untuk pembelian di minggu pertama peluncuran. Sabun mandi \"Segar Alami\", pilihan tepat untuk kulit sehat dan segar.",
    question: "Apa nama produk yang diiklankan?",
    options: [
      "Sabun Herbal",
      "Segar Alami",
      "Sabun Melati",
      "Kulit Sehat"
    ],
    correct: "Segar Alami",
    explanation: "Nama produk yang diiklankan adalah sabun mandi \"Segar Alami\"."
  },
  {
    id: "P1-S1-032",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-3.mp3",
    script: "Memperkenalkan sabun mandi herbal \"Segar Alami\" yang terbuat dari bahan-bahan alami pilihan. Sabun ini mengandung ekstrak lidah buaya dan minyak zaitun yang dapat melembapkan kulit. Cocok untuk semua jenis kulit, termasuk kulit sensitif. Tersedia dalam tiga varian aroma: lavender, melati, dan peppermint. Dapatkan diskon 30 persen untuk pembelian di minggu pertama peluncuran. Sabun mandi \"Segar Alami\", pilihan tepat untuk kulit sehat dan segar.",
    question: "Apa kandungan utama sabun ini?",
    options: [
      "Ekstrak mawar dan madu",
      "Ekstrak lidah buaya dan minyak zaitun",
      "Ekstrak melati dan susu",
      "Ekstrak peppermint dan vitamin E"
    ],
    correct: "Ekstrak lidah buaya dan minyak zaitun",
    explanation: "Sabun mengandung ekstrak lidah buaya dan minyak zaitun."
  },
  {
    id: "P1-S1-033",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-3.mp3",
    script: "Memperkenalkan sabun mandi herbal \"Segar Alami\" yang terbuat dari bahan-bahan alami pilihan. Sabun ini mengandung ekstrak lidah buaya dan minyak zaitun yang dapat melembapkan kulit. Cocok untuk semua jenis kulit, termasuk kulit sensitif. Tersedia dalam tiga varian aroma: lavender, melati, dan peppermint. Dapatkan diskon 30 persen untuk pembelian di minggu pertama peluncuran. Sabun mandi \"Segar Alami\", pilihan tepat untuk kulit sehat dan segar.",
    question: "Berapa varian aroma yang tersedia?",
    options: [
      "Dua varian",
      "Tiga varian",
      "Empat varian",
      "Lima varian"
    ],
    correct: "Tiga varian",
    explanation: "Tersedia dalam tiga varian aroma."
  },
  {
    id: "P1-S1-034",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-3.mp3",
    script: "Memperkenalkan sabun mandi herbal \"Segar Alami\" yang terbuat dari bahan-bahan alami pilihan. Sabun ini mengandung ekstrak lidah buaya dan minyak zaitun yang dapat melembapkan kulit. Cocok untuk semua jenis kulit, termasuk kulit sensitif. Tersedia dalam tiga varian aroma: lavender, melati, dan peppermint. Dapatkan diskon 30 persen untuk pembelian di minggu pertama peluncuran. Sabun mandi \"Segar Alami\", pilihan tepat untuk kulit sehat dan segar.",
    question: "Berapa persen diskon yang ditawarkan?",
    options: [
      "20 persen",
      "25 persen",
      "30 persen",
      "40 persen"
    ],
    correct: "30 persen",
    explanation: "Diskon yang ditawarkan sebesar 30 persen."
  },
  {
    id: "P1-S1-035",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-3.mp3",
    script: "Memperkenalkan sabun mandi herbal \"Segar Alami\" yang terbuat dari bahan-bahan alami pilihan. Sabun ini mengandung ekstrak lidah buaya dan minyak zaitun yang dapat melembapkan kulit. Cocok untuk semua jenis kulit, termasuk kulit sensitif. Tersedia dalam tiga varian aroma: lavender, melati, dan peppermint. Dapatkan diskon 30 persen untuk pembelian di minggu pertama peluncuran. Sabun mandi \"Segar Alami\", pilihan tepat untuk kulit sehat dan segar.",
    question: "Kapan periode diskon berlaku?",
    options: [
      "Minggu pertama peluncuran",
      "Bulan pertama peluncuran",
      "Hari pertama peluncuran",
      "Selamanya"
    ],
    correct: "Minggu pertama peluncuran",
    explanation: "Diskon berlaku untuk pembelian di minggu pertama peluncuran."
  },

  // MONOLOG 4 - Informasi Museum (5 soal)
  {
    id: "P1-S1-036",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-4.mp3",
    script: "Selamat datang di Museum Nasional Indonesia. Museum ini dibuka setiap hari kecuali hari Senin, mulai pukul 8 pagi hingga 4 sore. Harga tiket masuk untuk dewasa adalah 10 ribu rupiah, sedangkan untuk pelajar dan anak-anak 5 ribu rupiah. Pengunjung tidak diperkenankan membawa makanan dan minuman ke dalam ruang pameran. Fotografi tanpa blitz diperbolehkan. Untuk informasi lebih lanjut, silakan hubungi petugas informasi di lobi utama.",
    question: "Pada hari apa museum tutup?",
    options: [
      "Hari Minggu",
      "Hari Senin",
      "Hari Sabtu",
      "Hari Jumat"
    ],
    correct: "Hari Senin",
    explanation: "Museum dibuka setiap hari kecuali hari Senin."
  },
  {
    id: "P1-S1-037",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-4.mp3",
    script: "Selamat datang di Museum Nasional Indonesia. Museum ini dibuka setiap hari kecuali hari Senin, mulai pukul 8 pagi hingga 4 sore. Harga tiket masuk untuk dewasa adalah 10 ribu rupiah, sedangkan untuk pelajar dan anak-anak 5 ribu rupiah. Pengunjung tidak diperkenankan membawa makanan dan minuman ke dalam ruang pameran. Fotografi tanpa blitz diperbolehkan. Untuk informasi lebih lanjut, silakan hubungi petugas informasi di lobi utama.",
    question: "Pukul berapa museum dibuka?",
    options: [
      "Pukul 7 pagi",
      "Pukul 8 pagi",
      "Pukul 9 pagi",
      "Pukul 10 pagi"
    ],
    correct: "Pukul 8 pagi",
    explanation: "Museum dibuka mulai pukul 8 pagi."
  },
  {
    id: "P1-S1-038",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-4.mp3",
    script: "Selamat datang di Museum Nasional Indonesia. Museum ini dibuka setiap hari kecuali hari Senin, mulai pukul 8 pagi hingga 4 sore. Harga tiket masuk untuk dewasa adalah 10 ribu rupiah, sedangkan untuk pelajar dan anak-anak 5 ribu rupiah. Pengunjung tidak diperkenankan membawa makanan dan minuman ke dalam ruang pameran. Fotografi tanpa blitz diperbolehkan. Untuk informasi lebih lanjut, silakan hubungi petugas informasi di lobi utama.",
    question: "Berapa harga tiket untuk dewasa?",
    options: [
      "5 ribu rupiah",
      "10 ribu rupiah",
      "15 ribu rupiah",
      "20 ribu rupiah"
    ],
    correct: "10 ribu rupiah",
    explanation: "Harga tiket untuk dewasa adalah 10 ribu rupiah."
  },
  {
    id: "P1-S1-039",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-4.mp3",
    script: "Selamat datang di Museum Nasional Indonesia. Museum ini dibuka setiap hari kecuali hari Senin, mulai pukul 8 pagi hingga 4 sore. Harga tiket masuk untuk dewasa adalah 10 ribu rupiah, sedangkan untuk pelajar dan anak-anak 5 ribu rupiah. Pengunjung tidak diperkenankan membawa makanan dan minuman ke dalam ruang pameran. Fotografi tanpa blitz diperbolehkan. Untuk informasi lebih lanjut, silakan hubungi petugas informasi di lobi utama.",
    question: "Apa yang tidak diperkenankan dibawa ke ruang pameran?",
    options: [
      "Kamera",
      "Tas",
      "Makanan dan minuman",
      "Handphone"
    ],
    correct: "Makanan dan minuman",
    explanation: "Pengunjung tidak diperkenankan membawa makanan dan minuman."
  },
  {
    id: "P1-S1-040",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-4.mp3",
    script: "Selamat datang di Museum Nasional Indonesia. Museum ini dibuka setiap hari kecuali hari Senin, mulai pukul 8 pagi hingga 4 sore. Harga tiket masuk untuk dewasa adalah 10 ribu rupiah, sedangkan untuk pelajar dan anak-anak 5 ribu rupiah. Pengunjung tidak diperkenankan membawa makanan dan minuman ke dalam ruang pameran. Fotografi tanpa blitz diperbolehkan. Untuk informasi lebih lanjut, silakan hubungi petugas informasi di lobi utama.",
    question: "Bagaimana aturan fotografi di museum?",
    options: [
      "Tidak boleh foto sama sekali",
      "Boleh foto dengan blitz",
      "Boleh foto tanpa blitz",
      "Hanya boleh foto di luar ruangan"
    ],
    correct: "Boleh foto tanpa blitz",
    explanation: "Fotografi tanpa blitz diperbolehkan."
  },

  // ========================
  // SEKSI 2 - MERESPONS KAIDAH (32 SOAL)
  // ========================
  
  {
    id: "P1-S2-001",
    section: "kaidah",
    statementX: "Apakah toko ini selalu sibuk?",
    optionsX: ["(A) berisik", "(B) ramai"],
    statementY: "Tidak. Kadang-kadang sepi.",
    optionsY: ["(C) sunyi", "(D) tenang"],
    correct: "B",
    explanation: "Kata 'ramai' adalah antonim yang tepat untuk 'sepi' dalam konteks toko."
  },
  {
    id: "P1-S2-002",
    section: "kaidah",
    statementX: "Cuaca hari ini sangat dingin.",
    optionsX: ["(A) Sangat dingin cuaca hari ini", "(B) Sangat dingin hari ini cuaca"],
    statementY: "Benar. Kemarin padahal panas sekali.",
    optionsY: ["(C) Padahal, kemarin panas sekali", "(D) Panas sekali padahal, kemarin"],
    correct: "C",
    explanation: "Urutan kata yang benar: 'Padahal, kemarin panas sekali'."
  },
  {
    id: "P1-S2-003",
    section: "kaidah",
    statementX: "Salah satu layanan di pos pelayanan terpadu (posyandu)",
    optionsX: ["(A) Pos Pelayanan Terpadu (Posyandu)", "(B) pos pelayanan terpadu (Posyandu)"],
    statementY: "adalah imunisasi yang penting untuk tumbuh kembang anak - anak.",
    optionsY: ["(C) tumbuh kembang anak-anak", "(D) tumbuh kembang anak - anak"],
    correct: "C",
    explanation: "Penulisan kata ulang tanpa spasi: 'anak-anak'."
  },
  {
    id: "P1-S2-004",
    section: "kaidah",
    statementX: "Pancasila adalah dasar negara Republik Indonesia",
    optionsX: ["(A) yaitu dasar", "(B) merupakan landasan"],
    statementY: "yang terdiri dari lima sila.",
    optionsY: ["(C) tersusun atas", "(D) terdiri atas"],
    correct: "D",
    explanation: "Frasa yang tepat adalah 'terdiri atas' atau 'terdiri dari'."
  },
  {
    id: "P1-S2-005",
    section: "kaidah",
    statementX: "Dengan pemberian sedikit bubuk kayu manis pada minuman jahe,",
    optionsX: ["(A) Dengan diberikan kayu manis sedikit", "(B) Memberikan sedikit bubuk kayu manis"],
    statementY: "maka menambah cita rasa minuman tersebut.",
    optionsY: ["(C) bertambahlah cita rasa minuman tersebut", "(D) maka minuman tersebut cita rasanya bertambah"],
    correct: "C",
    explanation: "Struktur kalimat efektif tanpa kata 'maka': 'bertambahlah cita rasa'."
  },
  {
    id: "P1-S2-006",
    section: "kaidah",
    statementX: "Si anak lahir pada tanggal ... Oktober 2024.",
    optionsX: ["(A) 5", "(B) 0"],
    statementY: "Acara berlangsung pada hari ....",
    optionsY: ["(C) Sabtu", "(D) Minggu"],
    correct: "D",
    explanation: "Berdasarkan tanggal lahir 16 Oktober 2024, acara pada Minggu 23 Oktober."
  },
  {
    id: "P1-S2-007",
    section: "kaidah",
    statementX: "Tempat acara terletak di jalan ....",
    optionsX: ["(A) Baru", "(B) Pasar"],
    statementY: "Acara dilaksanakan pada ... hari.",
    optionsY: ["(C) pagi", "(D) malam"],
    correct: "D",
    explanation: "Lokasi di Jalan Asoka dan waktu pukul 09.00 hingga selesai (malam)."
  },
  {
    id: "P1-S2-008",
    section: "kaidah",
    statementX: "Siapa nama ibu si anak?",
    optionsX: ["(A) Putri.", "(B) Sofia."],
    statementY: "Nama bayi perempuan yang cocok adalah .....",
    optionsY: ["(C) Jamila.", "(D) Bunga."],
    correct: "D",
    explanation: "Nama bayi adalah Bunga Jamila (nama depan: Bunga)."
  },
  {
    id: "P1-S2-009",
    section: "kaidah",
    statementX: "Saya pergi ke rumah sakit untuk menjenguk nenek.",
    optionsX: ["(A) Rumah Sakit", "(B) rumah sakit"],
    statementY: "Dokter memberikan resep obat kepada pasien.",
    optionsY: ["(C) Dokter", "(D) dokter"],
    correct: "B",
    explanation: "'Rumah sakit' adalah kata umum, ditulis dengan huruf kecil."
  },
  {
    id: "P1-S2-010",
    section: "kaidah",
    statementX: "Ibu membeli sayur-sayuran di pasar.",
    optionsX: ["(A) sayur - sayuran", "(B) sayur-sayuran"],
    statementY: "Anak-anak bermain di taman.",
    optionsY: ["(C) Anak - anak", "(D) Anak-anak"],
    correct: "D",
    explanation: "Kata ulang ditulis dengan tanda hubung tanpa spasi."
  },
  {
    id: "P1-S2-011",
    section: "kaidah",
    statementX: "Mereka bekerja sama dalam proyek ini.",
    optionsX: ["(A) bekerja sama", "(B) bekerjasama"],
    statementY: "Kami harus saling tolong-menolong.",
    optionsY: ["(C) tolong-menolong", "(D) tolong menolong"],
    correct: "C",
    explanation: "Kata ulang berimbuhan ditulis dengan tanda hubung."
  },
  {
    id: "P1-S2-012",
    section: "kaidah",
    statementX: "Ia membaca buku di perpustakaan.",
    optionsX: ["(A) di perpustakaan", "(B) diperpustakaan"],
    statementY: "Kami belajar ke sekolah setiap hari.",
    optionsY: ["(C) ke sekolah", "(D) kesekolah"],
    correct: "A",
    explanation: "Kata depan 'di' dan 'ke' ditulis terpisah dari kata yang mengikutinya."
  },
  {
    id: "P1-S2-013",
    section: "kaidah",
    statementX: "Presiden Joko Widodo berkunjung ke daerah tersebut.",
    optionsX: ["(A) Presiden", "(B) presiden"],
    statementY: "Menteri pendidikan memberikan sambutan.",
    optionsY: ["(C) Menteri Pendidikan", "(D) menteri pendidikan"],
    correct: "A",
    explanation: "Jabatan yang diikuti nama ditulis dengan huruf kapital."
  },
  {
    id: "P1-S2-014",
    section: "kaidah",
    statementX: "Kami akan bertemu pada hari Senin.",
    optionsX: ["(A) hari Senin", "(B) Hari Senin"],
    statementY: "Acara dimulai pada bulan Januari.",
    optionsY: ["(C) bulan Januari", "(D) Bulan Januari"],
    correct: "A",
    explanation: "Kata 'hari' dan 'bulan' ditulis dengan huruf kecil."
  },
  {
    id: "P1-S2-015",
    section: "kaidah",
    statementX: "Dia membeli 3 kg beras.",
    optionsX: ["(A) 3 kg", "(B) 3kg"],
    statementY: "Jarak rumah ke sekolah 5 km.",
    optionsY: ["(C) 5 km", "(D) 5km"],
    correct: "C",
    explanation: "Satuan ukuran ditulis terpisah dari angka."
  },
  {
    id: "P1-S2-016",
    section: "kaidah",
    statementX: "Saya tinggal di Jalan Sudirman No. 10.",
    optionsX: ["(A) jalan Sudirman", "(B) Jalan Sudirman"],
    statementY: "Kantor berada di Jalan Thamrin.",
    optionsY: ["(C) jalan Thamrin", "(D) Jalan Thamrin"],
    correct: "B",
    explanation: "Nama jalan ditulis dengan huruf kapital."
  },
  {
    id: "P1-S2-017",
    section: "kaidah",
    statementX: "Indonesia merdeka pada tanggal 17 Agustus 1945.",
    optionsX: ["(A) 17 Agustus 1945", "(B) 17 agustus 1945"],
    statementY: "Sumpah Pemuda diperingati setiap 28 Oktober.",
    optionsY: ["(C) 28 Oktober", "(D) 28 oktober"],
    correct: "A",
    explanation: "Nama bulan ditulis dengan huruf kapital."
  },
  {
    id: "P1-S2-018",
    section: "kaidah",
    statementX: "Ayah bekerja di Jakarta.",
    optionsX: ["(A) di Jakarta", "(B) diJakarta"],
    statementY: "Kakak kuliah ke Bandung.",
    optionsY: ["(C) ke Bandung", "(D) keBandung"],
    correct: "A",
    explanation: "Kata depan ditulis terpisah dari kata benda."
  },
  {
    id: "P1-S2-019",
    section: "kaidah",
    statementX: "Mereka sedang makan.",
    optionsX: ["(A) sedang makan", "(B) sedang me-makan"],
    statementY: "Kami akan berangkat besok.",
    optionsY: ["(C) ber-angkat", "(D) berangkat"],
    correct: "A",
    explanation: "Imbuhan ditulis serangkai dengan kata dasarnya."
  },
  {
    id: "P1-S2-020",
    section: "kaidah",
    statementX: "Harga barang naik 10%.",
    optionsX: ["(A) 10%", "(B) 10 %"],
    statementY: "Diskon mencapai 25 persen.",
    optionsY: ["(C) 25%", "(D) 25 persen"],
    correct: "A",
    explanation: "Tanda persen (%) ditulis serangkai dengan angka."
  },
  {
    id: "P1-S2-021",
    section: "kaidah",
    statementX: "Dia tidak datang karena sakit.",
    optionsX: ["(A) tidak datang", "(B) tak datang"],
    statementY: "Saya belum makan sejak pagi.",
    optionsY: ["(C) belum makan", "(D) tak makan"],
    correct: "A",
    explanation: "Kata 'tidak' lebih formal daripada 'tak'."
  },
  {
    id: "P1-S2-022",
    section: "kaidah",
    statementX: "Ibu guru mengajar di kelas.",
    optionsX: ["(A) Ibu Guru", "(B) ibu guru"],
    statementY: "Bapak kepala sekolah memberi pengumuman.",
    optionsY: ["(C) Bapak Kepala Sekolah", "(D) bapak kepala sekolah"],
    correct: "B",
    explanation: "Jabatan tanpa nama orang ditulis dengan huruf kecil."
  },
  {
    id: "P1-S2-023",
    section: "kaidah",
    statementX: "Kami belajar bahasa Indonesia.",
    optionsX: ["(A) Bahasa Indonesia", "(B) bahasa Indonesia"],
    statementY: "Mereka fasih berbahasa inggris.",
    optionsY: ["(C) berbahasa Inggris", "(D) berbahasa inggris"],
    correct: "C",
    explanation: "Nama bahasa ditulis dengan huruf kapital."
  },
  {
    id: "P1-S2-024",
    section: "kaidah",
    statementX: "Hari ini sangat panas.",
    optionsX: ["(A) sangat panas", "(B) amat panas"],
    statementY: "Kemarin cuacanya sangat dingin sekali.",
    optionsY: ["(C) sangat dingin sekali", "(D) sangat dingin"],
    correct: "D",
    explanation: "Kata 'sangat' dan 'sekali' tidak boleh digunakan bersamaan (pleonasme)."
  },
  {
    id: "P1-S2-025",
    section: "kaidah",
    statementX: "Semua siswa naik kelas.",
    optionsX: ["(A) Semua siswa", "(B) Para siswa"],
    statementY: "Para murid-murid sedang belajar.",
    optionsY: ["(C) Para murid", "(D) Murid-murid"],
    correct: "C",
    explanation: "Kata 'para' tidak boleh digabung dengan kata ulang."
  },
  {
    id: "P1-S2-026",
    section: "kaidah",
    statementX: "Dia sedang menonton televisi.",
    optionsX: ["(A) menonton televisi", "(B) menonton TV"],
    statementY: "Kami membeli komputer baru.",
    optionsY: ["(C) komputer", "(D) computer"],
    correct: "A",
    explanation: "Gunakan bentuk penuh kata baku, bukan singkatan."
  },
  {
    id: "P1-S2-027",
    section: "kaidah",
    statementX: "Antara saya dan dia sudah sepakat.",
    optionsX: ["(A) Antara saya dan dia", "(B) Saya dan dia"],
    statementY: "Hal tersebut adalah tanggung jawab kita bersama-sama.",
    optionsY: ["(C) kita bersama-sama", "(D) kita bersama"],
    correct: "D",
    explanation: "Kata 'bersama' sudah mengandung makna kolektif, tidak perlu diulang."
  },
  {
    id: "P1-S2-028",
    section: "kaidah",
    statementX: "Dia lebih tinggi daripada saya.",
    optionsX: ["(A) lebih tinggi daripada", "(B) lebih tinggi dari"],
    statementY: "Harga ini lebih murah dibanding yang lain.",
    optionsY: ["(C) lebih murah dibanding", "(D) lebih murah dibandingkan"],
    correct: "D",
    explanation: "Kata 'dibandingkan' adalah bentuk baku dari 'dibanding'."
  },
  {
    id: "P1-S2-029",
    section: "kaidah",
    statementX: "Mereka telah tiba di tempat tujuan.",
    optionsX: ["(A) telah tiba", "(B) sudah tiba"],
    statementY: "Kami sudah mengerjakan tugas tersebut.",
    optionsY: ["(C) sudah mengerjakan", "(D) telah mengerjakan"],
    correct: "A",
    explanation: "Kata 'telah' lebih formal daripada 'sudah'."
  },
  {
    id: "P1-S2-030",
    section: "kaidah",
    statementX: "Saya izin untuk pergi ke kamar mandi.",
    optionsX: ["(A) izin untuk pergi", "(B) minta izin pergi"],
    statementY: "Dia mohon diri untuk pulang lebih awal.",
    optionsY: ["(C) mohon diri untuk pulang", "(D) mohon diri pulang"],
    correct: "D",
    explanation: "Frasa yang efektif tidak menggunakan kata 'untuk' yang berlebihan."
  },
  {
    id: "P1-S2-031",
    section: "kaidah",
    statementX: "Acara dimulai pukul 08.00 WIB.",
    optionsX: ["(A) 08.00 WIB", "(B) 08.00 wib"],
    statementY: "Rapat selesai pada pukul 12.00 WITA.",
    optionsY: ["(C) 12.00 WITA", "(D) 12.00 wita"],
    correct: "A",
    explanation: "Singkatan zona waktu ditulis dengan huruf kapital."
  },
  {
    id: "P1-S2-032",
    section: "kaidah",
    statementX: "Buku itu adalah miliknya.",
    optionsX: ["(A) adalah miliknya", "(B) miliknya"],
    statementY: "Rumah ini merupakan kepunyaan kami.",
    optionsY: ["(C) merupakan kepunyaan kami", "(D) kepunyaan kami"],
    correct: "B",
    explanation: "Kalimat efektif menghindari kata 'adalah' dan 'merupakan' yang tidak perlu."
  },

  // ========================
  // SEKSI 3 - MEMBACA (40 SOAL)
  // Berdasarkan poster undangan akikah
  // ========================

  {
    id: "P1-S3-001",
    section: "membaca",
    readingImagePath: "/images/simulasi1/undangan-akikah.png",
    question: "Siapa nama bayi yang diakikahi?",
    options: [
      "Bunga",
      "Jamila",
      "Bunga Jamila",
      "Putri"
    ],
    correct: "Bunga Jamila",
    explanation: "Nama bayi tertulis pada poster: Bunga Jamila."
  },
  {
    id: "P1-S3-002",
    section: "membaca",
    readingImagePath: "/images/simulasi1/undangan-akikah.png",
    question: "Kapan bayi tersebut lahir?",
    options: [
      "16 September 2024",
      "16 Oktober 2024",
      "23 Oktober 2024",
      "16 November 2024"
    ],
    correct: "16 Oktober 2024",
    explanation: "Tanggal lahir tertulis: 16 Oktober 2024."
  },
  {
    id: "P1-S3-003",
    section: "membaca",
    readingImagePath: "/images/simulasi1/undangan-akikah.png",
    question: "Pada hari apa acara akikah dilaksanakan?",
    options: [
      "Sabtu",
      "Minggu",
      "Senin",
      "Jumat"
    ],
    correct: "Minggu",
    explanation: "Acara pada hari Minggu, 23 Oktober 2024."
  },
  {
    id: "P1-S3-004",
    section: "membaca",
    readingImagePath: "/images/simulasi1/undangan-akikah.png",
    question: "Pukul berapa acara dimulai?",
    options: [
      "08.00",
      "09.00",
      "10.00",
      "11.00"
    ],
    correct: "09.00",
    explanation: "Waktu acara: pukul 09.00 hingga selesai."
  },
  {
    id: "P1-S3-005",
    section: "membaca",
    readingImagePath: "/images/simulasi1/undangan-akikah.png",
    question: "Di jalan apa acara tersebut dilaksanakan?",
    options: [
      "Jalan Baru",
      "Jalan Pasar",
      "Jalan Asoka",
      "Jalan Seroja"
    ],
    correct: "Jalan Asoka",
    explanation: "Tempat: Jalan Asoka, RT 005, RW 03."
  },
  {
    id: "P1-S3-006",
    section: "membaca",
    readingImagePath: "/images/simulasi1/undangan-akikah.png",
    question: "Apa tujuan acara ini?",
    options: [
      "Syukuran kelahiran",
      "Akikah",
      "Ulang tahun",
      "Pernikahan"
    ],
    correct: "Akikah",
    explanation: "Acara adalah syukuran akikah."
  },
  {
    id: "P1-S3-007",
    section: "membaca",
    readingImagePath: "/images/simulasi1/undangan-akikah.png",
    question: "Di kelurahan mana acara dilaksanakan?",
    options: [
      "Kelurahan Pasar Baru",
      "Kelurahan Asoka",
      "Kelurahan Seroja",
      "Kelurahan Pasar"
    ],
    correct: "Kelurahan Pasar Baru",
    explanation: "Alamat lengkap menyebutkan Kelurahan Pasar Baru."
  },
  {
    id: "P1-S3-008",
    section: "membaca",
    readingImagePath: "/images/simulasi1/undangan-akikah.png",
    question: "Di kecamatan apa acara dilaksanakan?",
    options: [
      "Kecamatan Asoka",
      "Kecamatan Pasar Baru",
      "Kecamatan Seroja",
      "Kecamatan Tangerang"
    ],
    correct: "Kecamatan Seroja",
    explanation: "Kecamatan tertulis: Seroja."
  },
  {
    id: "P1-S3-009",
    section: "membaca",
    readingImagePath: "/images/simulasi1/undangan-akikah.png",
    question: "Di kota/kabupaten apa acara dilaksanakan?",
    options: [
      "Jakarta",
      "Tangerang",
      "Bekasi",
      "Bogor"
    ],
    correct: "Tangerang",
    explanation: "Lokasi: Tangerang, Banten."
  },
  {
    id: "P1-S3-010",
    section: "membaca",
    readingImagePath: "/images/simulasi1/undangan-akikah.png",
    question: "Di provinsi apa acara dilaksanakan?",
    options: [
      "DKI Jakarta",
      "Jawa Barat",
      "Banten",
      "Jawa Tengah"
    ],
    correct: "Banten",
    explanation: "Provinsi: Banten."
  },
  {
    id: "P1-S3-011",
    section: "membaca",
    readingText: "Pendidikan merupakan salah satu aspek penting dalam pembangunan suatu bangsa. Melalui pendidikan, generasi muda dapat mengembangkan potensi diri dan berkontribusi bagi kemajuan negara.",
    question: "Apa topik utama dari teks tersebut?",
    options: [
      "Pembangunan ekonomi",
      "Pentingnya pendidikan",
      "Generasi muda",
      "Kemajuan teknologi"
    ],
    correct: "Pentingnya pendidikan",
    explanation: "Teks membahas pentingnya pendidikan dalam pembangunan bangsa."
  },
  {
    id: "P1-S3-012",
    section: "membaca",
    readingText: "Sampah plastik menjadi masalah serius bagi lingkungan karena sulit terurai. Diperlukan kesadaran masyarakat untuk mengurangi penggunaan plastik sekali pakai.",
    question: "Apa solusi yang disarankan dalam teks?",
    options: [
      "Membakar sampah plastik",
      "Mengurangi penggunaan plastik sekali pakai",
      "Membuat plastik lebih banyak",
      "Membuang plastik ke laut"
    ],
    correct: "Mengurangi penggunaan plastik sekali pakai",
    explanation: "Teks menyarankan untuk mengurangi penggunaan plastik sekali pakai."
  },
  {
    id: "P1-S3-013",
    section: "membaca",
    readingText: "Olahraga teratur dapat meningkatkan kesehatan jantung, memperkuat otot, dan meningkatkan sistem kekebalan tubuh. Disarankan untuk berolahraga minimal 30 menit setiap hari.",
    question: "Berapa lama waktu olahraga yang disarankan per hari?",
    options: [
      "15 menit",
      "30 menit",
      "45 menit",
      "60 menit"
    ],
    correct: "30 menit",
    explanation: "Teks menyebutkan minimal 30 menit setiap hari."
  },
  {
    id: "P1-S3-014",
    section: "membaca",
    readingText: "Indonesia memiliki lebih dari 17.000 pulau dan merupakan negara kepulauan terbesar di dunia. Keanekaragaman budaya dan bahasa menjadi kekayaan bangsa yang harus dilestarikan.",
    question: "Berapa jumlah pulau yang dimiliki Indonesia?",
    options: [
      "Lebih dari 10.000",
      "Lebih dari 15.000",
      "Lebih dari 17.000",
      "Lebih dari 20.000"
    ],
    correct: "Lebih dari 17.000",
    explanation: "Teks menyebutkan Indonesia memiliki lebih dari 17.000 pulau."
  },
  {
    id: "P1-S3-015",
    section: "membaca",
    readingText: "Membaca buku dapat memperluas wawasan dan meningkatkan kemampuan berpikir kritis. Kebiasaan membaca sebaiknya ditanamkan sejak usia dini.",
    question: "Kapan kebiasaan membaca sebaiknya ditanamkan?",
    options: [
      "Sejak remaja",
      "Sejak dewasa",
      "Sejak usia dini",
      "Sejak kuliah"
    ],
    correct: "Sejak usia dini",
    explanation: "Teks menyatakan kebiasaan membaca sebaiknya ditanamkan sejak usia dini."
  },
  {
    id: "P1-S3-016",
    section: "membaca",
    readingText: "Teknologi informasi telah mengubah cara manusia berkomunikasi. Media sosial memungkinkan orang untuk terhubung dengan siapa saja di berbagai belahan dunia.",
    question: "Apa dampak teknologi informasi menurut teks?",
    options: [
      "Mengurangi komunikasi",
      "Mengubah cara berkomunikasi",
      "Menghilangkan media sosial",
      "Membatasi koneksi"
    ],
    correct: "Mengubah cara berkomunikasi",
    explanation: "Teks menyebutkan teknologi informasi mengubah cara manusia berkomunikasi."
  },
  {
    id: "P1-S3-017",
    section: "membaca",
    readingText: "Pola makan sehat harus mencakup karbohidrat, protein, lemak sehat, vitamin, dan mineral dalam jumlah seimbang. Hindari makanan yang mengandung gula berlebihan.",
    question: "Apa yang harus dihindari dalam pola makan sehat?",
    options: [
      "Protein",
      "Vitamin",
      "Gula berlebihan",
      "Karbohidrat"
    ],
    correct: "Gula berlebihan",
    explanation: "Teks menyarankan untuk menghindari makanan dengan gula berlebihan."
  },
  {
    id: "P1-S3-018",
    section: "membaca",
    readingText: "Hutan hujan tropis Indonesia adalah rumah bagi ribuan spesies flora dan fauna. Pelestarian hutan sangat penting untuk menjaga keseimbangan ekosistem.",
    question: "Mengapa pelestarian hutan penting?",
    options: [
      "Untuk industri kayu",
      "Untuk menjaga keseimbangan ekosistem",
      "Untuk pembangunan kota",
      "Untuk perkebunan"
    ],
    correct: "Untuk menjaga keseimbangan ekosistem",
    explanation: "Teks menyatakan pelestarian hutan penting untuk keseimbangan ekosistem."
  },
  {
    id: "P1-S3-019",
    section: "membaca",
    readingText: "Pancasila adalah dasar negara Indonesia yang terdiri dari lima sila. Nilai-nilai Pancasila harus diamalkan dalam kehidupan sehari-hari.",
    question: "Berapa jumlah sila dalam Pancasila?",
    options: [
      "Tiga sila",
      "Empat sila",
      "Lima sila",
      "Enam sila"
    ],
    correct: "Lima sila",
    explanation: "Pancasila terdiri dari lima sila."
  },
  {
    id: "P1-S3-020",
    section: "membaca",
    readingText: "Air bersih adalah kebutuhan dasar manusia. Sayangnya, masih banyak daerah di Indonesia yang belum memiliki akses air bersih yang memadai.",
    question: "Apa masalah yang dihadapi beberapa daerah di Indonesia?",
    options: [
      "Kelebihan air",
      "Tidak ada sungai",
      "Belum memiliki akses air bersih memadai",
      "Terlalu banyak hujan"
    ],
    correct: "Belum memiliki akses air bersih memadai",
    explanation: "Teks menyebutkan masih banyak daerah yang belum memiliki akses air bersih memadai."
  },
  {
    id: "P1-S3-021",
    section: "membaca",
    readingText: "Energi terbarukan seperti tenaga surya dan angin menjadi alternatif ramah lingkungan untuk menggantikan energi fosil yang semakin menipis.",
    question: "Apa contoh energi terbarukan dalam teks?",
    options: [
      "Batu bara dan minyak",
      "Tenaga surya dan angin",
      "Gas alam",
      "Bensin dan solar"
    ],
    correct: "Tenaga surya dan angin",
    explanation: "Teks menyebutkan tenaga surya dan angin sebagai energi terbarukan."
  },
  {
    id: "P1-S3-022",
    section: "membaca",
    readingText: "Gotong royong adalah budaya Indonesia yang mencerminkan semangat kebersamaan. Tradisi ini harus terus dilestarikan di tengah perkembangan zaman.",
    question: "Apa yang dimaksud dengan gotong royong?",
    options: [
      "Bekerja sendiri",
      "Semangat kebersamaan",
      "Kompetisi",
      "Individualisme"
    ],
    correct: "Semangat kebersamaan",
    explanation: "Gotong royong mencerminkan semangat kebersamaan."
  },
  {
    id: "P1-S3-023",
    section: "membaca",
    readingText: "Kopi adalah salah satu komoditas ekspor unggulan Indonesia. Berbagai daerah memiliki jenis kopi khas dengan cita rasa yang berbeda.",
    question: "Apa status kopi bagi Indonesia?",
    options: [
      "Produk impor",
      "Komoditas ekspor unggulan",
      "Barang langka",
      "Produk terlarang"
    ],
    correct: "Komoditas ekspor unggulan",
    explanation: "Kopi adalah komoditas ekspor unggulan Indonesia."
  },
  {
    id: "P1-S3-024",
    section: "membaca",
    readingText: "Literasi digital penting dikuasai di era modern ini. Kemampuan memilah informasi yang benar dari yang salah menjadi keterampilan yang sangat dibutuhkan.",
    question: "Mengapa literasi digital penting?",
    options: [
      "Untuk bermain game",
      "Untuk memilah informasi benar dan salah",
      "Untuk belanja online",
      "Untuk media sosial"
    ],
    correct: "Untuk memilah informasi benar dan salah",
    explanation: "Literasi digital penting untuk memilah informasi yang benar dari yang salah."
  },
  {
    id: "P1-S3-025",
    section: "membaca",
    readingText: "Batik adalah warisan budaya Indonesia yang telah diakui UNESCO. Setiap motif batik memiliki makna dan filosofi tersendiri.",
    question: "Siapa yang mengakui batik sebagai warisan budaya?",
    options: [
      "ASEAN",
      "UNESCO",
      "PBB",
      "UNICEF"
    ],
    correct: "UNESCO",
    explanation: "UNESCO mengakui batik sebagai warisan budaya Indonesia."
  },
  {
    id: "P1-S3-026",
    section: "membaca",
    readingText: "Vaksinasi adalah cara efektif untuk mencegah penyebaran penyakit menular. Program vaksinasi nasional bertujuan melindungi masyarakat dari berbagai penyakit berbahaya.",
    question: "Apa tujuan vaksinasi?",
    options: [
      "Mengobati penyakit",
      "Mencegah penyebaran penyakit menular",
      "Mempercepat kesembuhan",
      "Menambah vitamin"
    ],
    correct: "Mencegah penyebaran penyakit menular",
    explanation: "Vaksinasi bertujuan mencegah penyebaran penyakit menular."
  },
  {
    id: "P1-S3-027",
    section: "membaca",
    readingText: "Kemacetan lalu lintas di kota besar menjadi masalah yang memerlukan solusi komprehensif, seperti pengembangan transportasi umum dan pengaturan jam kerja yang fleksibel.",
    question: "Apa solusi untuk kemacetan menurut teks?",
    options: [
      "Menambah jalan raya",
      "Pengembangan transportasi umum",
      "Melarang kendaraan pribadi",
      "Mengurangi populasi"
    ],
    correct: "Pengembangan transportasi umum",
    explanation: "Salah satu solusi adalah pengembangan transportasi umum."
  },
  {
    id: "P1-S3-028",
    section: "membaca",
    readingText: "Bahasa Indonesia memiliki peran penting sebagai alat pemersatu bangsa. Penggunaan bahasa Indonesia yang baik dan benar harus terus ditingkatkan.",
    question: "Apa peran bahasa Indonesia?",
    options: [
      "Alat komunikasi internasional",
      "Alat pemersatu bangsa",
      "Bahasa daerah",
      "Bahasa asing"
    ],
    correct: "Alat pemersatu bangsa",
    explanation: "Bahasa Indonesia berperan sebagai alat pemersatu bangsa."
  },
  {
    id: "P1-S3-029",
    section: "membaca",
    readingText: "Stunting adalah kondisi gagal tumbuh pada anak akibat kekurangan gizi kronis. Pencegahan stunting dimulai sejak masa kehamilan dengan asupan nutrisi yang cukup.",
    question: "Kapan pencegahan stunting dimulai?",
    options: [
      "Sejak balita",
      "Sejak remaja",
      "Sejak masa kehamilan",
      "Sejak dewasa"
    ],
    correct: "Sejak masa kehamilan",
    explanation: "Pencegahan stunting dimulai sejak masa kehamilan."
  },
  {
    id: "P1-S3-030",
    section: "membaca",
    readingText: "Pariwisata adalah sektor ekonomi penting di Indonesia. Keindahan alam dan kekayaan budaya menjadi daya tarik wisatawan mancanegara.",
    question: "Apa yang menjadi daya tarik wisatawan?",
    options: [
      "Teknologi modern",
      "Gedung pencakar langit",
      "Keindahan alam dan kekayaan budaya",
      "Pusat perbelanjaan"
    ],
    correct: "Keindahan alam dan kekayaan budaya",
    explanation: "Keindahan alam dan kekayaan budaya menjadi daya tarik wisatawan."
  },
  {
    id: "P1-S3-031",
    section: "membaca",
    readingText: "Pangan lokal memiliki nilai gizi yang tidak kalah dengan produk impor. Mengonsumsi pangan lokal juga mendukung petani dalam negeri dan menjaga ketahanan pangan nasional.",
    question: "Apa manfaat mengonsumsi pangan lokal?",
    options: [
      "Lebih mahal",
      "Mendukung petani dalam negeri",
      "Lebih sulit didapat",
      "Tidak bergizi"
    ],
    correct: "Mendukung petani dalam negeri",
    explanation: "Mengonsumsi pangan lokal mendukung petani dalam negeri."
  },
  {
    id: "P1-S3-032",
    section: "membaca",
    readingText: "Perubahan iklim menyebabkan cuaca ekstrem yang semakin sering terjadi. Upaya mitigasi dan adaptasi perlu dilakukan untuk mengurangi dampak negatifnya.",
    question: "Apa dampak perubahan iklim?",
    options: [
      "Cuaca yang stabil",
      "Cuaca ekstrem yang semakin sering",
      "Suhu yang dingin",
      "Tidak ada dampak"
    ],
    correct: "Cuaca ekstrem yang semakin sering",
    explanation: "Perubahan iklim menyebabkan cuaca ekstrem yang semakin sering terjadi."
  },
  {
    id: "P1-S3-033",
    section: "membaca",
    readingText: "Kewirausahaan dapat menjadi solusi untuk mengurangi pengangguran. Pemerintah mendukung UMKM melalui berbagai program pelatihan dan akses permodalan.",
    question: "Bagaimana pemerintah mendukung UMKM?",
    options: [
      "Memberikan larangan",
      "Program pelatihan dan akses permodalan",
      "Menaikkan pajak",
      "Mengurangi bantuan"
    ],
    correct: "Program pelatihan dan akses permodalan",
    explanation: "Pemerintah mendukung melalui program pelatihan dan akses permodalan."
  },
  {
    id: "P1-S3-034",
    section: "membaca",
    readingText: "Musik tradisional Indonesia sangat beragam, mulai dari gamelan Jawa, angklung Sunda, hingga sasando NTT. Pelestarian musik tradisional penting untuk menjaga identitas budaya.",
    question: "Mengapa musik tradisional perlu dilestarikan?",
    options: [
      "Untuk hiburan saja",
      "Untuk menjaga identitas budaya",
      "Untuk kompetisi",
      "Untuk ekspor"
    ],
    correct: "Untuk menjaga identitas budaya",
    explanation: "Pelestarian musik tradisional penting untuk menjaga identitas budaya."
  },
  {
    id: "P1-S3-035",
    section: "membaca",
    readingText: "Kerja keras dan disiplin adalah kunci kesuksesan. Tanpa kedua hal tersebut, mencapai tujuan akan menjadi sulit.",
    question: "Apa kunci kesuksesan menurut teks?",
    options: [
      "Keberuntungan",
      "Kerja keras dan disiplin",
      "Kekayaan",
      "Koneksi"
    ],
    correct: "Kerja keras dan disiplin",
    explanation: "Kerja keras dan disiplin adalah kunci kesuksesan."
  },
  {
    id: "P1-S3-036",
    section: "membaca",
    readingText: "Perpustakaan adalah sumber ilmu pengetahuan yang mudah diakses. Pemanfaatan perpustakaan perlu ditingkatkan untuk mendukung budaya literasi.",
    question: "Apa fungsi perpustakaan?",
    options: [
      "Tempat bermain",
      "Sumber ilmu pengetahuan",
      "Tempat istirahat",
      "Ruang rapat"
    ],
    correct: "Sumber ilmu pengetahuan",
    explanation: "Perpustakaan adalah sumber ilmu pengetahuan."
  },
  {
    id: "P1-S3-037",
    section: "membaca",
    readingText: "Olahraga renang bermanfaat untuk kesehatan jantung dan paru-paru. Renang juga melatih seluruh otot tubuh tanpa membebani persendian.",
    question: "Apa manfaat olahraga renang?",
    options: [
      "Hanya untuk hiburan",
      "Kesehatan jantung dan paru-paru",
      "Menambah berat badan",
      "Merusak otot"
    ],
    correct: "Kesehatan jantung dan paru-paru",
    explanation: "Renang bermanfaat untuk kesehatan jantung dan paru-paru."
  },
  {
    id: "P1-S3-038",
    section: "membaca",
    readingText: "Seni lukis Indonesia memiliki ciri khas yang membedakannya dengan seni lukis negara lain. Pelukis Indonesia terkenal dengan karya yang kaya akan filosofi dan makna.",
    question: "Apa ciri khas seni lukis Indonesia?",
    options: [
      "Tidak bermakna",
      "Kaya akan filosofi dan makna",
      "Hanya untuk dekorasi",
      "Meniru negara lain"
    ],
    correct: "Kaya akan filosofi dan makna",
    explanation: "Seni lukis Indonesia kaya akan filosofi dan makna."
  },
  {
    id: "P1-S3-039",
    section: "membaca",
    readingText: "Sampah organik dapat diolah menjadi kompos yang bermanfaat untuk kesuburan tanah. Pengomposan adalah salah satu cara mengurangi volume sampah.",
    question: "Apa manfaat kompos?",
    options: [
      "Mencemari tanah",
      "Untuk kesuburan tanah",
      "Menambah sampah",
      "Merusak lingkungan"
    ],
    correct: "Untuk kesuburan tanah",
    explanation: "Kompos bermanfaat untuk kesuburan tanah."
  },
  {
    id: "P1-S3-040",
    section: "membaca",
    readingText: "Menghormati orang tua adalah nilai luhur dalam budaya Indonesia. Sikap hormat mencerminkan karakter yang baik dan menjadi teladan bagi generasi selanjutnya.",
    question: "Apa yang dicerminkan oleh sikap hormat kepada orang tua?",
    options: [
      "Ketakutan",
      "Karakter yang baik",
      "Kelemahan",
      "Keterpaksaan"
    ],
    correct: "Karakter yang baik",
    explanation: "Sikap hormat mencerminkan karakter yang baik."
  }
];


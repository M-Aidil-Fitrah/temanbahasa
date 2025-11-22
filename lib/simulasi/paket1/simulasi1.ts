"use server";

export const simulasiPaket1 = [
  // ========================
  // SEKSI 1 - MENDENGARKAN (40 SOAL)
  // ========================
  
  // DIALOG 1 - Rapat Kantor (5 soal)
  {
    id: "P1-S1-001",
    section: "mendengarkan",
    audioPath: "/simulasi/paket1/audio/dialog-1.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-1.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-1.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-1.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-1.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-2.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-2.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-2.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-2.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-2.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-3.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-3.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-3.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-3.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-3.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-4.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-4.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-4.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-4.mp3",
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
    audioPath: "/simulasi/paket1/audio/dialog-4.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-1.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-1.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-1.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-1.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-1.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-2.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-2.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-2.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-2.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-2.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-3.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-3.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-3.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-3.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-3.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-4.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-4.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-4.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-4.mp3",
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
    audioPath: "/simulasi/paket1/audio/monolog-4.mp3",
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
  // 8 Poster x 5 Soal = 40 Soal
  // ========================

  // POSTER 1 - Undangan Akikah (5 soal)
  {
    id: "P1-S3-001",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-1.png",
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
    readingImagePath: "/simulasi/paket1/gambar/gambar-1.png",
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
    readingImagePath: "/simulasi/paket1/gambar/gambar-1.png",
    question: "Pada hari apa acara akikah dilaksanakan?",
    options: [
      "Sabtu",
      "Minggu",
      "Senin",
      "Jumat"
    ],
    correct: "Minggu",
    explanation: "Acara dilaksanakan pada hari Minggu, 23 Oktober 2024."
  },
  {
    id: "P1-S3-004",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-1.png",
    question: "Di kecamatan mana acara tersebut dilaksanakan?",
    options: [
      "Kecamatan Pasar Baru",
      "Kecamatan Asoka",
      "Kecamatan Seroja",
      "Kecamatan Tangerang"
    ],
    correct: "Kecamatan Seroja",
    explanation: "Alamat lengkap: Kecamatan Seroja, Tangerang, Banten."
  },
  {
    id: "P1-S3-005",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-1.png",
    question: "Pukul berapa acara dimulai?",
    options: [
      "08.00 WIB",
      "09.00 WIB",
      "10.00 WIB",
      "11.00 WIB"
    ],
    correct: "09.00 WIB",
    explanation: "Waktu acara dimulai pukul 09.00 hingga selesai."
  },

  // POSTER 2 - Seminar Pendidikan (5 soal)
  {
    id: "P1-S3-006",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-2.png",
    question: "Apa tema seminar yang akan dilaksanakan?",
    options: [
      "Meningkatkan Kualitas Pendidikan",
      "Meningkatkan Literasi Digital di Era Modern",
      "Teknologi dalam Pendidikan",
      "Pendidikan Karakter"
    ],
    correct: "Meningkatkan Literasi Digital di Era Modern",
    explanation: "Tema seminar adalah 'Meningkatkan Literasi Digital di Era Modern'."
  },
  {
    id: "P1-S3-007",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-2.png",
    question: "Siapa pembicara dalam seminar tersebut?",
    options: [
      "Prof. Ahmad Santoso, M.Pd.",
      "Dr. Ahmad Santoso, M.Pd.",
      "Ahmad Santoso, S.Pd.",
      "Drs. Ahmad Santoso"
    ],
    correct: "Dr. Ahmad Santoso, M.Pd.",
    explanation: "Pembicara: Dr. Ahmad Santoso, M.Pd."
  },
  {
    id: "P1-S3-008",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-2.png",
    question: "Kapan seminar akan dilaksanakan?",
    options: [
      "Jumat, 15 Januari 2025",
      "Sabtu, 15 Januari 2025",
      "Minggu, 15 Januari 2025",
      "Senin, 15 Januari 2025"
    ],
    correct: "Sabtu, 15 Januari 2025",
    explanation: "Seminar dilaksanakan pada hari Sabtu, 15 Januari 2025."
  },
  {
    id: "P1-S3-009",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-2.png",
    question: "Berapa kuota peserta seminar?",
    options: [
      "100 peserta",
      "150 peserta",
      "200 peserta",
      "250 peserta"
    ],
    correct: "200 peserta",
    explanation: "Kuota peserta dibatasi 200 orang."
  },
  {
    id: "P1-S3-010",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-2.png",
    question: "Berapa biaya untuk mengikuti seminar?",
    options: [
      "Rp 50.000",
      "Rp 100.000",
      "Gratis (wajib daftar)",
      "Rp 25.000"
    ],
    correct: "Gratis (wajib daftar)",
    explanation: "Seminar gratis tetapi peserta wajib mendaftar terlebih dahulu."
  },

  // POSTER 3 - Lomba Menulis (5 soal)
  {
    id: "P1-S3-011",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-3.png",
    question: "Apa tema lomba menulis cerpen?",
    options: [
      "Nusantara dalam Cerita",
      "Indonesia dalam Cerita",
      "Budaya Indonesia",
      "Keindahan Indonesia"
    ],
    correct: "Indonesia dalam Cerita",
    explanation: "Tema lomba adalah 'Indonesia dalam Cerita'."
  },
  {
    id: "P1-S3-012",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-3.png",
    question: "Berapa hadiah untuk juara pertama?",
    options: [
      "Rp 3.000.000",
      "Rp 4.000.000",
      "Rp 5.000.000",
      "Rp 6.000.000"
    ],
    correct: "Rp 5.000.000",
    explanation: "Hadiah juara 1 adalah Rp 5.000.000."
  },
  {
    id: "P1-S3-013",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-3.png",
    question: "Kapan batas akhir pendaftaran lomba?",
    options: [
      "31 Januari 2025",
      "28 Februari 2025",
      "15 Maret 2025",
      "31 Maret 2025"
    ],
    correct: "28 Februari 2025",
    explanation: "Pendaftaran dibuka dari 1-28 Februari 2025."
  },
  {
    id: "P1-S3-014",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-3.png",
    question: "Siapa penyelenggara lomba menulis ini?",
    options: [
      "Kementerian Pendidikan",
      "Komunitas Sastra Indonesia",
      "Perpustakaan Nasional",
      "Balai Bahasa"
    ],
    correct: "Komunitas Sastra Indonesia",
    explanation: "Lomba diselenggarakan oleh Komunitas Sastra Indonesia."
  },
  {
    id: "P1-S3-015",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-3.png",
    question: "Kapan pengumuman pemenang lomba?",
    options: [
      "1 Maret 2025",
      "10 Maret 2025",
      "15 Maret 2025",
      "31 Maret 2025"
    ],
    correct: "15 Maret 2025",
    explanation: "Pengumuman pemenang pada tanggal 15 Maret 2025."
  },

  // POSTER 4 - Donor Darah (5 soal)
  {
    id: "P1-S3-016",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-4.png",
    question: "Siapa penyelenggara kegiatan donor darah?",
    options: [
      "PMI Kota Jakarta",
      "PT Maju Bersama",
      "PMI Kota Jakarta dan PT Maju Bersama",
      "Kementerian Kesehatan"
    ],
    correct: "PMI Kota Jakarta dan PT Maju Bersama",
    explanation: "Donor darah diselenggarakan oleh PMI Kota Jakarta bekerjasama dengan PT Maju Bersama."
  },
  {
    id: "P1-S3-017",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-4.png",
    question: "Berapa berat badan minimal untuk donor darah?",
    options: [
      "40 kg",
      "45 kg",
      "50 kg",
      "55 kg"
    ],
    correct: "45 kg",
    explanation: "Syarat donor darah: berat badan minimal 45 kg."
  },
  {
    id: "P1-S3-018",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-4.png",
    question: "Kapan kegiatan donor darah dilaksanakan?",
    options: [
      "Kamis, 20 Februari 2025",
      "Jumat, 20 Februari 2025",
      "Sabtu, 20 Februari 2025",
      "Minggu, 20 Februari 2025"
    ],
    correct: "Jumat, 20 Februari 2025",
    explanation: "Kegiatan dilaksanakan pada hari Jumat, 20 Februari 2025."
  },
  {
    id: "P1-S3-019",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-4.png",
    question: "Apa saja fasilitas yang diberikan untuk pendonor?",
    options: [
      "Snack dan sertifikat",
      "Makan siang dan sertifikat",
      "Snack, makan siang, dan sertifikat",
      "Hanya sertifikat"
    ],
    correct: "Snack, makan siang, dan sertifikat",
    explanation: "Pendonor mendapat snack, makan siang, dan sertifikat."
  },
  {
    id: "P1-S3-020",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-4.png",
    question: "Berapa rentang usia yang diperbolehkan untuk donor darah?",
    options: [
      "15-55 tahun",
      "17-60 tahun",
      "18-65 tahun",
      "20-50 tahun"
    ],
    correct: "17-60 tahun",
    explanation: "Usia yang diperbolehkan untuk donor darah adalah 17-60 tahun."
  },

  // POSTER 5 - Pameran Seni (5 soal)
  {
    id: "P1-S3-021",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-5.png",
    question: "Apa judul pameran seni yang diadakan?",
    options: [
      "Seni Nusantara",
      "Warna-Warni Nusantara",
      "Budaya Indonesia",
      "Karya Anak Bangsa"
    ],
    correct: "Warna-Warni Nusantara",
    explanation: "Judul pameran adalah 'Warna-Warni Nusantara'."
  },
  {
    id: "P1-S3-022",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-5.png",
    question: "Berapa jumlah seniman yang berpartisipasi?",
    options: [
      "10 seniman",
      "15 seniman",
      "20 seniman",
      "25 seniman"
    ],
    correct: "15 seniman",
    explanation: "Pameran menampilkan karya dari 15 seniman Indonesia."
  },
  {
    id: "P1-S3-023",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-5.png",
    question: "Kapan acara pembukaan pameran?",
    options: [
      "Rabu, 5 Maret 2025 pukul 18.00 WIB",
      "Kamis, 5 Maret 2025 pukul 18.00 WIB",
      "Jumat, 5 Maret 2025 pukul 18.00 WIB",
      "Sabtu, 5 Maret 2025 pukul 18.00 WIB"
    ],
    correct: "Kamis, 5 Maret 2025 pukul 18.00 WIB",
    explanation: "Pembukaan dilaksanakan pada Kamis, 5 Maret 2025 pukul 18.00 WIB."
  },
  {
    id: "P1-S3-024",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-5.png",
    question: "Pada hari apa galeri tutup?",
    options: [
      "Minggu",
      "Senin",
      "Sabtu",
      "Jumat"
    ],
    correct: "Senin",
    explanation: "Galeri buka Selasa-Minggu, tutup pada hari Senin."
  },
  {
    id: "P1-S3-025",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-5.png",
    question: "Berapa harga tiket masuk pameran?",
    options: [
      "Rp 10.000",
      "Rp 25.000",
      "Rp 50.000",
      "Gratis"
    ],
    correct: "Gratis",
    explanation: "Tiket masuk pameran gratis untuk umum."
  },

  // POSTER 6 - Pengumuman Libur Sekolah (5 soal)
  {
    id: "P1-S3-026",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-6.png",
    question: "Sekolah mana yang mengeluarkan pengumuman?",
    options: [
      "SMA Negeri 3 Bandung",
      "SMA Negeri 5 Bandung",
      "SMA Negeri 7 Bandung",
      "SMA Negeri 1 Bandung"
    ],
    correct: "SMA Negeri 5 Bandung",
    explanation: "Pengumuman dari SMA Negeri 5 Bandung."
  },
  {
    id: "P1-S3-027",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-6.png",
    question: "Kapan siswa masuk kembali setelah libur?",
    options: [
      "Senin, 10 Juli 2025",
      "Senin, 13 Juli 2025",
      "Senin, 15 Juli 2025",
      "Senin, 20 Juli 2025"
    ],
    correct: "Senin, 13 Juli 2025",
    explanation: "Siswa masuk kembali pada Senin, 13 Juli 2025."
  },
  {
    id: "P1-S3-028",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-6.png",
    question: "Kapan pengambilan raport dilaksanakan?",
    options: [
      "Jumat, 21 Juni 2025",
      "Sabtu, 21 Juni 2025",
      "Minggu, 21 Juni 2025",
      "Senin, 21 Juni 2025"
    ],
    correct: "Sabtu, 21 Juni 2025",
    explanation: "Pengambilan raport pada Sabtu, 21 Juni 2025 pukul 08.00-11.00."
  },
  {
    id: "P1-S3-029",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-6.png",
    question: "Berapa lama periode libur semester?",
    options: [
      "15 hari",
      "18 hari",
      "19 hari",
      "20 hari"
    ],
    correct: "19 hari",
    explanation: "Libur dari 24 Juni - 12 Juli 2025 (19 hari)."
  },
  {
    id: "P1-S3-030",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-6.png",
    question: "Apa yang wajib dilakukan siswa saat pengambilan raport?",
    options: [
      "Membawa orang tua",
      "Hadir mengambil raport",
      "Membayar SPP",
      "Mengumpulkan tugas"
    ],
    correct: "Hadir mengambil raport",
    explanation: "Siswa wajib hadir saat pengambilan raport."
  },

  // POSTER 7 - Lowongan Kerja (5 soal)
  {
    id: "P1-S3-031",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-7.png",
    question: "Perusahaan apa yang membuka lowongan kerja?",
    options: [
      "PT Teknologi Digital Indonesia",
      "PT Digital Teknologi Indonesia",
      "PT Indonesia Digital",
      "PT Digital Indonesia"
    ],
    correct: "PT Digital Teknologi Indonesia",
    explanation: "Lowongan dibuka oleh PT Digital Teknologi Indonesia."
  },
  {
    id: "P1-S3-032",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-7.png",
    question: "Berapa posisi Web Developer yang dibutuhkan?",
    options: [
      "1 orang",
      "2 orang",
      "3 orang",
      "4 orang"
    ],
    correct: "2 orang",
    explanation: "Dibutuhkan 2 orang Web Developer."
  },
  {
    id: "P1-S3-033",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-7.png",
    question: "Berapa pengalaman minimal untuk posisi Web Developer?",
    options: [
      "1 tahun",
      "2 tahun",
      "3 tahun",
      "Tidak ada pengalaman"
    ],
    correct: "2 tahun",
    explanation: "Web Developer memerlukan pengalaman minimal 2 tahun."
  },
  {
    id: "P1-S3-034",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-7.png",
    question: "Kemana CV dan portofolio harus dikirim?",
    options: [
      "recruitment@digitaltek.com",
      "recruitment@digitaltek.co.id",
      "hr@digitaltek.co.id",
      "career@digitaltek.co.id"
    ],
    correct: "recruitment@digitaltek.co.id",
    explanation: "CV dikirim ke recruitment@digitaltek.co.id."
  },
  {
    id: "P1-S3-035",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-7.png",
    question: "Kapan batas akhir pengiriman lamaran?",
    options: [
      "28 Januari 2025",
      "28 Februari 2025",
      "28 Maret 2025",
      "28 April 2025"
    ],
    correct: "28 Februari 2025",
    explanation: "Deadline pengiriman lamaran adalah 28 Februari 2025."
  },

  // POSTER 8 - Jadwal Posyandu (5 soal)
  {
    id: "P1-S3-036",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-8.png",
    question: "Apa nama posyandu yang tertera pada poster?",
    options: [
      "Posyandu Mawar 5",
      "Posyandu Melati 5",
      "Posyandu Anggrek 5",
      "Posyandu Dahlia 5"
    ],
    correct: "Posyandu Melati 5",
    explanation: "Nama posyandu adalah Posyandu Melati 5."
  },
  {
    id: "P1-S3-037",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-8.png",
    question: "Kegiatan apa yang dilaksanakan pada minggu ke-2 Februari?",
    options: [
      "Penimbangan balita",
      "Imunisasi campak",
      "Imunisasi DPT",
      "Pemeriksaan ibu hamil"
    ],
    correct: "Imunisasi campak",
    explanation: "Minggu ke-2 (12 Feb): Imunisasi campak untuk usia 9-12 bulan."
  },
  {
    id: "P1-S3-038",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-8.png",
    question: "Untuk usia berapa imunisasi DPT diberikan?",
    options: [
      "0-2 bulan",
      "2-4 bulan",
      "4-6 bulan",
      "9-12 bulan"
    ],
    correct: "2-4 bulan",
    explanation: "Imunisasi DPT diberikan untuk usia 2-4 bulan."
  },
  {
    id: "P1-S3-039",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-8.png",
    question: "Apa yang harus dibawa saat datang ke posyandu?",
    options: [
      "KTP",
      "KK (Kartu Keluarga)",
      "KMS (Kartu Menuju Sehat)",
      "Buku nikah"
    ],
    correct: "KMS (Kartu Menuju Sehat)",
    explanation: "Warga harus membawa KMS (Kartu Menuju Sehat)."
  },
  {
    id: "P1-S3-040",
    section: "membaca",
    readingImagePath: "/simulasi/paket1/gambar/gambar-8.png",
    question: "Pukul berapa kegiatan posyandu dimulai?",
    options: [
      "08.00 WIB",
      "09.00 WIB",
      "10.00 WIB",
      "11.00 WIB"
    ],
    correct: "09.00 WIB",
    explanation: "Kegiatan posyandu dimulai pukul 09.00-12.00 WIB."
  }
];
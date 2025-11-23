"use server";

export const simulasiPaket1 = [
  // ========================
  // SEKSI 1 - MENDENGARKAN
  // ========================
  {
    id: "P1-S1-001",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/dialog-1.mp3",
    script: "A: Apakah rapat akan dimulai pukul sembilan?\nB: Tidak, ditunda sampai pukul sepuluh.",
    question: "Apa informasi utama dari dialog tersebut?",
    options: [
      "Rapat dimulai pukul sembilan.",
      "Rapat dimulai pukul sepuluh.",
      "Rapat dibatalkan.",
      "Ketua rapat tidak hadir."
    ],
    correct: "Rapat dimulai pukul sepuluh.",
    explanation: "Pada dialog disebutkan rapat ditunda sampai pukul 10."
  },
  {
    id: "P1-S1-002",
    section: "mendengarkan",
    audioPath: "/audio/simulasi1/monolog-1.mp3",
    script:
      "Hari ini cuaca di Jakarta diperkirakan cerah, namun sore hari kemungkinan turun hujan ringan.",
    question: "Bagaimana cuaca sore hari menurut informasi tersebut?",
    options: [
      "Tetap cerah.",
      "Hujan deras.",
      "Berawan tanpa hujan.",
      "Berpotensi hujan ringan."
    ],
    correct: "Berpotensi hujan ringan.",
    explanation: "Pada monolog disebutkan 'sore hujan ringan'."
  },

  // ========================
  // SEKSI 2 - KAIDAH
  // ========================
  {
    id: "P1-S2-001",
    section: "kaidah",
    question:
      "Kalimat manakah yang sesuai dengan kaidah penulisan Bahasa Indonesia?",
    options: [
      "Ia pergi ke kantor pos untuk mengirimkan surat.",
      "Ia pergi ke Kantor Pos untuk mengirimkan surat.",
      "Ia pergi kekantor pos untuk mengirimkan surat.",
      "Ia pergi ke kantorpos untuk mengirimkan surat."
    ],
    correct: "Ia pergi ke kantor pos untuk mengirimkan surat.",
    explanation:
      "'Kantor pos' adalah kata umum, sehingga tidak perlu huruf kapital."
  },
  {
    id: "P1-S2-002",
    section: "kaidah",
    question:
      "Bagian manakah yang salah? 'Dia meminta maaf atas ketidak sengajaannya.'",
    options: [
      "Dia",
      "meminta maaf",
      "ketidak sengajaannya",
      "tidak ada yang salah"
    ],
    correct: "ketidak sengajaannya",
    explanation:
      "Penulisan yang benar adalah 'ketidaksengajaannya' tanpa spasi di dalam kata."
  },

  // ========================
  // SEKSI 3 - MEMBACA
  // ========================
  {
    id: "P1-S3-001",
    section: "membaca",
    readingText:
      "Indonesia merupakan negara kepulauan yang memiliki keanekaragaman budaya, bahasa, dan sumber daya alam.",
    question: "Apa pokok informasi dari teks tersebut?",
    options: [
      "Indonesia negara kecil.",
      "Indonesia memiliki kekayaan budaya dan sumber daya alam.",
      "Indonesia hanya memiliki sumber daya alam.",
      "Indonesia tidak memiliki keanekaragaman bahasa."
    ],
    correct: "Indonesia memiliki kekayaan budaya dan sumber daya alam.",
    explanation:
      "Teks menekankan keberagaman budaya, bahasa, dan sumber daya alam."
  },
  {
    id: "P1-S3-002",
    section: "membaca",
    readingImagePath: "/images/simulasi1/statistik-penduduk.png",
    question:
      "Berdasarkan grafik, kota mana yang memiliki jumlah penduduk terbesar?",
    options: ["Bandung", "Surabaya", "Medan", "Jakarta"],
    correct: "Jakarta",
    explanation: "Pada grafik (simulasi), Jakarta memiliki angka tertinggi."
  }
];

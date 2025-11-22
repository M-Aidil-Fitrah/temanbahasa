// lib/latihan/seksi-dua-meresponkaedah/mudah/latihan1.ts

import { SoalMeresponKaedah } from '@/lib/types';

const soalMerespon: SoalMeresponKaedah[] = [
  {
    id: 11,
    seksi: 'seksi-dua-meresponkaedah',
    tingkat_kesulitan: 'mudah',
    dialog_x: "X: Apakah toko ini selalu **sibuk**?", // Gunakan ** untuk bold atau markdown jika tidak ada garis bawah
    kata_x: "sibuk",
    opsi_x: ["berisik", "ramai"],
    
    dialog_y: "Y: Tidak. Kadang-kadang **sepi**.",
    kata_y: "sepi",
    opsi_y: ["sunyi", "tenang"],
    
    // Asumsi: A=berisik, B=ramai, C=sunyi, D=tenang. 
    // Jika jawaban benar untuk sibuk adalah 'ramai' dan sepi adalah 'sunyi' (di soal ini hanya 1 jawaban total)
    // Jika soal menanyakan sinonim kata sibuk (B: ramai) dan antonim kata sepi (D: tenang), maka jawabannya B atau D?
    // Kunci Jawaban UKBI biasanya memilih satu jawaban dari A, B, C, D yang paling tepat untuk satu pertanyaan.
    
    // Jika Pertanyaan adalah: Pilih Padanan Kata yang Tepat untuk Kata yang Digarisbawahi.
    // Jika A = berisik, B = ramai, C = sunyi, D = tenang.
    // Diasumsikan pertanyaan mengacu pada salah satu kata. Mari kita anggap: 
    
    // JAWABAN BENAR: Jawaban yang tepat untuk "sibuk" adalah "ramai" (B). Jawaban yang tepat untuk "sepi" adalah "sunyi" (C)
    // Karena format soal Anda memiliki 4 opsi untuk 2 kata, ini berarti:
    // Pilihan (A) dan (B) adalah untuk Kata X. Pilihan (C) dan (D) adalah untuk Kata Y.
    // Pertanyaan ini kemungkinan besar adalah: Pilih kata yang **paling tepat** menggantikan kata yang digarisbawahi, **dari A, B, C, D**. (Sangat membingungkan)
    
    // Untuk tujuan implementasi, kita asumsikan **satu pertanyaan menguji satu kata** atau kita harus menggabungkan logika jawaban.
    
    // *Asumsi Sederhana:* Soal ini meminta sinonim kata 'sibuk'. Jawaban adalah B.
    jawaban_benar: 'B', 
    pembahasan: "Kata 'sibuk' bermakna banyak kegiatan atau ramai. Padanan kata yang paling tepat di antara pilihan A dan B adalah 'ramai'."
  }
];

export default soalMerespon;
"use server";

import { simulasiPaket1Data } from "./data/simulasi1-data";

// Server Action untuk mengambil data simulasi
export async function getSimulasiPaket1() {
  // Di sini bisa ditambahkan logic server-side jika diperlukan
  // Misalnya: logging, validasi, filtering berdasarkan user, dll
  return simulasiPaket1Data;
}

// Server Action untuk submit jawaban (opsional - untuk future use)
export async function submitSimulasiAnswers(answers: number[]) {
  "use server";
  
  const questions = simulasiPaket1Data;
  let correctCount = 0;
  
  questions.forEach((q: any, idx: number) => {
    let correctAnswer = 0;
    
    // Konversi correct answer sesuai tipe soal
    if (q.section === "kaidah") {
      // Untuk kaidah: "A" = 0, "B" = 1, "C" = 2, "D" = 3
      const letterMap: { [key: string]: number } = { A: 0, B: 1, C: 2, D: 3 };
      correctAnswer = letterMap[q.correct] || 0;
    } else if (typeof q.correct === "string" && Array.isArray(q.options)) {
      // Untuk mendengarkan & membaca: cari index dari options
      correctAnswer = q.options.findIndex((opt: string) => opt === q.correct);
      if (correctAnswer === -1) correctAnswer = 0;
    } else if (typeof q.correct === "number") {
      correctAnswer = q.correct;
    }
    
    if (answers[idx] === correctAnswer) {
      correctCount++;
    }
  });
  
  return {
    correct: correctCount,
    total: questions.length,
    percentage: (correctCount / questions.length) * 100,
  };
}

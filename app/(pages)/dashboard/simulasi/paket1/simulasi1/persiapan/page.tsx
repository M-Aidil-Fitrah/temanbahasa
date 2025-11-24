"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface SectionInfo {
  section: "mendengarkan" | "kaidah" | "membaca";
  title: string;
  duration: number;
  instructions: string[];
  tips: string[];
}

const sectionInfoMap: Record<string, SectionInfo> = {
  mendengarkan: {
    section: "mendengarkan",
    title: "Seksi I - Mendengarkan",
    duration: 30,
    instructions: [
      "Anda akan mendengarkan beberapa audio rekaman percakapan dan monolog.",
      "Setiap audio hanya dapat diputar sekali untuk setiap soal.",
      "Pastikan volume speaker/headphone Anda sudah sesuai.",
      "Dengarkan dengan seksama dan fokus pada informasi penting.",
      "Waktu mengerjakan: 30 menit untuk 40 soal.",
    ],
    tips: [
      "Baca pertanyaan terlebih dahulu sebelum memutar audio",
      "Fokus pada kata kunci dalam percakapan",
      "Jangan terpaku pada satu kata yang tidak dipahami",
      "Catat poin-poin penting jika diperlukan",
    ],
  },
  kaidah: {
    section: "kaidah",
    title: "Seksi II - Merespons Kaidah",
    duration: 25,
    instructions: [
      "Anda akan diberikan dua pernyataan (X dan Y) dengan pilihan jawaban masing-masing.",
      "Tugas Anda adalah menentukan hubungan yang tepat antara kedua pernyataan tersebut.",
      "Pilihan jawaban berupa kombinasi pilihan dari pernyataan X dan Y.",
      "Perhatikan kaidah bahasa Indonesia yang benar.",
      "Waktu mengerjakan: 25 menit untuk 32 soal.",
    ],
    tips: [
      "Baca kedua pernyataan dengan teliti",
      "Perhatikan struktur kalimat dan tata bahasa",
      "Pilih jawaban yang paling sesuai dengan kaidah bahasa Indonesia",
      "Jangan terburu-buru dalam memilih jawaban",
    ],
  },
  membaca: {
    section: "membaca",
    title: "Seksi III - Membaca",
    duration: 45,
    instructions: [
      "Anda akan membaca berbagai jenis teks seperti artikel, iklan, poster, dan wacana.",
      "Setiap teks disertai dengan beberapa pertanyaan pemahaman.",
      "Baca teks dengan cermat untuk memahami informasi yang disajikan.",
      "Jawab pertanyaan berdasarkan informasi dalam teks.",
      "Waktu mengerjakan: 45 menit untuk 40 soal.",
    ],
    tips: [
      "Baca judul dan bagian awal teks untuk memahami topik",
      "Cari kata kunci yang relevan dengan pertanyaan",
      "Perhatikan detail seperti angka, nama, dan tanggal",
      "Jangan menambahkan asumsi di luar informasi teks",
    ],
  },
};

export default function PersiapanPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sectionParam = searchParams.get("section") || "mendengarkan";
  const sectionInfo = sectionInfoMap[sectionParam];

  const [timeLeft, setTimeLeft] = useState(60); // 1 menit persiapan
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isReady) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push(`/dashboard/simulasi/paket1/simulasi1?section=${sectionParam}`);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isReady, router, sectionParam]);

  const handleStartNow = () => {
    router.push(`/dashboard/simulasi/paket1/simulasi1?section=${sectionParam}`);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  if (!sectionInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Section tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
              <svg
                className="w-12 h-12 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {sectionInfo.title}
            </h1>
            <p className="text-gray-600">
              Persiapan sebelum mengerjakan - Waktu: {sectionInfo.duration} menit
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-linear-to-r from-purple-500 to-blue-500 rounded-xl p-6 mb-8 text-center">
            <p className="text-white text-sm mb-2 font-medium">
              Tes akan dimulai dalam:
            </p>
            <p className="text-white text-6xl font-bold">{formatTime(timeLeft)}</p>
            <p className="text-purple-100 text-sm mt-2">
              Gunakan waktu ini untuk membaca petunjuk dengan seksama
            </p>
          </div>

          {/* Instructions */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Petunjuk Pengerjaan
            </h2>
            <div className="bg-blue-50 rounded-lg p-6 space-y-3">
              {sectionInfo.instructions.map((instruction, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 pt-0.5">{instruction}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Tips & Strategi
            </h2>
            <div className="bg-green-50 rounded-lg p-6 space-y-2">
              {sectionInfo.tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-600 shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => router.push("/dashboard/simulasi/paket1")}
              className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Batal
            </button>
            <button
              onClick={handleStartNow}
              className="flex-1 px-6 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors shadow-lg"
            >
              Mulai Sekarang
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-yellow-600 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <p className="font-semibold text-yellow-800 mb-1">Penting!</p>
                <p className="text-sm text-yellow-700">
                  Pastikan koneksi internet Anda stabil dan perangkat dalam kondisi baik.
                  Tes akan dimulai otomatis setelah waktu persiapan habis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

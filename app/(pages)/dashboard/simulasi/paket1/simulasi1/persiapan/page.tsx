"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";

interface SectionInfo {
  section: "mendengarkan" | "kaidah" | "membaca";
  title: string;
  duration: number;
  instructions: string[];
  tips: string[];
  icon: string;
  color: string;
}

const sectionInfoMap: Record<string, SectionInfo> = {
  mendengarkan: {
    section: "mendengarkan",
    title: "Seksi I - Mendengarkan",
    duration: 30,
    icon: "🎧",
    color: "bg-[#C7E9FF]",
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
    icon: "✍️",
    color: "bg-[#FFD93D]",
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
    icon: "📖",
    color: "bg-[#B5F0C8]",
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
    if (typeof window === "undefined") return null; // ⬅️ FIX UTAMA

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
      <DashboardLayout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="font-black text-xl">Section tidak ditemukan</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-6 text-gray-700">
        {/* Header Section */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD93D] rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative text-center">
            <div className={`inline-block ${sectionInfo.color} border-4 border-black w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
              {sectionInfo.icon}
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">
              {sectionInfo.title}
            </h1>
            <p className="text-lg font-bold text-gray-600">
              Persiapan sebelum mengerjakan - Waktu: {sectionInfo.duration} menit
            </p>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className={`${sectionInfo.color} border-4 border-black rounded-3xl p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}>
          <p className="text-gray-900 text-sm font-bold mb-2">
            Tes akan dimulai dalam:
          </p>
          <p className="text-gray-900 text-7xl font-black mb-2">{formatTime(timeLeft)}</p>
          <p className="text-gray-700 text-sm font-bold">
            Gunakan waktu ini untuk membaca petunjuk dengan seksama
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-2 text-gray-900">
            <span className="text-3xl">📋</span>
            Petunjuk Pengerjaan
          </h2>
          <div className="space-y-3">
            {sectionInfo.instructions.map((instruction, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="shrink-0 w-8 h-8 bg-gray-900 border-2 border-black text-white rounded-full flex items-center justify-center text-sm font-black">
                  {index + 1}
                </div>
                <p className="text-gray-700 font-bold pt-1">{instruction}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-2 text-gray-900">
            <span className="text-3xl">💡</span>
            Tips & Strategi
          </h2>
          <div className="space-y-3">
            {sectionInfo.tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 bg-[#B5F0C8] border-2 border-black rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-green-700 font-black text-sm">✓</span>
                </div>
                <p className="text-gray-700 font-bold">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-[#FFD93D] border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-[#FF6B6B] border-2 border-black rounded-full flex items-center justify-center">
              <span className="text-2xl">⚠️</span>
            </div>
            <div>
              <p className="font-black text-gray-900 text-lg mb-2">Penting!</p>
              <p className="font-bold text-gray-700">
                Pastikan koneksi internet Anda stabil dan perangkat dalam kondisi baik.
                Tes akan dimulai otomatis setelah waktu persiapan habis.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/dashboard/simulasi/paket1")}
            className="flex-1 px-6 py-4 bg-white border-4 border-black text-gray-900 rounded-2xl font-black text-lg hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all"
          >
            Batal
          </button>
          <button
            onClick={handleStartNow}
            className="flex-1 px-6 py-4 bg-[#FF6B6B] border-4 border-black text-white rounded-2xl font-black text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
          >
            Mulai Sekarang →
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

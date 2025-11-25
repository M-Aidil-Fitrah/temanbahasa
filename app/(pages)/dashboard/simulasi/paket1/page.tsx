"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";

export default function Paket1Page() {
  
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedSimulasi, setSelectedSimulasi] = useState<number | null>(null);

  const simulasiList = [
    { id: 1, name: "Simulasi 1", available: true, color: "bg-[#C7E9FF]" },
    { id: 2, name: "Simulasi 2", available: false, color: "bg-[#FFD93D]" },
    { id: 3, name: "Simulasi 3", available: false, color: "bg-[#B5F0C8]" },
    { id: 4, name: "Simulasi 4", available: false, color: "bg-[#FFB3D9]" },
    { id: 5, name: "Simulasi 5", available: false, color: "bg-[#D4B5FF]" },
  ];

  const handleSimulasiClick = (id: number, available: boolean) => {
    if (available) {
      setSelectedSimulasi(id);
      setShowConfirmation(true);
    }
  };

  const handleStartTest = () => {
    router.push(`/dashboard/simulasi/paket1/simulasi${selectedSimulasi}/persiapan?section=mendengarkan`);
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-6 text-gray-700">
        {/* Back Button */}
        <div>
          <Link
            href="/dashboard/simulasi"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-xl font-bold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali ke Pilihan Paket
          </Link>
        </div>

        {/* Header Section */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C7E9FF] rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative">
            <div className="inline-block bg-[#C7E9FF] border-2 border-black px-4 py-1 rounded-full font-black text-sm mb-4">
              PAKET 1
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-2">
              Pilih Simulasi 📝
            </h1>
            <p className="text-lg font-bold text-gray-600">
              5 simulasi lengkap untuk latihan maksimal
            </p>
          </div>
        </div>

        {/* Simulasi Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {simulasiList.map((simulasi) => (
            <button
              key={simulasi.id}
              onClick={() =>
                handleSimulasiClick(simulasi.id, simulasi.available)
              }
              disabled={!simulasi.available}
              className={`${
                simulasi.available
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              } transition-all`}
            >
              <div
                className={`${simulasi.color} border-4 border-black rounded-2xl p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
                  simulasi.available
                    ? "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
                    : "opacity-50"
                } transition-all`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-3 rounded-full border-4 border-black flex items-center justify-center text-2xl font-black ${
                    simulasi.available
                      ? "bg-white text-gray-900"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {simulasi.id}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">
                  {simulasi.name}
                </h3>
                <div className={`inline-block px-3 py-1 rounded-full border-2 border-black font-bold text-xs ${
                    simulasi.available ? "bg-[#B5F0C8] text-green-700" : "bg-gray-200 text-gray-500"
                  }`}>
                  {simulasi.available ? "✓ Siap" : "Segera"}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
            <span>📊</span>
            Struktur Tes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-[#C7E9FF] pl-4 bg-[#C7E9FF]/10 p-4 rounded-r-xl">
              <div className="text-2xl mb-2">🎧</div>
              <h4 className="font-black text-gray-900 mb-2">
                Seksi I - Mendengarkan
              </h4>
              <p className="text-sm font-bold text-gray-600">40 Soal</p>
              <p className="text-sm font-bold text-gray-600">⏱️ 30 menit</p>
            </div>

            <div className="border-l-4 border-[#FFD93D] pl-4 bg-[#FFD93D]/10 p-4 rounded-r-xl">
              <div className="text-2xl mb-2">✍️</div>
              <h4 className="font-black text-gray-900 mb-2">
                Seksi II - Merespons Kaidah
              </h4>
              <p className="text-sm font-bold text-gray-600">32 Soal</p>
              <p className="text-sm font-bold text-gray-600">⏱️ 25 menit</p>
            </div>

            <div className="border-l-4 border-[#B5F0C8] pl-4 bg-[#B5F0C8]/10 p-4 rounded-r-xl">
              <div className="text-2xl mb-2">📖</div>
              <h4 className="font-black text-gray-900 mb-2">
                Seksi III - Membaca
              </h4>
              <p className="text-sm font-bold text-gray-600">40 Soal</p>
              <p className="text-sm font-bold text-gray-600">⏱️ 45 menit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white border-4 border-black rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-md w-full p-8 animate-scale-up">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-[#FFD93D] border-4 border-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-4xl">🎯</span>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">
                Mulai Tes?
              </h2>
              <p className="text-lg font-bold text-gray-600">
                Simulasi {selectedSimulasi}
              </p>
            </div>

            <div className="bg-[#FFF8F0] border-2 border-black rounded-2xl p-5 mb-6">
              <h3 className="font-black text-gray-900 mb-3 flex items-center gap-2">
                <span>⚠️</span>
                Ketentuan Tes
              </h3>
              <ul className="space-y-2 text-sm font-bold text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B6B] text-lg">•</span>
                  <span>Total 112 soal dalam 3 seksi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B6B] text-lg">•</span>
                  <span>Waktu terbatas untuk setiap seksi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B6B] text-lg">•</span>
                  <span>Tidak dapat kembali ke seksi sebelumnya</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B6B] text-lg">•</span>
                  <span>Pastikan koneksi internet stabil</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowConfirmation(false);
                  setSelectedSimulasi(null);
                }}
                className="flex-1 px-6 py-3 bg-white border-2 border-black text-gray-900 rounded-xl font-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all"
              >
                Batal
              </button>
              <button
                onClick={handleStartTest}
                className="flex-1 px-6 py-3 bg-[#FF6B6B] border-2 border-black text-white rounded-xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
              >
                Mulai Tes
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

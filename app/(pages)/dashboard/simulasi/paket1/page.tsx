"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Paket1Page() {
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedSimulasi, setSelectedSimulasi] = useState<number | null>(null);

  const simulasiList = [
    { id: 1, name: "Simulasi 1", available: true },
    { id: 2, name: "Simulasi 2", available: false },
    { id: 3, name: "Simulasi 3", available: false },
    { id: 4, name: "Simulasi 4", available: false },
    { id: 5, name: "Simulasi 5", available: false },
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
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link
            href="/dashboard/simulasi"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali ke Pilihan Paket
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Paket 1</h1>
          <p className="text-lg text-gray-600">
            Pilih simulasi yang ingin Anda kerjakan
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {simulasiList.map((simulasi) => (
            <button
              key={simulasi.id}
              onClick={() =>
                handleSimulasiClick(simulasi.id, simulasi.available)
              }
              disabled={!simulasi.available}
              className={`block ${
                simulasi.available
                  ? "hover:scale-105 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              } transition-transform`}
            >
              <div
                className={`bg-white rounded-xl shadow-lg p-6 text-center ${
                  simulasi.available
                    ? "border-2 border-purple-200 hover:border-purple-400"
                    : "border-2 border-gray-200"
                }`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-2xl font-bold ${
                    simulasi.available
                      ? "bg-purple-100 text-purple-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {simulasi.id}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {simulasi.name}
                </h3>
                <p
                  className={`text-xs ${
                    simulasi.available ? "text-green-600" : "text-gray-400"
                  }`}
                >
                  {simulasi.available ? "Tersedia" : "Segera"}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Struktur Tes
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800 mb-1">
                Seksi I - Mendengarkan
              </h4>
              <p className="text-sm text-gray-600">40 Soal</p>
              <p className="text-sm text-gray-600">Durasi: 30 menit</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800 mb-1">
                Seksi II - Merespons Kaidah
              </h4>
              <p className="text-sm text-gray-600">32 Soal</p>
              <p className="text-sm text-gray-600">Durasi: 25 menit</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800 mb-1">
                Seksi III - Membaca
              </h4>
              <p className="text-sm text-gray-600">40 Soal</p>
              <p className="text-sm text-gray-600">Durasi: 45 menit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-up">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Konfirmasi Memulai Tes
              </h2>
              <p className="text-gray-600">
                Anda akan memulai Simulasi {selectedSimulasi}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">
                Ketentuan Tes:
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Total 112 soal dalam 3 seksi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Waktu terbatas untuk setiap seksi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Tidak dapat kembali ke seksi sebelumnya</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
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
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleStartTest}
                className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Mulai Tes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

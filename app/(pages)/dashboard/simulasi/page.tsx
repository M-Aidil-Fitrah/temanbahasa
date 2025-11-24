import Link from "next/link";
import DashboardLayout from "@/app/components/DashboardLayout";

export default function SimulasiPage() {
  const paketList = [
    { id: 1, name: "Paket 1", available: true, color: "bg-[#C7E9FF]" },
    { id: 2, name: "Paket 2", available: false, color: "bg-[#FFD93D]" },
    { id: 3, name: "Paket 3", available: false, color: "bg-[#FFB3D9]" },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-6 text-gray-700">
        {/* Header Section */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD93D] rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C7E9FF] rounded-full opacity-20 translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative">
            <div className="inline-block bg-[#FFD93D] border-2 border-black px-4 py-1 rounded-full font-black text-sm mb-4">
              SIMULASI UKBI
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-2">
              Pilih Paket Simulasi 🎯
            </h1>
            <p className="text-lg font-bold text-gray-600">
              Uji kemampuan dengan paket simulasi lengkap
            </p>
          </div>
        </div>

        {/* Paket Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {paketList.map((paket) => (
            <Link
              key={paket.id}
              href={paket.available ? `/dashboard/simulasi/paket${paket.id}` : "#"}
              className={`block ${
                paket.available
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              } transition-all`}
            >
              <div
                className={`${paket.color} border-4 border-black rounded-2xl p-8 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
                  paket.available
                    ? "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
                    : "opacity-50"
                } transition-all`}
              >
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-full border-4 border-black flex items-center justify-center text-3xl font-black ${
                    paket.available
                      ? "bg-white text-gray-900"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {paket.id}
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">
                  {paket.name}
                </h2>
                <div className={`inline-block px-4 py-1 rounded-full border-2 border-black font-bold text-sm ${
                    paket.available ? "bg-[#B5F0C8] text-green-700" : "bg-gray-200 text-gray-500"
                  }`}>
                  {paket.available ? "✓ Tersedia" : "Segera Hadir"}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
            <span>📋</span>
            Informasi Simulasi
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

          <div className="mt-6 bg-[#FFD93D]/20 border-2 border-black rounded-xl p-4">
            <h4 className="font-black text-gray-900 mb-3 flex items-center gap-2">
              <span>💡</span>
              Tips Penting
            </h4>
            <ul className="space-y-2 text-sm font-bold text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#FF6B6B]">•</span>
                <span>Setiap seksi memiliki waktu terbatas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6B6B]">•</span>
                <span>Tidak dapat kembali ke seksi sebelumnya</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6B6B]">•</span>
                <span>Pastikan koneksi internet stabil</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6B6B]">•</span>
                <span>Siapkan headphone untuk seksi mendengarkan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

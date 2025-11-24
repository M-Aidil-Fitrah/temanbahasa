import Link from "next/link";
import DashboardLayout from "@/app/components/DashboardLayout";

export default function SimulasiPage() {
  const paketList = [
    { 
      id: 1, 
      name: "Paket 1", 
      available: true, 
      color: "bg-[#C7E9FF]",
      description: "Terdiri atas tiga materi uji",
      sections: ["Seksi I - Mendengarkan", "Seksi II - Merespons Kaidah", "Seksi III - Membaca"]
    },
    { 
      id: 2, 
      name: "Paket 2", 
      available: false, 
      color: "bg-[#FFD93D]",
      description: "Terdiri atas empat materi uji",
      sections: ["Seksi I - Mendengarkan", "Seksi II - Merespons Kaidah", "Seksi III - Membaca", "Seksi IV - Menulis"]
    },
    { 
      id: 3, 
      name: "Paket 3", 
      available: false, 
      color: "bg-[#FFB3D9]",
      description: "Paket lengkap dengan lima materi uji",
      sections: ["Seksi I - Mendengarkan", "Seksi II - Merespons Kaidah", "Seksi III - Membaca", "Seksi IV - Menulis", "Seksi V - Berbicara"]
    },
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
                className={`${paket.color} border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
                  paket.available
                    ? "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
                    : "opacity-50"
                } transition-all h-full flex flex-col`}
              >
                <div className="text-center mb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-3 rounded-full border-4 border-black flex items-center justify-center text-2xl font-black ${
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
                  <p className="text-sm font-bold text-gray-700 mb-3">
                    {paket.description}
                  </p>
                  <div className={`inline-block px-4 py-1 rounded-full border-2 border-black font-bold text-sm ${
                      paket.available ? "bg-[#B5F0C8] text-green-700" : "bg-gray-200 text-gray-500"
                    }`}>
                    {paket.available ? "✓ Tersedia" : "Segera Hadir"}
                  </div>
                </div>

                {/* Section List */}
                <div className="bg-white/50 border-2 border-black rounded-xl p-4 mt-auto">
                  <p className="text-xs font-black text-gray-900 mb-2">Materi Uji:</p>
                  <ul className="space-y-1">
                    {paket.sections.map((section, idx) => (
                      <li key={idx} className="text-xs font-bold text-gray-700 flex items-start gap-1">
                        <span className="shrink-0">•</span>
                        <span>{section}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
            <span>📋</span>
            Informasi Materi Uji UKBI
          </h2>
          
          <div className="space-y-6">
            {/* Seksi I - Mendengarkan */}
            <div className="border-4 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-[#C7E9FF] border-b-4 border-black p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center text-xl">
                      🎧
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900">Seksi I - Mendengarkan</h3>
                      <p className="text-sm font-bold text-gray-700">40 Soal • 30 Menit</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4">
                <p className="text-sm font-bold text-gray-700 mb-3">
                  Pada seksi ini terdapat soal pemahaman dialog dan monolog yang akan terbagi menjadi delapan tahapan. Nantinya, setiap dialog dan monolog hanya diperdengarkan satu kali saja. Peserta harus menjawab secara langsung pada saat dialog dan monolog diperdengarkan.
                </p>
                <p className="text-sm font-bold text-gray-700">
                  Bentuk ujian tes pada seksi ini merupakan pilihan ganda. Jadi, peserta disediakan empat pilihan jawaban dari A, B, C, dan D. Sementara waktu maksimal yang diberikan adalah 30 menit dengan jumlah soal maksimal yaitu 40 butir.
                </p>
              </div>
            </div>

            {/* Seksi II - Merespons Kaidah */}
            <div className="border-4 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-[#FFD93D] border-b-4 border-black p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center text-xl">
                      ✍️
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900">Seksi II - Merespons Kaidah</h3>
                      <p className="text-sm font-bold text-gray-700">32 Soal • 25 Menit</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4">
                <p className="text-sm font-bold text-gray-700 mb-3">
                  Pada seksi ke II ini soal disediakan dalam bentuk tertulis berupa kalimat yang nantinya akan direspons oleh peserta uji dengan memilih opsi untuk bagian yang salah. Seksi ini berisikan penggunaan kaidah bahasa Indonesia.
                </p>
                <p className="text-sm font-bold text-gray-700">
                  Jumlah soal dan juga waktu uji akan bergantung pada kemampuan peserta yang dapat teridentifikasi dari jawaban peserta uji. Untuk rentang waktu maksimal pada seksi ini adalah 25 menit dengan jumlah soal maksimal 32 butir.
                </p>
              </div>
            </div>

            {/* Seksi III - Membaca */}
            <div className="border-4 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-[#B5F0C8] border-b-4 border-black p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center text-xl">
                      📖
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900">Seksi III - Membaca</h3>
                      <p className="text-sm font-bold text-gray-700">40 Soal • 45 Menit</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4">
                <p className="text-sm font-bold text-gray-700 mb-3">
                  Dalam seksi ini peserta akan dihadapkan dengan soal yang berupa bacaan. Terdapat total delapan bacaan, setiap bacaan memiliki 5 soal. Bentuk soal yang diberikan untuk seksi ini adalah pilihan ganda.
                </p>
                <p className="text-sm font-bold text-gray-700">
                  Di seksi ini jumlah soal dan waktu uji bergantung kepada kemampuan peserta dalam menjawab. Waktu maksimal yang disediakan untuk seksi ini 45 menit dengan jumlah soal maksimal yaitu 40 butir.
                </p>
              </div>
            </div>

            {/* Seksi IV - Menulis */}
            <div className="border-4 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-[#FFB3D9] border-b-4 border-black p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center text-xl">
                      📝
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900">Seksi IV - Menulis</h3>
                      <p className="text-sm font-bold text-gray-700">2 Tugas • 35 Menit</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4">
                <p className="text-sm font-bold text-gray-700 mb-3">
                  Seksi berikutnya adalah Seksi IV Menulis, seksi ini terdiri dari dua tugas menulis. Tugas pertama, yaitu menulis sejumlah 100 kata untuk tulisan pertama dalam waktu 15 menit.
                </p>
                <p className="text-sm font-bold text-gray-700">
                  Kemudian, dilanjutkan dengan tugas kedua yaitu menulis 150 kata untuk tulisan kedua dalam waktu 20 menit.
                </p>
              </div>
            </div>

            {/* Seksi V - Berbicara */}
            <div className="border-4 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-[#FF6B6B] border-b-4 border-black p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center text-xl">
                      🗣️
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900">Seksi V - Berbicara</h3>
                      <p className="text-sm font-bold text-gray-700">2 Tugas • 25 Menit</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4">
                <p className="text-sm font-bold text-gray-700">
                  Pada seksi ini peserta juga diharuskan menjawab dengan presentasi lisan. Seksi ini terdiri dari dua tugas. Tugas pertama, dikerjakan dalam waktu 10 menit. Sementara itu, tugas kedua dikerjakan dalam waktu 15 menit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
            <span>💡</span>
            Tips Penting
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-[#FFD93D]/10 border-2 border-black rounded-xl p-4">
              <span className="text-2xl shrink-0">⏱️</span>
              <div>
                <h4 className="font-black text-gray-900 mb-1">Waktu Terbatas</h4>
                <p className="text-sm font-bold text-gray-700">Setiap seksi memiliki waktu terbatas, kelola waktu dengan baik</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#C7E9FF]/10 border-2 border-black rounded-xl p-4">
              <span className="text-2xl shrink-0">🚫</span>
              <div>
                <h4 className="font-black text-gray-900 mb-1">Tidak Dapat Kembali</h4>
                <p className="text-sm font-bold text-gray-700">Tidak dapat kembali ke seksi sebelumnya setelah selesai</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#B5F0C8]/10 border-2 border-black rounded-xl p-4">
              <span className="text-2xl shrink-0">📶</span>
              <div>
                <h4 className="font-black text-gray-900 mb-1">Koneksi Stabil</h4>
                <p className="text-sm font-bold text-gray-700">Pastikan koneksi internet stabil selama ujian berlangsung</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#FFB3D9]/10 border-2 border-black rounded-xl p-4">
              <span className="text-2xl shrink-0">🎧</span>
              <div>
                <h4 className="font-black text-gray-900 mb-1">Siapkan Headphone</h4>
                <p className="text-sm font-bold text-gray-700">Gunakan headphone untuk seksi mendengarkan agar jelas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

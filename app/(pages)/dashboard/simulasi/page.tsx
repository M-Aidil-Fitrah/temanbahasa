import Link from "next/link";

export default function SimulasiPage() {
  const paketList = [
    { id: 1, name: "Paket 1", available: true },
    { id: 2, name: "Paket 2", available: false },
    { id: 3, name: "Paket 3", available: false },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Simulasi UKBI
          </h1>
          <p className="text-lg text-gray-600">
            Uji Kemahiran Berbahasa Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {paketList.map((paket) => (
            <Link
              key={paket.id}
              href={paket.available ? `/dashboard/simulasi/paket${paket.id}` : "#"}
              className={`block ${
                paket.available
                  ? "hover:scale-105 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              } transition-transform`}
            >
              <div
                className={`bg-white rounded-xl shadow-lg p-8 text-center ${
                  paket.available
                    ? "border-2 border-purple-200 hover:border-purple-400"
                    : "border-2 border-gray-200"
                }`}
              >
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold ${
                    paket.available
                      ? "bg-purple-100 text-purple-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {paket.id}
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {paket.name}
                </h2>
                <p
                  className={`text-sm ${
                    paket.available ? "text-green-600" : "text-gray-400"
                  }`}
                >
                  {paket.available ? "Tersedia" : "Segera Hadir"}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Informasi Simulasi
          </h3>
          <div className="space-y-3 text-gray-600">
            <div className="flex items-start">
              <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
              <p>
                <strong>Seksi I - Mendengarkan:</strong> 40 soal, 30 menit
              </p>
            </div>
            <div className="flex items-start">
              <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
              <p>
                <strong>Seksi II - Merespons Kaidah:</strong> 32 soal, 25 menit
              </p>
            </div>
            <div className="flex items-start">
              <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
              <p>
                <strong>Seksi III - Membaca:</strong> 40 soal, 45 menit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

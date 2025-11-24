// app/latihan/page.js
import Link from 'next/link';

export default function LatihanHome() {
  const seksiData = [
    {
      id: 'seksi-satu-mendengarkan',
      nama: 'Seksi Satu',
      subtitle: 'Mendengarkan',
      icon: '🎧',
      color: 'bg-yellow-400'
    },
    {
      id: 'seksi-dua-meresponkaedah',
      nama: 'Seksi Dua',
      subtitle: 'Merespon Kaedah',
      icon: '💬',
      color: 'bg-blue-300'
    },
    {
      id: 'seksi-tiga-membaca',
      nama: 'Seksi Tiga',
      subtitle: 'Membaca',
      icon: '📖',
      color: 'bg-green-300'
    }
  ];

  const kesulitan = [
    { id: 'mudah', label: 'Mudah', color: 'bg-green-400 hover:bg-green-500' },
    { id: 'menengah', label: 'Menengah', color: 'bg-yellow-400 hover:bg-yellow-500' },
    { id: 'sulit', label: 'Sulit', color: 'bg-red-400 hover:bg-red-500' },
    { id: 'adaptif', label: 'Adaptif', color: 'bg-purple-400 hover:bg-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm mb-4">
          PLATFORM UKBI #1
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-2">
          Raih Skor
        </h1>
        <h2 className="text-5xl md:text-6xl font-black mb-2">
          <span className="text-blue-600 underline decoration-4 decoration-blue-600">UKBI</span>
        </h2>
        <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
          Impianmu!
        </h3>
        <p className="text-lg text-gray-700">
          Pilih <span className="font-bold bg-green-200 px-2 py-1 rounded">seksi</span> dan{' '}
          <span className="font-bold bg-yellow-300 px-2 py-1 rounded">tingkat kesulitan</span>{' '}
          untuk memulai latihan
        </p>
      </div>

      {/* Seksi Cards */}
      <div className="max-w-6xl mx-auto grid gap-6">
        {seksiData.map((seksi) => (
          <div
            key={seksi.id}
            className="bg-white rounded-3xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className={`${seksi.color} w-16 h-16 rounded-2xl border-3 border-black flex items-center justify-center text-3xl shadow-md`}>
                {seksi.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900">{seksi.nama}</h3>
                <p className="text-lg text-gray-600 font-semibold">{seksi.subtitle}</p>
              </div>
            </div>

            {/* Tingkat Kesulitan */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {kesulitan.map((k) => (
                <Link
                  key={k.id}
                  href={`/latihan/${seksi.id}/${k.id}`}
                  className={`${k.color} rounded-2xl border-3 border-black p-4 text-center font-bold text-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all`}
                >
                  <div className="text-lg">{k.label}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="max-w-6xl mx-auto mt-8">
        <div className="bg-pink-200 rounded-3xl border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-gray-900 font-semibold text-center">
            💡 <span className="font-bold">Tips:</span> Mulai dari tingkat{' '}
            <span className="bg-green-300 px-2 py-1 rounded">Mudah</span> untuk membangun fondasi yang kuat!
          </p>
        </div>
      </div>
    </div>
  );
}
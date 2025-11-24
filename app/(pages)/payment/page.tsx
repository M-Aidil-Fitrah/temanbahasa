"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PricingPage() {
  const router = useRouter();

  const packages = [
    {
      id: 'paket_1',
      name: 'Paket 1',
      price: 13000,
      features: [
        '20 Latihan --bebas di semua seksi (S1, S2, S3, S4, #S5soon)',
        'Analisis Jawaban Otomatis',
        'Progress Tracking'
      ],
      color: 'bg-[#C7E9FF]',
      popular: false
    },
    {
      id: 'paket_2',
      name: 'Paket 2 ',
      price: 15000,
      features: [
        '20 Latihan --bebas di semua seksi (S1, S2, S3, S4, #S5soon)',
        'Analisis Jawaban Otomatis',
        'Progress Tracking',
        '2x Simulasi Ujian',
      ],
      color: 'bg-[#FFD93D]',
      popular: true
    },
    {
      id: 'paket_3',
      name: 'Paket 3 - Lengkap',
      price: 17000,
      features: [
      '25 Latihan --bebas di semua seksi (S1, S2, S3, S4, #S5soon)',
        'Analisis Jawaban Otomatis',
        'Progress Tracking',
        '5x Simulasi Ujian',
      ],
      color: 'bg-[#FFB3D9]',
      popular: false
    }
  ];

  return (
    <div className="text-gray-800 min-h-screen bg-[#FFF8F0] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            href="/dashboard"
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white border-2 border-black rounded-full font-bold text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
          >
            <span className="text-xl">←</span>
            Kembali
          </Link>
          
          <div className="inline-block bg-[#FFD93D] border-4 border-black px-6 py-2 rounded-full font-black text-sm mb-6">
            PILIH PAKET
          </div>
          <h1 className="text-5xl lg:text-6xl font-black mb-4">
            Upgrade Akun<br/>Kamu! 🚀
          </h1>
          <p className="text-lg font-bold text-gray-600">
            Pilih paket yang sesuai dengan kebutuhanmu
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative ${pkg.color} border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FF6B6B] border-4 border-black px-6 py-2 rounded-full font-black text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                  ⭐ POPULER
                </div>
              )}

              <div className={`${pkg.popular ? 'mt-4' : ''}`}>
                <div className="text-xs font-black text-gray-600 mb-2 uppercase">
                  {pkg.id.replace('_', ' ')}
                </div>
                <h3 className="text-2xl font-black mb-4">{pkg.name}</h3>
                
                <div className="mb-6">
                  <div className="text-4xl font-black mb-1">
                    Rp {pkg.price.toLocaleString('id-ID')}
                  </div>
                  <div className="text-sm font-bold text-gray-600">sekali bayar</div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="font-bold text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => router.push(`/payment/method?package=${pkg.id}`)}
                  className="w-full bg-black hover:bg-gray-800 text-white border-4 border-black px-6 py-3 rounded-xl font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  Pilih Paket Ini →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-start gap-4">
            <div className="text-3xl">ℹ️</div>
            <div>
              <h3 className="font-black text-lg mb-2">Cara Pembayaran:</h3>
              <ol className="space-y-1 font-bold text-sm text-gray-700">
                <li>1. Pilih paket yang kamu inginkan</li>
                <li>2. Pilih metode pembayaran (QRIS atau Bank BSI)</li>
                <li>3. Transfer sesuai nominal</li>
                <li>4. Upload bukti pembayaran</li>
                <li>5. Tunggu verifikasi admin (maks. 1x24 jam)</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
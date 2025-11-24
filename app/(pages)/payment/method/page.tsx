"use client";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function PaymentMethodPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const packageId = searchParams.get('package');
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const packages: Record<string, any> = {
    paket_1: { name: 'Paket 1 - Dasar', price: 13000 },
    paket_2: { name: 'Paket 2 - Menengah', price: 15000 },
    paket_3: { name: 'Paket 3 - Lengkap', price: 17000 }
  };

  const selectedPackage = packageId ? packages[packageId] : null;

  if (!selectedPackage) {
    return (
      <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-black mb-4">Paket tidak ditemukan</h1>
          <Link href="/payment" className="font-bold underline">
            Kembali ke halaman pricing
          </Link>
        </div>
      </div>
    );
  }

  const handleContinue = () => {
    if (selectedMethod) {
      router.push(`/payment/checkout?package=${packageId}&method=${selectedMethod}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/payment"
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white border-2 border-black rounded-full font-bold text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
        >
          <span className="text-xl">←</span>
          Kembali
        </Link>

        {/* Header */}
        <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="inline-block bg-[#C7E9FF] border-3 border-black px-6 py-2 rounded-full font-black text-sm mb-4">
            PILIH METODE BAYAR
          </div>
          <h1 className="text-4xl font-black mb-4">Metode Pembayaran</h1>
          
          <div className="flex items-center justify-between p-4 bg-[#FFD93D] border-3 border-black rounded-xl">
            <div>
              <div className="font-bold text-sm text-gray-600">Paket yang dipilih:</div>
              <div className="font-black text-lg">{selectedPackage.name}</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-sm text-gray-600">Total:</div>
              <div className="font-black text-2xl">Rp {selectedPackage.price.toLocaleString('id-ID')}</div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-6">
          {/* QRIS */}
          <button
            onClick={() => setSelectedMethod('qris')}
            className={`w-full text-left border-4 border-black rounded-3xl p-8 transition-all ${
              selectedMethod === 'qris'
                ? 'bg-[#FFD93D] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] scale-105'
                : 'bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1'
            }`}
          >
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-[#C7E9FF] border-4 border-black rounded-2xl flex items-center justify-center text-4xl shrink-0">
                📱
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black mb-2">QRIS</h3>
                <p className="font-bold text-gray-600 text-sm">
                  Scan QR code dengan aplikasi e-wallet favorit kamu (GoPay, OVO, Dana, ShopeePay, dll)
                </p>
              </div>
              {selectedMethod === 'qris' && (
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
              )}
            </div>
          </button>

          {/* Bank BSI */}
          <button
            onClick={() => setSelectedMethod('bank_bsi')}
            className={`w-full text-left border-4 border-black rounded-3xl p-8 transition-all ${
              selectedMethod === 'bank_bsi'
                ? 'bg-[#B5F0C8] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] scale-105'
                : 'bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1'
            }`}
          >
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-[#FFB3D9] border-4 border-black rounded-2xl flex items-center justify-center text-4xl shrink-0">
                🏦
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black mb-2">Bank BSI</h3>
                <p className="font-bold text-gray-600 text-sm">
                  Transfer ke rekening Bank Syariah Indonesia (BSI)
                </p>
              </div>
              {selectedMethod === 'bank_bsi' && (
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
              )}
            </div>
          </button>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          disabled={!selectedMethod}
          className="w-full mt-8 bg-[#FF6B6B] hover:bg-[#FF5252] border-4 border-black font-black text-xl py-5 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
        >
          Lanjutkan Pembayaran →
        </button>
      </div>
    </div>
  );
}
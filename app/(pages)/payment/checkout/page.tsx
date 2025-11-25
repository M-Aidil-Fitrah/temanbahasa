"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";
import Image from "next/image";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const packageId = searchParams.get('package');
  const method = searchParams.get('method');

  const [profile, setProfile] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const packages: Record<string, any> = {
    paket_1: { name: 'Paket 1 - Dasar', price: 13000 },
    paket_2: { name: 'Paket 2 - Menengah', price: 15000 },
    paket_3: { name: 'Paket 3 - Lengkap', price: 17000 }
  };

  const selectedPackage = packageId ? packages[packageId] : null;

  const paymentDetails: Record<string, any> = {
    qris: {
      title: 'QRIS',
      icon: '📱',
      instructions: [
        'Buka aplikasi e-wallet kamu (GoPay, OVO, Dana, ShopeePay, dll)',
        'Pilih menu "Scan QR" atau "Bayar"',
        'Scan QR code di bawah ini',
        `Transfer sebesar Rp ${selectedPackage?.price.toLocaleString('id-ID')}`,
        'Screenshot bukti pembayaran',
        'Upload bukti pembayaran di form bawah'
      ],
      qrCode: '/qris-placeholder.png' // Ganti dengan QR code asli
    },
    bank_bsi: {
      title: 'Bank BSI',
      icon: '🏦',
      accountNumber: '7250815179',
      accountName: 'TemanBahasa Platform',
      instructions: [
        'Transfer ke rekening BSI berikut:',
        'No. Rekening: 7250815179',
        'a.n. TemanBahasa Platform',
        `Nominal: Rp ${selectedPackage?.price.toLocaleString('id-ID')}`,
        'Screenshot bukti transfer',
        'Upload bukti pembayaran di form bawah'
      ]
    }
  };

  const selectedMethod = method ? paymentDetails[method] : null;

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      setProfile(data);
      setEmail(user.email || '');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        alert('Format file harus PNG, JPG, atau PDF');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Ukuran file maksimal 5MB');
        return;
      }

      setProofFile(file);
      
      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!proofFile || !profile) {
      alert('Mohon lengkapi semua data');
      return;
    }

    setUploading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      // Upload file ke Supabase Storage
      const fileExt = proofFile.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const filePath = `payment-proofs/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('payment-proofs')
        .upload(filePath, proofFile);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('payment-proofs')
        .getPublicUrl(filePath);

      // Insert ke table payment_verifications
      const { error: insertError } = await supabase
        .from('payment_verifications')
        .insert({
          user_id: user.id,
          package_type: packageId,
          package_name: selectedPackage.name,
          package_price: selectedPackage.price,
          payment_method: method,
          payment_proof_url: publicUrl,
          user_email: email,
          user_name: profile.full_name,
          user_phone: phone,
          status: 'pending'
        });

      if (insertError) throw insertError;

      // Redirect ke success page
      router.push('/payment/success');

    } catch (error: any) {
      console.error('Upload error:', error);
      alert('Error: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  if (!selectedPackage || !selectedMethod) {
    return (
      <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-black mb-4">Data tidak lengkap</h1>
          <Link href="/payment/pricing" className="font-bold underline">
            Kembali ke halaman pricing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link 
          href={`/payment/method?package=${packageId}`}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white border-2 border-black rounded-full font-bold text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
        >
          <span className="text-xl">←</span>
          Kembali
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Payment Instructions */}
          <div>
            <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-5xl">{selectedMethod.icon}</div>
                <div>
                  <div className="text-sm font-black text-gray-600 uppercase">Metode Pembayaran</div>
                  <h2 className="text-3xl font-black">{selectedMethod.title}</h2>
                </div>
              </div>

              <div className="space-y-4">
                {selectedMethod.instructions.map((instruction: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#FFD93D] border-2 border-black rounded-full flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="font-bold text-sm">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* QR Code or Account Details */}
            {method === 'qris' && (
              <div className="bg-[#FFD93D] border-4 border-black rounded-3xl p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4">Scan QR Code</h3>
                <div className="bg-white border-4 border-black rounded-2xl p-4 inline-block">
                  {/* Placeholder - ganti dengan QR code asli */}
                  <div className="w-64 h-64 bg-gray-200 flex items-center justify-center font-black text-gray-500">
                   <img src="/qris.png" alt="QR Code" />
                  </div>
                </div>
                <p className="font-bold text-sm mt-4">Total: Rp {selectedPackage.price.toLocaleString('id-ID')}</p>
              </div>
            )}

            {method === 'bank_bsi' && (
              <div className="bg-[#B5F0C8] border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4">Detail Rekening</h3>
                <div className="space-y-3">
                  <div className="bg-white border-3 border-black rounded-xl p-4">
                    <div className="text-xs font-bold text-gray-600 mb-1">Bank</div>
                    <div className="font-black text-lg">Bank Syariah Indonesia (BSI)</div>
                  </div>
                  <div className="bg-white border-3 border-black rounded-xl p-4">
                    <div className="text-xs font-bold text-gray-600 mb-1">No. Rekening</div>
                    <div className="font-black text-2xl">{selectedMethod.accountNumber}</div>
                  </div>
                  <div className="bg-white border-3 border-black rounded-xl p-4">
                    <div className="text-xs font-bold text-gray-600 mb-1">Atas Nama</div>
                    <div className="font-black text-lg">{selectedMethod.accountName}</div>
                  </div>
                  <div className="bg-white border-3 border-black rounded-xl p-4">
                    <div className="text-xs font-bold text-gray-600 mb-1">Nominal Transfer</div>
                    <div className="font-black text-2xl text-[#FF6B6B]">
                      Rp {selectedPackage.price.toLocaleString('id-ID')}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Upload Form */}
          <div>
            <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="inline-block bg-[#FFB3D9] border-3 border-black px-6 py-2 rounded-full font-black text-sm mb-4">
                UPLOAD BUKTI BAYAR
              </div>
              <h2 className="text-3xl font-black mb-6">Verifikasi Pembayaran</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-xs font-black text-gray-900 mb-2 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-3 border-black rounded-xl font-bold focus:ring-4 focus:ring-[#FFD93D] focus:border-black outline-none transition"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-black text-gray-900 mb-2 uppercase">
                    No. WhatsApp (Opsional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="08123456789"
                    className="w-full px-4 py-3 border-3 border-black rounded-xl font-bold focus:ring-4 focus:ring-[#FFD93D] focus:border-black outline-none transition"
                  />
                </div>

                {/* Upload Proof */}
                <div>
                  <label className="block text-xs font-black text-gray-900 mb-2 uppercase">
                    Bukti Pembayaran *
                  </label>
                  <div className="border-4 border-dashed border-black rounded-xl p-6 text-center bg-gray-50">
                    {!proofFile ? (
                      <label className="cursor-pointer">
                        <div className="text-4xl mb-3">📎</div>
                        <div className="font-bold text-sm mb-2">
                          Klik untuk upload bukti bayar
                        </div>
                        <div className="text-xs font-bold text-gray-500">
                          PNG, JPG, atau PDF (Max. 5MB)
                        </div>
                        <input
                          type="file"
                          accept="image/png,image/jpeg,image/jpg,application/pdf"
                          onChange={handleFileChange}
                          className="hidden"
                          required
                        />
                      </label>
                    ) : (
                      <div>
                        {previewUrl && (
                          <img 
                            src={previewUrl} 
                            alt="Preview" 
                            className="max-h-48 mx-auto mb-3 border-2 border-black rounded-lg"
                          />
                        )}
                        <div className="font-bold text-sm mb-3">
                          {proofFile.name}
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setProofFile(null);
                            setPreviewUrl(null);
                          }}
                          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-black border-3 border-black rounded-lg text-sm"
                        >
                          Hapus File
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-[#FFD93D] border-3 border-black rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm">Paket:</span>
                    <span className="font-black">{selectedPackage.name}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm">Metode:</span>
                    <span className="font-black">{selectedMethod.title}</span>
                  </div>
                  <div className="border-t-2 border-black my-2"></div>
                  <div className="flex justify-between items-center">
                    <span className="font-black">Total:</span>
                    <span className="font-black text-xl">
                      Rp {selectedPackage.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={uploading}
                  className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] border-4 border-black font-black text-lg py-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {uploading ? 'Mengirim...' : 'Kirim Verifikasi →'}
                </button>

                <p className="text-xs font-bold text-gray-600 text-center">
                  Verifikasi akan diproses maksimal 1x24 jam
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
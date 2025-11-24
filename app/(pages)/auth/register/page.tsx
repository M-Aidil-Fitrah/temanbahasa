"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/actions/auth";
import Link from "next/link";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await registerUser(email, password, fullName, username);

      if (!result.success) {
        throw new Error(result.error);
      }

      alert("Registrasi berhasil! Silakan login.");
      router.push("/auth/login");
      
    } catch (error: any) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-[#FFF8F0] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Doodles */}
      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#FFB3D9] rounded-full opacity-20 rotate-12"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#B5F0C8] border-4 border-black opacity-30 -rotate-45"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-[#C7E9FF] border-4 border-black opacity-20 rotate-6"></div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Back to Home */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white border-2 border-black rounded-full font-bold text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
        >
          <span className="text-xl">←</span>
          Kembali
        </Link>

        {/* Card */}
        <div className="bg-white border-4 border-black rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-block bg-[#FFD93D] border-3 border-black px-6 py-2 rounded-full font-black text-sm mb-3">
              DAFTAR
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              Yuk, Mulai<br/>Sekarang! 🚀
            </h1>
            <p className="text-gray-600 font-bold text-sm">
              Gratis dan gampang banget!
            </p>
          </div>

          {/* Form - 2 Columns Grid */}
          <form onSubmit={handleRegister} className="space-y-4 text-gray-800">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label 
                  htmlFor="fullName" 
                  className="block text-xs font-black text-gray-900 mb-1.5 uppercase"
                >
                  Nama Lengkap
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Nama lengkap"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 border-3 border-black rounded-xl font-bold focus:ring-4 focus:ring-[#FFD93D] focus:border-black outline-none transition text-sm"
                  autoComplete="name"
                  required
                />
              </div>

              {/* Username */}
              <div>
                <label 
                  htmlFor="username" 
                  className="block text-xs font-black text-gray-900 mb-1.5 uppercase"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username unik"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2.5 border-3 border-black rounded-xl font-bold focus:ring-4 focus:ring-[#FFD93D] focus:border-black outline-none transition text-sm"
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-xs font-black text-gray-900 mb-1.5 uppercase"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="nama@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 border-3 border-black rounded-xl font-bold focus:ring-4 focus:ring-[#FFD93D] focus:border-black outline-none transition text-sm"
                  autoComplete="email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label 
                  htmlFor="password" 
                  className="block text-xs font-black text-gray-900 mb-1.5 uppercase"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Min. 6 karakter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 border-3 border-black rounded-xl font-bold focus:ring-4 focus:ring-[#FFD93D] focus:border-black outline-none transition text-sm"
                  autoComplete="new-password"
                  minLength={6}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] border-4 border-black font-black text-base py-3 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg 
                    className="animate-spin h-4 w-4" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    />
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Loading...
                </span>
              ) : (
                "Daftar Sekarang! →"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-4 text-center">
            <p className="text-gray-600 font-bold text-sm">
              Sudah punya akun?{" "}
              <button
                onClick={() => router.push("/auth/login")}
                className="text-[#FF6B6B] hover:text-[#FF5252] font-black underline"
              >
                Masuk di sini!
              </button>
            </p>
          </div>

          {/* Terms */}
          <div className="mt-3 text-center">
            <p className="text-xs text-gray-500 font-bold">
              Dengan daftar, kamu setuju{" "}
              <a href="#" className="text-black underline">Syarat & Ketentuan</a>
            </p>
          </div>
        </div>

        {/* Floating Stickers */}
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#FFD93D] border-4 border-black rounded-full flex items-center justify-center font-black text-2xl -rotate-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          ✨
        </div>
        <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-[#C7E9FF] border-4 border-black rounded-full flex items-center justify-center font-black text-xl rotate-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          🎯
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client"; // ← Pakai client langsung
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const redirectTo = searchParams.get('redirect') || '/dashboard';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Login langsung dengan supabase client (bukan server action)
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      console.log('✅ Login successful for user:', data.user.id);
      
      // Redirect dan refresh untuk trigger middleware
      router.push(redirectTo);
      router.refresh();
      
    } catch (error: any) {
      alert("Error: " + (error.message || "Email atau password salah"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-[#FFF8F0] flex items-center justify-center px-4 relative overflow-hidden text-gray-600">
      {/* Background Doodles */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-[#FFD93D] rounded-full opacity-20 -rotate-12"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#C7E9FF] border-4 border-black opacity-30 rotate-45"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#FFB3D9] border-4 border-black rounded-full opacity-20"></div>

      <div className="w-full max-w-md relative z-10">
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
            <div className="inline-block bg-[#C7E9FF] border-3 border-black px-6 py-2 rounded-full font-black text-sm mb-3">
              Masuk
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              Selamat Datang<br/>Kembali! 
            </h1>
            <p className="text-gray-600 font-bold text-sm">
              Masuk untuk lanjut latihan UKBI
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
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
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 pr-12 border-3 border-black rounded-xl font-bold focus:ring-4 focus:ring-[#FFD93D] focus:border-black outline-none transition text-sm"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black font-black text-lg"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => router.push("/forgot-password")}
                className="text-xs font-bold text-gray-600 hover:text-black underline"
              >
                Lupa password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] border-4 border-black font-black text-base py-3 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
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
                "Masuk →"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-black"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white font-black text-xs uppercase">Atau</span>
            </div>
          </div>

          {/* Social Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border-3 border-black hover:bg-gray-50 font-bold py-2.5 px-4 rounded-xl transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Login dengan Google
          </button>

          {/* Footer */}
          <div className="mt-4 text-center">
            <p className="text-gray-600 font-bold text-sm">
              Belum punya akun?{" "}
              <button
                onClick={() => router.push("/auth/register")}
                className="text-[#FF6B6B] hover:text-[#FF5252] font-black underline"
              >
                Daftar di sini!
              </button>
            </p>
          </div>
        </div>

        {/* Floating Sticker */}
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#FFD93D] border-4 border-black rounded-full flex items-center justify-center font-black text-2xl rotate-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          🔐
        </div>
      </div>
    </div>
  );
}
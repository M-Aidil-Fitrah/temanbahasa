"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/actions/auth";

export default function Daftar() {
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
      router.push("/login");
      
    } catch (error: any) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Buat Akun Baru
            </h1>
            <p className="text-gray-600">
              Daftar untuk memulai perjalanan Anda
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-5">
            {/* Full Name */}
            <div>
              <label 
                htmlFor="fullName" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nama Lengkap
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Masukkan nama lengkap"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                autoComplete="name"
                required
              />
            </div>

            {/* Username */}
            <div>
              <label 
                htmlFor="username" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Pilih username unik"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                autoComplete="username"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-2"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                autoComplete="email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Minimal 6 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                autoComplete="new-password"
                minLength={6}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg 
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
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
                  Memproses...
                </span>
              ) : (
                "Daftar Sekarang"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Sudah punya akun?{" "}
              <button
                onClick={() => router.push("/auth/login")}
                className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
              >
                Masuk di sini
              </button>
            </p>
          </div>
        </div>

        {/* Extra Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Dengan mendaftar, Anda menyetujui{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Syarat & Ketentuan
            </a>{" "}
            dan{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Kebijakan Privasi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
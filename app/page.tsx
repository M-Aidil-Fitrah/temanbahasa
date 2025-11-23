import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Navbar - Asymmetric & Fun */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Hand-drawn style */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-14 h-14 bg-[#FF6B6B] rounded-[20px] rotate-6 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-white font-black text-2xl -rotate-6">T</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFD93D] rounded-full border-3 border-black animate-bounce"></div>
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">TemanBahasa</h1>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">UKBI Platform</p>
              </div>
            </div>

            {/* Nav Links - Stacked pills */}
            <div className="hidden lg:flex items-center gap-2">
              <a href="#tentang" className="px-5 py-2 bg-[#FFF8F0] hover:bg-[#FFE5D0] border-2 border-black rounded-full font-bold text-sm transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
                Tentang
              </a>
              <a href="#fitur" className="px-5 py-2 bg-[#E3F2FD] hover:bg-[#BBDEFB] border-2 border-black rounded-full font-bold text-sm transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
                5 Seksi
              </a>
              <a href="#paket" className="px-5 py-2 bg-[#F3E5F5] hover:bg-[#E1BEE7] border-2 border-black rounded-full font-bold text-sm transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
                Paket
              </a>
            </div>

            {/* CTA Buttons - Brutalist */}
            <div className="flex items-center gap-3">
              <Link 
                href="/auth/login"
                className="hidden sm:block px-5 py-2 font-black border-2 border-black hover:bg-gray-100 transition-all"
              >
                Masuk
              </Link>
              <Link 
                href="/auth/register"
                className="px-6 py-3 bg-[#FF6B6B] hover:bg-[#FF5252] border-4 border-black font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all rounded-xl"
              >
                Mulai Gratis!
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - Chaotic Grid Layout */}
      <section className="pt-16 pb-12 px-6 overflow-hidden relative">
        {/* Background Doodles */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-[#FFD93D] rounded-full opacity-30 -rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#C7E9FF] border-4 border-black opacity-40 rotate-45"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-[#FFB3D9] border-4 border-black rounded-full opacity-30"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Main Content - 7 cols */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-block">
                <div className="bg-[#FFD93D] border-4 border-black px-6 py-2 rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇮🇩</span>
                    <span className="font-black text-sm uppercase tracking-wide">Platform UKBI #1</span>
                  </div>
                </div>
              </div>

              {/* Headline - Stacked & Bold */}
              <div className="space-y-3">
                <h2 className="text-6xl lg:text-7xl font-black leading-none text-gray-900">
                  Raih Skor
                </h2>
                <div className="relative inline-block">
                  <h2 className="text-6xl lg:text-7xl font-black leading-none relative z-10">
                    UKBI
                  </h2>
                  <div className="absolute -bottom-2 left-0 w-full h-4 bg-[#FF6B6B] -rotate-1"></div>
                </div>
                <h2 className="text-6xl lg:text-7xl font-black leading-none text-gray-900">
                  Impianmu!
                </h2>
              </div>

              {/* Description */}
              <div className="bg-white border-4 border-black p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-xl">
                <p className="text-lg font-bold text-gray-700 leading-relaxed">
                  Latihan <span className="bg-[#C7E9FF] px-2 py-1 border-2 border-black rounded">5 seksi</span> lengkap dengan{" "}
                  <span className="bg-[#FFD93D] px-2 py-1 border-2 border-black rounded">AI Review</span>{" "}
                  yang bikin kamu <span className="italic">paham banget</span> setiap kesalahan!
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/auth/register"
                  className="group px-8 py-4 bg-[#FF6B6B] hover:bg-[#FF5252] border-4 border-black font-black text-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all rounded-2xl flex items-center gap-2"
                >
                  Mulai Latihan Gratis
                  <span className="text-2xl group-hover:rotate-12 transition-transform">→</span>
                </Link>
                
                <button className="px-8 py-4 bg-[#FFD93D] hover:bg-[#FFC107] border-4 border-black font-black text-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all rounded-2xl flex items-center gap-2">
                  <span className="text-2xl">▶</span>
                  Demo
                </button>
              </div>

              {/* Stats - Wonky Grid */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="bg-[#FFD93D] border-4 border-black p-4 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-2">
                  <div className="text-4xl font-black">5</div>
                  <div className="text-xs font-bold uppercase">Seksi</div>
                </div>
                <div className="bg-[#C7E9FF] border-4 border-black p-4 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                  <div className="text-4xl font-black">AI</div>
                  <div className="text-xs font-bold uppercase">Review</div>
                </div>
                <div className="bg-[#B5F0C8] border-4 border-black p-4 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-1">
                  <div className="text-4xl font-black">3</div>
                  <div className="text-xs font-bold uppercase">Paket</div>
                </div>
              </div>
            </div>

            {/* Right: Dashboard Mockup - 5 cols */}
            <div className="lg:col-span-5 relative">
              <div className="relative -rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Main Card */}
                <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm font-bold text-gray-500">Halo,</div>
                      <div className="text-2xl font-black">Budi! 👋</div>
                    </div>
                    <div className="w-12 h-12 bg-[#FF6B6B] border-3 border-black rounded-2xl rotate-6"></div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-[#FFD93D] border-3 border-black p-4 rounded-2xl">
                      <div className="text-3xl font-black">450</div>
                      <div className="text-xs font-bold">Skor Max</div>
                    </div>
                    <div className="bg-[#B5F0C8] border-3 border-black p-4 rounded-2xl">
                      <div className="text-3xl font-black">12</div>
                      <div className="text-xs font-bold">Hari Streak</div>
                    </div>
                  </div>

                  {/* Chart - Minimal bars */}
                  <div className="bg-[#FFF8F0] border-3 border-black p-4 rounded-2xl mb-6">
                    <div className="text-xs font-bold mb-3 uppercase">Progress Minggu Ini</div>
                    <div className="flex items-end justify-between gap-2 h-24">
                      {[40, 70, 85, 60, 100, 35, 25].map((height, i) => (
                        <div 
                          key={i}
                          className="bg-black w-full rounded-t-lg border-2 border-black"
                          style={{height: `${height}%`}}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Next Lesson */}
                  <div className="bg-[#FFB3D9] border-3 border-black p-4 rounded-2xl flex items-center gap-3 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-[#FF6B6B] border-3 border-black rounded-xl flex items-center justify-center font-black flex-shrink-0">
                      S1
                    </div>
                    <div className="flex-1">
                      <div className="font-black text-sm">Mendengarkan</div>
                      <div className="text-xs font-bold text-gray-700">20 soal</div>
                    </div>
                    <div className="text-2xl">→</div>
                  </div>
                </div>

                {/* Floating stickers */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#C7E9FF] border-4 border-black rounded-full flex items-center justify-center font-black text-2xl animate-bounce shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  ⭐
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#FFD93D] border-4 border-black rounded-full flex items-center justify-center font-black text-xl rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Seksi - Bento Box Style */}
      <section id="fitur" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[#FFB3D9] border-4 border-black px-6 py-2 rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6 rotate-1">
              <span className="font-black uppercase tracking-wider">5 Seksi UKBI</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-4">
              Yang Harus Kamu<br/>Kuasai! 💪
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Seksi 1 - Spans 2 cols */}
            <div className="md:col-span-2 bg-[#C7E9FF] border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all group">
              <div className="w-16 h-16 bg-white border-4 border-black rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">🎧</span>
              </div>
              <div className="text-xs font-black text-blue-600 mb-2 uppercase">Seksi 1</div>
              <h3 className="text-3xl font-black mb-3">Mendengarkan</h3>
              <p className="font-bold text-sm text-gray-700">Dialog & monolog dengan audio autentik</p>
            </div>

            {/* Seksi 2 - Spans 2 cols */}
            <div className="md:col-span-2 bg-[#FFD93D] border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all group">
              <div className="w-16 h-16 bg-white border-4 border-black rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">📝</span>
              </div>
              <div className="text-xs font-black text-orange-600 mb-2 uppercase">Seksi 2</div>
              <h3 className="text-3xl font-black mb-3">Merespons Kaidah</h3>
              <p className="font-bold text-sm text-gray-700">Grammar & kaidah bahasa Indonesia</p>
            </div>

            {/* Seksi 3 - Spans 2 cols */}
            <div className="md:col-span-2 bg-[#B5F0C8] border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all group">
              <div className="w-16 h-16 bg-white border-4 border-black rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">📖</span>
              </div>
              <div className="text-xs font-black text-green-600 mb-2 uppercase">Seksi 3</div>
              <h3 className="text-3xl font-black mb-3">Membaca</h3>
              <p className="font-bold text-sm text-gray-700">Pahami teks & infografik dengan cepat</p>
            </div>

            {/* Seksi 4 - Spans 3 cols */}
            <div className="md:col-span-3 bg-[#FFB3D9] border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all group">
              <div className="w-16 h-16 bg-white border-4 border-black rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">✍️</span>
              </div>
              <div className="text-xs font-black text-pink-600 mb-2 uppercase">Seksi 4</div>
              <h3 className="text-3xl font-black mb-3">Menulis</h3>
              <p className="font-bold text-sm text-gray-700">Tulis esai & paragraf. AI nilai struktur dan grammar kamu!</p>
            </div>

            {/* Seksi 5 & AI - Spans 3 cols */}
            <div className="md:col-span-3 bg-[#D4B5FF] border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all group">
              <div className="w-16 h-16 bg-white border-4 border-black rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">🎤</span>
              </div>
              <div className="text-xs font-black text-purple-600 mb-2 uppercase">Seksi 5</div>
              <h3 className="text-3xl font-black mb-3">Berbicara</h3>
              <p className="font-bold text-sm text-gray-700">Rekam jawabanmu! AI analisis intonasi & pelafalan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Paket - Card Stack */}
      <section id="paket" className="py-16 px-6 bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#C7E9FF] border-4 border-black px-6 py-2 rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6 -rotate-1">
              <span className="font-black uppercase tracking-wider">Pilih Paket</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-4">
              3 Paket Simulasi<br/>UKBI 🎯
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Paket 1 */}
            <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all">
              <div className="bg-[#C7E9FF] border-3 border-black px-4 py-2 rounded-full inline-block mb-6 font-black text-sm">
                PAKET 1
              </div>
              <h3 className="text-4xl font-black mb-4">Dasar</h3>
              
              <div className="space-y-3 mb-8">
                {['S1: Mendengarkan', 'S2: Merespons Kaidah', 'S3: Membaca', 'Skor Langsung'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/auth/register"
                className="block text-center bg-[#C7E9FF] hover:bg-[#A5D8FF] border-4 border-black px-6 py-3 rounded-xl font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Pilih Paket 1
              </Link>
            </div>

            {/* Paket 2 - Featured */}
            <div className="relative bg-[#FFD93D] border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all -rotate-1">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FF6B6B] border-4 border-black px-6 py-2 rounded-full font-black text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                ⭐ POPULER
              </div>
              <div className="bg-white border-3 border-black px-4 py-2 rounded-full inline-block mb-6 font-black text-sm mt-4">
                PAKET 2
              </div>
              <h3 className="text-4xl font-black mb-4">Menengah</h3>
              
              <div className="space-y-3 mb-8">
                {['Semua di Paket 1', 'S4: Menulis', 'AI Review Tulisan', 'Nilai maks. 10 hari'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/auth/register"
                className="block text-center bg-[#FF6B6B] hover:bg-[#FF5252] border-4 border-black px-6 py-3 rounded-xl font-black text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Pilih Paket 2 →
              </Link>
            </div>

            {/* Paket 3 */}
            <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all">
              <div className="bg-[#FFB3D9] border-3 border-black px-4 py-2 rounded-full inline-block mb-6 font-black text-sm">
                PAKET 3
              </div>
              <h3 className="text-4xl font-black mb-4">Lengkap</h3>
              
              <div className="space-y-3 mb-8">
                {['Semua di Paket 2', 'S5: Berbicara', 'AI Analisis Suara', 'Nilai maks. 14 hari', 'Sertifikat UKBI'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/auth/register"
                className="block text-center bg-[#FFB3D9] hover:bg-[#FF9CC5] border-4 border-black px-6 py-3 rounded-xl font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Pilih Paket 3
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Bold & Direct */}
      <section className="py-20 px-6 bg-[#FF6B6B] border-y-8 border-black relative overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-24 h-24 border-4 border-black rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-black rotate-45"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-black rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-none">
            Yuk, Mulai<br/>Sekarang! 🚀
          </h2>
          <p className="text-xl font-bold text-white/90 mb-10">
            Ribuan pengguna sudah improve skor UKBI mereka
          </p>
          <Link 
            href="/auth/register"
            className="inline-block px-12 py-6 bg-[#FFD93D] hover:bg-[#FFC107] border-4 border-black font-black text-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all rounded-2xl"
          >
            Daftar Gratis! →
          </Link>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FF6B6B] border-3 border-white rounded-2xl flex items-center justify-center">
                <span className="text-white font-black text-xl">T</span>
              </div>
              <div>
                <div className="font-black text-xl">TemanBahasa</div>
                <div className="text-sm text-gray-400 font-bold">UKBI Platform</div>
              </div>
            </div>
            
            <div className="flex gap-6 font-bold">
              <a href="#" className="hover:text-[#FFD93D] transition">Tentang</a>
              <a href="#" className="hover:text-[#FFD93D] transition">Kontak</a>
              <a href="#" className="hover:text-[#FFD93D] transition">FAQ</a>
            </div>
          </div>
          
          <div className="border-t-2 border-white/20 pt-6 text-center font-bold text-sm text-gray-400">
            © 2025 TemanBahasa. Made with ❤️ for Indonesia
          </div>
        </div>
      </footer>
    </div>
  );
}
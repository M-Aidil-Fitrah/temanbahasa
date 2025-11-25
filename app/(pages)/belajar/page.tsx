"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import DashboardLayout from "@/app/components/DashboardLayout";
import Link from "next/link";

export default function LatihanPage() {
  const [profile, setProfile] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Load profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      setProfile(profileData);

      // Load stats
      const { data: statsData } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', user.id)
        .single();
      setStats(statsData);

    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const sections = [
    {
      id: 1,
      name: 'Mendengarkan',
      icon: '🎧',
      description: 'Dialog & monolog dengan audio autentik',
      color: 'bg-[#C7E9FF]',
      totalQuestions: 25,
      accuracy: stats?.section_1_accuracy || 0,
      bestScore: stats?.best_score_section_1 || 0,
      available: true
    },
    {
      id: 2,
      name: 'Merespons Kaidah',
      icon: '📝',
      description: 'Grammar & kaidah bahasa Indonesia',
      color: 'bg-[#FFD93D]',
      totalQuestions: 25,
      accuracy: stats?.section_2_accuracy || 0,
      bestScore: stats?.best_score_section_2 || 0,
      available: true
    },
    {
      id: 3,
      name: 'Membaca',
      icon: '📖',
      description: 'Pahami teks & infografik dengan cepat',
      color: 'bg-[#B5F0C8]',
      totalQuestions: 25,
      accuracy: stats?.section_3_accuracy || 0,
      bestScore: stats?.best_score_section_3 || 0,
      available: true
    },
    {
      id: 4,
      name: 'Menulis',
      icon: '✍️',
      description: 'Tulis esai & paragraf dengan baik',
      color: 'bg-[#FFB3D9]',
      totalQuestions: 10,
      accuracy: stats?.section_4_accuracy || 0,
      bestScore: stats?.best_score_section_4 || 0,
      available: true
    },
    {
      id: 5,
      name: 'Berbicara',
      icon: '🎤',
      description: 'Latihan pronunciation & intonasi',
      color: 'bg-[#D4B5FF]',
      totalQuestions: 10,
      accuracy: stats?.section_5_accuracy || 0,
      bestScore: stats?.best_score_section_5 || 0,
      available: false, // Coming soon
      comingSoon: true
    }
  ];

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="text-4xl mb-4">⏳</div>
            <div className="font-black text-xl">Loading...</div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-6">
        {/* Header */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD93D] rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative">
            <div className="inline-block bg-[#C7E9FF] border-3 border-black px-4 py-1 rounded-full font-black text-sm mb-4">
              LATIHAN
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-2">
              Mode Latihan 📚
            </h1>
            <p className="text-lg font-bold text-gray-600">
              Pilih seksi yang ingin kamu latih. Grinding terus sampai mahir!
            </p>
          </div>
        </div>

        {/* Package Info */}
        {profile?.active_package && profile.active_package !== 'free' && (
          <div className="bg-[#FFD93D] border-4 border-black rounded-2xl p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-3xl">⭐</div>
                <div>
                  <div className="font-black text-sm">Paket Aktif</div>
                  <div className="text-lg font-black text-gray-900">
                    {profile.active_package.replace('_', ' ').toUpperCase()}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-gray-600">Berlaku hingga</div>
                <div className="font-black text-sm">
                  {profile.package_expires_at 
                    ? new Date(profile.package_expires_at).toLocaleDateString('id-ID')
                    : 'Selamanya'}
                </div>
              </div>
            </div>
          </div>
        )}

        {profile?.active_package === 'free' && (
          <div className="bg-[#FFB3D9] border-4 border-black rounded-2xl p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🔒</div>
                <div>
                  <div className="font-black text-sm">Akun Gratis</div>
                  <div className="text-xs font-bold text-gray-700">
                    Upgrade untuk akses unlimited latihan!
                  </div>
                </div>
              </div>
              <Link 
                href="/payment/pricing"
                className="px-5 py-2 bg-[#FF6B6B] hover:bg-[#FF5252] border-3 border-black rounded-xl font-black text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-white"
              >
                Upgrade →
              </Link>
            </div>
          </div>
        )}

        {/* Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`${section.color} border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all relative ${
                !section.available ? 'opacity-75' : ''
              }`}
            >
              {/* Coming Soon Badge */}
              {section.comingSoon && (
                <div className="absolute -top-3 -right-3 bg-[#FF6B6B] border-3 border-black px-4 py-1 rounded-full font-black text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12">
                  SOON
                </div>
              )}

              {/* Icon */}
              <div className="w-20 h-20 bg-white border-4 border-black rounded-2xl flex items-center justify-center mb-5 group-hover:rotate-12 transition-transform">
                <span className="text-5xl">{section.icon}</span>
              </div>

              {/* Section Info */}
              <div className="mb-5">
                <div className="text-xs font-black text-gray-600 mb-1 uppercase">
                  Seksi {section.id}
                </div>
                <h3 className="text-2xl font-black mb-2">{section.name}</h3>
                <p className="font-bold text-sm text-gray-700 mb-4">
                  {section.description}
                </p>
                <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                  <span>{section.totalQuestions} Soal</span>
                  <span>•</span>
                  <span>Multiple Choice</span>
                </div>
              </div>

              {/* Stats */}
              {section.available && (
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-white border-3 border-black rounded-xl p-3 text-center">
                    <div className="text-2xl font-black text-gray-900">
                      {section.accuracy.toFixed(0)}%
                    </div>
                    <div className="text-xs font-bold text-gray-600">Akurasi</div>
                  </div>
                  <div className="bg-white border-3 border-black rounded-xl p-3 text-center">
                    <div className="text-2xl font-black text-gray-900">
                      {section.bestScore.toFixed(0)}
                    </div>
                    <div className="text-xs font-bold text-gray-600">Best</div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              {section.available ? (
                <Link
                  href={`/dashboard/latihan/${section.id}`}
                  className="block text-center bg-black hover:bg-gray-800 text-white border-4 border-black px-6 py-3 rounded-xl font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  Mulai Latihan →
                </Link>
              ) : (
                <button
                  disabled
                  className="w-full text-center bg-gray-400 text-white border-4 border-black px-6 py-3 rounded-xl font-black cursor-not-allowed opacity-75"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h3 className="font-black text-xl mb-3">Tips Latihan Efektif</h3>
              <ul className="space-y-2 font-bold text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B6B]">•</span>
                  <span>Fokus pada 1 seksi per sesi latihan untuk hasil maksimal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD93D]">•</span>
                  <span>Review jawaban yang salah untuk memahami kesalahan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B5F0C8]">•</span>
                  <span>Latihan konsisten setiap hari minimal 30 menit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFB3D9]">•</span>
                  <span>Catat progress dan track improvement kamu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#C7E9FF] border-4 border-black rounded-2xl p-5 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-3xl mb-2">📝</div>
            <div className="text-3xl font-black">{stats?.total_sessions || 0}</div>
            <div className="text-xs font-bold text-gray-700">Total Latihan</div>
          </div>
          <div className="bg-[#FFD93D] border-4 border-black rounded-2xl p-5 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-3xl font-black">{stats?.total_correct || 0}</div>
            <div className="text-xs font-bold text-gray-700">Jawaban Benar</div>
          </div>
          <div className="bg-[#B5F0C8] border-4 border-black rounded-2xl p-5 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-3xl font-black">{stats?.overall_accuracy?.toFixed(0) || 0}%</div>
            <div className="text-xs font-bold text-gray-700">Akurasi Total</div>
          </div>
          <div className="bg-[#FFB3D9] border-4 border-black rounded-2xl p-5 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-3xl font-black">{Math.floor((stats?.total_study_time_seconds || 0) / 60)}</div>
            <div className="text-xs font-bold text-gray-700">Menit Belajar</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
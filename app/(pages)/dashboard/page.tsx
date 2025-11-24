"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import DashboardLayout from "@/app/components/DashboardLayout";
import Link from "next/link";

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [recentSessions, setRecentSessions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
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

      // Load or create user stats
      let { data: statsData } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (!statsData) {
        // Create if not exists
        const { data: newStats } = await supabase
          .from('user_stats')
          .insert({ user_id: user.id })
          .select()
          .single();
        statsData = newStats;
      }
      setStats(statsData);

      // Load recent sessions
      const { data: sessionsData } = await supabase
        .from('practice_sessions')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_completed', true)
        .order('created_at', { ascending: false })
        .limit(5);
      setRecentSessions(sessionsData || []);

    } catch (error) {
      console.error('Error loading dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getSectionName = (num: number) => {
    const names = ['', 'Mendengarkan', 'Merespons Kaidah', 'Membaca', 'Menulis', 'Berbicara'];
    return names[num] || 'Unknown';
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
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
      <div className="p-6 lg:p-8 space-y-6 text-gray-700">
        {/* Welcome Section */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD93D] rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C7E9FF] rounded-full opacity-20 translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative">
            <div className="inline-block bg-[#FFD93D] border-3 border-black px-4 py-1 rounded-full font-black text-sm mb-4">
              DASHBOARD
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-2">
              Halo, {profile?.full_name?.split(' ')[0] || 'Sobat'}! 👋
            </h1>
            <p className="text-lg font-bold text-gray-600">
              Semangat latihan UKBI hari ini!
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Sessions */}
          <div className="bg-[#C7E9FF] border-4 border-black rounded-2xl p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="text-3xl mb-2">📝</div>
            <div className="text-3xl font-black text-gray-900">{stats?.total_sessions || 0}</div>
            <div className="text-sm font-bold text-gray-700">Total Latihan</div>
          </div>

          {/* Accuracy */}
          <div className="bg-[#B5F0C8] border-4 border-black rounded-2xl p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-3xl font-black text-gray-900">{stats?.overall_accuracy?.toFixed(0) || 0}%</div>
            <div className="text-sm font-bold text-gray-700">Akurasi</div>
          </div>

          {/* Current Streak */}
          <div className="bg-[#FFD93D] border-4 border-black rounded-2xl p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="text-3xl mb-2">🔥</div>
            <div className="text-3xl font-black text-gray-900">{stats?.current_streak || 0}</div>
            <div className="text-sm font-bold text-gray-700">Hari Beruntun</div>
          </div>

          {/* Study Time */}
          <div className="bg-[#FFB3D9] border-4 border-black rounded-2xl p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-3xl font-black text-gray-900">{Math.floor((stats?.total_study_time_seconds || 0) / 60)}</div>
            <div className="text-sm font-bold text-gray-700">Menit Belajar</div>
          </div>
        </div>

        {/* Progress Per Seksi */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
            <span>📊</span>
            Progress Per Seksi
          </h2>
          
          <div className="space-y-4">
            {[
              { num: 1, name: 'Mendengarkan', color: 'bg-[#C7E9FF]', accuracy: stats?.section_1_accuracy },
              { num: 2, name: 'Merespons Kaidah', color: 'bg-[#FFD93D]', accuracy: stats?.section_2_accuracy },
              { num: 3, name: 'Membaca', color: 'bg-[#B5F0C8]', accuracy: stats?.section_3_accuracy },
              { num: 4, name: 'Menulis', color: 'bg-[#FFB3D9]', accuracy: stats?.section_4_accuracy },
              { num: 5, name: 'Berbicara', color: 'bg-[#D4B5FF]', accuracy: stats?.section_5_accuracy },
            ].map((section) => (
              <div key={section.num}>
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-sm">
                    S{section.num}: {section.name}
                  </div>
                  <div className="font-black text-sm">
                    {section.accuracy?.toFixed(0) || 0}%
                  </div>
                </div>
                <div className="h-4 bg-gray-200 rounded-full border-3 border-black overflow-hidden">
                  <div
                    className={`h-full ${section.color} border-r-3 border-black transition-all`}
                    style={{ width: `${section.accuracy || 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Start Practice */}
          <Link
            href="/dashboard/latihan"
            className="group bg-[#FF6B6B] border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📝</div>
            <h3 className="text-2xl font-black text-white mb-2">Mulai Latihan</h3>
            <p className="font-bold text-white/90">
              Grinding soal per seksi UKBI
            </p>
          </Link>

          {/* Start Simulation */}
          <Link
            href="/dashboard/simulasi"
            className="group bg-[#FFD93D] border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">Simulasi UKBI</h3>
            <p className="font-bold text-gray-700">
              Uji kemampuan dengan paket lengkap
            </p>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
            <span>📜</span>
            Aktivitas Terakhir
          </h2>

          {recentSessions.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">📭</div>
              <p className="font-bold text-gray-600">Belum ada aktivitas</p>
              <p className="text-sm font-bold text-gray-500 mt-2">Yuk mulai latihan pertamamu!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {recentSessions.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center gap-4 p-4 bg-gray-50 border-3 border-black rounded-xl hover:bg-gray-100 transition"
                >
                  <div className="w-12 h-12 bg-[#C7E9FF] border-3 border-black rounded-xl flex items-center justify-center font-black flex-shrink-0">
                    S{session.section_number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-sm">
                      {getSectionName(session.section_number)}
                    </div>
                    <div className="text-xs font-bold text-gray-600">
                      {session.session_type === 'practice' ? 'Latihan' : 'Simulasi'} • {formatDuration(session.duration_seconds || 0)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-lg">{session.score?.toFixed(0) || 0}</div>
                    <div className="text-xs font-bold text-gray-600">Skor</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Best Scores */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
            <span>🏆</span>
            Skor Terbaik
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'S1', score: stats?.best_score_section_1, color: 'bg-[#C7E9FF]' },
              { label: 'S2', score: stats?.best_score_section_2, color: 'bg-[#FFD93D]' },
              { label: 'S3', score: stats?.best_score_section_3, color: 'bg-[#B5F0C8]' },
              { label: 'S4', score: stats?.best_score_section_4, color: 'bg-[#FFB3D9]' },
              { label: 'S5', score: stats?.best_score_section_5, color: 'bg-[#D4B5FF]' },
            ].map((item) => (
              <div
                key={item.label}
                className={`${item.color} border-3 border-black rounded-2xl p-4 text-center`}
              >
                <div className="text-xs font-black text-gray-600 mb-1">{item.label}</div>
                <div className="text-2xl font-black text-gray-900">
                  {item.score?.toFixed(0) || 0}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
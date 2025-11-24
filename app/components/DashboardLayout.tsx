"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { logoutUser } from "@/app/actions/auth";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUser(user);
      
      // Get profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      console.log('Profile data:', profileData); // Debug
      setProfile(profileData);
    }
  };

  const handleLogout = async () => {
    await logoutUser();
    router.push('/');
  };

  const navItems = [
    { href: '/dashboard', icon: '🏠', label: 'Dashboard' },
    { href: '/dashboard/latihan', icon: '📝', label: 'Latihan' },
    { href: '/dashboard/simulasi', icon: '🎯', label: 'Simulasi' },
    { href: '/dashboard/riwayat', icon: '📊', label: 'Riwayat' },
    { href: '/dashboard/profil', icon: '👤', label: 'Profil' },
  ];

  return (
    <div className="h-screen overflow-hidden bg-[#FFF8F0] flex flex-col text-gray-700">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-50 bg-white border-b-4 border-black flex-shrink-0">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#FF6B6B] rounded-xl border-3 border-black flex items-center justify-center">
              <span className="text-white font-black text-lg">T</span>
            </div>
            <span className="font-black text-lg">TemanBahasa</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 border-3 border-black rounded-lg flex items-center justify-center bg-[#FFD93D] hover:bg-[#FFC107] transition"
          >
            <span className="text-xl">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t-3 border-black bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 font-bold border-b-2 border-black transition ${
                  pathname === item.href
                    ? 'bg-[#FFD93D]'
                    : 'hover:bg-gray-50'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 font-bold text-red-600 hover:bg-red-50 transition"
            >
              <span className="text-2xl">🚪</span>
              <span>Keluar</span>
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar - Fixed Height with Scroll */}
        <aside className="hidden lg:flex lg:flex-col w-64 h-screen bg-white border-r-4 border-black flex-shrink-0">
          {/* Logo - Fixed */}
          <div className="p-6 border-b-4 border-black flex-shrink-0">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FF6B6B] rounded-xl rotate-6 border-4 border-black flex items-center justify-center">
                <span className="text-white font-black text-xl -rotate-6">T</span>
              </div>
              <div>
                <div className="font-black text-lg">TemanBahasa</div>
                <div className="text-xs font-bold text-gray-500 uppercase">Dashboard</div>
              </div>
            </Link>
          </div>

          {/* User Info - Fixed */}
          <div className="p-4 border-b-4 border-black bg-[#C7E9FF] flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FF6B6B] border-3 border-black rounded-xl flex items-center justify-center font-black text-white text-lg">
                {profile?.full_name?.[0]?.toUpperCase() || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-black text-sm truncate">
                  {profile?.full_name || 'User'}
                </div>
                <div className="text-xs font-bold text-gray-600 truncate">
                  @{profile?.username || 'username'}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation - Scrollable */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold border-3 border-black transition-all ${
                  pathname === item.href
                    ? 'bg-[#FFD93D] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-white hover:bg-gray-50 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Logout Button - Fixed */}
          <div className="p-4 border-t-4 border-black bg-white flex-shrink-0">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span className="text-2xl">🚪</span>
              <span>Keluar</span>
            </button>
          </div>
        </aside>

        {/* Main Content - Scrollable */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
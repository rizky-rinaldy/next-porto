"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Projects", href: "/dashboard/projects", icon: FileText },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function SideBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Tombol Hamburger untuk Tampilan Mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-900 text-white shadow-md focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay Hitam saat Sidebar Terbuka di Mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="md:hidden fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
        />
      )}

      {/* Kontainer Utama Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 h-screen w-64 bg-slate-900 text-slate-300 flex flex-col z-40
        transition-transform duration-300 ease-in-out border-r border-slate-800
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
      `}
      >
        {/* Logo / Header */}
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <span className="text-xl font-bold tracking-wider text-white">
            My<span className="text-indigo-500">App</span>
          </span>
        </div>

        {/* Daftar Navigasi Menu */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            // Cek apakah rute saat ini aktif
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)} // Tutup sidebar otomatis di mobile saat menu diklik
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all
                  ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                      : "hover:bg-slate-800 hover:text-white text-slate-400"
                  }
                `}
              >
                <Icon
                  size={20}
                  className={isActive ? "text-white" : "text-slate-400"}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bagian Bawah / Profil & Logout */}
        <div className="p-4 border-t border-slate-800">
          <button
            onClick={() => alert("Log out clicked")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm text-rose-400 hover:bg-rose-500/10 transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

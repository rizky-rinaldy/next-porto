"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Efek bayangan & border halus saat halaman di-scroll ke bawah
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm border-b border-zinc-200 dark:border-zinc-800"
          : "bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* 1. Logo & Nama Website */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
            <Image
              src="/RNLDev.ico"
              alt="RNLDev logo"
              width={28}
              height={28}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-zinc-900 dark:text-white">
            RNL<span className="text-blue-600">Dev</span>
          </span>
        </Link>

        {/* 2. Menu Navigasi Desktop (Manual / Tanpa Map) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors duration-200 ${
              pathname === "/"
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            Beranda
          </Link>
          <Link
            href="/portofolio"
            className={`text-sm font-medium transition-colors duration-200 ${
              pathname === "/portofolio"
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            Portofolio
          </Link>
          <Link
            href="/projects"
            className={`text-sm font-medium transition-colors duration-200 ${
              pathname === "/projects"
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/team"
            className={`text-sm font-medium transition-colors duration-200 ${
              pathname === "/team"
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            Team
          </Link>
        </nav>

        {/* 3. Tombol Aksi / Kontak (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200"
          >
            <span>Hubungi Saya</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* 4. Tombol Hamburger (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown Menu Mobile (Manual) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 px-6 py-6 shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                pathname === "/"
                  ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Beranda
            </Link>
            <Link
              href="/portofolio"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                pathname === "/portofolio"
                  ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Portofolio
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                pathname === "/projects"
                  ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/team"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                pathname === "/team"
                  ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Team
            </Link>
          </nav>
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-colors"
            >
              <span>Hubungi Saya</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

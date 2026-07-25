import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, GitBranch, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Bagian Foto / Ilustrasi */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-xl flex items-center justify-center">
              {/* Ganti src dengan path foto Anda, contoh: /profile.jpg */}
              <Image
                src="/RNLDev.ico"
                alt="M. Rizky Rinaldy"
                width={140}
                height={140}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          {/* Bagian Teks & Caption */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Available for Freelance & Collaboration
            </div>

            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
              Hi, saya{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                M. Rizky Rinaldy
              </span>
            </h1>

            <p className="text-base lg:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Selamat datang di portofolio digital saya. Temukan berbagai{" "}
              <strong className="text-zinc-900 dark:text-white font-semibold">
                Project
              </strong>{" "}
              yang telah saya kembangkan. Mari berkolaborasi untuk mewujudkan
              ide kreatif Anda menjadi solusi digital yang berdampak.
            </p>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200"
              >
                <span>Lihat Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 active:scale-95 rounded-xl border border-zinc-200 dark:border-zinc-800 transition-all duration-200"
              >
                <Mail size={16} />
                <span>Kontak Saya</span>
              </Link>
            </div>
            {/* Tautan Media Sosial / Quick Links */}
            <div className="flex items-center justify-center md:justify-start gap-3 text-zinc-400">
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 mr-2">
                Follow:
              </span>
              <a
                href="https://github.com/rizky-rinaldy/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-xs font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rizky-rinaldy-profile"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-xs font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://youtube.com/@RNLDevCode"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-xs font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

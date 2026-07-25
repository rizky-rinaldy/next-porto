"use client";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16">
      {/* Header Halaman */}
      <div className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3">
          <MessageSquare size={14} />
          <span>Hubungi Kami</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
          Mari Berdiskusi & Kolaborasi
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Punya ide proyek, pertanyaan, atau ingin bekerja sama? Jangan ragu
          untuk mengirimkan pesan kepada kami melalui formulir atau kontak di
          bawah ini.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Informasi Kontak (Kolom Samping) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
              Informasi Kontak
            </h3>
            <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block font-medium text-zinc-900 dark:text-white">
                    Email
                  </span>
                  <a
                    href="mailto:rizkyrinaldy.schwork@gmail.com"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    rizkyrinaldy.schwork@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block font-medium text-zinc-900 dark:text-white">
                    Telepon / WhatsApp
                  </span>
                  <a
                    href="https://wa.me/62882022216159"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +62 882-0222-1615-9
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block font-medium text-zinc-900 dark:text-white">
                    Lokasi
                  </span>
                  <p>Banjarbaru, Indonesia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Formulir Kontak (Kolom Utama) */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
              Kirim Pesan
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="nama@example.com"
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  placeholder="Judul / Keperluan pesan"
                  className="w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase mb-2">
                  Pesan
                </label>
                <textarea
                  rows={5}
                  placeholder="Tuliskan pesan atau detail proyek Anda di sini..."
                  className="w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-sm shadow-blue-500/20"
              >
                <span>Kirim Pesan</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Code, FolderGit2 } from "lucide-react";

// Data tiruan (dummy data) untuk proyek Anda dengan deskripsi yang disesuaikan
const projectItems = [
  {
    id: 1,
    title: "Sistem Manajemen Kendaraan Operasional",
    description:
      "Aplikasi berbasis web untuk memantau inventaris, jadwal perawatan, dan pencatatan penggunaan kendaraan operasional perusahaan secara real-time.",
    category: "Fullstack Web",
    image: "/img/SPMO-sefas.png",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
    liveUrl: "https://fleet-bjpsp.vercel.app",
    githubUrl: "https://github.com/rizky-rinaldy/lara-fleet-SP",
  },
  {
    id: 2,
    title: "Website Company Profile RNLDev",
    description:
      "Website profil perusahaan modern milik RNLDev dengan animasi halus, performa tinggi, dan desain responsif untuk menampilkan layanan digital terbaik.",
    category: "Frontend",
    image: "/img/CP-RNLDev.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://rizky-rinaldy.vercel.app/",
    githubUrl: "https://github.com/rizky-rinaldy/next-porto",
  },
  {
    id: 3,
    title: "Aplikasi Absensi Karyawan BMD",
    description:
      "Sistem absensi digital karyawan PT BMD yang dilengkapi fitur pencatatan waktu masuk/keluar, geolokasi, dan rekapitulasi laporan kehadiran otomatis.",
    category: "Web App",
    image: "/img/SAB-bmd.png",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://presensi-bmd.vercel.app",
    githubUrl: "https://github.com/rizky-rinaldy/next-presensi-BMD",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16">
      {/* Header Halaman */}
      <div className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3">
          <FolderGit2 size={14} />
          <span>Daftar Proyek</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
          Semua Proyek Saya
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Jelajahi kumpulan proyek pengembangan web, aplikasi, dan eksperimen
          kode yang pernah saya kerjakan.
        </p>
      </div>

      {/* Grid Kartu Proyek */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectItems.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300"
          >
            {/* Thumbnail / Gambar Proyek */}
            <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
              <Image
                src={item.image}
                alt={item.title}
                width={360}
                height={360}
                className="object-contain group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-800/50">
                {item.category}
              </span>
            </div>

            {/* Konten Kartu */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-1">
                {item.description}
              </p>

              {/* Tag Teknologi */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {item.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Tautan Aksi */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <Code size={14} />
                  <span>GitHub / Kode</span>
                </a>
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span>Demo Langsung</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

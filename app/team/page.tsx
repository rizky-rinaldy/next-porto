import Image from "next/image";
import Link from "next/link";
import { Users, Globe } from "lucide-react";

// Data tiruan (dummy data) untuk anggota tim
const teamMembers = [
  {
    id: 1,
    name: "Abdul Haiyi",
    role: "Lead Fullstack Developer",
    bio: "Bertanggung jawab atas arsitektur sistem keseluruhan, pengembangan backend, dan integrasi antarmuka.",
    image: "/img/abdul-haiyi_profile.png",
    github: "https://github.com/abdul-haiyi",
    linkedin: "https://www.linkedin.com/in/abdul-haiyi-profile",
    website: "https://example.com",
  },
  {
    id: 2,
    name: "Madhiyah",
    role: "UI/UX & Frontend Engineer",
    bio: "Berfokus pada desain pengalaman pengguna yang intuitif, estetika visual, dan implementasi Tailwind CSS.",
    image: "/img/madhiyah_profile.jpg",
    github: "https://github.com/madhiyah",
    linkedin: "https://www.linkedin.com/in/madhiyah-profile",
    website: "https://example.com",
  },
  {
    id: 3,
    name: "M. Rizky Rinaldy",
    role: "DevOps & Mobile Developer",
    bio: "Menangani deployment, manajemen server, performa aplikasi, serta pengembangan aplikasi lintas platform.",
    image: "/img/rizky-rinaldy_profile.png",
    github: "https://github.com/rizky-rinaldy",
    linkedin: "https://www.linkedin.com/in/rizky-rinaldy-profile",
    website: "https://example.com",
  },
];

export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16">
      {/* Header Halaman */}
      <div className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3">
          <Users size={14} />
          <span>Tim Kami</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
          Kenali Orang di Balik Layar
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Sekelompok pengembang, desainer, dan kreator yang berdedikasi untuk
          menghadirkan solusi digital berkualitas tinggi.
        </p>
      </div>

      {/* Grid Kartu Tim */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 p-6"
          >
            {/* Foto Profil & Informasi */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative h-16 w-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-200 dark:border-zinc-700 shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={65}
                  height={65}
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded-md inline-block mt-1">
                  {member.role}
                </span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-1">
              {member.bio}
            </p>

            {/* Tautan Sosial Media (Menggunakan SVG murni untuk menghindari error package) */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              {/* GitHub SVG */}
              <a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`GitHub ${member.name}`}
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn SVG */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`LinkedIn ${member.name}`}
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Website Icon */}
              <a
                href={member.website}
                target="_blank"
                rel="noreferrer"
                aria-label={`Website ${member.name}`}
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Mail,
  MapPin,
  Phone,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
} from "lucide-react";

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* 1. Header / Profil Utama */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-blue-600/20 shadow-inner flex-shrink-0">
          <Image
            src="/img/profile_image.png"
            alt="M. Rizky Rinaldy"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mb-1">
            M. Rizky Rinaldy
          </h1>
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-base mb-3">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={16} /> Banjarbaru
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={16} /> rizkyrinaldy.schwork@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={16} /> +62 882-0222-1615-9
            </span>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            <a
              href="/pdf/CV_AhmadJailani_Logistik.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-lg shadow-blue-600/25 transition-all"
            >
              <Download size={16} />
              <span>Download CV (PDF)</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-95 rounded-xl transition-all"
            >
              <span>Hubungi Saya</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Ringkasan Profesional */}
      <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="text-blue-600">#</span> Ringkasan Profesional
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Mahasiswa aktif Teknik Informatika di Universitas Islam Kalimantan
          dengan pengalaman kerja profesional di sektor operasional, manajemen
          gudang, dan industri manufaktur. Memiliki etos kerja yang tinggi,
          ketelitian, serta kemampuan adaptasi yang kuat. Saat ini juga aktif
          mengembangkan keahlian di bidang teknologi informasi dan pembuatan
          solusi digital modern menggunakan React, Next.js, dan Tailwind CSS.
        </p>
      </section>

      {/* 3. Pengalaman Kerja */}
      <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
          <Briefcase className="text-blue-600" size={22} /> Pengalaman Kerja
        </h2>

        <div className="space-y-6 border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 sm:pl-6 ml-2">
          <div className="relative">
            <span className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-3 h-3 bg-blue-600 rounded-full ring-4 ring-white dark:ring-zinc-900" />
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full inline-block mb-2">
              2024 - Sekarang
            </span>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              General Affair Support
            </h3>
            <p className="text-sm font-medium text-zinc-500 mb-2">
              PT. Sefas Pelindotama • Kontrak
            </p>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Pengelolaan Fasilitas &amp; Gedung:</strong>{" "}
                  Bertanggung jawab penuh atas pemeliharaan, kebersihan, dan
                  keamanan fasilitas kantor, inventaris gedung, serta koordinasi
                  perbaikan fasilitas yang rusak.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Pengadaan &amp; Inventaris:</strong> Melakukan
                  pengadaan barang operasional kantor, alat tulis kantor (ATK),
                  dan perlengkapan kerja secara berkala, serta melakukan stock
                  opname inventaris.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Hubungan Vendor &amp; Pihak Eksternal:</strong>{" "}
                  Mengelola hubungan kerja sama dengan vendor penyedia layanan
                  (seperti <em>cleaning service</em>, <em>security</em>,
                  perawatan AC, internet), termasuk kontrak dan pembayaran.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Perizinan &amp; Legalitas:</strong> Mengurus dan
                  memperbarui perizinan operasional perusahaan, dokumen
                  legalitas gedung, serta kepatuhan terhadap regulasi pemerintah
                  setempat.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Manajemen Aset &amp; Kendaraan:</strong> Mengawasi
                  operasional dan pemeliharaan kendaraan perusahaan, termasuk
                  pengaturan jadwal supir, bahan bakar, dan servis berkala.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Dukungan Acara &amp; Perjalanan Dinas:</strong>{" "}
                  Membantu koordinasi logistik untuk acara internal/eksternal
                  perusahaan (rapat besar, <em>gathering</em>) serta
                  memfasilitasi kebutuhan perjalanan dinas.
                </span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <span className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-3 h-3 bg-blue-600 rounded-full ring-4 ring-white dark:ring-zinc-900" />
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full inline-block mb-2">
              2022 – 2024
            </span>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Warehouse Picker
            </h3>
            <p className="text-sm font-medium text-zinc-500 mb-2">
              PT. Sumber Alfaria Trijaya Tbk (Alfamart) &bull; Kontrak
            </p>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-2">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Pengambilan Barang (Picking):</strong> Melakukan
                  proses <em>picking</em> barang dagangan dari area rak
                  penyimpanan gudang secara manual berdasarkan lembar{" "}
                  <em>picking order</em> atau instruksi pengiriman untuk
                  kebutuhan pasokan gerai.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Kontrol Kualitas &amp; Kuantitas:</strong> Memeriksa
                  kondisi fisik kemasan produk (tidak rusak/cacat) serta
                  memastikan kesesuaian jenis, ukuran, dan jumlah barang dengan
                  data pesanan sebelum dikirim ke area <em>checking/packing</em>
                  .
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Penyusunan &amp; Penataan Muatan:</strong> Menyusun
                  barang yang telah diambil ke dalam keranjang, troli, atau
                  pallet dengan teknik penataan yang aman untuk mencegah
                  kerusakan produk selama proses perpindahan di area gudang.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Pencapaian Target Produktivitas:</strong> Memenuhi
                  standar target kecepatan dan keakuratan waktu kerja harian
                  yang ditentukan oleh perusahaan dalam melayani suplai barang
                  ke toko-toko.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Koordinasi Tim &amp; Pelaporan:</strong> Berkoordinasi
                  dengan bagian <em>checker</em> dan supervisor gudang apabila
                  ditemukan selisih stok, barang kosong, atau kendala teknis di
                  area rak penyimpanan.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>K3 &amp; Kerapian Area Kerja:</strong> Menerapkan
                  prosedur Keselamatan dan Kesehatan Kerja (K3) serta menjaga
                  kebersihan dan kerapian lorong rak gudang selama beraktivitas
                  operasional.
                </span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <span className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-3 h-3 bg-blue-600 rounded-full ring-4 ring-white dark:ring-zinc-900" />
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full inline-block mb-2">
              2020 – 2022
            </span>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Production Mixing Operator
            </h3>
            <p className="text-sm font-medium text-zinc-500 mb-2">
              CV. Bintang Banua Abadi &bull; Kontrak
            </p>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-2">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Persiapan &amp; Penimbangan Bahan:</strong> Menyiapkan
                  dan menimbang bahan baku utama pembuatan tandon air (seperti
                  biji plastik HDPE/LDPE, pigmen warna, dan zat aditif tambahan)
                  sesuai dengan formula atau standar operasional prosedur (SOP)
                  produksi.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Pengoperasian Mesin Pencampur:</strong> Mengoperasikan
                  mesin <em>mixer</em> (pencampur bahan) untuk memastikan resin
                  plastik dan pewarna tercampur secara merata, homogen, dan
                  sesuai dengan standar kekentalan serta komposisi yang
                  ditentukan.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Kontrol Kualitas Campuran:</strong> Melakukan
                  pemeriksaan visual dan uji fisik awal terhadap hasil adonan
                  bahan baku untuk memastikan tidak ada kontaminasi kotoran atau
                  ketidaksesuaian warna sebelum dikirim ke mesin cetak
                  (rotational molding/blow molding).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Pencapaian Target Produksi:</strong> Memenuhi target
                  kuantitas pasokan adonan bahan baku harian guna memastikan
                  kelancaran operasional mesin cetak tangki air tanpa adanya
                  hambatan waktu tunggu (downtime).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>Perawatan &amp; Pembersihan Mesin:</strong> Menjaga
                  kebersihan area kerja serta melakukan pembersihan rutin pada
                  tabung dan komponen mesin <em>mixer</em> setelah selesai
                  proses produksi guna mencegah sisa bahan lama mengeras atau
                  mengkontaminasi adonan berikutnya.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">&rarr;</span>
                <span>
                  <strong>K3 (Keselamatan &amp; Kesehatan Kerja):</strong>{" "}
                  Menerapkan standar K3 industri pabrik secara ketat dengan
                  menggunakan Alat Pelindung Diri (APD) lengkap seperti masker
                  debu, kacamata pelindung, dan penutup telinga mengingat
                  paparan material kimia/plastik dan tingkat kebisingan mesin.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Pendidikan */}
      <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
          <GraduationCap className="text-blue-600" size={22} /> Pendidikan
        </h2>

        <div className="space-y-4">
          <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4 last:border-0 last:pb-0">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
              2024 - 2027
            </span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white mt-1">
              S1 - Teknik Informatika
            </h3>
            <p className="text-sm text-zinc-500">
              Universitas Islam Kalimantan - Muhammad Arsyad Al-Banjary
            </p>
          </div>
        </div>
      </section>

      {/* 5. Keahlian / Tech Stack */}
      <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
          <Award className="text-blue-600" size={22} /> Keahlian & Teknologi
        </h2>

        <div className="flex flex-wrap gap-2">
          {[
            "JavaScript (ES6+)",
            "TypeScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Git & GitHub",
            "REST API",
            "UI/UX Design",
            "Vercel",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-3.5 py-1.5 text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

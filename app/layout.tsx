import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M. Rizky Rinaldy - Portofolio",
  description: "Membuka Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        {/* Navbar dipasang di paling atas (full width) */}
        <NavBar />

        {/* Wrapper untuk Sidebar dan Konten Utama agar berdampingan */}
        <div className="flex flex-1">
          <main className="flex-1 p-6 md:p-10">{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}

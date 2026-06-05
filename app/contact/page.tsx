"use client";
import { useState } from "react";
// Import langsung ke file ikon untuk menghindari error "Export doesn't exist"
import { MapPin, MessageCircle, Music } from "lucide-react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#111111] text-white relative">
      {/* BACKGROUND IMAGE YANG MEMANJANG SAMPAI BAWAH HERO */}
      <div className="absolute inset-0 z-0">
        <img src="/background-cafe.jpeg" className="w-full h-[600px] object-cover opacity-20" alt="Background" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#111111]/80 to-[#111111]" />
      </div>

      {/* NAVBAR */}
      <header className="relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
            <Link href="/" className="relative ml-4 w-20 h-16 md:w-32 md:h-24 transition-transform hover:scale-105">
                            <Image 
                              src="/logo-bersandar1.png" 
                              alt="Logo Bersandar"
                              fill
                              className="object-contain"
                              priority
                            />
                          </Link>
          
          <nav className="hidden md:flex gap-10 font-medium">
            <a href="/" className="hover:text-[#D4A373] transition">Home</a>
            <a href="/menu" className="hover:text-[#D4A373] transition">Menu</a>
            <a href="/gallery" className="hover:text-[#D4A373] transition">Gallery</a>
            <a href="/contact" className="text-[#D4A373]">Contact</a>
          </nav>

          <a href="/reservasi" className="hidden md:block border border-[#D4A373] px-6 py-2 rounded-xl hover:bg-[#D4A373] transition">Reservasi</a>
          
          <button className="md:hidden z-50 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#111]/95 backdrop-blur-md border-b border-white/10 flex flex-col items-center py-10 gap-6 z-40">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/menu" onClick={() => setMenuOpen(false)}>Menu</a>
          <a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="/contact" className="text-[#D4A373]" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* CONTACT HERO (Dibuat relative agar berada di atas background) */}
      <section className="relative z-10 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Hubungi Kami</h1>
        <p className="text-gray-400 max-w-lg mx-auto">Kami selalu terbuka untuk teman-teman baru. Pilih saluran di bawah untuk berinteraksi lebih dekat.</p>
      </section>

      {/* CONTACT GRID */}
      <section className="relative z-10 pb-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* WhatsApp */}
          <a href="https://wa.me/6285720937430?text=Halo%20Admin%20Bersandar,%20saya%20ingin%20reservasi."
         target="_blank" className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#25D366] transition group flex items-center gap-6">
            <div className="p-4 bg-[#25D366]/20 rounded-full text-[#25D366]"><MessageCircle size={32} /></div>
            <div>
              <h3 className="text-xl font-semibold">WhatsApp</h3>
              <p className="text-gray-400">Respon cepat untuk reservasi.</p>
            </div>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/bersandarcoffeeandspace?igsh=MWFyZGZ1bTQ2anlsYw==" target="_blank" className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#E1306C] transition group flex items-center gap-6">
            <div className="p-4 bg-[#E1306C]/20 rounded-full text-[#E1306C]"></div>
            <div>
              <h3 className="text-xl font-semibold">Instagram</h3>
              <p className="text-gray-400">Update konten harian kami.</p>
            </div>
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/@bersandar_id?_r=1&_t=zs-95evgkwj0pi" target="_blank" className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-white transition group flex items-center gap-6">
            <div className="p-4 bg-white/20 rounded-full text-white"><Music size={32} /></div>
            <div>
              <h3 className="text-xl font-semibold">TikTok</h3>
              <p className="text-gray-400">Konten seru di Bersandar.</p>
            </div>
          </a>

          {/* Lokasi */}
          <a href="https://tr.ee/89otQgJKyY" target="_blank" className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-amber-500 transition group flex items-center gap-6">
            <div className="p-4 bg-amber-500/20 rounded-full text-amber-500"><MapPin size={32} /></div>
            <div>
              <h3 className="text-xl font-semibold">Lokasi</h3>
              <p className="text-gray-400">Klik untuk navigasi via Maps.</p>
            </div>
          </a>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-white/10 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Bersandar Coffee & Space.
      </footer>
    </main>
  );
}
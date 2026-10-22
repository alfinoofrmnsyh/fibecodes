"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Linkedin, Instagram } from "lucide-react"

const socialLinks = [
  { href: "https://wa.me/6289615799089", icon: Phone, label: "Whatsapp" },
  { href: "https://linkedin.com", icon: Linkedin, label: "Linkedin" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
]

const serviceAreas = [
  { label: "Jasa Pembuatan Website Karawang", href: "#about" },
  { label: "Jasa Pembuatan Web Cikarang", href: "#about" },
  { label: "Jasa Web & Aplikasi Subang", href: "#about" },
  { label: "Jasa Pembuatan Website Bekasi", href: "#about" },
]

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Paket Harga" },
  { href: "#works", label: "Portfolio" },
  { href: "#faq", label: "FAQ & Bantuan" },
]

export function Footer() {
  const [contactInput, setContactInput] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = contactInput.trim()
    if (!trimmed) {
      setErrorMsg("Silakan masukkan email atau nomor WhatsApp Anda.")
      return
    }
    setErrorMsg("")
    const message = `Halo Fibecodes, saya ingin konsultasi mengenai pembuatan website/aplikasi digital. Kontak saya: ${trimmed}`
    const waUrl = `https://wa.me/6289615799089?text=${encodeURIComponent(message)}`
    window.open(waUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <footer className="border-t border-border bg-slate-50 text-slate-900">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand & SEO Description */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Fibe Codes<span className="text-blue-600">.</span>
            </Link>
            <p className="mt-4 text-slate-600 text-sm max-w-md leading-relaxed">
              Solusi profesional untuk membantu UMKM, perusahaan, dan instansi bertumbuh digital di wilayah Karawang, Cikarang, Subang, Bekasi, dan sekitarnya.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-200 transition-colors hover:bg-opacity-10"
                  style={{ ["--hover-bg" as string]: "#203eec20" } as React.CSSProperties}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#203eec20")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" style={{ color: "#203eec" }} />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="mailto:info@fibecodes.com"
                className="text-sm font-medium transition-colors hover:underline"
                style={{ color: "#203eec" }}
              >
                info@fibecodes.com
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-slate-900">Navigasi</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Area SEO Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-slate-900">Wilayah Layanan</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area, idx) => (
                <li key={idx}>
                  <Link
                    href={area.href}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Newsletter / WhatsApp Consultation Bar */}
        <div className="mt-16 pt-12 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-sm font-semibold mb-2 text-slate-900">Dapatkan Konsultasi Gratis</h4>
            <p className="text-sm text-slate-600">Diskusikan kebutuhan pembuatan website atau sistem aplikasi bisnis Anda langsung bersama tim kami.</p>
          </div>
          <form onSubmit={handleConsultationSubmit} className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={contactInput}
                onChange={(e) => {
                  setContactInput(e.target.value)
                  if (errorMsg) setErrorMsg("")
                }}
                placeholder="Masukkan email atau No WhatsApp Anda"
                aria-label="Email atau No WhatsApp untuk konsultasi"
                className="px-4 py-2.5 text-sm bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#203eec] outline-none flex-1 shadow-sm text-slate-900"
              />
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-medium text-white rounded-lg transition-all relative overflow-hidden shrink-0 shadow-md hover:opacity-95"
                style={{
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                }}
              >
                Konsultasi
              </button>
            </div>
            {errorMsg && (
              <p className="text-xs text-red-500 font-medium pl-1">{errorMsg}</p>
            )}
          </form>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-slate-200">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Fibecodes. Jasa Pembuatan Website & Aplikasi Karawang, Cikarang, Subang, Bekasi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
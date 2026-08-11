"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#about", label: "Tentang Kami", number: "01" },
  { href: "#pricing", label: "Pilihan Paket", number: "02" },
  { href: "#whychooseus", label: "Keunggulan", number: "03" },
  { href: "#works", label: "Portofolio", number: "04" },
  { href: "#faq", label: "FAQ", number: "05" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80 // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Hidden SEO Metadata optimized for regional software house / web developer keywords */}
      <div className="sr-only">
        <h1>Jasa Pembuatan Website Karawang, Bekasi, Cikarang, dan Subang Profesional</h1>
        <p>
          Layanan pembuatan website company profile, toko online e-commerce, sistem informasi, dan aplikasi custom terbaik 
          untuk wilayah Karawang, Bekasi, Cikarang, Subang, dan sekitarnya. Solusi digital marketing & pengembangan software terpercaya.
        </p>
      </div>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-zinc-350/80 backdrop-blur-md shadow-lg shadow-black/20" 
            : "bg-transparent",
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Diperbesar ukurannya di mobile */}
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="flex items-center gap-2"
              aria-label="Jasa Pembuatan Website Karawang Bekasi Cikarang Subang"
            >
              <div className="relative w-[110px] h-[40px] md:w-[130px] md:h-[50px]">
                <Image
                  src="/images/logo.png"
                  alt="Logo Jasa Pembuatan Website Karawang Bekasi Cikarang Subang"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-zinc-950 hover:text-cyan-600 transition-colors font-medium"
                >
                  {item.label}
                  <span className="text-xs ml-1 opacity-40 font-normal">({item.number})</span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full text-white transition-all hover:shadow-xl relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                }}
              >
                <span className="relative z-10">Konsultasi</span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-[#203eec] to-[#00d4ff]" />
              </Link>
            </div>

            {/* Mobile Menu Button - Diubah warnanya jadi putih agar terlihat */}
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 -mr-2 text-white" aria-label="Open menu">
              <Menu className="w-7 h-7" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between">
              <Link href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); setIsMobileMenuOpen(false); }} className="flex items-center">
                <div className="relative w-44 h-12">
                  <Image
                    src="/images/logo.png"
                    alt="Logo Jasa Website"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2 text-zinc-950" aria-label="Close menu">
                <X className="w-7 h-7" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-2xl font-semibold text-zinc-950 hover:text-cyan-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium rounded-full text-white transition-all hover:shadow-xl relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                }}
              >
                <span className="relative z-10">Konsultasi</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-[#203eec] to-[#00d4ff]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
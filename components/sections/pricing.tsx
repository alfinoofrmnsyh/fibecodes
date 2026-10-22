"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Globe,
  Layers,
  Cpu,
} from "lucide-react"
import PixelCard from "@/components/ui/pixel-card"

type Category = "all" | "website" | "system"

interface PricingPlan {
  id: number
  category: "website" | "system"
  title: string
  targetUser: string
  shortDescription: string
  price: string
  priceNote: string
  isRecommended: boolean
  badge: string
  seats: string
  storage: string
  waMessage: string
  primaryFeatures: string[]
  additionalFeatures: string[]
  featuresList: string[]
  fullContent: {
    paragraphs: string[]
    testimonial: string
    company: string
  }
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    category: "website",
    title: "Paket Landing Page Statis",
    targetUser: "UMKM, Bisnis Pemula & Event",
    shortDescription: "Pilihan hemat dan cepat untuk promosi produk, jasa, atau kampanye pemasaran digital.",
    price: "Rp 700.000",
    priceNote: "Sekali bayar / Project",
    isRecommended: false,
    badge: "Solusi Cepat",
    seats: "1 halaman siap pakai",
    storage: "Include Domain .com & Hosting",
    waMessage:
      "Halo, saya tertarik dengan Paket Landing Page Statis (Rp 700.000). Mohon info lebih lanjut untuk pembuatannya.",
    primaryFeatures: [
      "Website 1 Halaman Responsif & Mobile-First",
      "Optimasi Tombol Konversi WhatsApp & Sosmed",
      "Struktur SEO Dasar & Kecepatan Akses Tinggi",
    ],
    additionalFeatures: [
      "Include Domain .com & Hosting 1 Tahun",
      "Tata Letak Beranda, Tentang, Keunggulan & Kontak",
      "Garansi Setup & Bimbingan Penggunaan",
    ],
    featuresList: [
      "Website 1 Halaman (Beranda, Tentang, Keunggulan, Kontak)",
      "Desain Responsif & Modern (Mobile-Friendly)",
      "Optimasi Tombol WhatsApp & Media Sosial",
      "Optimasi SEO Dasar",
      "Integrasi WhatsApp & Media Sosial",
      "Include Domain .com & Hosting 1 tahun",
    ],
    fullContent: {
      paragraphs: [
        "Paket Landing Page Statis adalah solusi paling hemat dan cepat bagi Anda yang ingin segera online secara profesional.",
        "Sudah termasuk domain .com resmi untuk membangun identitas profesional bisnis Anda sejak hari pertama.",
      ],
      testimonial: "Hanya 700rb sudah dapat website landing page berdomain .com, sangat membantu bisnis baru kami!",
      company: "UMKM Pemula",
    },
  },
  {
    id: 2,
    category: "website",
    title: "Paket Website Company Profile",
    targetUser: "Perusahaan, Korporasi & Instansi",
    shortDescription: "Website representatif lengkap dengan panel admin mandiri untuk mengelola konten dan portofolio.",
    price: "Rp 3.000.000 - Rp 4.000.000",
    priceNote: "Sekali bayar / Project",
    isRecommended: true,
    badge: "Direkomendasikan",
    seats: "Panel Admin / CMS Mandiri",
    storage: "Include Domain .com & Hosting 1 Tahun",
    waMessage:
      "Halo, saya tertarik dengan Paket Website Company Profile (Rp 3.000.000 - Rp 4.000.000). Mohon info lebih lanjut untuk pembuatannya.",
    primaryFeatures: [
      "Website Multi-Halaman Eksklusif & Kredibel",
      "Panel Admin / CMS Interaktif (Kelola Mandiri)",
      "Manajemen Berita, Layanan & Portofolio",
      "Integrasi Google Analytics & SEO On-Page",
    ],
    additionalFeatures: [
      "Desain Responsif dengan Tipografi Editorial",
      "Integrasi Kontak WhatsApp & Media Sosial",
      "Include Domain .com & Hosting 1 Tahun",
      "Pelatihan Admin & Dokumentasi Panduan",
    ],
    featuresList: [
      "Website Company Profile Profesional",
      "Include Panel Admin / CMS Mandiri",
      "Kelola Konten, Berita, & Portofolio Sendiri",
      "Desain Responsif & SEO On-Page Dasar",
      "Integrasi WhatsApp & Media Sosial",
      "Integrasi Google Analytics",
      "Include Domain .com & Hosting 1 Tahun",
    ],
    fullContent: {
      paragraphs: [
        "Paket Website Company Profile dengan CMS adalah pilihan terfavorit bagi perusahaan dan instansi yang ingin bisa mengelola konten website secara mandiri melalui panel admin.",
        "Sangat ideal untuk memperkuat kredibilitas bisnis Anda di hadapan klien korporat maupun publik secara luas.",
      ],
      testimonial: "Paling puas pakai paket company profile ini karena ada panel adminnya, jadi gampang ganti-ganti portofolio sendiri.",
      company: "Corporate Client",
    },
  },
  {
    id: 4,
    category: "website",
    title: "Paket E-Commerce",
    targetUser: "Brand Retail, Toko Online & Distributor",
    shortDescription: "Platform toko digital otomatis untuk mengelola katalog, transaksi checkout, dan pembayaran 24 jam.",
    price: "Rp 6.000.000 - Rp 8.000.000",
    priceNote: "Sekali bayar / Project",
    isRecommended: false,
    badge: "Toko Digital",
    seats: "Dashboard Toko & Produk",
    storage: "Include Domain .com & Cloud Hosting",
    waMessage:
      "Halo, saya tertarik dengan Paket E-Commerce (Rp 6.000.000 - Rp 8.000.000). Mohon info lebih lanjut untuk pembuatannya.",
    primaryFeatures: [
      "Katalog Produk, Varian & Keranjang Belanja",
      "Sistem Checkout Terpadu & Manajemen Pesanan",
      "Integrasi Otomatis Hitung Ongkir & Payment Gateway",
    ],
    additionalFeatures: [
      "Dashboard Pemantauan Penjualan & Laporan",
      "Include Domain .com & Setup Hosting",
      "Notifikasi Otomatis ke WhatsApp Pembeli",
    ],
    featuresList: [
      "Katalog Produk & Keranjang Belanja",
      "Sistem Checkout & Manajemen Pesanan",
      "Integrasi Ongkir & Payment Gateway",
      "Dashboard Admin Toko Online",
      "Include Domain .com & Hosting",
    ],
    fullContent: {
      paragraphs: [
        "Paket E-Commerce siap membantu Anda menjual produk secara online 24 jam dengan sistem keranjang belanja, perhitungan ongkir otomatis, dan manajemen transaksi yang praktis.",
      ],
      testimonial: "Penjualan online produk kami jadi terkelola dengan sangat rapi berkat fitur e-commerce ini.",
      company: "Online Store Owner",
    },
  },
  {
    id: 3,
    category: "system",
    title: "Paket Website & Sistem Kustom",
    targetUser: "Bisnis Berkembang, Startup & Logistik",
    shortDescription: "Aplikasi web fungsional untuk mengotomatisasi alur operasional internal (CRM, Booking, Inventaris).",
    price: "Rp 8.000.000 - Rp 10.000.000",
    priceNote: "Sekali bayar / Project",
    isRecommended: true,
    badge: "Sistem Bisnis",
    seats: "Full Custom Business Logic",
    storage: "Include Domain .com & Server Setup",
    waMessage:
      "Halo, saya tertarik dengan Paket Website & Sistem Kustom (Rp 8.000.000 - Rp 10.000.000). Mohon info lebih lanjut untuk pembuatannya.",
    primaryFeatures: [
      "Sistem Web Kustom (CRM, Booking, Logistik, POS)",
      "Database & Backend Management Terstruktur",
      "Desain UI/UX Khusus Sesuai Alur Kerja Tim",
      "Keamanan Data & Optimasi Performa Sistem",
    ],
    additionalFeatures: [
      "Pelatihan Penggunaan & Dokumentasi Sistem",
      "Garansi Bugfix & Pemeliharaan Berkala",
      "Dukungan Integrasi API Pihak Ketiga",
    ],
    featuresList: [
      "Sistem Web Kustom (Booking, Logistik, CRM, dll)",
      "Database & Backend Management Terintegrasi",
      "Desain UI/UX Eksklusif Sesuai Alur Bisnis",
      "Keamanan Tinggi & Optimasi Performa",
      "Pelatihan Penggunaan & Dokumentasi Sistem",
      "Garansi & Maintenance Berkala",
    ],
    fullContent: {
      paragraphs: [
        "Paket Website & Sistem Kustom dirancang khusus untuk mengotomatisasi proses bisnis Anda seperti sistem pemesanan (booking), manajemen logistik, CRM sales, hingga aplikasi self-order dengan fungsionalitas tingkat lanjut.",
      ],
      testimonial: "Sistem operasional bisnis kami jadi terintegrasi dengan baik dan menghemat banyak waktu kerja.",
      company: "Growing Business",
    },
  },
  {
    id: 5,
    category: "system",
    title: "Paket Enterprise (ERP Custom)",
    targetUser: "Perusahaan Skala Besar & Manufaktur",
    shortDescription: "Arsitektur software komprehensif untuk menyatukan seluruh departemen (ERP, HRIS, Supply Chain).",
    price: "Hubungi Kami",
    priceNote: "Solusi kustom sesuai spesifikasi kebutuhan",
    isRecommended: false,
    badge: "Skala Enterprise",
    seats: "Multi-Role & Akses Tak Terbatas",
    storage: "Dedicated Cloud Infrastructure",
    waMessage:
      "Halo, saya tertarik dengan Paket Enterprise (ERP Custom). Mohon info lebih lanjut dan konsultasi sistemnya.",
    primaryFeatures: [
      "Pengembangan Sistem ERP & HRIS Terpadu",
      "Arsitektur Skalabel, Multi-Role & Modul Modular",
      "Dedicated Project Manager & Tim Engineer Khusus",
      "SLA Pemeliharaan & Dukungan Prioritas 24/7",
    ],
    additionalFeatures: [
      "Audit Keamanan, Backup Berkala & Disaster Recovery",
      "Pelatihan Tim Menyeluruh (Onsite / Daring)",
      "Dokumentasi Teknis & Source Code Ownership",
    ],
    featuresList: [
      "Pengembangan Sistem ERP Kustom",
      "Arsitektur Skalabel & Integrasi API",
      "Manajer Proyek Khusus & Tim Dedicated",
      "Dukungan & Pemeliharaan Prioritas 24/7",
      "SLA (Service Level Agreement)",
    ],
    fullContent: {
      paragraphs: [
        "Solusi terbaik bagi perusahaan skala besar yang memerlukan sistem ERP, HRIS, atau aplikasi manajemen internal kustom sesuai alur kerja perusahaan.",
      ],
      testimonial: "Sistem ERP kustom berhasil mengintegrasikan seluruh lini operasional perusahaan kami.",
      company: "Enterprise Manufacturer",
    },
  },
]

export default function PricingSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("website")
  const [expandedPlanId, setExpandedPlanId] = useState<number | null>(null)
  const [modalPlanId, setModalPlanId] = useState<number | null>(null)
  const [hoveredPlanId, setHoveredPlanId] = useState<number | null>(null)

  const lastFocusedElementRef = useRef<HTMLElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const modalContainerRef = useRef<HTMLDivElement>(null)

  const filteredPlans =
    activeCategory === "all"
      ? pricingPlans
      : pricingPlans.filter((p) => p.category === activeCategory)

  const toggleExpand = (id: number) => {
    setExpandedPlanId((prev) => (prev === id ? null : id))
  }

  const openModal = (id: number) => {
    lastFocusedElementRef.current = document.activeElement as HTMLElement | null
    setModalPlanId(id)
  }

  const closeModal = useCallback(() => {
    setModalPlanId(null)
    if (lastFocusedElementRef.current) {
      lastFocusedElementRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (modalPlanId === null) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus()
    }, 50)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        closeModal()
      } else if (e.key === "Tab" && modalContainerRef.current) {
        const focusableElements = modalContainerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusableElements.length === 0) return

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleKeyDown)
      clearTimeout(timer)
    }
  }, [modalPlanId, closeModal])

  const selectedModalPlan = pricingPlans.find((p) => p.id === modalPlanId)

  return (
    <section
      id="pricing"
      className="py-24 md:py-32 bg-[#F5F4F0] text-[#20252B] relative overflow-hidden transition-colors"
      aria-labelledby="pricing-heading"
    >
      {/* Subtle Ethereal Prismatic Refraction Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[140px] opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(217, 208, 247, 0.45) 0%, rgba(215, 240, 244, 0.35) 45%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[350px] rounded-full blur-[120px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(215, 240, 244, 0.5) 0%, rgba(217, 208, 247, 0.2) 50%, transparent 80%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] text-[#707782] bg-white/70 border border-[#E5E4DF] backdrop-blur-sm mb-4">
            <Sparkles className="w-3 h-3 text-[#707782]" />
            <span>Pilihan Paket & Investasi</span>
          </div>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#20252B] text-balance"
          >
            Pilih Paket Solusi Terbaik Anda
          </h2>
          <p className="mt-4 text-[#707782] text-sm sm:text-base leading-relaxed">
            Investasi transparan untuk akselerasi pertumbuhan digital bisnis Anda. Pilih paket siap pakai atau konsultasikan kebutuhan sistem kustom.
          </p>

          {/* Category Segmented Switcher */}
          <div className="mt-8 inline-flex p-1 rounded-full bg-[#EAE8E2] border border-[#E5E4DF] shadow-inner">
            <button
              type="button"
              onClick={() => setActiveCategory("website")}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === "website"
                  ? "bg-white text-[#20252B] shadow-sm font-semibold"
                  : "text-[#707782] hover:text-[#20252B]"
              }`}
            >
              Website & Toko Online
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("system")}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === "system"
                  ? "bg-white text-[#20252B] shadow-sm font-semibold"
                  : "text-[#707782] hover:text-[#20252B]"
              }`}
            >
              Sistem Kustom & Enterprise
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-white text-[#20252B] shadow-sm font-semibold"
                  : "text-[#707782] hover:text-[#20252B]"
              }`}
            >
              Semua (5)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          className={`grid gap-6 md:gap-8 items-stretch ${
            activeCategory === "system"
              ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
              : activeCategory === "website"
              ? "grid-cols-1 md:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {filteredPlans.map((plan) => {
            const isExpanded = expandedPlanId === plan.id
            const isFeatured = plan.isRecommended
            const centerIndex = Math.floor(filteredPlans.length / 2)
            const isCenterCard = plan.id === filteredPlans[centerIndex]?.id
            const isPixelActive = hoveredPlanId !== null ? hoveredPlanId === plan.id : isCenterCard

            return (
              <PixelCard
                key={plan.id}
                colors={['#A99BEA', '#6D55E0', '#3B82C4', '#B8DDF5']}
                glowColor={isFeatured ? '#A99BEA' : '#3B82C4'}
                shape="square"
                origin="center"
                gap={5}
                pixelSize={2.5}
                speed={35}
                revealDuration={600}
                spotlight={0.4}
                glow={0.35}
                opacity={0.5}
                fade={0.65}
                trigger="hover"
                forceActive={isPixelActive}
                onMouseEnter={() => setHoveredPlanId(plan.id)}
                onMouseLeave={() => setHoveredPlanId(null)}
                radius={28}
                clickPulse
                intro
                theme="light"
                className={`relative flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "border border-[#D9D0F7] shadow-[0_16px_40px_-12px_rgba(169,155,234,0.18)] ring-1 ring-[#D7F0F4]"
                    : "border border-[#E5E4DF] shadow-[0_4px_24px_-4px_rgba(32,37,43,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(32,37,43,0.07)] hover:border-[#D9D0F7]/70"
                }`}
              >
                {/* Highlight Glow Accent for Recommended Tier */}
                {isFeatured && (
                  <div
                    aria-hidden="true"
                    className="absolute -top-px left-8 right-8 h-1 rounded-full bg-gradient-to-r from-[#D9D0F7] via-[#D7F0F4] to-[#D9D0F7] z-10"
                  />
                )}

                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-semibold text-[#707782] uppercase tracking-[0.15em]">
                      {plan.targetUser}
                    </span>
                    {isFeatured ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-[#20252B] bg-gradient-to-r from-[#D9D0F7]/60 to-[#D7F0F4]/70 border border-[#D9D0F7]">
                        <Sparkles className="w-3 h-3 text-[#20252B]" />
                        <span>{plan.badge}</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium text-[#707782] bg-[#F5F4F0] border border-[#E5E4DF]">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#20252B] tracking-tight leading-snug">
                    {plan.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#707782] leading-relaxed min-h-[44px]">
                    {plan.shortDescription}
                  </p>

                  {/* Pricing Display */}
                  <div className="mt-6 pt-6 border-t border-[#E5E4DF]/70">
                    <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#20252B]">
                      {plan.price}
                    </div>
                    <div className="text-xs text-[#707782] mt-1 font-normal">
                      {plan.priceNote}
                    </div>
                  </div>

                  {/* Scope Specs */}
                  <div className="mt-5 space-y-2 py-3 px-3.5 rounded-xl bg-[#FAFAF8] border border-[#E5E4DF]/60 text-xs text-[#707782]">
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#20252B] shrink-0" />
                      <span className="truncate text-[#20252B] font-medium">{plan.seats}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-[#20252B] shrink-0" />
                      <span className="truncate">{plan.storage}</span>
                    </div>
                  </div>

                  {/* Primary CTA Button */}
                  <div className="mt-6">
                    <a
                      href={`https://wa.me/6289615799089?text=${encodeURIComponent(plan.waMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-5 rounded-full font-medium text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2 ${
                        isFeatured
                          ? "bg-[#20252B] text-white hover:bg-black shadow-md shadow-[#20252B]/10 hover:shadow-lg hover:-translate-y-0.5"
                          : "bg-white text-[#20252B] border border-[#E5E4DF] hover:bg-[#F5F4F0] hover:border-[#20252B]/30"
                      }`}
                    >
                      {plan.price === "Hubungi Kami" ? (
                        <>
                          <Mail className="w-4 h-4" />
                          <span>Konsultasikan Spesifikasi</span>
                        </>
                      ) : (
                        <>
                          <span>Pilih Paket Ini</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </a>
                  </div>

                  {/* Core Features List */}
                  <div className="mt-8 pt-6 border-t border-[#E5E4DF]/70">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#707782] mb-3">
                      Fitur Unggulan
                    </div>
                    <ul className="space-y-2.5">
                      {plan.primaryFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#20252B]">
                          <div className="w-4 h-4 rounded-full bg-[#EAE8E2] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-[#20252B]" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expandable Additional Features */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pt-3 space-y-2.5"
                        >
                          {plan.additionalFeatures.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#707782]">
                              <div className="w-4 h-4 rounded-full bg-[#F5F4F0] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-2.5 h-2.5 text-[#707782]" />
                              </div>
                              <span className="leading-snug">{feat}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Card Bottom Controls */}
                <div className="px-6 sm:px-8 py-4 bg-[#FAFAF8] border-t border-[#E5E4DF]/60 rounded-b-[28px] flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => toggleExpand(plan.id)}
                    className="inline-flex items-center gap-1.5 text-[#707782] hover:text-[#20252B] font-medium transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? "Tutup ringkasan" : `Lihat rincian (+${plan.additionalFeatures.length})`}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => openModal(plan.id)}
                    className="text-[#20252B] hover:underline font-medium text-xs inline-flex items-center gap-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#20252B] rounded px-1"
                  >
                    Detail Lengkap
                  </button>
                </div>
              </PixelCard>
            )
          })}
        </div>

        {/* Bottom Trust Guarantee Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E4DF] text-xs text-[#707782] shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#20252B]" />
            <span>Semua paket mencakup garansi pemeliharaan & konsultasi alur kerja teknis</span>
          </div>
        </div>
      </div>

      {/* Modal Detail Animasi (Full Specification View) */}
      <AnimatePresence>
        {selectedModalPlan && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={closeModal}
              aria-hidden="true"
            />

            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="pricing-modal-title"
            >
              <motion.div
                ref={modalContainerRef}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-[32px] p-6 sm:p-10 max-w-2xl w-full border border-[#E5E4DF] relative shadow-2xl text-[#20252B] my-8 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeModal}
                  aria-label="Tutup jendela detail"
                  className="absolute top-6 right-6 w-9 h-9 rounded-full border border-[#E5E4DF] bg-[#FAFAF8] flex items-center justify-center hover:bg-[#EAE8E2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#20252B]"
                >
                  <X className="w-4 h-4 text-[#20252B]" />
                </button>

                {/* Modal Header */}
                <div className="pr-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-[#20252B] bg-[#F5F4F0] border border-[#E5E4DF] mb-3">
                    <span>{selectedModalPlan.targetUser}</span>
                  </div>
                  <h3 id="pricing-modal-title" className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#20252B]">
                    {selectedModalPlan.title}
                  </h3>
                  <div className="mt-2 text-xl sm:text-2xl font-bold text-[#20252B]">
                    {selectedModalPlan.price}
                    <span className="text-xs text-[#707782] font-normal ml-2">
                      ({selectedModalPlan.priceNote})
                    </span>
                  </div>
                </div>

                {/* Paragraphs */}
                <div className="mt-6 space-y-4 text-sm text-[#707782] leading-relaxed border-t border-[#E5E4DF] pt-6">
                  {selectedModalPlan.fullContent.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Complete Feature Checklist */}
                <div className="mt-6 pt-6 border-t border-[#E5E4DF]">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#707782] mb-3">
                    Daftar Cakupan & Fitur Lengkap:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedModalPlan.featuresList.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#20252B]">
                        <div className="w-4 h-4 rounded-full bg-[#EAE8E2] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#20252B]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial Quote */}
                <div className="mt-6 pt-6 border-t border-[#E5E4DF]">
                  <blockquote className="text-sm italic text-[#20252B] font-medium leading-relaxed bg-[#FAFAF8] p-4 rounded-2xl border border-[#E5E4DF]/60">
                    &ldquo;{selectedModalPlan.fullContent.testimonial}&rdquo;
                    <div className="mt-2 text-xs not-italic text-[#707782] font-normal">
                      &mdash; {selectedModalPlan.fullContent.company}
                    </div>
                  </blockquote>
                </div>

                {/* Modal CTA Footer */}
                <div className="mt-8 pt-6 border-t border-[#E5E4DF] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#707782]">
                    Diskusi langsung dengan developer kami via WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/6289615799089?text=${encodeURIComponent(selectedModalPlan.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-xs sm:text-sm text-white bg-[#20252B] hover:bg-black transition-all shadow-md shadow-[#20252B]/10"
                  >
                    <span>Konsultasikan Paket Ini</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
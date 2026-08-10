"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check, Users, Cloud, Sparkles, Mail, Star } from "lucide-react"

const pricingFeatures = [
  {
    id: 1,
    title: "Paket Landing Page Statis",
    shortDescription: "Pilihan termurah untuk promosi produk, jasa, atau event khusus Anda.",
    price: "Rp 700.000",
    priceNote: "Sekali bayar / Project",
    isPopular: false,
    isHighlight: true,
    badge: "Termurah UMKM Friendly",
    seats: "1 halaman siap pakai",
    storage: "Include Domain .com & Hosting",
    waMessage: "Halo, saya tertarik dengan Paket Landing Page Statis (Rp 700.000). Mohon info lebih lanjut untuk pembuatannya.",
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
    title: "Paket Website Company Profile",
    shortDescription: "Website profesional dengan panel admin & CMS lengkap untuk profil perusahaan.",
    price: "Rp 3.000.000 - Rp 4.000.000",
    priceNote: "Sekali bayar / Project",
    isPopular: true,
    isHighlight: false,
    badge: "Best Seller",
    seats: "Panel Admin / CMS Included",
    storage: "Include Domain .com",
    waMessage: "Halo, saya tertarik dengan Paket Website Company Profile (Rp 3.000.000 - Rp 4.000.000). Mohon info lebih lanjut untuk pembuatannya.",
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
        "Paket Website Company Profile dengan CMS adalah pilihan terfavorit (Best Seller) bagi perusahaan dan instansi yang ingin bisa mengelola konten website secara mandiri melalui panel admin.",
        "Sangat ideal untuk memperkuat kredibilitas bisnis Anda di hadapan klien korporat maupun publik secara luas.",
      ],
      testimonial: "Paling puas pakai paket company profile ini karena ada panel adminnya, jadi gampang ganti-ganti portofolio sendiri.",
      company: "Corporate Client",
    },
  },
  {
    id: 3,
    title: "Paket Website & Sistem Kustom",
    shortDescription: "Solusi web aplikasi dan sistem operasional bisnis (CRM, Booking, Logistik, dll).",
    price: "Rp 8.000.000 - Rp 10.000.000",
    priceNote: "Sekali bayar / Project",
    isPopular: true, 
    isHighlight: false,
    badge: "Enterprise & Custom System",
    seats: "Full Custom Features",
    storage: "Include Domain .com",
    waMessage: "Halo, saya tertarik dengan Paket Website & Sistem Kustom (Rp 8.000.000 - Rp 10.000.000). Mohon info lebih lanjut untuk pembuatannya.",
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
    id: 4,
    title: "Paket E-Commerce",
    shortDescription: "Toko online lengkap untuk jualan produk secara otomatis dan profesional.",
    price: "Rp 6.000.000 - Rp 8.000.000",
    priceNote: "Sekali bayar / Project",
    isPopular: false,
    isHighlight: false,
    badge: "Toko Online",
    seats: "Dashboard Toko & Produk",
    storage: "Include Domain .com",
    waMessage: "Halo, saya tertarik dengan Paket E-Commerce (Rp 6.000.000 - Rp 8.000.000). Mohon info lebih lanjut untuk pembuatannya.",
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
    id: 5,
    title: "Paket Enterprise (ERP Custom)",
    shortDescription: "Solusi skala besar sepenuhnya kustom untuk kebutuhan khusus operasional enterprise.",
    price: "Hubungi Kami",
    priceNote: "Solusi kustom sesuai kebutuhan sistem",
    isPopular: false,
    isHighlight: false,
    badge: "Perusahaan Besar",
    seats: "Unlimited Access",
    storage: "Custom Cloud Storage",
    waMessage: "Halo, saya tertarik dengan Paket Enterprise (ERP Custom). Mohon info lebih lanjut dan konsultasi sistemnya.",
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
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)

  return (
    <section id="pricing" className="min-h-screen bg-white text-slate-900 py-24 relative overflow-hidden">
      
      {/* Efek Latar Belakang Cahaya Halus */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-sky-100 blur-[150px] pointer-events-none rounded-full" />

      {/* Header Section */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 mb-16 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
          Pilih Paket Solusi Terbaik Anda
        </h2>
        <p className="mt-3 text-slate-600 text-base md:text-lg max-w-xl mx-auto">
          Pilih dari opsi terbaik yang memastikan kecocokan sempurna untuk pertumbuhan bisnis Anda.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {pricingFeatures.map((pkg) => (
            <div key={pkg.id} className="h-full flex">
              {selectedFeature !== pkg.id && (
                <motion.div
                  layoutId={`feature-${pkg.id}`}
                  className={`relative flex flex-col justify-between w-full p-6 cursor-pointer group transition-all duration-300 rounded-[28px] border shadow-xl backdrop-blur-xl ${
                    pkg.isPopular
                      ? "bg-gradient-to-b from-blue-50/90 via-indigo-50/50 to-white border-blue-300 shadow-blue-500/10 lg:-translate-y-2"
                      : pkg.isHighlight
                      ? "bg-gradient-to-b from-emerald-50/90 via-teal-50/50 to-white border-emerald-300 shadow-emerald-500/10 lg:-translate-y-2"
                      : "bg-white hover:bg-slate-50/80 border-slate-200 shadow-slate-200/50"
                  }`}
                  onClick={() => setSelectedFeature(pkg.id)}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    duration: 1.2,
                  }}
                >
                  <div>
                    {/* Top Avatar & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border shadow-inner ${
                        pkg.isPopular 
                          ? "bg-gradient-to-tr from-blue-600 to-indigo-600 border-blue-400/30 text-white" 
                          : pkg.isHighlight 
                          ? "bg-gradient-to-tr from-emerald-600 to-teal-600 border-emerald-400/30 text-white" 
                          : "bg-slate-100 border-slate-200 text-slate-700"
                      }`}>
                        {pkg.isPopular ? (
                          <Sparkles className="w-4 h-4" />
                        ) : pkg.isHighlight ? (
                          <Star className="w-4 h-4 fill-white" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full bg-slate-400" />
                        )}
                      </div>

                      {pkg.isPopular && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-700 border border-blue-200">
                          Best Seller
                        </span>
                      )}

                      {pkg.isHighlight && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
                          Termurah
                        </span>
                      )}
                    </div>

                    <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${pkg.isHighlight ? "text-emerald-600" : pkg.isPopular ? "text-blue-600" : "text-slate-500"}`}>
                      {pkg.badge}
                    </div>

                    <motion.h3
                      layoutId={`title-${pkg.id}`}
                      className="text-lg font-semibold text-slate-900 tracking-tight leading-snug"
                    >
                      {pkg.title}
                    </motion.h3>

                    <p className="text-xs text-slate-600 mt-2 min-h-[40px] leading-relaxed">
                      {pkg.shortDescription}
                    </p>

                    {/* Harga */}
                    <div className="mt-5 pt-5 border-t border-slate-100">
                      <div className="flex flex-col">
                        <span className={`text-xl font-bold tracking-tight ${pkg.isHighlight ? "text-emerald-600" : pkg.isPopular ? "text-blue-600" : "text-slate-900"}`}>
                          {pkg.price}
                        </span>
                        <span className="text-[11px] text-slate-500 mt-0.5">{pkg.priceNote}</span>
                      </div>
                    </div>

                    {/* Tombol Aksi Utama langsung ke WhatsApp */}
                    <div className="mt-5" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={`https://wa.me/6289615799089?text=${encodeURIComponent(pkg.waMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-2.5 rounded-full font-medium text-xs text-center transition-all flex items-center justify-center gap-2 ${
                          pkg.isPopular
                            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20"
                            : pkg.isHighlight
                            ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-600/20"
                            : "bg-slate-900 text-white hover:bg-slate-800"
                        }`}
                      >
                        {pkg.price === "Hubungi Kami" ? (
                          <>
                            <Mail className="w-3.5 h-3.5" />
                            <span>Contact us</span>
                          </>
                        ) : (
                          <span>Choose this plan</span>
                        )}
                      </a>
                    </div>

                    {/* Informasi Tambahan */}
                    <div className="mt-5 space-y-2 pt-5 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-[11px] text-slate-700">
                        <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{pkg.seats}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-700">
                        <Cloud className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{pkg.storage}</span>
                      </div>
                    </div>

                    {/* Garis Pemisah Tambahan */}
                    <div className="my-5 border-t border-slate-100 relative text-center">
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2.5 text-[9px] tracking-widest uppercase text-slate-400">
                        Details
                      </span>
                    </div>

                    {/* Daftar Fitur / Checkmark List */}
                    <ul className="space-y-2.5">
                      {pkg.featuresList.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[11px] text-slate-700">
                          <Check className={`w-3 h-3 shrink-0 mt-0.5 ${pkg.isHighlight ? "text-emerald-600" : pkg.isPopular ? "text-blue-600" : "text-slate-500"}`} />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Card */}
                  <div className="mt-6 pt-3 text-center border-t border-slate-100">
                    <span className="text-[10px] text-slate-400 group-hover:text-slate-600 transition-colors">
                      Klik untuk melihat detail lengkap
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail Animasi (Expanded View) */}
      <AnimatePresence>
        {selectedFeature && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
              onClick={() => setSelectedFeature(null)}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-16">
              <motion.div
                layoutId={`feature-${selectedFeature}`}
                className="bg-white rounded-[30px] p-8 md:p-12 max-w-3xl w-full max-h-[90vh] border border-slate-200 relative overflow-y-auto shadow-2xl text-slate-900"
                onClick={(e) => e.stopPropagation()}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  duration: 1.2,
                }}
              >
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  onClick={() => setSelectedFeature(null)}
                  aria-label="Close modal"
                  className="absolute top-6 right-6 w-8 h-8 rounded-full border border-slate-200 bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  <X className="w-4 h-4 text-slate-700" />
                </motion.button>

                {pricingFeatures.find((f) => f.id === selectedFeature) && (
                  (() => {
                    const activePkg = pricingFeatures.find((f) => f.id === selectedFeature)!
                    return (
                      <>
                        <div className="mb-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
                          {activePkg.badge}
                        </div>

                        <div className="mb-6">
                          <motion.h2
                            layoutId={`title-${selectedFeature}`}
                            className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
                            transition={{
                              type: "spring",
                              stiffness: 120,
                              damping: 20,
                              duration: 1.2,
                            }}
                          >
                            {activePkg.title}
                          </motion.h2>
                          <div className="text-2xl font-bold text-blue-600 mt-2">
                            {activePkg.price}
                          </div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ delay: 0.4, duration: 0.4 }}
                          className="space-y-6 text-left max-w-2xl"
                        >
                          {activePkg.fullContent.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-slate-600 text-lg leading-relaxed">
                              {paragraph}
                            </p>
                          ))}

                          {/* Daftar Fitur / Checkmark List */}
                          <ul className="space-y-2.5">
                            {activePkg.featuresList.map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-md text-slate-700">
                                <Check className="w-3 h-3 shrink-0 mt-0.5 text-emerald-600" />
                                <span className="leading-tight">{feat}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Testimonial */}
                          <div className="border-t border-slate-100 pt-6 mt-8">
                            <blockquote className="text-lg text-slate-800 font-medium leading-relaxed italic">
                              &ldquo;{activePkg.fullContent.testimonial}&rdquo;
                            </blockquote>
                            <div className="mt-3 text-slate-500 font-medium text-sm">
                              &mdash; {activePkg.fullContent.company}
                            </div>
                          </div>

                          {/* CTA Button in Modal to WhatsApp with custom pre-filled message */}
                          <div className="pt-4 flex justify-end">
                            <a
                              href={`https://wa.me/6289615799089?text=${encodeURIComponent(activePkg.waMessage)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setSelectedFeature(null)}
                              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white rounded-full transition-all bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20"
                            >
                              Pilih / Konsultasikan Paket Ini
                            </a>
                          </div>
                        </motion.div>
                      </>
                    )
                  })()
                )}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
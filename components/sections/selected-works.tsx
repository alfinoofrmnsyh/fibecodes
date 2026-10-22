"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Sparkles, Code2, ExternalLink } from "lucide-react"

interface ProjectWork {
  id: number
  number: string
  title: string
  category: string
  clientType: string
  description: string
  image: string
  tags: string[]
  waMessage: string
}

const works: ProjectWork[] = [
  {
    id: 1,
    number: "01",
    title: "Company Profile dan Dashboard CMS Dinas Ketahanan Pangan",
    category: "Instansi Publik & CMS",
    clientType: "Pemerintahan & Instansi",
    description:
      "Pengembangan website profil instansi resmi lengkap dengan sistem manajemen konten (CMS) terpadu untuk memudahkan pengelolaan informasi publik, berita, dan laporan secara real-time.",
    image: "/images/1.webp",
    tags: ["Vue.js", "MySQL", "TypeScript", "Node.js", "Vite", "Tailwind CSS"],
    waMessage:
      "Halo Fibecodes, saya tertarik dengan portofolio Company Profile dan CMS Dinas Ketahanan Pangan. Ingin konsultasi pembuatan website profil instansi/perusahaan sejenis.",
  },
  {
    id: 2,
    number: "02",
    title: "ERP Supply Chain Management System PT. Gaido Cito Ekakurindo",
    category: "Enterprise System & ERP",
    clientType: "Logistik & Manufaktur",
    description:
      "Sistem perencanaan sumber daya perusahaan (ERP) berskala besar untuk mengoptimalkan alur rantai pasok, manajemen gudang (WMS), pelacakan inventaris, dan audit logistik secara terpusat.",
    image: "/images/2.webp",
    tags: ["ERP Core", "Vue.js", "MariaDB", "Python", "DevExtreme", "Flask"],
    waMessage:
      "Halo Fibecodes, saya melihat portofolio ERP Supply Chain Management PT Gaido Cito. Ingin konsultasi arsitektur sistem ERP untuk bisnis kami.",
  },
  {
    id: 3,
    number: "03",
    title: "Aplikasi Android Gaido Mobile Courier & Tracking System",
    category: "Mobile Apps & Field Ops",
    clientType: "Ekspedisi & Kurir Lapangan",
    description:
      "Aplikasi kurir berbasis mobile untuk pelacakan pengiriman paket secara langsung (real-time GPS tracking), tanda tangan digital penerima, dan manajemen penugasan armada yang efisien.",
    image: "/images/4.webp",
    tags: ["Ionic", "Angular", "Flask API", "Vue Dashboard", "Android"],
    waMessage:
      "Halo Fibecodes, saya tertarik dengan portofolio Aplikasi Android Gaido Mobile Courier. Ingin diskusi mengenai pembuatan aplikasi mobile tracking/operasional lapangan.",
  },
  {
    id: 4,
    number: "04",
    title: "Sistem HRIS (Human Resource Information System) PT. Hutama Karya",
    category: "Internal Tool & HRIS",
    clientType: "Korporasi & Human Capital",
    description:
      "Platform digital manajemen sumber daya manusia untuk otomatisasi absensi geolokasi, perhitungan slip gaji otomatis, manajemen cuti, serta evaluasi Key Performance Indicator (KPI) karyawan.",
    image: "/images/3.webp",
    tags: ["HRIS Architecture", "Vue.js", "MySQL", "Tailwind CSS", "REST API"],
    waMessage:
      "Halo Fibecodes, saya ingin konsultasi mengenai pembuatan sistem HRIS dan penggajian internal perusahaan seperti pada portofolio PT Hutama Karya.",
  },
  {
    id: 5,
    number: "05",
    title: "Company Profile dan Admin Panel CMS PT. Key Lock Indonesia",
    category: "Corporate Website & Catalog",
    clientType: "Manufaktur & Komersial",
    description:
      "Pembuatan website komersial dengan desain modern, katalog produk interaktif, serta panel admin CMS berbasis Filament untuk kemudahan pembaruan spesifikasi teknis produk perusahaan.",
    image: "/images/5.webp",
    tags: ["Next.js", "Laravel", "Filament CMS", "MySQL", "Tailwind"],
    waMessage:
      "Halo Fibecodes, saya tertarik dengan website company profile dan katalog produk PT Key Lock Indonesia. Ingin tahu estimasi biaya dan waktu pengerjaan.",
  },
  {
    id: 6,
    number: "06",
    title: "Aplikasi Logistics Management System",
    category: "PWA & Logistics Automation",
    clientType: "Pergudangan & Freight",
    description:
      "Aplikasi logistik modern berbasis Progressive Web App (PWA) untuk monitoring alur pengiriman barang, manajemen resi, dan dokumentasi muatan kontainer secara transparan dan akurat.",
    image: "/images/6.webp",
    tags: ["Next.js", "Laravel API", "MySQL", "Vue.js", "PWA"],
    waMessage:
      "Halo Fibecodes, saya tertarik dengan Aplikasi Logistics Management System. Bisa jelaskan alur konsultasi dan analisis kebutuhannya?",
  },
]

export function SelectedWorks() {
  return (
    <section
      id="works"
      className="py-24 md:py-32 bg-[#F5F4F0] text-[#20252B] relative transition-colors"
      aria-labelledby="portfolio-section-title"
    >
      {/* Background Ambient Prismatic Soft Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="pointer-events-none absolute top-1/4 right-0 w-[600px] h-[500px] rounded-full blur-[140px] opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(217, 208, 247, 0.45) 0%, rgba(215, 240, 244, 0.35) 50%, transparent 75%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-10 left-0 w-[500px] h-[450px] rounded-full blur-[140px] opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(215, 240, 244, 0.5) 0%, rgba(217, 208, 247, 0.25) 50%, transparent 75%)",
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20 pb-6 border-b border-[#E5E4DF]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] text-[#707782] bg-white/80 border border-[#E5E4DF] backdrop-blur-sm mb-4">
              <Sparkles className="w-3 h-3 text-[#707782]" />
              <span>04 // Portofolio Terpilih</span>
            </div>
            <h2
              id="portfolio-section-title"
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#20252B]"
            >
              Project Terbaru
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#707782] leading-relaxed">
              Studi kasus pengembangan website representatif, sistem otomasi ERP perusahaan, dan aplikasi mobile yang telah dipercaya oleh berbagai instansi dan korporasi.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://wa.me/6289615799089?text=Halo%20Fibecodes,%20saya%20ingin%20konsultasi%20mengenai%20portofolio%20dan%20solusi%20digital%20untuk%20perusahaan%20kami."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-white text-[#20252B] border border-[#E5E4DF] hover:bg-[#20252B] hover:text-white hover:border-[#20252B] transition-all shadow-sm group"
            >
              <span>Konsultasi Proyek Serupa</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative space-y-8 md:space-y-12 pb-8 md:pb-16">
          {works.map((work, index) => (
            <div
              key={work.id}
              className="sticky top-[var(--stack-top-mobile)] md:top-[var(--stack-top-desktop)]"
              style={
                {
                  "--stack-top-mobile": `${72 + index * 10}px`,
                  "--stack-top-desktop": `${96 + index * 12}px`,
                  zIndex: index + 1,
                } as React.CSSProperties
              }
            >
              <article className="group relative overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[36px] bg-white border border-[#E5E4DF] shadow-[0_12px_36px_-10px_rgba(32,37,43,0.12),0_2px_8px_-2px_rgba(32,37,43,0.04)] hover:shadow-[0_24px_54px_-10px_rgba(32,37,43,0.16)] hover:border-[#D9D0F7] transition-all duration-300">
                {/* Subtle Iridescent Top Accent Line */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-6 right-6 sm:left-8 sm:right-8 h-px bg-gradient-to-r from-transparent via-[#D9D0F7] to-transparent opacity-60"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch p-5 sm:p-8 md:p-10 lg:p-12">
                  {/* SISI INFORMASI (42%) */}
                  <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1">
                    <div>
                      {/* Project Index & Category Pill */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono font-bold tracking-wider text-[#707782] bg-[#F5F4F0] px-2.5 py-1 rounded-md border border-[#E5E4DF]">
                          {work.number}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#707782]">
                          {work.category}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#20252B] leading-snug">
                        {work.title}
                      </h3>

                      {/* Client Type Meta */}
                      <div className="mt-2 text-xs font-medium text-[#707782]">
                        Kategori Mitra: <span className="text-[#20252B]">{work.clientType}</span>
                      </div>

                      {/* Project Description */}
                      <p className="mt-4 text-xs sm:text-sm md:text-base text-[#707782] leading-relaxed">
                        {work.description}
                      </p>

                      {/* Technology Stack Tags */}
                      <div className="mt-6 pt-6 border-t border-[#E5E4DF]/70">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#707782] mb-3">
                          <Code2 className="w-3.5 h-3.5 text-[#20252B]" />
                          <span>Teknologi yang Digunakan</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {work.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-medium bg-[#FAFAF8] text-[#20252B] border border-[#E5E4DF] rounded-full transition-colors group-hover:border-[#D9D0F7]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action CTA */}
                    <div className="mt-8 pt-6 border-t border-[#E5E4DF]/70 flex items-center justify-between gap-4">
                      <a
                        href={`https://wa.me/6289615799089?text=${encodeURIComponent(work.waMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#20252B] hover:text-black transition-colors group/cta"
                      >
                        <span className="underline underline-offset-4 decoration-[#E5E4DF] group-hover/cta:decoration-[#20252B]">
                          Konsultasikan Kebutuhan Serupa
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#20252B] group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                      </a>

                      <span className="text-[11px] font-medium text-[#707782] hidden sm:inline">
                        Studi Kasus Terverifikasi
                      </span>
                    </div>
                  </div>

                  {/* SISI VISUAL (58%) - Dominant Floating Product Preview */}
                  <div className="lg:col-span-7 order-1 lg:order-2 flex items-center justify-center">
                    <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#FAFAF8] via-[#F5F4F0] to-[#EAE8E2] border border-[#E5E4DF] p-3 sm:p-5 flex items-center justify-center shadow-inner group-hover:border-[#D9D0F7] transition-colors">
                      {/* Ambient Inner Shadow & Glow */}
                      <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_16px_40px_-8px_rgba(32,37,43,0.14)] border border-black/5 bg-slate-950">
                        <Image
                          src={work.image || "/placeholder.svg"}
                          alt={work.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                          priority={index < 2}
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />

                        {/* Top Subtle Sheen Overlay */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 bg-white border border-[#E5E4DF] rounded-2xl sm:rounded-3xl max-w-3xl mx-auto shadow-sm">
            <div className="text-center sm:text-left">
              <div className="text-sm sm:text-base font-semibold text-[#20252B]">
                Punya Kebutuhan Khusus untuk Sistem Bisnis Anda?
              </div>
              <div className="text-xs text-[#707782] mt-0.5">
                Diskusikan arsitektur web, integrasi database, atau sistem ERP langsung dengan developer kami.
              </div>
            </div>
            <a
              href="https://wa.me/6289615799089?text=Halo%20Fibecodes,%20saya%20ingin%20jadwalkan%20sesi%20konsultasi%20sistem%20khusus%20untuk%20perusahaan%20kami."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#20252B] text-white hover:bg-black transition-all shadow-md shadow-[#20252B]/10 inline-flex items-center gap-1.5"
            >
              <span>Jadwalkan Konsultasi</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const works = [
  {
    id: 1,
    title: "Company Profile dan Dashboard CMS Dinas Ketahanan Pangan",
    category: "Company Profile",
    description: "Pengembangan website profil instansi resmi lengkap dengan sistem manajemen konten (CMS) terpadu untuk memudahkan pengelolaan informasi publik secara real-time.",
    image: "/images/1.png",
    tags: ["Vue", "MySQL", "TypeScript", "Vite"],
  },
  {
    id: 2,
    title: "ERP Supply Chain Management System PT. Gaido Cito Ekakurindo",
    category: "Enterprise Sistem",
    description: "Sistem perencanaan sumber daya perusahaan (ERP) berskala besar untuk mengoptimalkan alur rantai pasok, inventaris, dan logistik secara terpusat.",
    image: "/images/2.png",
    tags: ["ERP", "Vue", "MariaDB", "Python", "DevExtreme", "Bootstrap"],
  },
  {
    id: 3,
    title: "Aplikasi Android Gaido Mobile Courier & Tracking System",
    category: "Mobile Apps",
    description: "Aplikasi kurir berbasis mobile untuk pelacakan pengiriman secara langsung (real-time tracking) dan manajemen tugas lapangan yang efisien.",
    image: "/images/3.png",
    tags: ["Ionic", "Angular", "FlaskAPI", "Vue"],
  },
  {
    id: 4,
    title: "Sistem HRIS (Human Resource Information System) PT. Hutama Karya Anugerah Persada",
    category: "Website Bisnis",
    description: "Platform digital manajemen sumber daya manusia untuk otomatisasi absensi, perhitungan gaji, cuti, serta evaluasi kinerja karyawan secara terpadu.",
    image: "/images/4.png",
    tags: ["HRIS", "Vue", "MySQL", "Tailwind"],
  },
  {
    id: 5,
    title: "Company Profile dan Admin Panel CMS PT. Key Lock Indonesia",
    category: "Company Profile",
    description: "Pembuatan website komersial dengan desain modern serta panel admin interaktif berbasis CMS untuk pengelolaan katalog produk dan informasi perusahaan.",
    image: "/images/5.png",
    tags: ["Laravel", "MySQL", "Filament", "NextJS"],
  },
  {
    id: 6,
    title: "Aplikasi Logistics Management System",
    category: "Mobile Apps / Progresive Web Apps",
    description: "Aplikasi logistik berbasis mobile untuk pengelolaan pengiriman barang agar lebih efisien dan terdokumentasi.",
    image: "/images/6.png",
    tags: ["Laravel", "NextJS", "MySQL", "Vue"],
  },

]

export function SelectedWorks() {
  return (
    <section id="works" className="py-20 md:py-10 md:pt-32 pb-4">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Project Terbaru
          </SectionTitle>
          <Link
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: "#203eec" }}
          >
            Lihat Semua
            <ArrowUpRight className="w-4 h-4" style={{ color: "#203eec" }} />
          </Link>
        </div>

        <div className="relative">
          {works.map((work, index) => (
            <div
              key={work.id}
              className="sticky"
              style={{
                top: `${70 + index * 0}px`,
                zIndex: index + 1,
              }}
            >
              <Link href="#" className="group block pt-10">
                <article className="overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[2/1] overflow-hidden bg-secondary">
                    <Image
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-3 md:p-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold">{work.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{work.description}</p>
                      </div>
                      <ArrowUpRight
                        className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
                        style={{ color: "#203eec" }}
                      />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border rounded-full hover:bg-secondary transition-colors"
            style={{ color: "#203eec", borderColor: "#203eec" }}
          >
            Lihat Semua
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

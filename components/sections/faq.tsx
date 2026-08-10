"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Plus, X } from "lucide-react"

const faqs = [
  {
    question: "Apa saja layanan utama yang ditawarkan?",
    answer: "Kami berspesialisasi dalam membantu bisnis Anda merancang, membangun, dan mengembangkan produk digital berbasis web maupun aplikasi custom. Mulai dari konsultasi alur kerja, UI/UX design, pengembangan sistem, hingga deployment.",
  },
  {
    question: "Apakah melayani bisnis dari tahap rintisan (startup) atau UMKM?",
    answer: "Tentu saja! Kami sangat antusias bekerja sama dengan berbagai skala bisnis, baik startup rintisan, UMKM, maupun perusahaan mapan yang ingin melakukan transformasi digital untuk mempercepat pertumbuhan.",
  },
  {
    question: "Berapa lama waktu rata-rata pengerjaan sebuah proyek?",
    answer: "Durasi bervariasi tergantung pada tingkat kompleksitas fitur. Proyek standar umumnya memakan waktu sekitar 1 hingga 2 minggu, mulai dari perancangan prototipe hingga aplikasi siap diluncurkan ke publik.",
  },
  {
    question: "Bisakah mengintegrasikan sistem baru ke dalam platform bisnis yang sudah ada?",
    answer: "Sangat bisa. Tim developer kami berpengalaman dalam melakukan integrasi fitur baru, pembaruan sistem yang berjalan, maupun migrasi teknologi agar infrastruktur digital Anda jauh lebih modern dan efisien.",
  },
  {
    question: "Apa yang perlu saya siapkan sebelum memulai konsultasi?",
    answer: "Anda cukup menyiapkan gambaran umum mengenai ide atau tantangan operasional yang ingin diselesaikan. Anda bisa langsung menjadwalkan sesi singkat via WhatsApp agar kami bantu merumuskan solusi terbaiknya.",
  },
  {
    question: "Bagaimana cara menjaga kualitas dan keamanan hasil pengerjaan?",
    answer: "Kami menerapkan standar uji kualitas (QA) yang ketat di setiap fase pengembangan serta memberikan garansi pemeliharaan penuh untuk memastikan sistem Anda berjalan stabil dan aman setelah dirilis.",
  },
]

export default function FaqCta() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      id="faq"
      className="py-24 bg-background text-foreground relative overflow-hidden" 
      aria-labelledby="faq-section-title"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Grid Layout: Kiri (Heading & CTA Card) | Kanan (List FAQ) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 items-start">
          
          {/* Kolom Kiri: Judul FAQ & Card dengan tombol gradien */}
          <div className="flex flex-col sticky top-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">FAQ & Bantuan</span>
            </div>
            
            <h2 id="faq-section-title" className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Pertanyaan yang Sering Diajukan
            </h2>

            {/* Card Booking Call di Sebelah Kiri */}
            <div className="bg-card border rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 bg-muted flex-shrink-0">
                  <Image
                    src="images/konsul.png"
                    alt="Tim Ahli Fibe"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Konsultasi Gratis 15 Menit</h3>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Punya pertanyaan seputar kebutuhan digital bisnis Anda? Diskusikan langsung bersama tim ahli kami sebelum memulai proyek.
              </p>

              {/* Tombol dengan sentuhan bg-gradient-to-r from-[#203eec] to-[#00d4ff] */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-gradient-to-r from-[#203eec] to-[#00d4ff] text-white font-semibold text-sm shadow-md hover:opacity-95 transition-all transform hover:-translate-y-0.5"
              >
                Jadwalkan Konsultasi Sekarang
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Daftar Accordion FAQ dengan sentuhan gradien saat aktif */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen 
                      ? "bg-gradient-to-r from-[#203eec] to-[#00d4ff] text-white border-transparent shadow-lg" 
                      : "bg-card text-card-foreground border-border hover:bg-muted/50"
                  )}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-lg focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className={cn(
                      "p-2 rounded-full transition-colors flex items-center justify-center flex-shrink-0",
                      isOpen ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                    )}>
                      {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-white/90 text-sm sm:text-base leading-relaxed animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
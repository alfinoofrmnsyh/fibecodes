"use client"

const skills = [
"ERP (Enterprise Resource Planning)",
"Web Development",
"Custom Software Development",
"E-Commerce Solution",
"Mobile Apps",
"HRIS (Human Resource Information System)",
"UI/UX Design",
"WMS (Warehouse Management System)",

]

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "50+", label: "Projects" },
  { value: "30+", label: "Happy Clients" },
]

import { SectionTitle } from "@/components/ui/section-title"

export function About() {
  return (
    <section id="about" className="py-20 border-border border-t-0 md:py-10 md:pb-32 md:pt-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
             Membangun Solusi Software & Website Skalabel untuk Pertumbuhan Bisnis Anda
            </SectionTitle>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Membantu menyelesaikan permasalahan bisnis melalui digitalisasi teknologi, mari membuat proses bisnis lebih terdokumentasi, efisien, dan meningkatkan konversi transaksi. Fital Technology hadir sebagai mitra software house profesional yang berfokus pada pengembangan website, aplikasi kustom, dan sistem digital handal untuk mengakselerasi pertumbuhan perusahaan Anda.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
             Dengan pendekatan yang berpusat pada pengguna (user-centric), setiap solusi yang kami rancang tidak hanya mengutamakan estetika visual dan kecanggihan teknikal, tetapi juga dirancang untuk mengoptimalkan operasional harian serta memberikan dampak nyata bagi profitabilitas bisnis Anda.
            </p>
          </div>

          {/* Right Content */}
          <div>
            {/* Skills */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">LAYANAN & TEKNOLOGI KAMI</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium border border-border rounded-full hover:bg-secondary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-secondary rounded-2xl bg-gradient-to-r from-[#4661fc] to-[#93e9fa]">
                  <div className="text-2xl md:text-3xl font-semibold text-white">{stat.value}</div>
                  <div className="text-xs text-white/80 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

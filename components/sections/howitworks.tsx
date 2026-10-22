"use client"

import AccordionGallery, { AccordionGalleryItem } from "@/components/ui/accordion-gallery"

const workflowItems: AccordionGalleryItem[] = [
  {
    step: "01",
    label: "01. Konsultasi & Blueprint",
    title: "Konsultasi & Blueprint",
    subtitle: "Analisis Kebutuhan & Estimasi",
    description:
      "Diskusikan ide, ruang lingkup fitur, dan target bisnis untuk menyusun blueprint teknis serta estimasi biaya transparan.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    link: "https://wa.me/6289615799089?text=Halo%20Fibecodes,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20pembuatan%20website%20dan%20sistem%20digital.",
  },
  {
    step: "02",
    label: "02. Prototipe & Desain UI/UX",
    title: "Prototipe & Desain UI/UX",
    subtitle: "Visualisasi Alur & Wireframing",
    description:
      "Merancang visualisasi antarmuka dan user flow interaktif agar Anda mendapatkan gambaran utuh sebelum tahap koding dimulai.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    link: "https://wa.me/6289615799089?text=Halo%20Fibecodes,%20saya%20ingin%20konsultasi%20mengenai%20desain%20UI/UX.",
  },
  {
    step: "03",
    label: "03. Pengembangan Sistem",
    title: "Pengembangan Sistem",
    subtitle: "Rekayasa Kode Bersih & Skalabel",
    description:
      "Tim engineer membangun arsitektur database, performa frontend, dan backend scalable dengan laporan kemajuan berkala.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    link: "https://wa.me/6289615799089?text=Halo%20Fibecodes,%20saya%20ingin%20konsultasi%20mengenai%20pengembangan%20sistem.",
  },
  {
    step: "04",
    label: "04. Quality Assurance",
    title: "Quality Assurance & Testing",
    subtitle: "Pengujian Menyeluruh & Keamanan",
    description:
      "Uji fungsional komprehensif, audit keamanan data, optimasi kecepatan query, dan uji kompatibilitas multi-perangkat.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    link: "https://wa.me/6289615799089?text=Halo%20Fibecodes,%20saya%20ingin%20konsultasi%20mengenai%20sistem%20digital.",
  },
  {
    step: "05",
    label: "05. Peluncuran & Pemeliharaan",
    title: "Peluncuran & Pemeliharaan",
    subtitle: "Go-Live & Dukungan Jangka Panjang",
    description:
      "Rilis ke server produksi, serah terima hak akses penuh, serta garansi pemeliharaan sistem jangka panjang yang responsif.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    link: "https://wa.me/6289615799089?text=Halo%20Fibecodes,%20saya%20ingin%20konsultasi%20mengenai%20maintenance%20dan%20hosting.",
  },
]

export default function HowItWorks() {
  return (
    <section
      id="howitworks"
      className="py-24 md:py-32 bg-[#F5F4F0] border-t border-[#E5E4DF] relative overflow-hidden"
      aria-labelledby="workflow-heading"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A99BEA]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#707782]">
              PROSES KERJA
            </span>
          </div>
          <h2
            id="workflow-heading"
            className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#20252B] tracking-tight leading-[1.15]"
          >
            Dari ide ke solusi digital
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#707782] leading-relaxed">
            Alur kerja yang terstruktur, transparan, dan terukur dari konsultasi awal hingga aplikasi siap melayani ribuan pengguna.
          </p>
        </div>

        {/* Accordion Gallery Component */}
        <div className="w-full">
          <AccordionGallery
            items={workflowItems}
            defaultIndex={2}
            expandRatio={0.52}
            trigger="hover"
            accentColor="#10b981"
            overlayColor="#02343c"
            height={480}
            gap={12}
            radius={20}
            tilt={0}
          />
        </div>


      </div>
    </section>
  )
}
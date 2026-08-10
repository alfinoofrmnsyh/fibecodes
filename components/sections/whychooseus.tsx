"use client"

import Image from "next/image"
import { ShieldCheck, Zap, BadgeCheck, Layers, Gauge, RefreshCcw, ArrowRight } from "lucide-react"

// Data komponen dengan proporsi aspek gambar yang ditinggikan (menggunakan aspect-[4/6] atau aspect-[3/4])
const whyChooseUsData = {
  title: "Mengapa Memilih Kami?",
  subtitle: "Kami menggabungkan keahlian teknis, transparansi, dan kecepatan untuk memastikan transformasi digital bisnis Anda berjalan sukses.",
  image: "images/whychooseus.png",
  imageAlt: "Ilustrasi Layanan Teknologi Profesional",
  ctaText: "Konsultasi Gratis Sekarang",
  ctaLink: "#contact",
  leftFeatures: [
    {
      icon: "ShieldCheck",
      title: "Tim Ahli Berpengalaman",
      description: "Didukung oleh profesional IT berpengalaman yang menghadirkan standar kualitas tinggi serta solusi tepat guna untuk bisnis Anda.",
    },
    {
      icon: "Zap",
      title: "Pengerjaan Cepat & Tepat",
      description: "Proses kerja terstruktur memastikan proyek Anda selesai sesuai target waktu tanpa menurunkan kualitas.",
    },
    {
      icon: "Gauge",
      title: "Performa & Kecepatan Tinggi",
      description: "Aplikasi dioptimasi dari sisi backend dan frontend — query efisien, caching, lazy loading, dan Lighthouse score tinggi untuk pengalaman pengguna terbaik.",
    },
  ],
  rightFeatures: [
    {
      icon: "BadgeCheck",
      title: "Harga Transparan",
      description: "Biaya jelas di awal tanpa ada biaya tersembunyi. Investasi terbaik yang transparan untuk hasil yang maksimal.",
    },
    {
      icon: "Layers",
      title: "Solusi Menyeluruh",
      description: "Dari konsultasi awal, pembuatan prototipe, hingga deployment dan pemeliharaan jangka panjang—semuanya ada di satu tempat.",
    },
    {
      icon: "RefreshCcw",
      title: "Proses Transparan",
      description: "Anda selalu tahu perkembangan proyek. Dari briefing, wireframe, desain, hingga go-live — kita kerja bareng secara terbuka dan terdokumentasi.",
    },
  ],
}

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "ShieldCheck":
      return <ShieldCheck className="w-6 h-6 text-primary" />
    case "Zap":
      return <Zap className="w-6 h-6 text-primary" />
    case "BadgeCheck":
      return <BadgeCheck className="w-6 h-6 text-primary" />
    case "Layers":
      return <Layers className="w-6 h-6 text-primary" />
    case "Gauge":
      return <Gauge className="w-6 h-6 text-primary" />
    case "RefreshCcw":
      return <RefreshCcw className="w-6 h-6 text-primary" />
    default:
      return <ShieldCheck className="w-6 h-6 text-primary" />
  }
}

export default function WhyChooseUs() {
  return (
    <section id="whychooseus" className="py-24 bg-background relative overflow-hidden" aria-labelledby="why-choose-us-title">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="why-choose-us-title" className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            {whyChooseUsData.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {whyChooseUsData.subtitle}
          </p>
        </div>

        {/* Layout 3 Kolom: Kiri (3 Fitur) | Tengah (Gambar & CTA) | Kanan (3 Fitur) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          
          {/* Kolom Kiri */}
          <div className="flex flex-col gap-10 text-center lg:text-right">
            {whyChooseUsData.leftFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col lg:items-end gap-3">
                <div className="p-3 rounded-2xl bg-primary/10 w-fit mx-auto lg:mx-0">
                  {renderIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Kolom Tengah: Gambar dengan Aspek Lebih Tinggi (aspect-[3/4]) & Tombol CTA */}
          <div className="flex flex-col items-center justify-center relative">
            <div className="absolute w-[85%] h-[85%] bg-primary/15 rounded-2xl translate-x-4 translate-y-4 -z-10" />
            
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border shadow-lg bg-muted aspect-[3/4]">
              <Image
                src={whyChooseUsData.image}
                alt={whyChooseUsData.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-8">
              <a
                href={whyChooseUsData.ctaLink}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-md hover:bg-primary/90 transition-all transform hover:-translate-y-0.5"
              >
                <span>{whyChooseUsData.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="flex flex-col gap-10 text-center lg:text-left">
            {whyChooseUsData.rightFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col lg:items-start gap-3">
                <div className="p-3 rounded-2xl bg-primary/10 w-fit mx-auto lg:mx-0">
                  {renderIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
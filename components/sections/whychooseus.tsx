"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { ShieldCheck, Gauge, BadgeCheck, Layers, ArrowRight } from "lucide-react"

const RobotViewer = dynamic(() => import("@/components/ui/robot-viewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-[#A99BEA] border-t-transparent animate-spin" />
    </div>
  ),
})

const whyChooseUsData = {
  eyebrow: "KEUNGGULAN",
  title: "Mengapa memilih kami?",
  subtitle:
    "Kami menggabungkan keunggulan rekayasa teknis, transparansi proses, dan kecepatan eksekusi untuk memastikan produk digital Anda sukses di pasar.",
  ctaText: "Konsultasi Gratis Sekarang",
  ctaLink:
    "https://wa.me/6289615799089?text=Halo%20Fibecodes,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20pembuatan%20website%20dan%20sistem%20digital.",
  leftFeatures: [
    {
      icon: ShieldCheck,
      title: "Tim Ahli Berpengalaman",
      description:
        "Didukung oleh software engineer berpengalaman yang menerapkan best-practice arsitektur modern dan standar kode berkualitas tinggi.",
    },
    {
      icon: Gauge,
      title: "Performa & Kecepatan Tinggi",
      description:
        "Dioptimasi penuh di sisi backend dan frontend — query efisien, caching pintar, lazy loading, dan skor Lighthouse tinggi.",
    },
  ],
  rightFeatures: [
    {
      icon: BadgeCheck,
      title: "Harga & Biaya Transparan",
      description:
        "Rincian biaya jelas sejak awal tanpa biaya tersembunyi. Investasi terukur dan realistis untuk hasil akhir yang maksimal.",
    },
    {
      icon: Layers,
      title: "Solusi Digital Menyeluruh",
      description:
        "Dari konsultasi awal, wireframing, prototipe, integrasi API, deployment cloud, hingga pemeliharaan sistem jangka panjang.",
    },
  ],
}

export default function WhyChooseUs() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    checkDesktop()
    window.addEventListener("resize", checkDesktop)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { rootMargin: "200px" }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      window.removeEventListener("resize", checkDesktop)
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="whychooseus"
      className="py-24 md:py-32 bg-[#F5F4F0] border-t border-[#E5E4DF] relative overflow-hidden"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A99BEA]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#707782]">
              {whyChooseUsData.eyebrow}
            </span>
          </div>
          <h2
            id="why-choose-us-heading"
            className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#20252B] tracking-tight leading-[1.15]"
          >
            {whyChooseUsData.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#707782] leading-relaxed">
            {whyChooseUsData.subtitle}
          </p>
        </div>

        {/* Desktop 3-Column Symmetrical Layout / Mobile Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (2 features) - 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-10 md:gap-12 order-2 lg:order-1">
            {whyChooseUsData.leftFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="flex flex-col gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E4DF] flex items-center justify-center text-[#20252B] shadow-[0_2px_8px_rgba(0,0,0,0.02)] group-hover:border-[#A99BEA] transition-colors">
                    <Icon className="w-5 h-5 text-[#20252B]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#20252B] tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#707782] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Center Column (3D Interactive Robot on Desktop, Lightweight Static on Mobile) - 4 cols */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[340px] md:h-[340px] flex items-center justify-center">
              {/* Ambient radial glow */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-60 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, #D9D0F7 0%, #D7F0F4 50%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* Central Asset: Interactive 3D on Desktop, Lightweight Optimized Static Fallback on Mobile */}
              <div className="relative w-full h-full z-10 flex items-center justify-center">
                {isDesktop && isInView ? (
                  <RobotViewer />
                ) : (
                  <div className="relative w-full h-full p-4 flex items-center justify-center">
                    <Image
                      src="/images/robot-fallback.jpg"
                      alt="Ilustrasi Robot Fibecodes"
                      fill
                      sizes="(max-width: 768px) 300px, 340px"
                      className="object-contain drop-shadow-xl rounded-full"
                      priority={false}
                    />
                  </div>
                )}
              </div>

              {/* Subtle glassmorphism ring container */}
              <div className="absolute inset-2 sm:inset-0 rounded-full border border-white/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_12px_32px_rgba(32,37,43,0.06)] pointer-events-none" />
            </div>

            {/* Central CTA Button */}
            <div className="mt-6 z-20">
              <a
                href={whyChooseUsData.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#20252B] text-white text-xs sm:text-sm font-medium hover:bg-[#20252B]/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>{whyChooseUsData.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column (2 features) - 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-10 md:gap-12 order-3">
            {whyChooseUsData.rightFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="flex flex-col gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E4DF] flex items-center justify-center text-[#20252B] shadow-[0_2px_8px_rgba(0,0,0,0.02)] group-hover:border-[#A99BEA] transition-colors">
                    <Icon className="w-5 h-5 text-[#20252B]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#20252B] tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#707782] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
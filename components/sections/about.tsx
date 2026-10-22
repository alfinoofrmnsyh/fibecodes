"use client"

import ScrollVelocity from "@/components/ui/scroll-velocity"

const capabilitiesRow1 = [
  "ERP (Enterprise Resource Planning)",
  "E-Commerce Solution",
  "Mobile Apps",
  "Website Development",
  "CRM (Customer Relationship Management)",
  "Business Management System",
]

const capabilitiesRow2 = [
  "HRIS (Human Resource Information System)",
  "WMS (Warehouse Management System)",
  "Logistics Management System",
  "SCM (Supply Chain Management)",
  "IM (Inventory Management)",
]

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#F5F4F0] border-t border-[#E5E4DF] relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        {/* Top 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column (~40% / 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A99BEA]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#707782]">
                TENTANG KAMI
              </span>
            </div>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#20252B] tracking-tight leading-[1.18] text-balance"
            >
              Membangun Solusi Software & Website Skalabel untuk Pertumbuhan Bisnis Anda
            </h2>
          </div>

          {/* Right Column (~60% / 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-1 lg:pt-2">
            <div className="space-y-4 max-w-2xl">
              <p className="text-base sm:text-base text-[#707782] leading-relaxed">
                Kami membantu bisnis membangun website, aplikasi, dan sistem digital yang mendukung operasional serta pertumbuhan bisnis.
              </p>
              <p className="text-sm sm:text-base text-[#707782]/90 leading-relaxed">
                Setiap solusi dirancang berdasarkan kebutuhan pengguna dan proses bisnis, dengan fokus pada kegunaan, kualitas, dan keberlanjutan.
              </p>
            </div>

            {/* Premium Skill Chips Scroll Velocity Area */}
            <div className="mt-8 pt-6 border-t border-[#E5E4DF]/70 w-full overflow-hidden">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#707782] block mb-4">
                Keahlian Utama
              </span>

              {/* Accessible representation for screen readers */}
              <div className="sr-only">
                <h3>Daftar Keahlian Utama:</h3>
                <ul>
                  {[...capabilitiesRow1, ...capabilitiesRow2].map((cap) => (
                    <li key={cap}>{cap}</li>
                  ))}
                </ul>
              </div>

              {/* Animated Two-Row Scroll Velocity Chips Track */}
              <div className="w-full overflow-hidden" aria-hidden="true">
                <ScrollVelocity
                  chipRows={[capabilitiesRow1, capabilitiesRow2]}
                  velocity={28}
                  skewWithVelocity={0}
                  scaleWithVelocity={0}
                  draggable={false}
                  numCopies={6}
                  damping={50}
                  stiffness={400}
                  gap={10}
                  pauseOnHover={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

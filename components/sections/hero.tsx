"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { Plus } from "lucide-react"

const heroStats = [
  {
    number: "5+",
    title: "Tahun Pengalaman",
    description: "Dedikasi profesional dalam rekayasa perangkat lunak dan transformasi digital bisnis.",
  },
  {
    number: "50+",
    title: "Proyek Terselesaikan",
    description: "Portofolio website performa tinggi, sistem ERP, dan aplikasi bisnis berskala nasional.",
  },
  {
    number: "100%",
    title: "Performa & Skalabilitas",
    description: "Kode bersih standar enterprise, query teroptimasi, dan skor Lighthouse tinggi.",
  },
]

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const pixelGridRef = useRef<HTMLDivElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)
  const customCursorRef = useRef<HTMLDivElement>(null)
  const [showCustomCursor, setShowCustomCursor] = useState(false)

  useEffect(() => {
    const tagsElement = tagsRef.current
    const cursorElement = customCursorRef.current

    if (!tagsElement || !cursorElement) return

    let cursorX = 0
    let cursorY = 0

    const handleMouseMove = (e: MouseEvent) => {
      cursorX = e.clientX
      cursorY = e.clientY

      gsap.to(cursorElement, {
        x: cursorX - 15,
        y: cursorY - 15,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseEnter = () => {
      setShowCustomCursor(true)
    }

    const handleMouseLeave = () => {
      setShowCustomCursor(false)
    }

    tagsElement.addEventListener("mouseenter", handleMouseEnter)
    tagsElement.addEventListener("mouseleave", handleMouseLeave)
    tagsElement.addEventListener("mousemove", handleMouseMove)

    return () => {
      tagsElement.removeEventListener("mouseenter", handleMouseEnter)
      tagsElement.removeEventListener("mouseleave", handleMouseLeave)
      tagsElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleMouseLeave = () => {
    if (!cardRef.current || !pixelGridRef.current) return

    const gridSize = 4
    const pixelSize = 100 / gridSize

    pixelGridRef.current.innerHTML = ""

    const totalPixels = gridSize * gridSize
    const clearIndices = new Set<number>()
    while (clearIndices.size < 3) {
      clearIndices.add(Math.floor(Math.random() * totalPixels))
    }

    let pixelIndex = 0
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (clearIndices.has(pixelIndex)) {
          pixelIndex++
          continue
        }

        const pixel = document.createElement("div")
        const isIndigo = Math.random() < 0.5

        const normalizedPosition = (col + (gridSize - 1 - row)) / ((gridSize - 1) * 2)
        const targetOpacity = 0.5 + normalizedPosition * 0.5

        pixel.className = `absolute ${isIndigo ? "bg-indigo-600" : "bg-black"}`
        pixel.style.width = `${pixelSize}%`
        pixel.style.height = `${pixelSize}%`
        pixel.style.left = `${col * pixelSize}%`
        pixel.style.top = `${row * pixelSize}%`
        pixel.style.opacity = "0"
        pixel.style.display = "block"
        pixel.setAttribute("data-target-opacity", targetOpacity.toString())
        pixelGridRef.current.appendChild(pixel)

        pixelIndex++
      }
    }

    const pixels = Array.from(pixelGridRef.current.children)
    const animationStepDuration = 0.45
    const actualPixelCount = pixels.length
    const staggerDuration = animationStepDuration / actualPixelCount

    const tl = gsap.timeline()

    tl.to(cardRef.current, {
      scale: 0.995,
      duration: 0.2,
      ease: "power2.in",
    })

    tl.to(
      pixels,
      {
        opacity: (index, target) => {
          const el = target as HTMLElement
          return el.getAttribute("data-target-opacity") || "1"
        },
        duration: 0.45,
        ease: "power2.in",
        stagger: {
          each: staggerDuration,
          from: "random",
        },
      },
      "<",
    )

    tl.to(
      pixels,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      },
      `+=${animationStepDuration}`,
    )

    tl.to(
      cardRef.current,
      {
        scale: 1,
        duration: 0.3,
        ease: "power2.in",
      },
      "<",
    )

    tl.set(pixels, {
      display: "none",
    })
  }

  return (
    <section className="pt-20 sm:pt-10 px-3.5 sm:px-[1.5%] bg-light overflow-hidden w-full max-w-full">
      {/* SVG Mask Definition */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <mask id="heroMask" maskContentUnits="objectBoundingBox">
            <rect width="1" height="1" fill="black" />
            <path
              d="M 0 0.22
                 V 0.9866
                 C 0 0.9942, 0.0021 1, 0.0047 1
                 H 0.9953
                 C 0.9979 1, 1 0.9942, 1 0.9866
                 V 0.22
                 Q 1 0.21, 0.992 0.21
                 H 0.9753
                 Q 0.9673 0.21, 0.9673 0.20
                 V 0.14
                 Q 0.9673 0.13, 0.9593 0.13
                 H 0.9425
                 Q 0.9345 0.13, 0.9345 0.12
                 V 0.06
                 Q 0.9345 0.05, 0.9265 0.05
                 H 0.0735
                 Q 0.0655 0.05, 0.0655 0.06
                 V 0.12
                 Q 0.0655 0.13, 0.0575 0.13
                 H 0.0407
                 Q 0.0327 0.13, 0.0327 0.14
                 V 0.20
                 Q 0.0327 0.21, 0.0247 0.21
                 H 0.008
                 Q 0 0.21, 0 0.22
                 Z"
              fill="white"
            />
          </mask>
        </defs>
      </svg>

      <div className="relative isolate w-full max-w-full min-h-[max(560px,calc(100svh-5.5rem))] sm:min-h-[calc(100svh-6vh)] overflow-hidden">
        <div
          className="hero-mask-desktop absolute inset-0 overflow-hidden rounded-2xl sm:rounded-2xl"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/liquid-metal-video_yX6NvjdW-6bLYorR3Ihmlwjivg3pjA978qrSKRU.mp4" type="video/mp4" />
          </video>

          <div className="pointer-events-none absolute inset-0">
            {/* Top dark gradient for header readability */}
            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/40 via-black/15 to-transparent" />
            {/* White gradient at the bottom so the video is not too bold */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
          </div>

          <div className="absolute bottom-3.5 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8 z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-2.5 sm:gap-3.5 md:gap-5 min-w-0 max-w-full">
            {/* Primary Textbox */}
            <div
              ref={cardRef}
              onMouseLeave={handleMouseLeave}
              className="relative overflow-hidden backdrop-blur-xl bg-black/45 border border-white/20 rounded-2xl p-3 sm:p-5 transition-transform duration-500 ease-in hover:scale-[1.01] shadow-2xl w-full max-w-[310px] sm:max-w-[380px] xl:max-w-[410px] shrink-0"
            >
              <div ref={pixelGridRef} className="absolute inset-0 pointer-events-none z-10" />

              <h1 className="text-balance text-sm sm:text-lg md:text-xl font-semibold tracking-tight text-indigo-50 leading-snug">
                Wujudkan Solusi Digital yang Membantu Bisnis Anda Berkembang Lebih Cepat.
              </h1>
              <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-[12.5px] text-indigo-100/85 leading-relaxed line-clamp-3 sm:line-clamp-none">
                Kami merancang website dan aplikasi kustom profesional di Karawang, Cikarang, Bekasi, dan Subang untuk mengotomatisasi operasional dan mendongkrak konversi bisnis Anda.
              </p>
              <Link
                href="#pricing"
                className="mt-2.5 sm:mt-3 inline-flex items-center rounded-full border border-indigo-400/50 bg-indigo-600/25 px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-medium text-indigo-50 backdrop-blur hover:bg-indigo-600/40 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Konsultasi Gratis
              </Link>
            </div>

            {/* 3 Horizontal Metric Cards to the Right of Textbox */}
            <div className="flex sm:grid sm:grid-cols-3 overflow-x-auto sm:overflow-visible snap-x sm:snap-none gap-2 sm:gap-3 md:gap-3.5 flex-1 min-w-0 w-full max-w-full lg:max-w-[740px] xl:max-w-[800px] pb-1 sm:pb-0 scrollbar-none">
              {heroStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="w-[125px] min-w-[125px] max-w-[125px] sm:w-auto sm:min-w-0 sm:max-w-none snap-start backdrop-blur-xl bg-black/40 hover:bg-black/50 border border-white/15 hover:border-white/25 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col justify-between transition-all duration-300 shadow-xl group shrink-0 sm:shrink"
                >
                  <div>
                    <div className="text-lg sm:text-3xl font-bold tracking-tight text-white font-mono group-hover:text-indigo-200 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-[10.5px] sm:text-[13px] font-semibold text-white/95 mt-0.5 sm:mt-1 tracking-tight leading-tight">
                      {stat.title}
                    </div>
                  </div>
                  <p className="text-[9.5px] sm:text-xs text-white/70 leading-snug sm:leading-relaxed mt-1 sm:mt-2 line-clamp-2 sm:line-clamp-3">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={customCursorRef}
          className={`fixed w-[30px] h-[30px] rounded-full bg-indigo-600 pointer-events-none z-50 transition-opacity duration-200 ${
            showCustomCursor ? "opacity-100" : "opacity-0"
          }`}
          style={{ left: 0, top: 0 }}
        />
      </div>
    </section>
  )
}
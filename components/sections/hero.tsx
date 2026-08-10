"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { Plus } from "lucide-react"

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
    <section className="pt-6 sm:pt-10 px-0 sm:px-[1.5%] bg-light">
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

      <div className="relative isolate w-full min-h-[calc(100svh-4vh)] sm:min-h-[calc(100svh-6vh)]">
        <div
          className="absolute inset-0 overflow-hidden sm:rounded-2xl"
          style={{
            mask: "url(#heroMask)",
            WebkitMask: "url(#heroMask)",
          }}
        >
          <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/liquid-metal-video_yX6NvjdW-6bLYorR3Ihmlwjivg3pjA978qrSKRU.mp4" type="video/mp4" />
          </video>

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/25 via-transparent to-zinc-950/45" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/45 via-zinc-950/15 to-transparent" />
            <div className="absolute inset-0 [background:radial-gradient(90%_60%_at_10%_70%,rgba(0,0,0,.55)_0%,transparent_70%)]" />
          </div>

          <div className="absolute bottom-6 left-4 right-4 sm:left-6 sm:right-6 max-w-[min(46rem,92vw)] md:bottom-8 md:left-8 z-10">
            <div
              ref={cardRef}
              onMouseLeave={handleMouseLeave}
              className="relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 transition-transform duration-500 ease-in hover:scale-[1.01]"
            >
              <div ref={pixelGridRef} className="absolute inset-0 pointer-events-none z-10" />

              <h1 className="text-balance text-2xl/tight sm:text-4xl/tight md:text-5xl/tight tracking-tight text-indigo-50">
                Wujudkan Solusi Digital yang Membantu Bisnis Anda Berkembang Lebih Cepat.
              </h1>
              <p className="mt-3 text-xs/5 sm:text-sm/6 text-indigo-100/85 max-w-prose">
                Kami merancang website dan aplikasi kustom profesional di Karawang, Cikarang, Bekasi, dan Subang. Tidak hanya tampil menawan, sistem kami dibangun untuk mengotomatisasi operasional, menghemat biaya, dan mendongkrak konversi penjualan Anda secara signifikan.
              </p>
              <Link
                href="#demo"
                className="mt-4 inline-flex items-center rounded-full border border-indigo-400/50 bg-indigo-600/10 px-4 py-2 text-xs sm:text-sm font-medium text-indigo-50 backdrop-blur hover:bg-indigo-600/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Konsultasi Gratis
              </Link>
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
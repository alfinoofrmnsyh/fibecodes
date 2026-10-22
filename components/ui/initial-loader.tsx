"use client"

import { useState, useEffect } from "react"
import { TechText } from "./tech-text"

export function InitialLoader() {
  const [mounted, setMounted] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // Check if user already saw the intro in this session
    try {
      const hasSeenIntro = sessionStorage.getItem("fibecodes_intro_seen")
      if (hasSeenIntro) {
        return
      }

      // Respect prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (prefersReducedMotion) {
        sessionStorage.setItem("fibecodes_intro_seen", "1")
        return
      }

      setMounted(true)

      const fadeTimer = setTimeout(() => {
        setFading(true)
      }, 2000)

      const unmountTimer = setTimeout(() => {
        setMounted(false)
        sessionStorage.setItem("fibecodes_intro_seen", "1")
      }, 2350)

      return () => {
        clearTimeout(fadeTimer)
        clearTimeout(unmountTimer)
      }
    } catch {
      // In case sessionStorage is blocked/disabled
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Fibecodes"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#F5F4F0] overflow-hidden w-full max-w-full transition-opacity duration-350 ease-out select-none ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Subtle ambient lavender & cyan glow behind wordmark */}
      <div
        className="absolute w-[360px] md:w-[620px] h-[360px] md:h-[620px] rounded-full pointer-events-none blur-3xl opacity-35"
        style={{
          background: "radial-gradient(circle, #D9D0F7 0%, #D7F0F4 50%, transparent 70%)"
        }}
        aria-hidden="true"
      />

      {/* TechText container with defined height for canvas sizing */}
      <div className="relative z-10 w-full max-w-2xl md:max-w-3xl h-36 md:h-44 px-4 mx-auto">
        <TechText
          text="FIBECODES"
          fontWeight={600}
          fontSize={80}
          letterSpacing={-0.03}
          color="#20252B"
          accentColor="#6D55E0"
          align="center"
          reveal="letter"
          specks={15}
          selection={true}
          labels={true}
          draggable={true}
          clickKick={true}
          sweep={true}
          speed={1.2}
          intro="type"
          introDuration={1.2}
          guides={false}
        />
      </div>
    </div>
  )
}

export default InitialLoader

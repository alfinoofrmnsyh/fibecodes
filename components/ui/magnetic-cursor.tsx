"use client"

import { useEffect, useRef, useState } from "react"

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    // Check user preferences: reduced motion or touch device
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isTouch = window.matchMedia("(pointer: coarse)").matches

    if (prefersReducedMotion || isTouch) {
      return
    }

    setIsEnabled(true)

    let animationFrameId: number
    let targetX = -100
    let targetY = -100
    let currentX = -100
    let currentY = -100
    let ringX = -100
    let ringY = -100

    const interactiveSelectors = [
      "a[href]",
      "button",
      '[data-slot="button"]',
      'input[type="submit"]',
      '[role="button"]',
    ].join(", ")

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY

      const target = e.target as HTMLElement | null
      const isInteractive = target ? target.closest(interactiveSelectors) : null

      if (isInteractive) {
        setIsHovering(true)
        const rect = isInteractive.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const deltaX = targetX - centerX
        const deltaY = targetY - centerY
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

        if (distance < 80) {
          const pullStrength = 0.3
          targetX = targetX - deltaX * pullStrength
          targetY = targetY - deltaY * pullStrength
        }
      } else {
        setIsHovering(false)
      }
    }

    const animate = () => {
      // Direct DOM manipulation - zero React re-renders per frame
      const easeCursor = 0.2
      const easeRing = 0.12

      currentX += (targetX - currentX) * easeCursor
      currentY += (targetY - currentY) * easeCursor

      ringX += (targetX - ringX) * easeRing
      ringY += (targetY - ringY) * easeRing

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  if (!isEnabled) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block will-change-transform"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-200"
          style={{
            width: isHovering ? "36px" : "8px",
            height: isHovering ? "36px" : "8px",
          }}
        />
      </div>

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference hidden md:block will-change-transform"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 transition-all duration-300"
          style={{
            width: isHovering ? "52px" : "28px",
            height: isHovering ? "52px" : "28px",
          }}
        />
      </div>

      {/* Global cursor style only applied when enabled and fine pointer */}
      <style jsx global>{`
        @media (min-width: 768px) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  )
}

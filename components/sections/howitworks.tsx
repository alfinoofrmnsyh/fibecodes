"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp } from "lucide-react"
import { steps } from "./data"

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-advance steps
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length)
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

  const pauseAnimation = () => setIsPaused(true)
  const resumeAnimation = () => setIsPaused(false)

  const goToStep = (index: number) => {
    setActiveStep(index)
    pauseAnimation()
  }

  const goToPrevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)
    pauseAnimation()
  }

  const goToNextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length)
    pauseAnimation()
  }

  return (
    <section
      className="py-20 bg-background flex justify-center items-center"
      aria-labelledby="how-it-works-title"
      onMouseEnter={pauseAnimation}
      onMouseLeave={resumeAnimation}
      onFocus={pauseAnimation}
      onBlur={resumeAnimation}
    >
      {/* Wrapper utama dibuat ke tengah dengan max-w-5xl */}
      <div className="container max-w-5xl px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 id="how-it-works-title" className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Alur Kerja Kemitraan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Proses kerja yang mudah, transparan, dan terstruktur dari awal konsultasi hingga aplikasi rilis.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 items-center justify-center">
          {/* Navigasi Samping */}
          <nav className="relative flex flex-col gap-4 mx-auto lg:mx-0 w-full max-w-xs" aria-label="Process steps">
            <div
              className="absolute left-6 top-6 w-0.5 bg-muted"
              style={{
                height: "calc(100% - 12px)",
                top: "6px",
              }}
              aria-hidden="true"
            />

            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => goToStep(index)}
                className={cn(
                  "relative flex items-start gap-4 text-left transition-all duration-300 group",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md p-2",
                  activeStep === index ? "opacity-100" : "opacity-60 hover:opacity-80",
                )}
                aria-current={activeStep === index ? "step" : undefined}
              >
                <div
                  className={cn(
                    "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2",
                    "transition-colors duration-300 text-sm font-semibold",
                    activeStep === index
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted bg-background group-hover:border-primary/70",
                  )}
                  aria-hidden="true"
                >
                  <span>{step.id}</span>
                </div>

                <div className="pt-1">
                  <h3
                    className={cn(
                      "text-base font-semibold transition-colors duration-300 line-clamp-1",
                      activeStep === index ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{step.subtitle}</p>
                </div>
              </button>
            ))}
          </nav>

          {/* Kotak Card Penjelasan (Tanpa Gambar & Proporsional) */}
          <div className="relative overflow-hidden rounded-xl border bg-background p-8 shadow-sm min-h-[360px] flex items-center">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  "flex flex-col justify-center transition-all duration-500 absolute inset-0 p-8 md:p-10",
                  activeStep === index
                    ? "translate-x-0 opacity-100"
                    : activeStep > index
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0",
                )}
                aria-hidden={activeStep !== index}
                id={`step-content-${step.id}`}
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Langkah {step.id} dari {steps.length}
                </span>
                <h4 className="text-2xl font-semibold mb-3">{step.title}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">{step.subtitle}</p>
                
                <ul className="space-y-2.5">
                  {step.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Tombol Navigasi Bawah Kanan */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-20">
              <button
                onClick={goToPrevStep}
                className="p-2.5 rounded-full bg-muted hover:bg-muted/80 transition-colors shadow-sm"
                aria-label="Langkah sebelumnya"
              >
                <ChevronUp className="h-4 w-4" />
              </button>
              <button
                onClick={goToNextStep}
                className="p-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors shadow-sm"
                aria-label="Langkah berikutnya"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Indikator Mobile */}
        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-colors",
                activeStep === index ? "bg-primary" : "bg-muted hover:bg-primary/50",
              )}
              aria-label={`Buka langkah ${index + 1}`}
              aria-current={activeStep === index ? "step" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
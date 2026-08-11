import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { MagneticCursor } from "@/components/ui/magnetic-cursor"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

export const metadata: Metadata = {
  title: "Fibecodes | Jasa Pembuatan Website & Aplikasi Kustom Profesional",
  description: "Wujudkan solusi digital yang membantu bisnis Anda berkembang lebih cepat. Spesialis pembuatan website dan aplikasi kustom untuk efisiensi operasional dan konversi penjualan.",
  icons: {
    icon: "/images/logo-fibe.png", // Sesuaikan dengan lokasi file logo Anda di folder public
  },
  keywords: [
    "jasa pembuatan website",
    "software house karawang",
    "aplikasi kustom",
    "web developer bekasi",
    "digital agency cikarang",
    "pembuatan sistem perusahaan",
  ],
  authors: [{ name: "Fibecodes" }],
  openGraph: {
    title: "Fibecodes | Jasa Pembuatan Website & Aplikasi Kustom Profesional",
    description: "Solusi digital dan pengembangan software kustom untuk mengotomatisasi operasional serta mendongkrak konversi bisnis Anda.",
    type: "website",
    locale: "id_ID",
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.className} font-sans antialiased`}>
        <MagneticCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
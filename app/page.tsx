import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { SelectedWorks } from "@/components/sections/selected-works"
import { About } from "@/components/sections/about"
import { ClientLogos } from "@/components/sections/client-logos"
import { GradientBar } from "@/components/ui/gradient-bar"
import PricingSection from "@/components/sections/pricing"
import HowItWorks from "@/components/sections/howitworks"
import WhyChooseUs from "@/components/sections/whychooseus"
import FaqCta from "@/components/sections/faq"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        {/* <ClientLogos /> */}
        <PricingSection />
        <HowItWorks />
        <WhyChooseUs />
        <SelectedWorks />
    
        <FaqCta />
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}

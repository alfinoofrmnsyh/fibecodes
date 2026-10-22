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

import { InitialLoader } from "@/components/ui/initial-loader"

export default function HomePage() {
  return (
    <>
      <InitialLoader />
      <Header />
      <main className="w-full max-w-full overflow-x-clip">
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

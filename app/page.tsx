import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StylesSection } from "@/components/styles-section"
import { ScheduleSection } from "@/components/schedule-section"
import { PricingSection } from "@/components/pricing-section"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StylesSection />
      <ScheduleSection />
      <PricingSection />
      <GallerySection />
      <Footer />
    </main>
  )
}

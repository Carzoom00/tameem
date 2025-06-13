import Header from "@/components/header"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import WhyTameem from "@/components/why-tameem"
import CalendlySection from "@/components/calendly-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyTameem />
        <CalendlySection />
      </main>
      <Footer />
    </div>
  )
}

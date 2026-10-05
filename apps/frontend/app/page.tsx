
'use client'

import { CTA } from "./components/CTA"
import { Features } from "./components/Features"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { HowItWorks } from "./components/HowItWorks"
import { LogoMarquee } from "./components/LogoMarquee"
import { Navbar } from "./components/Navbar"
import { Pricing } from "./components/Pricing"
import { Stats } from "./components/Stats"

export default function Page() {
    return (<div className="min-h-screen bg-ink-950 text-ink-100">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Features />
        <HowItWorks />
        <Stats />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div> 
    )
}
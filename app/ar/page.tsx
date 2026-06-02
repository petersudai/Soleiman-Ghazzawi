import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Results } from '@/components/sections/Results'
import { Testimonials } from '@/components/sections/Testimonials'
import { Process } from '@/components/sections/Process'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'

export default function ArabicPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Results />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

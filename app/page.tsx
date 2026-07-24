import Navbar from '@/components/common/Navbar'
import Hero from '@/components/pages/home/Hero'
import AboutSection from '@/components/pages/home/AboutSection'
import UpcomingEvents from '@/components/pages/home/UpcomingEvents'
import UpcomingEventsMobile from '@/components/pages/home/UpcomingEventsMobile'
import ExploreUs from '@/components/pages/home/ExploreUs'
import VerseOfTheDay from '@/components/pages/home/VerseOfTheDay'
import StatsSection from '@/components/pages/home/StatsSection'
import ImageCarousel from '@/components/pages/home/ImageCarousel'
import Footer from '@/components/common/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="relative">
        <Hero />
        <UpcomingEvents />
      </div>
      <AboutSection />
      <UpcomingEventsMobile />
      <ExploreUs />
      <ImageCarousel />
      <StatsSection />
      
      
      <VerseOfTheDay />
      <Footer />
    </main>
  )
}

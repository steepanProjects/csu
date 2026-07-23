import Navbar from '@/components/common/Navbar'
import Hero from '@/components/pages/home/Hero'
import AboutSection from '@/components/pages/home/AboutSection'
import UpcomingEvents from '@/components/pages/home/UpcomingEvents'
import UpcomingEventsMobile from '@/components/pages/home/UpcomingEventsMobile'
import ExploreUs from '@/components/pages/home/ExploreUs'

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
    </main>
  )
}

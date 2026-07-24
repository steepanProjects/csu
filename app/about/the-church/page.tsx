import PageHero      from '@/components/pages/about/the-church/PageHero'
import AboutCard     from '@/components/pages/about/the-church/AboutCard'
import ChurchGallery from '@/components/pages/about/the-church/ChurchGallery'
import ContactSection from '@/components/pages/about/the-church/ContactSection'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
export const metadata = {
  title: 'About Union Church | CSI Union Church',
  description: 'Learn about CSI Union Church Podanur — our history, congregation, and mission.',
}

export default function TheChurchPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="About Union Church"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
      />
      <AboutCard />
      <ChurchGallery />
      <ContactSection />
      <Footer />
    </main>
  )
}

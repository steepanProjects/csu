import PageHero        from '@/components/pages/about/the-church/PageHero'
import PresbyterProfile from '@/components/pages/about/our-team/PresbyterProfile'
import OfficeBearers    from '@/components/pages/about/our-team/OfficeBearers'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

export const metadata = {
  title: 'Our Team | CSI Union Church',
  description: 'Meet the Presbyter, Office Bearers, and staff of CSI Union Church Podanur.',
}

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Our Team"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Team' },
        ]}
      />
      <PresbyterProfile />
      <OfficeBearers />
      <Footer />
    </main>
  )
}

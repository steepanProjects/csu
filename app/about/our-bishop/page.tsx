import PageHero      from '@/components/pages/about/the-church/PageHero'
import BishopProfile from '@/components/pages/about/our-bishop/BishopProfile'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

export const metadata = {
  title: 'Our Bishop | CSI Union Church',
  description: 'Meet Rt. Rev. S. Prince Calvin, Bishop of the CSI Coimbatore Diocese.',
}

export default function OurBishopPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Our Bishop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Bishop' },
        ]}
      />
      <BishopProfile />
      <Footer />
    </main>
  )
}

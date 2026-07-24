import PageHero              from '@/components/pages/about/the-church/PageHero'
import FormerPresbytersList  from '@/components/pages/history/former-presbyters/FormerPresbytersList'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

export const metadata = {
  title: 'Former Presbyters | CSI Union Church',
  description: 'Honouring the former Presbyters and Chairmen of CSI Union Church Podanur.',
}

export default function FormerPresbytersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Presbyters"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Former Presbyters' },
        ]}
      />
      <FormerPresbytersList />
      <Footer />
    </main>
  )
}

import Navbar           from '@/components/common/Navbar'
import Footer           from '@/components/common/Footer'
import PageHero         from '@/components/pages/about/the-church/PageHero'
import SpecialEventsList from '@/components/pages/events/special-events/SpecialEventsList'

export const metadata = {
  title: 'Special Events | CSI Union Church',
  description:
    'Landmark occasions at CSI Union Church — Christmas, Easter, Harvest Festival, Church Anniversary, VBS, and more. Join us for these special celebrations throughout the year.',
}

export default function SpecialEventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Special Events"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events' },
          { label: 'Special Events' },
        ]}
      />
      <SpecialEventsList />
      <Footer />
    </main>
  )
}

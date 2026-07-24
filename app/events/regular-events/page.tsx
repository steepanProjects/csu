import Navbar                from '@/components/common/Navbar'
import Footer                from '@/components/common/Footer'
import PageHero              from '@/components/pages/about/the-church/PageHero'
import RegularEventsSchedule from '@/components/pages/events/regular-events/RegularEventsSchedule'
import RegularEventsDetails  from '@/components/pages/events/regular-events/RegularEventsDetails'

export const metadata = {
  title: 'Regular Events | CSI Union Church',
  description:
    'Discover the recurring weekly gatherings at CSI Union Church — Sunday worship, midweek Bible study, prayer meetings, choir practice, fellowship groups, and more.',
}

export default function RegularEventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Regular Events"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events' },
          { label: 'Regular Events' },
        ]}
      />
      <RegularEventsSchedule />
      <RegularEventsDetails />
      <Footer />
    </main>
  )
}

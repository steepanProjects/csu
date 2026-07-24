import Navbar        from '@/components/common/Navbar'
import Footer        from '@/components/common/Footer'
import PageHero      from '@/components/pages/about/the-church/PageHero'
import CalendarEmbed from '@/components/pages/events/calendar/CalendarEmbed'

export const metadata = {
  title: 'Calendar | CSI Union Church',
  description:
    'View the complete calendar of CSI Union Church events — worship services, fellowship meetings, special occasions, and more. Subscribe to stay updated.',
}

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Calendar"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events' },
          { label: 'Calendar' },
        ]}
      />
      <CalendarEmbed />
      <Footer />
    </main>
  )
}

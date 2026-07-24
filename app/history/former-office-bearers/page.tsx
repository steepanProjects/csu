import PageHero                  from '@/components/pages/about/the-church/PageHero'
import FormerOfficeBearersList   from '@/components/pages/history/former-office-bearers/FormerOfficeBearersList'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

export const metadata = {
  title: 'Former Office Bearers | CSI Union Church',
  description: 'Recognising the former Secretaries and Treasurers of CSI Union Church Podanur.',
}

export default function FormerOfficeBearersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Office Bearers"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Former Office Bearers' },
        ]}
      />
      <FormerOfficeBearersList />
      <Footer />
    </main>
  )
}

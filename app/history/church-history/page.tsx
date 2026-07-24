import PageHero             from '@/components/pages/about/the-church/PageHero'
import ChurchHistoryContent from '@/components/pages/history/church-history/ChurchHistoryContent'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

export const metadata = {
  title: 'Church History | CSI Union Church',
  description: 'The history of CSI Union Church Podanur from its humble beginnings to today.',
}

export default function ChurchHistoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="About Union Church"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'History' },
        ]}
      />
      <ChurchHistoryContent />
      <Footer />
    </main>
  )
}

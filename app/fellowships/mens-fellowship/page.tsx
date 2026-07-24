import Navbar                   from '@/components/common/Navbar'
import Footer                   from '@/components/common/Footer'
import PageHero                 from '@/components/pages/about/the-church/PageHero'
import MensFellowshipAbout      from '@/components/pages/fellowships/mens-fellowship/MensFellowshipAbout'
import MensFellowshipActivities from '@/components/pages/fellowships/mens-fellowship/MensFellowshipActivities'
import MensFellowshipLeadership from '@/components/pages/fellowships/mens-fellowship/MensFellowshipLeadership'
import MensFellowshipJoin       from '@/components/pages/fellowships/mens-fellowship/MensFellowshipJoin'

export const metadata = {
  title: "Men's Fellowship | CSI Union Church",
  description:
    "Men's Fellowship of CSI Union Church Podanur — a brotherhood of Christian men growing in faith, serving the community, and honouring God.",
}

export default function MensFellowshipPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Men's Fellowship"
        breadcrumbs={[
          { label: 'Home',        href: '/'              },
          { label: 'Fellowships', href: '/fellowships'   },
          { label: "Men's Fellowship"                    },
        ]}
      />
      <MensFellowshipAbout />
      <MensFellowshipActivities />
      <MensFellowshipLeadership />
      <MensFellowshipJoin />
      <Footer />
    </main>
  )
}

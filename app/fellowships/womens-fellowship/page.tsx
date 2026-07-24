import Navbar                     from '@/components/common/Navbar'
import Footer                     from '@/components/common/Footer'
import PageHero                   from '@/components/pages/about/the-church/PageHero'
import WomensFellowshipAbout      from '@/components/pages/fellowships/womens-fellowship/WomensFellowshipAbout'
import WomensFellowshipActivities from '@/components/pages/fellowships/womens-fellowship/WomensFellowshipActivities'
import WomensFellowshipLeadership from '@/components/pages/fellowships/womens-fellowship/WomensFellowshipLeadership'
import WomensFellowshipJoin       from '@/components/pages/fellowships/womens-fellowship/WomensFellowshipJoin'

export const metadata = {
  title: "Women's Fellowship | CSI Union Church",
  description:
    "Women's Fellowship of CSI Union Church Podanur — a sisterhood of faithful women growing together in God's Word, prayer, and service.",
}

export default function WomensFellowshipPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Women's Fellowship"
        breadcrumbs={[
          { label: 'Home',        href: '/'              },
          { label: 'Fellowships', href: '/fellowships'   },
          { label: "Women's Fellowship"                  },
        ]}
      />
      <WomensFellowshipAbout />
      <WomensFellowshipActivities />
      <WomensFellowshipLeadership />
      <WomensFellowshipJoin />
      <Footer />
    </main>
  )
}

import Navbar                    from '@/components/common/Navbar'
import Footer                    from '@/components/common/Footer'
import YouthFellowshipHero       from '@/components/pages/fellowships/youth-fellowship/YouthFellowshipHero'
import YouthFellowshipAbout      from '@/components/pages/fellowships/youth-fellowship/YouthFellowshipAbout'
import YouthFellowshipPrograms   from '@/components/pages/fellowships/youth-fellowship/YouthFellowshipPrograms'
import YouthFellowshipLeadership from '@/components/pages/fellowships/youth-fellowship/YouthFellowshipLeadership'
import YouthFellowshipJoin       from '@/components/pages/fellowships/youth-fellowship/YouthFellowshipJoin'

export const metadata = {
  title: 'Youth Fellowship | CSI Union Church',
  description:
    'Youth Fellowship of CSI Union Church Podanur — Bible study, retreats, outreach, sports and more. A community of young people passionate about Jesus.',
}

export default function YouthFellowshipPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <YouthFellowshipHero />
      <YouthFellowshipAbout />
      <YouthFellowshipPrograms />
      <YouthFellowshipLeadership />
      <YouthFellowshipJoin />
      <Footer />
    </main>
  )
}

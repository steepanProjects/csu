import Navbar                      from '@/components/common/Navbar'
import Footer                      from '@/components/common/Footer'
import ChildrensMinistryHero       from '@/components/pages/fellowships/children-ministry/ChildrensMinistryHero'
import ChildrensMinistryAbout      from '@/components/pages/fellowships/children-ministry/ChildrensMinistryAbout'
import ChildrensMinistryPrograms   from '@/components/pages/fellowships/children-ministry/ChildrensMinistryPrograms'
import ChildrensMinistryLeadership from '@/components/pages/fellowships/children-ministry/ChildrensMinistryLeadership'
import ChildrensMinistryJoin       from '@/components/pages/fellowships/children-ministry/ChildrensMinistryJoin'

export const metadata = {
  title: "Children's Ministry | CSI Union Church",
  description:
    "Children's Ministry of CSI Union Church Podanur — Sunday School, Vacation Bible School, trips, and more. Helping children grow in faith from an early age.",
}

export default function ChildrensMinistryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ChildrensMinistryHero />
      <ChildrensMinistryAbout />
      <ChildrensMinistryPrograms />
      <ChildrensMinistryLeadership />
      <ChildrensMinistryJoin />
      <Footer />
    </main>
  )
}

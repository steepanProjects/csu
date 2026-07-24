import Navbar          from '@/components/common/Navbar'
import Footer          from '@/components/common/Footer'
import ChoirHero       from '@/components/pages/fellowships/choir/ChoirHero'
import ChoirAbout      from '@/components/pages/fellowships/choir/ChoirAbout'
import ChoirLeadership from '@/components/pages/fellowships/choir/ChoirLeadership'
import ChoirVideos     from '@/components/pages/fellowships/choir/ChoirVideos'
import ChoirJoin       from '@/components/pages/fellowships/choir/ChoirJoin'

export const metadata = {
  title: 'Choir | CSI Union Church',
  description:
    'The Choir of CSI Union Church Podanur — voices united in worship, leading the congregation in sacred music, hymns, and devotional song every Sunday and on special occasions.',
}

export default function ChoirPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ChoirHero />
      <ChoirAbout />
      <ChoirLeadership />
      <ChoirVideos />
      <ChoirJoin />
      <Footer />
    </main>
  )
}

import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import MediaHero from '@/components/pages/media/MediaHero'
import VideoGallery from '@/components/pages/media/VideoGallery'
import ImageMosaic from '@/components/pages/media/ImageMosaic'
import ChurchMoments from '@/components/pages/media/ChurchMoments'
import EventsCollage from '@/components/pages/media/EventsCollage'

export const metadata = {
  title: 'Media Gallery | CSI Union Church',
  description: 'Explore our collection of worship videos, event highlights, and photo galleries from CSI Union Church Podanur.',
}

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <MediaHero />
      <VideoGallery />
      <ImageMosaic />
      <ChurchMoments />
      <EventsCollage />
      <Footer />
    </main>
  )
}

import Navbar from '@/components/common/Navbar'
import ContactHero from '@/components/pages/contact/ContactHero'
import ContactInfo from '@/components/pages/contact/ContactInfo'
import ContactForm from '@/components/pages/contact/ContactForm'
import LocationMap from '@/components/pages/contact/LocationMap'

export const metadata = {
  title: 'Contact Us | CSI Union Church Podanur',
  description:
    'Get in touch with CSI Union Church Podanur — phone, email, address, service times, and directions.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <LocationMap />
    </main>
  )
}

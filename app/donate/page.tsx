import Navbar from '@/components/common/Navbar'
import DonateHero from '@/components/pages/donate/DonateHero'
import WhyGive from '@/components/pages/donate/WhyGive'
import BankDetails from '@/components/pages/donate/BankDetails'
import DonateUPI from '@/components/pages/donate/DonateUPI'

export const metadata = {
  title: 'Donate | CSI Union Church Podanur',
  description:
    'Support the ministry and mission of CSI Union Church Podanur through your generous giving.',
}

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <DonateHero />
      <WhyGive />
      <BankDetails />
      <DonateUPI />
    </main>
  )
}

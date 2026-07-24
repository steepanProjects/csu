import Link from 'next/link'

export default function DonateHero() {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-[#0f2310]/72" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-40 pb-16">

        <div className="flex items-center gap-3 mb-4">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#7ed957] uppercase tracking-wider">Give generously</span>
        </div>

        <h1 id="page-hero" className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Support the Work<br />of the Church
        </h1>
        <p className="text-white/65 text-base max-w-lg mb-8 leading-relaxed">
          Your gift helps sustain Sunday worship, community outreach, the Asanam Festival,
          and the ongoing construction of our permanent church building.
        </p>

        {/* Scripture */}
        <blockquote className="border-l-2 border-[#7ed957] pl-4 mb-8 max-w-md">
          <p className="text-white/80 text-sm italic leading-relaxed">
            "Each of you should give what you have decided in your heart to give, not reluctantly
            or under compulsion, for God loves a cheerful giver."
          </p>
          <cite className="text-[#7ed957] text-xs font-semibold not-italic mt-1 block">2 Corinthians 9:7</cite>
        </blockquote>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
          <span className="text-white/40">›</span>
          <span className="text-[#7ed957] font-medium">Donate</span>
        </nav>
      </div>
    </section>
  )
}

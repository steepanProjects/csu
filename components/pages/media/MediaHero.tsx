import Link from 'next/link'

export default function MediaHero() {
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
      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-[#0f2310]/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-40 pb-16">
        <h1 id="head" className="text-4xl md:text-5xl font-bold text-white mb-4">Media Gallery</h1>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
          <Link href="/" className="text-white/70 hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-white/40">›</span>
          <span className="text-[#7ed957] font-medium">Media</span>
        </nav>

        <p className="text-white/80 text-lg mt-6 max-w-2xl">
          Explore moments of faith, worship, and fellowship through our collection of videos and images from church events, services, and special celebrations.
        </p>
      </div>
    </section>
  )
}

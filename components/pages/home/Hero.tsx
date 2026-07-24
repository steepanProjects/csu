import Link from 'next/link'
import UpcomingEvents from './UpcomingEvents'

export default function Hero() {
  return (
    <section
      className="relative h-[85vh] min-h-[600px] w-full overflow-hidden"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >

      {/* Dark gradient overlay — heavier on left for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Vertical "Want to Donate?" side label */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:flex">
        <div className="bg-[#7ed957]/90 backdrop-blur-sm px-2 py-4 flex items-center">
          <span
            className="text-white text-xs font-semibold tracking-widest uppercase"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Want to Donate?
          </span>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-8 lg:px-20 xl:px-28 pt-24">
        {/* Eyebrow label */}
        <p className="mb-3 text-xs font-semibold tracking-[0.3em] uppercase text-white/70">
          CSI Union Church
        </p>

        {/* Headline */}
        <h1 className="max-w-xl text-5xl font-bold leading-tight text-white lg:text-6xl">
          Discover Community
          <br />
          Ignite Your Faith
        </h1>

        {/* Subheadline */}
        <p className="mt-5 max-w-md text-base text-white/80 leading-relaxed">
          Discover Meaning, Find Belonging, and Ignite Your Faith in a
          Welcoming Sanctuary of Light and Love.
        </p>

        {/* CTA button */}
        <div className="mt-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-3 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/20 hover:border-white/70"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7ed957] text-white text-xs">
              →
            </span>
            Explore Now
          </Link>
        </div>
      </div>

      {/* Scroll Down indicator */}
      <div className="absolute bottom-8 right-6 z-10 hidden lg:flex flex-col items-center gap-2">
        <span
          className="text-white/60 text-xs font-medium tracking-widest uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll Down
        </span>
        <span className="text-white/60 text-sm">↓</span>
      </div>

      {/* Upcoming Events — quarter circle anchored to bottom-right */}
      <UpcomingEvents />
    </section>
  )
}

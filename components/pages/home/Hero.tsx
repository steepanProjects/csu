import Link from 'next/link'
import UpcomingEvents from './UpcomingEvents'

export default function Hero() {
  return (
    <section
      className="relative h-[100vh] min-h-[600px] md:h-[85vh] w-full overflow-hidden"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Fixed background for parallax effect
      }}
    >

      {/* Dark gradient overlay — heavier on mobile for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60 md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Vertical "Want to Donate?" side label - desktop only */}
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
      <div className="relative z-10 flex h-full flex-col justify-center items-center md:items-start px-4 sm:px-6 md:px-8 lg:px-20 xl:px-28 pt-20 md:pt-24 text-center md:text-left">
        {/* Eyebrow label */}
        <p className="mb-3 md:mb-3 text-[10px] sm:text-xs font-semibold tracking-[0.25em] md:tracking-[0.3em] uppercase text-white/80 md:text-white/70">
          CSI Union Church
        </p>

        {/* Headline - Using Playfair Display for elegance with clear readability */}
        <h1 
          className="max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] md:leading-tight text-white drop-shadow-2xl"
          style={{ fontFamily: 'var(--font-playfair), "Georgia", serif' }}
        >
          Discover Community
          <br />
          Ignite Your Faith
        </h1>

        {/* Subheadline */}
        <p className="mt-4 md:mt-5 max-w-sm md:max-w-md text-sm sm:text-base text-white/90 md:text-white/80 leading-relaxed px-2 md:px-0 drop-shadow-lg">
          Discover Meaning, Find Belonging, and Ignite Your Faith in a
          Welcoming Sanctuary of Light and Love.
        </p>

        {/* CTA button */}
        <div className="mt-6 md:mt-8">
          <Link
            href="/auth/login"
            className="inline-flex items-center gap-2.5 md:gap-3 rounded-full border-2 border-white/50 md:border-white/40 bg-white/15 md:bg-white/10 backdrop-blur-md px-5 md:px-6 py-2.5 md:py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/25 hover:border-white/80 hover:scale-105 shadow-lg"
          >
            <span className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-[#7ed957] text-white text-xs font-bold">
              →
            </span>
            Member Login
          </Link>
        </div>
      </div>

      {/* Scroll Down indicator - desktop only */}
      <div className="absolute bottom-8 right-6 z-10 hidden lg:flex flex-col items-center gap-2">
        <span
          className="text-white/60 text-xs font-medium tracking-widest uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll Down
        </span>
        <span className="text-white/60 text-sm animate-bounce">↓</span>
      </div>

      {/* Upcoming Events — quarter circle anchored to bottom-right */}
      <UpcomingEvents />
    </section>
  )
}

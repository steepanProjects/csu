export default function RegularEventsHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden">

      {/* Background image */}
      {/* PLACEHOLDER: Replace /hero.jpg with a church worship / congregation photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')" }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(5,20,5,0.50) 40%, rgba(5,25,5,0.92) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle green tint */}
      <div
        className="absolute inset-0 opacity-15"
        style={{ background: 'linear-gradient(135deg, #4a8a2a 0%, transparent 55%)' }}
        aria-hidden="true"
      />

      {/* Cross watermark — bottom-right */}
      <div
        className="absolute bottom-8 right-8 opacity-5 text-white pointer-events-none select-none"
        style={{ fontSize: '18rem', lineHeight: 1, fontWeight: 900 }}
        aria-hidden="true"
      >
        ✝
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 lg:px-16 pt-[calc(var(--navbar-h,80px)+4rem)] pb-16">

        {/* Breadcrumbs */}
        <nav id="head" className="flex items-center gap-2 text-xs text-white/60 mb-8" aria-label="Breadcrumb">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href="/events" className="hover:text-white transition-colors">Events</a>
          <span>/</span>
          <span className="text-[#7ed957] font-semibold">Regular Events</span>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          {/* Left — heading block */}
          <div className="flex flex-col gap-5 max-w-xl">

            <div className="inline-flex items-center gap-2 self-start">
              <span className="block w-6 h-px bg-[#7ed957]" />
              <span className="text-xs font-bold text-[#7ed957] uppercase tracking-widest">
                Every Week, Every Season
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05]">
              Regular
              <br />
              <span className="text-[#7ed957]">Events</span>
            </h1>

            <p className="text-sm md:text-base text-white/75 leading-relaxed">
              Consistent, Spirit-filled gatherings that shape the rhythm of our
              church life — from Sunday worship to weekday prayer, Bible study,
              and fellowship meetings.
            </p>
          </div>

          {/* Right — verse card */}
          <div className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-6 max-w-sm w-full lg:w-auto flex-shrink-0">

            {/* Calendar icon decoration */}
            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#7ed957] flex items-center justify-center opacity-90">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>

            <div className="w-6 h-px bg-[#7ed957] mb-4" />
            <p className="text-sm text-white/90 italic leading-relaxed mb-3">
              &ldquo;Let us not give up meeting together, as some are in the habit of
              doing, but let us encourage one another.&rdquo;
            </p>
            <p className="text-xs font-bold text-[#7ed957]">— Hebrews 10:25</p>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="mt-12">
          <div className="h-0.5 w-full bg-gradient-to-r from-[#7ed957] via-[#4a8a2a] to-transparent" />
        </div>
      </div>
    </section>
  )
}

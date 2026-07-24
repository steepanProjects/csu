export default function YouthFellowshipHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden">

      {/* ── Background image ──────────────────────────────────────────────── */}
      {/* PLACEHOLDER: Replace /hero.jpg with an actual youth fellowship photo  */}
      {/* Suggested: Youth group photo, worship night, retreat, or camp         */}
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
            'linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(5,20,5,0.50) 40%, rgba(5,25,5,0.90) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle green tint — top left */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: 'linear-gradient(135deg, #4a8a2a 0%, transparent 55%)' }}
        aria-hidden="true"
      />

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 lg:px-16 pt-[calc(var(--navbar-h,80px)+4rem)] pb-16">

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-white/60 mb-8" aria-label="Breadcrumb">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href="/fellowships" className="hover:text-white transition-colors">Fellowships</a>
          <span>/</span>
          <span className="text-[#7ed957] font-semibold">Youth Fellowship</span>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          {/* Left — heading block */}
          <div className="flex flex-col gap-5 max-w-xl">
            <div className="inline-flex items-center gap-2 self-start">
              <span className="block w-6 h-px bg-[#7ed957]" />
              <span className="text-xs font-bold text-[#7ed957] uppercase tracking-widest">Raised for a Purpose</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05]">
              Youth
              <br />
              <span className="text-[#7ed957]">Fellowship</span>
            </h1>

            <p className="text-sm md:text-base text-white/75 leading-relaxed max-w-md">
              A space for young people to encounter God, build deep friendships,
              and live out their faith with boldness and purpose.
            </p>
          </div>

          {/* Right — verse card */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-6 max-w-sm w-full lg:w-auto flex-shrink-0">
            <div className="w-6 h-px bg-[#7ed957] mb-4" />
            <p className="text-sm text-white/90 italic leading-relaxed mb-3">
              &ldquo;Don&apos;t let anyone look down on you because you are young,
              but set an example in speech, in conduct, in love, in faith and
              in purity.&rdquo;
            </p>
            <p className="text-xs font-bold text-[#7ed957]">— 1 Timothy 4:12</p>
          </div>

        </div>

        {/* Bottom accent bar */}
        <div className="mt-12 h-0.5 w-full bg-gradient-to-r from-[#7ed957] via-[#4a8a2a] to-transparent" />
      </div>
    </section>
  )
}

export default function ChoirHero() {
  return (
    <section className="relative min-h-[65vh] flex flex-col justify-end overflow-hidden">

      {/* ── Background image ──────────────────────────────────────────────── */}
      {/* PLACEHOLDER: Replace /hero.jpg with an actual choir photo */}
      {/* Suggested: Choir in robes during service, rehearsal, or performance */}
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
            'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(5,20,5,0.48) 40%, rgba(5,25,5,0.90) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle green tint */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: 'linear-gradient(135deg, #4a8a2a 0%, transparent 50%)' }}
        aria-hidden="true"
      />

      {/* Musical staff decoration — bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none" fill="none">
          {/* Staff lines */}
          {[20, 35, 50, 65, 80].map((y) => (
            <line key={y} x1="0" y1={y} x2="1200" y2={y} stroke="#7ed957" strokeWidth="1.5" />
          ))}
          {/* Treble clef approximation */}
          <path
            d="M80,45 Q75,30 85,20 Q95,10 100,20 Q105,30 100,45 Q95,60 85,60 Q75,60 80,45 M100,45 L100,85"
            stroke="#7ed957"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Notes scattered */}
          <ellipse cx="180" cy="50" rx="8" ry="6" fill="#7ed957" />
          <line x1="188" y1="50" x2="188" y2="20" stroke="#7ed957" strokeWidth="2" />
          <ellipse cx="280" cy="35" rx="8" ry="6" fill="#7ed957" />
          <line x1="288" y1="35" x2="288" y2="5" stroke="#7ed957" strokeWidth="2" />
          <ellipse cx="380" cy="65" rx="8" ry="6" fill="#7ed957" />
          <line x1="388" y1="65" x2="388" y2="35" stroke="#7ed957" strokeWidth="2" />
        </svg>
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 lg:px-16 pt-[calc(var(--navbar-h,80px)+4rem)] pb-16">

        {/* Breadcrumbs */}
        <nav id="head" className="flex items-center gap-2 text-xs text-white/60 mb-8" aria-label="Breadcrumb">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href="/fellowships" className="hover:text-white transition-colors">Fellowships</a>
          <span>/</span>
          <span className="text-[#7ed957] font-semibold">Choir</span>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          {/* Left — heading block */}
          <div className="flex flex-col gap-5 max-w-xl">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="block w-6 h-px bg-[#7ed957]" />
              <span className="text-xs font-bold text-[#7ed957] uppercase tracking-widest">Voices United in Worship</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05]">
              Church
              <br />
              <span className="text-[#7ed957]">Choir</span>
            </h1>

            <p className="text-sm md:text-base text-white/75 leading-relaxed">
              Lifting our voices together in harmony — proclaiming truth, leading
              worship, and offering our musical gifts to the glory of God.
            </p>
          </div>

          {/* Right — verse card with musical accent */}
          <div className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-6 max-w-sm w-full lg:w-auto flex-shrink-0">
            {/* Musical note decoration */}
            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#7ed957] flex items-center justify-center opacity-90">
              <span className="text-white text-2xl font-black leading-none">♪</span>
            </div>
            
            <div className="w-6 h-px bg-[#7ed957] mb-4" />
            <p className="text-sm text-white/90 italic leading-relaxed mb-3">
              &ldquo;Sing to the LORD a new song; sing to the LORD, all the earth.
              Sing to the LORD, praise his name; proclaim his salvation day after day.&rdquo;
            </p>
            <p className="text-xs font-bold text-[#7ed957]">— Psalm 96:1-2</p>
          </div>

        </div>

        {/* Bottom accent bar with wave */}
        <div className="mt-12 relative">
          <div className="h-0.5 w-full bg-gradient-to-r from-[#7ed957] via-[#4a8a2a] to-transparent" />
          <svg className="absolute -bottom-1 left-0 w-48 h-3 opacity-60" viewBox="0 0 200 12" preserveAspectRatio="none">
            <path d="M0,6 Q25,0 50,6 T100,6 T150,6 T200,6" stroke="#7ed957" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  )
}

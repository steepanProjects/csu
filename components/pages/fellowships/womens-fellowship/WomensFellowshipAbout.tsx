export default function WomensFellowshipAbout() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">Who We Are</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight">
              Women&apos;s Fellowship
            </h2>

            <p className="text-sm text-stone-600 leading-relaxed">
              The Women&apos;s Fellowship of CSI Union Church Podanur is a sisterhood
              of faithful women who gather to seek God together, support one another through
              every season of life, and serve their families and community with the love of
              Christ. We are women of prayer, compassion, and purpose.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              Rooted in Scripture and bound by friendship, our fellowship creates a safe and
              nurturing space where women can grow in faith, share their burdens, celebrate
              God&apos;s goodness, and be equipped to make a difference in the world around them.
            </p>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
              <div className="rounded-xl bg-[#e8f5e0] px-6 py-5">
                <div className="w-8 h-px bg-[#7ed957] mb-3" />
                <h3 className="text-sm font-bold text-stone-800 mb-1">Our Vision</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To raise women of God who are grounded in His Word and radiate His grace in
                  their homes, church, and community.
                </p>
              </div>

              <div className="rounded-xl bg-[#e8f5e0] px-6 py-5">
                <div className="w-8 h-px bg-[#7ed957] mb-3" />
                <h3 className="text-sm font-bold text-stone-800 mb-1">Our Mission</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To nurture, encourage, and empower women through the Word of God, prayer,
                  fellowship, and compassionate service.
                </p>
              </div>
            </div>
          </div>

          {/* Right — verse card + photo */}
          <div className="flex flex-col gap-5">
            {/* Verse card */}
            <div className="relative rounded-2xl bg-[#0f2310] px-8 py-8 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                <span className="text-white text-[10rem] font-black">✝</span>
              </div>
              <div className="relative z-10">
                <div className="w-8 h-px bg-[#7ed957] mb-4" />
                <blockquote className="text-white text-lg md:text-xl font-semibold leading-snug italic mb-4">
                  &ldquo;She is clothed with strength and dignity, and she laughs without fear of the future.&rdquo;
                </blockquote>
                <p className="text-[#7ed957] text-sm font-semibold">Proverbs 31:25</p>
              </div>
            </div>

            {/* Photo collage */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden h-40 bg-stone-200">
                <img src="/hero.jpg" alt="Women's fellowship gathering" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-40 bg-stone-200">
                <img src="/hero.jpg" alt="Women's prayer meeting" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

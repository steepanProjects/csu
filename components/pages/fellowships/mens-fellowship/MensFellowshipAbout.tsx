export default function MensFellowshipAbout() {
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
              Men&apos;s Fellowship
            </h2>

            <p className="text-sm text-stone-600 leading-relaxed">
              The Men&apos;s Fellowship of CSI Union Church Podanur is a brotherhood
              of committed Christian men who gather to grow in faith, support one another,
              and serve the community with the love of Christ. Rooted in Scripture and
              fellowship, we strive to be men of integrity, purpose, and prayer.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              We believe that when men come together in the name of the Lord, families are
              strengthened, churches are built up, and communities are transformed. Our
              fellowship provides a space to encourage, challenge, and inspire one another
              on the journey of faith.
            </p>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
              <div className="rounded-xl bg-[#e8f5e0] px-6 py-5">
                <div className="w-9 h-9 rounded-full bg-[#7ed957]/30 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[#4a8a2a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-stone-800 mb-1">Our Vision</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To raise godly men who reflect Christ in every sphere of life — home, church, and community.
                </p>
              </div>

              <div className="rounded-xl bg-[#e8f5e0] px-6 py-5">
                <div className="w-9 h-9 rounded-full bg-[#7ed957]/30 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[#4a8a2a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-stone-800 mb-1">Our Mission</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To equip, encourage, and empower men through the Word of God, prayer, and meaningful service.
                </p>
              </div>
            </div>
          </div>

          {/* Right — verse card + photo */}
          <div className="flex flex-col gap-5">
            {/* Verse card */}
            <div className="relative rounded-2xl bg-[#0f2310] px-8 py-8 overflow-hidden">
              {/* Watermark cross */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                <span className="text-white text-[10rem] font-black">✝</span>
              </div>
              <div className="relative z-10">
                <div className="w-8 h-px bg-[#7ed957] mb-4" />
                <blockquote className="text-white text-lg md:text-xl font-semibold leading-snug italic mb-4">
                  &ldquo;Be watchful, stand firm in the faith, act like men, be strong.&rdquo;
                </blockquote>
                <p className="text-[#7ed957] text-sm font-semibold">1 Corinthians 16:13</p>
              </div>
            </div>

            {/* Photo collage */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden h-40 bg-stone-200">
                <img src="/hero.jpg" alt="Men's fellowship gathering" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-40 bg-stone-200">
                <img src="/hero.jpg" alt="Men's prayer meeting" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

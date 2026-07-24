export default function YouthFellowshipAbout() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">Who We Are</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight">
              Young People Living<br />
              <span className="text-[#4a8a2a]">With Conviction</span>
            </h2>

            <p className="text-sm text-stone-600 leading-relaxed">
              The Youth Fellowship of CSI Union Church Podanur is a community
              of young people between the ages of 15 and 35 who are passionate about
              Jesus. We gather to worship, study Scripture, pray together, and serve our
              church and neighbourhood.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              We believe youth is not a waiting room before real life begins — it is the
              most formative season of faith. Our fellowship walks alongside each member
              through questions, challenges, and growth, anchored in God&apos;s Word and
              fuelled by genuine community.
            </p>

            {/* Age group pill */}
            <div className="rounded-2xl bg-[#f0f9ea] border border-[#7ed957]/20 px-6 py-5 flex flex-col gap-3">
              <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">Who Can Join</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { range: '15–18', label: 'Seniors'   },
                  { range: '19–25', label: 'College'   },
                  { range: '26–35', label: 'Young Adults' },
                ].map((g) => (
                  <div key={g.label} className="flex flex-col items-center text-center bg-white rounded-xl px-3 py-3 border border-stone-100">
                    <span className="text-xl font-black text-[#7ed957] leading-none">{g.range}</span>
                    <span className="text-xs text-stone-500 font-semibold mt-1">{g.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — verse + cards + photo */}
          <div className="flex flex-col gap-5">

            {/* Verse — dark card */}
            <div className="relative rounded-2xl bg-[#0f2310] px-8 py-8 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                <span className="text-white text-[10rem] font-black">✝</span>
              </div>
              <div className="relative z-10">
                <div className="w-8 h-px bg-[#7ed957] mb-4" />
                <blockquote className="text-white text-lg md:text-xl font-semibold leading-snug italic mb-4">
                  &ldquo;How can a young person stay on the path of purity?
                  By living according to your word.&rdquo;
                </blockquote>
                <p className="text-[#7ed957] text-sm font-semibold">Psalm 119:9</p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#e8f5e0] px-5 py-5">
                <div className="w-8 h-px bg-[#7ed957] mb-3" />
                <h3 className="text-sm font-bold text-stone-800 mb-1">Our Vision</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  A generation of young people wholly devoted to Christ — leading,
                  serving, and transforming their world for the Gospel.
                </p>
              </div>
              <div className="rounded-xl bg-[#e8f5e0] px-5 py-5">
                <div className="w-8 h-px bg-[#7ed957] mb-3" />
                <h3 className="text-sm font-bold text-stone-800 mb-1">Our Mission</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To disciple youth through the Word, worship, prayer, fellowship,
                  and active service in the church and community.
                </p>
              </div>
            </div>

            {/* Photo pair */}
            <div className="grid grid-cols-2 gap-3">
              {/* PLACEHOLDER: Replace both with actual youth fellowship photos */}
              {/* Suggested: Worship night / Bible study group */}
              <div className="rounded-xl overflow-hidden h-40 bg-stone-200">
                <img src="/hero.jpg" alt="Youth worship night" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-40 bg-stone-200">
                <img src="/hero.jpg" alt="Youth Bible study" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

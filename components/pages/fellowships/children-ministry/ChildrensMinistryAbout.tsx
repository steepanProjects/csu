export default function ChildrensMinistryAbout() {
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
              Raising the Next Generation <br />
              <span className="text-[#4a8a2a]">in the Way of the Lord</span>
            </h2>

            <p className="text-sm text-stone-600 leading-relaxed">
              The Children&apos;s Ministry of CSI Union Church Podanur is a nurturing
              space where children from ages 4 to 14 come to know Jesus personally. Through
              Scripture, song, stories, and activities, we help young ones build a faith that
              will carry them through life.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              We believe every child is a gift from God, and it is our joyful responsibility
              to pour into their lives with love, patience, and the Word. Our dedicated
              teachers and volunteers create an environment where children feel safe, valued,
              and excited to learn about God.
            </p>

            {/* Age groups */}
            <div className="rounded-2xl bg-[#f0f9ea] border border-[#7ed957]/20 px-6 py-5 flex flex-col gap-3">
              <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">Age Groups We Serve</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { range: '4 – 6', label: 'Nursery' },
                  { range: '7 – 10', label: 'Primary' },
                  { range: '11 – 14', label: 'Middle' },
                ].map((group) => (
                  <div key={group.label} className="flex flex-col items-center text-center bg-white rounded-xl px-3 py-3 border border-stone-100">
                    <span className="text-2xl font-black text-[#7ed957] leading-none">{group.range}</span>
                    <span className="text-xs text-stone-500 font-semibold mt-1">{group.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — verse + photo grid */}
          <div className="flex flex-col gap-5">

            {/* Verse card — dark green */}
            <div className="relative rounded-2xl bg-[#0f2310] px-8 py-8 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                <span className="text-white text-[10rem] font-black">✝</span>
              </div>
              <div className="relative z-10">
                <div className="w-8 h-px bg-[#7ed957] mb-4" />
                <blockquote className="text-white text-lg md:text-xl font-semibold leading-snug italic mb-4">
                  &ldquo;Train up a child in the way he should go; even when he is old he will not depart from it.&rdquo;
                </blockquote>
                <p className="text-[#7ed957] text-sm font-semibold">Proverbs 22:6</p>
              </div>
            </div>

            {/* Vision & Mission side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#e8f5e0] px-5 py-5">
                <div className="w-8 h-px bg-[#7ed957] mb-3" />
                <h3 className="text-sm font-bold text-stone-800 mb-1">Our Vision</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To see every child rooted in Christ — knowing His Word, feeling His love,
                  and living His truth from an early age.
                </p>
              </div>
              <div className="rounded-xl bg-[#e8f5e0] px-5 py-5">
                <div className="w-8 h-px bg-[#7ed957] mb-3" />
                <h3 className="text-sm font-bold text-stone-800 mb-1">Our Mission</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To teach, nurture, and disciple children through Scripture, prayer,
                  creative learning, and Christ-centred fellowship.
                </p>
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="grid grid-cols-2 gap-3">
              {/* PLACEHOLDER: Replace both images with actual children ministry photos */}
              {/* Suggested: Sunday School class or children worshipping / doing crafts */}
              <div className="rounded-xl overflow-hidden h-40 bg-stone-200">
                <img src="/hero.jpg" alt="Children in Sunday School" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-40 bg-stone-200">
                <img src="/hero.jpg" alt="Children at VBS" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

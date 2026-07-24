export default function ChoirAbout() {
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
              A Ministry of<br />
              <span className="text-[#4a8a2a]">Sound & Spirit</span>
            </h2>

            <p className="text-sm text-stone-600 leading-relaxed">
              The Choir of CSI Union Church Podanur has been the heartbeat of
              congregational worship for decades. We are a community of singers, musicians,
              and worshippers united by one purpose — to honour God with the gift of music
              and to lead the church into His presence every time we gather.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              Our repertoire spans traditional hymns, devotional Tamil songs, and
              contemporary praise — woven together with reverence and joy. Every voice
              matters here. Whether trained or untrained, what we seek above all is a
              heart that worships.
            </p>


          </div>

          {/* Right — dark verse card + vision/mission */}
          <div className="flex flex-col gap-5">

            {/* Dark verse card — musical notation framing */}
            <div className="relative rounded-2xl bg-[#0f2310] px-8 py-8 overflow-hidden">

              {/* Background music staff lines */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice">
                  {[30, 50, 70, 90, 110].map((y) => (
                    <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#7ed957" strokeWidth="1" />
                  ))}
                  <ellipse cx="60"  cy="70"  rx="10" ry="7" fill="#7ed957" />
                  <line x1="70"  y1="70"  x2="70"  y2="30"  stroke="#7ed957" strokeWidth="2" />
                  <ellipse cx="130" cy="50"  rx="10" ry="7" fill="#7ed957" />
                  <line x1="140" y1="50"  x2="140" y2="10"  stroke="#7ed957" strokeWidth="2" />
                  <ellipse cx="200" cy="90"  rx="10" ry="7" fill="#7ed957" />
                  <line x1="210" y1="90"  x2="210" y2="50"  stroke="#7ed957" strokeWidth="2" />
                  <ellipse cx="270" cy="70"  rx="10" ry="7" fill="#7ed957" />
                  <line x1="280" y1="70"  x2="280" y2="30"  stroke="#7ed957" strokeWidth="2" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="w-8 h-px bg-[#7ed957] mb-4" />
                <blockquote className="text-white text-lg md:text-xl font-semibold leading-snug italic mb-4">
                  &ldquo;Praise him with the sounding of the trumpet, praise him with
                  the harp and lyre… praise him with singing.&rdquo;
                </blockquote>
                <p className="text-[#7ed957] text-sm font-semibold">Psalm 150:3, 5</p>
              </div>
            </div>


            {/* Photo pair */}
            {/* PLACEHOLDER: Replace both with actual choir rehearsal / performance photos */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden h-40 bg-stone-200">
                <img src="/hero.jpg" alt="Choir rehearsal" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-40 bg-stone-200">
                <img src="/hero.jpg" alt="Choir leading worship" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

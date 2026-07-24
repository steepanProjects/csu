// EventsCollage — a magazine-style editorial collage for special events
// Features a quote banner + asymmetric photo grid

export default function EventsCollage() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-[#0f2310]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#7ed957]">Special Moments</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            A Year in <span className="text-[#7ed957]">Pictures</span>
          </h2>
          <p className="text-sm text-white/50 max-w-xs">
            From Asanam to Christmas, each event is a chapter of our congregation's living story.
          </p>
        </div>

        {/* Collage layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Left — tall featured image */}
          <div className="lg:row-span-2 relative rounded-2xl overflow-hidden min-h-[300px] lg:min-h-0">
            <img src="/hero.jpg" alt="Asanam Festival 2024" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2310]/80 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[#7ed957] text-xs font-bold uppercase tracking-widest">Asanam 2024</span>
              <h3 className="text-white text-lg font-bold mt-1 leading-snug">Annual Festival & 5,000-Person Feeding Programme</h3>
            </div>
          </div>

          {/* Right top — two side-by-side */}
          <div className="relative rounded-2xl overflow-hidden h-56">
            <img src="/hero.jpg" alt="Easter Sunday service" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2310]/70 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[#7ed957] text-[10px] font-bold uppercase tracking-widest">Easter 2024</span>
              <h3 className="text-white text-sm font-semibold mt-0.5">Resurrection Sunday Service</h3>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-56">
            <img src="/hero.jpg" alt="Christmas carol service" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2310]/70 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[#7ed957] text-[10px] font-bold uppercase tracking-widest">Christmas 2023</span>
              <h3 className="text-white text-sm font-semibold mt-0.5">Carol Service & Nativity Drama</h3>
            </div>
          </div>

          {/* Bottom right — quote card + small image */}
          <div className="relative rounded-2xl overflow-hidden bg-[#1a3d1a] flex flex-col justify-between p-7 h-52">
            {/* Background cross motif */}
            <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-40 h-40" fill="#7ed957">
                <rect x="43" y="10" width="14" height="80" />
                <rect x="10" y="35" width="80" height="14" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-6 h-px bg-[#7ed957] mb-4" />
              <blockquote className="text-white text-base font-semibold italic leading-snug">
                &ldquo;I was glad when they said unto me, Let us go into the house of the Lord.&rdquo;
              </blockquote>
              <p className="text-[#7ed957] text-xs font-semibold mt-3">Psalm 122:1</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-52">
            <img src="/hero.jpg" alt="Youth fellowship annual camp" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2310]/70 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[#7ed957] text-[10px] font-bold uppercase tracking-widest">Youth 2024</span>
              <h3 className="text-white text-sm font-semibold mt-0.5">Annual Camp & Retreat</h3>
            </div>
          </div>
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-12 rounded-2xl bg-[#7ed957]/10 border border-[#7ed957]/20 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Share Your Photos</h3>
            <p className="text-white/50 text-sm">
              Attended one of our events? Share your photos with us and be part of our growing gallery.
            </p>
          </div>
          <a
            href="mailto:media@csiunionchurch.org"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7ed957] text-[#0f2310] text-sm font-bold hover:bg-white transition-colors duration-200"
          >
            Submit Photos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

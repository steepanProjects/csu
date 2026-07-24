import Link from 'next/link'

const stats = [
  { value: '60+', label: 'Active Members' },
  { value: '15+', label: 'Years of Ministry' },
  { value: '200+', label: 'Families Served' },
  { value: '12', label: 'Programmes/Year' },
]

export default function WomensFellowshipJoin() {
  return (
    <>
      {/* Stats strip */}
      <section className="py-12 px-6 lg:px-16 bg-[#0f2310]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-[#7ed957] leading-none">{stat.value}</span>
                <span className="text-xs text-white/60 mt-2 font-medium uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-6 lg:px-16 bg-[#f0f9ea]">
        <div className="max-w-3xl mx-auto text-center">

          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="block w-8 h-px bg-[#7ed957]" />
            <span className="text-sm font-semibold text-[#4a8a2a]">Get Involved</span>
            <span className="block w-8 h-px bg-[#7ed957]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 leading-tight">
            Join the Sisterhood
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed max-w-xl mx-auto mb-8">
            Every woman is welcome here. Whether you are seeking community, spiritual growth,
            or a place to serve, our doors are open. Come, be encouraged, and grow together
            in the grace of God.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#4a8a2a] text-white text-sm font-semibold hover:bg-[#7ed957] transition-colors duration-200"
            >
              Contact Us
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/about/the-church"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#4a8a2a] text-[#4a8a2a] text-sm font-semibold hover:bg-[#e8f5e0] transition-colors duration-200"
            >
              Learn About the Church
            </Link>
          </div>

          {/* Meeting info */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: 'Meeting Time',
                value: 'Tuesdays at 6:30 PM',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                label: 'Location',
                value: 'CSI Union Church, Podanur',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338A18.755 18.755 0 0121.75 6.338M2.25 6.338C2.25 15.4 9.716 22.75 18.75 22.75h.75a2.25 2.25 0 002.25-2.25v-1.372a2.25 2.25 0 00-1.628-2.163l-3.228-.969a2.25 2.25 0 00-2.456.84l-.663.994a16.31 16.31 0 01-7.068-7.068l.994-.663a2.25 2.25 0 00.84-2.456l-.969-3.228A2.25 2.25 0 003.622 2.25H2.25" />
                  </svg>
                ),
                label: 'Phone',
                value: '91 81456 46878',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-stone-100">
                <div className="w-9 h-9 rounded-full bg-[#e8f5e0] flex items-center justify-center text-[#4a8a2a] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                  <p className="text-sm font-semibold text-stone-700">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

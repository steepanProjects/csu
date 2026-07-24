import Link from 'next/link'

const stats = [
  { value: '40+',  label: 'Choir Members'      },
  { value: '4',    label: 'Voice Sections'     },
  { value: '50+',  label: 'Years of Singing'   },
  { value: '12+',  label: 'Services Per Year'  },
]

const whatToExpect = [
  {
    heading: 'Weekly Rehearsals',
    body: 'Every Saturday at 5 PM we gather for a structured rehearsal — practising new pieces, refining harmonies, and preparing for upcoming services.',
  },
  {
    heading: 'No Audition Required',
    body: 'We welcome every voice. You do not need formal musical training to join — only a willingness to learn, grow, and offer your voice to God.',
  },
  {
    heading: 'Spiritual Formation',
    body: 'Each rehearsal begins with a brief devotion. The choir is not just a performing group — it is a fellowship shaped by prayer and the Word.',
  },
  {
    heading: 'Serve Every Sunday',
    body: 'As a member you will serve in Sunday morning worship, leading the congregation into the presence of God week after week.',
  },
]

export default function ChoirJoin() {
  return (
    <>
      {/* Stats strip */}
      <section className="py-12 px-6 lg:px-16 bg-[#f0f9ea]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-[#4a8a2a] leading-none">{stat.value}</span>
                <span className="text-xs text-stone-500 mt-2 font-medium uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — text + buttons */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="block w-8 h-px bg-[#7ed957]" />
              <span className="text-sm font-semibold text-[#4a8a2a]">Join the Choir</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight">
              Offer Your Voice.<br />
              <span className="text-[#4a8a2a]">Worship Together.</span>
            </h2>

            <p className="text-sm text-stone-600 leading-relaxed">
              If you love to sing and long to serve your church through music,
              the choir is waiting for you. We are a community of ordinary people
              who have found extraordinary joy in worshipping God together.
            </p>

            {/* What to expect — compact list */}
            <div className="flex flex-col gap-3">
              {whatToExpect.map((item) => (
                <div
                  key={item.heading}
                  className="flex gap-4 items-start bg-[#f0f9ea] rounded-xl px-5 py-4 border border-[#7ed957]/10"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7ed957] mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-stone-800 mb-0.5">{item.heading}</p>
                    <p className="text-xs text-stone-500 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#4a8a2a] text-white text-sm font-semibold hover:bg-[#7ed957] transition-colors duration-200"
              >
                Get in Touch
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/about/the-church"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#4a8a2a] text-[#4a8a2a] text-sm font-semibold hover:bg-[#f0f9ea] transition-colors duration-200"
              >
                About Our Church
              </Link>
            </div>
          </div>

          {/* Right — contact info + closing verse */}
          <div className="flex flex-col gap-5">

            {/* Contact info */}
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: 'Weekly Rehearsal',   value: 'Saturday · 5:00 PM – 7:00 PM' },
                { label: 'Pre-Service Warm-up', value: 'Sunday · Before Morning Service' },
                { label: 'Location',            value: 'CSI Union Church, Podanur' },
                {
                  label: 'Choir Contact',
                  // PLACEHOLDER: Replace with actual choir contact number
                  value: '+91 [Choir Contact Number]',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 bg-[#f0f9ea] rounded-xl px-5 py-4 border border-[#7ed957]/10"
                >
                  <div className="w-2 h-8 rounded-full bg-[#7ed957] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-stone-700">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing verse card */}
            <div className="relative rounded-2xl bg-[#0f2310] px-8 py-8 overflow-hidden">
              {/* Staff decoration */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
                <svg className="w-full h-full" viewBox="0 0 400 140" preserveAspectRatio="xMidYMid slice">
                  {[28, 44, 60, 76, 92].map((y) => (
                    <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#7ed957" strokeWidth="1" />
                  ))}
                </svg>
              </div>
              <div className="relative z-10">
                <div className="w-8 h-px bg-[#7ed957] mb-4" />
                <blockquote className="text-white text-base font-semibold leading-relaxed italic mb-3">
                  &ldquo;Let everything that has breath praise the LORD.&rdquo;
                </blockquote>
                <p className="text-[#7ed957] text-sm font-semibold">Psalm 150:6</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

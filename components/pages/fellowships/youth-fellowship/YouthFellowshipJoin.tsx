import Link from 'next/link'

const stats = [
  { value: '80+',  label: 'Active Members'    },
  { value: '15+',  label: 'Years of Ministry' },
  { value: '3',    label: 'Age Groups'        },
  { value: '12+',  label: 'Events Per Year'   },
]

const meetingInfo = [
  {
    label: 'Weekly Bible Study',
    value: 'Fridays · 6:00 PM',
  },
  {
    label: 'Monthly Worship Night',
    value: 'Last Saturday of the Month',
  },
  {
    label: 'Location',
    value: 'CSI Union Church, Podanur',
  },
  {
    label: 'Contact',
    // PLACEHOLDER: Replace with actual youth fellowship contact number
    value: '+91 [Contact Number]',
  },
]

export default function YouthFellowshipJoin() {
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

      {/* CTA — for youth */}
      <section className="py-20 px-6 lg:px-16 bg-[#e8f5e0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — text + buttons */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="block w-8 h-px bg-[#7ed957]" />
              <span className="text-sm font-semibold text-[#4a8a2a]">Get Involved</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight">
              Your Faith.<br />
              <span className="text-[#4a8a2a]">Your Generation.</span>
            </h2>

            <p className="text-sm text-stone-600 leading-relaxed">
              Whether you are just beginning to explore faith or have grown up in the
              church, there is a place for you here. The Youth Fellowship is not a
              programme you attend — it is a community you belong to.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              Walk in on a Friday evening, join us for a retreat, or show up for
              a sports day. You are welcome exactly as you are, and we would love
              to journey alongside you.
            </p>

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
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#4a8a2a] text-[#4a8a2a] text-sm font-semibold hover:bg-white transition-colors duration-200"
              >
                About Our Church
              </Link>
            </div>
          </div>

          {/* Right — meeting info + photo */}
          <div className="flex flex-col gap-5">

            <div className="grid grid-cols-1 gap-3">
              {meetingInfo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-stone-100"
                >
                  <div className="w-2 h-8 rounded-full bg-[#7ed957] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-stone-700">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Photo placeholder */}
            <div className="rounded-2xl overflow-hidden h-52 bg-stone-200">
              {/* PLACEHOLDER: Replace with a youth fellowship group photo */}
              {/* Suggested: Large group shot at a retreat, event, or after service */}
              <img
                src="/hero.jpg"
                alt="Youth Fellowship group"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

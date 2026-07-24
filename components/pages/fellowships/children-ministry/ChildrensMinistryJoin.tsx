import Link from 'next/link'

const stats = [
  { value: '60+', label: 'Children Enrolled' },
  { value: '10+', label: 'Dedicated Teachers' },
  { value: '20+', label: 'Years of Ministry' },
  { value: '4',   label: 'Age Groups' },
]

const meetingInfo = [
  {
    label: 'Sunday School',
    value: 'Sundays · 9:00 AM',
  },
  {
    label: 'Location',
    value: 'CSI Union Church, Podanur',
  },
  {
    label: 'Contact',
    // PLACEHOLDER: Replace with actual children's ministry contact number
    value: '+91 [Contact Number]',
  },
]

export default function ChildrensMinistryJoin() {
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

      {/* CTA — for parents */}
      <section className="py-20 px-6 lg:px-16 bg-[#e8f5e0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — text + actions */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="block w-8 h-px bg-[#7ed957]" />
              <span className="text-sm font-semibold text-[#4a8a2a]">For Parents</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight">
              Bring Your Child Into <br />
              <span className="text-[#4a8a2a]">God&apos;s Family</span>
            </h2>

            <p className="text-sm text-stone-600 leading-relaxed">
              Every child is welcome here — whether they have grown up in the church or are
              walking through our doors for the very first time. We would love to walk
              alongside your family and help your children fall in love with Jesus.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              Simply bring your child on a Sunday morning and our teachers will take care of
              the rest. No prior registration needed — just come as you are.
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

          {/* Right — meeting info cards + image */}
          <div className="flex flex-col gap-5">

            {/* Meeting info cards */}
            <div className="grid grid-cols-1 gap-3">
              {meetingInfo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-stone-100"
                >
                  {/* Colour dot as a simple non-icon marker */}
                  <div className="w-2 h-8 rounded-full bg-[#7ed957] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-stone-700">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image placeholder */}
            <div className="rounded-2xl overflow-hidden h-52 bg-stone-200">
              {/* PLACEHOLDER: Replace with a photo of children and parents at church */}
              {/* Suggested: A warm group shot of families, or children leaving Sunday School */}
              <img
                src="/hero.jpg"
                alt="Families at Children's Ministry"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

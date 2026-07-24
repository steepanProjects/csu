'use client'

import { useInView } from '@/hooks/useInView'

const causes = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Church Construction',
    description:
      'We are building a permanent 7,000 sq. ft. church to serve our growing congregation and the surrounding villages. Every contribution brings the building one step closer.',
    accent: '#4a8a2a',
    bg: '#e8f5e0',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: 'Asanam Festival & Feeding',
    description:
      "Each year, our Asanam Festival gathers thousands from nearby villages. A large-scale feeding programme nourishes around 5,000 people — a powerful act of love in Christ's name.",
    accent: '#b45309',
    bg: '#fef3c7',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'Worship & Ministry',
    description:
      "Your giving sustains Sunday worship, children's ministry, youth programmes, Bible study, and the pastoral care of our congregation and surrounding communities.",
    accent: '#0369a1',
    bg: '#e0f2fe',
  },
]

export default function WhyGive() {
  const [ref, visible] = useInView(0.1)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6 lg:px-16 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div
          className="flex items-center gap-3 mb-3 transition-all duration-600 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-20px)',
          }}
        >
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">Your gift at work</span>
        </div>

        <h2
          className="text-3xl md:text-4xl font-bold text-stone-800 mb-10 transition-all duration-600 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-10px)',
            transitionDelay: visible ? '80ms' : '0ms',
          }}
        >
          Where Your Giving <span className="text-[#4a8a2a]">Goes</span>
        </h2>

        {/* Cards — stagger in */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {causes.map((cause, i) => (
            <div
              key={cause.title}
              className="rounded-2xl p-7 flex flex-col gap-5 transition-all duration-600 ease-out"
              style={{
                backgroundColor: cause.bg,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transitionDelay: visible ? `${160 + i * 120}ms` : '0ms',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${cause.accent}18`, color: cause.accent }}
              >
                {cause.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-800 mb-2">{cause.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{cause.description}</p>
              </div>
              <div className="mt-auto h-1 rounded-full w-12" style={{ backgroundColor: cause.accent }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

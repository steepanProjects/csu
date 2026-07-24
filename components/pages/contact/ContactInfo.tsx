'use client'

import { useInView } from '@/hooks/useInView'

export default function ContactInfo() {
  const [ref, visible] = useInView(0.1)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6 lg:px-16 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-2xl bg-[#e8f5e0] px-8 py-10 md:px-12 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* Left — heading: slide from left */}
            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-24px)',
                transitionDelay: visible ? '150ms' : '0ms',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-8 h-px bg-[#7ed957]" />
                <span className="text-sm font-semibold text-[#4a8a2a]">Reach us</span>
              </div>
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Get in Touch</h2>
              <p className="text-sm text-stone-600 leading-relaxed max-w-sm">
                Our doors are open every Sunday. For pastoral care or general enquiries,
                call or write to us anytime.
              </p>
            </div>

            {/* Right — contact items: each stagger in */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-[#4a8a2a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338A18.755 18.755 0 0121.75 6.338M2.25 6.338C2.25 15.4 9.716 22.75 18.75 22.75h.75a2.25 2.25 0 002.25-2.25v-1.372a2.25 2.25 0 00-1.628-2.163l-3.228-.969a2.25 2.25 0 00-2.456.84l-.663.994a16.31 16.31 0 01-7.068-7.068l.994-.663a2.25 2.25 0 00.84-2.456l-.969-3.228A2.25 2.25 0 003.622 2.25H2.25" />
                    </svg>
                  ),
                  label: 'Phone',
                  content: <><a href="tel:+918145646878" className="text-stone-700 font-semibold text-sm hover:text-[#4a8a2a] transition-colors">+91 81456 46878</a><p className="text-xs text-stone-500 mt-0.5">Mon – Sat · 9 AM to 6 PM</p></>,
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-[#4a8a2a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: 'Email',
                  content: <a href="mailto:csichurchPodanur@gmail.com" className="text-stone-700 font-semibold text-sm hover:text-[#4a8a2a] transition-colors break-all">csichurchPodanur@gmail.com</a>,
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-[#4a8a2a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: 'Address',
                  content: <p className="text-stone-700 font-semibold text-sm leading-relaxed">Podanur, Alandurai–Karunya Nagar<br />Coimbatore 641 023, Tamil Nadu</p>,
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-[#4a8a2a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: 'Service Times',
                  content: <><p className="text-stone-700 font-semibold text-sm">Sunday Worship · 9:00 AM</p><p className="text-stone-500 text-xs mt-0.5">Bible Study · Wednesday 6:30 PM</p></>,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 transition-all duration-500 ease-out"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(20px)',
                    transitionDelay: visible ? `${250 + i * 80}ms` : '0ms',
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

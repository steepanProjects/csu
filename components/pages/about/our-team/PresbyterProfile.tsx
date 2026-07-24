'use client'

import { useInView } from '@/hooks/useInView'

export default function PresbyterProfile() {
  const [ref, visible] = useInView(0.1)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6 lg:px-16 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — text: fade + slide from left */}
          <div
            className="flex flex-col gap-7 transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-40px)',
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight">
              Meet our Presbyter
            </h2>

            <div>
              <h3 className="text-base font-bold text-stone-800 mb-2">Ministerial Profile</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Rev. Christopher Rajendran is a dedicated servant of God with over three decades
                of spiritual leadership and pastoral experience within the Church of South India
                (CSI). His ministry is marked by a deep commitment to scripture, pastoral care,
                and community transformation through the love and teachings of Christ.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-stone-800 mb-2">Educational Qualifications</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Bachelor of Divinity – Senate of Serampore University, India (1993)<br />
                Bachelor of Science – Madras University, India (1982)<br />
                Master of Science in Applied Psychology – Bharathiar University, India<br /><br />
                This diverse academic background has equipped Rev. Rajendran with both
                theological depth and a practical understanding of human behavior, enriching
                his pastoral ministry.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-stone-800 mb-2">Ministerial Journey</h3>
              <div className="text-sm text-stone-600 leading-relaxed space-y-3">
                <p>
                  <span className="font-semibold text-stone-700">Priest – CSI Coimbatore Diocese (1993–2017)</span><br />
                  Over 24 years of dedicated service as Presbyter-In-Charge and Chairman across
                  various Tamil and English congregations in Tamil Nadu, India.
                </p>
                <p>
                  <span className="font-semibold text-stone-700">Presbyter &amp; Chairman – CSI Tamil Parish, Al Ain, UAE (2017–2020)</span><br />
                  Rev. Rajendran served the diaspora community with zeal, fostering unity and
                  spiritual enrichment among Tamil Christians in the Gulf region.
                </p>
                <p>
                  <span className="font-semibold text-stone-700">Presbyter-In-Charge &amp; Chairman – CSI Union Church, Podanur (2020–Present)</span><br />
                  Currently leading the congregation with prayerful leadership, pastoral care, and
                  a vision to nurture a Christ-centered, service-oriented community.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-stone-800 mb-2">A Heart for Ministry</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Rev. Rajendran is known for his compassionate pastoral care, powerful preaching,
                and ability to connect deeply with people from all walks of life.
              </p>
            </div>

            <div className="pt-2 border-t border-stone-100">
              <p className="text-lg font-bold text-stone-800">Rev. Christopher Rajendran</p>
              <p className="text-sm text-stone-500 mt-0.5">Presbyter &amp; Chairman i/c</p>
              <div className="flex items-center gap-3 mt-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-[#e8f5e0] flex items-center justify-center text-[#4a8a2a] hover:bg-[#7ed957] hover:text-white transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right — photo: fade + slide from right, delayed */}
          <div
            className="flex justify-center lg:justify-end transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(40px)',
              transitionDelay: visible ? '200ms' : '0ms',
            }}
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 rounded-2xl border-2 border-[#7ed957]/40" />
              <div className="relative rounded-2xl overflow-hidden bg-stone-100 aspect-[4/5]">
                <img
                  src="/hero.jpg"
                  alt="Rev. Christopher Rajendran — Presbyter & Chairman i/c"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0f2310]/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                  <p className="text-white font-bold text-sm leading-tight">Rev. Christopher Rajendran</p>
                  <p className="text-[#7ed957] text-xs font-semibold tracking-wide mt-0.5">Presbyter &amp; Chairman i/c</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

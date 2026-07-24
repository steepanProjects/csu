'use client'

import { useInView } from '@/hooks/useInView'

export default function BishopProfile() {
  const [ref, visible] = useInView(0.1)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6 lg:px-16 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — text: slide from left */}
          <div
            className="flex flex-col gap-6 transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-40px)',
            }}
          >
            <div className="relative">
              <img
                src="/leaves.svg"
                aria-hidden="true"
                className="absolute -top-8 -left-10 w-24 h-24 opacity-10 pointer-events-none select-none"
                style={{ transform: 'rotate(15deg)' }}
              />
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight">
                Meet Our Lead Bishop
              </h2>
            </div>

            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Rt. Rev. S. Prince Calvin, B.A., B.D., M.Th., is a devoted servant of the
                Church of South India with more than three decades of rich pastoral,
                administrative, and academic experience. He holds a Bachelor's degree in
                English Literature from PSG College of Arts &amp; Science, Coimbatore, and has
                completed his theological education with a Bachelor of Divinity from Union
                Biblical Seminary, Pune, and a Master of Theology from Tamilnadu Theological
                Seminary, Madurai.
              </p>
              <p>
                He currently serves as the Honorary Secretary of the CSI Coimbatore Diocese
                and is an active member of the CSI Synod Working Committee and the CSI Synod
                Executive Committee. Over the years, he has held several key leadership
                positions, including Former Secretary of CSI Bishop Appasamy College of Arts
                &amp; Science, Secretary of CSI Bishop Appasamy College of Education,
                Administrative Secretary of CSI College of Engineering, Ketti in the Nilgiris,
                Correspondent of CSI Secretarial Training College, Coimbatore, and Director of
                the CSI Centre for Communication of the CSI Coimbatore Diocese.
              </p>
              <p>
                His pastoral ministry spans numerous congregations, beginning with CSI Holy
                Trinity Church, Yercaud (1992–1993), followed by CSI Immanuel Church,
                Sathyamangalam (1993–1996), CSI Annur Pastorate (1996–1999), CSI Avinashi
                Pastorate (2000–2009), CSI Tiruppur Rural Pastorate (2009–2013), and CSI
                Tiruppur Urban Pastorate (2013–2018).
              </p>
              <p>
                Under his visionary leadership, numerous church buildings and educational
                institutions have been constructed, and many lives have been touched through
                dedicated outreach programmes and community service. His commitment to
                servant leadership continues to inspire the entire diocese.
              </p>
            </div>

            {/* Tags — stagger in */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                'CSI Coimbatore Diocese',
                'Honorary Secretary',
                'M.Th — Tamilnadu Theological Seminary',
                'B.D — Union Biblical Seminary',
              ].map((tag, i) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#e8f5e0] text-[#4a8a2a] text-xs font-semibold transition-all duration-500 ease-out"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(10px)',
                    transitionDelay: visible ? `${400 + i * 80}ms` : '0ms',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — photo: slide from right, delayed */}
          <div
            className="flex flex-col items-center gap-6 transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(40px)',
              transitionDelay: visible ? '150ms' : '0ms',
            }}
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 rounded-2xl border-2 border-[#7ed957]/40" />
              <div className="relative rounded-2xl overflow-hidden bg-stone-100 aspect-[3/4]">
                <img
                  src="/hero.jpg"
                  alt="Rt. Rev. S. Prince Calvin — Bishop, CSI Coimbatore Diocese"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f2310]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                  <p className="text-white font-bold text-base leading-tight">Rt. Rev. S. Prince Calvin</p>
                  <p className="text-[#7ed957] text-xs font-semibold tracking-wide mt-0.5">Bishop — CSI Coimbatore Diocese</p>
                </div>
              </div>
            </div>

            <blockquote className="max-w-sm text-center">
              <p className="text-sm text-stone-500 italic leading-relaxed">
                "Serving the Church of South India with faith, devotion, and a heart for communities."
              </p>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { useInView } from '@/hooks/useInView'

export default function AboutCard() {
  const [ref, visible] = useInView(0.15)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6 lg:px-16 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Card — fade + scale up */}
        <div
          className="rounded-2xl bg-[#e8f5e0] px-8 py-10 md:px-12 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Left — text */}
            <div
              className="flex flex-col gap-5 transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-24px)',
                transitionDelay: visible ? '150ms' : '0ms',
              }}
            >
              <h2 className="text-3xl font-bold text-stone-800">About us</h2>
              <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
                <p>
                  As a congregation of the C.S.I. Church, we have been worshipping our Lord God
                  in a modest, temporary structure in the year 2005, located in the western end
                  zone of Coimbatore District, in a village called Podanur. Through the
                  pure grace of God, in the year 2006, some of our believers united to purchase a
                  piece of land measuring 48 cents in Podanur, which was graciously gifted
                  to us for the purpose of building a permanent church, with plans to expand our
                  facilities further.
                </p>
                <p>
                  Our congregation is a living testimony of God's grace and faithfulness. We are
                  here to share and exemplify a life transformed by His love, reaching out to the
                  surrounding villages and communities. Annually, we organize the Asanam Festival,
                  a significant event that brings together people from various neighboring villages
                  and beyond. During this festival, we also conduct a large-scale feeding program,
                  nourishing around 5,000 people with love and compassion, demonstrating the love
                  of Christ in practical ways.
                </p>
              </div>
              <div>
                <Link
                  href="/history/church-history"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4a8a2a] text-white text-sm font-semibold hover:bg-[#7ed957] transition-colors duration-200"
                >
                  Know More
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Right — photo collage: slide from right */}
            <div
              className="flex flex-col gap-3 transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(24px)',
                transitionDelay: visible ? '250ms' : '0ms',
              }}
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden h-40">
                  <img src="/hero.jpg" alt="Church exterior" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden h-40">
                  <img src="/hero.jpg" alt="Church steeple" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="rounded-xl overflow-hidden h-48">
                <img src="/hero.jpg" alt="Church aerial view" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

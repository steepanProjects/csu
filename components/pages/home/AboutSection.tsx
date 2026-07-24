'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/useInView'

export default function AboutSection() {
  const [ref, visible] = useInView(0.15)

  return (
    <section
      id="about-section"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 lg:py-20">

          {/* Left — About text: fade + slide from left */}
          <div
            className="max-w-xl transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-40px)',
            }}
          >
            <h2 className="text-4xl font-bold text-stone-800 mb-6">CSI Union Church</h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                As a faithful congregation of the Church of South India (CSI), we have been
                worshipping our Lord God in a small, temporarily built church in the West End Zone
                of Coimbatore District, at Podanur village, for the past six years. By the
                pure grace of God, in 2006, a group of dedicated believers came together, purchased
                48 cents of land in Podanur, and generously gifted it to build a larger,
                permanent church. Since then, we have been diligently planning to construct a
                spacious church of approximately 7,000 square feet to better serve our growing
                community.
              </p>
              <p>
                Over time, our congregation has steadily grown, welcoming worshippers from nearby
                villages such as Semmedu, Iruttupallam, Thombilipalayam, Alandurai, Kallipalayam,
                Nadegoundenpudur, Boluvampatti, Jahir Naickenpalayam, Thennamanallur,
                Pooluvapatti, Mathampatti, and even the staff, families, and friends of Karunya
                University. To accommodate the increasing number of attendees, a temporary thatched
                shed was added in front of the building, ensuring everyone has a place to worship.
              </p>
            </div>
          </div>

          {/* Right — illustration: fade + slide from right, delayed */}
          <div
            className="hidden lg:flex items-end justify-end pb-4 transition-all duration-700 ease-out delay-200"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(40px)',
              transitionDelay: visible ? '200ms' : '0ms',
            }}
          >
            <div className="relative w-80 h-72">
              <Image
                src="/aboutCross.svg"
                alt="CSI Union Church logo"
                width={450}
                height={450}
                priority
                className="drop-shadow-md"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

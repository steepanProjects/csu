'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

const images = [
  { src: '/hero.jpg', alt: 'Christmas celebration with congregation',  wide: true  },
  { src: '/hero.jpg', alt: 'Procession through the village road',       wide: false },
  { src: '/hero.jpg', alt: 'Community meal gathering',                  wide: false },
  { src: '/hero.jpg', alt: 'Outdoor fellowship event',                  wide: true  },
  { src: '/hero.jpg', alt: 'Interior of the church during service',     wide: false },
  { src: '/hero.jpg', alt: 'Candlelight service',                       wide: false },
  { src: '/hero.jpg', alt: 'Youth fellowship worship night',            wide: true  },
  { src: '/hero.jpg', alt: "Women's fellowship meeting",                wide: false },
  { src: '/hero.jpg', alt: 'Sunday morning service',                    wide: false },
  { src: '/hero.jpg', alt: 'Community outreach programme',              wide: true  },
  { src: '/hero.jpg', alt: 'Choir rehearsal',                           wide: false },
  { src: '/hero.jpg', alt: 'Harvest thanksgiving service',              wide: false },
]

const topRow    = images.filter((_, i) => i % 2 === 0)
const bottomRow = images.filter((_, i) => i % 2 !== 0)
const PER_PAGE  = 4

export default function ImageCarousel() {
  const [page, setPage] = useState(0)
  const [ref, visible] = useInView(0.1)

  const totalPages = Math.ceil(topRow.length / PER_PAGE)
  const prev = () => setPage((p) => Math.max(0, p - 1))
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1))

  const start = page * PER_PAGE
  const visibleTop    = topRow.slice(start, start + PER_PAGE)
  const visibleBottom = bottomRow.slice(start, start + PER_PAGE)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative w-full bg-white pt-10 pb-6 overflow-hidden"
    >
      {/* Header — slide down */}
      <div
        className="px-14 mb-6 transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-4xl font-bold text-stone-800 leading-tight">Glimpse</h2>
          <p className="text-xs font-semibold tracking-widest uppercase text-stone-500 leading-relaxed">
            CSI Union Church — Podanur Pastorate
          </p>
        </div>
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        disabled={page === 0}
        aria-label="Previous images"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-stone-600 hover:text-[#7ed957] hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
      >
        ←
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        disabled={page >= totalPages - 1}
        aria-label="Next images"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-stone-600 hover:text-[#7ed957] hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
      >
        →
      </button>

      {/* Collage grid — fade + scale */}
      <div
        className="px-14 flex flex-col gap-1 transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.97)',
          transitionDelay: visible ? '150ms' : '0ms',
        }}
      >
        {/* Top row */}
        <div className="flex gap-1 h-52 md:h-60">
          {visibleTop.map((img, i) => (
            <div
              key={`top-${start + i}`}
              className="relative overflow-hidden transition-all duration-500"
              style={{ flex: img.wide ? '2 1 0%' : '1 1 0%' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                draggable={false}
              />
            </div>
          ))}
          {Array.from({ length: Math.max(0, PER_PAGE - visibleTop.length) }).map((_, i) => (
            <div key={`top-empty-${i}`} style={{ flex: '1 1 0%' }} className="bg-stone-100" />
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex gap-1 h-52 md:h-60">
          {visibleBottom.map((img, i) => (
            <div
              key={`bot-${start + i}`}
              className="relative overflow-hidden transition-all duration-500"
              style={{ flex: img.wide ? '2 1 0%' : '1 1 0%' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                draggable={false}
              />
            </div>
          ))}
          {Array.from({ length: Math.max(0, PER_PAGE - visibleBottom.length) }).map((_, i) => (
            <div key={`bot-empty-${i}`} style={{ flex: '1 1 0%' }} className="bg-stone-100" />
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-3">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            aria-label={`Go to page ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === page ? 'w-4 h-2 bg-[#7ed957]' : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

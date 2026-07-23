'use client'

import { useRef, useState } from 'react'

const slides = [
  {
    label: 'About Us',
    bg: 'bg-stone-300',
  },
  {
    label: 'Welcome',
    bg: 'bg-stone-400',
  },
  {
    label: 'Newsletter',
    bg: 'bg-stone-500',
  },
  {
    label: 'Our History',
    bg: 'bg-stone-300',
  },
  {
    label: 'Fellowships',
    bg: 'bg-stone-400',
  },
]

const VISIBLE = 3 // cards visible at a time

export default function ExploreUs() {
  const [current, setCurrent] = useState(0)
  const total = slides.length
  const maxIndex = total - VISIBLE

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1))

  // Dot indicators — one per possible "page"
  const dotCount = maxIndex + 1

  return (
    <section className="relative bg-[#faf7f4] py-16 px-6 lg:px-16 overflow-hidden">

      {/* Decorative wheat / leaf motif — bottom left */}
      <div className="absolute bottom-0 left-0 w-40 h-64 opacity-10 pointer-events-none select-none">
        <svg viewBox="0 0 160 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#7ed957]">
          <path d="M80 250 Q80 180 60 130 Q40 80 20 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M80 250 Q80 180 100 130 Q120 80 140 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          {[40,70,100,130,160,190].map((y, i) => (
            <ellipse key={i} cx={80 - (i % 2 === 0 ? 18 : -18)} cy={y} rx="14" ry="8"
              transform={`rotate(${i % 2 === 0 ? -30 : 30} ${80 - (i % 2 === 0 ? 18 : -18)} ${y})`}
              stroke="currentColor" strokeWidth="1.5"/>
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex items-start justify-between mb-10">
          <div className="flex flex-col gap-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="block w-8 h-px bg-[#7ed957]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7ed957]">
                Who Are We
              </span>
            </div>
            {/* Title + subtitle side by side on md+ */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mt-1">
              <h2 className="text-4xl font-bold text-stone-800 leading-tight">Explore Us</h2>
              <p className="text-xs font-semibold tracking-widest uppercase text-stone-500 max-w-[200px] leading-relaxed">
                CSI Christ Church Mathuvarayapuram Pastorate
              </p>
            </div>
          </div>

          {/* Prev / Next arrows */}
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 hover:border-[#7ed957] hover:text-[#7ed957] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            >
              ←
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 hover:border-[#7ed957] hover:text-[#7ed957] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            >
              →
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 20px / ${VISIBLE})))` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex-shrink-0 relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{ width: `calc(100% / ${VISIBLE} - ${(VISIBLE - 1) * 20 / VISIBLE}px)`, aspectRatio: '3/4' }}
              >
                {/* Placeholder image background */}
                <div className={`absolute inset-0 ${slide.bg} transition-transform duration-500 group-hover:scale-105`}>
                  {/* Placeholder cross icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <span className="text-white text-8xl font-black select-none">✝</span>
                  </div>
                  {/* Placeholder label top-right */}
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded px-2 py-0.5">
                    <span className="text-white text-[10px] font-medium">Image Placeholder</span>
                  </div>
                </div>

                {/* Bottom label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-4">
                  <span className="text-white text-base font-semibold">{slide.label}</span>
                </div>

                {/* Green accent bar on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#7ed957] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-4 h-4 bg-[#7ed957]'
                  : 'w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

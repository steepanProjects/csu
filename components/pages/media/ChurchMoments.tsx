'use client'

// Church Moments — a horizontal strip of themed "moment cards"
// Each card highlights a category of photos with a distinctive look

import { useState } from 'react'
import CollageModal from './CollageModal'

interface MomentCategory {
  label: string
  description: string
  count: string
  accent: string
  bg: string
  images: string[]
}

const moments: MomentCategory[] = [
  {
    label: 'Sunday Worship',
    description: 'Weekly gatherings in song, scripture, and prayer.',
    count: '42 photos',
    accent: '#4a8a2a',
    bg: '#e8f5e0',
    images: ['/hero.jpg', '/hero.jpg', '/hero.jpg'],
  },
  {
    label: 'Festivals & Events',
    description: 'Asanam, Christmas, Easter, and special celebrations.',
    count: '58 photos',
    accent: '#b45309',
    bg: '#fef3c7',
    images: ['/hero.jpg', '/hero.jpg', '/hero.jpg'],
  },
  {
    label: 'Fellowship Activities',
    description: 'Men, women, youth, and children in community.',
    count: '31 photos',
    accent: '#0369a1',
    bg: '#e0f2fe',
    images: ['/hero.jpg', '/hero.jpg', '/hero.jpg'],
  },
  {
    label: 'Outreach & Service',
    description: 'Feeding programs, village missions, and charity work.',
    count: '24 photos',
    accent: '#7c3aed',
    bg: '#f3e8ff',
    images: ['/hero.jpg', '/hero.jpg', '/hero.jpg'],
  },
]

export default function ChurchMoments() {
  const [active, setActive] = useState<MomentCategory | null>(null)

  return (
    <section className="py-20 px-6 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">By Category</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight mb-10">
          Stories Told in <span className="text-[#4a8a2a]">Frames</span>
        </h2>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {moments.map((moment) => (
            <div
              key={moment.label}
              className="group rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundColor: moment.bg }}
            >
              {/* Stacked photo collage */}
              <div className="relative h-44 px-4 pt-4">
                {/* Back */}
                <div className="absolute left-8 top-5 w-[calc(100%-5rem)] h-36 rounded-xl overflow-hidden shadow-md rotate-3 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-y-1">
                  <img src={moment.images[2]} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Mid */}
                <div className="absolute left-6 top-4 w-[calc(100%-4rem)] h-36 rounded-xl overflow-hidden shadow-md -rotate-2 transition-transform duration-500 group-hover:-rotate-4 group-hover:translate-x-1">
                  <img src={moment.images[1]} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Front */}
                <div className="absolute left-4 top-3 w-[calc(100%-3rem)] h-36 rounded-xl overflow-hidden shadow-lg rotate-0 transition-transform duration-500 group-hover:rotate-1 group-hover:-translate-y-1">
                  <img src={moment.images[0]} alt={`${moment.label} photo`} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Info */}
              <div className="px-5 pb-5 pt-8">
                <div
                  className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2"
                  style={{ backgroundColor: `${moment.accent}18`, color: moment.accent }}
                >
                  {moment.count}
                </div>
                <h3 className="text-base font-bold text-stone-800 mb-1">{moment.label}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{moment.description}</p>

                {/* View all button */}
                <button
                  onClick={() => setActive(moment)}
                  className="mt-4 flex items-center gap-1 text-xs font-semibold transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
                  style={{ color: moment.accent }}
                  aria-label={`View all photos in ${moment.label}`}
                >
                  View all
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collage popup modal */}
      {active && (
        <CollageModal
          label={active.label}
          accent={active.accent}
          bg={active.bg}
          images={active.images}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  )
}

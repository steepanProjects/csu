'use client'

import { useState, useEffect } from 'react'
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

export default function ImageCarousel() {
  const [page, setPage] = useState(0)
  const [ref, visible] = useInView(0.1)
  const [isMobile, setIsMobile] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const PER_PAGE = isMobile ? 2 : 4
  const totalPages = Math.ceil(topRow.length / PER_PAGE)
  
  const prev = () => {
    if (isAnimating || page === 0) return
    setIsAnimating(true)
    setPage((p) => Math.max(0, p - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }
  
  const next = () => {
    if (isAnimating || page >= totalPages - 1) return
    setIsAnimating(true)
    setPage((p) => Math.min(totalPages - 1, p + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const start = page * PER_PAGE
  const visibleTop    = topRow.slice(start, start + PER_PAGE)
  const visibleBottom = bottomRow.slice(start, start + PER_PAGE)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative w-full bg-white pt-8 md:pt-10 pb-6 overflow-hidden"
    >
      {/* Header — slide down */}
      <div
        className="px-4 md:px-14 mb-4 md:mb-6 transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight">Glimpse</h2>
          <p className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-stone-500 leading-relaxed">
            CSI Union Church — Podanur Pastorate
          </p>
        </div>
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        disabled={page === 0}
        aria-label="Previous images"
        className="absolute left-1 md:left-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 shadow-lg flex items-center justify-center text-stone-700 hover:text-[#7ed957] hover:bg-white hover:shadow-xl disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200 text-xl md:text-2xl font-bold"
        style={{ top: 'calc(50% + 1rem)' }}
      >
        ←
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        disabled={page >= totalPages - 1}
        aria-label="Next images"
        className="absolute right-1 md:right-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 shadow-lg flex items-center justify-center text-stone-700 hover:text-[#7ed957] hover:bg-white hover:shadow-xl disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200 text-xl md:text-2xl font-bold"
        style={{ top: 'calc(50% + 1rem)' }}
      >
        →
      </button>

      {/* Collage grid — fade + scale */}
      <div
        className="px-4 md:px-14 flex flex-col gap-1 transition-all duration-700 ease-out relative"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.97)',
          transitionDelay: visible ? '150ms' : '0ms',
        }}
      >
        {/* Top row */}
        <div className="relative h-40 sm:h-48 md:h-60 overflow-hidden">
          <div 
            className="flex gap-1 transition-all duration-500 ease-out will-change-transform"
            style={{ 
              transform: `translateX(calc(-${page * (100 / totalPages)}%))`,
              width: `${totalPages * 100}%`
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIdx) => {
              const pageStart = pageIdx * PER_PAGE
              const pageImages = topRow.slice(pageStart, pageStart + PER_PAGE)
              return (
                <div 
                  key={`top-page-${pageIdx}`}
                  className="flex gap-1 flex-shrink-0"
                  style={{ width: `${100 / totalPages}%` }}
                >
                  {pageImages.map((img, i) => (
                    <div
                      key={`top-${pageStart + i}`}
                      className="relative overflow-hidden"
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
                  {/* Fill empty slots */}
                  {Array.from({ length: Math.max(0, PER_PAGE - pageImages.length) }).map((_, i) => (
                    <div key={`top-empty-${pageIdx}-${i}`} style={{ flex: '1 1 0%' }} className="bg-stone-100" />
                  ))}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom row */}
        <div className="relative h-40 sm:h-48 md:h-60 overflow-hidden">
          <div 
            className="flex gap-1 transition-all duration-500 ease-out will-change-transform"
            style={{ 
              transform: `translateX(calc(-${page * (100 / totalPages)}%))`,
              width: `${totalPages * 100}%`
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIdx) => {
              const pageStart = pageIdx * PER_PAGE
              const pageImages = bottomRow.slice(pageStart, pageStart + PER_PAGE)
              return (
                <div 
                  key={`bot-page-${pageIdx}`}
                  className="flex gap-1 flex-shrink-0"
                  style={{ width: `${100 / totalPages}%` }}
                >
                  {pageImages.map((img, i) => (
                    <div
                      key={`bot-${pageStart + i}`}
                      className="relative overflow-hidden"
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
                  {/* Fill empty slots */}
                  {Array.from({ length: Math.max(0, PER_PAGE - pageImages.length) }).map((_, i) => (
                    <div key={`bot-empty-${pageIdx}-${i}`} style={{ flex: '1 1 0%' }} className="bg-stone-100" />
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-3 md:mt-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (!isAnimating && i !== page) {
                setIsAnimating(true)
                setPage(i)
                setTimeout(() => setIsAnimating(false), 500)
              }
            }}
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

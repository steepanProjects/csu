'use client'

import { useEffect, useRef, useState } from 'react'

const slides = [
  { label: 'About Us',    bg: 'bg-stone-300' },
  { label: 'Welcome',     bg: 'bg-stone-400' },
  { label: 'Newsletter',  bg: 'bg-stone-500' },
  { label: 'Our History', bg: 'bg-stone-300' },
  { label: 'Fellowships', bg: 'bg-stone-400' },
]

export default function ExploreUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  // scrollProgress: 0 = first slide centered, 1 = last slide centered
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const navH = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--navbar-h') || '0'
      )
      const viewH = window.innerHeight - navH
      const { top, height } = section.getBoundingClientRect()
      // Offset top by navbar height — section is locked below navbar
      const scrolledIn = -(top - navH)
      const raw = scrolledIn / (height - viewH)
      setScrollProgress(Math.max(0, Math.min(1, raw)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // t = how far slide i is from center in "slide units" (-1 = one step above, +1 = one step below)
  // Incoming slides come from bottom-left (even) or bottom-right (odd) corners.
  // Outgoing slides exit straight up.
  const getTransform = (i: number) => {
    const t = i - scrollProgress * (slides.length - 1)
    // t = 0  → centered
    // t > 0  → below (incoming)
    // t < 0  → above (outgoing)

    const ty = t * 100   // in vh

    // Only apply horizontal offset for incoming slides (t > 0)
    // Alternating: even slides come from left (-60vw), odd from right (+60vw)
    const side = i % 2 === 0 ? -1 : 1
    const tx = t > 0 ? side * t * 60 : 0   // in vw, fades to 0 as t→0

    return `translate(${tx}vw, ${ty}vh)`
  }

  // Active index for the dot indicator
  const activeIndex = Math.round(scrollProgress * (slides.length - 1))

  return (
    /*
     * Outer section is tall enough to give one full viewport of scroll
     * per slide. The sticky inner div locks to the viewport top.
     */
    <section
      id="explore-us"
      ref={sectionRef}
      className="relative bg-[#faf7f4]"
      style={{ height: `${slides.length * 100}vh` }}
    >
      {/* Decorative leaf motif */}
      <div className="sticky h-0 overflow-visible pointer-events-none select-none z-0" style={{ top: 'var(--navbar-h, 0px)' }}>
        <div className="absolute bottom-[-100vh] left-0 w-40 h-64 opacity-10">
          <svg viewBox="0 0 160 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#7ed957]">
            <path d="M80 250 Q80 180 60 130 Q40 80 20 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M80 250 Q80 180 100 130 Q120 80 140 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            {[40,70,100,130,160,190].map((y, i) => (
              <ellipse
                key={i}
                cx={80 - (i % 2 === 0 ? 18 : -18)} cy={y} rx="14" ry="8"
                transform={`rotate(${i % 2 === 0 ? -30 : 30} ${80 - (i % 2 === 0 ? 18 : -18)} ${y})`}
                stroke="currentColor" strokeWidth="1.5"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* ── Sticky viewport ── */}
      <div
        className="sticky overflow-hidden flex flex-col px-6 lg:px-16 py-10"
        style={{
          top: 'var(--navbar-h, 0px)',
          height: 'calc(100vh - var(--navbar-h, 0px))',
        }}
      >

        {/* ── Header — always locked at top ── */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex-shrink-0 mb-6">
          <div className="flex flex-col gap-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="block w-8 h-px bg-[#7ed957]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7ed957]">
                Who Are We
              </span>
            </div>
            {/* Title + subtitle stacked vertically */}
            <div className="flex flex-col gap-1 mt-1">
              <h2 className="text-4xl font-bold text-stone-800 leading-tight">Explore Us</h2>
              <p className="text-xs font-semibold tracking-widest  uppercase text-stone-500 leading-relaxed">
                CSI Union Church
              </p>
              <p className="text-xs font-semibold tracking-widest  uppercase text-stone-500 leading-relaxed">
                Podanur Pastorate
              </p>
            </div>
          </div>

          {/* Progress dots — right side of header */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-4 h-4 bg-[#7ed957]'
                    : 'w-2.5 h-2.5 bg-stone-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Card stage — fills remaining height, overflow visible so corner entries show ── */}
        <div className="relative flex-1 overflow-visible max-w-3xl w-full mx-auto">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: getTransform(i),
                willChange: 'transform',
              }}
            >
              {/* 16:9 card */}
              <div
                className={`relative w-full rounded-2xl overflow-hidden group ${slide.bg}`}
                style={{ aspectRatio: '16/9' }}
              >
                {/* Decorative cross watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <span className="text-white text-9xl font-black select-none">✝</span>
                </div>

                {/* "Image Placeholder" badge */}
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded px-2 py-0.5">
                  <span className="text-white text-[10px] font-medium">Image Placeholder</span>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-5">
                  <span className="text-white text-lg font-semibold">{slide.label}</span>
                </div>

                {/* Green accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#7ed957] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* Slide counter */}
        <div className="relative z-10 max-w-3xl mx-auto w-full flex-shrink-0 mt-4 flex justify-end">
          <span className="text-sm text-stone-400 tabular-nums">
            {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>

      </div>
    </section>
  )
}

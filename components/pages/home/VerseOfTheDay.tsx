'use client'

import { useInView } from '@/hooks/useInView'

export default function VerseOfTheDay() {
  const [ref, visible] = useInView(0.2)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative w-full overflow-hidden bg-[#e8f5e0]"
    >
      {/* Faint background illustration */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.12]">
        <svg
          viewBox="0 0 1200 140"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#4a8a2a]"
          fill="none"
        >
          <rect x="60" y="10" width="80" height="130" rx="40" stroke="currentColor" strokeWidth="3" />
          <rect x="75" y="18" width="50" height="100" rx="25" stroke="currentColor" strokeWidth="1.5" />
          <line x1="100" y1="18" x2="100" y2="118" stroke="currentColor" strokeWidth="1" />
          <line x1="75" y1="68" x2="125" y2="68" stroke="currentColor" strokeWidth="1" />
          <rect x="180" y="20" width="60" height="120" rx="30" stroke="currentColor" strokeWidth="2.5" />
          <line x1="210" y1="20" x2="210" y2="120" stroke="currentColor" strokeWidth="1" />
          <rect x="1060" y="10" width="80" height="130" rx="40" stroke="currentColor" strokeWidth="3" />
          <rect x="1075" y="18" width="50" height="100" rx="25" stroke="currentColor" strokeWidth="1.5" />
          <line x1="1100" y1="18" x2="1100" y2="118" stroke="currentColor" strokeWidth="1" />
          <line x1="1075" y1="68" x2="1125" y2="68" stroke="currentColor" strokeWidth="1" />
          <rect x="960" y="20" width="60" height="120" rx="30" stroke="currentColor" strokeWidth="2.5" />
          <line x1="990" y1="20" x2="990" y2="120" stroke="currentColor" strokeWidth="1" />
          {[400, 460, 520, 580, 640, 700, 760].map((x) => (
            <rect key={x} x={x} y="90" width="50" height="50" rx="2" stroke="currentColor" strokeWidth="1.5" />
          ))}
          {[410, 470, 530, 590, 650, 710, 770].map((x) => (
            <rect key={x} x={x} y="70" width="30" height="18" rx="1" stroke="currentColor" strokeWidth="1" opacity={0.7} />
          ))}
        </svg>
      </div>

      {/* Mobile Layout */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-16 py-6 md:py-8 transition-all duration-700 ease-out md:hidden"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        {/* Verse label at top */}
        <div className="text-center mb-4">
          <span
            className="text-[#4a8a2a] inline-block"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: '1.3' }}
          >
            Verse of the Day
          </span>
        </div>

        <div className="h-px w-full bg-[#7ed957] opacity-30 mb-4" />

        {/* Verse content */}
        <div className="text-center mb-4">
          <p className="text-stone-700 text-sm leading-relaxed font-light max-w-md mx-auto">
            The law of the&nbsp;
            <span className="font-medium text-stone-800">LORD</span>
            &nbsp;is perfect, converting the soul: the testimony of the&nbsp;
            <span className="font-medium text-stone-800">LORD</span>
            &nbsp;is sure, making wise the simple.
          </p>
          <p className="mt-3 text-xs font-semibold tracking-widest uppercase text-[#4a8a2a]">
            Psalm 19:7
          </p>
        </div>

        <div className="h-px w-full bg-[#7ed957] opacity-30 mb-4" />

        {/* Donate button */}
        <div className="text-center">
          <a
            href="#donate"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#7ed957] text-[#4a8a2a] text-sm font-medium hover:bg-[#7ed957] hover:border-[#7ed957] hover:text-white transition-all duration-300"
          >
            Donate Now
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Desktop Layout */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 hidden md:flex items-center justify-between gap-8 py-8 min-h-[140px] transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        {/* Left label */}
        <div className="flex-shrink-0 w-28 text-center">
          <span
            className="text-[#4a8a2a] leading-tight block"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontSize: '1.25rem', lineHeight: '1.3' }}
          >
            Verse<br />of the<br />Day
          </span>
        </div>

        <div className="flex-shrink-0 w-px self-stretch bg-[#7ed957] opacity-40" />

        {/* Centre — verse */}
        <div className="flex-1 text-center px-4">
          <p className="text-stone-700 text-sm md:text-base leading-relaxed font-light max-w-xl mx-auto">
            The law of the&nbsp;
            <span className="font-medium text-stone-800">LORD</span>
            &nbsp;is perfect, converting the soul: the testimony of the&nbsp;
            <span className="font-medium text-stone-800">LORD</span>
            &nbsp;is sure, making wise the simple.
          </p>
          <p className="mt-2 text-xs font-semibold tracking-widest uppercase text-[#4a8a2a]">
            Psalm 19:7
          </p>
        </div>

        <div className="flex-shrink-0 w-px self-stretch bg-[#7ed957] opacity-40" />

        {/* Right — Donate */}
        <div className="flex-shrink-0">
          <a
            href="#donate"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#7ed957] text-[#4a8a2a] text-sm font-medium hover:bg-[#7ed957] hover:border-[#7ed957] hover:text-white transition-all duration-300"
          >
            Donate Now
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

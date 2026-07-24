'use client'

import { useInView } from '@/hooks/useInView'

const stats = [
  { value: '15+',  label: 'Years'       },
  { value: '350+', label: 'Families'    },
  { value: '650+', label: 'Members'     },
  { value: '5+',   label: 'Fellowships' },
]

export default function StatsSection() {
  const [ref, visible] = useInView(0.2)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-white py-12 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto flex justify-center">

        {/* Card — fade + scale up */}
        <div
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-[#e8f5e0] px-8 py-10 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(24px)',
          }}
        >
          {/* Faint church skyline watermark */}
          <div className="absolute inset-0 pointer-events-none select-none opacity-[0.10]">
            <svg
              viewBox="0 0 800 160"
              preserveAspectRatio="xMidYMax meet"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              fill="none"
            >
              <line x1="0" y1="145" x2="800" y2="145" stroke="#4a8a2a" strokeWidth="1.5" />
              <rect x="330" y="70" width="140" height="75" stroke="#4a8a2a" strokeWidth="1.5" />
              <polyline points="320,70 400,30 480,70" stroke="#4a8a2a" strokeWidth="1.5" />
              <rect x="388" y="30" width="24" height="40" stroke="#4a8a2a" strokeWidth="1.2" />
              <polyline points="384,30 400,8 416,30" stroke="#4a8a2a" strokeWidth="1.2" />
              <line x1="400" y1="12" x2="400" y2="24" stroke="#4a8a2a" strokeWidth="1.2" />
              <line x1="394" y1="17" x2="406" y2="17" stroke="#4a8a2a" strokeWidth="1.2" />
              <rect x="388" y="110" width="24" height="35" rx="12" stroke="#4a8a2a" strokeWidth="1.2" />
              <rect x="345" y="85" width="18" height="28" rx="9" stroke="#4a8a2a" strokeWidth="1.2" />
              <rect x="437" y="85" width="18" height="28" rx="9" stroke="#4a8a2a" strokeWidth="1.2" />
              <rect x="210" y="95" width="110" height="50" stroke="#4a8a2a" strokeWidth="1.2" />
              <polyline points="205,95 265,65 325,95" stroke="#4a8a2a" strokeWidth="1.2" />
              <rect x="228" y="108" width="14" height="20" rx="7" stroke="#4a8a2a" strokeWidth="1" />
              <rect x="258" y="108" width="14" height="20" rx="7" stroke="#4a8a2a" strokeWidth="1" />
              <rect x="288" y="108" width="14" height="20" rx="7" stroke="#4a8a2a" strokeWidth="1" />
              <rect x="480" y="95" width="110" height="50" stroke="#4a8a2a" strokeWidth="1.2" />
              <polyline points="475,95 535,65 595,95" stroke="#4a8a2a" strokeWidth="1.2" />
              <rect x="498" y="108" width="14" height="20" rx="7" stroke="#4a8a2a" strokeWidth="1" />
              <rect x="528" y="108" width="14" height="20" rx="7" stroke="#4a8a2a" strokeWidth="1" />
              <rect x="558" y="108" width="14" height="20" rx="7" stroke="#4a8a2a" strokeWidth="1" />
              <rect x="80" y="108" width="80" height="37" stroke="#4a8a2a" strokeWidth="1" />
              <polyline points="76,108 120,88 164,108" stroke="#4a8a2a" strokeWidth="1" />
              <rect x="96" y="118" width="12" height="18" rx="6" stroke="#4a8a2a" strokeWidth="1" />
              <rect x="130" y="118" width="12" height="18" rx="6" stroke="#4a8a2a" strokeWidth="1" />
              <rect x="640" y="108" width="80" height="37" stroke="#4a8a2a" strokeWidth="1" />
              <polyline points="636,108 680,88 724,108" stroke="#4a8a2a" strokeWidth="1" />
              <rect x="656" y="118" width="12" height="18" rx="6" stroke="#4a8a2a" strokeWidth="1" />
              <rect x="690" y="118" width="12" height="18" rx="6" stroke="#4a8a2a" strokeWidth="1" />
              <ellipse cx="170" cy="100" rx="16" ry="22" stroke="#4a8a2a" strokeWidth="1" />
              <line x1="170" y1="122" x2="170" y2="145" stroke="#4a8a2a" strokeWidth="1" />
              <ellipse cx="630" cy="100" rx="16" ry="22" stroke="#4a8a2a" strokeWidth="1" />
              <line x1="630" y1="122" x2="630" y2="145" stroke="#4a8a2a" strokeWidth="1" />
            </svg>
          </div>

          {/* Stats row — each stat staggers in */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 transition-all duration-500 ease-out"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: visible ? `${i * 100}ms` : '0ms',
                }}
              >
                <span className="text-4xl md:text-5xl font-bold text-stone-800 leading-none">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold tracking-widest uppercase text-stone-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

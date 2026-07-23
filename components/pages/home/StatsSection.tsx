const stats = [
  { value: '15+',  label: 'Years'       },
  { value: '350+', label: 'Families'    },
  { value: '650+', label: 'Members'     },
  { value: '5+',   label: 'Fellowships' },
]

export default function StatsSection() {
  return (
    <section className="bg-white py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex justify-center">

        {/* Card */}
        <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-[#ede8df] px-8 py-10">

          {/* Faint church skyline watermark */}
          <div className="absolute inset-0 pointer-events-none select-none opacity-[0.10]">
            <svg
              viewBox="0 0 800 160"
              preserveAspectRatio="xMidYMax meet"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              fill="none"
            >
              {/* Ground line */}
              <line x1="0" y1="145" x2="800" y2="145" stroke="#7a5c2e" strokeWidth="1.5" />

              {/* Central church building */}
              <rect x="330" y="70" width="140" height="75" stroke="#7a5c2e" strokeWidth="1.5" />
              {/* Church roof (gable) */}
              <polyline points="320,70 400,30 480,70" stroke="#7a5c2e" strokeWidth="1.5" />
              {/* Steeple */}
              <rect x="388" y="30" width="24" height="40" stroke="#7a5c2e" strokeWidth="1.2" />
              <polyline points="384,30 400,8 416,30" stroke="#7a5c2e" strokeWidth="1.2" />
              {/* Cross on steeple */}
              <line x1="400" y1="12" x2="400" y2="24" stroke="#7a5c2e" strokeWidth="1.2" />
              <line x1="394" y1="17" x2="406" y2="17" stroke="#7a5c2e" strokeWidth="1.2" />
              {/* Church door */}
              <rect x="388" y="110" width="24" height="35" rx="12" stroke="#7a5c2e" strokeWidth="1.2" />
              {/* Church windows */}
              <rect x="345" y="85" width="18" height="28" rx="9" stroke="#7a5c2e" strokeWidth="1.2" />
              <rect x="437" y="85" width="18" height="28" rx="9" stroke="#7a5c2e" strokeWidth="1.2" />

              {/* Left wing building */}
              <rect x="210" y="95" width="110" height="50" stroke="#7a5c2e" strokeWidth="1.2" />
              <polyline points="205,95 265,65 325,95" stroke="#7a5c2e" strokeWidth="1.2" />
              {/* Left windows */}
              <rect x="228" y="108" width="14" height="20" rx="7" stroke="#7a5c2e" strokeWidth="1" />
              <rect x="258" y="108" width="14" height="20" rx="7" stroke="#7a5c2e" strokeWidth="1" />
              <rect x="288" y="108" width="14" height="20" rx="7" stroke="#7a5c2e" strokeWidth="1" />

              {/* Right wing building */}
              <rect x="480" y="95" width="110" height="50" stroke="#7a5c2e" strokeWidth="1.2" />
              <polyline points="475,95 535,65 595,95" stroke="#7a5c2e" strokeWidth="1.2" />
              {/* Right windows */}
              <rect x="498" y="108" width="14" height="20" rx="7" stroke="#7a5c2e" strokeWidth="1" />
              <rect x="528" y="108" width="14" height="20" rx="7" stroke="#7a5c2e" strokeWidth="1" />
              <rect x="558" y="108" width="14" height="20" rx="7" stroke="#7a5c2e" strokeWidth="1" />

              {/* Far left small building */}
              <rect x="80" y="108" width="80" height="37" stroke="#7a5c2e" strokeWidth="1" />
              <polyline points="76,108 120,88 164,108" stroke="#7a5c2e" strokeWidth="1" />
              <rect x="96" y="118" width="12" height="18" rx="6" stroke="#7a5c2e" strokeWidth="1" />
              <rect x="130" y="118" width="12" height="18" rx="6" stroke="#7a5c2e" strokeWidth="1" />

              {/* Far right small building */}
              <rect x="640" y="108" width="80" height="37" stroke="#7a5c2e" strokeWidth="1" />
              <polyline points="636,108 680,88 724,108" stroke="#7a5c2e" strokeWidth="1" />
              <rect x="656" y="118" width="12" height="18" rx="6" stroke="#7a5c2e" strokeWidth="1" />
              <rect x="690" y="118" width="12" height="18" rx="6" stroke="#7a5c2e" strokeWidth="1" />

              {/* Trees */}
              <ellipse cx="170" cy="100" rx="16" ry="22" stroke="#7a5c2e" strokeWidth="1" />
              <line x1="170" y1="122" x2="170" y2="145" stroke="#7a5c2e" strokeWidth="1" />
              <ellipse cx="630" cy="100" rx="16" ry="22" stroke="#7a5c2e" strokeWidth="1" />
              <line x1="630" y1="122" x2="630" y2="145" stroke="#7a5c2e" strokeWidth="1" />
            </svg>
          </div>

          {/* Stats row */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
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

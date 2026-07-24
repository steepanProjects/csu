const services = [
  { name: 'Sunday Service - English',  timing: 'Every Sunday | 07:30 AM',                              highlight: false },
  { name: 'Sunday Service - Tamil',    timing: 'Every Sunday | 09:00 AM',                              highlight: false },
  { name: 'Communion Service',         timing: 'Every 1st and 3rd Sunday',                             highlight: true  },
  { name: 'Month Blessing Service',    timing: 'Every 1st and 3rd Sunday',                             highlight: false },
  { name: 'Friday Service',            timing: 'Every Friday - 6:30 PM',                               highlight: false },
  { name: 'Half Night Prayer',         timing: 'Every Month First Friday - 9:00 - 11:30 PM',           highlight: true  },
  { name: 'Cottage Prayer',            timing: 'Every Wednesday - 7:00 - 8:30 PM',                     highlight: true  },
  { name: 'Sunday School',             timing: 'Every Sunday - 10:00 - 11:30 AM (Except 1st Sunday)',  highlight: true  },
  { name: "Youth Girl's Fellowship",   timing: 'Every 1st Sunday - After Tamil Service',               highlight: true  },
  { name: 'Youth Fellowship',          timing: 'Every 2nd Sunday - After Tamil Service',               highlight: true  },
  { name: "Men's Fellowship",          timing: 'Every 3rd Sunday - After Tamil Service',               highlight: true  },
  { name: "Women's Fellowship",        timing: 'Every 4th Sunday - After Tamil Service',               highlight: true  },
  { name: 'Choir Fellowship',          timing: 'Every 5th Sunday - After Tamil Service',               highlight: true  },
]

export default function RegularEventsDetails() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Section heading */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">Service Schedule</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-10 leading-tight">
          Regular Events
        </h2>

        {/* Table */}
        <div className="rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-2 bg-stone-100 border-b border-stone-200">
            <div className="px-8 py-4 text-sm font-bold text-stone-600 tracking-wide">
              Service
            </div>
            <div className="px-8 py-4 text-sm font-bold text-[#4a8a2a] tracking-wide border-l border-stone-200">
              Timings
            </div>
          </div>

          {/* Rows */}
          {services.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 border-b border-stone-100 last:border-0 transition-colors duration-150 hover:bg-[#f6fdf0] group ${
                i % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'
              }`}
            >
              {/* Service name */}
              <div className="px-8 py-4 flex items-center">
                <span
                  className={`text-sm leading-snug ${
                    row.highlight
                      ? 'text-[#4a8a2a] font-semibold'
                      : 'text-stone-600 font-medium'
                  }`}
                >
                  {row.name}
                </span>
              </div>

              {/* Timing */}
              <div className="px-8 py-4 flex items-center border-l border-stone-100 group-hover:border-stone-200 transition-colors duration-150">
                <span
                  className={`text-sm leading-snug ${
                    row.highlight
                      ? 'text-[#4a8a2a] font-semibold'
                      : 'text-stone-500 font-normal'
                  }`}
                >
                  {row.timing}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-6 text-xs text-stone-400 text-center">
          Schedules are subject to change on special occasions. Please check with the church office for updates.
        </p>
      </div>
    </section>
  )
}

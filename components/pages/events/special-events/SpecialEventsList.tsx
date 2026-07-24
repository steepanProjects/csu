const events = [
  {
    title: 'Harvest Festival & Thanksgiving Service',
    date: 'October 2026',
    description:
      "A joyful annual celebration of God's provision and faithfulness. The congregation gathers for a special thanksgiving service followed by a communal feast, with offerings of gratitude presented before the Lord.",
    tag: 'Annual',
    poster: null, // Replace with: '/posters/harvest-festival-2026.jpg'
  },
  {
    title: 'Christmas Carol Service',
    date: 'December 24, 2026',
    description:
      'An evening of carols, candlelight, and the proclamation of Christ\'s birth. Choirs, soloists, and the congregation join together in song to celebrate the Incarnation.',
    tag: 'Christmas',
    poster: null, // Replace with: '/posters/christmas-carol-2026.jpg'
  },
  {
    title: 'Good Friday Service',
    date: 'April 2027',
    description:
      'A solemn and reflective service meditating on the suffering and sacrifice of Jesus Christ. The service includes readings, prayers, and the veneration of the cross.',
    tag: 'Easter',
    poster: null, // Replace with: '/posters/good-friday-2027.jpg'
  },
  {
    title: 'Easter Sunday Celebration',
    date: 'April 2027',
    description:
      'A triumphant service proclaiming the resurrection of Jesus Christ. The congregation gathers at dawn for the sunrise service, followed by the main worship and a fellowship breakfast.',
    tag: 'Easter',
    poster: null, // Replace with: '/posters/easter-sunday-2027.jpg'
  },
  {
    title: 'Church Anniversary Sunday',
    date: 'January 2027',
    description:
      'A celebration of the church\'s founding, honouring the legacy of those who have gone before and looking forward in faith to what God has prepared. Special guests and former presbyters are invited.',
    tag: 'Anniversary',
    poster: null, // Replace with: '/posters/anniversary-2027.jpg'
  },
  {
    title: 'Vacation Bible School (VBS)',
    date: 'May 2027',
    description:
      'A week-long programme for children filled with Bible lessons, crafts, games, and worship. VBS nurtures faith in young hearts and creates memories that last a lifetime.',
    tag: 'Children',
    poster: null, // Replace with: '/posters/vbs-2027.jpg'
  },
]

const TAG_STYLES: Record<string, string> = {
  Annual:      'bg-[#f0fae8] text-[#4a8a2a] border-[#b8e89a]',
  Christmas:   'bg-blue-50    text-blue-700   border-blue-200',
  Easter:      'bg-purple-50  text-purple-700  border-purple-200',
  Anniversary: 'bg-amber-50   text-amber-700   border-amber-200',
  Children:    'bg-pink-50    text-pink-600    border-pink-200',
}

export default function SpecialEventsList() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">Throughout the Year</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 leading-tight">
          Upcoming Special Events
        </h2>
        <p className="text-sm text-stone-500 mb-14 max-w-xl">
          Landmark occasions that mark the sacred seasons of the church calendar — each one
          an invitation to gather, celebrate, and encounter God together.
        </p>

        {/* Event cards */}
        <div className="flex flex-col gap-8">
          {events.map((ev, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-0 rounded-2xl border border-stone-200 overflow-hidden hover:border-[#7ed957] hover:shadow-lg hover:shadow-[#7ed957]/10 transition-all duration-200"
            >
              {/* ── Left — event details ──────────────────────────────── */}
              <div className="flex flex-col justify-between px-8 py-8 bg-white">

                {/* Top: tag + title */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full border ${
                        TAG_STYLES[ev.tag] ?? 'bg-stone-100 text-stone-500 border-stone-200'
                      }`}
                    >
                      {ev.tag}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-stone-400">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {ev.date}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-stone-800 leading-snug group-hover:text-[#4a8a2a] transition-colors duration-200">
                    {ev.title}
                  </h3>

                  <p className="text-sm text-stone-500 leading-relaxed">
                    {ev.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-8 h-0.5 w-12 bg-stone-200 group-hover:w-full group-hover:bg-[#7ed957] transition-all duration-500 ease-out" />
              </div>

              {/* ── Right — poster area ───────────────────────────────── */}
              <div className="relative bg-stone-100 border-l border-stone-200 group-hover:border-[#7ed957] transition-colors duration-200 min-h-[220px] lg:min-h-0 flex items-center justify-center overflow-hidden">

                {ev.poster ? (
                  <img
                    src={ev.poster}
                    alt={`${ev.title} poster`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Poster placeholder */
                  <div className="flex flex-col items-center justify-center gap-3 px-8 text-center h-full w-full">
                    {/* Dashed border */}
                    <div className="absolute inset-4 rounded-xl border-2 border-dashed border-stone-300 group-hover:border-[#7ed957]/50 transition-colors duration-200 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-stone-200 group-hover:bg-[#f0fae8] flex items-center justify-center transition-colors duration-200">
                        <svg className="w-6 h-6 text-stone-400 group-hover:text-[#4a8a2a] transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-stone-400 group-hover:text-[#4a8a2a] transition-colors duration-200">
                        Event Poster
                      </p>
                      <p className="text-[10px] text-stone-400 leading-snug">
                        Replace <code className="bg-stone-200 px-1 rounded text-[10px]">poster: null</code><br />
                        with the image path
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-xs text-stone-400 text-center">
          Dates are tentative and subject to confirmation. Contact the church office for the latest details.
        </p>
      </div>
    </section>
  )
}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const schedule: {
  day: string
  events: { time: string; title: string; location: string; tag: string }[]
}[] = [
  {
    day: 'Sunday',
    events: [
      { time: '07:30 AM', title: 'Early Morning Prayer', location: 'Main Sanctuary', tag: 'Prayer' },
      { time: '09:00 AM', title: 'Sunday Worship Service', location: 'Main Sanctuary', tag: 'Worship' },
      { time: '09:30 AM', title: "Children's Sunday School", location: 'Fellowship Hall', tag: 'Children' },
      { time: '11:30 AM', title: 'Youth Fellowship Meeting', location: 'Youth Room', tag: 'Youth' },
    ],
  },
  {
    day: 'Monday',
    events: [
      { time: '06:00 AM', title: 'Morning Devotion & Prayer', location: 'Prayer Room', tag: 'Prayer' },
    ],
  },
  {
    day: 'Tuesday',
    events: [
      { time: '06:00 AM', title: 'Morning Devotion & Prayer', location: 'Prayer Room', tag: 'Prayer' },
      { time: '05:00 PM', title: 'Youth Bible Study', location: 'Youth Room', tag: 'Youth' },
    ],
  },
  {
    day: 'Wednesday',
    events: [
      { time: '06:00 AM', title: 'Morning Devotion & Prayer', location: 'Prayer Room', tag: 'Prayer' },
      { time: '07:00 PM', title: 'Midweek Bible Study', location: 'Main Sanctuary', tag: 'Bible Study' },
    ],
  },
  {
    day: 'Thursday',
    events: [
      { time: '06:00 AM', title: 'Morning Devotion & Prayer', location: 'Prayer Room', tag: 'Prayer' },
      { time: '10:00 AM', title: "Women's Fellowship Meeting", location: 'Fellowship Hall', tag: 'Fellowship' },
    ],
  },
  {
    day: 'Friday',
    events: [
      { time: '06:00 AM', title: 'Morning Devotion & Prayer', location: 'Prayer Room', tag: 'Prayer' },
      { time: '06:00 PM', title: 'Choir Practice', location: 'Main Sanctuary', tag: 'Choir' },
    ],
  },
  {
    day: 'Saturday',
    events: [
      { time: '07:00 AM', title: "Men's Prayer Breakfast", location: 'Fellowship Hall', tag: 'Fellowship' },
      { time: '04:00 PM', title: "Children's Ministry Programme", location: 'Fellowship Hall', tag: 'Children' },
    ],
  },
]

const TAG_COLORS: Record<string, string> = {
  Prayer:       'bg-blue-50  text-blue-600  border-blue-200',
  Worship:      'bg-[#f0fae8] text-[#4a8a2a] border-[#b8e89a]',
  'Bible Study': 'bg-amber-50 text-amber-700 border-amber-200',
  Youth:        'bg-purple-50 text-purple-600 border-purple-200',
  Children:     'bg-pink-50  text-pink-600  border-pink-200',
  Fellowship:   'bg-orange-50 text-orange-600 border-orange-200',
  Choir:        'bg-teal-50  text-teal-600  border-teal-200',
}

export default function RegularEventsSchedule() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-stone-50">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">Weekly Schedule</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2 leading-tight">
          Our Week at a Glance
        </h2>
        <p className="text-sm text-stone-500 mb-12 max-w-xl">
          A full picture of our recurring gatherings — join us whenever you are free,
          and let every visit draw you closer to God and community.
        </p>

        {/* Day columns grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {schedule.map((day) => {
            const isToday = DAYS[new Date().getDay()] === day.day
            return (
              <div
                key={day.day}
                className={`rounded-2xl border flex flex-col overflow-hidden transition-shadow duration-200 hover:shadow-md ${
                  isToday
                    ? 'border-[#7ed957] bg-white shadow-sm shadow-[#7ed957]/20'
                    : 'border-stone-200 bg-white'
                }`}
              >
                {/* Day header */}
                <div
                  className={`px-4 py-3 flex items-center justify-between ${
                    isToday ? 'bg-[#7ed957]' : 'bg-stone-100'
                  }`}
                >
                  <span
                    className={`text-sm font-bold tracking-wide ${
                      isToday ? 'text-white' : 'text-stone-700'
                    }`}
                  >
                    {day.day}
                  </span>
                  {isToday && (
                    <span className="text-[10px] font-semibold bg-white/25 text-white px-2 py-0.5 rounded-full">
                      Today
                    </span>
                  )}
                </div>

                {/* Events list */}
                <div className="flex flex-col gap-3 px-3 py-3 flex-1">
                  {day.events.length === 0 ? (
                    <p className="text-xs text-stone-400 italic py-4 text-center">No events</p>
                  ) : (
                    day.events.map((ev, i) => (
                      <div key={i} className="flex flex-col gap-1 pb-3 border-b border-stone-100 last:border-0 last:pb-0">
                        <span className="text-[11px] font-semibold text-stone-400 tabular-nums">
                          {ev.time}
                        </span>
                        <span className="text-xs font-semibold text-stone-800 leading-snug">
                          {ev.title}
                        </span>
                        <div className="flex items-center gap-1 flex-wrap">
                          <span
                            className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                              TAG_COLORS[ev.tag] ?? 'bg-stone-100 text-stone-500 border-stone-200'
                            }`}
                          >
                            {ev.tag}
                          </span>
                          <span className="text-[10px] text-stone-400 flex items-center gap-0.5">
                            <svg className="w-2.5 h-2.5 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {ev.location}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-xs text-stone-400 font-medium mr-1">Categories:</span>
          {Object.entries(TAG_COLORS).map(([tag, cls]) => (
            <span
              key={tag}
              className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${cls}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

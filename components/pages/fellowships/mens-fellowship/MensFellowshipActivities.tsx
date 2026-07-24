const activities = [
  {
    title: 'Bible Study',
    description: 'Weekly in-depth Bible study sessions where men explore Scripture together, building a firm foundation in the Word of God.',
    frequency: 'Every Wednesday',
  },
  {
    title: 'Prayer Meetings',
    description: 'Monthly corporate prayer gatherings where men intercede for families, the church, and the nation with one voice and one heart.',
    frequency: 'First Saturday',
  },
  {
    title: 'Community Outreach',
    description: 'Hands-on service projects reaching out to the surrounding villages — feeding programs, home visits, and acts of compassion.',
    frequency: 'Monthly',
  },
  {
    title: 'Annual Retreat',
    description: 'A dedicated retreat for spiritual renewal, deep fellowship, and seeking God\'s direction for the year ahead as men of faith.',
    frequency: 'Yearly',
  },
  {
    title: 'Leadership Training',
    description: 'Workshops and seminars focused on developing servant leaders who lead their homes, workplaces, and church with godly character.',
    frequency: 'Quarterly',
  },
  {
    title: 'Family Ministry',
    description: 'Programs that strengthen family bonds — marriage enrichment sessions, father-child events, and praying for one another\'s households.',
    frequency: 'Bi-monthly',
  },
]

export default function MensFellowshipActivities() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">What We Do</span>
        </div>
        <h2 className="text-3xl font-bold text-stone-800 mb-10">Programmes &amp; Activities</h2>

        {/* Two-column list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
          {activities.map((activity, i) => (
            <div
              key={i}
              className="flex gap-5 py-6 border-b border-stone-100 last:border-b-0 lg:[&:nth-last-child(2)]:border-b-0"
            >
              {/* Number */}
              <div className="flex-shrink-0 w-8 text-right">
                <span className="text-sm font-bold text-[#7ed957] tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5 flex-1">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-bold text-stone-800">{activity.title}</h3>
                  <span className="flex-shrink-0 text-xs font-semibold text-[#4a8a2a] bg-[#e8f5e0] px-3 py-0.5 rounded-full">
                    {activity.frequency}
                  </span>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

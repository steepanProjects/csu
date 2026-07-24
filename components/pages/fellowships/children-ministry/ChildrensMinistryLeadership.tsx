const coordinator = {
  name: 'Mrs. [Coordinator Name]',
  role: "Children's Ministry Coordinator",
  note: 'Leading with love and dedication since [Year]',
  // PLACEHOLDER: Replace name, role, and note with actual coordinator details
}

const teachers = [
  {
    name: 'Mrs. [Teacher Name]',
    group: 'Nursery Class · Ages 4–6',
    // PLACEHOLDER: Replace with actual teacher name
  },
  {
    name: 'Mrs. [Teacher Name]',
    group: 'Primary Class · Ages 7–10',
    // PLACEHOLDER: Replace with actual teacher name
  },
  {
    name: 'Mr. [Teacher Name]',
    group: 'Middle Class · Ages 11–14',
    // PLACEHOLDER: Replace with actual teacher name
  },
  {
    name: 'Mrs. [Teacher Name]',
    group: 'VBS Lead Teacher',
    // PLACEHOLDER: Replace with actual teacher name
  },
]

export default function ChildrensMinistryLeadership() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">Our Team</span>
        </div>
        <h2 className="text-3xl font-bold text-stone-800 mb-2">
          Teachers &amp; Coordinators
        </h2>
        <p className="text-sm text-stone-500 mb-12 max-w-lg">
          Our team of devoted volunteers give their time and hearts to help each child
          experience God&apos;s love in a real and tangible way.
        </p>

        {/* Coordinator — featured wide card */}
        <div className="rounded-2xl bg-[#0f2310] overflow-hidden mb-8 grid grid-cols-1 md:grid-cols-[auto_1fr]">

          {/* Photo */}
          <div className="w-full md:w-52 h-52 bg-stone-700 flex-shrink-0 overflow-hidden">
            {/* PLACEHOLDER: Replace with actual coordinator photo */}
            {/* Suggested: Professional headshot or ministry photo */}
            <img
              src="/hero.jpg"
              alt={coordinator.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center px-8 py-8 gap-3">
            <div className="flex items-center gap-3">
              <span className="block w-6 h-px bg-[#7ed957]" />
              <span className="text-xs font-bold text-[#7ed957] uppercase tracking-widest">Coordinator</span>
            </div>
            <h3 className="text-2xl font-bold text-white leading-snug">{coordinator.name}</h3>
            <p className="text-sm text-white/70">{coordinator.role}</p>
            <p className="text-xs text-white/40 italic">{coordinator.note}</p>
          </div>
        </div>

        {/* Teachers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {teachers.map((teacher, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl border border-stone-100 overflow-hidden hover:border-[#7ed957]/40 hover:shadow-sm transition-all duration-200"
            >
              {/* Photo */}
              <div className="h-44 bg-stone-100 overflow-hidden">
                {/* PLACEHOLDER: Replace with actual teacher photo for each card */}
                {/* Suggested: Friendly portrait photo of each teacher */}
                <img
                  src="/hero.jpg"
                  alt={teacher.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Info */}
              <div className="px-4 py-4 flex flex-col gap-1">
                <p className="text-sm font-bold text-stone-800 leading-snug">{teacher.name}</p>
                <p className="text-xs text-[#4a8a2a] font-medium leading-snug">{teacher.group}</p>
              </div>

              <div className="h-0.5 w-full bg-[#7ed957]" />
            </div>
          ))}
        </div>

        {/* Spiritual adviser note */}
        <div className="mt-10 rounded-2xl bg-[#f0f9ea] border border-[#7ed957]/20 px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-[#e8f5e0] border-2 border-[#7ed957]/30 flex items-center justify-center flex-shrink-0">
            {/* Simple cross — not an AI icon, just a typographic symbol */}
            <span className="text-[#4a8a2a] text-xl font-black leading-none">✝</span>
          </div>
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-widest mb-0.5">Spiritual Adviser</p>
            <p className="text-sm font-bold text-stone-800">Rev. Christopher Rajendran</p>
            <p className="text-xs text-stone-500 mt-0.5">
              Presbyter &amp; Chairman i/c — CSI Union Church Podanur
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

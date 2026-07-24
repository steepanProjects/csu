const leaders = [
  {
    name: 'Mrs. J. Gladys Jeya',
    role: "President, Women's Fellowship",
    mobile: null,
    featured: true,
  },
  {
    name: 'Mrs. D. Usha',
    role: 'Vice President',
    mobile: null,
    featured: true,
  },
  {
    name: 'Mrs. S. Jancy Rani',
    role: 'Secretary',
    mobile: null,
    featured: false,
  },
  {
    name: 'Mrs. Rajula',
    role: 'Treasurer',
    mobile: null,
    featured: false,
  },
  {
    name: 'Mrs. Dr. G. Josemin Bala',
    role: 'Executive Member',
    mobile: null,
    featured: false,
  },
  {
    name: 'Mrs. Selladurai',
    role: 'Executive Member',
    mobile: null,
    featured: false,
  },
]

interface Leader {
  name: string
  role: string
  mobile: string | null
  featured: boolean
}

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <div
      className={`flex flex-col items-center text-center rounded-xl overflow-hidden transition-all duration-200 ${
        leader.featured
          ? 'border-2 border-[#7ed957] shadow-md shadow-[#7ed957]/20'
          : 'border border-stone-100 hover:border-[#7ed957]/40 hover:shadow-sm'
      }`}
    >
      {/* Photo */}
      <div className="w-full aspect-square bg-stone-100 overflow-hidden">
        <img
          src="/hero.jpg"
          alt={leader.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Info */}
      <div className="px-3 py-3 w-full">
        <p className="text-sm font-semibold text-stone-800 leading-snug">{leader.name}</p>
        <p className="text-xs text-[#4a8a2a] font-medium mt-0.5">{leader.role}</p>
        {leader.mobile && (
          <p className="text-xs text-stone-400 mt-1">{leader.mobile}</p>
        )}
      </div>

      {leader.featured && <div className="h-1 w-full bg-[#7ed957]" />}
    </div>
  )
}

export default function WomensFellowshipLeadership() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-[#f0f9ea]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">Our Team</span>
        </div>
        <h2 className="text-3xl font-bold text-stone-800 mb-10">Fellowship Leadership</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {leaders.map((leader, i) => (
            <LeaderCard key={i} leader={leader} />
          ))}
        </div>

        {/* Adviser note */}
        <div className="mt-10 rounded-2xl bg-white border border-stone-100 px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#e8f5e0] flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-[#4a8a2a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-widest mb-0.5">Spiritual Adviser</p>
            <p className="text-sm font-bold text-stone-800">Rev. Christopher Rajendran</p>
            <p className="text-xs text-stone-500 mt-0.5">Presbyter &amp; Chairman i/c — CSI Union Church Podanur</p>
          </div>
        </div>

      </div>
    </section>
  )
}

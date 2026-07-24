const presbyters = [
  { name: 'Rev. Prabhu Chandramohan',  role: 'Presbyter and Chairman' },
  { name: 'Rev. Jayaseelan Davidraj G', role: 'Presbyter and Chairman' },
  { name: 'Rev. P. Abel',               role: 'Presbyter and Chairman' },
  { name: 'Rev. T. Vijayan',            role: 'Presbyter and Chairman' },
  { name: 'Rev. S. Daniel',             role: 'Presbyter and Chairman' },
  { name: 'Rev. M. Rajendran',          role: 'Presbyter and Chairman' },
  { name: 'Rev. K. Samuel',             role: 'Presbyter and Chairman' },
  { name: 'Rev. J. Paul',               role: 'Presbyter and Chairman' },
]

export default function FormerPresbytersList() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">Church</span>
        </div>
        <h2 className="text-3xl font-bold text-stone-800 mb-10">Former Presbyters</h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {presbyters.map((person, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              {/* Photo */}
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-stone-100 mb-3 group-hover:shadow-md transition-shadow duration-200">
                <img
                  src="/hero.jpg"
                  alt={person.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Name + role */}
              <p className="text-sm font-semibold text-stone-800 leading-snug">{person.name}</p>
              <p className="text-xs text-stone-400 mt-0.5">{person.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

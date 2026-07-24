const secretaries = [
  { name: 'Mr. S Gnanaprakasam', role: 'Secretary' },
  { name: 'Mr. J. Jebasingh',    role: 'Secretary' },
  { name: 'Dr. R.N. Emerson',    role: 'Secretary' },
]

const treasurers = [
  { name: 'Mr. A. Durai',        role: 'Treasurer' },
  { name: 'Mr. S. Rajkumar',     role: 'Treasurer' },
  { name: 'Mr. P. Krishnakumar', role: 'Treasurer' },
  { name: 'Mr. V. Manoharan',    role: 'Treasurer' },
]

interface Member { name: string; role: string }

function MemberGrid({ members }: { members: Member[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-14">
      {members.map((person, i) => (
        <div key={i} className="flex flex-col items-center text-center group">
          <div className="w-full aspect-square rounded-xl overflow-hidden bg-stone-100 mb-3 group-hover:shadow-md transition-shadow duration-200">
            <img
              src="/hero.jpg"
              alt={person.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p className="text-sm font-semibold text-stone-800 leading-snug">{person.name}</p>
          <p className="text-xs text-stone-400 mt-0.5">{person.role}</p>
        </div>
      ))}
    </div>
  )
}

export default function FormerOfficeBearersList() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">Church</span>
        </div>

        {/* Former Secretaries */}
        <h2 className="text-3xl font-bold text-stone-800 mb-8">Former Secretaries</h2>
        <MemberGrid members={secretaries} />

        {/* Former Treasurers */}
        <h2 className="text-3xl font-bold text-stone-800 mb-8">Former Treasurers</h2>
        <MemberGrid members={treasurers} />

      </div>
    </section>
  )
}

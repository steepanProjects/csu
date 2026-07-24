/* ─────────────────────────────────────────────────────────────────────────
   PLACEHOLDERS — replace all bracketed values with actual details.
   Photo: replace /hero.jpg with real headshots or choir photos.
   ───────────────────────────────────────────────────────────────────────── */

const conductor = {
  name: '[Choir Conductor Name]',
  role: 'Choir Conductor',
  note: 'Leading since [Year]',
  bio: 'Our conductor brings years of musical training and a heart for sacred music. Under their direction the choir has grown in both skill and spiritual depth — every rehearsal a lesson in discipline, every service an act of worship.',
}

const committee = [
  { name: '[President Name]',      role: 'President'      },
  { name: '[Vice-President Name]', role: 'Vice-President' },
  { name: '[Secretary Name]',      role: 'Secretary'      },
  { name: '[Treasurer Name]',      role: 'Treasurer'      },
]

const sections = [
  { part: 'Soprano',  count: '[No.]', description: 'Highest voice — bright, soaring, and melodic' },
  { part: 'Alto',     count: '[No.]', description: 'Rich and warm — the harmonic anchor of the choir' },
  { part: 'Tenor',    count: '[No.]', description: 'Powerful upper male voice — carries the melody' },
  { part: 'Bass',     count: '[No.]', description: 'Deep and resonant — the foundation of every chord' },
]

export default function ChoirLeadership() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">Our Team</span>
        </div>
        <h2 className="text-3xl font-bold text-stone-800 mb-2">Choir Leadership</h2>
        <p className="text-sm text-stone-500 mb-12 max-w-lg">
          Guided by faithful musicians and servant-hearted leaders who give freely of
          their time and gifts for the worship of God.
        </p>

        {/* Conductor — featured card */}
        <div className="rounded-2xl bg-[#0f2310] overflow-hidden mb-8 grid grid-cols-1 md:grid-cols-[auto_1fr]">

          {/* Photo */}
          <div className="w-full md:w-56 h-56 bg-stone-700 flex-shrink-0 overflow-hidden">
            {/* PLACEHOLDER: Replace with conductor's actual headshot */}
            <img
              src="/hero.jpg"
              alt={conductor.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center px-8 py-8 gap-4">
            {/* Musical bar decoration */}
            <div className="flex items-end gap-0.5 h-6 mb-1" aria-hidden="true">
              {[6, 14, 10, 20, 8, 16, 12, 18, 6, 14].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 rounded-sm bg-[#7ed957] opacity-60"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="block w-6 h-px bg-[#7ed957]" />
              <span className="text-xs font-bold text-[#7ed957] uppercase tracking-widest">Conductor</span>
            </div>
            <h3 className="text-2xl font-bold text-white">{conductor.name}</h3>
            <p className="text-sm text-white/70">{conductor.role}</p>
            <p className="text-xs text-white/90 leading-relaxed max-w-md">{conductor.bio}</p>
            <p className="text-xs text-white/40 italic">{conductor.note}</p>
          </div>
        </div>

        {/* Committee grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {committee.map((member, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl border border-stone-100 overflow-hidden hover:border-[#7ed957]/40 hover:shadow-sm transition-all duration-200"
            >
              {/* Photo */}
              <div className="h-44 bg-stone-100 overflow-hidden">
                {/* PLACEHOLDER: Replace with actual committee member photo */}
                <img
                  src="/hero.jpg"
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 py-4 flex flex-col gap-1">
                <p className="text-sm font-bold text-stone-800 leading-snug">{member.name}</p>
                <p className="text-xs text-[#4a8a2a] font-medium">{member.role}</p>
              </div>
              <div className="h-0.5 w-full bg-[#7ed957]" />
            </div>
          ))}
        </div>


        {/* Spiritual adviser */}
        <div className="mt-6 rounded-2xl bg-[#f0f9ea] border border-[#7ed957]/20 px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-[#e8f5e0] border-2 border-[#7ed957]/30 flex items-center justify-center flex-shrink-0">
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

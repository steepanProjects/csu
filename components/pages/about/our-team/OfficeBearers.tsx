'use client'

import { useInView } from '@/hooks/useInView'

const pcMembers = [
  { name: 'Dr. G. Prince Arulraj',       role: 'Hon. Secretary',       mobile: '94882 11095', featured: true  },
  { name: 'Mr. C. Anand Asir',            role: 'Hon. Treasurer',       mobile: '98946 17274', featured: true  },
  { name: 'Mr. A. Abraham',               role: 'PC Member',            mobile: null,          featured: false },
  { name: 'Mrs. J. Gladys Jeya',          role: 'PC Member',            mobile: null,          featured: false },
  { name: 'Mr. R. Joshua Jeyapandi',      role: 'PC Member (Youth)',    mobile: null,          featured: false },
  { name: 'Dr. G. Josemin Bala',          role: 'PC Member',            mobile: null,          featured: false },
  { name: 'Mr. JRB Rajkumar',             role: 'PC Member',            mobile: null,          featured: false },
  { name: 'Mr. V. Manoharan',             role: 'PC Member',            mobile: null,          featured: false },
  { name: 'Mr. V. Ruban Jeyasironmani',   role: 'PC Member',            mobile: null,          featured: false },
  { name: 'Mr. M. Sathiaraj',             role: 'PC Member',            mobile: null,          featured: false },
  { name: 'Mrs. D. Usha',                 role: 'PC Member',            mobile: null,          featured: false },
]

const dcMembers = [
  { name: 'Mr. S. Gnanaprakasam',  role: 'DC Member', mobile: null, featured: true  },
  { name: 'Mrs. S Jancy Rani',     role: 'DC Member', mobile: null, featured: false },
  { name: 'Mr. J. Jebasingh',      role: 'DC Member', mobile: null, featured: false },
]

const staffMembers = [
  { name: 'Mrs. Rajula',            role: 'Admin & Accountant', mobile: null, featured: false },
  { name: 'Mr & Mrs. Selladurai',   role: 'Sexton',             mobile: null, featured: false },
  { name: 'Mr. Francis AP',         role: 'Security',           mobile: null, featured: false },
]

interface Member {
  name: string
  role: string
  mobile: string | null
  featured: boolean
}

function MemberCard({ member, delay, visible }: { member: Member; delay: number; visible: boolean }) {
  return (
    <div
      className={`flex flex-col items-center text-center rounded-xl overflow-hidden transition-all duration-200 ${
        member.featured
          ? 'border-2 border-[#7ed957] shadow-md shadow-[#7ed957]/20'
          : 'border border-stone-100 hover:border-[#7ed957]/40 hover:shadow-sm'
      }`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms, border-color 0.2s, box-shadow 0.2s`,
      }}
    >
      <div className="w-full aspect-[4/4] bg-stone-100 overflow-hidden">
        <img src="/hero.jpg" alt={member.name} className="w-full h-full object-cover object-top" />
      </div>
      <div className="px-3 py-3 w-full">
        <p className="text-sm font-semibold text-stone-800 leading-snug">{member.name}</p>
        <p className="text-xs text-stone-400 mt-0.5">{member.role}</p>
        {member.mobile && (
          <p className="text-xs text-stone-500 mt-1">Mobile: {member.mobile}</p>
        )}
      </div>
    </div>
  )
}

interface GroupProps {
  label: string
  title: string
  members: Member[]
  visible: boolean
  baseDelay?: number
}

function MemberGroup({ label, title, members, visible, baseDelay = 0 }: GroupProps) {
  return (
    <div className="mb-14">
      <div
        className="flex items-center gap-3 mb-3 transition-all duration-600 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-20px)',
          transitionDelay: visible ? `${baseDelay}ms` : '0ms',
        }}
      >
        <span className="block w-8 h-px bg-[#7ed957]" />
        <span className="text-sm font-semibold text-[#4a8a2a]">{label}</span>
      </div>
      <h3
        className="text-2xl font-bold text-stone-800 mb-8 transition-all duration-600 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-10px)',
          transitionDelay: visible ? `${baseDelay + 80}ms` : '0ms',
        }}
      >
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {members.map((member, i) => (
          <MemberCard key={i} member={member} delay={baseDelay + 160 + i * 60} visible={visible} />
        ))}
      </div>
    </div>
  )
}

export default function OfficeBearers() {
  const [ref, visible] = useInView(0.05)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6 lg:px-16 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <MemberGroup label="Church"  title="Office Bearers" members={pcMembers}    visible={visible} baseDelay={0}   />
        <MemberGroup label="Diocese" title="DC Members"     members={dcMembers}    visible={visible} baseDelay={100} />
        <MemberGroup label="Staff"   title="Church Staff"   members={staffMembers} visible={visible} baseDelay={200} />
      </div>
    </section>
  )
}

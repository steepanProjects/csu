export default function AboutSection() {
  return (
    <section id="about-section" className="relative bg-white overflow-hidden">

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 lg:py-20">
          {/* Left — About text */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-stone-800 mb-6">CSI Christ Church</h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                As a faithful congregation of the Church of South India (CSI), we have been
                worshipping our Lord God in a small, temporarily built church in the West End Zone
                of Coimbatore District, at Mathuvarayapuram village, for the past six years. By the
                pure grace of God, in 2006, a group of dedicated believers came together, purchased
                48 cents of land in Mathuvarayapuram, and generously gifted it to build a larger,
                permanent church. Since then, we have been diligently planning to construct a
                spacious church of approximately 7,000 square feet to better serve our growing
                community.
              </p>
              <p>
                Over time, our congregation has steadily grown, welcoming worshippers from nearby
                villages such as Semmedu, Iruttupallam, Thombilipalayam, Alandurai, Kallipalayam,
                Nadegoundenpudur, Boluvampatti, Jahir Naickenpalayam, Thennamanallur,
                Pooluvapatti, Mathampatti, and even the staff, families, and friends of Karunya
                University. To accommodate the increasing number of attendees, a temporary thatched
                shed was added in front of the building, ensuring everyone has a place to worship.
              </p>
            </div>
          </div>

          {/* Right — decorative illustration */}
          <div className="hidden lg:flex items-end justify-end pb-4">
            <div className="relative w-72 h-64 opacity-10">
              <svg viewBox="0 0 300 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#7ed957]">
                <circle cx="230" cy="160" r="90" stroke="currentColor" strokeWidth="1.5" />
                <rect x="218" y="100" width="24" height="80" rx="3" stroke="currentColor" strokeWidth="2" />
                <rect x="195" y="123" width="70" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
                <ellipse cx="110" cy="90" rx="28" ry="16" stroke="currentColor" strokeWidth="1.5" />
                <path d="M82 90 Q65 75 55 90" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M110 74 Q120 55 140 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M160 200 Q180 170 210 180 Q190 210 160 200Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M140 220 Q155 195 185 200 Q165 225 140 220Z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

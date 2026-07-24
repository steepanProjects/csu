import React from 'react'

/* ─────────────────────────────────────────────────────────────────────────
   PLACEHOLDERS — replace src values below with real photos.

   Bible Study collage (3 images — MosaicA: tall-left + 2 stacked right):
     bibleStudyImages[0]  – e.g. youth around an open Bible
     bibleStudyImages[1]  – e.g. small group discussion
     bibleStudyImages[2]  – e.g. note-taking / journalling

   Retreat collage (4 images — MosaicB: 2×2 grid):
     retreatImages[0]  – e.g. campfire worship
     retreatImages[1]  – e.g. morning devotion outdoors
     retreatImages[2]  – e.g. group activity / team game
     retreatImages[3]  – e.g. group photo at retreat venue

   Outreach collage (3 images — MosaicC: wide top + 2 bottom):
     outreachImages[0]  – e.g. serving at a community event
     outreachImages[1]  – e.g. visiting the elderly / hospital
     outreachImages[2]  – e.g. clean-up drive or distribution

   Sports & Games collage (4 images — MosaicD: large left + 3 stacked right):
     sportsImages[0]  – e.g. football or cricket match
     sportsImages[1]  – e.g. indoor games / carrom / chess
     sportsImages[2]  – e.g. relay or track event
     sportsImages[3]  – e.g. team celebration / trophy
   ───────────────────────────────────────────────────────────────────────── */

const bibleStudyImages = [
  { src: '/hero.jpg', alt: 'Youth around an open Bible'    },
  { src: '/hero.jpg', alt: 'Small group Bible discussion'  },
  { src: '/hero.jpg', alt: 'Youth journalling and notes'   },
]

const retreatImages = [
  { src: '/hero.jpg', alt: 'Campfire worship at retreat'       },
  { src: '/hero.jpg', alt: 'Morning devotion outdoors'         },
  { src: '/hero.jpg', alt: 'Team game at retreat'              },
  { src: '/hero.jpg', alt: 'Group photo at retreat venue'      },
]

const outreachImages = [
  { src: '/hero.jpg', alt: 'Youth serving at community event'  },
  { src: '/hero.jpg', alt: 'Visiting elderly or hospital'      },
  { src: '/hero.jpg', alt: 'Clean-up drive or distribution'    },
]

const sportsImages = [
  { src: '/hero.jpg', alt: 'Youth football or cricket match'   },
  { src: '/hero.jpg', alt: 'Indoor games — carrom or chess'    },
  { src: '/hero.jpg', alt: 'Relay race or track event'         },
  { src: '/hero.jpg', alt: 'Team celebration or trophy'        },
]

/* ── Aspect-ratio shell — 4:3 box, consistent across all four cards ────── */
function AspectBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full" style={{ paddingBottom: '75%' }}>
      <div className="absolute inset-0">{children}</div>
    </div>
  )
}

/** MosaicA — tall left + 2 stacked right */
function MosaicA({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <AspectBox>
      <div className="grid grid-cols-2 gap-2 h-full">
        <div className="rounded-xl overflow-hidden row-span-2">
          <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover" />
        </div>
        <div className="rounded-xl overflow-hidden">
          <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover" />
        </div>
        <div className="rounded-xl overflow-hidden">
          <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover" />
        </div>
      </div>
    </AspectBox>
  )
}

/** MosaicB — 2×2 grid */
function MosaicB({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <AspectBox>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
        {images.map((img) => (
          <div key={img.alt} className="rounded-xl overflow-hidden">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </AspectBox>
  )
}

/** MosaicC — wide top + 2 equal bottom */
function MosaicC({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <AspectBox>
      <div className="grid grid-rows-2 gap-2 h-full">
        <div className="rounded-xl overflow-hidden">
          <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl overflow-hidden">
            <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </AspectBox>
  )
}

/** MosaicD — large left (2/3) + 3 stacked right */
function MosaicD({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <AspectBox>
      <div className="grid grid-cols-3 gap-2 h-full">
        <div className="rounded-xl overflow-hidden col-span-2 row-span-3">
          <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover" />
        </div>
        {images.slice(1).map((img) => (
          <div key={img.alt} className="rounded-xl overflow-hidden">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </AspectBox>
  )
}

/* ── Featured programme data ────────────────────────────────────────────── */
const featured = [
  {
    name: 'Bible Study',
    schedule: 'Every Friday · 6:00 PM',
    description:
      "Our weekly Bible study is the core of everything we do. Youth gather to dig deep into Scripture — not just reading words on a page but wrestling with them, asking hard questions, and letting God's truth shape how they think and live.",
    Collage: () => <MosaicA images={bibleStudyImages} />,
    flip: false,
  },
  {
    name: 'Annual Retreat',
    schedule: 'Annual · School Holidays',
    description:
      "A multi-day retreat away from the routine — packed with worship, prayer, Word sessions, outdoor activities, and the kind of deep conversations that only happen when you step away from the ordinary. The retreat is a defining moment in the year for many young people.",
    Collage: () => <MosaicB images={retreatImages} />,
    flip: true,
  },
  {
    name: 'Community Outreach',
    schedule: 'Quarterly · Throughout the Year',
    description:
      "Faith without action is incomplete. Our youth regularly serve beyond the church walls — visiting the elderly, supporting the sick, organising clean-up drives, and reaching out to the underprivileged. These are not just service projects; they are encounters with Christ.",
    Collage: () => <MosaicC images={outreachImages} />,
    flip: false,
  },
  {
    name: 'Sports & Recreation',
    schedule: 'Annual · Sports Day & Tournaments',
    description:
      "From cricket and football to relay races and indoor games, our sports events celebrate teamwork, healthy competition, and the joy of playing together. Every young person gets a chance to shine — and cheer for one another.",
    Collage: () => <MosaicD images={sportsImages} />,
    flip: true,
  },
]

/* ── Small card data ─────────────────────────────────────────────────────── */
const regular = [
  {
    name: 'Worship Nights',
    schedule: 'Monthly · Last Saturday',
    description:
      'An evening of extended, youth-led worship — live music, prayer, and an encounter with God. No programme, no rush. Just young people seeking His presence together.',
  },
  {
    name: 'Leadership Training',
    schedule: 'Annual · Weekend Camp',
    description:
      'Equipping young leaders with the skills and character to serve well — in the church, in their workplaces, and in their families. Built on servanthood, not status.',
  },
  {
    name: 'Christmas & Easter Programs',
    schedule: 'Christmas · Easter · Special Sundays',
    description:
      'Youth take the lead in drama, music, and spoken word on the church\'s most celebrated occasions — proclaiming the Gospel with creativity and conviction.',
  },
]

/* ── Component ───────────────────────────────────────────────────────────── */
export default function YouthFellowshipPrograms() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-[#f0f9ea]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">What We Do</span>
        </div>
        <h2 className="text-3xl font-bold text-stone-800 mb-2">
          Programmes &amp; Activities
        </h2>
        <p className="text-sm text-stone-500 mb-12 max-w-xl">
          Every activity is intentional — designed to help young people grow spiritually,
          deepen friendships, and serve beyond themselves.
        </p>

        {/* Featured — collage cards */}
        <div className="flex flex-col gap-8 mb-12">
          {featured.map((program) => {
            const { Collage } = program
            return (
              <div
                key={program.name}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border-2 border-[#7ed957]/20 shadow-sm bg-white"
              >
                <div className={`p-4 bg-stone-50 ${program.flip ? 'md:order-2' : 'md:order-1'}`}>
                  <Collage />
                </div>
                <div className={`flex flex-col justify-center px-8 py-8 gap-4 ${program.flip ? 'md:order-1' : 'md:order-2'}`}>
                  <span className="text-xs font-bold text-[#4a8a2a] bg-[#e8f5e0] self-start px-3 py-1 rounded-full">
                    {program.schedule}
                  </span>
                  <h3 className="text-2xl font-bold text-stone-800">{program.name}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{program.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Regular — 3-col compact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {regular.map((program) => (
            <div
              key={program.name}
              className="flex flex-col bg-white rounded-2xl border border-stone-100 overflow-hidden hover:border-[#7ed957]/40 hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col gap-2 px-5 py-5 flex-1">
                <span className="text-[10px] font-bold text-[#4a8a2a] bg-[#e8f5e0] self-start px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                  {program.schedule}
                </span>
                <h3 className="text-sm font-bold text-stone-800 leading-snug">{program.name}</h3>
                <p className="text-xs text-stone-500 leading-relaxed flex-1">{program.description}</p>
              </div>
              <div className="h-0.5 w-full bg-gradient-to-r from-[#7ed957] to-[#4a8a2a]" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

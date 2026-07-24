import React from 'react'

/* ─────────────────────────────────────────────────────────────
   PLACEHOLDERS — replace the src values below with real photos.

   Sunday School collage (3 images — MosaicA: tall-left + 2 stacked right):
     sundaySchoolImages[0]  – e.g. teacher with an open Bible / writing on board
     sundaySchoolImages[1]  – e.g. children reciting memory verse
     sundaySchoolImages[2]  – e.g. craft or drawing activity

   VBS collage (4 images — MosaicB: 2×2 grid):
     vbsImages[0]  – e.g. opening ceremony / group worship
     vbsImages[1]  – e.g. kids doing crafts
     vbsImages[2]  – e.g. drama / skit performance
     vbsImages[3]  – e.g. outdoor game or closing ceremony

   Children's Trips collage (3 images — MosaicC: wide top + 2 bottom):
     tripsImages[0]  – e.g. children at a heritage site / on the bus
     tripsImages[1]  – e.g. nature walk or picnic
     tripsImages[2]  – e.g. group photo at destination

   Children's Sports collage (4 images — MosaicD: 1 wide + 3 in a column):
     sportsImages[0]  – e.g. cricket / football match
     sportsImages[1]  – e.g. relay race or track event
     sportsImages[2]  – e.g. prize / trophy moment
     sportsImages[3]  – e.g. team huddle or group cheer
   ───────────────────────────────────────────────────────────── */

const sundaySchoolImages = [
  { src: '/hero.jpg', alt: 'Teacher with children in Sunday School' },
  { src: '/hero.jpg', alt: 'Children reciting memory verse'         },
  { src: '/hero.jpg', alt: 'Sunday School craft activity'           },
]

const vbsImages = [
  { src: '/hero.jpg', alt: 'VBS opening worship'      },
  { src: '/hero.jpg', alt: 'Kids doing VBS crafts'    },
  { src: '/hero.jpg', alt: 'VBS drama performance'    },
  { src: '/hero.jpg', alt: 'VBS outdoor games'        },
]

const tripsImages = [
  { src: '/hero.jpg', alt: 'Children at a heritage site'    },
  { src: '/hero.jpg', alt: 'Nature walk or picnic'          },
  { src: '/hero.jpg', alt: 'Group photo at destination'     },
]

const sportsImages = [
  { src: '/hero.jpg', alt: 'Children playing cricket or football' },
  { src: '/hero.jpg', alt: 'Relay race or track event'            },
  { src: '/hero.jpg', alt: 'Prize or trophy moment'               },
  { src: '/hero.jpg', alt: 'Team huddle or group cheer'           },
]

/* ── Collage layouts ─────────────────────────────────────────────────── */

/**
 * Aspect-ratio shell — forces a taller box for better visibility.
 * The inner grid uses absolute positioning to fill it completely.
 */
function AspectBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full" style={{ paddingBottom: '75%' }}>
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  )
}

/** MosaicA — tall image left, two stacked right (Sunday School) */
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

/** MosaicB — 2×2 grid (VBS) */
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

/** MosaicC — wide image on top, two equal images below (Trips) */
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

/** MosaicD — large image left (2/3 width), three stacked right (Sports) */
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

/* ── Featured programme data ─────────────────────────────────────────── */
const featured = [
  {
    name: 'Sunday School',
    schedule: 'Every Sunday · 9:00 AM',
    description:
      "The heartbeat of our children's ministry. Every Sunday before the main service, children gather by age group to study the Bible through stories, memory verses, drawing, and discussion — building a lifelong love for God's Word.",
    Collage: () => <MosaicA images={sundaySchoolImages} />,
    flip: false,
  },
  {
    name: 'Vacation Bible School',
    schedule: 'Annual · Summer Holidays',
    description:
      "An exciting week-long camp during school holidays packed with Bible lessons, songs, skits, games, crafts, and friendships. VBS is one of the most awaited events of the year — children come alive with faith and fun.",
    Collage: () => <MosaicB images={vbsImages} />,
    flip: true,
  },
  {
    name: "Children's Trips",
    schedule: 'Periodic · Throughout the Year',
    description:
      "Organised trips to Christian heritage sites, nature walks, and service outings that take learning outside the classroom. These experiences build friendship, wonder, and a living faith — because some lessons are best learned on the road.",
    Collage: () => <MosaicC images={tripsImages} />,
    flip: false,
  },
  {
    name: "Children's Sports",
    schedule: 'Annual · Sports Day & Tournaments',
    description:
      "Our annual sports events give children the chance to run, compete, and cheer for one another in a spirit of joy and sportsmanship. From relay races to cricket, every child gets a moment to shine — on and off the field.",
    Collage: () => <MosaicD images={sportsImages} />,
    flip: true,
  },
]

/* ── Small card data ─────────────────────────────────────────────────── */
const regular = [
  {
    name: 'Christmas & Easter Programs',
    schedule: 'Christmas · Easter · Special Sundays',
    description:
      'Children prepare and present drama, dance, recitation, and choir performances for the congregation on Christmas, Easter, and other special occasions — a meaningful way to celebrate and proclaim their faith.',
  },
  {
    name: "Children's Prayer Hour",
    schedule: 'Monthly · First Sunday',
    description:
      "A dedicated prayer time where children learn how to pray — for themselves, their families, their school, and the world. We believe children's prayers move mountains.",
  },
  {
    name: 'Scripture Memory',
    schedule: 'Ongoing · Weekly',
    description:
      "Children are encouraged to memorise Bible verses each week, with recognition given to those who complete milestones. Hiding God's Word in young hearts is one of the greatest gifts we can give.",
  },
]

/* ── Component ───────────────────────────────────────────────────────── */
export default function ChildrensMinistryPrograms() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-[#f0f9ea]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">What We Offer</span>
        </div>
        <h2 className="text-3xl font-bold text-stone-800 mb-2">
          Programmes &amp; Activities
        </h2>
        <p className="text-sm text-stone-500 mb-12 max-w-xl">
          Every programme is designed to meet children where they are — teaching truth in a
          way they can hold onto.
        </p>

        {/* Featured programmes — collage + text */}
        <div className="flex flex-col gap-8 mb-12">
          {featured.map((program) => {
            const { Collage } = program
            return (
              <div
                key={program.name}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border-2 border-[#7ed957]/20 shadow-sm bg-white"
              >
                {/* Collage side */}
                <div className={`p-4 bg-stone-50 ${program.flip ? 'md:order-2' : 'md:order-1'}`}>
                  <Collage />
                </div>

                {/* Text side */}
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

        {/* Regular programmes — compact 3-col card grid */}
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

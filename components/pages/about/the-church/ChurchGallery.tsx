'use client'

import { useInView } from '@/hooks/useInView'

const galleryImages = [
  { src: '/hero.jpg', alt: 'Church interior — nave and pews' },
  { src: '/hero.jpg', alt: 'Church altar with floral decorations' },
  { src: '/hero.jpg', alt: 'Church steeple against blue sky' },
  { src: '/hero.jpg', alt: 'Church interior — chancel view' },
  { src: '/hero.jpg', alt: 'Decorated altar during festival' },
  { src: '/hero.jpg', alt: 'Church tower close up' },
]

export default function ChurchGallery() {
  const [ref, visible] = useInView(0.1)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6 lg:px-16 bg-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section label — slide in */}
        <div
          className="flex items-center gap-3 mb-3 transition-all duration-600 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-20px)',
          }}
        >
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">Our Gallery</span>
        </div>
        <h2
          className="text-3xl font-bold text-stone-800 mb-8 transition-all duration-600 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-10px)',
            transitionDelay: visible ? '80ms' : '0ms',
          }}
        >
          Art at the Church
        </h2>

        {/* Grid — each image staggers in */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer transition-all duration-500 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: visible ? `${160 + i * 80}ms` : '0ms',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'

interface GalleryImage {
  src: string
  alt: string
  span?: 'wide' | 'tall' | 'normal'
}

// Placeholder images — replace src with actual church photo paths in /public
const galleryImages: GalleryImage[] = [
  { src: '/hero.jpg', alt: 'Church Sunday service', span: 'wide' },
  { src: '/hero.jpg', alt: 'Church building exterior', span: 'normal' },
  { src: '/hero.jpg', alt: 'Congregation in prayer', span: 'tall' },
  { src: '/hero.jpg', alt: 'Choir singing during worship', span: 'normal' },
  { src: '/hero.jpg', alt: 'Children ministry activity', span: 'normal' },
  { src: '/hero.jpg', alt: 'Asanam Festival gathering', span: 'wide' },
  { src: '/hero.jpg', alt: 'Youth fellowship retreat', span: 'normal' },
  { src: '/hero.jpg', alt: 'Baptism ceremony', span: 'normal' },
  { src: '/hero.jpg', alt: 'Christmas celebration', span: 'normal' },
]

function Lightbox({ images, initialIndex, onClose }: { images: GalleryImage[]; initialIndex: number; onClose: () => void }) {
  const [idx, setIdx] = useState(initialIndex)

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length)
  const next = () => setIdx((i) => (i + 1) % images.length)

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close button */}
      <button
        className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); prev() }}
        aria-label="Previous image"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image */}
      <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[idx].src}
          alt={images[idx].alt}
          className="w-full max-h-[80vh] object-contain rounded-xl"
        />
        <p className="text-center text-white/60 text-sm mt-3">{images[idx].alt}</p>
        <p className="text-center text-white/30 text-xs mt-1">{idx + 1} / {images.length}</p>
      </div>

      {/* Next */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); next() }}
        aria-label="Next image"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default function ImageMosaic() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  return (
    <section className="py-20 px-6 lg:px-16 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">Church Gallery</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight">
            Moments of <span className="text-[#4a8a2a]">Grace</span>
          </h2>
          <p className="text-sm text-stone-500 max-w-sm">
            Snapshots of our congregation at worship, service, and community — each frame a testimony of God's faithfulness.
          </p>
        </div>

        {/* Mosaic grid — 2 cols on mobile, 4 cols on desktop */}
        {/*
          Span variants:
          - 'wide' → col-span-2
          - 'tall' → row-span-2 (only applied on sm+)
          - 'normal' → 1×1
        */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" style={{ gridAutoRows: '200px' }}>
          {galleryImages.map((img, i) => {
            const colSpan = img.span === 'wide' ? 'col-span-2' : 'col-span-1'
            const rowSpan = img.span === 'tall' ? 'sm:row-span-2' : ''

            return (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${colSpan} ${rowSpan}`}
                onClick={() => setLightboxIdx(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightboxIdx(i)}
                aria-label={`View photo: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0f2310]/0 group-hover:bg-[#0f2310]/50 transition-all duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {img.alt}
                  </p>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#0f2310]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          images={galleryImages}
          initialIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </section>
  )
}

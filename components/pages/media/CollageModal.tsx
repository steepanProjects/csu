'use client'

import { useEffect, useCallback } from 'react'

interface CollageModalProps {
  label: string
  accent: string
  bg: string
  images: string[]
  onClose: () => void
}

export default function CollageModal({ label, accent, bg, images, onClose }: CollageModalProps) {
  // Close on Escape key
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  // Pad/repeat images to always have at least 9 for the grid
  const fill = (n: number) => {
    const arr: string[] = []
    for (let i = 0; i < n; i++) arr.push(images[i % images.length])
    return arr
  }
  const tiles = fill(Math.max(images.length, 9))

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: 'rgba(10,10,10,0.82)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${label} photo collage`}
    >
      {/* Panel — stop propagation so clicking inside doesn't close */}
      <div
        className="relative w-full max-w-5xl max-h-[92vh] sm:max-h-[90vh] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        style={{ backgroundColor: bg }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 shrink-0">
          <div>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: accent }}>
              Photo Gallery
            </p>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-stone-800">{label}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors duration-200 text-stone-500 hover:text-stone-800 flex-shrink-0"
            style={{ backgroundColor: `${accent}18` }}
            aria-label="Close gallery"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Collage grid — scrollable */}
        <div className="overflow-y-auto px-3 sm:px-5 pb-4 sm:pb-6">
          {/* ── Bento-style collage ── */}
          {/* Mobile: 2 columns, Desktop: 4 columns */}
          <div className="grid gap-2 sm:gap-2.5" style={{ 
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridAutoRows: '100px'
          }}>
            {/* Mobile: 2-column bento layout */}
            <div className="sm:hidden contents">
              {/* Row 1: Wide hero */}
              <div className="col-span-2 row-span-2 rounded-xl overflow-hidden group relative">
                <img src={tiles[0]} alt={`${label} 1`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Row 2: Two squares */}
              <div className="col-span-1 row-span-1 rounded-xl overflow-hidden group relative">
                <img src={tiles[1]} alt={`${label} 2`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="col-span-1 row-span-1 rounded-xl overflow-hidden group relative">
                <img src={tiles[2]} alt={`${label} 3`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              {/* Row 3: Tall portrait + square */}
              <div className="col-span-1 row-span-2 rounded-xl overflow-hidden group relative">
                <img src={tiles[3]} alt={`${label} 4`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="col-span-1 row-span-1 rounded-xl overflow-hidden group relative">
                <img src={tiles[4]} alt={`${label} 5`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              {/* Row 4: Square + photo count */}
              <div className="col-span-1 row-span-1 rounded-xl overflow-hidden group relative">
                <img src={tiles[5]} alt={`${label} 6`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              {/* Row 5: Wide panoramic */}
              <div className="col-span-2 row-span-1 rounded-xl overflow-hidden group relative">
                <img src={tiles[6]} alt={`${label} 7`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              {/* Row 6: Two squares */}
              <div className="col-span-1 row-span-1 rounded-xl overflow-hidden group relative">
                <img src={tiles[7]} alt={`${label} 8`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              
              {/* Mobile: Photo count tile */}
              <div
                className="col-span-1 row-span-1 rounded-xl flex flex-col items-center justify-center gap-1"
                style={{ backgroundColor: `${accent}22` }}
              >
                <span className="text-xl font-black" style={{ color: accent }}>{tiles.length}+</span>
                <span className="text-[9px] font-semibold text-stone-500 uppercase tracking-wide">Photos</span>
              </div>
            </div>

            {/* Desktop: Complex bento layout - 4 columns */}
            <div className="hidden sm:grid gap-2.5" style={{ 
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridAutoRows: '160px',
              gridColumn: '1 / -1'
            }}>
              {/* Row 1: wide hero + two small */}
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group relative" style={{ gridRow: '1 / 3', gridColumn: '1 / 3' }}>
                <img src={tiles[0]} alt={`${label} 1`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative">
                <img src={tiles[1]} alt={`${label} 2`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative">
                <img src={tiles[2]} alt={`${label} 3`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              {/* Row 1 right: one tall */}
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group relative" style={{ gridColumn: '3 / 5', gridRow: '2 / 4' }}>
                <img src={tiles[3]} alt={`${label} 4`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Row 3: two medium */}
              <div className="col-span-1 rounded-2xl overflow-hidden group relative" style={{ gridColumn: '1 / 2', gridRow: '3 / 4' }}>
                <img src={tiles[4]} alt={`${label} 5`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              <div className="col-span-1 rounded-2xl overflow-hidden group relative" style={{ gridColumn: '2 / 3', gridRow: '3 / 4' }}>
                <img src={tiles[5]} alt={`${label} 6`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              {/* Row 4: panoramic + small */}
              <div className="col-span-3 rounded-2xl overflow-hidden group relative" style={{ gridRow: '4 / 5' }}>
                <img src={tiles[6]} alt={`${label} 7`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="col-span-1 rounded-2xl overflow-hidden group relative" style={{ gridRow: '4 / 5' }}>
                <img src={tiles[7]} alt={`${label} 8`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              {/* Row 5: two medium + accent strip */}
              <div className="col-span-2 rounded-2xl overflow-hidden group relative" style={{ gridRow: '5 / 6' }}>
                <img src={tiles[8 % tiles.length]} alt={`${label} 9`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              <div className="col-span-1 rounded-2xl overflow-hidden group relative" style={{ gridRow: '5 / 6' }}>
                <img src={tiles[9 % tiles.length]} alt={`${label} 10`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              {/* Accent count tile */}
              <div
                className="col-span-1 rounded-2xl flex flex-col items-center justify-center gap-1"
                style={{ backgroundColor: `${accent}22`, gridRow: '5 / 6' }}
              >
                <span className="text-2xl font-black" style={{ color: accent }}>{tiles.length}+</span>
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wide">Photos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer accent bar */}
        <div className="h-1 shrink-0" style={{ background: `linear-gradient(90deg, ${accent}, ${accent}55)` }} />
      </div>
    </div>
  )
}

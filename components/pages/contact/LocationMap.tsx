'use client'

import { useInView } from '@/hooks/useInView'

export default function LocationMap() {
  const streetViewSrc =
    'https://www.google.com/maps/embed?pb=!4v1700000000000!6m8!1m7!1sFLjHMGHRuoBp3OzqVbMtfA!2m2!1d11.02180!2d76.92070!3f180!4f0!5f0.7820865974627469'

  const [ref, visible] = useInView(0.1)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6 lg:px-16 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header row — fade + slide down */}
        <div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-20px)',
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-px bg-[#7ed957]" />
              <span className="text-sm font-semibold text-[#4a8a2a]">Find us</span>
            </div>
            <h2 className="text-3xl font-bold text-stone-800">Visit in Person</h2>
          </div>
          <a
            href="https://maps.google.com/?q=CSI+Christ+Church+Podanur+Coimbatore"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#4a8a2a] text-[#4a8a2a] text-sm font-semibold hover:bg-[#4a8a2a] hover:text-white transition-colors duration-200 self-start sm:self-auto shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Open in Google Maps
          </a>
        </div>

        {/* Map card — fade + scale up, delayed */}
        <div
          className="rounded-2xl overflow-hidden border border-stone-100 shadow-md transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1) translateY(0)' : 'scale(0.98) translateY(20px)',
            transitionDelay: visible ? '150ms' : '0ms',
          }}
        >
          <div className="relative w-full" style={{ paddingBottom: '42%', minHeight: 300 }}>
            <iframe
              title="CSI Union Church Podanur — Street View"
              src={streetViewSrc}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="bg-[#f8fdf5] px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 border-t border-stone-100">
            <div className="flex items-center gap-2.5 text-stone-600 text-sm">
              <svg className="w-4 h-4 text-[#4a8a2a] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>
                <span className="font-semibold text-stone-800">CSI Union Church</span>
                {' '}· Podanur, Alandurai–Karunya Nagar, Coimbatore 641 023
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

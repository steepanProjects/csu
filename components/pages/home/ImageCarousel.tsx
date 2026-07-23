/**
 * Auto-scrolling infinite image strip.
 * Uses the .animate-marquee class + @keyframes marquee defined in globals.css.
 * Replace src placeholders with real image paths when available.
 */

const images = [
  { src: '/hero.jpg', alt: 'Christmas celebration with congregation' },
  { src: '/hero.jpg', alt: 'Procession through the village road' },
  { src: '/hero.jpg', alt: 'Community meal gathering' },
  { src: '/hero.jpg', alt: 'Outdoor fellowship event' },
  { src: '/hero.jpg', alt: 'Interior of the church during service' },
  { src: '/hero.jpg', alt: 'Candlelight service' },
]

export default function ImageCarousel() {
  return (
    <section className="w-full overflow-hidden bg-white">
      {/*
        .animate-marquee slides the track left by 50% (one full copy width)
        then resets — creating a seamless infinite loop.
        Two identical copies of the image list are rendered side-by-side.
      */}
      <div className="animate-marquee">
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 h-52 md:h-64"
            style={{ width: '260px', marginRight: '4px' }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

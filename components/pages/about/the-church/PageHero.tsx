import Link from 'next/link'

interface PageHeroProps {
  title: string
  breadcrumbs: { label: string; href?: string }[]
}

export default function PageHero({ title, breadcrumbs }: PageHeroProps) {
  return (
    <section
      
      className="relative w-full"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-[#0f2310]/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-40 pb-16">
        <h1 id="page-hero" className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/40">›</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="text-white/70 hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#7ed957] font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  )
}

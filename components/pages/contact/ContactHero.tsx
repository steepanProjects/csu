import Link from 'next/link'

export default function ContactHero() {
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
      <div className="absolute inset-0 bg-[#0f2310]/70" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-40 pb-16">
        <h1 id="page-hero" className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-white/65 text-base max-w-md mb-6 leading-relaxed">
          We'd love to hear from you. Reach out by phone, email, or visit us any Sunday.
        </p>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
          <span className="text-white/40">›</span>
          <span className="text-[#7ed957] font-medium">Contact</span>
        </nav>
      </div>
    </section>
  )
}

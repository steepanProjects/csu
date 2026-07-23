'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const aboutLinks  = ['Worship', 'Sermons', 'Events', 'Outreach', 'Our Team']
const quickLinks  = ['Donate', 'Our Diocese', 'Synod', 'Downloads']
const supportLinks = ['Services', 'Assistance', 'Crisis Hotline', 'Spiritual Guidance']

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="relative bg-[#2a1f14] overflow-hidden">

      {/* Faint church interior photo overlay — purely decorative */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark scrim so text is readable */}
      <div className="absolute inset-0 bg-[#2a1f14]/70 pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-14 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-white/10">

          {/* Col 1 — Brand + contact */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 w-fit">
              <Image src="/logo.svg" alt="CSI Christ Church logo" width={44} height={44} className="drop-shadow-md" />
              <div className="flex flex-col leading-tight text-white">
                <span className="text-[9px] font-semibold tracking-[0.25em] uppercase opacity-60">CSI</span>
                <span className="text-lg font-bold tracking-wide">
                  Christ<span className="text-[#7ed957]">✝</span>
                </span>
                <span className="text-[9px] font-semibold tracking-[0.2em] uppercase opacity-60">Church</span>
              </div>
            </Link>

            {/* Contact */}
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a href="tel:+919181456846878" className="flex items-center gap-2 hover:text-[#7ed957] transition-colors">
                {/* Phone icon */}
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338A18.755 18.755 0 0121.75 6.338M2.25 6.338C2.25 15.4 9.716 22.75 18.75 22.75h.75a2.25 2.25 0 002.25-2.25v-1.372a2.25 2.25 0 00-1.628-2.163l-3.228-.969a2.25 2.25 0 00-2.456.84l-.663.994a16.31 16.31 0 01-7.068-7.068l.994-.663a2.25 2.25 0 00.84-2.456l-.969-3.228A2.25 2.25 0 003.622 2.25H2.25" />
                </svg>
                91 81456 46878
              </a>
              <div className="flex items-start gap-2">
                {/* Location icon */}
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="leading-snug">Mathuvarayapuram,<br />Coimbatore 641 101</span>
              </div>
            </div>

            {/* Social icons */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-3">Follow Us</p>
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a href="#" aria-label="Facebook" className="text-white/60 hover:text-[#7ed957] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="text-white/60 hover:text-[#7ed957] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308C2.495 19.467 2.224 18.2 2.163 16.834 2.104 15.568 2.093 15.188 2.093 12s.012-3.584.07-4.85C2.224 5.784 2.495 4.517 3.47 3.542c.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" aria-label="YouTube" className="text-white/60 hover:text-[#7ed957] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2 — About Us links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">About Us</h4>
            <ul className="flex flex-col gap-3">
              {aboutLinks.map((label) => (
                <li key={label}>
                  <Link href="#" className="text-sm text-white/60 hover:text-[#7ed957] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((label) => (
                <li key={label}>
                  <Link href="#" className="text-sm text-white/60 hover:text-[#7ed957] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Support */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Support</h4>
            <ul className="flex flex-col gap-3">
              {supportLinks.map((label) => (
                <li key={label}>
                  <Link href="#" className="text-sm text-white/60 hover:text-[#7ed957] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 — Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Subscribe Newsletter</h4>
            <p className="text-xs text-white/50 mb-4 leading-relaxed">
              Subscribe our newsletter to get the latest news and updates!
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail('') }}
              className="flex items-center rounded-full overflow-hidden bg-white/10 border border-white/15 focus-within:border-[#7ed957]/60 transition-colors"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email..."
                required
                className="flex-1 bg-transparent px-4 py-2.5 text-xs text-white placeholder-white/40 outline-none min-w-0"
              />
              <button
                type="submit"
                className="flex-shrink-0 bg-[#c8a97a] hover:bg-[#7ed957] text-white text-xs font-semibold px-4 py-2.5 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-[10px] text-white/30">* Your email is kept private</p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs text-white/30">
          <p>
            © 2025{' '}
            <Link href="/" className="text-[#7ed957] hover:underline font-medium">
              CSI Christ Church
            </Link>
            {' '}| All Right Reserved
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white/60 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white/60 transition-colors">Privacy policy</Link>
            <Link href="#" className="hover:text-white/60 transition-colors">Developer</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

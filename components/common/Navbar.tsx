'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'History', href: '/history' },
  { label: 'Fellowships', href: '/fellowships' },
  { label: 'Events', href: '/events' },
  { label: 'Media', href: '/media' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <nav className="mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="CSI Christ Church logo"
            width={56}
            height={56}
            priority
            className="drop-shadow-md"
          />
          <div className="flex flex-col leading-tight text-white">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase opacity-70">
              CSI
            </span>
            <span className="text-xl font-bold tracking-wide">
              Union<span className="text-[#7ed957]">✝</span>
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-70">
              Church
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-[#7ed957] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Donate button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/donate"
            className="flex items-center gap-2 rounded-full bg-[#7ed957] px-5 py-2 text-sm font-semibold text-white hover:bg-[#5cb83a] transition-colors duration-200"
          >
            Donate
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm px-6 pb-6">
          <ul className="flex flex-col gap-4 text-sm font-medium text-white pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block hover:text-[#7ed957] transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-[#7ed957] px-5 py-2 text-sm font-semibold text-white hover:bg-[#5cb83a] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Donate →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function AuthNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Always blurred background with dark text */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md shadow-sm" />
      
      <nav className="relative mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="CSI Union Church logo"
            width={56}
            height={56}
            priority
            className="drop-shadow-md"
          />
          <div className="flex flex-col leading-tight text-stone-800">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase opacity-70">CSI</span>
            <span className="text-xl font-bold tracking-wide">
              Union<span className="text-[#7ed957]">✝</span>
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-70">Church</span>
          </div>
        </Link>

        {/* Right side links */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-stone-700 hover:text-[#7ed957] transition-colors"
          >
            ← Back to Home
          </Link>
          <Link
            href="/donate"
            className="hidden sm:flex items-center gap-2 rounded-full bg-[#7ed957] px-5 py-2 text-sm font-semibold text-white hover:bg-[#5cb83a] transition-colors duration-200"
          >
            Donate
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

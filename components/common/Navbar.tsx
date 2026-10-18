'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const aboutDropdown = [
  { label: 'The Church', href: '/about/the-church' },
  { label: 'Our Bishop', href: '/about/our-bishop' },
  { label: 'Our Team',   href: '/about/our-team'   },
]

const historyDropdown = [
  { label: 'Church History',       href: '/history/church-history'       },
  { label: 'Former Presbyters',    href: '/history/former-presbyters'    },
  { label: 'Former Office Bearers', href: '/history/former-office-bearers' },
]

const fellowshipDropdown = [
  { label: "Men's Fellowship",  href: '/fellowships/mens-fellowship'   },
  { label: "Women's Fellowship", href: '/fellowships/womens-fellowship' },
  { label: 'Children Ministry', href: '/fellowships/children-ministry' },
  { label: 'Youth Fellowship',  href: '/fellowships/youth-fellowship'  },
  { label: 'Choir',             href: '/fellowships/choir'             }
]

const eventsDropdown = [
  { label: 'Special Events', href: '/events/special-events' },
  { label: 'Regular Events', href: '/events/regular-events' },
  { label: 'Calendar',       href: '/events/calendar'       },
]

const navLinks = [
  { label: 'Home',        href: '/' },
  { label: 'About Us',    href: '/about',        hasDropdown: true, key: 'about'      },
  { label: 'History',     href: '/history',      hasDropdown: true, key: 'history'    },
  { label: 'Fellowships', href: '/fellowships',  hasDropdown: true, key: 'fellowship' },
  { label: 'Events',      href: '/events',       hasDropdown: true, key: 'events'     },
  { label: 'Media',       href: '/media' },
  { label: 'Contact',     href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]               = useState(false)
  const [aboutOpen, setAboutOpen]             = useState(false)
  const [historyOpen, setHistoryOpen]         = useState(false)
  const [fellowshipOpen, setFellowshipOpen]   = useState(false)
  const [eventsOpen, setEventsOpen]           = useState(false)
  const [mobileAbout, setMobileAbout]         = useState(false)
  const [mobileHistory, setMobileHistory]     = useState(false)
  const [mobileFellowship, setMobileFellowship] = useState(false)
  const [mobileEvents, setMobileEvents]       = useState(false)
  const [scrolled, setScrolled]               = useState(false)
  const headerRef       = useRef<HTMLElement>(null)
  const closeTimer      = useRef<ReturnType<typeof setTimeout> | null>(null)
  const historyTimer    = useRef<ReturnType<typeof setTimeout> | null>(null)
  const fellowshipTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const eventsTimer     = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openAbout        = () => { if (closeTimer.current)      clearTimeout(closeTimer.current);      setAboutOpen(true) }
  const scheduleClose    = () => { closeTimer.current      = setTimeout(() => setAboutOpen(false), 120) }
  const openHistory      = () => { if (historyTimer.current)    clearTimeout(historyTimer.current);    setHistoryOpen(true) }
  const scheduleCloseH   = () => { historyTimer.current    = setTimeout(() => setHistoryOpen(false), 120) }
  const openFellowship   = () => { if (fellowshipTimer.current) clearTimeout(fellowshipTimer.current); setFellowshipOpen(true) }
  const scheduleCloseF   = () => { fellowshipTimer.current = setTimeout(() => setFellowshipOpen(false), 120) }
  const openEvents       = () => { if (eventsTimer.current)     clearTimeout(eventsTimer.current);     setEventsOpen(true) }
  const scheduleCloseE   = () => { eventsTimer.current     = setTimeout(() => setEventsOpen(false), 120) }

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const publishHeight = () => {
      const h = header.offsetHeight
      document.documentElement.style.setProperty('--navbar-h', `${h}px`)
    }

    // Publish height immediately and on resize
    publishHeight()
    const ro = new ResizeObserver(publishHeight)
    ro.observe(header)

    const onScroll = () => {
      const navH = header.offsetHeight

      // Blur when scrolled down more than navbar height OR when specific sections are reached
      const scrollThreshold = navH * 0.8 // Trigger at 80% of navbar height
      const scrollTriggered = window.scrollY > scrollThreshold

      // Also check for specific trigger sections (for hero sections, etc.)
      const triggerIds = ['about-section', 'explore-us', 'page-hero', 'head']
      const sectionTriggered = triggerIds.some((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        return el.getBoundingClientRect().top <= navH
      })

      setScrolled(scrollTriggered || sectionTriggered)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // run once on mount

    return () => {
      ro.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${menuOpen ? 'rounded-b-2xl' : ''}`}>
      {/* Unified blur background for entire header */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/30 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      } ${menuOpen ? 'rounded-b-2xl' : ''}`} />
      
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
          <div className={`flex flex-col leading-tight transition-colors duration-300 ${scrolled || menuOpen ? 'text-stone-800' : 'text-white'}`}>
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase opacity-70">CSI</span>
            <span className="text-xl font-bold tracking-wide">
              Union<span className="text-[#7ed957]">✝</span>
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-70">Church</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className={`hidden md:flex items-center gap-6 text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-stone-700' : 'text-white'}`}>
          {navLinks.map((link) => {
            if (link.key === 'about') return (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={openAbout}
                onMouseLeave={scheduleClose}
              >
                <button
                  className="flex items-center gap-1 hover:text-[#7ed957] transition-colors duration-200"
                  aria-haspopup="true"
                  aria-expanded={aboutOpen}
                >
                  {link.label}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  onMouseEnter={openAbout}
                  onMouseLeave={scheduleClose}
                  style={{
                    opacity: aboutOpen ? 1 : 0,
                    transform: aboutOpen ? 'translateY(0)' : 'translateY(-8px)',
                    pointerEvents: aboutOpen ? 'auto' : 'none',
                    transition: 'opacity 0.22s ease, transform 0.22s ease',
                  }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 rounded-xl overflow-hidden bg-white border border-stone-100 shadow-xl shadow-black/10"
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-stone-100 rotate-45" />
                  <ul className="relative py-3">
                    {aboutDropdown.map((item, i) => (
                      <li key={item.href}>
                        <Link href={item.href} className="block px-5 py-2.5 text-sm text-stone-600 hover:text-[#7ed957] hover:text-base transition-all duration-150" onClick={() => setAboutOpen(false)}>
                          {item.label}
                        </Link>
                        {i < aboutDropdown.length - 1 && <div className="mx-4 h-px bg-stone-100" />}
                      </li>
                    ))}
                  </ul>
                  <div className="h-0.5 w-full bg-[#7ed957]" />
                </div>
              </li>
            )

            if (link.key === 'history') return (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={openHistory}
                onMouseLeave={scheduleCloseH}
              >
                <button
                  className="flex items-center gap-1 hover:text-[#7ed957] transition-colors duration-200"
                  aria-haspopup="true"
                  aria-expanded={historyOpen}
                >
                  {link.label}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${historyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  onMouseEnter={openHistory}
                  onMouseLeave={scheduleCloseH}
                  style={{
                    opacity: historyOpen ? 1 : 0,
                    transform: historyOpen ? 'translateY(0)' : 'translateY(-8px)',
                    pointerEvents: historyOpen ? 'auto' : 'none',
                    transition: 'opacity 0.22s ease, transform 0.22s ease',
                  }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl overflow-hidden bg-white border border-stone-100 shadow-xl shadow-black/10"
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-stone-100 rotate-45" />
                  <ul className="relative py-3">
                    {historyDropdown.map((item, i) => (
                      <li key={item.href}>
                        <Link href={item.href} className="block px-5 py-2.5 text-sm text-stone-600 hover:text-[#7ed957] hover:text-base transition-all duration-150" onClick={() => setHistoryOpen(false)}>
                          {item.label}
                        </Link>
                        {i < historyDropdown.length - 1 && <div className="mx-4 h-px bg-stone-100" />}
                      </li>
                    ))}
                  </ul>
                  <div className="h-0.5 w-full bg-[#7ed957]" />
                </div>
              </li>
            )

            if (link.key === 'fellowship') return (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={openFellowship}
                onMouseLeave={scheduleCloseF}
              >
                <button
                  className="flex items-center gap-1 hover:text-[#7ed957] transition-colors duration-200"
                  aria-haspopup="true"
                  aria-expanded={fellowshipOpen}
                >
                  {link.label}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${fellowshipOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  onMouseEnter={openFellowship}
                  onMouseLeave={scheduleCloseF}
                  style={{
                    opacity: fellowshipOpen ? 1 : 0,
                    transform: fellowshipOpen ? 'translateY(0)' : 'translateY(-8px)',
                    pointerEvents: fellowshipOpen ? 'auto' : 'none',
                    transition: 'opacity 0.22s ease, transform 0.22s ease',
                  }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-xl overflow-hidden bg-white border border-stone-100 shadow-xl shadow-black/10"
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-stone-100 rotate-45" />
                  <ul className="relative py-3">
                    {fellowshipDropdown.map((item, i) => (
                      <li key={item.href}>
                        <Link href={item.href} className="block px-5 py-2.5 text-sm text-stone-600 hover:text-[#7ed957] hover:text-base transition-all duration-150" onClick={() => setFellowshipOpen(false)}>
                          {item.label}
                        </Link>
                        {i < fellowshipDropdown.length - 1 && <div className="mx-4 h-px bg-stone-100" />}
                      </li>
                    ))}
                  </ul>
                  <div className="h-0.5 w-full bg-[#7ed957]" />
                </div>
              </li>
            )

            if (link.key === 'events') return (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={openEvents}
                onMouseLeave={scheduleCloseE}
              >
                <button
                  className="flex items-center gap-1 hover:text-[#7ed957] transition-colors duration-200"
                  aria-haspopup="true"
                  aria-expanded={eventsOpen}
                >
                  {link.label}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${eventsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  onMouseEnter={openEvents}
                  onMouseLeave={scheduleCloseE}
                  style={{
                    opacity: eventsOpen ? 1 : 0,
                    transform: eventsOpen ? 'translateY(0)' : 'translateY(-8px)',
                    pointerEvents: eventsOpen ? 'auto' : 'none',
                    transition: 'opacity 0.22s ease, transform 0.22s ease',
                  }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 rounded-xl overflow-hidden bg-white border border-stone-100 shadow-xl shadow-black/10"
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-stone-100 rotate-45" />
                  <ul className="relative py-3">
                    {eventsDropdown.map((item, i) => (
                      <li key={item.href}>
                        <Link href={item.href} className="block px-5 py-2.5 text-sm text-stone-600 hover:text-[#7ed957] hover:text-base transition-all duration-150" onClick={() => setEventsOpen(false)}>
                          {item.label}
                        </Link>
                        {i < eventsDropdown.length - 1 && <div className="mx-4 h-px bg-stone-100" />}
                      </li>
                    ))}
                  </ul>
                  <div className="h-0.5 w-full bg-[#7ed957]" />
                </div>
              </li>
            )

            return (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#7ed957] transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            )
          })}
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
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-6 transition-all duration-200 ${scrolled || menuOpen ? 'bg-stone-800' : 'bg-white'} ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 transition-all duration-200 ${scrolled || menuOpen ? 'bg-stone-800' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 transition-all duration-200 ${scrolled || menuOpen ? 'bg-stone-800' : 'bg-white'} ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div 
        className={`md:hidden relative overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <ul className="flex flex-col gap-4 text-sm font-semibold text-stone-900 pt-4">
            {navLinks.map((link) => {
              if (link.key === 'about') return (
                <li key={link.href}>
                  <button className="flex items-center gap-1 w-full hover:text-[#7ed957] transition-colors duration-200" onClick={() => {
                    setMobileAbout((v) => !v)
                    setMobileHistory(false)
                    setMobileFellowship(false)
                    setMobileEvents(false)
                  }}>
                    {link.label}
                    <svg className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 ${mobileAbout ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileAbout ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <ul className="ml-4 flex flex-col gap-3 border-l-2 border-stone-700/40 pl-4">
                      {aboutDropdown.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="text-stone-800 font-medium hover:text-[#7ed957] transition-colors" onClick={() => { setMenuOpen(false); setMobileAbout(false) }}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )

              if (link.key === 'history') return (
                <li key={link.href}>
                  <button className="flex items-center gap-1 w-full hover:text-[#7ed957] transition-colors duration-200" onClick={() => {
                    setMobileHistory((v) => !v)
                    setMobileAbout(false)
                    setMobileFellowship(false)
                    setMobileEvents(false)
                  }}>
                    {link.label}
                    <svg className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 ${mobileHistory ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileHistory ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <ul className="ml-4 flex flex-col gap-3 border-l-2 border-stone-700/40 pl-4">
                      {historyDropdown.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="text-stone-800 font-medium hover:text-[#7ed957] transition-colors" onClick={() => { setMenuOpen(false); setMobileHistory(false) }}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )

              if (link.key === 'fellowship') return (
                <li key={link.href}>
                  <button className="flex items-center gap-1 w-full hover:text-[#7ed957] transition-colors duration-200" onClick={() => {
                    setMobileFellowship((v) => !v)
                    setMobileAbout(false)
                    setMobileHistory(false)
                    setMobileEvents(false)
                  }}>
                    {link.label}
                    <svg className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 ${mobileFellowship ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileFellowship ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <ul className="ml-4 flex flex-col gap-3 border-l-2 border-stone-700/40 pl-4">
                      {fellowshipDropdown.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="text-stone-800 font-medium hover:text-[#7ed957] transition-colors" onClick={() => { setMenuOpen(false); setMobileFellowship(false) }}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )

              if (link.key === 'events') return (
                <li key={link.href}>
                  <button className="flex items-center gap-1 w-full hover:text-[#7ed957] transition-colors duration-200" onClick={() => {
                    setMobileEvents((v) => !v)
                    setMobileAbout(false)
                    setMobileHistory(false)
                    setMobileFellowship(false)
                  }}>
                    {link.label}
                    <svg className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 ${mobileEvents ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileEvents ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <ul className="ml-4 flex flex-col gap-3 border-l-2 border-stone-700/40 pl-4">
                      {eventsDropdown.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="text-stone-800 font-medium hover:text-[#7ed957] transition-colors" onClick={() => { setMenuOpen(false); setMobileEvents(false) }}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )

              return (
                <li key={link.href}>
                  <Link href={link.href} className="block hover:text-[#7ed957] transition-colors duration-200" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li>
              <Link href="/donate" className="inline-flex items-center gap-2 rounded-full bg-[#7ed957] px-5 py-2 text-sm font-semibold text-white hover:bg-[#5cb83a] transition-colors duration-200" onClick={() => setMenuOpen(false)}>
                Donate →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

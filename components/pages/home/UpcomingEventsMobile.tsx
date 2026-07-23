'use client'

import { useRef, useState, useEffect } from 'react'

function generateDates() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return Array.from({ length: 21 }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() + (i - 10))
    return d
  })
}

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const DAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

const EVENT_DATA: Record<string, { title: string; time: string } | null> = {
  '-10': { title: 'Morning Prayer & Worship', time: '06:00 AM – 07:30 AM' },
  '-9':  null,
  '-8':  { title: 'Youth Bible Study', time: '05:00 PM – 06:30 PM' },
  '-7':  { title: "Women's Fellowship Meeting", time: '10:00 AM – 12:00 PM' },
  '-6':  null,
  '-5':  { title: 'Sunday Worship Service', time: '09:00 AM – 11:00 AM' },
  '-4':  { title: 'Choir Practice', time: '06:00 PM – 07:30 PM' },
  '-3':  null,
  '-2':  { title: "Men's Prayer Breakfast", time: '07:00 AM – 08:30 AM' },
  '-1':  { title: 'Evening Devotion', time: '07:00 PM – 08:00 PM' },
   '0':  { title: 'Harvest Festival and Thanks-Giving Service 2026', time: '07:30 AM – 12:30 PM' },
   '1':  { title: "Children's Sunday School", time: '09:30 AM – 11:00 AM' },
   '2':  null,
   '3':  { title: 'Prayer & Intercession Night', time: '09:00 PM – 11:00 PM' },
   '4':  { title: 'Community Outreach Programme', time: '08:00 AM – 01:00 PM' },
   '5':  null,
   '6':  { title: 'Sunday Worship Service', time: '09:00 AM – 11:00 AM' },
   '7':  { title: 'Leadership Training', time: '04:00 PM – 06:00 PM' },
   '8':  null,
   '9':  { title: 'Youth Praise Night', time: '06:30 PM – 09:00 PM' },
  '10':  { title: 'Quarterly Church Meeting', time: '10:00 AM – 12:30 PM' },
}

const ITEM_H = 64
const TODAY_INDEX = 10

export default function UpcomingEventsMobile() {
  const dates = generateDates()
  const [selectedIndex, setSelectedIndex] = useState(TODAY_INDEX)
  const scrollRef = useRef<HTMLDivElement>(null)
  const centreIndexRef = useRef(TODAY_INDEX)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTop = TODAY_INDEX * ITEM_H
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let rafId: number
    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const index = Math.round(el.scrollTop / ITEM_H)
        const clamped = Math.max(0, Math.min(20, index))
        if (clamped !== centreIndexRef.current) {
          centreIndexRef.current = clamped
          setSelectedIndex(clamped)
        }
      })
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const offset = selectedIndex - TODAY_INDEX
  const event = EVENT_DATA[String(offset)] ?? null

  return (
    <section className="lg:hidden bg-white px-6 py-10">
      <h2 className="text-xl font-bold text-stone-800 mb-6">Upcoming Events</h2>

      {/* Card: vertical date scroll on left, event details on right */}
      <div className="rounded-2xl bg-stone-50 border border-stone-100 flex overflow-hidden" style={{ height: `${ITEM_H * 3}px` }}>

        {/* Vertical date scroll column */}
        <div className="relative flex-shrink-0 bg-white border-r border-stone-100" style={{ width: '68px' }}>
          {/* Fade top */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
          {/* Fade bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="w-full h-full flex flex-col overflow-y-scroll"
            style={{
              scrollbarWidth: 'none',
              scrollSnapType: 'y mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {/* Top spacer */}
            <div style={{ minHeight: `${ITEM_H}px`, flexShrink: 0 }} />

            {dates.map((date, i) => {
              const isSelected = i === selectedIndex
              return (
                <div
                  key={i}
                  style={{ height: `${ITEM_H}px`, flexShrink: 0, scrollSnapAlign: 'center' }}
                  className="flex items-center justify-center px-2 cursor-pointer"
                  onClick={() => {
                    setSelectedIndex(i)
                    scrollRef.current?.scrollTo({ top: i * ITEM_H, behavior: 'smooth' })
                  }}
                >
                  <div className={`flex flex-col items-center justify-center rounded-xl w-full py-1.5 transition-all duration-200 ${
                    isSelected ? 'bg-[#7ed957]' : 'bg-transparent opacity-40 hover:opacity-70'
                  }`}>
                    <span className={`text-lg font-bold leading-none ${isSelected ? 'text-white' : 'text-stone-700'}`}>
                      {date.getDate()}
                    </span>
                    <span className={`text-[9px] font-semibold uppercase tracking-wider mt-0.5 ${isSelected ? 'text-white/80' : 'text-stone-500'}`}>
                      {MONTHS[date.getMonth()]}
                    </span>
                    <span className={`text-[9px] ${isSelected ? 'text-white/70' : 'text-stone-400'}`}>
                      {DAYS[date.getDay()]}
                    </span>
                  </div>
                </div>
              )
            })}

            {/* Bottom spacer */}
            <div style={{ minHeight: `${ITEM_H}px`, flexShrink: 0 }} />
          </div>
        </div>

        {/* Event details — right side, vertically centred */}
        <div className="flex-1 flex items-center px-5">
          {event ? (
            <div className="flex flex-col gap-1.5">
              <p className="text-sm font-semibold text-stone-800 leading-snug">{event.title}</p>
              <p className="flex items-center gap-1 text-xs text-stone-500">
                <span aria-hidden="true">🕐</span>
                {event.time}
              </p>
            </div>
          ) : (
            <p className="text-sm text-stone-400 italic">No events scheduled</p>
          )}
        </div>
      </div>
    </section>
  )
}

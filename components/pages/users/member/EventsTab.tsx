'use client'

import { useState, useEffect } from 'react'

const upcomingEvents = [
  { id: 1, title: 'Sunday Service', date: '2024-01-21', time: '9:00 AM', location: 'Main Church', category: 'Worship' },
  { id: 2, title: 'Bible Study', date: '2024-01-24', time: '7:00 PM', location: 'Fellowship Hall', category: 'Study' },
  { id: 3, title: 'Youth Meeting', date: '2024-01-26', time: '6:00 PM', location: 'Youth Center', category: 'Fellowship' },
  { id: 4, title: 'Prayer Meeting', date: '2024-01-28', time: '6:30 AM', location: 'Prayer Room', category: 'Prayer' },
]

export default function EventsTab() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="lg:col-span-3">
      <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-stone-800">All Events</h3>
          <button className="px-4 py-2 bg-gradient-to-r from-[#7ed957] to-[#5cb83a] hover:from-[#5cb83a] hover:to-[#7ed957] text-white rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg active:scale-[0.98]">
            + Add to Calendar
          </button>
        </div>
        {mounted ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border border-stone-200 rounded-xl p-4 hover:border-[#7ed957] hover:shadow-md transition-all bg-gradient-to-br from-white to-stone-50/50">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-stone-800 flex-1 pr-2">{event.title}</h4>
                  <span className="text-xs bg-gradient-to-r from-[#7ed957]/20 to-[#5cb83a]/20 text-[#5cb83a] px-2.5 py-1 rounded-full border border-[#7ed957]/30 font-medium flex-shrink-0">
                    {event.category}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-xs sm:text-sm text-stone-600 flex items-center gap-2">
                    <span>📅</span>
                    <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 flex items-center gap-2">
                    <span>🕐</span>
                    <span>{event.time}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 flex items-center gap-2">
                    <span>📍</span>
                    <span>{event.location}</span>
                  </p>
                </div>
                <button className="w-full px-4 py-2.5 bg-gradient-to-r from-[#7ed957] to-[#5cb83a] hover:from-[#5cb83a] hover:to-[#7ed957] text-white rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md active:scale-[0.98]">
                  Add to Calendar
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-12 h-12 border-4 border-[#7ed957] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-stone-400 text-sm">Loading events...</p>
          </div>
        )}
      </div>
    </div>
  )
}

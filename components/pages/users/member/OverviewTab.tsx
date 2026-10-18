'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const upcomingEvents = [
  { id: 1, title: 'Sunday Service', date: '2024-01-21', time: '9:00 AM', location: 'Main Church' },
  { id: 2, title: 'Bible Study', date: '2024-01-24', time: '7:00 PM', location: 'Fellowship Hall' },
  { id: 3, title: 'Youth Meeting', date: '2024-01-26', time: '6:00 PM', location: 'Youth Center' },
]

const announcements = [
  { id: 1, title: 'New Year Service', message: 'Special thanksgiving service on January 1st at 6:00 AM', date: '2024-01-15' },
  { id: 2, title: 'Choir Rehearsal', message: 'All choir members requested to attend rehearsal on Saturday', date: '2024-01-14' },
  { id: 3, title: 'Outreach Program', message: 'Community service program scheduled for next month', date: '2024-01-13' },
]

const memberData = {
  email: 'john.doe@example.com',
  phone: '+91 98765 43210',
  fellowship: 'Youth Fellowship',
  memberSince: '2015',
}

const contributions = {
  thisMonth: 5000,
}

interface OverviewTabProps {
  eventsCount: number
  fellowship: string
}

export default function OverviewTab({ eventsCount, fellowship }: OverviewTabProps) {
  return (
    <>
      {/* Left Column - Main Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          <StatCard title="Contributions" value={`₹${contributions.thisMonth.toLocaleString()}`} subtitle="This month" color="bg-green-50 text-green-600" />
          <StatCard title="Events" value={eventsCount} subtitle="Upcoming" color="bg-purple-50 text-purple-600" />
          <StatCard title="Fellowship" value={fellowship.split(' ')[0]} subtitle="Active" color="bg-orange-50 text-orange-600" />
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base sm:text-lg font-semibold text-stone-800">Upcoming Events</h3>
            <Link href="#" className="text-xs sm:text-sm text-[#7ed957] hover:text-[#5cb83a] font-medium">
              View All →
            </Link>
          </div>
          <div className="space-y-2 sm:space-y-3">
            {upcomingEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-stone-800 mb-4">Latest Announcements</h3>
          <div className="space-y-3 sm:space-y-4">
            {announcements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Sidebar */}
      <div className="space-y-4 sm:space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-stone-800 mb-4">My Profile</h3>
          <div className="space-y-3 text-sm">
            <ProfileField label="Email" value={memberData.email} />
            <ProfileField label="Phone" value={memberData.phone} />
            <ProfileField label="Fellowship" value={memberData.fellowship} />
            <ProfileField label="Member Since" value={memberData.memberSince} />
          </div>
          <button className="w-full mt-4 px-4 py-2.5 bg-gradient-to-r from-stone-100 to-stone-50 hover:from-stone-200 hover:to-stone-100 text-stone-700 rounded-lg text-sm font-medium transition-all">
            Edit Profile
          </button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-stone-800 mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <QuickActionButton icon="💝" label="Make a Donation" />
            <QuickActionButton icon="📖" label="Request Prayer" />
            <QuickActionButton icon="📧" label="Contact Pastor" />
            <QuickActionButton icon="📄" label="Download Certificate" />
          </div>
        </div>

        {/* Verse of the Day */}
        <div className="bg-gradient-to-br from-[#7ed957]/10 to-[#5cb83a]/10 rounded-xl p-4 sm:p-6 border border-[#7ed957]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#7ed957]/10 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#5cb83a] mb-3">Verse of the Day</p>
            <p className="text-sm text-stone-700 leading-relaxed mb-3">
              "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
            </p>
            <p className="text-xs font-semibold text-[#7ed957]">— John 3:16</p>
          </div>
        </div>
      </div>
    </>
  )
}

// Helper Components
function StatCard({ title, value, subtitle, color }: { title: string; value: string | number; subtitle: string; color: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-4 hover:shadow-md transition-shadow">
      <p className="text-xs text-stone-500 mb-2 font-medium">{title}</p>
      <p className={`text-xl sm:text-2xl font-bold ${color.split(' ')[1]} mb-1`}>{value}</p>
      <p className="text-xs text-stone-400">{subtitle}</p>
    </div>
  )
}

function EventCard({ event }: { event: typeof upcomingEvents[0] }) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-200 transition-all">
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#7ed957]/20 to-[#5cb83a]/20 rounded-lg flex items-center justify-center">
        <span className="text-lg sm:text-xl">📅</span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-stone-800 text-sm">{event.title}</h4>
        {mounted ? (
          <>
            <p className="text-xs text-stone-500 mt-1">{new Date(event.date).toLocaleDateString()} • {event.time}</p>
            <p className="text-xs text-stone-400 flex items-center gap-1 mt-0.5">
              <span>📍</span>
              <span>{event.location}</span>
            </p>
          </>
        ) : (
          <p className="text-xs text-stone-400 mt-1">Loading...</p>
        )}
      </div>
    </div>
  )
}

function AnnouncementCard({ announcement }: { announcement: typeof announcements[0] }) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="border-l-4 border-[#7ed957] bg-gradient-to-r from-[#7ed957]/5 to-transparent p-3 sm:p-4 rounded-r-xl">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="font-semibold text-stone-800 text-sm flex-1">{announcement.title}</h4>
        {mounted && <span className="text-xs text-stone-400 flex-shrink-0">{new Date(announcement.date).toLocaleDateString()}</span>}
      </div>
      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{announcement.message}</p>
    </div>
  )
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-stone-500">{label}</p>
      <p className="text-sm text-stone-800 font-medium">{value}</p>
    </div>
  )
}

function QuickActionButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button className="w-full flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-stone-50 to-stone-100/50 hover:from-stone-100 hover:to-stone-200/50 rounded-xl text-xs sm:text-sm text-stone-700 font-medium transition-all active:scale-[0.98]">
      <span className="text-base sm:text-lg">{icon}</span>
      <span>{label}</span>
    </button>
  )
}

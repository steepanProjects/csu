'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import OverviewTab from './OverviewTab'
import EventsTab from './EventsTab'
import GivingTab from './GivingTab'

// Mock data - replace with actual API calls
const memberData = {
  name: 'John Doe',
  memberId: 'CSI2024001',
  memberSince: '2015',
  fellowship: 'Youth Fellowship',
}

const upcomingEventsCount = 4

export default function MemberDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'events' | 'giving'>('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊', description: 'Dashboard home' },
    { id: 'events', label: 'Events', icon: '📅', description: 'Church calendar' },
    { id: 'giving', label: 'Giving', icon: '💝', description: 'Contributions' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9ea] via-white to-[#f0f9ea]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-stone-200 sticky top-0 z-40">
        <div className="px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-stone-100 active:bg-stone-200 transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {sidebarOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <Image src="/logo.svg" alt="CSI Union Church" width={40} height={40} className="sm:w-12 sm:h-12 drop-shadow-md" />
                <div className="hidden sm:block">
                  <h1 className="text-lg sm:text-xl font-bold text-stone-800">Member Dashboard</h1>
                  <p className="text-xs text-stone-500">CSI Union Church</p>
                </div>
                <div className="sm:hidden">
                  <h1 className="text-base font-bold text-stone-800">Dashboard</h1>
                </div>
              </div>
            </div>
            {/* Always visible exit link */}
            <Link 
              href="/" 
              className="text-xs sm:text-sm text-stone-600 hover:text-[#7ed957] transition-all flex items-center gap-1"
            >
              <span className="hidden sm:inline">←</span>
              <span className="hidden sm:inline">Back</span>
              <span className="sm:hidden">✕</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
            fixed lg:sticky top-[57px] sm:top-[73px] left-0 h-[calc(100vh-57px)] sm:h-[calc(100vh-73px)] 
            bg-white/80 backdrop-blur-md border-r border-stone-200 shadow-xl lg:shadow-none
            transition-all duration-300 ease-in-out z-30 overflow-y-auto
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            w-72 sm:w-80 lg:w-72
          `}
        >
          <div className="p-4 sm:p-6">
            {/* User Profile Section */}
            <div className="mb-6 pb-6 border-b border-stone-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7ed957] to-[#5cb83a] flex items-center justify-center text-white text-xl font-bold shadow-lg ring-4 ring-[#7ed957]/20">
                  {memberData.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-stone-800 truncate">{memberData.name}</h3>
                  <p className="text-xs text-stone-500">{memberData.memberId}</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#7ed957]/10 to-[#5cb83a]/10 rounded-xl px-3 py-2.5 text-xs border border-[#7ed957]/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-stone-500">Fellowship</span>
                  <span className="font-medium text-stone-700">{memberData.fellowship}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Member Since</span>
                  <span className="font-medium text-stone-700">{memberData.memberSince}</span>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-2 mb-6">
              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3 px-3">
                Navigation
              </p>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as any)
                    setSidebarOpen(false)
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200
                    ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-[#7ed957] to-[#5cb83a] text-white shadow-lg shadow-[#7ed957]/30 scale-[1.02]'
                        : 'text-stone-700 hover:bg-stone-100 active:bg-stone-200'
                    }
                  `}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{item.label}</p>
                    <p className={`text-xs ${activeTab === item.id ? 'text-white/80' : 'text-stone-500'}`}>
                      {item.description}
                    </p>
                  </div>
                  {activeTab === item.id && (
                    <span className="text-white">→</span>
                  )}
                </button>
              ))}
            </nav>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-stone-200">
              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3 px-3">
                Quick Actions
              </p>
              <div className="space-y-1.5">
                <QuickLink icon="📖" label="Prayer Request" />
                <QuickLink icon="📧" label="Contact Pastor" />
                <QuickLink icon="⚙️" label="Settings" />
              </div>
            </div>

            {/* Leave Dashboard - Mobile Only */}
            <div className="lg:hidden pt-6 border-t border-stone-200 mt-6">
              <Link 
                href="/" 
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>🚪</span>
                <span>Leave Dashboard</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 lg:hidden transition-opacity duration-300"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0 p-3 sm:p-4 lg:p-6 pb-20 sm:pb-6">
          {/* Page Title for Mobile - Shows active tab */}
          <div className="lg:hidden mb-4">
            <h2 className="text-xl font-bold text-stone-800 flex items-center gap-2">
              <span>{menuItems.find(item => item.id === activeTab)?.icon}</span>
              <span>{menuItems.find(item => item.id === activeTab)?.label}</span>
            </h2>
          </div>

          {/* Welcome Banner - Only shown on Overview */}
          {activeTab === 'overview' && (
            <div className="bg-gradient-to-r from-[#7ed957] to-[#5cb83a] rounded-2xl p-5 sm:p-6 lg:p-8 mb-4 sm:mb-6 text-white shadow-xl relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                  Welcome back, {memberData.name.split(' ')[0]}! 👋
                </h2>
                <p className="text-white/90 text-xs sm:text-sm">
                  Here's what's happening in your church community
                </p>
              </div>
            </div>
          )}

          {/* Tab Content */}
          <div className={`grid grid-cols-1 ${activeTab === 'overview' ? 'lg:grid-cols-3' : ''} gap-4 sm:gap-6`}>
            {activeTab === 'overview' && (
              <OverviewTab 
                eventsCount={upcomingEventsCount} 
                fellowship={memberData.fellowship} 
              />
            )}

            {activeTab === 'events' && <EventsTab />}

            {activeTab === 'giving' && <GivingTab />}
          </div>
        </main>
      </div>
    </div>
  )
}

// Quick Link Component
function QuickLink({ icon, label }: { icon: string; label: string }) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm text-stone-600 hover:bg-stone-100 active:bg-stone-200 transition-all duration-200">
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  )
}

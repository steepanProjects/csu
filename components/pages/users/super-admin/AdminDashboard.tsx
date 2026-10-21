'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import OverviewTab from './OverviewTab'
import MembersTab from './MembersTab'
import ContentTab from './ContentTab'
import EventsTab from './EventsTab'
import MediaTab from './MediaTab'
import SettingsTab from './SettingsTab'

// Mock admin data
const adminData = {
  name: 'Admin User',
  role: 'Super Administrator',
  email: 'admin@csiunion.org',
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'members' | 'content' | 'events' | 'media' | 'settings'>('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊', description: 'Dashboard analytics' },
    { id: 'members', label: 'Members', icon: '👥', description: 'Manage users' },
    { id: 'content', label: 'Content', icon: '📝', description: 'Pages & posts' },
    { id: 'events', label: 'Events', icon: '📅', description: 'Event management' },
    { id: 'media', label: 'Media', icon: '🖼️', description: 'Gallery & videos' },
    { id: 'settings', label: 'Settings', icon: '⚙️', description: 'Site configuration' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <h1 className="text-lg sm:text-xl font-bold text-slate-800">Admin Dashboard</h1>
                  <p className="text-xs text-slate-500">Super Administrator</p>
                </div>
                <div className="sm:hidden">
                  <h1 className="text-base font-bold text-slate-800">Admin</h1>
                </div>
              </div>
            </div>
            <Link href="/" className="text-xs sm:text-sm text-slate-600 hover:text-red-600 transition-colors flex items-center gap-1">
              <span className="hidden sm:inline">←</span>
              <span className="hidden sm:inline">Exit Admin</span>
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
            bg-white/80 backdrop-blur-md border-r border-slate-200 shadow-xl lg:shadow-none
            transition-all duration-300 ease-in-out z-30 overflow-y-auto
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            w-72 sm:w-80 lg:w-72
          `}
        >
          <div className="p-4 sm:p-6">
            {/* Admin Profile Section */}
            <div className="mb-6 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-xl font-bold shadow-lg ring-4 ring-red-500/20">
                  {adminData.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-800 truncate">{adminData.name}</h3>
                  <p className="text-xs text-red-600 font-medium">{adminData.role}</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl px-3 py-2.5 text-xs border border-red-100">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Email</span>
                  <span className="font-medium text-slate-700 truncate ml-2">{adminData.email}</span>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-2 mb-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-3">
                Management
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
                        ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 scale-[1.02]'
                        : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
                    }
                  `}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{item.label}</p>
                    <p className={`text-xs ${activeTab === item.id ? 'text-white/80' : 'text-slate-500'}`}>
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
            <div className="pt-6 border-t border-slate-200">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-3">
                Quick Actions
              </p>
              <div className="space-y-1.5">
                <QuickLink icon="➕" label="Add New Member" />
                <QuickLink icon="📢" label="Create Announcement" />
                <QuickLink icon="📊" label="View Reports" />
              </div>
            </div>

            {/* Leave Dashboard - Mobile Only */}
            <div className="lg:hidden pt-6 border-t border-slate-200 mt-6">
              <Link 
                href="/" 
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>🚪</span>
                <span>Exit Admin Panel</span>
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
          {/* Page Title */}
          <div className="mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 flex items-center gap-2">
              <span>{menuItems.find(item => item.id === activeTab)?.icon}</span>
              <span>{menuItems.find(item => item.id === activeTab)?.label}</span>
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {menuItems.find(item => item.id === activeTab)?.description}
            </p>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'members' && <MembersTab />}
            {activeTab === 'content' && <ContentTab />}
            {activeTab === 'events' && <EventsTab />}
            {activeTab === 'media' && <MediaTab />}
            {activeTab === 'settings' && <SettingsTab />}
          </div>
        </main>
      </div>
    </div>
  )
}

// Quick Link Component
function QuickLink({ icon, label }: { icon: string; label: string }) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm text-slate-600 hover:bg-slate-100 active:bg-slate-200 transition-all duration-200">
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  )
}

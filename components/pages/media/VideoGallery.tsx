'use client'

import { useState } from 'react'

interface Video {
  id: string
  title: string
  description: string
  youtubeId: string
  category: string
  date: string
}

// Placeholder videos — replace youtubeId with actual church YouTube video IDs
const videos: Video[] = [
  {
    id: '1',
    title: 'Sunday Worship Service',
    description: 'Join us in our weekly gathering of praise, prayer, and the Word.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Worship',
    date: 'June 2024',
  },
  {
    id: '2',
    title: 'Asanam Festival 2024',
    description: 'Highlights from our annual Asanam Festival and community feeding program.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Events',
    date: 'March 2024',
  },
  {
    id: '3',
    title: 'Choir Performance — Easter',
    description: 'The church choir leads the congregation in Easter Sunday worship.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Choir',
    date: 'April 2024',
  },
  {
    id: '4',
    title: 'Youth Fellowship Retreat',
    description: 'Moments from the youth fellowship annual retreat and spiritual camp.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Youth',
    date: 'May 2024',
  },
  {
    id: '5',
    title: 'Christmas Celebration 2023',
    description: 'A joyous Christmas service filled with carols, drama, and the Gospel.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Events',
    date: 'December 2023',
  },
  {
    id: '6',
    title: "Children's Sunday Programme",
    description: "Highlights from the children's ministry Sunday programme and skits.",
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Children',
    date: 'July 2024',
  },
]

const categories = ['All', 'Worship', 'Events', 'Choir', 'Youth', 'Children']

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer group" onClick={() => setPlaying(true)}>
      {/* Thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-[#7ed957] flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
          <svg className="w-5 h-5 text-[#0f2310] ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function VideoGallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? videos
    : videos.filter((v) => v.category === activeCategory)

  return (
    <section className="py-20 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">Our Videos</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight">
            Watch & <span className="text-[#4a8a2a]">Be Inspired</span>
          </h2>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#4a8a2a] text-white border-[#4a8a2a]'
                    : 'bg-transparent text-stone-500 border-stone-200 hover:border-[#4a8a2a] hover:text-[#4a8a2a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured video — large */}
        {filtered.length > 0 && (
          <div className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 rounded-2xl overflow-hidden bg-[#e8f5e0] p-6 lg:p-8">
              {/* Video player — takes 3 cols */}
              <div className="lg:col-span-3">
                <YouTubeEmbed videoId={filtered[0].youtubeId} title={filtered[0].title} />
              </div>

              {/* Featured info — takes 2 cols */}
              <div className="lg:col-span-2 flex flex-col justify-center gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4a8a2a]/10 text-[#4a8a2a] text-xs font-semibold w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4a8a2a]" />
                  {filtered[0].category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-stone-800 leading-snug">
                  {filtered[0].title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">{filtered[0].description}</p>
                <p className="text-xs text-stone-400">{filtered[0].date}</p>
              </div>
            </div>
          </div>
        )}

        {/* Remaining videos grid */}
        {filtered.length > 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(1).map((video) => (
              <div key={video.id} className="group flex flex-col gap-3">
                <YouTubeEmbed videoId={video.youtubeId} title={video.title} />
                <div className="flex flex-col gap-1.5 px-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-[#4a8a2a] uppercase tracking-wide">{video.category}</span>
                    <span className="text-[10px] text-stone-400">{video.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-stone-800 group-hover:text-[#4a8a2a] transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-stone-400">
            <p className="text-base">No videos found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

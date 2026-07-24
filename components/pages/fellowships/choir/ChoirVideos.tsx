'use client'

import { useState } from 'react'

/* ─────────────────────────────────────────────────────────────────────────
   PLACEHOLDERS — replace each `youtubeId` with the real YouTube video ID.
   The video ID is the part after "v=" in the YouTube URL.
   Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ → id is "dQw4w9WgXcQ"

   Also update title, description, and date for each entry.
   ───────────────────────────────────────────────────────────────────────── */

const videos = [
  {
    youtubeId: 'PLACEHOLDER_ID_1',
    title: 'Christmas Carol Service 2024',
    description: 'The choir leads the congregation in a special selection of Christmas carols during our annual Christmas programme.',
    date: 'December 2024',
    tag: 'Christmas',
  },
  {
    youtubeId: 'PLACEHOLDER_ID_2',
    title: 'Easter Sunday Anthem',
    description: 'A powerful choral anthem performed during the Easter morning service — celebrating the resurrection of our Lord.',
    date: 'April 2024',
    tag: 'Easter',
  },
  {
    youtubeId: 'PLACEHOLDER_ID_3',
    title: 'Harvest Thanksgiving Worship',
    description: 'The choir leads the Harvest Thanksgiving service with hymns of gratitude and praise.',
    date: 'October 2024',
    tag: 'Harvest',
  },
  {
    youtubeId: 'PLACEHOLDER_ID_4',
    title: 'Sunday Morning Worship — Psalm 150',
    description: 'A live recording from the Sunday morning service, featuring the full choir in multi-part harmony.',
    date: 'August 2024',
    tag: 'Sunday Service',
  },
  {
    youtubeId: 'PLACEHOLDER_ID_5',
    title: 'Tamil Devotional Evening',
    description: 'An evening of Tamil hymns and devotional songs, sung with warmth and heartfelt worship.',
    date: 'June 2024',
    tag: 'Tamil Devotional',
  },
  {
    youtubeId: 'PLACEHOLDER_ID_6',
    title: 'CSI Diocese Choir Competition',
    description: 'The choir\'s performance at the CSI Diocese choir competition — representing our church with excellence.',
    date: 'March 2024',
    tag: 'Competition',
  },
]

function getThumbnailUrl(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}

function VideoCard({
  video,
  isActive,
  onSelect,
}: {
  video: (typeof videos)[0]
  isActive: boolean
  onSelect: () => void
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
        isActive
          ? 'border-[#7ed957] shadow-lg shadow-[#7ed957]/20'
          : 'border-stone-100 hover:border-[#7ed957]/40 hover:shadow-md'
      }`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      aria-label={`Play ${video.title}`}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-stone-900 overflow-hidden">
        <img
          src={getThumbnailUrl(video.youtubeId)}
          alt={video.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if thumbnail fails to load
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Play button */}
        <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isActive ? 'bg-[#7ed957]' : 'bg-white/90'} shadow-lg`}>
            <svg
              className={`w-5 h-5 ml-0.5 ${isActive ? 'text-white' : 'text-[#0f2310]'}`}
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold bg-[#0f2310]/80 text-[#7ed957] px-2.5 py-1 rounded-full uppercase tracking-wide">
            {video.tag}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 px-4 py-4 bg-white flex-1">
        <p className="text-[10px] text-stone-400 font-medium">{video.date}</p>
        <p className="text-sm font-bold text-stone-800 leading-snug line-clamp-2">{video.title}</p>
        <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">{video.description}</p>
      </div>

      {isActive && <div className="h-1 w-full bg-gradient-to-r from-[#7ed957] to-[#4a8a2a]" />}
    </div>
  )
}

export default function ChoirVideos() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = videos[activeIndex]

  return (
    <section className="py-16 px-6 lg:px-16 bg-[#0f2310]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#7ed957]">Listen &amp; Watch</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Choir Recordings</h2>
        <p className="text-sm text-white/50 mb-12 max-w-xl">
          Watch recordings of our choir in worship — from Christmas programmes to
          Sunday services. Select a video below to play it.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">

          {/* Left — active video player */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-2xl shadow-black/50">
              <iframe
                key={active.youtubeId}
                src={`https://www.youtube.com/embed/${active.youtubeId}?rel=0&modestbranding=1`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Active video info */}
            <div className="flex flex-col gap-2 px-1">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold bg-[#7ed957]/15 text-[#7ed957] px-2.5 py-1 rounded-full uppercase tracking-wide">
                  {active.tag}
                </span>
                <span className="text-xs text-white/40">{active.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{active.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{active.description}</p>
            </div>
          </div>

          {/* Right — video list */}
          <div className="flex flex-col gap-3 lg:max-h-[600px] lg:overflow-y-auto pr-1"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#7ed957 transparent' }}
          >
            {videos.map((video, i) => (
              <VideoCard
                key={video.youtubeId}
                video={video}
                isActive={i === activeIndex}
                onSelect={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            Videos are hosted on YouTube. An internet connection is required to play them.
          </p>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#7ed957]/30 text-[#7ed957] text-xs font-semibold hover:bg-[#7ed957]/10 transition-colors duration-200"
          >
            View Our YouTube Channel
            <span aria-hidden="true">↗</span>
          </a>
        </div>

      </div>
    </section>
  )
}

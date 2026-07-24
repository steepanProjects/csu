export default function CalendarEmbed() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-px bg-[#7ed957]" />
          <span className="text-sm font-semibold text-[#4a8a2a]">Stay Connected</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 leading-tight">
          Church Calendar
        </h2>
        <p className="text-sm text-stone-500 mb-12 max-w-xl">
          View all upcoming events, services, and gatherings in one place. Subscribe to receive
          updates directly to your own calendar.
        </p>

        {/* Google Calendar iframe container */}
        <div className="rounded-2xl border border-stone-200 overflow-hidden shadow-sm bg-white">
          <div className="relative w-full" style={{ paddingBottom: '75%' }}>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID%40group.calendar.google.com&ctz=Asia%2FKolkata"
              className="absolute inset-0 w-full h-full border-0"
              title="Church Calendar"
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 rounded-xl bg-stone-50 border border-stone-200 px-6 py-5">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#f0fae8] flex items-center justify-center">
              <svg className="w-5 h-5 text-[#4a8a2a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-stone-800 mb-2">
                How to Configure the Calendar
              </h3>
              <ol className="text-xs text-stone-600 leading-relaxed space-y-2">
                <li className="flex gap-2">
                  <span className="font-semibold text-[#4a8a2a] flex-shrink-0">1.</span>
                  <span>Create or locate your church&apos;s public Google Calendar</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-[#4a8a2a] flex-shrink-0">2.</span>
                  <span>Go to Calendar Settings → Integrate calendar → copy the Calendar ID</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-[#4a8a2a] flex-shrink-0">3.</span>
                  <span>
                    Replace <code className="bg-stone-200 px-1.5 py-0.5 rounded text-[10px] font-mono">YOUR_CALENDAR_ID</code> in the iframe <code className="bg-stone-200 px-1.5 py-0.5 rounded text-[10px] font-mono">src</code> attribute above with your actual Calendar ID
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-[#4a8a2a] flex-shrink-0">4.</span>
                  <span>Adjust the timezone parameter <code className="bg-stone-200 px-1.5 py-0.5 rounded text-[10px] font-mono">ctz=Asia%2FKolkata</code> if needed</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

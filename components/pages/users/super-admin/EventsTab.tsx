'use client'

export default function EventsTab() {
  const events = [
    { id: 1, title: 'Sunday Service', date: '2024-01-28', time: '9:00 AM', status: 'Upcoming' },
    { id: 2, title: 'Bible Study', date: '2024-01-30', time: '7:00 PM', status: 'Upcoming' },
    { id: 3, title: 'Youth Meeting', date: '2024-01-25', time: '6:00 PM', status: 'Completed' },
  ]

  return (
    <div className="space-y-6">
      <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-md">
        + Create Event
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-600">Event</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-600">Date & Time</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-600">Status</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id} className="border-b hover:bg-slate-50">
                  <td className="py-4 px-6 font-semibold text-slate-800">{event.title}</td>
                  <td className="py-4 px-6 text-sm text-slate-600">{event.date} at {event.time}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {event.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium mr-3">Edit</button>
                    <button className="text-sm text-red-600 hover:text-red-700 font-medium">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

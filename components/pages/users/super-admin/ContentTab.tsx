'use client'

export default function ContentTab() {
  const pages = [
    { id: 1, title: 'About Us', status: 'Published', updated: '2024-01-15' },
    { id: 2, title: 'Contact', status: 'Published', updated: '2024-01-10' },
    { id: 3, title: 'History', status: 'Draft', updated: '2024-01-20' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-md">
          + Create New Page
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <div key={page.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">{page.title}</h3>
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                page.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {page.status}
              </span>
              <span className="text-xs text-slate-500">Updated {page.updated}</span>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100">
                Edit
              </button>
              <button className="flex-1 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

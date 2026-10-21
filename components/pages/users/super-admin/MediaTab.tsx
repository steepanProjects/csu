'use client'

export default function MediaTab() {
  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-md">
          📤 Upload Images
        </button>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-md">
          🎥 Upload Video
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition-all">
            <div className="aspect-square bg-slate-100 rounded-lg mb-3 flex items-center justify-center text-4xl">
              🖼️
            </div>
            <p className="text-sm font-medium text-slate-800 mb-2">Image {item}</p>
            <div className="flex gap-2">
              <button className="flex-1 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-medium hover:bg-red-100">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

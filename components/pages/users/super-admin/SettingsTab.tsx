'use client'

export default function SettingsTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">General Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Site Title</label>
              <input type="text" defaultValue="CSI Union Church" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Tagline</label>
              <input type="text" defaultValue="Community of Faith & Love" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <button className="w-full py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-red-700">
              Save Changes
            </button>
          </div>
        </div>

        {/* Email Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Email Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Contact Email</label>
              <input type="email" defaultValue="info@csiunion.org" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Admin Email</label>
              <input type="email" defaultValue="admin@csiunion.org" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <button className="w-full py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-red-700">
              Save Changes
            </button>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Security</h3>
          <div className="space-y-3">
            <button className="w-full py-3 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors">
              Change Password
            </button>
            <button className="w-full py-3 bg-green-50 text-green-600 rounded-lg font-medium hover:bg-green-100 transition-colors">
              Enable 2FA
            </button>
            <button className="w-full py-3 bg-orange-50 text-orange-600 rounded-lg font-medium hover:bg-orange-100 transition-colors">
              View Activity Log
            </button>
          </div>
        </div>

        {/* Backup */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Backup & Restore</h3>
          <div className="space-y-3">
            <button className="w-full py-3 bg-purple-50 text-purple-600 rounded-lg font-medium hover:bg-purple-100 transition-colors">
              📥 Create Backup
            </button>
            <button className="w-full py-3 bg-indigo-50 text-indigo-600 rounded-lg font-medium hover:bg-indigo-100 transition-colors">
              📤 Restore from Backup
            </button>
            <p className="text-xs text-slate-500 text-center">Last backup: 2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}

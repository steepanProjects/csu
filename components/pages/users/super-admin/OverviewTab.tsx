'use client'

export default function OverviewTab() {
  const stats = [
    { label: 'Total Members', value: '1,247', change: '+12%', icon: '👥', color: 'bg-blue-50 text-blue-600 border-blue-200' },
    { label: 'Active Events', value: '8', change: '+2', icon: '📅', color: 'bg-green-50 text-green-600 border-green-200' },
    { label: 'Monthly Visitors', value: '3,542', change: '+18%', icon: '📈', color: 'bg-purple-50 text-purple-600 border-purple-200' },
    { label: 'Total Donations', value: '₹45,680', change: '+8%', icon: '💰', color: 'bg-orange-50 text-orange-600 border-orange-200' },
  ]

  const recentActivities = [
    { action: 'New member registered', user: 'Sarah Johnson', time: '5 mins ago', icon: '👤' },
    { action: 'Event created', user: 'Admin', time: '1 hour ago', icon: '📅' },
    { action: 'Donation received', user: 'Michael Brown', time: '2 hours ago', icon: '💝' },
    { action: 'Media uploaded', user: 'Admin', time: '3 hours ago', icon: '🖼️' },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.color} rounded-xl shadow-sm border p-6 hover:shadow-md transition-all`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">{stat.icon}</span>
              <span className="text-xs font-semibold bg-white/50 px-2 py-1 rounded-full">{stat.change}</span>
            </div>
            <p className="text-3xl font-bold mb-1">{stat.value}</p>
            <p className="text-sm font-medium opacity-80">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <span className="text-2xl flex-shrink-0">{activity.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800">{activity.action}</p>
                  <p className="text-xs text-slate-500">by {activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">System Status</h3>
          <div className="space-y-4">
            <StatusItem label="Website Status" value="Online" status="success" />
            <StatusItem label="Database" value="Connected" status="success" />
            <StatusItem label="Last Backup" value="2 hours ago" status="warning" />
            <StatusItem label="Storage Used" value="45%" status="success" />
          </div>
        </div>
      </div>
    </div>
  )
}

function StatusItem({ label, value, status }: { label: string; value: string; status: 'success' | 'warning' | 'error' }) {
  const colors = {
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
  }

  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors[status]}`}>{value}</span>
    </div>
  )
}

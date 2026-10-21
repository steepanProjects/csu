'use client'

import { useState } from 'react'

const mockMembers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', fellowship: 'Youth', status: 'Active', joined: '2020-01-15' },
  { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', fellowship: 'Choir', status: 'Active', joined: '2019-05-20' },
  { id: 3, name: 'Michael Brown', email: 'michael@example.com', fellowship: "Men's", status: 'Active', joined: '2021-03-10' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', fellowship: "Women's", status: 'Inactive', joined: '2018-11-05' },
]

export default function MembersTab() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const filteredMembers = mockMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || member.status.toLowerCase() === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex-1 w-full sm:max-w-md">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            <input
              type="text"
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="flex-1 sm:flex-none px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button className="px-4 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg active:scale-[0.98]">
            + Add Member
          </button>
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-600">Member</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-600">Fellowship</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-600">Joined</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member) => (
                <tr key={member.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-semibold text-slate-800">{member.name}</p>
                      <p className="text-sm text-slate-500">{member.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-700">{member.fellowship}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      member.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-600">{new Date(member.joined).toLocaleDateString()}</td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium mr-3">Edit</button>
                    <button className="text-sm text-red-600 hover:text-red-700 font-medium">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden p-4 space-y-3">
          {filteredMembers.map((member) => (
            <div key={member.id} className="border border-slate-200 rounded-xl p-4 hover:border-red-300 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-slate-800">{member.name}</p>
                  <p className="text-xs text-slate-500">{member.email}</p>
                </div>
                <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${
                  member.status === 'Active' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  {member.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600 mb-3">
                <span>{member.fellowship} Fellowship</span>
                <span>Joined {new Date(member.joined).toLocaleDateString()}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                  Edit
                </button>
                <button className="flex-1 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredMembers.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
          <p className="text-slate-500">No members found</p>
        </div>
      )}
    </div>
  )
}

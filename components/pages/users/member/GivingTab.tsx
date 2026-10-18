'use client'

import { useState, useEffect } from 'react'

const contributions = {
  thisMonth: 5000,
  lastMonth: 4500,
  yearTotal: 48000,
  transactions: [
    { id: 1, date: '2024-01-15', amount: 2500, type: 'Tithe', status: 'Completed' },
    { id: 2, date: '2024-01-08', amount: 1500, type: 'Offering', status: 'Completed' },
    { id: 3, date: '2024-01-01', amount: 1000, type: 'Special Offering', status: 'Completed' },
    { id: 4, date: '2023-12-25', amount: 2000, type: 'Christmas Offering', status: 'Completed' },
  ]
}

export default function GivingTab() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const percentChange = ((contributions.thisMonth - contributions.lastMonth) / contributions.lastMonth * 100).toFixed(1)

  return (
    <div className="lg:col-span-3 space-y-4 sm:space-y-6">
      {/* Giving Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm border border-green-200 p-4 sm:p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-green-200/30 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs sm:text-sm text-green-700 font-medium">This Month</p>
              <span className="text-xl">💰</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-green-800">₹{contributions.thisMonth.toLocaleString()}</p>
            <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
              <span>↑</span>
              <span>{percentChange}% from last month</span>
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs sm:text-sm text-stone-500 font-medium">Last Month</p>
            <span className="text-xl">📊</span>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-stone-800">₹{contributions.lastMonth.toLocaleString()}</p>
          <p className="text-xs text-stone-400 mt-2">Previous period</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-sm border border-purple-200 p-4 sm:p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/30 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs sm:text-sm text-purple-700 font-medium">This Year</p>
              <span className="text-xl">📈</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-purple-800">₹{contributions.yearTotal.toLocaleString()}</p>
            <p className="text-xs text-purple-600 mt-2">Total contributions</p>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold text-stone-800">Recent Transactions</h3>
          <button className="px-4 py-2.5 bg-gradient-to-r from-[#7ed957] to-[#5cb83a] hover:from-[#5cb83a] hover:to-[#7ed957] text-white rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2">
            <span>💝</span>
            <span>Give Now</span>
          </button>
        </div>
        {mounted ? (
          <>
            {/* Desktop Table View */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-stone-600">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-stone-600">Type</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-stone-600">Status</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-stone-600">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {contributions.transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                      <td className="py-3 px-4 text-sm text-stone-600">{new Date(transaction.date).toLocaleDateString()}</td>
                      <td className="py-3 px-4 text-sm text-stone-800 font-medium">{transaction.type}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-block text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium">
                          {transaction.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm font-semibold text-green-600 text-right">₹{transaction.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="sm:hidden space-y-3">
              {contributions.transactions.map((transaction) => (
                <div key={transaction.id} className="border border-stone-200 rounded-xl p-4 hover:border-[#7ed957] transition-colors bg-gradient-to-br from-white to-stone-50/50">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-stone-800 text-sm mb-1">{transaction.type}</h4>
                      <p className="text-xs text-stone-500">{new Date(transaction.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium">
                      {transaction.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-stone-200">
                    <span className="text-xs text-stone-500 font-medium">Amount</span>
                    <span className="text-lg font-bold text-green-600">₹{transaction.amount.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-12 h-12 border-4 border-[#7ed957] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-stone-400 text-sm">Loading transactions...</p>
          </div>
        )}
      </div>
    </div>
  )
}

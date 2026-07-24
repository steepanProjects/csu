const fields = [
  { label: 'Account Name',   value: 'CSI Union Church Podanur' },
  { label: 'Account Number', value: 'XXXX XXXX XXXX' },
  { label: 'IFSC Code',      value: 'XXXXXXXXXXXX' },
  { label: 'Bank & Branch',  value: 'Bank Name, Branch Name' },
  { label: 'Account Type',   value: 'Savings Account' },
]

export default function BankDetails() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-[#f0f9ea]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — heading + note */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-px bg-[#7ed957]" />
              <span className="text-sm font-semibold text-[#4a8a2a]">Bank Transfer</span>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-4">
              Direct Bank <span className="text-[#4a8a2a]">Deposit</span>
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed max-w-sm mb-6">
              Transfer directly to our church account. Please send us a message at{' '}
              <a
                href="mailto:csichurchPodanur@gmail.com"
                className="text-[#4a8a2a] font-medium hover:underline"
              >
                csichurchPodanur@gmail.com
              </a>{' '}
              with your name and transaction reference so we can acknowledge your gift.
            </p>

            {/* Dark verse card */}
            <div className="relative rounded-2xl bg-[#0f2310] px-7 py-7 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid slice">
                  <circle cx="250" cy="20"  r="80"  fill="#7ed957" />
                  <circle cx="50"  cy="100" r="60"  fill="#7ed957" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="w-8 h-px bg-[#7ed957] mb-3" />
                <p className="text-white/80 text-sm italic leading-relaxed mb-2">
                  "Honour the Lord with your wealth and with the first fruits of all your produce."
                </p>
                <span className="text-[#7ed957] text-xs font-semibold">Proverbs 3:9</span>
              </div>
            </div>
          </div>

          {/* Right — account details card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100">
            {/* Card header */}
            <div className="bg-[#4a8a2a] px-6 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Church Bank Account</p>
                <p className="text-white/60 text-xs">Verified account details</p>
              </div>
            </div>

            {/* Fields */}
            <div className="divide-y divide-stone-100">
              {fields.map((f) => (
                <div key={f.label} className="flex items-center justify-between px-6 py-4 gap-4">
                  <span className="text-xs text-stone-400 uppercase tracking-widest shrink-0">{f.label}</span>
                  <span className="text-sm font-semibold text-stone-800 text-right">{f.value}</span>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="bg-[#f0f9ea] px-6 py-4 border-t border-stone-100">
              <p className="text-xs text-stone-500">
                All donations to CSI Union Church Podanur are used solely for church
                ministry, outreach, and building purposes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

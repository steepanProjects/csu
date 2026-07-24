export default function DonateUPI() {
  const upiId = 'csichurch@upi' // ← replace with the actual UPI ID

  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="rounded-2xl bg-[#e8f5e0] px-8 py-10 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Left — heading + UPI ID + apps */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="block w-8 h-px bg-[#7ed957]" />
                  <span className="text-sm font-semibold text-[#4a8a2a]">Instant Transfer</span>
                </div>
                <h2 className="text-3xl font-bold text-stone-800 mb-3">
                  Give via <span className="text-[#4a8a2a]">UPI</span>
                </h2>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Scan the QR code with any UPI app, or copy the UPI ID below to send your
                  donation instantly from Google Pay, PhonePe, Paytm, or any banking app.
                </p>
              </div>

              {/* UPI ID pill */}
              <div className="inline-flex items-center gap-3 bg-white rounded-xl px-5 py-3 self-start shadow-sm border border-stone-100">
                <svg className="w-5 h-5 text-[#4a8a2a] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3" />
                </svg>
                <div>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest">UPI ID</p>
                  <p className="text-sm font-bold text-stone-800 tracking-wide">{upiId}</p>
                </div>
              </div>

              {/* Supported apps */}
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Works with</p>
                <div className="flex flex-wrap gap-2">
                  {['Google Pay', 'PhonePe', 'Paytm', 'BHIM', 'Any UPI App'].map((app) => (
                    <span
                      key={app}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-stone-200 text-stone-600"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — QR code placeholder */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex flex-col items-center gap-4">

                {/* QR placeholder box — replace inner content with <Image> of actual QR */}
                <div className="w-48 h-48 rounded-xl bg-stone-100 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-stone-300">
                  <svg className="w-10 h-10 text-stone-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                  </svg>
                  <p className="text-xs text-stone-400 text-center px-2">QR code placeholder<br />Replace with actual QR</p>
                </div>

                <p className="text-xs text-stone-500 text-center max-w-[180px] leading-relaxed">
                  Open any UPI app → Scan QR → Enter amount → Pay
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [ref, visible] = useInView(0.1)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6 lg:px-16 bg-[#f0f9ea]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left — heading: slide from left */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-36px)',
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-px bg-[#7ed957]" />
              <span className="text-sm font-semibold text-[#4a8a2a]">Send a message</span>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Write to Us</h2>
            <p className="text-sm text-stone-500 leading-relaxed max-w-sm">
              Whether it's a prayer request, a question, or you simply want to say hello —
              fill in the form and we'll get back to you personally.
            </p>
          </div>

          {/* Right — form: slide from right, delayed */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(36px)',
              transitionDelay: visible ? '200ms' : '0ms',
            }}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl px-8 py-10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f5e0] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#4a8a2a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-800">Message sent!</p>
                  <p className="text-xs text-stone-500 mt-0.5">We'll get back to you within 1–2 days.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl px-8 py-8 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-stone-500 mb-1.5 block">Name <span className="text-[#4a8a2a]">*</span></label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                      className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 outline-none focus:border-[#7ed957] focus:ring-2 focus:ring-[#7ed957]/20 transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-stone-500 mb-1.5 block">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 outline-none focus:border-[#7ed957] focus:ring-2 focus:ring-[#7ed957]/20 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-500 mb-1.5 block">Email <span className="text-[#4a8a2a]">*</span></label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required
                    className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 outline-none focus:border-[#7ed957] focus:ring-2 focus:ring-[#7ed957]/20 transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-500 mb-1.5 block">Message <span className="text-[#4a8a2a]">*</span></label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 outline-none focus:border-[#7ed957] focus:ring-2 focus:ring-[#7ed957]/20 transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="self-start inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#4a8a2a] text-white text-sm font-semibold hover:bg-[#7ed957] transition-colors duration-200">
                  Send Message <span aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [ref, visible] = useInView(0.1)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6 lg:px-16 bg-[#f0f9ea]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left — contact details: slide from left */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-36px)',
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-px bg-[#7ed957]" />
              <span className="text-sm font-semibold text-[#4a8a2a]">Contact</span>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-8">Get in Touch</h2>

            <div className="flex flex-col gap-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f5e0] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#4a8a2a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338A18.755 18.755 0 0121.75 6.338M2.25 6.338C2.25 15.4 9.716 22.75 18.75 22.75h.75a2.25 2.25 0 002.25-2.25v-1.372a2.25 2.25 0 00-1.628-2.163l-3.228-.969a2.25 2.25 0 00-2.456.84l-.663.994a16.31 16.31 0 01-7.068-7.068l.994-.663a2.25 2.25 0 00.84-2.456l-.969-3.228A2.25 2.25 0 003.622 2.25H2.25" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-widest mb-0.5">Phone</p>
                  <a href="tel:+919181456878" className="text-stone-700 font-semibold hover:text-[#4a8a2a] transition-colors">
                    91 81456 46878
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f5e0] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#4a8a2a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-widest mb-0.5">Send us an email</p>
                  <a href="mailto:csichurchPodanur@gmail.com" className="text-stone-700 font-semibold hover:text-[#4a8a2a] transition-colors text-sm break-all">
                    csichurchPodanur@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f5e0] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#4a8a2a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-widest mb-0.5">Address</p>
                  <p className="text-stone-700 font-semibold leading-snug">
                    Podanur<br />
                    Alandurai–Karunya Nagar, Coimbatore 641 023
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form: slide from right, delayed */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(36px)',
              transitionDelay: visible ? '200ms' : '0ms',
            }}
          >
            <div>
              <label className="text-xs font-semibold text-stone-600 mb-1 block">
                Your Name <span className="text-[#4a8a2a]">*</span>
              </label>
              <input
                type="text" name="name" value={form.name} onChange={handleChange} required
                className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 outline-none focus:border-[#7ed957] focus:ring-2 focus:ring-[#7ed957]/20 transition-colors bg-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-stone-600 mb-1 block">
                  Email Address <span className="text-[#4a8a2a]">*</span>
                </label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 outline-none focus:border-[#7ed957] focus:ring-2 focus:ring-[#7ed957]/20 transition-colors bg-white"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-stone-600 mb-1 block">
                  Phone Number <span className="text-[#4a8a2a]">*</span>
                </label>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange} required
                  className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 outline-none focus:border-[#7ed957] focus:ring-2 focus:ring-[#7ed957]/20 transition-colors bg-white"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-600 mb-1 block">
                Message <span className="text-[#4a8a2a]">*</span>
              </label>
              <textarea
                name="message" value={form.message} onChange={handleChange} required rows={5}
                className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 outline-none focus:border-[#7ed957] focus:ring-2 focus:ring-[#7ed957]/20 transition-colors resize-none bg-white"
              />
            </div>
            <button
              type="submit"
              className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4a8a2a] text-white text-sm font-semibold hover:bg-[#7ed957] transition-colors duration-200"
            >
              Send Message <span aria-hidden="true">→</span>
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

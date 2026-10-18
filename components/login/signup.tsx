'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AuthNavbar from './AuthNavbar'

export default function SignupForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    fellowship: 'youth',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to login after successful signup
      router.push('/auth/login')
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9ea] via-white to-[#e8f5e0]">
      <AuthNavbar />
      
      {/* Main content with proper spacing */}
      <div className="pt-20 sm:pt-24 pb-8 px-4 flex justify-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#7ed957]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5cb83a]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative w-full max-w-md z-10">
          {/* Logo and Title */}
          <div className="text-center mb-8 mt-6">
            <div className="inline-block mb-4">
              <Image 
                src="/logo.svg" 
                alt="CSI Union Church" 
                width={80} 
                height={80} 
                className="mx-auto drop-shadow-lg"
              />
            </div>
            <h1 className="text-3xl font-bold text-stone-800 mb-2">Join Our Community</h1>
            <p className="text-stone-600 text-sm">Create your member account</p>
          </div>

          {/* Signup Form */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-stone-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name Field */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-stone-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">👤</span>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">📧</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent transition-all"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">📱</span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Fellowship Selection */}
              <div>
                <label htmlFor="fellowship" className="block text-sm font-semibold text-stone-700 mb-2">
                  Fellowship
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">⛪</span>
                  <select
                    id="fellowship"
                    name="fellowship"
                    value={formData.fellowship}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
                  >
                    <option value="youth">Youth Fellowship</option>
                    <option value="mens">Men&apos;s Fellowship</option>
                    <option value="womens">Women&apos;s Fellowship</option>
                    <option value="children">Children&apos;s Ministry</option>
                    <option value="choir">Choir</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">▼</span>
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-stone-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">🔒</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={8}
                    className="w-full pl-12 pr-12 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent transition-all"
                    placeholder="Min. 8 characters"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-stone-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">🔒</span>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-12 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent transition-all"
                    placeholder="Re-enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 rounded border-stone-300 text-[#7ed957] focus:ring-[#7ed957]"
                />
                <label htmlFor="terms" className="text-xs text-stone-600">
                  I agree to the{' '}
                  <Link href="#" className="text-[#7ed957] hover:text-[#5cb83a] font-medium">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="#" className="text-[#7ed957] hover:text-[#5cb83a] font-medium">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#7ed957] to-[#5cb83a] hover:from-[#5cb83a] hover:to-[#7ed957] text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Creating account...
                  </span>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-6 text-center text-sm text-stone-600">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-[#7ed957] hover:text-[#5cb83a] font-semibold transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Short Footer */}
      <footer className="relative bg-stone-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="CSI Union Church" width={40} height={40} />
              <div className="text-sm">
                <p className="font-semibold">CSI Union Church</p>
                <p className="text-stone-400 text-xs">Community of Faith & Love</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-stone-400">
              <Link href="/contact" className="hover:text-[#7ed957] transition-colors">Contact</Link>
              <Link href="/about/the-church" className="hover:text-[#7ed957] transition-colors">About</Link>
              <Link href="/donate" className="hover:text-[#7ed957] transition-colors">Donate</Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-stone-800 text-center text-xs text-stone-500">
            <p>&copy; {new Date().getFullYear()} CSI Union Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AuthNavbar from './AuthNavbar'

export default function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to dashboard after successful login
      router.push('/dashboard/member')
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            <h1 className="text-3xl font-bold text-stone-800 mb-2">Welcome Back</h1>
            <p className="text-stone-600 text-sm">Sign in to your member account</p>
          </div>

          {/* Login Form */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-stone-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full pl-12 pr-12 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent transition-all"
                    placeholder="Enter your password"
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-stone-300 text-[#7ed957] focus:ring-[#7ed957]"
                  />
                  <span className="text-stone-600">Remember me</span>
                </label>
                <Link href="#" className="text-[#7ed957] hover:text-[#5cb83a] font-medium transition-colors">
                  Forgot password?
                </Link>
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
                    Signing in...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-stone-500">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-stone-300 rounded-xl hover:bg-stone-50 transition-all active:scale-[0.98]">
                <span className="text-xl">G</span>
                <span className="text-sm font-medium text-stone-700">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-stone-300 rounded-xl hover:bg-stone-50 transition-all active:scale-[0.98]">
                <span className="text-xl">f</span>
                <span className="text-sm font-medium text-stone-700">Facebook</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="mt-6 text-center text-sm text-stone-600">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-[#7ed957] hover:text-[#5cb83a] font-semibold transition-colors">
                Sign up now
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

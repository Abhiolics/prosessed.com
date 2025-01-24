'use client'

import { DotLottiePlayer } from '@dotlottie/react-player'
import '@dotlottie/react-player/dist/index.css'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center space-y-6">
          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl lg:text-4xl font-semibold font-heading tracking-tight">
            Unlock The{' '}
            <span className="text-[#005906] font-semibold ">Full Revenue Potential</span>{' '}
            of Your Import-Export Business with{' '}
            <span className="text-[#0095FF] font-semibold">Prosessed</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize your profits and streamline every step of global trade—Get started today!
          </p>

          {/* CTA Button */}
          <div className="pt-4">
          <Link href="/contact" passHref>
  <button
    className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2 group"
  >
    Get Started Now
    <svg
      className="w-5 h-5 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
</Link>
          </div>

          {/* Lottie Animation */}
          <div className="mt-10 flex justify-center">
  <DotLottiePlayer
    src="https://lottie.host/def7ec4e-7ed8-46bf-99b1-e7a789a4b686/SrIWGKQ5J1.lottie"
    autoplay
    loop
    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-64 lg:h-64 xl:w-64 xl:h-64 max-w-full max-h-full"
    style={{
      maxWidth: "500px", // Restrict maximum width
      maxHeight: "400px", // Restrict maximum height
    }}
  />
</div>


        </div>
      </div>
    </div>
  )
}









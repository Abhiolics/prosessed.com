'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Ctaend() {
  return (
    <main className=" bg-white px-4 py-12 md:py-24 mb-24">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12 text-center md:mb-20">
          <h1 className="mb-6  tracking-tight text-2xl sm:text-4xl lg:text-4xl font-semibold font-heading">
            Experience Effortless{' '}
            <span className="text-[#0095FF]">Global Trade</span>
          </h1>
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

        

        

        {/* Replace SVG with apptab.svg */}
        <div className="-m-6 md:-m-20 flex justify-center">
          <Image
            src="/images/apptab.svg" // Replace this with the actual path to your SVG file
            alt="App Tab Image"
            width={600}
            height={400}
            className="w-full max-w-[800px] h-auto object-contain"
          />
        </div>
      </div>
    </main>
  )
}

  
  
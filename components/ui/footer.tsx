"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Page() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const features = [
    "Multi-Currency Pricing",
    "Mobile App Storefront",
    "Automated Reminders",
    "Volumetric Container Planning",
    "Centralized Compliance Management",
    "Simplified Order Invoicing",
    "AI Order Optimization",
    "Real-Time Notifications",
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 1

    const scroll = () => {
      if (isHovered) return

      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isHovered])

  const handleCTAClick = () => {
    router.push("/contact")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center md:text-left">
          <h1 className="font-heading text-4xl font-normal sm:text-5xl">
            Unlock the Future of Food Ordering with <span className="text-[#0C8EF7]">ProSessed's</span>
          </h1>
          <h2 className="mb-8 font-heading text-3xl italic sm:text-4xl">Seamless AI-Powered Platform.</h2>
          <button
            onClick={handleCTAClick}
            className="cursor-pointer rounded-full bg-[#0C8EF7] px-8 py-4 font-medium text-black transition-colors hover:bg-[#005906]"
          >
            REQUEST A DEMO
          </button>
        </div>

        {/* Features Carousel */}
        <div className="relative mt-16 w-screen -translate-x-1/2 left-1/2">
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex w-full overflow-hidden py-4 font-heading"
          >
            <div className="flex animate-scroll gap-6 whitespace-nowrap">
              {[...features, ...features].map((feature, index) => (
                <div key={index} className="flex flex-none items-center space-x-2 rounded-full bg-zinc-900 px-6 py-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="relative border-t border-zinc-800">
        <div className="absolute right-0 top-0 h-72 w-72 bg-emerald-500 opacity-20 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div>
              <div className="mb-6 flex flex-col space-y-4">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.expofoods.orderit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <Image
                    src="/images/ap.png"
                    alt="Get ProSessed App from App Store"
                    width={200}
                    height={60}
                    className="cursor-pointer"
                  />
                </Link>
              </div>
              <p className="font-heading text-gray-400">
                Download our OrderIt app from the Play Store and App Store for seamless food trade!
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-semibold">PAGES</h3>
              <nav className="grid grid-cols-2 gap-4 font-heading">
                <Link href="/resources" className="text-gray-400 transition-colors hover:text-white">
                  Resources
                </Link>
                <Link href="/demo" className="text-gray-400 transition-colors hover:text-white">
                  Demo
                </Link>
                <Link href="/about" className="text-gray-400 transition-colors hover:text-white">
                  About Us
                </Link>
                <Link href="/terms" className="text-gray-400 transition-colors hover:text-white">
                  Terms of Use
                </Link>
                <Link href="/privacypolicy" className="text-gray-400 transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-semibold">MORE LINKS</h3>
              <nav className="space-y-3 font-heading">
                <Link href="/faq" className="block text-gray-400 transition-colors hover:text-white">
                  FAQs
                </Link>
                <Link href="/contact" className="block text-gray-400 transition-colors hover:text-white">
                  Contact
                </Link>
                <Link href="/careers" className="block text-gray-400 transition-colors hover:text-white">
                  Careers
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-semibold">OUR LOCATIONS</h3>
              <div className="space-y-6 font-heading">
                <address className="not-italic">
                  <h4 className="text-lg font-medium">India</h4>
                  <p className="text-gray-400">A14 W, Trinity Acres and Woods, Sarjapur Road, Bangalore - 560102</p>
                  <p className="text-gray-400">Contact: +91 7276106858</p>
                </address>
                <address className="not-italic">
                  <h4 className="text-lg font-medium">Australia</h4>
                  <p className="text-gray-400">4 Biara Ct, Cranbourne West VIC 3977</p>
                  <p className="text-gray-400">Contact: +61 473933034</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


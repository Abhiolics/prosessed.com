'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<'importers' | 'exporters'>('importers')

  const features = {
    importers: {
      title: "Effortless Importing, Streamlined for You",
      cta: "Ready to Simplify Your Imports?",
      points: [
        "Let customers place orders through your app-based storefront.",
        "Enable your sales team to sell more with the Rep Ordering App.",
        "Automate picking slips and invoicing.",
        "Streamline warehouse and delivery operations with dedicated apps.",
        "Keep payments on track with automated reminders and alerts.",
        "Streamline warehouse and delivery operations with dedicated apps.",
      ],
      image: "/images/Tabimg.svg", // Correct path
    },
    exporters: {
      title: "Seamless Exporting, Optimized for Growth",
      cta: "Ready to Expand Your Exports?",
      points: [
        'An Online Storefront to showcase product range, categories, offers, and pricing.',
        'A Wholesale Ordering App for Importer to request for quote.',
        "Export documentation and compliance checklists for every order.",
        "Options for clients to open bank accounts in multiple countries.",
        "Export-compliant packing lists and invoices generated seamlessly.",
      ],
      image: "/images/Tabimg2.svg", // Correct path
    },
  }

  const currentFeature = features[activeTab]




  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-4xl lg:text-4xl font-semibold  mb-4 font-heading">
            Unlock Effortless Global Trade with{' '}
            <span className="text-[#0095FF]">ProSessed</span>
          </h1>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Revolutionizing food trade by simplifying cataloging, ordering, planning and payments for all.
          </p>
        </div>

        {/* Toggle */}
        <div className="relative  mx-auto mb-16  w-full max-w-lg p-1">
          <div className="flex h-14 items-center rounded-full justify-between bg-gray-200 p-1 ">
            <button
              onClick={() => setActiveTab('importers')}
              className={`flex-1 flex items-center font-heading py-3 text-lg justify-center h-12 rounded-full  font-medium transition-all ${
                activeTab === 'importers'
                  ? 'bg-[#005906] text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Importers
            </button>
            <button
              onClick={() => setActiveTab('exporters')}
              className={`flex-1 flex items-center justify-center h-12 rounded-full font-heading py-3 text-lg font-medium transition-all ${
                activeTab === 'exporters'
                  ? 'bg-[#005906] text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Exporters
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#F2F3FB] rounded-2xl shadow-xl p-8 lg:p-12">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-3xl font-semibold font-heading mb-12">
            {currentFeature.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Features */}
            <div
              className="space-y-4 flex flex-col justify-between"
              style={{ height: "400px", display: "grid", gridTemplateRows: "repeat(6, 1fr)" }} // Divides points equally to match the image
            >
              {currentFeature.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
                  <p className="text-gray-600 font-medium font-heading">{point}</p>
                </div>
              ))}
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={currentFeature.image}
                  alt="Feature illustration"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              {currentFeature.cta}
            </h3>
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
        </div>
      </div>
    </div>
  )
}






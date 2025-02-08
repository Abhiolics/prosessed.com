"use client"

import HeroSection from "@/components/integration"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileSpreadsheet, Zap, CreditCard, FileCheck, Store, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TrustedBy from "@/components/clients"
import Cta from "@/components/cta"




export default function LandingPage() {
    const [dropped, setDropped] = useState(false);
  return (
    
   <section>
<div className="max-w-6xl mx-auto px-4 sm:px-6 mt-44 sm:mt-40 md:mt-2">
        <div className=" pb-20 md:pt-40 md:pb-16">

          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">

            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h2 text-3xl lg:text-4xl mb-4 font-semibold  font-heading" data-aos="fade-down"><span className='text-[#0C8EF7]'>Effortlessly Manage Imports,</span>Orders Like Never Before</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-heading" data-aos="fade-down" data-aos-delay="150"> Revolutionize your operations with smart tools designed to simplify and streamline every step of the import process.</p>
              {/* CTA form */}
              <form className="mt-8" data-aos="fade-down" data-aos-delay="300">
                <div className="flex flex-col sm:flex-row  max-w-sm mx-auto sm:max-w-md md:mx-0">
                <a className="btn bg-black text-white font-bold transition-all hover:bg-emerald-600 hover:shadow-lg font-Heading" href="/contact" >
                    Get Started for Free
                  </a>
                </div>
              </form>
            </div>

            {/* Mobile mockup */}
            <div className="md:col-span-5 lg:col-span-5 text-center md:text-right" data-aos="fade-up" data-aos-delay="450">

              <img src="/images/ImpoImg.svg" alt="Exporters Image" />
            </div>

          </div>

        </div>
      </div>

  {/* Features Section */}
  <section className="relative container mx-auto px-6 sm:px-12 lg:px-20 py-20 md:py-32">
    <div className="text-center max-w-5xl mx-auto mb-20 space-y-6">
      <h2 className="text-2xl sm:text-4xl lg:text-4xl font-semibold font-heading">
        Streamline Your Import Business with <span className="text-blue-600">Smart Solutions</span>
      </h2>
      <p className="text-lg text-gray-600">
        Our comprehensive suite of tools is designed to make your import operations smoother and more efficient than ever before.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-12 font-heading">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="group  border bg-white/70 backdrop-blur-sm cursor-pointer overflow-hidden"
        >
          <CardContent className="p-8 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>

  {/* CTA Section */}
  <section className="relative container mx-auto px-6 sm:px-12 lg:px-20 py-20 md:py-8 text-center">
    <h2 className="text-2xl sm:text-4xl lg:text-4xl font-semibold font-heading mb-8">Ready to Simplify Your Imports?</h2>
    <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-heading">
      Join thousands of businesses that have transformed their import operations with our platform.
    </p>
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
  </section>


<section className="py-12 md:py-24 mx-auto px-6 sm:px-12 lg:px-20">
  <HeroSection/>  
</section>



<section>
<div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <h1 className="text-2xl sm:text-4xl lg:text-4xl font-semibold mb-16 text-center font-heading">
            <span className="text-gray-900">Prosessed's </span>
            <span className="text-blue-500">OrderIt for Importers</span>
          </h1>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center font-heading">
            {/* Left Column - Features */}
            <div className="space-y-12">
              {/* Browse and discover */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Browse and discover</h2>
                  <p className="text-gray-600">
                    Easily search through your supplier's entire Digital Catalogue. See their latest products and offers
                    and discover new trends.
                  </p>
                </div>
              </div>

              {/* Order with confidence */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Order with confidence</h2>
                  <p className="text-gray-600">
                    Choose the exact items you need and how many of each. Set your delivery date and add any special
                    instructions.
                  </p>
                </div>
              </div>

              {/* Easy quick payments */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Easy quick payments</h2>
                  <p className="text-gray-600">
                    Stay on top of your invoice payments by paying automatically as per the terms arranged with your
                    supplier.
                  </p>
                </div>
              </div>

              {/* PO & Container Planning */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">PO & Container Planning</h2>
                  <p className="text-gray-600">
                    Fasttrack your process of buying by our dynamic container capacity tool and automated PO creation
                    based on inventory levels
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[600px] w-full">
              <Image
                src="/images/ImpoImg2.svg"
                alt="OrderIt App Interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
</section>




<section>
<div className="flex items-center justify-center p-6 ">
      {/* Green Box Container */}
      <div className="relative w-full max-w-4xl bg-green-600 rounded-2xl p-10 shadow-xl mx-4">
        {/* Blurry Blue Circles */}
        <div className="absolute w-40 h-40 bg-blue-500 opacity-30 blur-3xl rounded-full top-[-40px] left-[-40px]"></div>
        <div className="absolute w-40 h-40 bg-blue-500 opacity-30 blur-3xl rounded-full bottom-[-40px] right-[-40px]"></div>

        {/* Content Section */}
        <div className="relative flex flex-col items-center text-center text-white font-heading">
          <h2 className="text-2xl md:text-3xl font-bold">
            Boost Your Sales with AI
          </h2>
          <p className="text-sm md:text-base text-gray-200 mt-2">
            Get Prosessed’s OrderIt Now!
          </p>

          {/* App Store & Play Store Icons */}
          <div className="flex justify-center mt-6 space-x-4">
            <a href="https://apps.apple.com/in/app/orderit-wholesale-order-app/id6736897489" className="w-36">
              <img
                src="/images/aps.webp"
                alt="App Store"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.expofoods.orderit" className="w-36">
              <img
                src="/images/gps.png"
                alt="Google Play"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
</section>


<section>
<TrustedBy/>
</section>

<section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-24">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl lg:text-3xl  font-semibold mb-12 font-heading">
        Have questions? We're here to help you
      </h2>

      {/* CTA box */}
      <div className="dark relative bg-gray-800 py-10 px-8 md:py-16 md:px-12 rounded-2xl mb-[-3rem] shadow-lg">
        {/* Background illustration */}
        <div className="absolute inset-0 left-auto pointer-events-none" aria-hidden="true">
          <svg className="h-full" width="400" height="232" viewBox="0 0 400 232" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-a">
                <stop stopColor="#667EEA" offset="0%" />
                <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
              </radialGradient>
              <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-b">
                <stop stopColor="#3ABAB4" offset="0%" />
                <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
              </radialGradient>
            </defs>
            <g transform="translate(-85 -369)" fill="none" fillRule="evenodd">
              <circle fillOpacity=".16" fill="url(#box-gr-a)" cx="413" cy="688" r="240" />
              <circle fillOpacity=".24" fill="url(#box-gr-b)" cx="400" cy="400" r="400" />
            </g>
          </svg>
        </div>

        {/* Contact Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-700 w-full">
  {/* Call Us Section */}
  <div className="flex flex-col sm:flex-row items-center text-center sm:text-left justify-center sm:justify-start gap-4 w-full p-4">
    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#2ECC71] bg-opacity-10">
      <svg
        viewBox="0 0 24 24"
        className="w-10 h-10 text-[#2ECC71]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </div>
    <div>
      <div className="text-sm font-medium text-gray-400">CALL US</div>
      <div className="text-xl sm:text-2xl font-semibold text-[#2ECC71]">
        +91 7276106858
      </div>
    </div>
  </div>

  {/* Email Us Section */}
  <div className="flex flex-col sm:flex-row items-center text-center sm:text-left justify-center sm:justify-start gap-4 w-full p-4">
    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#2ECC71] bg-opacity-10">
      <svg
        viewBox="0 0 24 24"
        className="w-10 h-10 text-[#2ECC71]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8" />
        <path d="M8 14h4" />
      </svg>
    </div>
    <div>
      <div className="text-sm font-medium text-gray-400">EMAIL US AT</div>
      <div className="text-xl sm:text-2xl font-semibold text-[#2ECC71]">
        navneet@prosessed.com
      </div>
    </div>
  </div>
</div>


      </div>

      {/* Footer Background */}
      {/* <div className="bg-[#000033] h-32 mt-0"></div> */}
    </div>
  </section>
</section>

  )
}



const features = [
  {
    icon: Zap,
    title: "Smart Ordering",
    description:
      "Leverage AI to automate order creation based on sales patterns, ensuring timely inventory replenishment and inventory management.",
  },
  {
    icon: FileSpreadsheet,
    title: "Automated PO Creation",
    description:
      "Leverage AI to automate purchase order creation based on sales patterns, ensuring timely inventory replenishment and inventory management.",
  },
  {
    icon: CreditCard,
    title: "Payment Automation",
    description:
      "Streamline payment collection with automated workflows, ensuring faster transactions and simplified payment management.",
  },
  {
    icon: FileCheck,
    title: "Rapid Order to Invoice",
    description:
      "Accelerate your ordering to invoice process with seamless integration, reducing manual steps and improving operational efficiency.",
  },
  {
    icon: Store,
    title: "Product Showcase",
    description:
      "Present your products in an attractive way with easy setup relative pricing and drive customer engagement effectively.",
  },
  {
    icon: Users,
    title: "Customer Self-Service",
    description:
      "Empower your customers with a dashboard to place orders, track payments and stay updated with real-time order status.",
  },
]




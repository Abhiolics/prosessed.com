import VideoThumb from '@/public/images/mockup-image-01.jpg'
import ModalVideoIphone from '@/components/modal-video-iphone'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileSpreadsheet, Zap, CreditCard, FileCheck, Store, Users } from "lucide-react"
import HeroSection from '@/components/integration'
import Link from 'next/link'
import TrustedBy from '@/components/clients'

export default function exporters() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-44 sm:mt-40 md:mt-2">
        <div className=" pb-20 md:pt-40 md:pb-16">

          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">

            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h2 text-3xl lg:text-4xl mb-4 font-semibold  font-heading" data-aos="fade-down"><span className='text-[#0C8EF7]'>Seamlessly Manage Exports,</span> & Boost Profits</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-heading" data-aos="fade-down" data-aos-delay="150">Transform your export process with intelligent tools crafted to simplify, optimize and streamline every stage of your operations.</p>
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

              <img src="/images/ExpoImg.svg" alt="Exporters Image" />
            </div>

          </div>

        </div>
      </div>



      <section className="relative container mx-auto px-6 sm:px-12 lg:px-20 py-20 md:py-32">
    <div className="text-center max-w-5xl mx-auto mb-20 space-y-6">
      <h2 className="text-2xl sm:text-4xl lg:text-4xl font-semibold font-heading">
        Streamline Your Export <span className="text-blue-600">Business with Ease</span>
      </h2>
      <p className="text-lg text-gray-600">
      Streamline exports with smarter tools, seamless operations and effortless compliance.
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


  <div>
  <HeroSection/>
  </div>

  <section className="relative container mx-auto px-6 sm:px-12 lg:px-20 py-20 md:py-8 text-center">
    <h2 className="text-2xl sm:text-4xl lg:text-4xl font-semibold font-heading mb-8">Ready to Simplify Your Exports?</h2>
    <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-heading">
      Join thousands of businesses that have transformed their export operations with our platform.
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

  <section>
<div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <h1 className="text-2xl sm:text-4xl lg:text-4xl font-heading font-semibold mb-16 text-center">
            <span className="text-gray-900">Prosessed's </span>
            <span className="text-blue-500">OrderIt for Exporters</span>
          </h1>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center font-heading">
            {/* Left Column - Features */}
            <div className="space-y-12">
              {/* Browse and discover */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg
  className="w-8 h-8 text-green-500"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <polygon points="13 2 3 14 12 14 11 22 21 10 13 10 13 2" />
</svg>



                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Quick Prosessing</h2>
                  <p className="text-gray-600">
                  Accelerate your quotes and order
processing with streamlined workflows, 
reducing turnaround time and boosting
efficiency.
                  </p>
                </div>
              </div>

              {/* Order with confidence */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg
  className="w-8 h-8 text-green-500"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 12l2 2 4-4"
  />
</svg>

                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Seamless Compliance</h2>
                  <p className="text-gray-600">
                  Ensure top-notch compliance, maintain 
quality standards, and manage 
documentation effortlessly for a 
smooth export process.
                  </p>
                </div>
              </div>

              {/* Easy quick payments */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg
  className="w-8 h-8 text-green-500"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3 4h18l-2 6H5L3 4z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M5 10v7a2 2 0 002 2h10a2 2 0 002-2v-7"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 14h6"
  />
</svg>

                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Custom Storefront</h2>
                  <p className="text-gray-600">
                  Build an app-based storefront
to enhance customer experience, 
simplify ordering, and boost
customer retention.
                  </p>
                </div>
              </div>

              {/* PO & Container Planning */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg
  className="w-8 h-8 text-green-500"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <text x="5" y="18" fontSize="16" fontWeight="" fill="currentColor">$ </text>
</svg>




                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Multi-Currency Advantage</h2>
                  <p className="text-gray-600">
                  Manage transactions seamlessly with 
multi-currency accounts, ensuring the
lowest FX rates for cost-effective global
trade.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[600px] w-full">
              <Image
                src="/images/ExpoImg2.svg"
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

    
    </section>
  )
}


const features = [
  {
    icon: Zap,
    title: "Catalog Management",
    description:
      "Our wholesale ordering app enables importers to request quotes, connect with buyers, and share offers effortlessly, ensuring global visibility with real-time pricing and dynamic catalogs.",
  },
  {
    icon: FileSpreadsheet,
    title: "Intelligent Quoting ",
    description:
      "Enable customers to log in and place quotes effortlessly with automated generation, real-time currency conversion, custom pricing rules and instant quote sharing.",
  },
  {
    icon: CreditCard,
    title: "Compliance Intelligence",
    description:
      "Ensure seamless trade with pre-defined checklists, automated regulation checks, real-time compliance tracking and country-specific documentation templates.",
  },
  {
    icon: FileCheck,
    title: "Order Processing ",
    description:
      "Streamline order fulfillment with export-compliant packing lists, dynamic shipment volume calculators, batch management and fast-tracked processing for improved timelines.",
  },
  {
    icon: Store,
    title: "Streamlined Payment",
    description:
      "Enable exporters to open bank accounts in 33 currencies with our partner Pay local, get the lowest forex markup, instant payment notifications, E-FIRA generation, card payment options, and hassle-free reconciliation.",
  },
  {
    icon: Users,
    title: "Optimized Operations",
    description:
      "Save time and reduce costs with automated workflows, smart order processing and seamless logistics integration, ensuring faster shipments and higher efficiency.",
  },
]
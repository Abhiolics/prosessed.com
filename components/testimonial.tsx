"use client"


export default function Testimonial() {
    return (
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Heading */}
        <h2 className="mb-8 text-center text-2xl sm:text-4xl lg:text-4xl font-semibold">
          Kind words from our{' '}
          <span className="text-[#0095FF]">Customer</span>
        </h2>
  
        {/* Testimonial Content */}
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Main Quote */}
          <p className="mb-6 text-lg md:text-xl font-heading">
            Prosessed's OrderIT has helped our team{' '}
            <span className="font-semibold">streamline our sales processes</span>,
            helping us take the b2b orders via mobile app storefront.
          </p>
  
          {/* Secondary Quote */}
          <p className="mb-6 text-lg md:text-xl font-heading">
            We are now in much better position to shape our buying process
            and our Purchasing Order automation has helped us buy right product at right time.{' '}
            <span className="font-semibold">
              They own the complete implementation of the software.
            </span>
          </p>
  
          {/* Profile Section */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            {/* Company Logo */}
            <div className="relative h-16 w-16 overflow-hidden rounded-full bg-orange-50">
              <img
                src="/images/bf.avif"
                alt="Bharat Foods Logo"
                className="h-full w-full object-contain p-2"
              />
            </div>
  
            {/* Profile Info */}
            <div className="text-center md:text-left font-heading">
              <h3 className="text-xl font-semibold">Nimesh Shah</h3>
              <p className="text-gray-600">
                Director, Bharat Foods Pty Ltd, Australia
              </p>
            </div>
          </div>
  
          {/* Background Gradient Effect */}
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-gradient-to-tl from-teal-100/50 to-transparent blur-3xl"></div>
          <div className="pointer-events-none absolute -left-10 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-blue-100/50 to-transparent blur-3xl"></div>
        </div>
      </section>
    )
  }
  
  

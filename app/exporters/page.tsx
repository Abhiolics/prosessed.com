import VideoThumb from '@/public/images/mockup-image-01.jpg'
import ModalVideoIphone from '@/components/modal-video-iphone'
import Image from 'next/image'

export default function exporters() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">

            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h1 lg:text-5xl mb-4 font-semibold   font-heading" data-aos="fade-down">Expand Your Reach, Simplify Your Process</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-heading" data-aos="fade-down" data-aos-delay="150">Exporting food should be effortless. With ProSessed, we eliminate the chaos of paperwork and manual tasks, letting you focus on growing your global business.</p>
              {/* CTA form */}
              <form className="mt-8" data-aos="fade-down" data-aos-delay="300">
                <div className="flex flex-col sm:flex-row  max-w-sm mx-auto sm:max-w-md md:mx-0">
                  <a className="btn text-white bg-teal-500 hover:bg-teal-400 shrink-0" href="#0">Get Started</a>
                </div>
              </form>
            </div>

            {/* Mobile mockup */}
            <div className="md:col-span-5 lg:col-span-5 text-center md:text-right" data-aos="fade-up" data-aos-delay="450">

              <ModalVideoIphone
                thumb={VideoThumb}
                thumbWidth={290}
                thumbHeight={624}
                thumbAlt="Modal video thumbnail"
                video="/videos/video.mp4"
                videoWidth={1920}
                videoHeight={1080} />

            </div>

          </div>

        </div>
      </div>


      {/* 2nd Sec */}
      <div className="min-h-screen  px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-center text-3xl font-bold leading-tight md:text-5xl">
        Simplify Exports - Maximize Impact
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-600 font-heading">
        Streamline exports with smarter tools, seamless operations and effortless compliance.
        </p>
        <p className="mx-auto max-w-3xl text-center text-gray-600">
          You get paid faster. You save time. Your business grows.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
             <img src='./images/online-hotel-booking.svg' />
            
            </div>
            <h3 className="mb-2 text-xl font-semibold">Smart Catalog Management</h3>
            <p className="text-sm text-gray-600">Connect with buyers, share offers and track containers.</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <img src='./images/business-website.svg' />
            </div>
            <h3 className="mb-2 text-xl font-semibold"> Intelligent Quoting System</h3>
            <p className="text-sm text-gray-600"> Automate quotes with custom pricing and live currency rates.</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <img src='./images/documents.svg' />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Compliance Intelligence</h3>
            <p className="text-sm text-gray-600">Automated checks and country-specific documentation.</p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <img src='./images/online-store.svg' />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Order Processing Ecosystem</h3>
            <p className="text-sm text-gray-600">Plan efficiently and fast-track order processing.</p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <img src='./images/money-transfer.svg' />
            </div>
            <h3 className="mb-2 text-xl font-semibold"> Streamlined Payments</h3>
            <p className="text-sm text-gray-600">Multi-currency accounts, instant payments and easy reconciliation.</p>
          </div>
        </div>
      </div>
    </div>


    {/* 3rd Sec */}
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* First Row - Two unequal columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Large Black Card - Spans 2 columns */}
        <div className="md:col-span-2 bg-[#004B87] p-8 rounded-2xl">
          <div className="max-w-2xl">
            <div className="flex items-start mb-4">
            {/* <svg
  className="w-12 h-12 mb-4"
  viewBox="0 0 32 32"
  fill="#2ECC71"
>
  <path d="M18,11a1,1,0,0,1-1,1,5,5,0,0,0-5,5,1,1,0,0,1-2,0,5,5,0,0,0-5-5,1,1,0,0,1,0-2,5,5,0,0,0,5-5,1,1,0,0,1,2,0,5,5,0,0,0,5,5A1,1,0,0,1,18,11Z" />
  <path d="M19,24a1,1,0,0,1-1,1,2,2,0,0,0-2,2,1,1,0,0,1-2,0,2,2,0,0,0-2-2,1,1,0,0,1,0-2,2,2,0,0,0,2-2,1,1,0,0,1,2,0,2,2,0,0,0,2,2A1,1,0,0,1,19,24Z" />
  <path d="M28,17a1,1,0,0,1-1,1,4,4,0,0,0-4,4,1,1,0,0,1-2,0,4,4,0,0,0-4-4,1,1,0,0,1,0-2,4,4,0,0,0,4-4,1,1,0,0,1,2,0,4,4,0,0,0,4,4A1,1,0,0,1,28,17Z" />
</svg> */}

            </div>
            <h1 className="text-white text-3xl font-heading md:text-5xl font-normal mb-4">
            Supercharge Your Exports with ProSessed
            </h1>
            {/* <p className="text-3xl md:text-4xl text-gray-400 font-light italic">
              ProSessed's Fast Start, Instant Impact
            </p> */}
          </div>
        </div>

        {/* Small White Card */}
        <div className="bg-gradient-to-l border from-white via-green-100 to-green-300 p-6 rounded-xl shadow-sm">
        <svg
  className="w-12 h-12 mb-4"
  viewBox="0 0 32 32"
  fill="#2ECC71"
>
  <path d="M18,11a1,1,0,0,1-1,1,5,5,0,0,0-5,5,1,1,0,0,1-2,0,5,5,0,0,0-5-5,1,1,0,0,1,0-2,5,5,0,0,0,5-5,1,1,0,0,1,2,0,5,5,0,0,0,5,5A1,1,0,0,1,18,11Z" />
  <path d="M19,24a1,1,0,0,1-1,1,2,2,0,0,0-2,2,1,1,0,0,1-2,0,2,2,0,0,0-2-2,1,1,0,0,1,0-2,2,2,0,0,0,2-2,1,1,0,0,1,2,0,2,2,0,0,0,2,2A1,1,0,0,1,19,24Z" />
  <path d="M28,17a1,1,0,0,1-1,1,4,4,0,0,0-4,4,1,1,0,0,1-2,0,4,4,0,0,0-4-4,1,1,0,0,1,0-2,4,4,0,0,0,4-4,1,1,0,0,1,2,0,4,4,0,0,0,4,4A1,1,0,0,1,28,17Z" />
</svg>

          <h2 className="text-2xl font-semibold mb-3 font-heading">Fast Start, Instant Impact
          </h2>
          <p className="text-gray-600 font-heading">
          Get up and running quickly—enable your team to streamline exports and see results within weeks.
          </p>
        </div>
      </div>

      {/* Second Row - Three equal columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Compliant & Secure */}
        <div className="bg-gradient-to-l border from-white via-green-100 to-green-300 p-6 rounded-xl shadow-sm">
        {/* <svg
  className="w-12 h-12 mb-4"
  fill="#2ECC71"
  viewBox="0 0 24 24"
  stroke="#2ECC71"
>
  <path d="M22,24H2V2h5V0h10v2h5V24z M4,22h16V4h-3v3H7V4H4V22z M9,5h6V2H9V5z M11,18.4l-3.7-3.7l1.4-1.4l2.3,2.3l5.3-5.3l1.4,1.4 L11,18.4z"></path>
</svg> */}

          <h2 className="text-2xl font-semibold mb-3 font-heading">Built for Compliance, Powered by Security</h2>
          <p className="text-gray-600 font-heading">
          Stay ahead with automated compliance checks and secure, real-time documentation tracking.
          </p>
        </div>

        {/* Configurable */}
        <div className="bg-gradient-to-l border from-white via-green-100 to-green-300 p-6 rounded-xl shadow-sm">
        {/* <svg className="w-16 h-16" fill="#2ECC71" viewBox="0 0 100 100" stroke="#2ECC71">
  <path d="m49.91 50.6-4.91-4.91a1.36 1.36 0 0 0 -2 0l-1.94 2a1.33 1.33 0 0 0 0 1.94l6.94 6.81a2.7 2.7 0 0 0 1.95.83 2.67 2.67 0 0 0 1.94-.83l14.11-14.17a1.34 1.34 0 0 0 0-2l-1.94-1.94a1.34 1.34 0 0 0 -1.95 0z"/>
  <path d="m71.81 54.15a23.31 23.31 0 0 0 0-8.6l4.6-3.9a4.28 4.28 0 0 0 1-5.3l-2-3.5a4.11 4.11 0 0 0 -3.6-2 3.19 3.19 0 0 0 -1.4.3l-5.8 2.1a22.35 22.35 0 0 0 -7.4-4.3l-1-5.9a3.92 3.92 0 0 0 -4.1-3.1h-4a3.85 3.85 0 0 0 -4.1 3.1l-1 5.8a21.59 21.59 0 0 0 -7.5 4.3l-5.9-2.1a7 7 0 0 0 -1.4-.3 4.2 4.2 0 0 0 -3.6 2l-2 3.5a4.16 4.16 0 0 0 1 5.3l4.6 3.9a20.87 20.87 0 0 0 -.4 4.3 20.24 20.24 0 0 0 .4 4.3l-4.6 3.95a4.28 4.28 0 0 0 -1 5.3l2 3.5a4.11 4.11 0 0 0 3.6 2 3.19 3.19 0 0 0 1.4-.3l5.8-2.1a22.35 22.35 0 0 0 7.4 4.3l1 6a4.1 4.1 0 0 0 4.1 3.4h4a4.18 4.18 0 0 0 4.1-3.5l1-6a22.06 22.06 0 0 0 7.8-4.6l5.4 2.1a8 8 0 0 0 1.5.3 4.2 4.2 0 0 0 3.6-2l1.9-3.3a3.67 3.67 0 0 0 -.8-5zm-3.39-9.34-4.55 4.56v.78a13.85 13.85 0 1 1 -6.7-11.81l2.45-2.44a4.84 4.84 0 0 1 6.89 0l2 2a4.9 4.9 0 0 1 1.43 3.7 4.66 4.66 0 0 1 -1.52 3.21z"/>
</svg> */}

          <h2 className="text-2xl font-semibold mb-3 font-heading">Custom Fit for Your Business</h2>
          <p className="text-gray-600 font-heading">
          Easily adapt pricing, quoting and order management to match your unique export needs.
          </p>
        </div>

        {/* Seamless Integration */}
        <div className="bg-gradient-to-l border from-white via-green-100 to-green-300 p-6 rounded-xl shadow-sm">
        {/* <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="#2ECC71">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 3a1 1 0 0 0-2 0v17.2A1.8 1.8 0 0 0 3.8 22H21a1 1 0 1 0 0-2H4V3Zm17.707 4.707a1 1 0 0 0-1.414-1.414L14 12.586l-3.293-3.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L10 11.414l3.293 3.293a1 1 0 0 0 1.414 0l7-7Z" fill="#2ECC71"></path>
</svg> */}

          <h2 className="text-2xl font-semibold mb-3 font-heading">Effortless Control, Real-Time Insights</h2>
          <p className="text-gray-600 font-heading">
          Track every export detail seamlessly—from container status to order fulfillment—right at your fingertips.
          </p>
        </div>
      </div>
    </div>
    </section>
  )
}
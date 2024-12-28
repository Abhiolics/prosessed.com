// import Link from 'next/link'

// export default function Footer() {
//   return (
//     <footer className="relative">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px">
        
//           <div className="pointer-events-none -z-1" aria-hidden="true">
//             <svg
//               className="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40"
//               width="800"
//               height="264"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <circle cx="400" cy="400" r="400" fill="url(#footerglow_paint0_radial)" fillOpacity=".4" />
//               <defs>
//                 <radialGradient
//                   id="footerglow_paint0_radial"
//                   cx="0"
//                   cy="0"
//                   r="1"
//                   gradientUnits="userSpaceOnUse"
//                   gradientTransform="rotate(90 0 400) scale(315.089)"
//                 >
//                   <stop stopColor="#3ABAB4" />
//                   <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
//                 </radialGradient>
//               </defs>
//             </svg>
//           </div>

          
//           <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
          
//             <div className="md:col-span-2 lg:col-span-3">
             
//               <Link className="inline-block" href="/" aria-label="Cruip">
//                 <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                   <defs>
//                     <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="flogo_a">
//                       <stop stopColor="#3ABAB4" offset="0%" />
//                       <stop stopColor="#7F9CF5" offset="100%" />
//                     </linearGradient>
//                     <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="flogo_b">
//                       <stop stopColor="#3ABAB4" offset="0%" />
//                       <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
//                     </linearGradient>
//                   </defs>
//                   <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#flogo_a)" />
//                   <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#flogo_b)" />
//                 </svg>
//               </Link>
//             </div>

           
//             <div className="md:col-span-10 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            
//               <div className="text-sm">
//                 <h6 className="font-medium uppercase mb-2">Products</h6>
//                 <ul>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Drag And Drop
//                     </a>
//                   </li>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Visual Studio X
//                     </a>
//                   </li>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Easy Content
//                     </a>
//                   </li>
//                 </ul>
//               </div>

              
//               <div className="text-sm">
//                 <h6 className="font-medium uppercase mb-2">Resources</h6>
//                 <ul>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Industries and tools
//                     </a>
//                   </li>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Use cases
//                     </a>
//                   </li>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Blog
//                     </a>
//                   </li>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Online events
//                     </a>
//                   </li>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Nostrud exercitation
//                     </a>
//                   </li>
//                 </ul>
//               </div>

          
//               <div className="text-sm">
//                 <h6 className="font-medium uppercase mb-2">Company</h6>
//                 <ul>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Diversity & inclusion
//                     </a>
//                   </li>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       About us
//                     </a>
//                   </li>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Press
//                     </a>
//                   </li>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Customer stories
//                     </a>
//                   </li>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Online communities
//                     </a>
//                   </li>
//                 </ul>
//               </div>

            
//               <div className="text-sm">
//                 <h6 className="font-medium uppercase mb-2">Support</h6>
//                 <ul>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Documentation
//                     </a>
//                   </li>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Tutorials & guides
//                     </a>
//                   </li>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Webinars
//                     </a>
//                   </li>
//                   <li className="mb-1">
//                     <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                       Open-source
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

       
//           <div className="md:flex md:items-center md:justify-between">
         
//             <ul className="flex mb-4 md:order-2 md:ml-4 md:mb-0">
//               <li>
//                 <a
//                   className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
//                   href="#0"
//                   aria-label="Twitter"
//                 >
//                   <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                     <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
//                   </svg>
//                 </a>
//               </li>
//               <li className="ml-4">
//                 <a
//                   className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
//                   href="#0"
//                   aria-label="Github"
//                 >
//                   <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
//                   </svg>
//                 </a>
//               </li>
//               <li className="ml-4">
//                 <a
//                   className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
//                   href="#0"
//                   aria-label="Facebook"
//                 >
//                   <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
//                   </svg>
//                 </a>
//               </li>
//               <li className="ml-4">
//                 <a
//                   className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
//                   href="#0"
//                   aria-label="Instagram"
//                 >
//                   <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                     <circle cx="20.145" cy="11.892" r="1" />
//                     <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
//                     <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
//                   </svg>
//                 </a>
//               </li>
//               <li className="ml-4">
//                 <a
//                   className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
//                   href="#0"
//                   aria-label="Linkedin"
//                 >
//                   <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
//                   </svg>
//                 </a>
//               </li>
//             </ul>

          
//             <div className="text-sm md:order-1 text-gray-700 mb-2 md:mb-0">
//               <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                 Terms
//               </a>{' '}
//               ·{' '}
//               <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
//                 Privacy Policy
//               </a>
//             </div>

      
//             <div className="text-gray-600 dark:text-gray-400 text-sm mr-4">&copy; Cruip.com. All rights reserved.</div>
//           </div>
//         </div>
//       </div>

      
//     </footer>
//   )
// }


'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const timer = setInterval(scroll, 30)
    return () => clearInterval(timer)
  }, [])

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

  const pages = {
    "Resources": "/resources",
    "Demo": "/demo",
    "About Us": "/about",
    "Autonomous Sourcing": "/autonomous-sourcing",
    "Source to Pay": "/source-to-pay",
    "Career": "/career"
  }

  return (
    <footer className="bg-black text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-normal mb-4 font-heading">
          Unlock the Future of Food Ordering with ProSessed’s 
          </h2>
          <h3 className="text-4xl sm:text-5xl font-serif italic mb-8">
          Seamless, AI-Powered Platform.
          </h3>
          <Link
            href="/demo"
            className="inline-block bg-[#2ECC71] text-black px-8 py-4 rounded-full font-medium hover:bg-[#004B87] transition-colors"
          >
            REQUEST A DEMO
          </Link>
        </div>

        {/* Scrolling Features */}
        <div className="mt-16 relative">
  <div
    ref={scrollRef}
    className="flex font-heading space-x-6 overflow-hidden whitespace-nowrap py-4 w-full"
  >
    {[...features, ...features].map((feature, index) => (
      <div
        key={index}
        className="flex items-center bg-zinc-900 rounded-full px-6 py-3 space-x-2 flex-none"
      >
        <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
          <svg
            className="w-3 h-3 text-white"
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

      {/* Footer Content */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo and Social Links */}
            <div>
            
              <img src="/images/logoo.avif" alt="Example Image" className='mb-4 w-150 h-20' />
              <p className="text-gray-400 mb-6">
                Scalling Food Businesses
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Pages */}
            <div>
              <h4 className="text-lg font-semibold mb-6">PAGES</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(pages).map(([name, url]) => (
                  <Link
                    key={name}
                    href={url}
                    className="text-gray-400 hover:text-white"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Compliance Badges */}
            <div>
  <h4 className="text-lg font-semibold mb-6">
    OUR LOCATIONS
  </h4>
  <div className="flex flex-wrap gap-12">
    {/* India Address */}
    <div className="flex flex-col items-start space-y-2">
      <h5 className="text-lg font-medium">India</h5>
      <p className="text-gray-400">
        A14 W, Trinity Acres and Woods, Sarjapur Road, Bangalore - 560102
      </p>
      <p className="text-gray-400">
        Contact: +91 7276106858
      </p>
    </div>

    {/* Australia Address */}
    <div className="flex flex-col items-start space-y-2">
      <h5 className="text-lg font-medium">Australia</h5>
      <p className="text-gray-400">
        4 Biara Ct, Cranbourne West VIC 3977
      </p>
      <p className="text-gray-400">
        Contact: +61 473933034
      </p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </footer>
  )
}


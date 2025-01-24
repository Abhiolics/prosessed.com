'use client';

import React from 'react';
import PageIllustration from '@/components/page-illustration';
import Image from 'next/image';

export default function ScheduleDemo() {
  return (
    <>
      {/* Page Illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page Header */}
            <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="text-2xl sm:text-4xl lg:text-4xl font-semibold  mb-4 font-heading">
                Schedule Your Demo with Us!
              </h1>
              <p className="text-pretty sm:text-normal text-gray-600 dark:text-gray-400">
                Let us walk you through how ProSessed can help transform your business with powerful AI tools.
              </p>
            </div>

            {/* Google Calendar Section */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-heading font-medium text-gray-900 text-center mb-8">
                Pick a Date and Time
              </h2>
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3E6OsJMTnmLvlQjkSq2Cd4BGeIcyM401LHyBj4CZfguzz4-kVEwiefSq1pyUfctxQ34LzA2IKF?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                className="rounded-lg shadow-lg"
                title="Schedule Demo"
              ></iframe>
            </div>

         
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-4xl lg:text-3xl  md:text-3xl font-semibold mb-12 font-heading mt-20">
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
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-700">
          {/* Call Us Section */}
          <div className="flex items-center justify-center  md:pr-12 pt-4 md:pt-0">
            <svg
              viewBox="0 0 24 24"
              className="w-12 h-12 text-[#2ECC71] mr-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div>
              <div className="text-sm font-medium text-gray-400 mb-1">CALL US</div>
              <div className="text-2xl md:text-2xl font-semibold text-[#2ECC71]">
              +91 7276106858
              </div>
            </div>
          </div>

          {/* Email Us Section */}
          <div className="flex items-center justify-center md:justify-start md:pl-12 pt-4 md:pt-0">
            <svg
              viewBox="0 0 24 24"
              className="w-12 h-12 text-[#2ECC71] mr-6"
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
            <div>
              <div className="text-sm font-medium text-gray-400 mb-1">SAY HI</div>
              <div className="text-xl md:text-2xl font-semibold text-[#2ECC71]">
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
    </>
  );
}



'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center  px-4 ">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-4xl lg:text-4xl font-semibold font-heading">
          Integrated with your{' '} <br />
          <span className="font-semibold  text-[#0C8EF7] font-heading">Favorite</span> Apps
        </h1>
      </div>

      {/* Image */}
      <div className="flex justify-center -m-6 md:-m-20"> {/* Added mt-8 for margin-top */}
        <Image
          src="/images/Intimg.svg" // Replace with the correct path to your image
          alt="Favorite App Image"
          width={400}
          height={200}
          className="w-80 h-80 sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[400px] xl:w-[700px] xl:h-[700px] object-contain"
        />
      </div>
    </div>
  )
}


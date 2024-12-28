"use client";
import Image from "next/image";




export default function Stats() {  

  const images = [
    "/images/user-1.jpg",
    "/images/user-2.jpg",
    "/images/user-3.jpg",
    "/images/user-4.jpg",
    "/images/user-5.jpg",
    "/images/user-6.jpg",
    "/images/user-7.jpg",
  ];
  return (
    <section className="relative">

      <div className="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden" aria-hidden="true"></div>
  
      {/* <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-4 text-center" data-aos-id-stats>
          
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]">
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">2.4M</div>
              <div className="text-gray-600 dark:text-gray-400">Days turn around</div>
            </div>
       
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="100">
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">7M</div>
              <div className="text-gray-600 dark:text-gray-400">Days turn around</div>
            </div>
         
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="200">
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">7.4%</div>
              <div className="text-gray-600 dark:text-gray-400">Days turn around</div>
            </div>
           
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="300">
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">49K</div>
              <div className="text-gray-600 dark:text-gray-400">Days turn around</div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative overflow-hidden py-10 ">
  {/* Section Heading */}
  <h2 className="text-center text-3xl font-heading font-semibold mb-8 text-gray-800">
    Our Customers
  </h2>

  {/* Carousel */}
  <div className="flex overflow-hidden relative">
    {/* Carousel wrapper */}
    <div className="flex animate-scroll space-x-8">
      {images.map((src, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-48 h-48 flex justify-center items-center"
        >
          <Image
            src={src}
            alt={`Customer ${index + 1}`}
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
      ))}
    </div>

    {/* Duplicate for seamless scrolling */}
    <div className="flex animate-scroll space-x-8">
      {images.map((src, index) => (
        <div
          key={`duplicate-${index}`}
          className="flex-shrink-0 w-48 h-48 flex justify-center items-center"
        >
          <Image
            src={src}
            alt={`Customer duplicate ${index + 1}`}
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Tailwind CSS Animation */}
  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    .animate-scroll {
      animation: scroll 20s linear infinite;
    }
  `}</style>
</div>

    </section>
  )
}
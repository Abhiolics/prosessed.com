"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { TypingAnimation } from "./magicui/typing-animation";

export default function TrustedBy() {
  const logos = [
    { name: "Healthy Food Crew", src: "/images/hfc.webp", width: 140, height: 64 },
    { name: "Joyco Exports", src: "/images/joyco.webp", width: 120, height: 64 },
    { name: "Cerro", src: "/images/cerro.jpg", width: 130, height: 64 },
    { name: "Goli Soda", src: "/images/Goli.avif", width: 160, height: 64 },
    { name: "Brand Name", src: "/images/bf.avif", width: 110, height: 64 },
    { name: "Another Brand", src: "/images/bi.png", width: 140, height: 64 }
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = carouselRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 1;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollAmount;
      }
    };

    const interval = setInterval(scroll, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-12 text-center text-2xl sm:text-4xl lg:text-4xl font-semibold font-heading">
        Trusted by{" "}
        <TypingAnimation className="text-2xl sm:text-4xl lg:text-4xl font-semibold font-heading text-[#0C8EF7]">
          Food Importers & Exporters
        </TypingAnimation>
      </h2>

      {/* Container with blur effects */}
      <div className="relative">
        {/* Left blur gradient */}
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

        {/* Right blur gradient */}
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white via-white/90 to-transparent"></div>

        {/* Logos container with infinite scrolling */}
        <div
          ref={carouselRef}
          className="flex items-center gap-12 overflow-hidden px-8 whitespace-nowrap"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex min-w-[120px] items-center justify-center">
              <Image
                src={logo.src} 
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




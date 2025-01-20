"use client";

import Image from "next/image";

export default function TrustedBy() {
  const logos = [
    { name: "Healthy Food Crew", src: "/images/hfc.webp", width: 140, height: 64 },
    { name: "Joyco Exports", src: "/images/joyco.webp", width: 120, height: 64 },
    { name: "Cerro", src: "/images/cerro.jpg", width: 130, height: 64 },
    { name: "Goli Soda", src: "/images/Goli.avif", width: 160, height: 64 },
    { name: "Brand Name", src: "/images/bf.avif", width: 110, height: 64 },
    { name: "Brand Name", src: "/images/dc.svg", width: 110, height: 64 },
    { name: "Brand Name", src: "/images/fm.webp", width: 110, height: 64 },
    { name: "Another Brand", src: "/images/bi.png", width: 140, height: 64 }
  ];

  return (
    <section className="relative mx-auto max-w-8xl px-4 py-16 mt-12">
      <h2 className="mb-24 text-center text-2xl sm:text-4xl lg:text-4xl font-semibold font-heading">
        Trusted by
        <span className="text-[#0C8EF7] text-2xl sm:text-4xl lg:text-4xl font-semibold font-heading"> Food Importers & Exporters</span>
      </h2>

      {/* Static Logos container */}
      <div className="flex flex-wrap items-center justify-center gap-12 px-8">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
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
    </section>
  );
}





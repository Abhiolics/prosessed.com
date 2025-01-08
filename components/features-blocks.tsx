import Image from "next/image";

export default function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-heading font-semibold">How We Get Things Done!</h2>
          </div>

          {/* Items */}
          <div className="max-w-xs mx-auto sm:max-w-none  md:max-w-xl lg:max-w-none grid sm:grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-5" data-aos-id-featbl>

            {/* 1st item */}
            <a className="flex flex-col p-5 rounded-xl group text-white bg-gradient-to-tr bg-[#2ECC71] shadow-2xl" href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]">
              <Image
            alt="" 
  src="/images/know.svg" 
  className="mb-2"
  width={50} 
  height={50} 
/>
          
              <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">Understand</div>
              <div className="grow opacity-80 mb-4">Understand the Business & its key Supply-chain Problem.</div>
            
            </a>

            {/* 2nd item */}
            <a className="flex flex-col p-5 rounded-xl group text-white bg-gradient-to-tr bg-[#004B87]  shadow-2xl" href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="100">
            <Image 
  alt="" 
  src="/images/donut.svg" 
   className="mb-2"
  width={50} 
  height={50} 
/>
              <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">Segment</div>
              <div className="grow opacity-80 mb-4">Break the problem down into desired business aspects & achievable blocks.</div>
            
            </a>

            {/* 3rd item */}
            <a className="flex flex-col p-5 rounded-xl group text-white bg-gradient-to-tr bg-[#2ECC71] shadow-2xl" href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="200">
            <Image 
  alt="Brainstorming" 
  src="/images/brainstorming.svg" 
   className="mb-2"
  width={50} 
  height={50} 
/>
              <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">Brainstorm</div>
              <div className="grow opacity-80 mb-4">Generate as many solutions as possible with critical thinking approach.</div>
            
            </a>

            {/* 4th item */}
            <a className="flex flex-col p-5 rounded-xl group text-white bg-gradient-to-tr bg-[#004B87] shadow-2xl" href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="300">
            <Image 
  alt="" 
  src="/images/checklist.svg" 
   className="mb-2"
  width={50} 
  height={50} 
/>
              <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">Evaluate</div>
              <div className="grow opacity-80 mb-4">
              Create a detailed Evaluation Report with actional insights & timeline.</div>
            
            </a>


            {/* 5th item */}
            <a className="flex flex-col p-5 rounded-xl group text-white bg-gradient-to-tr bg-[#2ECC71] shadow-2xl" href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="100">
            <Image 
  alt="" 
  src="/images/implementation.svg" 
   className="mb-2"
  width={50} 
  height={50} 
/>
              <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">Implement</div>
              <div className="grow opacity-80 mb-4">We just don't deliver systems. We are with you until your problem is solved.</div>
            
            </a>

          </div>

        </div>
      </div>
      
      <div className="flex justify-center items-center mb-4">
  <Image
    alt="Your image description" 
    src="/images/3v.svg" 
    className="mb-2"
    width={700} 
    height={700} 
    layout="intrinsic" // Ensures responsive scaling
  />
</div>
    </section>
  )
}
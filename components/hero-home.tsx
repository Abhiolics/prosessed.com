import VideoThumb from '@/public/images/mockup-image-01.jpg'
import ModalVideoIphone from '@/components/modal-video-iphone'
import Image from 'next/image';

export default function HeroHome() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">

            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h2 lg:text-4xl mb-4 font-semibold  " data-aos="fade-down">AI-Powered  Smart Order Management For <b className='font-semibold text-[#0C8EF7]'>Food Exporters & Importers </b> </h1>
              <p className="text-md text-gray-600 dark:text-gray-400 font-Subheading" data-aos="fade-down" data-aos-delay="150">
              Streamline your cross-border operations with AI-driven tools from quote to payment.
              {/* At <a href="" className="text-teal-500 font-bold hover:underline">ProSessed</a>, we specialize in streamlining your supply chain with our enhanced services for importers and exporters. Turn your supply chain into a growth engine – automated, optimized and tailored to your business needs. */}
</p>

             {/* CTA form */}
<form className="mt-8" data-aos="fade-down" data-aos-delay="300">
  <div className="flex flex-col sm:flex-row items-start md:items-center max-w-sm mx-auto sm:max-w-md md:mx-0">
    {/* Button 1 */}
    <a 
      className="btn bg-black text-white font-bold   transition-all hover:bg-emerald-600 hover:shadow-lg font-Heading" href="/contact">
      Get Started for Free
    </a>
    {/* Button 2 */}
    <a 
  className="btn ml-0 sm:ml-4 mt-4 sm:mt-0 text-black border border-gray-300 hover:text-white hover:bg-emerald-500 transition duration-300 shrink-0  font-medium font-Heading"
  href="/contact"
>
  Get a Demo
</a>

  </div>
</form>
</div>
<div 
  className="md:col-span-5 lg:col-span-5 text-center md:text-right relative" 
  data-aos="fade-up" 
  data-aos-delay="450"
>
  {/* Mobile frame */}
  <div className="flex justify-center items-center w-full">
  {/* Display the illu1 SVG */}
  <img 
    src="/images/heroimg.svg" // Path to your SVG in the public folder
    alt="Illustration"
    className="w-full max-w-md object-contain"
  />
</div>

</div>


          </div>

        </div>
      </div>
    </section>
  )
}
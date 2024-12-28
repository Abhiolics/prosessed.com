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
              <h1 className="h1 lg:text-4xl mb-4  font-Subheading" data-aos="fade-down">Order Management Platform for Cross-border Industry</h1>
              <p className="text-md text-gray-600 dark:text-gray-400 font-Subheading" data-aos="fade-down" data-aos-delay="150">
              A closed marketplace empowering food exporters and importers to optimize their ordering, picking, invoicing, and payment operations efficiently.
              {/* At <a href="" className="text-teal-500 font-bold hover:underline">ProSessed</a>, we specialize in streamlining your supply chain with our enhanced services for importers and exporters. Turn your supply chain into a growth engine – automated, optimized and tailored to your business needs. */}
</p>

             {/* CTA form */}
<form className="mt-8" data-aos="fade-down" data-aos-delay="300">
  <div className="flex flex-col sm:flex-row items-start md:items-center max-w-sm mx-auto sm:max-w-md md:mx-0">
    {/* Button 1 */}
    <a 
      className="bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg transition-all hover:bg-emerald-600 hover:shadow-lg font-Heading" href="#0">
      Get Started for Free
    </a>
    {/* Button 2 */}
    <a 
  className="btn ml-0 sm:ml-4 mt-4 sm:mt-0 text-emerald-500 border border-emerald-500 hover:text-white hover:bg-emerald-500 transition duration-300 shrink-0 px-6 py-3 rounded-lg font-medium font-Heading"
  href="#0"
>
  Get a Demo
</a>

  </div>
</form>

              <ul className="max-w-sm sm:max-w-md mx-auto md:max-w-none font-heading text-gray-600 dark:text-gray-400 mt-8 -mb-2" data-aos="fade-down" data-aos-delay="450">
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Seamless integration for unmatched efficiency.</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Trusted by industry leaders worldwide.</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Unparalleled support, whenever you need it.</span>
                </li>
              </ul>
            </div>

            {/* Mobile mockup */}
          {/* Mobile mockup */}
<div 
  className="md:col-span-5 lg:col-span-5 text-center md:text-right relative" 
  data-aos="fade-up" 
  data-aos-delay="450"
>
  {/* Mobile frame */}
  <div className="flex justify-center items-center w-full">
  {/* Display the illu1 SVG */}
  <img 
    src="/images/illu1.svg" // Path to your SVG in the public folder
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
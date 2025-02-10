"use client"

import * as React from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Rocket, Lightbulb, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import TrustedBy from "@/components/clients"
import Image from "next/image"



const carouselImages = [
  {
    url: "/images/Team.jpeg",

  },
  {
    url: "/images/About Us.jpg",
 
  },
  {
    url: "/images/Team1.jpeg",
 
  },
];

const teamMembers = [
  {
    name: "Navneet Maheshwari",
    role: "Founder & CEO",
    image:
      "/images/About Us.jpg",
    linkedin: "https://www.linkedin.com/posts/navneetmah123",
  },
  {
    name: "Jaspreet Singh",
    role: "Founding Software Engineer",
    image: "/images/Js.png",
    linkedin: "https://www.linkedin.com/in/jaspreetsodhi482/",
  },
  {
    name: "Abhay Pratap Singh",
    role: "Product & Marketing",
    image: "/images/Abhay.jpg",
    linkedin: "https://www.linkedin.com/in/abhay-product-curator/",
  },
  {
    name: "Tejaswi",
    role: "Founders Office",
    image: "/images/Tej.jpg",
    linkedin: "https://www.linkedin.com/in/tejaswi-r-43b3b4214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Akshay Negi",
    role: "App Developer",
    image: "/images/Akshay.png",
    linkedin: "https://www.linkedin.com/in/akshay-negi-86b617252",
  },
 
]

export default function About() {
  const [api, setApi] = React.useState<any>()
  const [current, setCurrent] = React.useState(0)

  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: false }))

  React.useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <>
    {/* SEC 1 */}
    <main className="min-h-screen flex flex-col items-center px-6 md:px-12 lg:px-32 py-1 mt-32 relative">
  {/* Grid Effect Background */}
  <div className="absolute inset-0 w-full h-full pointer-events-none flex justify-center items-center">
    <div className="absolute top-0 left-0 w-full h-full bg-transparent">
      <div className="absolute inset-0 bg-grid-green opacity-30 mask-fade"></div>
    </div>
  </div>

  {/* Content */}
  <div className="relative w-full max-w-6xl px-4 md:px-6 py-12 flex flex-col items-center text-center">
    <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
      <span className="text-[#0C8EF7] font-heading text-2xl sm:text-4xl lg:text-4xl font-semibold">
        We are Prosessed
      </span>
    </h1>
    <p className="relative text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl font-heading">
      AI Powered Cross-border Platform for Food Importers and Exporters
    </p>

    <Link href="/contact" passHref>
      <button className="relative bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2 group">
        Know More!
        <svg
          className="w-5 h-5 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </Link>
  </div>

  <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 mb-12">
    <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
      <div className="relative">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <img
                    src={image.url}
                    className="object-cover w-full h-full"
                    alt={`Slide ${index + 1}`}
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>

    {/* Long Active Indicator Dots */}
    <div className="flex justify-center mt-6 space-x-3">
      {carouselImages.map((_, index) => (
        <button
          key={index}
          onClick={() => api?.scrollTo(index)}
          className={`h-3 rounded-full transition-all duration-300 ${
            current === index ? "bg-[#0C8EF7] w-10" : "bg-gray-300 w-3 hover:bg-gray-400"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
</main>

      
    {/* SEC 2 */}
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8 font-heading -mt-32 md:mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Vision and Mission Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Vision Card */}
          <div className="group bg-[#0C8EF7] rounded-3xl p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-blue-100 text-sm border-b border-blue-100">Our Vision</span>
              </div>
              <h2 className="text-white text-2xl sm:text-4xl lg:text-4xl font-semibold leading-tight">
                We are Working
                <br />
                on Future
              </h2>
              <p className="text-blue-100 leading-relaxed">
              To revolutionize global trade by creating a seamless, data-driven ecosystem that empowers importers, exporters, and manufacturers to grow their businesses efficiently.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group bg-green-700 rounded-3xl p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-green-100 text-sm border-b border-green-100">Our Mission</span>
              </div>
              <h2 className="text-white text-2xl sm:text-4xl lg:text-4xl font-semibold leading-tight">
                Customer Success
                <br />
                In Our Mission
              </h2>
              <p className="text-green-100 leading-relaxed">
              At Prosessed, we optimize cross-border food trade with AI-powered order management, enhancing procurement, financing, and efficiency. Through automation and data intelligence, we streamline global food commerce.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-20 items-center font-heading mt-20">
  {/* Left Content */}
  <div className="space-y-6">
    <h1 className="text-2xl sm:text-4xl lg:text-4xl font-semibold text-gray-900 leading-tight">
      <span className="text-[#0C8EF7]">Prosessed.ai</span>  <br />
      Revolutionizing How <br />
      Cross-border trade happens
    </h1>
    <div className="space-y-4 text-gray-600">
      <p className="leading-relaxed">
      At Prosessed, we believe food trade should be a strategic
advantage, not a bottleneck. Yet, traditional order
management processes are hindered by inefficiencies, 
disconnected workflows, and manual interventions.

      </p>
      <p className="leading-relaxed">
      That’s why we built Prosessed.ai—an AI-powered platform designed to transform food trade through automated workflows and intelligent coordination, delivering smarter decisions and unmatched efficiency.
      </p>
      <p className="leading-relaxed">
      Our mission is to empower food importers and exporters, to streamline order processing, automate procurement and enhance stakeholder collaboration—all
while fostering stronger relationships and driving profitability.

      </p>
    </div>
  </div>

  {/* Right Stats Card - Smaller & Cleaner */}
  <div className="bg-[#0C8EF7] rounded-3xl p-6 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
  <div className="grid divide-y divide-blue-100/30">
    {/* Products */}
    <div className="space-y-1 py-4 first:pt-0 last:pb-0 text-start">
      <h3 className="text-4xl sm:text-5xl font-bold text-white">5000+</h3>
      <p className="text-blue-100 text-sm">Products</p>
    </div>

    {/* Categories */}
    <div className="space-y-1 py-4 text-start">
      <h3 className="text-4xl sm:text-5xl font-bold text-white">15+</h3>
      <p className="text-blue-100 text-sm">Categories</p>
    </div>

    {/* Worth of Orders */}
    <div className="space-y-1 py-4 text-start">
      <h3 className="text-4xl sm:text-5xl font-bold text-white">$4M</h3>
      <p className="text-blue-100 text-sm">Worth of Orders Processed</p>
    </div>

    {/* Clients */}
    <div className="space-y-1 py-4 text-start">
      <h3 className="text-4xl sm:text-5xl font-bold text-white">8+</h3>
      <p className="text-blue-100 text-sm">Clients</p>
    </div>
  </div>
</div>

</div>

      </div>
    </div>


    {/* SEC */}
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 font-heading mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-px bg-green-500"></div>
              <span className="text-black font-medium tracking-wider text-sm">WANT TO KNOW MORE</span>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-4xl lg:text-4xl font-semibold text-black leading-tight">
                Ready to Revolutionize
                <br />
                Your Food Trade Operations?
              </h1>
              <p className="text-gray-500 text-lg max-w-xl">
                Don't let outdated processes slow you down. Embrace the power of AI-driven order management with
                Prosessed.ai and take your food import/export business to the next level.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {/* Feature 1 */}
              {/* <div className="flex items-start space-x-4">
                <div className="bg-green-700 p-3 rounded-full">
                  <Rocket className="w-6 h-6 text-gray-300" />
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500 font-semibold">Boost efficiency.</p>
                  <p className="text-gray-400">Strengthen relationships.</p>
                  <p className="text-gray-400">Scale with confidence.</p>
                </div>
              </div> */}

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="bg-green-700 p-3 rounded-full">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <p className=" fon-semibold">Enhance Decision-Making.</p>
                  <p className="text-black">Streamline Workflows.</p>
                  <p className="text-black">Maximize Profit Margins.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="bg-green-700 p-3 rounded-full">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-blackfont-semibold">Real-time Analytics.</p>
                  <p className="text-black">Data-driven Insights.</p>
                  <p className="text-black">Performance Tracking.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative mt-10 lg:mt-0">
  {/* Main Image Container */}
  <div className="relative bg-gradient-to-b from-green-700/20 to-green-700/10 rounded-3xl p-6 backdrop-blur-sm">
    <Image
      src="/images/Aboutus2.jpg"
      alt="Warehouse operations"
      width={600}
      height={500}
      className="rounded-2xl w-full h-[32rem] object-cover shadow-lg"
    />

    {/* Floating CTA Box */}
    {/* <div className="absolute -bottom-6 right-10 w-64 bg-white rounded-xl shadow-xl p-4 transform transition-transform hover:-translate-y-1">
      <div className="flex flex-col items-center text-center space-y-3">
        <Link href="/contact" passHref>
          <Button
            className="bg-green-800 text-white hover:bg-green-700 transition-colors w-full py-5 cursor-pointer"
            aria-label="Learn more about Prosessed"
          >
            Know More!
            <span className="ml-2 transition-transform inline-block">→</span>
          </Button>
        </Link>
        <p className="text-gray-600 text-sm font-medium">
          Get started today & experience
          <br />
          the future of food trade.
        </p>
      </div>
    </div> */}

    {/* Decorative Elements */}
    <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl"></div>
    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>

    {/* Pattern Overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-green-800/5 to-transparent rounded-3xl"></div>
  </div>

  {/* Background Decorative Elements */}
  <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-green-700/20 to-transparent rounded-3xl transform rotate-3 scale-[1.02]"></div>
  <div className="absolute -z-10 inset-0 bg-gradient-to-bl from-green-700/20 to-transparent rounded-3xl transform -rotate-3 scale-[1.02]"></div>
</div>

        </div>
      </div>
    </div>




    {/* SEC 4 */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white font-heading -mt-2 md:mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-semibold tracking-tight">Prosessed's Team</h2>
          <p className="text-lg text-gray-600">
            At Prosessed, we're not just building a platform; we're shaping the future of food trade.
          </p>
          <p className="text-lg text-gray-600">
            If you're passionate about innovation, AI and transforming the way food businesses operate, we'd love to
            have you on board.
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative px-4 md:px-8">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
                    {/* Image */}
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300">
                      <div className="flex items-end justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                          <p className="text-green-100">{member.role}</p>
                        </div>
                        <a
                          href={member.linkedin}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-green-700"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-green-50 hover:bg-green-100 border-green-200" />
            <CarouselNext className="hidden md:flex -right-12 bg-green-50 hover:bg-green-100 border-green-200" />
          </Carousel>

          {/* Custom Navigation Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, i) => (
              <button
                key={i}
                className="h-2 w-2 rounded-full bg-green-200 transition-all duration-300 hover:bg-green-400"
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    <TrustedBy/>

  
    </>
  )
}

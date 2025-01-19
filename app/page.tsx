export const metadata = {
  title: 'Prosessed',
  description: 'Page description',
}

import PageIllustration from '@/components/page-illustration'
import Hero from '@/components/hero-home'
import Stats from '@/components/stats'
import Carousel from '@/components/carousel'
import Tabs from '@/components/tabs'
import Process from '@/components/process'
import PricingTables from '@/components/pricing-tables'
import TestimonialsBlocks from '@/components/testimonials-blocks'
import FeaturesBlocks from '@/components/features-blocks'
import Cta from '@/components/cta'
import Ttabs from '@/components/ttabs'
import TaglineSection from '@/components/taglinesection'
import ComparisonSection from '@/components/ComparisonSection'
import IntegrationsSection from '@/components/newint'
import Newtabs from '@/components/newtabs'
import Integration from '@/components/integration'
import Ctaend from '@/components/ctaend'
import Clients from '@/components/clients'
import Testimonial from '@/components/testimonials-blocks'




export default function Home() {
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1 " aria-hidden="true">
        <PageIllustration />
      </div>
      <Hero />
      <Clients/>
      <Newtabs/>
      <TaglineSection/>
      {/* <Ttabs/>  */}
     <Stats/>
      {/* <ComparisonSection/> */}
      <Integration/>
      <Testimonial/>
      <Ctaend/>
      {/* <AnimatedBeamDemo/> */}
    
      {/* <Carousel /> */}
      {/* <Tabs /> */}
      
      {/* <Process /> */}
      {/* <PricingTables /> */}
      {/* <TestimonialsBlocks /> */}
      {/* <FeaturesBlocks /> */}
      <Cta />
    </>
  )
}

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
import { AnimatedBeamDemo } from '@/components/integration'
import IntegrationsSection from '@/components/newint'
import Newtabs from '@/components/newtabs'



export default function Home() {
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1 " aria-hidden="true">
        <PageIllustration />
      </div>
      <Hero />
      <Stats />
      <TaglineSection/>
      <Newtabs/>
      {/* <Ttabs/> */}
     
      {/* <ComparisonSection/> */}
      {/* <IntegrationsSection/> */}
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

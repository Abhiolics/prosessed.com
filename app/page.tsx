export const metadata = {
  title: 'Prosessed',
  description: 'AI-Powered Smart Order Management For Food Exporters and Importers',
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
import Head from 'next/head'




export default function Home() {
  return (
    <>
    <Head>
        <meta property="og:title" content="AI Powered Order Management Platform for Food Importers and Exporters" />
        <meta property="og:site_name" content="Prosessed" />
        <meta property="og:url" content="https://www.prosessed.ai/" />
        <meta property="og:description" content="Streamline your cross-border operations with AI-driven tools from quote to payment." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.prosessed.ai/images/HeroImg.svg" />
      </Head>
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1 " aria-hidden="true">
        <PageIllustration />
      </div>
      <Hero />
      <Clients/>
      <Newtabs/>
      <TaglineSection/>
     <Stats/>
      <Integration/>
      <Testimonial/>
      <Ctaend/>
      <Cta />
    </>
  )
}

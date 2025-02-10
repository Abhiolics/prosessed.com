export const metadata = {
  title: 'Prosessed',
  description: 'AI-Powered Smart Order Management For Food Exporters and Importers',
}

import PageIllustration from '@/components/page-illustration'
import Hero from '@/components/hero-home'
import Stats from '@/components/stats'
import Cta from '@/components/cta'
import TaglineSection from '@/components/taglinesection'
import Newtabs from '@/components/newtabs'
import Integration from '@/components/integration'
import Ctaend from '@/components/ctaend'
import Clients from '@/components/clients'
import Head from 'next/head'
import Testimonial from '@/components/testimonial'




export default function Home() {
  return (
    <>
     <Head>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Powered Order Management Platform for Food Importers and Exporters" />
        <meta property="og:site_name" content="Prosessed" />
        <meta property="og:url" content="https://www.prosessed.ai/" />
        <meta property="og:description" content="Streamline your cross-border operations with AI-driven tools from quote to payment." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.prosessed.ai/images/HeroImg.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Powered Order Management Platform for Food Importers and Exporters" />
        <meta name="twitter:description" content="Streamline your cross-border operations with AI-driven tools from quote to payment." />
        <meta name="twitter:image" content="https://www.prosessed.ai/images/HeroImg.svg" />
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
      {/* <Cta /> */}
    </>
  )
}

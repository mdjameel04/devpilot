import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/hero'
import Features from './components/features'
import HowItWorks from './components/How-it-works'
import Pricing from './components/Pricing'
import WhyDevpilot from './components/whyDevpilot'
import ProductshowCase from './components/ProductshowCase'
import Footer from './components/Footer'
import FinalCTA from './components/FinalCTA'

const page = () => {
  return (
    <div> 
      <Navbar/>
   <Hero/>
   <Features/>
   <ProductshowCase/>
   <WhyDevpilot/>
   <HowItWorks/>
   <Pricing/>
   <FinalCTA/>
   <Footer/>
    </div>
  )
}

export default page
import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/hero'
import Features from './components/features'
import HowItWorks from './components/How-it-works'
import Pricing from './components/Pricing'

const page = () => {
  return (
    <div> 
      <Navbar/>
   <Hero/>
   <Features/>
   <HowItWorks/>
   <Pricing/>
    </div>
  )
}

export default page
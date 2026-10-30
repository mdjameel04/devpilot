import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/hero'
import Features from './components/features'
import HowItWorks from './components/How-it-works'

const page = () => {
  return (
    <div> 
      <Navbar/>
   <Hero/>
   <Features/>
   <HowItWorks/>
    </div>
  )
}

export default page
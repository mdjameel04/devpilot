import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/hero'
import Features from './components/features'

const page = () => {
  return (
    <div> 
      <Navbar/>
   <Hero/>
   <Features/>
    </div>
  )
}

export default page
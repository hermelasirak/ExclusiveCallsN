import React from 'react'
import Hero from '../Solutions/Hero'
import WhatWeOffer from '../Solutions/WhatWeOffer'
import TheProcess from '../Solutions/TheProcess'
import WhyUs from '../Solutions/WhyUs'
import SolutionsCTA from '../Solutions/SolutionsCTA'
import Seo from "../Seo";

const Solutions = () => {
  return (
    <div>
      <Seo
        title="B2B Appointment Setting Solutions | Exclusive Calls"
        description="See how our proven process finds, qualifies, and books sales-ready appointments for your team — no cold contact lists, just booked meetings."
        path="/solutions"
      />
      <Hero/>
      <WhatWeOffer/>
      <TheProcess/>
      <WhyUs/>
      <SolutionsCTA/>
    </div>
  )
}

export default Solutions
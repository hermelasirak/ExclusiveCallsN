import React from 'react'
import Hero from '../Pricing/Hero'
import PricingPlans from '../Pricing/PricingPlans'
import NAH from '../Pricing/NAH'
import PricingContact from '../Pricing/PricingContact'
import Seo from "../Seo";

const Pricing = () => {
  return (
    <div>
      <Seo
        title="Pricing | Exclusive Calls"
        description="Simple, transparent pricing for dedicated B2B appointment-setting seats. Choose the plan that fits your outbound sales goals."
        path="/pricing"
      />
      <Hero/>
      <PricingPlans/>
      <PricingContact/>
      <NAH/>
    </div>
  )
}

export default Pricing
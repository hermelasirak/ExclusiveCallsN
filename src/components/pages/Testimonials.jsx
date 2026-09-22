import React from 'react'
import Hero from '../Testimonials/Hero'
import TestimonialCards from '../Testimonials/TestimonialCards'
import TestimonialCTA from '../Testimonials/TestimonialCTA'
import Seo from "../Seo";

const Testimonials = () => {
  return (
    <div>
      <Seo
        title="Client Testimonials | Exclusive Calls"
        description="Hear from B2B teams who've grown their pipeline with Exclusive Calls' dedicated appointment-setting services."
        path="/testimonials"
      />
      <Hero/>
      <TestimonialCards/>
      <TestimonialCTA/>
    </div>
  )
}

export default Testimonials
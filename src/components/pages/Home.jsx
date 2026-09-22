import React from 'react'
import Hero from '../Home/Hero'
import TheChallenge from '../Home/TheChallenge'
import TheSolution from '../Home/TheSolution'
import Faq from '../Home/Faq'
import HomeCTA from '../Home/HomeCTA'
import HomeTestimonial from '../Home/HomeTestimonial'
import HomePlans from '../Home/HomePlans'
import Seo, { organizationJsonLd, homeFaqJsonLd } from "../Seo";

const Home = () => {
  return (
    <div>
        <Seo
          title="B2B Appointment Setting Services | Exclusive Calls — Since 2008"
          description="Outsourced BDR and appointment setting for B2B teams. Dedicated human callers, 80h/160h seats. We do not sell lists. Since 2008."
          path="/"
          jsonLd={[organizationJsonLd, homeFaqJsonLd]}
        />
        <Hero/>
        <TheChallenge/>
        <TheSolution/>
        <HomeTestimonial/>
        <HomePlans/>
        <Faq/>
        <HomeCTA/>
    </div>
  )
}

export default Home
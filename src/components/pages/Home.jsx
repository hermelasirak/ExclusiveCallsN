import React from 'react'
import Hero from '../Home/Hero'
import TheChallenge from '../Home/TheChallenge'
import TheSolution from '../Home/TheSolution'
import Faq from '../Home/Faq'
import HomeCTA from '../Home/HomeCTA'
import HomeTestimonial from '../Home/HomeTestimonial'
import HomePlans from '../Home/HomePlans'

const Home = () => {
  return (
    <div>
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
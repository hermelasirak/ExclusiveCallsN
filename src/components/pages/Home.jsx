import React from 'react'
import Hero from '../Home/Hero'
import TheChallenge from '../Home/TheChallenge'
import TheSolution from '../Home/TheSolution'
import Faq from '../Home/Faq'
import HomeCTA from '../Home/HomeCTA'

const Home = () => {
  return (
    <div>
        <Hero/>
        <TheChallenge/>
        <TheSolution/>
        <Faq/>
        <HomeCTA/>
    </div>
  )
}

export default Home
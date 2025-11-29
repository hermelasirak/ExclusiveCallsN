import React from 'react'
import Hero from '../Services/Hero'
import BDRService from '../Services/BDRService'
import SocialMedia from '../Services/SocialMedia'
import SEOService from '../Services/SEOService'
import WebDevelopment from '../Services/WebDevelopment'
import VirtualAssistant from '../Services/VirtualAssistant'

const Services = () => {
  return (
    <div>
      <Hero/>
      <BDRService/>
      <SEOService/>
      <SocialMedia/>
      <WebDevelopment/>
      <VirtualAssistant/>
    </div>
  )
}

export default Services
import React from 'react'
import Hero from '../Services/Hero'
import BDRService from '../Services/BDRService'
import SocialMedia from '../Services/SocialMedia'
import SEOService from '../Services/SEOService'
import WebDevelopment from '../Services/WebDevelopment'
import VirtualAssistant from '../Services/VirtualAssistant'
import ServiceCTA from '../Services/ServiceCTA'
import ServicesCTA from '../Services/ServicesCTA'

const Services = () => {
  return (
    <div>
      <Hero/>
      <BDRService/>
      <SEOService/>
      <ServiceCTA/>
      <SocialMedia/>
      <WebDevelopment/>
      <VirtualAssistant/>
      <ServicesCTA/>
    </div>
  )
}

export default Services
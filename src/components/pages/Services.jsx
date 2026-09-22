import React from 'react'
import Hero from '../Services/Hero'
import BDRService from '../Services/BDRService'
import SocialMedia from '../Services/SocialMedia'
import SEOService from '../Services/SEOService'
import WebDevelopment from '../Services/WebDevelopment'
import VirtualAssistant from '../Services/VirtualAssistant'
import ServiceCTA from '../Services/ServiceCTA'
import ServicesCTA from '../Services/ServicesCTA'
import Seo from "../Seo";

const Services = () => {
  return (
    <div>
      <Seo
        title="B2B Sales & Marketing Services | Exclusive Calls"
        description="Full-funnel B2B services: appointment setting, SEO, social media, web development, and virtual assistants — built to fill your pipeline with qualified meetings."
        path="/services"
      />
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
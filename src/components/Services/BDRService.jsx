import React from 'react'
import Container from '../layouts/Container'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Scale, Phone, CircleCheck, MoveRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import BDRImg from "@/assets/Services/Image.png"

const cardBDR = [
    {
        icon: BDRImg
    }
]

const whyUs = [
    {
        icon: "🎯",
        title: "Qualified Leads",
        description: "Focus On Prospects Ready To Buy"
    },
    {
        icon: "📞",
        title: "Professional BDRs",
        description: "Trained Experts Representing Your Brand"
    },
    {
        icon: "⚡️",
        title: "Fast Response",
        description: "Same-Day Follow-Up Guaranteed"
    },
]

const BDRService = () => {
  return (
    <div className='min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-slate-50 via-white to-blue-50/30'>
        {/*Left Section */}
        <section className='py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden'>
            {/* Background decorations */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl"></div>    

            <Container className="relative z-10">
                <div className='text-start mb-10'>
                    <div className='border border-white/30 bg-purple-400 rounded-2xl w-fit'>
                        <Phone className='w-10 h-10 '/>
                    </div>
                    <h2 className='text-3xl lg:text-5xl font-bold mb-6 leading-tight'>
                        BDR Services
                    </h2>
                    <h3 className='text-2xl lg:text-4xl font-bold mb-6 text-orange-400'>
                        Direct Connection with your customers
                    </h3>
                    <p className='text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
                        Telemarketing remains one of the most effective ways to directly connect with potential 
                        customers. Our telemarketing services are designed to increase customer engagement, 
                        promote your products or services, and drive sales growth. With a dedicated team of 
                        trained professionals, we deliver personalized, results-oriented communication that 
                        strengthens relationships with your leads.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 justify-start items-start'>
                    <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer h-8">
                        <CircleCheck className='w-8 h-8 mr-1 text-green-500'/>
                        Lead generation and appointment setting
                    </Badge>
                    <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer h-8">
                        <CircleCheck className='w-8 h-8 mr-1 text-green-500'/>
                        Inbound and Outbound Calling
                    </Badge>
                    <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer h-8">
                        <CircleCheck className='w-8 h-8 mr-1 text-green-500'/>
                        Inbound and Outbound Calling
                    </Badge>
                    <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer h-8">
                        <CircleCheck className='w-8 h-8 mr-1 text-green-500'/>
                        Market research surveys and customer feedback collection
                    </Badge>
                    <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer h-8">
                        <CircleCheck className='w-8 h-8 mr-1 text-green-500'/>
                        Dedicated team of trained professionals
                    </Badge>
                </div>
                <div className="flex flex-row gap-10 rounded-2xl justify-center items-center w-full">
                    <div className="text-white">
                        <Link to='/contactus'>
                            <Button className="bg-amber-600 rounded-2xl" >
                                Get Started
                                <MoveRight/>
                            </Button>
                        </Link>
                    </div>
                    <div className="text-black opacity-30 rounded-2xl">
                        <Link to='/pricing'>
                            <Button>View Pricing</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
        
        {/*Right Side */}
        <section className='py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden'>
            {/* Background decorations */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl"></div>

            <Container className='relative z-10'>
                <div className='flex items-center mb-8'>
                    {cardBDR.map((image, idx) => (
                        <Card
                            key={idx}
                            className='rounded-2xl shadow-lg border-none  px-6 py-10 flex flex-col items-center '
                        >
                            <CardContent className='border-none' >
                                <img src={image.icon}/>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className='text-center mb-8'>
                    <p>WHy Choose Us</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 text-center'>
                    {whyUs.map((service, index) => (
                        <Card
                            key={index}
                            className='bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl '
                        >
                            <CardContent>
                                <h3 className='text-2xl text-start'>
                                    {service.icon}
                                </h3>
                                <h2 className='text-xl lg:text-2xl text-white'>
                                    {service.title}
                                </h2>
                                <p className='text-muted-foreground text-md'>
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    </div>
  )
}

export default BDRService
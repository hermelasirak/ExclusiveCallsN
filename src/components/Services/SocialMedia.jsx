import React from 'react'
import Container from '../layouts/Container'
import { Button } from '../ui/button'
import { MessageCircle, CircleCheck, MoveRight } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Link } from 'react-router-dom'
import SocialImg from '@/assets/Services/Image2.png'

const whyUs = [
    {
        icon: "✨",
        title: "Consistent Presence",
        description: "Daily content that keeps you top-of-mind"
    },
    {
        icon: "✨",
        title: "Consistent Presence",
        description: "Daily content that keeps you top-of-mind"
    },
    {
        icon: "✨",
        title: "Consistent Presence",
        description: "Daily content that keeps you top-of-mind"
    },
]

const SocialMedia = () => {
  return (
    <div className='min-h-screen py-12 grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-slate-50 via-white to-blue-50/30'>
    
        {/* Background decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl"></div>    

        {/*Left Side*/}
        <section className='flex flex-col w-fit overflow-hidden py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative'>
            <Container className="relative z-10">
                <div className='text-start mb-10'>
                    <div className='border border-white/30 bg-purple-400 rounded-2xl w-fit'>
                        <MessageCircle className='w-10 h-10 '/>
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

                <div className="flex flex-row gap-10 rounded-2xl justify-start items-start w-full">
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
        <section className='flex flex-col w-fit mt-10 py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden'>
            <Container className="relative z-10">
                <div className=''>
                    <img src={SocialImg} className='w-160 h-80 rounded-2xl'/>
                </div>
                <div className='text-center text-muted-foreground mb-8 mt-10'>
                    <p>Why Choose Us</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 text-center'>
                    {whyUs.map((service, index) => (
                        <Card
                            key={index}
                            className='bg-gradient-to-r from-purple-500 to-purple-400 rounded-2xl '
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

export default SocialMedia
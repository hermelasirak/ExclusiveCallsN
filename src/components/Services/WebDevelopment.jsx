import React from 'react'
import Container from '../layouts/Container'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Link } from 'react-router-dom'
import { MoveRight, CircleCheck, Paintbrush } from 'lucide-react'
import WebImg from '@/assets/Services/Image3.png'

const whyUs = [
    {
        icon: "⚡️",
        title: "Lightnong Fast",
        description: "Optimized performance for instant loading"
    },
    {
        icon: "⚡️",
        title: "Lightnong Fast",
        description: "Optimized performance for instant loading"
    },
    {
        icon: "⚡️",
        title: "Lightnong Fast",
        description: "Optimized performance for instant loading"
    },
]

const WebDevelopment = () => {
  return (
    <div className='min-h-screen py-12 grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-slate-50 via-white to-blue-50/30'>

      {/* Background decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl"></div> 

      {/*Left Side */}   
      <section className='flex flex-col w-fit mt-10 py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden'>
        <Container className='relative z-10'>
          <div className=''>
             <img src={WebImg} className='w-160 h-80 rounded-2xl'/>
          </div>

          <div className='text-center text-muted-foreground mb-8 mt-10'>
            <p>Why Choose Us</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-2 text-center'>
            {whyUs.map((service,index) => (
              <Card 
                key={index}
                className='bg-gradient-to-r from-green-700 to-green-600 rounded-2xl '>
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

      <section className='flex flex-col w-fit overflow-hidden py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative'>
          <Container className='relative z-10'>
            <div className='text-start mb-10'>
              <div className='border border-white/30 bg-purple-400 rounded-2xl w-fit'>
                <Paintbrush className='w-10 h-10 '/>
              </div>
              <h2 className='text-3xl lg:text-5xl font-bold mb-6 leading-tight'>
                SEO
              </h2>
              <h3 className='text-2xl lg:text-4xl font-bold mb-6 text-orange-400'>
                The Foundation of Online Success
              </h3>
              <p className='text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
                Search Engine Optimization (SEO) is the foundation of online success. Our SEO experts 
                work diligently to improve your website's visibility on search engines like Google, 
                ensuring that your business ranks higher for relevant keywords. By optimizing your 
                website's content, structure, and technical performance, we increase your chances of 
                being discovered by your target audience.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 justify-start items-start'>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer h-8">
                <CircleCheck className='w-8 h-8 mr-1 text-green-500'/>
                Keyword research and optimization
              </Badge>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer h-8">
                <CircleCheck className='w-8 h-8 mr-1 text-green-500'/>
                Keyword research and optimization
              </Badge>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer h-8">
                <CircleCheck className='w-8 h-8 mr-1 text-green-500'/>
                Keyword research and optimization
              </Badge>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer h-8">
                <CircleCheck className='w-8 h-8 mr-1 text-green-500'/>
                Keyword research and optimization
              </Badge>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer h-8">
                <CircleCheck className='w-8 h-8 mr-1 text-green-500'/>
                Keyword research and optimization
              </Badge>
            </div>

            <div className='flex flex-row gap-10 rounded-2xl justify-start items-start w-full'>
              <div className='text-white'>
                <Link to='/contactus'>
                  <Button className="bg-amber-600 rounded-2xl">
                    Get Started
                    <MoveRight/>
                  </Button>
                </Link>
              </div>
              <div className='text-black opacity-30 rounded-2xl'>
                <Link to='/pricing'>
                  <Button >
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
      </section>
    </div>
  )
}

export default WebDevelopment
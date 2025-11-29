import React from 'react'
import Container from '../layouts/Container'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import HeroBg from '@/assets/HeroBackground.jpeg'

const Hero = () => {
  return (
    <div
        className="relative bg-cover bg-center bg-no-repeat w-full h-[90vh] xl:h-[90vh]"
        style={{backgroundImage: `url(${HeroBg})`}}
    >
        <Container className='h-full'>
            <div className='h-full flex flex-col justify-center items-center'>
                <div className='relative py-2'>
                    <div className='flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 text-start md:text-center mt-10 mx-auto'>
                        <div className="max-w-[700px]">
                            <h1 className='scroll-m-20 text-4xl md:text-4xl lg:text-6xl text-white font-extrabold'>
                                Sales Growth Solutions {" "}
                                <span className='block text-orange-400 mt-4'>Built For Your Success</span>
                            </h1>
                        </div>
                        <div className="max-w-screen-md">
                            <p className='lg:text-xl text-muted-foreground'>
                                Comprehensive BDR services designed to fill your pipeline with qualified 
                                appointments and accelerate your revenue growth.
                            </p>
                        </div>
                        <div className='rounded-2xl text-white h-20'>
                            <Link to='/contactus'>
                                <Button className='bg-orange-400'>
                                    Schedule a Consultation
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Hero
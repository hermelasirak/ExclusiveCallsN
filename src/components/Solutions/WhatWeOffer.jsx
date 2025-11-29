import React from 'react'
import Container from '../layouts/Container'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardHeader } from '../ui/card'

import Icon1 from '@/assets/Solutions/Icon1.svg'
import Icon2 from '@/assets/Solutions/Icon2.svg'
import Icon3 from '@/assets/Solutions/Icon3.svg'
import Icon4 from '@/assets/Solutions/Icon4.svg'
import HeroBg from '@/assets/Herobg.png'

const offers = [
    {
        icon: Icon1,
        title: "Targeted Lead Generation",
        description: "We identify and engage with your ideal customers using advanced prospecting techniques and data-driven targeting.",
        features: ["ICP-aligned prospect research", "Multi-channel outreach strategy", "Verified contact information", "Decision-maker identification"],
    },
    {
        icon: Icon2,
        title: "Targeted Lead Generation",
        description: "We identify and engage with your ideal customers using advanced prospecting techniques and data-driven targeting.",
        features: ["ICP-aligned prospect research", "Multi-channel outreach strategy", "Verified contact information", "Decision-maker identification"],
    },
    {
        icon: Icon3,
        title: "Targeted Lead Generation",
        description: "We identify and engage with your ideal customers using advanced prospecting techniques and data-driven targeting.",
        features: ["ICP-aligned prospect research", "Multi-channel outreach strategy", "Verified contact information", "Decision-maker identification"],
    },
    {
        icon: Icon4,
        title: "Targeted Lead Generation",
        description: "We identify and engage with your ideal customers using advanced prospecting techniques and data-driven targeting.",
        features: ["ICP-aligned prospect research", "Multi-channel outreach strategy", "Verified contact information", "Decision-maker identification"],
    },
]

const WhatWeOffer = () => {
  return (
    <div
        className="relative bg-cover bg-center bg-no-repeat w-full h-[90vh] xl:h-[90vh]"
        style={{backgroundImage: `url(${HeroBg})`}}
    >
        <Container className='h-full'>
            <div className='h-full flex flex-col justify-center items-center'>
                <div className='relative py-2'>
                    <div className='flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 text-start md:text-center mt-10 mx-auto'>
                        <div className='max-w-[100px]'>
                            <Badge className='bg-orange-300/20 mb-6 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer h-8'>
                                What We Offer
                            </Badge>
                        </div>
                        <div className='max-w-[900px]'>
                            <h1 className='scroll-m-20 text-4xl md:text-4xl lg:text-6xl text-blue-800/75 font-extrabold'>
                                Complete Outbound Solutions
                            </h1>
                        </div>
                        <div className='max-w-screen-md'>
                            <p className='lg:text-xl text-muted-foreground'>
                                Everything you need to build a predictable, scalable sales pipeline.
                            </p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-center'>
                        {offers.map((z, index) => (
                            <Card
                                key={index}
                                className='rounded-2xl mt-6'
                            >
                                <CardContent className=''>
                                   <div className=''>
                                     <img src={z.icon} className='w-10 h-10'/>
                                   </div>
                                   <div className='mt-4'>
                                        <h3 className='text-2xl text-start'>
                                            {z.title}
                                        </h3>
                                   </div>
                                   <div className='mt-4'>
                                        <p className='text-muted-foreground text-md text-start'>
                                            {z.description}
                                        </p>
                                   </div>
                                   <div className='mt-4 flex flex-col gap-2 overflow-hidden'>
                                        <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer h-8'>
                                            {z.features}
                                        </Badge>
                                   </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default WhatWeOffer
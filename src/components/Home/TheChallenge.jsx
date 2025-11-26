import React from 'react';
import Container from '../layouts/Container';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import BgImg from "@/assets/HeroBg.png"

const cards =[
    {
        icon: "❌",
        description: "Your top closers waste 60% of their time on outreach instead of high-value deals."
    },
    {
        icon: "❌",
        description: "Your top closers waste 60% of their time on outreach instead of high-value deals."
    },
    {
        icon: "❌",
        description: "Your top closers waste 60% of their time on outreach instead of high-value deals."
    },
    {
        icon: "❌",
        description: "Your top closers waste 60% of their time on outreach instead of high-value deals."
    },
]

const TheChallenge = () => {
  return (
    <div 
        className='relative bg-cover bg-no-repeat w-full h-fit'
        style={{backgroundImage: `url(${BgImg})`}}
    >
        <Container>
            <div className='h-full'>
                <div className='py-24 px-6 lg:px-16'>
                    <div className='fh-full flex flex-col justify-center items-center '>
                        <div className='flex flex-col gap-4 py-4'>
                            <Badge className="opacity-40 items-center h-8">The Challenge</Badge>
                            <h1 className='font-extrabold text-2xl md:text-5xl lg:text-6xl text-blue-900/80'>
                                Your Sales Team Shouldn't Be 
                                <span className='block items-center'>Stuck Prospecting</span>
                            </h1>
                            <p className='text-muted-foreground text-xl'>
                                Every minute spent dialing cold leads is a minute not spent closing deals.
                                Here’s whats costing you revenue right now.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                            {cards.map((items, index) =>(
                                <Card
                                    key={index}
                                    className='rounded-2xl shadow-lg opacity-40 px-2 py-4 flex flex-col items-center text-center h-30 w-65'
                                >
                                    <CardContent className="p-0 flex flex-row ">
                                        <h1 className='text-2xl items-center'>{items.icon}</h1>
                                        <p className='text-black'> {items.description} </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default TheChallenge
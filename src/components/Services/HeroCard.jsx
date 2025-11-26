import React from 'react'
import Container from '../layouts/Container'
import { Card, CardContent } from '../ui/card'

const cardContent = [
    {
        title: "3x",
        description: "Higher Customer Engagement *"
    },
    {
        title: "+45%",
        description: "Conversion Rate *"
    },
    {
        title: "<1hr",
        description: "Response Time *"
    }
]

const HeroCard = () => {
  return (
    <div>
        <Container>
            <div className=''>
                <div className=' py-12 px-6 lg:px-16 mb-30'>
                    <div className='flex justify-start'>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12'>
                            {cardContent.map((item, index) => (
                                <Card
                                    key={index}
                                    className='rounded-2xl shadow-lg opacity-40 px-6 py-10 flex flex-col items-center text-center h-40 w-75'
                                >
                                    <CardContent className="p-0 flex flex-col items-center">
                                        <h1 className='font-extrabold text-5xl text-orange-400 mb-4'> {item.title} </h1>
                                        <p className='font-semibold text-md mb-2'> {item.description} </p>
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

export default HeroCard
import React from 'react';
import Container from '../layouts/Container';
import { Card, CardContent, CardHeader } from '../ui/card';

import Icon1 from "@/assets/Home/Icon1.svg";
import Icon2 from "@/assets/Home/Icon2.svg";
import Icon3 from "@/assets/Home/Icon3.svg";

const HeroCard = () => {
    const cardContent = [
        {
            icon: Icon1,
            title: "5000+",
            description1: "Dails Per Month*",
            descrioption2: "✅Per Full-Time BDR"
        },
        {
            icon: Icon2,
            title: "5000+",
            description1: "Dails Per Month*",
            descrioption2: "✅Per Full-Time BDR"
        },
        {
            icon: Icon3,
            title: "5000+",
            description1: "Dails Per Month*",
            descrioption2: "✅Per Full-Time BDR"
        },
    ];

  return (
    <div>
        <Container>
            <div className=''>
                <div className=' py-12 px-6 lg:px-16 mb-30'>
                    <div className='flex justify-start'>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                            {cardContent.map((item, index) => (
                                <Card
                                    key={index}
                                    className='rounded-2xl shadow-lg opacity-40 px-6 py-10 flex flex-col items-center text-center h-60 w-80'
                                >
                                    <CardContent className="p-0 flex flex-col items-center">
                                        <img src={item.icon} alt='Icon' className='w-10 h-10 m-6' />
                                        <h1 className='font-extrabold text-2xl mb-4'> {item.title} </h1>
                                        <p className='font-semibold text-lg mb-2'> {item.description1} </p>
                                        <p className='text-green-300/50 text-sm loading-relaxed'> {item.descrioption2} </p>
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


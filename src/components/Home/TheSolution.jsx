import React from 'react';
import Container from '../layouts/Container';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardTitle, CardHeader } from '../ui/card';
import IconImg from "@/assets/Home/IconContainer.svg";
import BgImg from "@/assets/HeroBg.png";

const solutionCard = [
    {
        icon: IconImg,
        title: "Your Closers Stop Wasting Time On Outrreach",
        description: "Every hour your top performers spend on cold calls, emails, or LinkedIn is an hour they're not closing six-figure deals.",
        mini: "Reclaim 60% of your team's time",
    },
    {
        icon: IconImg,
        title: "Your Closers Stop Wasting Time On Outrreach",
        description: "Every hour your top performers spend on cold calls, emails, or LinkedIn is an hour they're not closing six-figure deals.",
        mini: "Reclaim 60% of your team's time",
    },
    {
        icon: IconImg,
        title: "Your Closers Stop Wasting Time On Outrreach",
        description: "Every hour your top performers spend on cold calls, emails, or LinkedIn is an hour they're not closing six-figure deals.",
        mini: "Reclaim 60% of your team's time",
    },
]

const TheSolution = () => {
  return (
    <div
        className='relative bg-cover bg-no-repeat w-full h-fit'
        style={{backgroundImage: `url(${BgImg})`}}
    >
        <Container className="h-full" >
            <div className='h-full flex flex-col justify-center items-center'>
                <div className='py-12 mt-10'>
                    <div className='flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 text-start md:text-center mt-10 mx-auto'>
                        <Badge className="justify-center items-center opacity-20 bg-green-500/80 text-black">The Solution</Badge>
                        <div className='max-w-[700px]'>
                            <h1 className='scroll-m-20 text-4xl md:text-4xl lg:text-6xl font-extrabold'>What You Get</h1>
                        </div>
                        <div className='max-w-screen-md'>
                            <p className='lg:text-xl text-muted-foreground'>
                                A fully-managed outbound engine for every lead type - cold, warm, past clients, or ghosted opportunities. Multi-channel 
                                outreach (calls, emails, LinkedIn, SMS), expert scripts, QA coaching, and qualified appointments delivered to your CRM.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-2'>
                            {solutionCard.map((items, index) => (
                                <Card
                                    key={index}
                                    className=" flex justify-center "
                                >
                                    <CardTitle className= "flex items-center">
                                        <img src={items.icon} className='items-center' />
                                    </CardTitle>
                                    <CardHeader>
                                        <h1 className='text-2xl'> {items.title} </h1>
                                    </CardHeader>
                                    <CardContent>
                                        <p className='mb-4'> {items.description} </p>
                                        <Badge> {items.mini} </Badge>
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

export default TheSolution
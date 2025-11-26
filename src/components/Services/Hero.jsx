import React from 'react'
import Container from '../layouts/Container'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { MoveRight } from 'lucide-react'
import HeroBg from "@/assets/HeroBackground.jpeg"
import HeroCard from './HeroCard'

const Hero = () => {
  return (
    <div
        className="relative bg-cover bg-center bg-no-repeat w-full h-[100vh] xl:h-[100vh]"
        style={{backgroundImage: `url(${HeroBg})`}}
    >
        <Container className="h-full">
            <div className="h-full flex flex-col justify-center items-center ">
                <div className="py-12 mt-10">
                    <div className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 text-start md:text-center mt-10 mx-auto">
                        <Badge className="justify-center items-center opacity-20 h-15">✅ 5 Core Services, Infinite Results</Badge>
                        <div className="max-w-[700px]">
                            <h1 className="scroll-m-20 text-4xl md:text-4xl lg:text-6xl text-orange-400 font-extrabold ">
                                Our Services
                            </h1>
                        </div>
                        <div className="max-w-screen-md">
                            <p className=" lg:text-xl text-muted-foreground">
                                Comprehensive solutions to grow your business, from lead generation
                                to digital presence. We handle everything so you can focus on what matters
                                most.
                            </p>
                        </div>
                        <div className="flex flex-row gap-10 rounded-2xl justify-center items-center w-full">
                            <div className="text-white">
                                <Button 
                                    variant={"outline"}
                                    className="bg-amber-600 flex items-center gap-2 h-12 rounded-2xl" 
                                >
                                    Explore Services
                                    <MoveRight
                                        className="transition-all duration-300 group-hover:translate-x-1"
                                        stroke="currentColor"
                                        fill="none"
                                    />
                                </Button>
                            </div>
                            <div className="text-black opacity-30">
                                <Button className="flex items-center w-40 h-12 rounded-2xl">Book A Call</Button>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col">
                        <HeroCard/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Hero
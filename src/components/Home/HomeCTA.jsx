import React from 'react'
import Container from '../layouts/Container'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import BgImg from "@/assets/HeroBackground.jpeg"
import { MoveRight } from 'lucide-react'

const HomeCTA = () => {
  return (
    <div
        className="relative bg-cover bg-center bg-no-repeat w-full h-[100vh] xl:h-[100vh]"
        style={{backgroundImage: `url(${BgImg})`}}
    >
        <Container >
            <div className='h-fit flex flex-col justify-center items-center'>
                <div className='py-24 lg:py-32'>
                    <div className='flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 text-start md:text-center mt-10 mx-auto'>
                        <div className="max-w-[700px]">
                            <h1 className="scroll-m-20 text-4xl md:text-5xl lg:text-7xl text-white font-extrabold ">
                                Ready To 3x Your {" "}
                                <span className="block mt-4">Appointments?</span>
                            </h1>
                        </div>
                        <div className="max-w-screen-md">
                            <p className=" lg:text-xl text-muted-foreground">
                                Book a free strategy call today. We'll show you exactly 
                                how we'll fill your calendar with qualified decision-makers
                                without your team lifting a finger.
                            </p>
                        </div>
                        <div className="flex flex-row gap-10 rounded-2xl justify-center items-center w-full">
                            <div className="text-white">
                                <Button 
                                    variant={"outline"}
                                    className="bg-amber-600 flex items-center gap-2 h-12 rounded-2xl" 
                                >
                                    Get Started Now
                                    <MoveRight
                                        className="transition-all duration-300 group-hover:translate-x-1"
                                        stroke="currentColor"
                                        fill="none"
                                    />
                                </Button>
                            </div>
                            <div className="text-black opacity-40">
                                <Button className='flex items-center gap-2 h-12 rounded-2xl'>See How It Works</Button>
                            </div>
                        </div>
                        <div className="max-w-screen-md">
                            <p className=" lg:text-lg font-semibold text-orange-400">
                                We only have 12 spots available at the moment as we do not mass hire
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default HomeCTA
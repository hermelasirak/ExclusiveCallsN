import { useState } from "react"
import React from 'react'
import Container from "../layouts/Container"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { ArrowRight } from "lucide-react"
import HeroTrusted from "./HeroTrusted"
import HeroCard from "./HeroCard"
import HeroBg from "@/assets/HeroBackground.jpeg"

const Hero = () => {
  return (
    <div
        className="relative bg-cover bg-center bg-no-repeat w-full h-[190vh] xl:h-[180vh]"
        style={{backgroundImage: `url(${HeroBg})`}}
    >
        <Container className="h-full">
            <div className="h-full flex flex-col justify-center items-center ">
                <div className="py-12 mt-30">
                    <div className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 text-start md:text-center mt-10 mx-auto">
                        <Badge className="justify-center items-center opacity-20">⭐️⭐️⭐️⭐️⭐️ 100+ Reviews</Badge>
                        <div className="max-w-[700px]">
                            <h1 className="scroll-m-20 text-4xl md:text-4xl lg:text-6xl text-orange-400 font-extrabold ">
                                We Do The Cold Calling. {" "}
                                <span className="block">You Close The Deals.</span>
                            </h1>
                        </div>
                        <div className="max-w-screen-md">
                            <p className=" lg:text-xl text-muted-foreground">
                                Dedicated business development reps make 5,000+ monthly dials with 18+ touches per lead, 
                                so your closers focus on what they do best: closing deals*
                            </p>
                        </div>
                        <div className="flex flex-row gap-10 rounded-2xl justify-center items-center w-full">
                            <div className="text-white">
                                <Button className="bg-amber-600" >Book A Free Call</Button>
                            </div>
                            <div className="text-black opacity-30">
                                <Button>See How It Works</Button>
                            </div>
                        </div>
                        <div className="max-w-screen-md">
                            <p className=" lg:text-lg font-semibold text-muted-foreground">
                                ⚡️ No credit card required . Free 30-minute strategy session
                            </p>
                        </div>
                        <div className="flex flex-row gap-0 md:gap-2 lg:gap-4 justify-center items-center">
                            <Badge className="opacity-30 w-30 h-10" >#ColdCallers</Badge>
                            <Badge className="opacity-30 w-50 h-10" >#AppointmentSetters</Badge>
                            <Badge className="opacity-30 w-30 h-10" >#Telemarketing</Badge>
                            <Badge className="opacity-30 w-30 h-10" >#Prospecting</Badge>
                        </div>
                    </div>
                    <div className="relative flex flex-col">
                        <HeroTrusted/>
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
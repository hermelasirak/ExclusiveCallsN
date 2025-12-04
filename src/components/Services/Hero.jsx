import React from 'react'
import Container from '../layouts/Container'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { MoveRight, Phone } from 'lucide-react'
import HeroBg from "@/assets/HeroBackground.jpeg"
import HeroCard from './HeroCard'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div
      className="
        relative bg-cover bg-center bg-no-repeat w-full
        // ⭐ CHANGE: use min-height so it's responsive instead of fixed 100vh
        min-h-[90vh] md:min-h-[100vh]
      "
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
        <Container className="h-full">
            <div className="h-full flex flex-col justify-center items-center">
            <div className="py-16 md:py-20 lg:py-24">
                <div className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 text-center max-w-3xl mx-auto">
                {/* ⭐ CHANGE: glass pill badge */}
                <Badge
                    className="
                    rounded-full px-5 py-2 text-xs md:text-sm
                    bg-white/10 border border-white/25 text-white
                    backdrop-blur-xl
                    "
                >
                    ✅ 5 Core Services, Infinite Results
                </Badge>

                {/* ⭐ CHANGE: heading is white, responsive sizes */}
                <div className="max-w-[700px]">
                    <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-5xl text-white font-extrabold">
                    Our Services
                    </h1>
                </div>

                {/* ⭐ CHANGE: softer white body text */}
                <div className="max-w-3xl">
                    <p className="text-sm md:text-base lg:text-lg text-white/80">
                    Comprehensive solutions to grow your business, from lead generation
                    to digital presence. We handle everything so you can focus on what
                    matters most.
                    </p>
                </div>

                {/* ⭐ CHANGE: responsive button layout + pill styling */}
                <div className="flex flex-col sm:flex-row gap-4 rounded-2xl justify-center items-center w-full mt-2">
                    <div className="text-white">
                    <Link to="/services">
                        <Button
                        className="
                            group
                            bg-gradient-to-r from-orange-500 to-amber-400
                            flex items-center gap-2 h-12 px-8 rounded-full
                            font-semibold shadow-xl
                        "
                        >
                        Explore Services
                        <MoveRight
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                        </Button>
                    </Link>
                    </div>

                    <div className="text-white">
                    <Link to="/contactus">
                        <Button
                        variant="outline"
                        className="
                            flex items-center gap-2 h-12 px-8 rounded-full
                            bg-white/10 border border-white/25
                            text-white backdrop-blur-xl shadow-lg
                        "
                        >
                        Book A Call
                        <Phone className="h-4 w-4" />
                        </Button>
                    </Link>
                    </div>
                </div>
                </div>

                {/* ⭐ CHANGE: Service Metrics heading + spacing before cards */}
                <div className="mt-14 text-center text-white/80 text-sm md:text-base">
                <p className="uppercase tracking-[0.2em] text-white/60 mb-4">
                    Service Metrics
                </p>
                </div>

                <div className="relative flex flex-col">
                <HeroCard />
                </div>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default Hero
import React from 'react'
import Container from '../layouts/Container'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import HeroBg from '@/assets/HeroBackground.jpeg'

const Hero = () => {
  return (
    <div
      className="
        relative bg-cover bg-center bg-no-repeat w-full
        // ⭐ CHANGE: use min-height so it scales better on different screens
        min-h-[80vh] md:min-h-[60vh] lg:min-h-[70vh]
      "
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <Container className="h-full">
        {/* ⭐ CHANGE: center content vertically with padding */}
        <div className="h-full flex flex-col justify-center items-center py-16 md:py-24 lg:py-28">
          <div className="relative mt-6">
            {/* Heading + subheading */}
            <div className="flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 text-center mx-auto max-w-3xl">
              <div className="max-w-[900px]">
                {/* ⭐ CHANGE: responsive sizes and no extra margin between lines */}
                <h1 className="scroll-m-20 text-3xl md:text-6xl lg:text-6xl font-extrabold text-white leading-tight">
                  Sales Growth Solutions
                  <span className="block text-orange-400 mt-2">
                    Built For Your Success
                  </span>
                </h1>
              </div>

              <div className="max-w-3xl">
                {/* ⭐ CHANGE: use soft white text instead of muted-foreground */}
                <p className="text-sm md:text-base lg:text-lg text-white/80">
                  Comprehensive BDR services designed to fill your pipeline with
                  qualified appointments and accelerate your revenue growth.
                </p>
              </div>

              {/* Call to action */}
              <div className="mt-4">
                <Link to="/contactus">
                  {/* ⭐ CHANGE: gradient pill button, larger and centered */}
                  <Button
                    className="
                      bg-gradient-to-r from-orange-500 to-amber-400
                      px-8 py-4 rounded-full text-sm md:text-base
                      font-semibold text-white shadow-xl
                    "
                  >
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
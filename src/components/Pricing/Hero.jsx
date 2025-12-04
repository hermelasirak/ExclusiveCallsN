import React from 'react'
import Container from '../layouts/Container'
import HeroBg from '@/assets/HeroBackground.jpeg'

const Hero = () => {
  return (
     <div
      className="
        relative bg-cover bg-center bg-no-repeat w-full
        // ⭐ CHANGE: use min-height so it scales better on different screens
        min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh]
      "
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* ⭐ CHANGE: remove bg/height from Container, keep it as a simple layout wrapper */}
      <Container className="h-full">
        {/* ⭐ CHANGE: center content with flex + padding */}
        <div className="h-full flex flex-col justify-center items-center py-16 md:py-20 lg:py-24">
          <div className="relative mt-10">
            <div className="max-w-3xl text-center">
              {/* ⭐ CHANGE: heading color, sizes, and tighter line height */}
              <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Choose The Program That Fits{" "}
                <span className="block mt-2 text-orange-400">
                  Your Sales Growth Needs
                </span>
              </h1>
            </div>

            {/* ⭐ CHANGE: softer white subtitle + width constraint */}
            <div className="max-w-2xl mt-6 mx-auto text-center">
              <p className="text-sm md:text-base lg:text-lg text-white/80">
                Comprehensive solutions to grow your business, from lead generation
                to digital presence. We handle everything so you can focus on what
                matters most.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
import React from 'react'
import Container from '../layouts/Container'
import { Card, CardContent } from '../ui/card'
import BgImg from '@/assets/HeroBackground.jpeg'

const howItWorks = [
    {
        name: "01",
        title: "Onboarding",
        description: "We learn your business, ICP, and value proposition inside and out.",
    },
    {
        name: "02",
        title: "Setup",
        description: "Custom scripts, CRM integration, and BDR training completed.",
    },
    {
        name: "03",
        title: "Execution",
        description: "Daily outreach across multiple channels with relentless follow-up.",
    },
    {
        name: "04",
        title: "Optimization",
        description: "Continuous testing, coaching, and improvement for maximum ROI.",
    },
    
]

const ServiceCTA = () => {
  return (
    <div
      className="
        relative bg-cover bg-center bg-no-repeat w-full
        // ⭐ CHANGE – use min-height so it scales better
        min-h-[80vh] md:min-h-[90vh]
      "
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <Container className="h-full">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="relative py-16 md:py-20 lg:py-24">
            {/* Heading block */}
            <div className="flex flex-col justify-center items-center gap-4 md:gap-6 text-center mx-auto">
              <div className="max-w-[900px]">
                {/* ⭐ CHANGE – heading color & sizes to match hero */}
                <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-5xl text-white font-extrabold">
                  How It All Works Together?
                </h1>
              </div>
              <div className="max-w-xl">
                {/* ⭐ CHANGE – softer white subtitle */}
                <p className="text-sm md:text-base lg:text-lg text-white/80">
                  A seamless system that delivers qualified appointments to your calendar every week.
                </p>
              </div>
            </div>

            {/* Steps row */}
            <div
              className="
                // ⭐ CHANGE – responsive grid with spacing
                mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6
              "
            >
              {howItWorks.map((step, index) => (
                <Card
                  key={index}
                  className="
                    // ⭐ CHANGE – glassy card like the design
                    rounded-3xl bg-white/5 border border-white/20
                    backdrop-blur-xl shadow-xl
                    flex flex-col justify-center
                  "
                >
                  <CardContent className="p-6 md:p-8 text-center text-white">
                    {/* number */}
                    <p className="text-2xl md:text-3xl font-extrabold text-orange-400 mb-2">
                      {step.name}
                    </p>
                    {/* title */}
                    <p className="text-sm md:text-base font-semibold mb-2">
                      {step.title}
                    </p>
                    {/* description */}
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* ⭐ CHANGE – bottom orange info line */}
            <div className="mt-8 text-center">
              <p className="text-xs md:text-sm lg:text-base font-semibold text-orange-300">
                Limited to <span className="text-orange-400">12</span> new clients per month • Spots filling fast
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ServiceCTA
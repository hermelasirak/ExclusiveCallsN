import React from 'react'
import Container from '../layouts/Container'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import BgImg from '@/assets/HeroBackground.jpeg'

const howItWorks = [
    {
        number: "1",
        title: "Discovery & Strategy",
        description: "We learn your business, ICP, and value proposition to create a customized outreach strategy."
    },
    {
        number: "2",
        title: "BDR Assignment & Training",
        description: "Your dedicated BDR is trained on your offer, messaging, and processes to represent your brand perfectly."
    },
    {
        number: "3",
        title: "Campaign Launch",
        description: "We begin multi-channel outreach with phone, email, and LinkedIn to engage your target prospects."
    },
    {
        number: "4",
        title: "Continuous Optimization",
        description: "Weekly reporting and optimization ensure we’re constantly improving results and maximizing ROI."
    },
]

const TheProcess = () => {
  return (
    <div
      className="
        relative bg-cover bg-center bg-no-repeat w-full
        // ⭐ CHANGE: use min-height for better responsiveness
        min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh]
      "
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <Container className="h-full">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="relative py-16 md:py-20 lg:py-24">
            {/* HEADING BLOCK */}
            <div className="flex flex-col justify-center items-center gap-3 md:gap-4 text-center mt-2 mx-auto">
              <div className="max-w-[100px]">
                {/* ⭐ CHANGE: badge style + text to match “Our Process” pill */}
                <Badge
                  className="
                    rounded-full px-4 py-1 h-auto mb-2
                    bg-transparent border border-orange-300/70
                    text-orange-300 text-xs md:text-sm
                  "
                >
                  Our Process
                </Badge>
              </div>

              <div className="max-w-[900px]">
                {/* ⭐ CHANGE: heading color to white and responsive sizes */}
                <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-5xl text-white font-extrabold">
                  How It Works
                </h1>
              </div>

              <div className="max-w-xl">
                {/* ⭐ CHANGE: subtitle in soft white */}
                <p className="text-sm md:text-base lg:text-lg text-white/80">
                  A proven 4-step process to get you from zero to a full pipeline in
                  30 days.
                </p>
              </div>
            </div>

            {/* STEPS ROW */}
            <div
              className="
                // ⭐ CHANGE: responsive grid layout
                mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6
              "
            >
              {howItWorks.map((service, index) => (
                <Card
                  key={index}
                  className="
                    // ⭐ CHANGE: glassy card with hover border orange
                    relative overflow-visible
                    rounded-3xl bg-white/5 border border-white/25
                    backdrop-blur-xl shadow-xl
                    text-white transition-all
                    hover:border-orange-400
                  "
                >
                  <CardContent className="relative p-6 md:p-8 pt-10">
                    {/* ⭐ CHANGE: numbered circle overlapping top edge */}
                    {/*<div
                      className="
                        absolute -top-4 left-6
                        w-9 h-9 md:w-10 md:h-10
                        rounded-full bg-white/90 text-slate-800
                        flex items-center justify-center
                        text-sm md:text-base font-semibold
                      "
                    >
                      {service.number}
                    </div>*/}

                    <div className="mt-2">
                      <h2 className="text-base md:text-lg font-semibold mb-2">
                        {service.title}
                      </h2>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* ⭐ CHANGE: optional bottom line to match the orange text under cards in design */}
            <div className="mt-8 text-center">
              <p className="text-xs md:text-sm lg:text-base font-semibold text-orange-300">
                Limited to 12 new clients per month • Spots filling fast
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TheProcess
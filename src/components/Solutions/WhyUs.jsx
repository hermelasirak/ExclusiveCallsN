import React from 'react'
import Container from '../layouts/Container'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'

const whyCards = [
    {
        title: "Reduce Sales Costs",
        description: "Save $50K+ per year* vs hiring in-house BDRs with no recruiting, training, or management overhead."
    },
    {
        title: "Scale Instantly",
        description: "Add or reduce capacity on-demand without long-term commitments or hiring delays."
    },
    {
        title: "Focus On Closing",
        description: "Let your sales team focus on high-value activities while we handle the prospecting grind."
    },
    {
        title: "Proven Results",
        description: "Join 500+ companies who’ve accelerated their pipeline growth with our services."
    },
] 

const WhyUs = () => {
  return (
    <>
      {/* ⭐ CHANGE – move background + height off Container and onto wrapper */}
      <div className="w-full bg-[#f5f7fb] py-16 md:py-20 lg:py-24">
        <Container>
          <div className="flex flex-col items-center">
            {/* Heading block */}
            <div className="flex flex-col justify-center items-center gap-3 md:gap-4 lg:gap-5 text-center mx-auto">
              {/* ⭐ CHANGE – pill badge centered, light grey like design */}
              <div className="max-w-[140px]">
                <Badge
                  className="
                    rounded-full px-4 py-1 h-auto
                    bg-white text-slate-500 border border-slate-200
                    text-xs md:text-sm
                  "
                >
                  Why Choose Us
                </Badge>
              </div>

              {/* ⭐ CHANGE – blue heading, responsive sizes */}
              <div className="max-w-[800px]">
                <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0843a1]">
                  Benefits That Matter
                </h1>
              </div>

              <div className="max-w-xl">
                {/* ⭐ CHANGE – softer grey subtitle */}
                <p className="text-sm md:text-base lg:text-lg text-slate-600">
                  Real advantages that impact your bottom line.
                </p>
              </div>
            </div>

            {/* Cards */}
            <div
              className="
                // ⭐ CHANGE – responsive 2x2 layout, centered
                mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-5xl
              "
            >
              {whyCards.map((card, index) => (
                <Card
                  key={index}
                  className="
                    // ⭐ CHANGE – gradient, pill corners, hover lift
                    bg-[linear-gradient(135deg,#1E40AF,#6366F1)]
                    rounded-[24px]
                    shadow-md hover:shadow-xl hover:-translate-y-1
                    transition-all text-left
                  "
                >
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2">
                      {card.title}
                    </h2>
                    <p className="text-xs md:text-sm lg:text-base text-indigo-100 max-w-md">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default WhyUs
import React from 'react'
import Container from '../layouts/Container'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardHeader } from '../ui/card'

import Icon1 from '@/assets/Solutions/Icon1.svg'
import Icon2 from '@/assets/Solutions/Icon2.svg'
import Icon3 from '@/assets/Solutions/Icon3.svg'
import Icon4 from '@/assets/Solutions/Icon4.svg'
import HeroBg from '@/assets/Herobg.png'

const offers = [
    {
        icon: Icon1,
        title: "Targeted Lead Generation",
        description: "We identify and engage with your ideal customers using advanced prospecting techniques and data-driven targeting.",
        features: ["ICP-aligned prospect research", "Multi-channel outreach strategy", "Verified contact information", "Decision-maker identification"],
    },
    {
        icon: Icon2,
        title: "Dedicated BDR Team",
        description: "Get a fully-managed team of trained BDRs who work as an extension of your sales organization with complete white-label service.",
        features: ["Experienced BDR professionals", "Ongoing training and coaching", "Quality assurance monitoring", "Backup coverage guaranteed"],
    },
    {
        icon: Icon3,
        title: "Pipeline Acceleration",
        description: "Increase your sales velocity with consistent appointment setting and qualified lead flow that keeps your pipeline full.",
        features: ["5000+ dials per month *", "18+ touches per lead *", "Multi-channel follow-up", "Fast response times"],
    },
    {
        icon: Icon4,
        title: "Qualified Appointment Setting",
        description: "We book high-quality meetings with decision-makers who have budget, authority, and genuine interest in your solution.",
        features: ["85% show-up rate *", "BANT qualification", "Calendar integration", "Pre-meeting briefs"],
    },
]

const WhatWeOffer = () => {
  return (
    // ⭐ CHANGE – light background & natural height
    <div className="w-full bg-[#f5f7fb] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 text-center">
          {/* ⭐ CHANGE – badge style like design */}
          <Badge
            className="
              rounded-full px-4 py-1 text-xs md:text-sm
              bg-orange-100 text-orange-600 border border-orange-200
            "
          >
            What We Offer
          </Badge>

          {/* Heading */}
          <div className="max-w-3xl">
            {/* ⭐ CHANGE – blue heading, responsive sizes */}
            <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0843a1]">
              Complete Outbound Solutions
            </h1>
          </div>

          {/* Subheading */}
          <div className="max-w-2xl">
            <p className="text-sm md:text-base lg:text-lg text-slate-600">
              Everything you need to build a predictable, scalable sales pipeline.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div
          className="
            // ⭐ CHANGE – grid layout, left-aligned content
            mt-10 grid grid-cols-1 md:grid-cols-2 gap-6
          "
        >
          {offers.map((offer, index) => (
            <Card
              key={index}
              className={`
                group
                rounded-3xl bg-white border border-slate-200
                shadow-sm hover:shadow-xl hover:-translate-y-1
                transition-all text-left
                "border-2 border-orange-300 shadow-lg" : ""}
              `}
            >
              <CardContent className="p-6 md:p-8">
                {/* Icon pill */}
                <div className="mb-4 inline-flex items-center justify-center rounded-2xl  p-3">
                  <img src={offer.icon} className="w-10 h-10" alt={offer.title} />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                  {offer.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-slate-600 mb-5">
                  {offer.description}
                </p>

                {/* ⭐ CHANGE – features rendered as individual pill badges */}
                <div className="flex flex-wrap gap-2">
                  {offer.features.map((feature, i) => (
                    <Badge
                      key={i}
                      className="
                        rounded-full bg-white text-slate-700 border border-slate-200
                        px-3 py-1 text-[11px] md:text-xs font-normal
                      "
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default WhatWeOffer
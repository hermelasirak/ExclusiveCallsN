import React from 'react'
import Container from '../layouts/Container'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { MoveRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import CardImg from '@/assets/Home/Badge.svg'


const partTimeFeatures = [
  "All lead types (cold, warm, past clients)",
  "Dedicated BDR + backup coverage",
  "Expert scripts & local caller ID",
  "18+ multi-channel touches",
  "CRM integration (Salesforce, HubSpot)",
  "Quality assurance & coaching",
  "Priority support (24/7)",
];

const fullTimeFeatures = [
  "All lead types (cold, warm, past clients)",
  "Dedicated BDR + backup coverage",
  "Expert scripts & local caller ID",
  "18+ multi-channel touches",
  "CRM integration (Salesforce, HubSpot)",
  "QA rep + team lead",
  "Live transfers & priority support",
];

const bigCard = [
    {
        icon : CardImg,
        title: "Turnkey Appointment Setters",
        description: "We partner with business owners who know their greatest ROI comes from building high-performing sales teams not managing telemarketers."
    }
]

const HomePlans = () => {
  return (
    <section className="w-full bg-[#f5f7fb] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col items-center text-center gap-4 md:gap-6">
          {/* Top badge */}
          <Badge
            className="
              rounded-full px-4 py-1 h-auto
              bg-emerald-50 text-emerald-600 border border-emerald-200
              text-xs md:text-sm
            "
          >
            The Solution
          </Badge>

          {/* Heading */}
          <div className="max-w-3xl">
            <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0843a1] leading-tight">
              Choose Your Growth Plan
            </h1>
          </div>

          {/* Subheading */}
          <div className="max-w-xl">
            <p className="text-sm md:text-base lg:text-lg text-slate-600">
              Flexible options designed to scale with your business. Cancel
              anytime.
            </p>
          </div>
        </div>

        {/* Plans grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {/* Part Time */}
          <Card className="rounded-[32px] bg-white border border-slate-200 shadow-md flex flex-col">
            <CardContent className="p-6 md:p-8 flex flex-col gap-4 text-left">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                  Part Time
                </h2>
                <p className="text-xs md:text-sm font-semibold text-slate-600">
                  80 Hours / Month
                </p>
                <p className="text-[11px] md:text-xs text-slate-500">
                  Avg 100 dials / per day *
                </p>
              </div>

              {/* Green banner */}
              <div className="rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2 text-center">
                <span className="text-xs md:text-sm font-medium text-emerald-700">
                  Screened, Vetted, Battle Tested!
                </span>
              </div>

              {/* Feature box */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 md:p-5 space-y-2">
                <ul className="space-y-2 text-xs md:text-sm text-slate-700">
                  {partTimeFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-[2px]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Link to="/contactus">
                  <Button
                    className="
                      w-full md:w-auto
                      bg-gradient-to-r from-orange-500 to-amber-400
                      rounded-full px-6 md:px-8 py-3
                      text-sm md:text-base font-semibold text-white
                      shadow-md flex items-center justify-center gap-2
                    "
                  >
                    Get Started Now
                    <MoveRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Full Time – highlighted */}
          <Card
            className="
              rounded-[32px] bg-white border border-orange-300 shadow-lg
              flex flex-col relative
            "
          >
            <CardContent className="p-6 md:p-8 flex flex-col gap-4 text-left">
              {/* Best Value pill */}
              <div className="absolute -top-4 right-6">
                <span className="inline-flex items-center rounded-full bg-orange-500 text-white text-xs font-semibold px-3 py-1 shadow-md">
                  Best Value
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                  Full Time
                </h2>
                <p className="text-xs md:text-sm font-semibold text-slate-600">
                  160 Hours / Month
                </p>
                <p className="text-[11px] md:text-xs text-slate-500">
                  Avg 200 dials / per day *
                </p>
              </div>

              {/* Green banner */}
              <div className="rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2 text-center">
                <span className="text-xs md:text-sm font-medium text-emerald-700">
                  Screened, Vetted, Battle Tested!
                </span>
              </div>

              {/* Feature box with light orange gradient */}
              <div className="rounded-2xl bg-gradient-to-br from-orange-50 via-amber-50 to-white border border-orange-100 p-4 md:p-5 space-y-2">
                <ul className="space-y-2 text-xs md:text-sm text-slate-700">
                  {fullTimeFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-[2px]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Link to="/contactus">
                  <Button
                    className="
                      w-full md:w-auto
                      bg-gradient-to-r from-orange-500 to-amber-400
                      rounded-full px-6 md:px-8 py-3
                      text-sm md:text-base font-semibold text-white
                      shadow-md flex items-center justify-center gap-2
                    "
                  >
                    Get Started Now
                    <MoveRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ⭐ CHANGE – move the bottom “Turnkey Appointment Setters” card OUT of the grid and make it full-width pill */}
        <div className="mt-10 max-w-5xl mx-auto">
          <Card
            className="
              rounded-[32px]
              bg-white shadow-md border border-slate-100
              flex flex-col items-center text-center py-6 md:py-8
            "
          >
            {bigCard.map((cardCon, index) => (
              <CardContent
                key={index}
                className="flex flex-col items-center gap-4 md:gap-5"
              >
                {/* icon in orange circle */}
                <div className="inline-flex items-center justify-center rounded-full  p-3">
                  <img
                    src={cardCon.icon}
                    className="w-10 h-10"
                    alt={cardCon.title}
                  />
                </div>

                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#0843a1]">
                  {cardCon.title}
                </h2>
                <p className="max-w-3xl text-xs md:text-sm lg:text-base text-slate-600">
                  {cardCon.description}
                </p>
              </CardContent>
            ))}
          </Card>
        </div>
      </Container>
    </section>

  )
}

export default HomePlans
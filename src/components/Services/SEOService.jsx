import React from 'react'
import Container from '../layouts/Container'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '../ui/card'
import { MoveRight, CircleCheck, CircleDashed } from 'lucide-react'
import SEOImg from '@/assets/Services/Image1.png'

const whyUs = [
  {
    icon: "🔎",
    title: "Page 1 Rankings",
    description: "Dominate search results for your keywords",
    gradient:"bg-gradient-to-br from-[#16A34A] to-[#22C55E]",
  },
  {
    icon: "🌱",
    title: "Organic Growth",
    description: "Sustainable traffic without paid ads",
    gradient:"bg-gradient-to-br from-[#16A34A] to-[#22C55E]",
  },
  {
    icon: "📍",
    title: "Local Dominance",
    description: "Own your local market search results",
    gradient:"bg-gradient-to-br from-[#16A34A] to-[#22C55E]",
  },
]

const SEOService = () => {
  return (
    // ⭐ CHANGE – light section background & padding instead of full-screen grid
    <section className="w-full bg-[#fff9f5] py-16 md:py-20 lg:py-24">
      <Container>
        {/* ⭐ CHANGE – main two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* LEFT: IMAGE */}
            <div className="w-full lg:w-1/2">
                {/* ⭐ CHANGE – large main image */}
                <div className="mb-8">
                  <img
                      src={SEOImg}
                      alt="BDR Service"
                      className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-[32px] shadow-xl"
                  />
                </div>
            
                <div className="text-center text-slate-600 mb-6">
                  <p className="text-xs md:text-sm tracking-wide uppercase">
                      Why Choose This Service
                  </p>
                </div>
            
                {/* ⭐ CHANGE – responsive 3-card row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {whyUs.map((service, index) => (
                      <Card
                        key={index}
                        className={`
                            rounded-[24px] text-left text-white
                            bg-gradient-to-br ${service.gradient}
                            shadow-lg flex flex-col
                        `}
                      >
                      <CardContent className="p-5 flex flex-col gap-2">
                          <div className="text-2xl">{service.icon}</div>
                          <h3 className="text-base md:text-lg font-semibold leading-snug">
                          {service.title}
                          </h3>
                          <p className="text-xs md:text-sm text-blue-100/90">
                          {service.description}
                          </p>
                      </CardContent>
                      </Card>
                    ))}
                </div>
            </div>

          {/* RIGHT: TEXT + BULLETS + BUTTONS */}
          <div className="w-full lg:w-1/2">
            {/* icon pill */}
            <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-emerald-100 p-3">
              <CircleDashed className="w-6 h-6 text-emerald-500" />
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight text-slate-900">
              SEO
            </h2>

            {/* ⭐ CHANGE – orange subheading as in design */}
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-orange-500">
              The Foundation Of Online Success
            </h3>

            <p className="text-sm md:text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              Search Engine Optimization (SEO) is the foundation of online success.
              Our SEO experts work diligently to improve your website&apos;s visibility
              on search engines like Google, ensuring that your business ranks higher
              for relevant keywords. By optimizing your website&apos;s content,
              structure, and technical performance, we increase your chances of being
              discovered by your target audience.
            </p>

            {/* ⭐ CHANGE – bullet badges in clean 2-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm">
                <CircleCheck className="w-4 h-4 text-emerald-500" />
                Keyword research and optimization
              </Badge>
              <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm">
                <CircleCheck className="w-4 h-4 text-emerald-500" />
                On-page and off-page SEO
              </Badge>
              <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm">
                <CircleCheck className="w-4 h-4 text-emerald-500" />
                Technical SEO audits and fixes
              </Badge>
              <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm">
                <CircleCheck className="w-4 h-4 text-emerald-500" />
                Local SEO to target nearby customers
              </Badge>
              <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm col-span-1 sm:col-span-2">
                <CircleCheck className="w-4 h-4 text-emerald-500" />
                SEO analytics and reporting
              </Badge>
            </div>

            {/* ⭐ CHANGE – CTAs styled like the design, responsive */}
            <div className="flex flex-col sm:flex-row gap-4 rounded-2xl justify-start items-center w-full">
              <div className="text-white">
                <Link to="/contactus">
                  <Button className="bg-gradient-to-r from-orange-500 to-amber-400 rounded-full px-8 py-4 text-sm md:text-base font-semibold flex items-center gap-2 shadow-md">
                    Get Started
                    <MoveRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="text-black rounded-2xl">
                <Link to="/pricing">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-4 text-sm md:text-base border-slate-300 text-slate-700 bg-white"
                  >
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SEOService
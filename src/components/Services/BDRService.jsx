import React from 'react'
import Container from '../layouts/Container'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { Phone, CircleCheck, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import BDRImg from "@/assets/Services/Image.png"



const whyUs = [
    {
        icon: "🎯",
        title: "Qualified Leads",
        description: "Focus On Prospects Ready To Buy",
        gradient: "bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]",
    },
    {
        icon: "📞",
        title: "Professional BDRs",
        description: "Trained Experts Representing Your Brand",
        gradient: "bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]",
    },
    {
        icon: "⚡️",
        title: "Fast Response",
        description: "Same-Day Follow-Up Guaranteed",
        gradient: "bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]",
    },
]

const BDRService = () => {
  return (
    // ⭐ CHANGE – use a light background section instead of full-screen gradient grid
    <section className="w-full bg-[#fff9f5] py-16 md:py-20 lg:py-24">
      <Container>
            {/* ⭐ CHANGE – two-column layout on desktop, stacked on mobile */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                {/* LEFT SECTION */}
                <div className="w-full lg:w-1/2 relative">
                    {/* small icon pill */}
                    <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-purple-100 p-3">
                    <Phone className="w-6 h-6 text-purple-500" />
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight text-slate-900">
                    BDR Service
                    </h2>

                    <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-orange-500">
                    Direct Connection With Your Customers
                    </h3>

                    <p className="text-sm md:text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
                    Telemarketing remains one of the most effective ways to directly connect
                    with potential customers. Our telemarketing services are designed to
                    increase customer engagement, promote your products or services, and drive
                    sales growth. With a dedicated team of trained professionals, we deliver
                    personalized, results-oriented communication that strengthens relationships
                    with your leads.
                    </p>

                    {/* ⭐ CHANGE – bullet badges in two columns, wrapped nicely */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm">
                        <CircleCheck className="w-4 h-4 text-emerald-500" />
                        Lead generation and appointment setting
                    </Badge>
                    <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm">
                        <CircleCheck className="w-4 h-4 text-emerald-500" />
                        Inbound and outbound calling
                    </Badge>
                    <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm">
                        <CircleCheck className="w-4 h-4 text-emerald-500" />
                        Sales support and follow-ups
                    </Badge>
                    <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm">
                        <CircleCheck className="w-4 h-4 text-emerald-500" />
                        Market research surveys & feedback
                    </Badge>
                    <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm col-span-1 sm:col-span-2">
                        <CircleCheck className="w-4 h-4 text-emerald-500" />
                        Dedicated team of trained professionals
                    </Badge>
                    </div>

                    {/* ⭐ CHANGE – CTA buttons styled like design */}
                    <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contactus">
                        <Button className="bg-gradient-to-r from-orange-500 to-amber-400 rounded-full px-8 py-4 text-sm md:text-base font-semibold flex items-center gap-2 shadow-md">
                        Get Started
                        <MoveRight className="w-4 h-4" />
                        </Button>
                    </Link>
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

                {/* RIGHT SECTION */}
                <div className="w-full lg:w-1/2">
                    {/* ⭐ CHANGE – large main image */}
                    <div className="mb-8">
                    <img
                        src={BDRImg}
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
            </div>
        </Container>
    </section>
  )
}

export default BDRService
import React from 'react'
import Container from '../layouts/Container'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Link } from 'react-router-dom'
import { MoveRight, CircleCheck, Users } from 'lucide-react'
import VAImg from '@/assets/Services/Image4.png'

const whyUs =[
    {
        icon: "⏰",
        title: "Save Time",
        description: "Focus on growth, we handle tasks.",
        gradient:"bg-gradient-to-br from-[#007CF0] to-[#00C6FF]",
    },
    {
        icon: "💼",
        title: "Expert Support",
        description: "Skilled assistants for seamless operations.",
        gradient:"bg-gradient-to-br from-[#007CF0] to-[#00C6FF]",
    },
    {
        icon: "💰",
        title: "Cost Effective",
        description: "Affordable help without full-time costs.",
        gradient:"bg-gradient-to-br from-[#007CF0] to-[#00C6FF]",
    },
]

const VirtualAssistant = () => {
  return (
    <section className="w-full bg-[#fff9f5] py-16 md:py-20 lg:py-24">
      <Container>
        {/* ⭐ CHANGE – two-column layout on desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* LEFT SECTION */}
          <div className="w-full lg:w-1/2 relative">
            {/* small icon pill */}
            <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-blue-100 p-3">
              <Users className="w-6 h-6 text-blue-400" />
            </div>

            {/* ⭐ CHANGE: heading color to match site blue */}
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight text-[#0843a1]">
              Virtual Assistants
            </h2>

            <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-orange-500">
              Streamline Your Professional Tasks
            </h3>

            <p className="text-sm md:text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              Our virtual assistants are real professionals dedicated to simplifying your daily
              operations so you can focus on growing your business. From managing emails to handling
              clients and projects, our assistants work behind the scenes to keep everything running
              efficiently and on time.
            </p>

            {/* ⭐ CHANGE – bullet badges in two columns on larger screens */}
            <div className=" flex flex-col overflow-hidden gap-3 mb-8">
              <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm">
                <CircleCheck className="w-4 h-4 text-emerald-500" />
                Administrative Support: Email organization, calendar scheduling, and data entry.
              </Badge>
              <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm">
                <CircleCheck className="w-4 h-4 text-emerald-500" />
                Project Management: Coordinating tasks, tracking progress, and ensuring deadlines are met.
              </Badge>
              <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm">
                <CircleCheck className="w-4 h-4 text-emerald-500" />
                Customer Support: Managing inquiries, responding to clients, and following up on tickets.
              </Badge>
              <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm">
                <CircleCheck className="w-4 h-4 text-emerald-500" />
                Research and Reporting: Conducting market research and compiling detailed insights.
              </Badge>
              <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm col-span-1 sm:col-span-2">
                <CircleCheck className="w-4 h-4 text-emerald-500" />
                Social Media Management: Scheduling posts, managing engagement, and maintaining brand presence.
              </Badge>
              <Badge className="flex items-center justify-start gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-3 py-2 text-xs md:text-sm col-span-1 sm:col-span-2">
                <CircleCheck className="w-4 h-4 text-emerald-500" />
                Personal Assistance: Organizing travel, meetings, and personal reminders.
              </Badge>
            </div>

            {/* CTAs */}
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
            {/* ⭐ CHANGE – large main image with rounded corners & shadow */}
            <div className="mb-8">
              <img
                src={VAImg}
                alt="Virtual Assistants"
                className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-[32px] shadow-xl"
              />
            </div>

            <div className="text-center text-slate-600 mb-6">
              <p className="text-xs md:text-sm tracking-wide uppercase">
                Why Choose This Service
              </p>
            </div>

            {/* ⭐ CHANGE – responsive 3-card row with accurate gradients */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {whyUs.map((service, index) => (
                <Card
                  key={index}
                  className={`
                    rounded-[24px] text-left text-white
                    ${service.gradient}
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

export default VirtualAssistant
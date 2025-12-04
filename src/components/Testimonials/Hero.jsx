import React from 'react'
import Container from '../layouts/Container'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import HeroBg from '@/assets/HeroBackground.jpeg'

const testimonialCard = [
    {
        icon : "👥",
        title: "500+",
        description: "Happy Clients"
    },
    {
        icon : "📅",
        title: "40K+",
        description: "Appointments Booked"
    },
    {
        icon : "⭐️",
        title: "98%",
        description: "Satisfaction Rate"
    },
    {
        icon : "📈",
        title: "3x",
        description: "Average ROI*"
    },
]

const Hero = () => {
  return (
    <div
      className="
        relative bg-cover bg-center bg-no-repeat w-full
        // ⭐ CHANGE: use min-height instead of fixed 90vh
        min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh]
      "
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <Container className="h-full">
        {/* ⭐ CHANGE: vertically center with padding, not margin-top hacks */}
        <div className="h-full flex flex-col justify-center items-center py-16 md:py-20 lg:py-24">
          <div className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 text-center mx-auto max-w-4xl mt-6">
            {/* ⭐ CHANGE: rating pill style to match design */}
            <Badge
              className="
                inline-flex items-center justify-center
                rounded-full px-5 py-2 h-auto
                bg-white/10 border border-white/20
                text-white/80 text-xs md:text-sm backdrop-blur-xl
              "
            >
              ⭐️⭐️⭐️⭐️⭐️ 4.8/5 from 200+ reviews.
            </Badge>

            {/* ⭐ CHANGE: heading text + color + layout */}
            <div className="max-w-[700px]">
              <h1 className="scroll-m-20 text-3xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight">
                Real Results From {' '}
                <span className="text-orange-400">
                   Real{' '}
                  <span className="block mt-2">Sales Teams.</span>
                </span>
              </h1>
            </div>

            {/* ⭐ CHANGE: softer white subtext with smaller size */}
            <div className="max-w-xl">
              <p className="text-xs md:text-sm lg:text-base text-white/80">
                See how companies like yours transformed their sales pipeline
                with our expert BDR services.
              </p>
            </div>
          </div>

          {/* ⭐ CHANGE: stats row – glass cards, responsive grid */}
          <div
            className="
              mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
              gap-4 md:gap-6 w-full max-w-5xl
            "
          >
            {testimonialCard.map((testimonial, index) => (
              <Card
                key={index}
                className="
                  rounded-3xl bg-white/5 border border-white/20
                  backdrop-blur-xl shadow-xl
                  text-white transition-all
                  hover:border-orange-400 hover:-translate-y-1 hover:shadow-2xl
                  flex items-stretch
                "
              >
                <CardContent className="p-6 md:p-8 flex flex-col items-center text-center gap-2">
                  {/* ⭐ CHANGE: emoji icon top, larger */}
                  <div className="text-2xl md:text-3xl mb-1">
                    {testimonial.icon}
                  </div>
                  {/* number */}
                  <h2 className="font-extrabold text-2xl md:text-3xl text-orange-400">
                    {testimonial.title}
                  </h2>
                  {/* label */}
                  <p className="text-xs md:text-sm text-white/85">
                    {testimonial.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
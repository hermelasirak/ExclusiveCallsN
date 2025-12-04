import React from 'react'
import Container from '../layouts/Container'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { MoveRight, Phone } from 'lucide-react'

const ServicesCTA = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col items-center text-center gap-6 md:gap-8">
          {/* Heading */}
            <div className="max-w-5xl">
                <h1 className="scroll-m-20 text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0843a1] leading-tight">
                Ready To Transform Your Pipeline?
                </h1>
            </div>

          {/* Subtext */}
          <div className="max-w-4xl">
            <p className="text-sm md:text-base lg:text-lg text-slate-600">
              Book a free strategy call and discover how our services can 3x your
              qualified appointments in 60 days.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <Link to="/solutions">
              <Button
                className="
                  group
                  bg-gradient-to-r from-orange-500 to-amber-400
                  px-8 py-4 rounded-full
                  text-sm md:text-base font-semibold text-white
                  shadow-xl flex items-center gap-2
                "
              >
                Explore Services
                <MoveRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link to="/contactus">
              <Button
                variant="outline"
                className="
                  px-8 py-4 rounded-full
                  text-sm md:text-base font-medium
                  bg-white border border-slate-300 text-slate-700
                  flex items-center gap-2
                "
              >
                Book A Call
                <Phone className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Guarantee pill */}
          <div className="mt-4">
            <span
              className="
                inline-flex items-center justify-center
                rounded-full border border-emerald-300 bg-emerald-50
                px-4 py-2 text-xs md:text-sm font-medium text-emerald-700
              "
            >
              30-Day Money-Back Guarantee · No Long-Term Contracts
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ServicesCTA
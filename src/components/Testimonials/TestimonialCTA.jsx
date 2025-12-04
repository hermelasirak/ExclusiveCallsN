import React from 'react'
import Container from '../layouts/Container'
import { Button } from '../ui/button'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const TestimonialCTA = () => {
  return (
    <>
      {/* ⭐ CHANGE: put background + spacing on a wrapper section, not on Container */}
      <section className="w-full bg-white py-16 md:py-20 lg:py-24">
        <Container>
          {/* ⭐ CHANGE: remove fixed height, center content with flex + gap */}
          <div className="flex flex-col items-center text-center gap-6 md:gap-8">
            {/* ⭐ CHANGE: heading color + responsive sizes to match design */}
            <div className="max-w-5xl">
              <h1 className="scroll-m-20 text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0843a1] leading-tight">
                Ready to Join Our Success Stories?
              </h1>
            </div>

            {/* ⭐ CHANGE: subtitle color and sizing */}
            <div className="max-w-4xl">
              <p className="text-sm md:text-base lg:text-lg text-slate-600">
                Book a free strategy call and discover how we can transform your sales
                pipeline in 60 days or less.
              </p>
            </div>

            {/* ⭐ CHANGE: buttons – gradient primary + white outline secondary, responsive layout */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center justify-center">
              <Link to="/contactus">
                <Button
                  className="
                    group
                    bg-gradient-to-r from-orange-500 to-amber-400
                    text-white rounded-full
                    px-8 py-4 text-sm md:text-base font-semibold
                    shadow-xl flex items-center gap-2
                  "
                >
                  Schedule Your Free Call
                  <MoveRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link to="/pricing">
                <Button
                  variant="outline"
                  className="
                    rounded-full px-8 py-4 text-sm md:text-base
                    bg-white text-slate-700 border border-slate-300
                    shadow-sm
                  "
                >
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default TestimonialCTA
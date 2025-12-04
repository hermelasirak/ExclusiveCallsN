import React from 'react'
import Container from '../layouts/Container'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'

const SolutionsCTA = () => {
  return (
    <>
      {/* ⭐ CHANGE: move background/height off Container and onto a wrapper section */}
      <section className="w-full bg-white py-16 md:py-20 lg:py-24">
        <Container>
          {/* ⭐ CHANGE: remove fixed height; just center content with flex + gap */}
          <div className="flex flex-col items-center text-center gap-6 md:gap-8">
            {/* ⭐ CHANGE: heading styling + color + Sales in orange */}
            <div className="max-w-3xl">
              <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0843a1] leading-tight">
                Ready to Transform Your
                <span className="block mt-1">
                  <span className="text-orange-400">Sales</span> Pipeline?
                </span>
              </h1>
            </div>

            {/* ⭐ CHANGE: subtitle copy + grey color */}
            <div className="max-w-xl">
              <p className="text-sm md:text-base lg:text-lg text-slate-600">
                Book a free strategy call and discover how our services can accelerate
                your revenue growth.
              </p>
            </div>

            {/* ⭐ CHANGE: buttons — pill-shaped, responsive row/column */}
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

export default SolutionsCTA
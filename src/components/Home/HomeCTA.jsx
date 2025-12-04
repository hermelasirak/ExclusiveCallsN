import React from 'react'
import Container from '../layouts/Container'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import BgImg from "@/assets/HeroBackground.jpeg"
import { MoveRight, Phone } from 'lucide-react'
import { useState } from 'react'

const getDailySlots = () => {
  const today = new Date().toISOString().slice(0, 10); // e.g. "2025-12-03"
  let sum = 0;
  for (const ch of today) sum += ch.charCodeAt(0);
  return (sum % 15) + 1; // 1–15
};

const HomeCTA = () => {
    
    const [dailySlots] = useState(getDailySlots);

  return (
    <div
      className="
        relative bg-cover bg-center bg-no-repeat w-full
        // ⭐ CHANGE – responsive height instead of fixed 100vh
        min-h-[80vh] md:min-h-[90vh] lg:min-h-[100vh]
      "
      style={{ backgroundImage: `url(${BgImg})` }}
    >
        <Container>
            {/* ⭐ CHANGE – vertically center content with padding */}
            <div className="flex flex-col items-center justify-center py-24 md:py-32">
                <div className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 text-center max-w-3xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-[700px]">
                        <h1 className="scroll-m-20 text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight">
                            Ready To 3x Your
                            <span className="block mt-2">Appointments?</span>
                        </h1>
                    </div>

                    {/* ⭐ CHANGE – softer white description, centered */}
                    <div className="max-w-xl">
                        <p className="text-base md:text-lg lg:text-xl text-white/80">
                            Book a free strategy call today. We’ll show you exactly how we’ll
                            fill your calendar with qualified decision-makers without your team
                            lifting a finger.
                        </p>
                    </div>

                    {/* ⭐ CHANGE – CTA buttons styled like the design */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        {/* Primary CTA */}
                        <Link to="/contactus">
                            <Button
                            className="
                                group
                                bg-gradient-to-r from-orange-500 to-amber-400
                                px-8 py-5 rounded-full text-white font-semibold
                                shadow-xl flex items-center gap-2
                            "
                            >
                            Get Started Now
                            <MoveRight
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                            </Button>
                        </Link>

                        {/* Secondary CTA – call button */}
                        <a href="tel:1-888-484-3515">
                            <Button
                            variant="outline"
                            className="
                                bg-white/10 border border-white/25 text-white
                                px-8 py-5 rounded-full font-medium
                                flex items-center gap-3
                                backdrop-blur-xl shadow-lg
                            "
                            >
                            <span>Call Now: 1-888-484-3515</span>
                            <Phone className="h-4 w-4" />
                            </Button>
                        </a>
                    </div>

                    {/* ⭐ CHANGE – dynamic “spots” text with highlighted number */}
                    <div className="max-w-xl mt-4">
                        <p className="text-sm md:text-base lg:text-lg font-semibold text-orange-300">
                            We only have{" "}
                            <span className="text-orange-400 font-extrabold">
                            {dailySlots}
                            </span>{" "}
                            spots available at the moment as we do not mass hire.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default HomeCTA
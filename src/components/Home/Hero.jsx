import { useState } from "react"
import React from 'react'
import Container from "../layouts/Container"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { MoveRight } from "lucide-react"
import HeroTrusted from "./HeroTrusted"
import HeroCard from "./HeroCard"
import HeroBg from "@/assets/HeroBackground.jpeg"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div
      className="
      relative bg-cover bg-center bg-no-repeat w-full
      // ⭐ CHANGE → correct hero height to match screenshot
      min-h-[160vh] md:min-h-[170vh] lg:min-h-[160vh]
      "
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <Container className="h-full">
        <div className="h-full flex flex-col items-center pt-36">
          
          {/* ⭐ CHANGE → Smaller badge, correct radius + glass effect */}
          <Badge className="bg-white/10 border border-white/20 backdrop-blur-lg px-6 py-3 text-white text-sm mb-6">
            ⭐⭐⭐⭐⭐ 100+ reviews.
          </Badge>

          {/* Title */}
          <div className="max-w-[900px] text-center">
            <h1 className="scroll-m-20 text-4xl md:text-6xl font-extrabold text-white leading-tight">
              We Do The Cold Calling.
              <span className="block text-orange-400 mt-2">
                You Close The Deals.
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl text-center mt-4">
            Dedicated business development reps make 5,000+ monthly dials with 18+ touches per lead, 
            so your closers focus on what they do best: closing deals*
          </p>

          {/* ⭐ CHANGE → Buttons styled + spaced like screenshot */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link to="/contactus">
              <Button
                className="
                bg-gradient-to-r from-orange-500 to-amber-400
                px-8 py-6 text-lg rounded-full font-semibold shadow-xl
                flex items-center gap-2
              "
              >
                Book A Free Call <MoveRight className="w-5 h-5" />
              </Button>
            </Link>

            <Link to="/services">
              <Button
                className="
                bg-white/10 border border-white/20 px-8 py-6 text-lg 
                rounded-full font-semibold text-white shadow-lg backdrop-blur-xl
                "
              >
                See How It Works →
              </Button>
            </Link>
          </div>

          {/* Subtext */}
          <p className="text-white/70 text-sm md:text-lg mt-6">
            ⚡ No credit card required · Free 30-minute strategy session
          </p>

          {/* ⭐ CHANGE → Hashtags styled like screenshot */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["ColdCallers", "AppointmentSetters", "Telemarketing", "Prospecting"].map((tag) => (
              <Badge
                key={tag}
                className="
                bg-white/10 border border-white/20 text-white px-4 py-2
                rounded-full backdrop-blur-lg
                "
              >
                #{tag}
              </Badge>
            ))}
          </div>

          {/* TRUSTED SECTION */}
          <div className="w-full mt-24">
            <HeroTrusted />
          </div>

          {/* HERO CARDS */}
          <div className="w-full mt-12">
            <HeroCard />
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Hero
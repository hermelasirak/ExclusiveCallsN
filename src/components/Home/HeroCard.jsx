import React from 'react';
import Container from '../layouts/Container';
import { Card, CardContent, CardHeader } from '../ui/card';

import Icon1 from "@/assets/Home/Icon1.svg";
import Icon2 from "@/assets/Home/Icon2.svg";
import Icon3 from "@/assets/Home/Icon3.svg";

const HeroCard = () => {
    const cardContent = [
        {
            icon: Icon1,
            title: "5000+",
            description1: "Dails Per Month*",
            descrioption2: "✓ Per Full-Time BDR"
        },
        {
            icon: Icon2,
            title: "18+",
            description1: "Touches Per Lead *",
            descrioption2: "✓ Multi-Channel Persistence"
        },
        {
            icon: Icon3,
            title: "85%",
            description1: "Appointment Show Rate *",
            descrioption2: "✓ Qualified Decision-Makers"
        },
    ];

  return (
    <Container>
      {/* ⭐ CHANGE: tighten top spacing & center cards under hero text */}
      <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {cardContent.map((item, index) => (
          <Card
            key={index}
            className="
              // ⭐ CHANGE: card styling to match Figma (wide, glassy, subtle glow)
              rounded-[32px]
              bg-white/8
              border border-white/15
              backdrop-blur-xl
              shadow-[0_22px_60px_rgba(15,23,42,0.65)]
              text-white
              flex flex-col justify-center
              hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.8)]
              transition-all
            "
          >
            <CardContent className="p-6 md:p-8 flex flex-col items-center text-center gap-2">
              {/* ⭐ CHANGE: icon sizing & margin */}
              <img src={item.icon} className="w-10 h-10 mb-2" alt={item.title} />

              {/* ⭐ CHANGE: orange headline number */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-orange-400 mb-1">
                {item.title}
              </h1>

              {/* ⭐ CHANGE: white label text */}
              <p className="text-xs md:text-sm lg:text-base font-semibold text-white/90">
                {item.description1}
              </p>

              {/* ⭐ CHANGE: green sub-label, smaller */}
              <p className="text-[11px] md:text-xs lg:text-sm text-emerald-400 mt-1">
                {item.descrioption2}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  )
}

export default HeroCard


import React from 'react';
import Container from '../layouts/Container';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import BgImg from "@/assets/HeroBg.png"

const cards =[
    {
        icon: "❌",
        description: "Your top closers waste 60% of their time on outreach instead of high-value deals."
    },
    {
        icon: "❌",
        description: "Most teams give up after 2-3 touches, but it takes 18+ to convert decision-makers."
    },
    {
        icon: "❌",
        description: "Every day without booked appointments = lost opportunities and stalled pipeline."
    },
    {
        icon: "❌",
        description: "Recruiting, training, and churn costs you $50K+ per BDR annually."
    },
]

const TheChallenge = () => {
  return (
    <div
      className="
        // ⭐ CHANGE – light section background like the design
        relative w-full bg-[#fff9f5]
      "
      // style={{ backgroundImage: `url(${BgImg})` }}
    >
      <Container>
            <div className="py-16 md:py-20 lg:py-24">
                <div className="flex flex-col items-center text-center gap-4 md:gap-6">
                    {/* ⭐ CHANGE – orange pill badge */}
                    <Badge
                    className="
                        rounded-full px-4 py-1 text-xs md:text-sm
                        border border-orange-300 bg-orange-50 text-orange-500
                    "
                    >
                    The Challenge
                    </Badge>

                    {/* ⭐ CHANGE – heading styles */}
                    <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#0843a1] leading-tight">
                    Your Sales Team Shouldn’t Be
                    <span className="block">Stuck Prospecting</span>
                    </h1>

                    {/* ⭐ CHANGE – subtext styling */}
                    <p className="max-w-3xl text-sm md:text-base lg:text-lg text-slate-600">
                    Every minute spent dialing cold leads is a minute not spent closing deals.
                    Here’s what’s costing you revenue right now.
                    </p>

                    {/* ⭐ CHANGE – responsive grid & card styles */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
                    {cards.map((item, index) => {
                        const isDanger = item.variant === "danger";

                        return (
                        <Card
                            key={index}
                            className={`
                            group
                            rounded-3xl px-4 py-5 md:px-6 md:py-6
                            flex items-stretch
                            border
                            bg-white
                            transition-all duration-200
                            hover:shadow-xl hover:-translate-y-1
                            ${
                                isDanger
                                ? "border-red-300 bg-red-50/40"
                                : "border-slate-200"
                            }
                            `}
                        >
                            <CardContent className="p-0 flex flex-col gap-4 text-left">
                            {/* ⭐ CHANGE – icon circle like screenshot */}
                            <div className="flex items-center">
                                <div
                                className={`
                                    h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold
                                    ${
                                    isDanger
                                        ? "bg-red-500 text-white"
                                        : "bg-slate-100 text-slate-500"
                                    }
                                `}
                                >
                                {item.icon}
                                </div>
                            </div>

                            {/* description */}
                            <p className="text-sm md:text-base text-slate-700">
                                {item.description}
                            </p>
                            </CardContent>
                        </Card>
                        );
                    })}
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default TheChallenge
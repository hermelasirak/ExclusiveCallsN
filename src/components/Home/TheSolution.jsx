import React from 'react';
import Container from '../layouts/Container';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardTitle, CardHeader } from '../ui/card';
import IconImg from "@/assets/Home/IconContainer.svg";
import BgImg from "@/assets/HeroBg.png";

const solutionCard = [
    {
        icon: IconImg,
        title: "Your Closers Stop Wasting Time On Outreach",
        description: "Every hour your top performers spend on cold calls, emails, or LinkedIn is an hour they're not closing six-figure deals.",
        mini: "Reclaim 60% of your team's time",
    },
    {
        icon: IconImg,
        title: "We Do 18+ Touches Per Lead (Most Teams Quit at 3)",
        description: "Decision-makers don't respond to the first call. Our BDRs persist through the full cycle until we book the meeting or disqualify the lead.",
        mini: "67% of meetings come after touch #7",
    },
    {
        icon: IconImg,
        title: "No Hiring Training, or Turnover Costs",
        description: "Skip the $50K+ annual cost per BDR, plus recruiting, onboarding, and churn. Get a battle-tested team that starts dialing day one.",
        mini: "Save $120K+ in first year",
    },
]

const TheSolution = () => {
  return (
    <div
      className="
        // ⭐ CHANGE – light section background like the screenshot
        relative w-full bg-[#f5f7fb]
      "
      // ⭐ CHANGE – remove backgroundImage
      // style={{ backgroundImage: `url(${BgImg})` }}
    >
      <Container className="py-16 md:py-20 lg:py-24">
            <div className="flex flex-col items-center text-center gap-6 md:gap-8">
            
            {/* ⭐ CHANGE – green pill “The Solution” */}
            <Badge
                className="
                rounded-full px-4 py-1 text-xs md:text-sm
                border border-emerald-500 bg-emerald-50 text-emerald-600
                "
            >
                The Solution
            </Badge>

            {/* ⭐ CHANGE – heading styling */}
            <div className="max-w-3xl">
                <h1 className="scroll-m-20 text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0843a1]">
                What You Get
                </h1>
            </div>

            {/* ⭐ CHANGE – description style & width */}
            <div className="max-w-3xl">
                <p className="text-sm md:text-base lg:text-lg text-slate-600">
                A fully-managed outbound engine for every lead type – cold, warm, past
                clients, or ghosted opportunities. Multi-channel outreach (calls, emails,
                LinkedIn, SMS), expert scripts, QA coaching, and qualified appointments
                delivered to your CRM.
                </p>
            </div>

            {/* ⭐ CHANGE – responsive 3-card grid with proper spacing */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
                {solutionCard.map((items, index) => (
                <Card
                    key={index}
                    className="
                    // outer card style to match Figma
                    bg-white rounded-[30px]
                    border border-orange-400
                    shadow-[0_18px_40px_rgba(0,0,0,0.04)]
                    flex
                    "
                >
                    {/* ⭐ CHANGE – single CardContent controlling layout */}
                    <CardContent className="p-8 flex flex-col h-full">
                    {/* icon container */}
                    <div className="flex justify-center mb-6">
                        <div
                        className="
                            h-16 w-16 rounded-2xl
                            bg-gradient-to-b from-amber-400 to-orange-500
                            flex items-center justify-center
                        "
                        >
                        <img
                            src={items.icon}
                            alt="Icon"
                            className="h-8 w-8"
                        />
                        </div>
                    </div>

                    {/* title */}
                    <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                        {items.title}
                    </h2>

                    {/* description */}
                    <p className="text-sm md:text-base text-slate-600 mb-6">
                        {items.description}
                    </p>

                    {/* ⭐ CHANGE – mini green pill at bottom */}
                    <div className="mt-auto flex justify-center">
                        <Badge
                        className="
                            rounded-full px-4 py-2 text-xs md:text-sm
                            border border-emerald-400 bg-emerald-50 text-emerald-600
                        "
                        >
                        {items.mini}
                        </Badge>
                    </div>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </Container>
    </div>
  )
}

export default TheSolution
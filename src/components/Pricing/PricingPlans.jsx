import React from 'react'
import Container from '../layouts/Container'
import { Button } from '../ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'

const pricingCard = [
    {
      name: "Full Time",
      title: "160 Hours Per Month *",
      description: "5000+ Dails Per Month *"  ,
      features: ["160* Hours Per Month", "5000+ * Dials Per Month", "Face to Face Appointments", "Phone Appointments", "Zoom Appointments", "Live Transfers", "Dedicated Caller", "Local Caller ID", "Phone + CRM", "Trainer", "Quality Assurance Representative", "Compliance Officer", "Team Leader", "Coach"],
      buttonText: "Get A Quote",
      highlight: true
    },
    {
      name: "Part Time",
      title: "80 Hours Per Month *",
      description: "2000+ Dails Per Month *"  ,
      features: ["80* Hours Per Month", "2000+ * Dials Per Month", "Face to Face Appointments", "Phone Appointments", "Zoom Appointments", "Live Transfers", "Dedicated Caller", "Local Caller ID", "Phone + CRM", "Trainer", "Quality Assurance Representative", "Compliance Officer", "Team Leader", "Coach"],
      buttonText: "Get A Quote",
    },
    {
      name: "SEO",
      title: "Starting From $495* Per Month",
      description: " ",
      features: ["Starting From $495* Per Month", "Keyword research and analysis (up to 25 keywords)", "On-page SEO for up to 15 pages", "Quality backlink building (15 backlinks/month)", "Monthly SEO performance reports with insights", "Google Analytics and Search Console setup & management", "Technical SEO (website audit and implementation of fixes)", "Local SEO optimization (Google My Business management)"],
      buttonText: "Get A Quote",
    },
    {
      name: "Social Media Content Creation",
      title: "Starting From $995 Per Month *",
      description: " ",
      features: ["Starting From $995 Per Month *", "Content creation for up to 4 platforms (e.g., Facebook, Instagram, Twitter, LinkedIn)", "16 posts per month (4 posts per platform)", "Custom images and graphics for posts", "Monthly content calendar with approval process", "Basic community management (responding to comments/messages)", "Monthly performance report and engagement tracking"],
      buttonText: "Get A Quote",
    },
    {
      name: "Website Development",
      title: "Starting From $995 Per Month *",
      description: " ",
      features: ["Starting From $995 Per Month *", "Custom website design (up to 10 pages)", "Mobile-friendly and responsive design", "Basic SEO setup and content optimization", "Integration with social media and Google Analytics", "3 months of website maintenance and updates", "Contact form, blog setup, and custom features", "Ongoing technical support (bug fixes and performance optimization)"],
      buttonText: "Get A Quote",
    },

]

const PricingPlans = () => {
  return (
    // ⭐ CHANGE: wrap section in light background + padding
    <section className="w-full bg-[#f5f7fb] py-12 md:py-16 lg:py-20">
      <Container>
        {/* ⭐ CHANGE: top row – first 3 cards */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pricingCard.slice(0, 3).map((plans, index) => (
              <Card
                key={plans.name}
                className={`
                  rounded-3xl overflow-hidden flex flex-col
                  shadow-md hover:shadow-xl transition-all duration-300 
                  ${
                    index === 0
                      ? // ⭐ CHANGE: featured gradient card for Full Time
                        "bg-[linear-gradient(135deg,#1E293B,#0F172A)] text-white border-none"
                      : "bg-white border border-slate-200"
                  }
                `}
              >
                {/* Header */}
                <CardHeader className="px-6 pt-6 pb-3 relative">
                  {index === 0 && (
                    // ⭐ CHANGE: "Most Popular" pill
                    <div className="absolute -top-4 left-6">
                      <span className="inline-flex items-center rounded-full bg-orange-500 text-white text-xs font-medium px-3 py-1 shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h2
                    className={`text-xl md:text-2xl font-semibold ${
                      index === 0 ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plans.name}
                  </h2>
                  <p
                    className={`mt-1 text-xs md:text-sm ${
                      index === 0 ? "text-white/80" : "text-slate-500"
                    }`}
                  >
                    {plans.subtitle}
                  </p>
                  {plans.highlightLine && (
                    <p
                      className={`text-xs md:text-sm font-semibold ${
                        index === 0 ? "text-orange-300" : "text-orange-500"
                      }`}
                    >
                      {plans.highlightLine}
                    </p>
                  )}
                </CardHeader>

                {/* Inner feature box for the highlighted plan */}
                <CardContent className="px-6 pb-4 flex-1">
                  <div
                    className={`
                      rounded-2xl px-4 py-4 text-sm space-y-2
                      ${
                        index === 0
                          ? "bg-white/5 border border-white/20 text-white/90"
                          : "bg-slate-50 border border-slate-200 text-slate-700"
                      }
                    `}
                  >
                    <ul className="space-y-2">
                      {plans.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs md:text-sm">
                          • <span className="ml-2">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                {/* Footer button */}
                <CardFooter className="px-6 pb-6 mt-auto">
                  <Button
                    asChild
                    variant={index === 0 ? "default" : "outline"}
                    className={`
                      w-full flex items-center justify-center gap-2 rounded-full text-sm md:text-base
                      ${
                        index === 0
                          ? // ⭐ CHANGE: orange CTA on dark card
                            "bg-gradient-to-r from-orange-500 to-amber-400 text-white border-none hover:brightness-110"
                          : "bg-white text-orange-500 border border-orange-300 hover:bg-orange-50"
                      }
                    `}
                  >
                    <Link to="/contactus">
                      {plans.buttonText}
                      <MoveRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* ⭐ CHANGE: second row – last 2 cards side-by-side */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {pricingCard.slice(3).map((plans) => (
              <Card
                key={plans.name}
                className="rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col"
              >
                <CardHeader className="px-6 pt-6 pb-3">
                  <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                    {plans.name}
                  </h2>
                  <p className="mt-1 text-xs md:text-sm text-slate-500">
                    {plans.subtitle}
                  </p>
                </CardHeader>

                <CardContent className="px-6 pb-4 flex-1">
                  <div className="rounded-2xl px-4 py-4 text-sm bg-slate-50 border border-slate-200 text-slate-700 space-y-2">
                    <ul className="space-y-2">
                      {plans.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs md:text-sm">
                          • <span className="ml-2">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="px-6 pb-6 mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full text-sm md:text-base bg-white text-orange-500 border border-orange-300 hover:bg-orange-50 flex items-center justify-center gap-2"
                  >
                    <Link to="/contactus">
                      {plans.buttonText}
                      <MoveRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PricingPlans
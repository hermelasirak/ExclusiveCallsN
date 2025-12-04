import React from 'react'
import Container from '../layouts/Container'
import { Card, CardContent } from '../ui/card'
import CardBgImg from '@/assets/HeroBackground.jpeg'

const reviews =[
    {
        ratings: "⭐️⭐️⭐️⭐️⭐️",
        description: "Happy with my Telemarketer! We get leads every day from Exclusive Calls! We are pleased to have a dedicated telemarketer that can call on a variety of campaigns - including personal insurance prospecting (re-quotes, win backs, cold calls, etc.), commercial insurance prospecting, and current customer insurance review appointment setting. It's great that our telemarketer can modify her script based on the type of campaign that she is working. My salespeople are happy to have the recording of the calls that our telemarketer makes and are pleased by the conversations they hear. Christine A. Allstate.",
        name: "Christine A",
        title: "Happy With My Telemarketer!"
    },
    {
        ratings: "⭐️⭐️⭐️⭐️⭐️",
        description: "I would like to express my gratitude for the great job that my team has done for my business thus far. We have been overwhelmed with appointments, which is a good problem to have.",
        name: "Charline T.",
        title: "Very Pleased With The Appointments"
    },
    {
        ratings: "⭐️⭐️⭐️⭐️⭐️",
        description: "Vanessa and I are VERY pleased with Alex. He is so fast, he doesn't need constant monitoring-- he just goes and figures it out and gets it done. He is very good. We are moving through this huge list of to dos that we had rapidly-- I'm amazed.",
        name: "Christine M.",
        title: "LOVE MY NEW VA!!!!"
    },
    {
        ratings: "⭐️⭐️⭐️⭐️⭐️",
        description: "As a Nationwide Agency owner for the past 5 years my agency has used several of the larger and more expensive Contact Management operations only to be disappointed time and time again. These agencies over promise and under deliver for way too much money. Not only has Exclusive Calling made it a user friendly experience, Moe the owner, is hands on and available to actually talk to make tweaks or overall changes when needed. One suggestion, work with your dedicated telemarketer. Specialize the script. Remember they are an extension of your office as an employee representing you. We have been clients for nearly 2 years and plan to stay. They have several billing options available to fit your budget. If you are looking to grow commercially give Moe a call.",
        name: "David Noma",
        title: "Excellent Communication And Customer Services!"
    },
    {
        ratings: "⭐️⭐️⭐️⭐️⭐️",
        description: "Ally is doing a excellent job prospecting for me. Thanks to a great 2017 looking forward to a better 2018 using your services. What I like most about the service is that I have access to all the information in the portal so I can see and hear everything, very transparent. Thank you.",
        name: "Jamal Hernandez",
        title: "Delivered As Promised"
    },
    {
        ratings: "⭐️⭐️⭐️⭐️⭐️",
        description: "Started using their bilingual callers from February of this year to contact businesses after I fired my internal team. I was skeptical at first so I started with one full time caller and now I have 3 Full time callers for my 6 licensed reps. I plan on continuing with Exclusive Calls as part of my 2020 growth plan.",
        name: "Alan Hernandez",
        title: "Commercial Insurance Agent"
    },
    {
        ratings: "⭐️⭐️⭐️⭐️⭐️",
        description: "I've used other vendors in my 12 years in business but nothing comes close to the transparency Exclusive Calls offers.",
        name: "Sally Tillerson",
        title: "Extension Of My Business"
    },
    {
        ratings: "⭐️⭐️⭐️⭐️⭐️",
        description: "I have been using Exclusive Calls for the last 3 months and it has been a very helpful tool to improve the sales of my office. So far they have accomplish what they initially promise me as their service. Their personnel is very professional and put my office in a better position to do closings than most of the competition. I do really recommend them if you are looking for any type of marketing campaign that you are planning to implement on your business.",
        name: "James S.",
        title: "Very Professional"
    },
    {
        ratings: "⭐️⭐️⭐️⭐️⭐️",
        description: "So far so good. We have received quite a number of leads from the service. It is a great alternative to having a staff in house and making calls for you. You get to listen to each call that is made and be prepared for appointments that are set.",
        name: "Shaun Y.",
        title: "Good Appointment Setter"
    },
]

const HomeTestimonial = () => {
  return (
    <div
      className="
        // ⭐ CHANGE: dark gradient background wrapper only, no extra white section
        relative bg-cover bg-center bg-no-repeat w-full
        min-h-[80vh] md:min-h-[90vh] lg:min-h-[100vh] py-16 md:py-20 lg:py-24
      "
      style={{ backgroundImage: `url(${CardBgImg})` }}
    >
      {/* ⭐ CHANGE: remove inner <section bg-[#f5f7fb]> and just use Container */}
      <Container className="h-full flex flex-col items-center">
        <div className="w-full max-w-6xl">
          {/* ⭐ CHANGE – heading block on dark background, white text */}
          <div className="flex flex-col justify-center items-center text-center mt-2 mx-auto gap-3 md:gap-4">
            <div className="max-w-[900px] mb-1">
              <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-5xl text-white font-extrabold">
                What Our Clients Say
              </h1>
            </div>
            <div className="max-w-screen-md">
              <p className="text-xs md:text-sm lg:text-base text-white/80">
                Real results from real sales teams who transformed their pipelines.
              </p>
            </div>
          </div>

          {/* ⭐ CHANGE – responsive grid, cards sit on the same dark gradient */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 py-10">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="
                  rounded-[28px]
                  bg-[linear-gradient(135deg,#1E293B,#312E81)]
                  border border-white/20
                  shadow-xl
                  text-white
                  flex flex-col
                  hover:-translate-y-1 hover:shadow-2xl transition-all
                "
              >
                <CardContent className="p-6 md:p-7 flex flex-col h-full">
                  {/* ⭐ CHANGE – rating row + quote marks, top-right */}
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-sm md:text-base">{review.ratings}</p>
                    <span className="text-2xl md:text-3xl text-white/40">
                      ❝
                    </span>
                  </div>

                  {/* ⭐ CHANGE – description with max height + scroll when needed */}
                  <p className="text-xs md:text-sm lg:text-[15px] text-white/90 leading-relaxed mb-4 max-h-40 overflow-y-auto pr-1">
                    {review.description}
                  </p>

                  {/* ⭐ CHANGE – footer with circular initials + name + title */}
                  <div className="mt-auto flex items-center gap-3 pt-3 border-t border-white/10">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-orange-400 to-amber-400 text-xs font-bold">
                      {review.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .slice(0, 2)}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs md:text-sm font-semibold text-white">
                        {review.name}
                      </span>
                      <span className="text-[11px] md:text-xs text-white/80">
                        {review.title}
                      </span>
                    </div>
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

export default HomeTestimonial
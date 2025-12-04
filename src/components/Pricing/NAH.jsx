import React from 'react'
import Container from '../layouts/Container'
import { Card, CardContent } from '../ui/card'

import PhoneImg from '@/assets/Phone.svg'
import EmailImg from '@/assets/Email.svg'
import LocationImg from '@/assets/Location.svg'

const contactCards = [
    {
        icon: PhoneImg,
        title: 'Phone',
        description: '+1 (888) 484-3515'
    },
    {
        icon: EmailImg,
        title: 'Email',
        description: 'info@exclusivecalls.com'
    },
    {
        icon: LocationImg,
        title: 'Location',
        description: '1309 Coffeen Ave Suite 2397, Sheridan, WY 82801'
    },
]

const NAH = () => {
  return (
    <>
      {/* ⭐ CHANGE: move background/height off Container and onto a wrapper section */}
      <section className="w-full bg-white py-16 md:py-20 lg:py-24">
        <Container>
          {/* ⭐ CHANGE: remove fixed height, center content with flex + gap */}
          <div className="flex flex-col items-center text-center gap-6 md:gap-8">
            {/* Heading */}
            <div className="max-w-[700px]">
              {/* ⭐ CHANGE: heading color and responsive sizes */}
              <h1 className="scroll-m-20 text-3xl md:text-6xl lg:text-7xl font-extrabold text-[#0843a1]">
                Need Any Help?
              </h1>
            </div>

            {/* Subtext */}
            <div className="max-w-xl">
              {/* ⭐ CHANGE: copy & color to match design */}
              <p className="text-sm md:text-base lg:text-lg text-slate-600">
                Call us or message us, and we will respond as soon as possible.
              </p>
            </div>

            {/* ⭐ CHANGE: responsive grid for contact cards, centered width */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
              {contactCards.map((contacts, index) => (
                <Card
                  key={index}
                  className="
                    rounded-[24px] bg-white/50 border border-slate-100
                    shadow-md flex items-stretch
                    hover:shadow-xl hover:-translate-y-1 transition-all
                  "
                >
                  <CardContent className="w-full p-6 md:p-8 flex flex-col items-center text-center gap-3">
                    {/* ⭐ CHANGE: icon inside orange pill */}
                    <div className="inline-flex items-center justify-center rounded-2xl  p-3">
                      <img
                        src={contacts.icon}
                        className="w-20 h-20"
                        alt={contacts.title}
                      />
                    </div>

                    {/* Title */}
                    <h2 className="text-sm md:text-base font-semibold text-slate-800">
                      {contacts.title}
                    </h2>

                    {/* Description */}
                    <p className="text-xs md:text-sm lg:text-base text-slate-700">
                      {contacts.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default NAH
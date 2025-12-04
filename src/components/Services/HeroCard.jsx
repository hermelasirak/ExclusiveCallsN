import React from 'react'
import Container from '../layouts/Container'
import { Card, CardContent } from '../ui/card'

const cardContent = [
    {
        title: "3x",
        description: "Higher Customer Engagement *"
    },
    {
        title: "+45%",
        description: "Conversion Rate *"
    },
    {
        title: "<1hr",
        description: "Response Time *"
    }
]

const HeroCard = () => {
  return (
    <div>
      <Container>
            {/* ⭐ CHANGE: remove extra wrappers and make cards full-width & centered */}
            <div className="py-8 md:py-10">
            <div
                className="
                grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6
                "
            >
                {cardContent.map((item, index) => (
                <Card
                    key={index}
                    className="
                    // ⭐ CHANGE: glassy metric cards like design
                    rounded-3xl bg-white/10 border border-white/15
                    shadow-xl backdrop-blur-xl
                    px-6 py-8 md:px-8 md:py-10
                    flex flex-col items-center justify-center text-center
                    text-white
                    "
                >
                    <CardContent className="p-0 flex flex-col items-center">
                    {/* ⭐ CHANGE: bigger orange number, centered */}
                    <h1 className="font-extrabold text-3xl md:text-4xl text-orange-400 mb-2">
                        {item.title}
                    </h1>
                    <p className="font-semibold text-xs md:text-sm lg:text-base text-white/90">
                        {item.description}
                    </p>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </Container>
    </div>
  )
}

export default HeroCard
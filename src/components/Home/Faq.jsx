import React from 'react'
import Container from '../layouts/Container'
import { Accordion , AccordionItem, AccordionContent, AccordionTrigger} from '../ui/accordion'
import { Badge } from '../ui/badge'

const questions = [
    {
        id: "ques1",
        question: "How do I know the appointments will be qualified?",
        answer: "Appointments are set with decision-makers who have budget, authority, and a real business need. Each meeting is pre-qualifies through our vetting process to ensure it aligns with your target criteria. Our focus is on quality, so your team spends time with prospects who can actually move forward."
    },
    {
        id: "ques2",
        question: "What if my industry is too nicheor technical?",
        answer: "Our outreach process adapts to niche and technical industries. We take time to understand your product, value proposition and target personas before launching any campaigns. This allows us to speak your prospects' language and engage the right type of decision-makers who fit your specific market."
    },
    {
        id: "ques3",
        question: "How is this different from hiring an in-house BDR?",
        answer: "An in-house BDR requires recruiting, training, management, and overhead costs. Exclusive Calls handles all of that externally- research, outreach, messaging, and scheduling- while you stay focused on closing deals. You get the benefit of a trained team, data and system without having to build or manage them internally."
    },
    {
        id: "ques4",
        question: "What if we already have a BDR but they're underperforming?",
        answer: "We can complement or support your existing BDR team by increasing their appointment volume and optimize their workflow. Many clients use us to identify what's holding back their pipeline, whether it's list quality, messaging, or targeting and to provide a consistent flow of qualified meetings while they improve internal performance."
    },
    {
        id: "ques5",
        question: "Do you provide the contact lists, or do we?",
        answer: "We don't sell or provide data directly, but we can point you towards reputable data providers our clients have worked with and found success using. If you already have contact lists, we can help you review and refine them to make sure they align with your target buyer profiles and outreach goals."
    },
    {
        id: "ques6",
        question: "What is your cancellation policy?",
        answer: "We offer both month-to-month plans and longer-term options depending on your goals and commitment level. This flexibility allows you to choose the arrangement that best fits your needs while maintaining full control over your engagement timeline."
    },
]

const Faq = () => {
  return (
    // ⭐ CHANGE – wrap section with light background like the design
    <section className="w-full bg-[#f5f7fb]">
      <Container>
            {/* ⭐ CHANGE – center content & adjust spacing */}
            <div className="flex flex-col items-center py-16 md:py-20 lg:py-24 px-4 gap-8">
                {/* Heading block */}
                <div className="flex flex-col items-center text-center gap-3 md:gap-4 max-w-3xl">
                    {/* ⭐ CHANGE – orange pill badge */}
                    <Badge
                    className="
                        rounded-full px-4 py-1 text-xs md:text-sm
                        border border-orange-300 bg-orange-50 text-orange-500
                    "
                    >
                    Common Questions
                    </Badge>

                    {/* ⭐ CHANGE – heading font size / color like screenshot */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0843a1]">
                    Frequently Asked Questions
                    </h1>

                    {/* ⭐ CHANGE – softer subtitle */}
                    <p className="text-sm md:text-base lg:text-lg text-slate-600">
                    Everything you need to know about how we work and what makes us
                    different.
                    </p>
                </div>

                {/* ⭐ CHANGE – center accordion and style items as white pill rows */}
                <div className="w-full max-w-3xl mt-6">
                    <Accordion type="single" collapsible className="space-y-3">
                    {questions.map((item) => (
                        <AccordionItem
                        key={item.id}
                        value={item.id}
                        className="
                            // outer “pill” style for each row
                            rounded-3xl border border-slate-100 bg-white
                            shadow-sm hover:shadow-md hover:-translate-y-[1px]
                            transition-all
                        "
                        >
                        <AccordionTrigger
                            className="
                            text-left px-5 md:px-8 py-4 md:py-5
                            text-sm md:text-base lg:text-lg font-medium
                            text-slate-800
                            "
                        >
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent
                            className="
                            text-slate-600 text-sm md:text-base px-5 md:px-8 pb-5
                            "
                        >
                            {item.answer}
                        </AccordionContent>
                        </AccordionItem>
                    ))}
                    </Accordion>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Faq
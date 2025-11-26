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
        question: "How do I know the appointments will be qualified?",
        answer: "Appointments are set with decision-makers who have budget, authority, and a real business need. Each meeting is pre-qualifies through our vetting process to ensure it aligns with your target criteria. Our focus is on quality, so your team spends time with prospects who can actually move forward."
    },
    {
        id: "ques3",
        question: "How do I know the appointments will be qualified?",
        answer: "Appointments are set with decision-makers who have budget, authority, and a real business need. Each meeting is pre-qualifies through our vetting process to ensure it aligns with your target criteria. Our focus is on quality, so your team spends time with prospects who can actually move forward."
    },
    {
        id: "ques4",
        question: "How do I know the appointments will be qualified?",
        answer: "Appointments are set with decision-makers who have budget, authority, and a real business need. Each meeting is pre-qualifies through our vetting process to ensure it aligns with your target criteria. Our focus is on quality, so your team spends time with prospects who can actually move forward."
    },
    {
        id: "ques5",
        question: "How do I know the appointments will be qualified?",
        answer: "Appointments are set with decision-makers who have budget, authority, and a real business need. Each meeting is pre-qualifies through our vetting process to ensure it aligns with your target criteria. Our focus is on quality, so your team spends time with prospects who can actually move forward."
    },
    {
        id: "ques6",
        question: "How do I know the appointments will be qualified?",
        answer: "Appointments are set with decision-makers who have budget, authority, and a real business need. Each meeting is pre-qualifies through our vetting process to ensure it aligns with your target criteria. Our focus is on quality, so your team spends time with prospects who can actually move forward."
    },
]

const Faq = () => {
  return (
    <Container>
        <div className='flex flex-col py-12 px-6 gap-4'>
            <div className='justify-center items-center'>
                <Badge className="opacity-30 bg-amber-700/60 mb-10 text-black">Common Questions</Badge>
                <div>
                    <h1 className='text-7xl font-extrabold mb-4 text-blue-900'>Frequently Asked Questions</h1>
                    <p className='text-muted-foreground text-xl'>
                        Everything you need to know about how we work and what makes us different.
                    </p>
                </div>
            </div>
            <div>
                <Accordion type="single" collapsible className="w-full">
                    {questions.map((item) =>(
                        <AccordionItem key={item.id} value={item.id}>
                            <AccordionTrigger className="text-start">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground px-1">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    </Container>
  )
}

export default Faq
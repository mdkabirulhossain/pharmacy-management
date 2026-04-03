"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    question: "Do I need a credit card to start the free trial?",
    answer: "No, you don't need a credit card. You can start with our Starter plan for free and upgrade only when you need more features or capacity."
  },
  {
    question: "Can I manage multiple pharmacy branches with one account?",
    answer: "Yes, our Pro and Enterprise plans allow you to manage and synchronize multiple branches with localized inventory and centralized reporting."
  },
  {
    question: "How long does it take to set up PharmaFlow?",
    answer: "You can set up your basic pharmacy operations in minutes. Importing inventory and adding staff typically takes less than an hour."
  },
  {
    question: "Is PharmaFlow compliant with local health regulations?",
    answer: "PharmaFlow is designed to be highly configurable and adaptable to local pharmacy standards. We suggest consulting with your local pharmacy board for specific compliance needs."
  },
  {
    question: "What kind of support do you provide?",
    answer: "Starter users have access to our self-service knowledge base. Pro users receive priority email support, and Enterprise customers have dedicated 24/7 phone and account manager support."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none text-sm font-semibold">Self Service</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
             Get quick answers to common questions about PharmaFlow's setup, pricing, and features.
          </p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="bg-card border rounded-2xl shadow-sm p-8"
        >
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0 py-2">
                <AccordionTrigger className="text-left text-lg font-bold hover:text-primary transition-colors focus:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

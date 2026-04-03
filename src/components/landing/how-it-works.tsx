"use client"

import { motion } from "framer-motion"
import { UserPlus, PlusSquare, Rocket } from "lucide-react"

const steps = [
  {
    title: "Sign Up",
    description: "Create your free account in seconds. No credit card required to get started with our starter plan.",
    icon: UserPlus,
    step: "01"
  },
  {
    title: "Add Products & Staff",
    description: "Import your inventory list and invite your team. Set up roles and starting stock levels in minutes.",
    icon: PlusSquare,
    step: "02"
  },
  {
    title: "Start Selling & Managing",
    description: "Run your daily sales, track inventory, and get insights on your pharmacy performance instantly.",
    icon: Rocket,
    step: "03"
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get your pharmacy up and running with PharmaFlow in three simple steps.
          </p>
        </div>

        <div className="relative group/steps max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border hidden md:block -translate-y-1/2 -z-10 group-hover/steps:bg-primary/20 transition-colors duration-500"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center bg-background px-4"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8 border-4 border-background shadow-xl hover:scale-110 transition-transform cursor-default relative">
                  <step.icon className="h-10 w-10 text-primary" />
                  <span className="absolute -top-2 -right-2 text-xs font-bold leading-none py-1 px-1.5 rounded-full bg-primary text-primary-foreground border-2 border-background">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

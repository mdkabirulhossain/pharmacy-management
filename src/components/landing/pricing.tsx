"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "For small local pharmacies starting their digital journey.",
    features: [
      "Manage up to 500 products",
      "Single pharmacy branch",
      "Sales & POS system",
      "Basic inventory alerts",
      "1 staff account"
    ],
    notIncluded: [
       "Prescription history",
       "Advanced analytics",
       "Custom reporting",
       "Multi-branch sync"
    ],
    cta: "Start for Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    description: "Perfect for growing pharmacies with more complex needs.",
    features: [
      "Manage up to 5,000 products",
      "Up to 3 pharmacy branches",
      "Full Prescription Management",
      "Advanced inventory alerts",
      "Unlimited staff accounts",
      "Priority Email Support",
      "Stripe & Email integrations"
    ],
    notIncluded: [
       "Custom API access",
       "Dedicated Account Manager"
    ],
    cta: "Start 14-day Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for pharmacy chains and hospitals.",
    features: [
      "Unlimited products & branches",
      "Prescription interactions sync",
      "Full hospital system integration",
      "Custom analytics & BI",
      "Dedicated account manager",
      "24/7 Phone & Priority Support",
      "SLA guarantee"
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-3 py-1 bg-primary/10 text-primary border-none text-sm font-semibold">Pricing</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparent pricing that grows with your business. Choose the best plan for your pharmacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className={`relative flex flex-col w-full h-full border-none shadow-sm transition-all duration-300 hover:shadow-xl ${plan.popular ? 'border-2 border-primary shadow-primary/10 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary px-3 py-1 rounded-full text-xs font-bold text-primary-foreground tracking-wide uppercase">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base h-12">{plan.description}</CardDescription>
                  <div className="pt-6 flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                    {plan.period && <span className="text-xl text-muted-foreground ml-1">{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 opacity-50">
                        <X className="h-5 w-5 text-muted-foreground shrink-0" />
                        <span className="text-sm font-medium line-through decoration-muted-foreground decoration-1 leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button variant={plan.popular ? "default" : "outline"} className="w-full h-12 text-base font-semibold transition-all">
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

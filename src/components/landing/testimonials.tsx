"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    quote: "PharmaFlow has completely transformed how we manage our inventory. No more manual stock counts or surprising expiries. It's a game-changer!",
    name: "Dr. Sarah Johnson",
    role: "Chief Pharmacist",
    pharmacy: "Johnson's Community Pharmacy"
  },
  {
    quote: "The interface is so clean and easy to use. My staff picked it up in less than a day. The reporting features are exactly what we needed to grow.",
    name: "Michael Chen",
    role: "Pharmacy Owner",
    pharmacy: "Starlight Wellness Drugs"
  },
  {
    quote: "Manage multi-branch inventory with absolute ease. The prescription tracking is reliable and keeps our patient records organized and secure.",
    name: "Dr. Elena Rodriguez",
    role: "Operations Manager",
    pharmacy: "Rodriguez Medical Centers"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">Testimonials</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Pharmacists Everywhere</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how PharmaFlow is helping pharmacies across the country streamline their operations and delight their patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-sm bg-card hover:shadow-xl transition-all duration-300 group">
                <CardContent className="pt-8 pb-8 px-8">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform" />
                    ))}
                  </div>
                  <Quote className="h-10 w-10 text-primary/20 mb-4 ml-[-10px]" />
                  <p className="text-lg italic mb-8 relative z-10 leading-relaxed text-card-foreground">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex flex-col border-t pt-6">
                    <span className="text-base font-bold uppercase tracking-wide">{testimonial.name}</span>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm text-muted-foreground font-medium">
                       <span>{testimonial.role}</span>
                       <span className="hidden sm:block text-primary/30">•</span>
                       <span className="text-primary/70">{testimonial.pharmacy}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

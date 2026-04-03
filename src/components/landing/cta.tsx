"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
           className="bg-primary rounded-3xl p-12 md:p-24 shadow-2xl overflow-hidden relative"
        >
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-6xl font-extrabold text-primary-foreground mb-6 leading-tight">
              Start Managing Your Pharmacy <span className="text-accent underline underline-offset-8">Smarter Today</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Ready to take your operations to the next level? Join over 1,000+ pharmacies using PharmaFlow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold group">
                Get Started Free <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white transition-all">
                Request a Custom Demo
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-2">
               <div className="flex">
                  {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-accent text-accent" />)}
               </div>
               <span className="text-sm text-primary-foreground/70 font-medium">Trusted by 10k+ users worldwide.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-[120px] pb-[80px]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 mb-4 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              Reliable Solutions for Your Pharmacy
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Smart Pharmacy Management <br />
              <span className="text-primary italic">Made Simple</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              The ultimate SaaS solution to manage your inventory, sales, prescriptions, and detailed reports — all in one modern, streamlined platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base group">
                <Play className="mr-2 h-5 w-5 fill-current group-hover:scale-110 transition-transform" /> 
                Book Demo
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-card border rounded-xl shadow-2xl overflow-hidden aspect-video lg:aspect-[16/9]">
            <Image
              src="/dashboard-hero.png"
              alt="Pharmacy Dashboard Management"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Floating elements for visual interest */}
          <div className="absolute -left-4 -top-4 bg-background border p-4 rounded-lg shadow-lg hidden md:block animate-bounce-slow">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                   <div className="w-4 h-4 rounded-full bg-green-500"></div>
                </div>
                <div>
                   <p className="text-xs font-bold">New Sale</p>
                   <p className="text-[10px] text-muted-foreground">Order received #124</p>
                </div>
             </div>
          </div>
          <div className="absolute -right-4 -bottom-4 bg-background border p-4 rounded-lg shadow-lg hidden md:block animate-bounce-slow delay-500">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-600 font-bold text-xs">+12%</div>
                <div>
                   <p className="text-xs font-bold">Revenue Growth</p>
                   <p className="text-[10px] text-muted-foreground">Monthly growth</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -ml-96 -mt-24 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
    </section>
  )
}

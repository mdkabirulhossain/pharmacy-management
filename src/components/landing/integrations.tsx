"use client"

import { motion } from "framer-motion"
import { CreditCard, Cloud, Mail, Zap, ShieldCheck, Database } from "lucide-react"

const integrations = [
  { name: "Stripe", icon: CreditCard, color: "text-[#635BFF]", bg: "bg-[#635BFF]/10", tag: "Payments" },
  { name: "Cloudinary", icon: Cloud, color: "text-[#3448C5]", bg: "bg-[#3448C5]/10", tag: "Media" },
  { name: "SendGrid", icon: Mail, color: "text-[#00B2E3]", bg: "bg-[#00B2E3]/10", tag: "Email" },
  { name: "Prisma", icon: Database, color: "text-[#2D3748]", bg: "bg-[#2D3748]/10", tag: "Database" },
  { name: "Auth0", icon: ShieldCheck, color: "text-[#EB5424]", bg: "bg-[#EB5424]/10", tag: "Auth" },
  { name: "Zapier", icon: Zap, color: "text-[#FF4A00]", bg: "bg-[#FF4A00]/10", tag: "Workflow" }
]

export function Integrations() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Integrated with Your Workflow</h2>
          <p className="text-muted-foreground text-lg">
            Connect PharmaFlow with your favorite tools to streamline payments, communication, and reporting.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {integrations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-background p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className={`${item.bg} w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:rotate-12`}>
                <item.icon className={`h-8 w-8 ${item.color}`} />
              </div>
              <span className="text-base font-bold mb-1">{item.name}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{item.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { 
  Package, 
  CreditCard, 
  ClipboardList, 
  BarChart3, 
  Network, 
  UserRoundCheck,
  AlertTriangle,
  History
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const features = [
  {
    title: "Inventory Management",
    description: "Real-time stock tracking with intelligent expiry alerts and automated reordering suggestions.",
    icon: Package,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Sales & Billing",
    description: "Fast POS system with integrated digital invoicing, tax calculation, and various payment methods.",
    icon: CreditCard,
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    title: "Prescription Management",
    description: "Digitize and track patient prescriptions. Integrated drug interaction checks and history.",
    icon: ClipboardList,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Reports & Analytics",
    description: "Deep insights into your sales, revenue, and inventory health with visual charts and custom reports.",
    icon: BarChart3,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Multi-branch Support",
    description: "Manage multiple pharmacy locations from a single dashboard. Synchronize stock across branches.",
    icon: Network,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  },
  {
    title: "Role-based Access",
    description: "Secure your data with granular permissions for owners, managers, and pharmacists.",
    icon: UserRoundCheck,
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features for Modern Pharmacies</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to streamline your pharmacy operations and provide exceptional patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <div className={`${feature.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

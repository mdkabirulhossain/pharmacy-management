"use client"

import Link from "next/link"
import { PlusSquare, Globe, Shield, Activity, Heart, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "Demo", href: "#demo" }
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Documentation", href: "#docs" },
      { name: "API Reference", href: "#api" },
      { name: "Community", href: "#community" },
      { name: "Partner Program", href: "#partners" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Press", href: "#press" },
      { name: "Careers", href: "#careers" },
      { name: "Privacy Policy", href: "#privacy" }
    ]
  }
]

export function Footer() {
  return (
    <footer className="bg-background border-t pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <PlusSquare className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight">PharmaFlow</span>
            </Link>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We empower modern pharmacies with the tools they need to streamline operations and focus on what matters most: patient care and community health.
            </p>
            <div className="flex gap-4">
              {[Globe, Shield, Activity, Heart].map((Icon, i) => (
                <Button key={i} variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                   <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
            
            <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                   <MapPin className="h-5 w-5 text-primary" />
                   <span>123 Medical Plaza, San Francisco, CA 94103</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                   <Phone className="h-5 w-5 text-primary" />
                   <span>+1 (888) PHARMA-FLOW</span>
                </div>
            </div>
          </div>

          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="font-bold text-lg uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary">
                       {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="lg:col-span-5 border-t pt-16 mt-16">
             <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Stay healthy and informed.</h3>
                  <p className="text-muted-foreground mb-8 text-lg">Subscribe to our newsletter for the latest pharmacy management tips and product updates.</p>
                  <form className="flex gap-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
                     <Input placeholder="Enter your email" className="h-12 bg-muted/50 focus-visible:ring-primary shadow-sm" />
                     <Button className="h-12 px-6 font-bold">Subscribe</Button>
                  </form>
                </div>
                <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                   <p>© 2026 PharmaFlow Solutions Inc. All rights reserved.</p>
                   <p className="flex gap-6 mt-2">
                       <Link href="#terms" className="hover:text-primary underline-offset-4 hover:underline">Terms of Service</Link>
                       <Link href="#privacy" className="hover:text-primary underline-offset-4 hover:underline">Privacy Policy</Link>
                       <Link href="#cookies" className="hover:text-primary underline-offset-4 hover:underline">Cookie Policy</Link>
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

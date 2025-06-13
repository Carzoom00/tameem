"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, BarChart3, Clock, Coins, Building, Users } from "lucide-react"

const benefits = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Investments",
    description: "Bank-level security and compliance for all transactions and investments.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Higher Returns",
    description: "Access to premium properties with historically higher ROI than traditional investments.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Quick Liquidity",
    description: "Secondary market allows for faster exits compared to traditional real estate.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Lower Minimums",
    description: "Start investing with lower capital requirements through fractional ownership.",
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Premium Properties",
    description: "Exclusive access to high-value properties not available on other platforms.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Management",
    description: "Professional property management and investment oversight.",
  },
]

export default function WhyTameem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="why-tameem" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Tameem</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're revolutionizing real estate investment with our premium platform.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-6 rounded-xl border border-gray-200 overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Background gradient that appears on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <div className="bg-black text-white p-2 rounded-lg inline-block mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

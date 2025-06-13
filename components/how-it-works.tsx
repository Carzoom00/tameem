"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ListChecks, Users, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: <ListChecks className="h-10 w-10" />,
    title: "List Your Project",
    description: "Submit your real estate project for review by our investment team.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "We Manage Investors",
    description: "Our platform handles investor relations, documentation, and compliance.",
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "You Raise Capital",
    description: "Secure funding from our network of qualified investors.",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes real estate investment simple and accessible.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="bg-black text-white p-3 rounded-lg inline-block mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

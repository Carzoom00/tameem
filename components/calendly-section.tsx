"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

export default function CalendlySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    setShowWidget(true);
  }, []);

  return (
    <section id="book-call" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule an Introduction Call</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Speak with our investment specialists to learn more about how Tameem can help you achieve your investment
            goals.
          </p>

          <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
            {/* Calendly inline widget */}
            {showWidget && (
              <>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/osamakarzoon1/30min"
                  style={{ minWidth: "320px", height: "630px" }}
                ></div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

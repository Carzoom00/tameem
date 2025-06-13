"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div
            className="text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Tameem
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#how-it-works" className="text-sm font-medium hover:text-gray-600 transition-colors">
            How It Works
          </Link>
          <Link href="#why-tameem" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Why Tameem
          </Link>
          <Link href="#book-call" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Book a Call
          </Link>
          <Button variant="outline" className="ml-4">
            Login
          </Button>
          <Button>Join Waitlist</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#how-it-works"
              className="text-sm font-medium py-2 hover:text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#why-tameem"
              className="text-sm font-medium py-2 hover:text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Tameem
            </Link>
            <Link
              href="#book-call"
              className="text-sm font-medium py-2 hover:text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Call
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button className="w-full">Join Waitlist</Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { TooltipToggle } from "./tooltip-toggle"

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const setActiveSection = (section: string) => {
    // This will update the parent component's state
    if (activeSection !== section) {
      // Only update if needed
      document.dispatchEvent(new CustomEvent("sectionChange", { detail: section }))
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Set active section immediately for better UX
      setActiveSection(sectionId)

      // Scroll with a slight delay to ensure state update
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 70, // Adjusted offset
          behavior: "smooth",
        })
      }, 10)
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = ["home", "about", "projects", "skills", "testimonials", "blog", "contact"]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold gradient-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Clarisse
          </motion.div>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`nav-link ${activeSection === item ? "active text-primary" : ""}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item)
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                data-tooltip-id="nav-tooltip"
                data-tooltip-content={`Go to ${item.charAt(0).toUpperCase() + item.slice(1)}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}

            <div className="flex items-center ml-4 space-x-2">
              <TooltipToggle />
              <ThemeToggle />

              <motion.a
                href="https://github.com/VoxDroid"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                data-tooltip-id="social-tooltip"
                data-tooltip-content="Visit GitHub"
              >
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/20 hover:text-primary">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </motion.a>
            </div>
          </nav>

          <div className="flex items-center space-x-2 md:hidden">
            <TooltipToggle />
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-30 bg-background/95 backdrop-blur-sm md:hidden pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-xl ${activeSection === item ? "text-primary font-semibold" : ""}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item)
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            <a href="https://github.com/VoxDroid" target="_blank" rel="noopener noreferrer" className="mt-4">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/20 hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
          </nav>
        </motion.div>
      )}
    </>
  )
}


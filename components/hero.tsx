"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github } from "lucide-react"

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15),transparent_65%)]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center md:text-left md:flex md:items-center md:justify-between">
        <div className="md:w-3/5">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="gradient-text">Clarisse</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl mb-6 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Full Stack Developer & Rust Enthusiast
          </motion.h2>

          <motion.p
            className="text-lg mb-8 max-w-xl text-muted-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building elegant, high-performance applications with modern technologies. Passionate about Rust, web
            development, and creating seamless user experiences.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              className="btn-primary"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  // Dispatch the same custom event
                  document.dispatchEvent(new CustomEvent("sectionChange", { detail: "contact" }))

                  // Scroll to contact section
                  setTimeout(() => {
                    window.scrollTo({
                      top: contactSection.offsetTop - 70,
                      behavior: "smooth",
                    })
                  }, 10)
                }
              }}
            >
              Get in Touch
            </Button>

            <Button variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
              <a href="https://github.com/Clarrise" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="hidden md:block md:w-2/5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-300 rounded-full blur-xl opacity-75 animate-pulse"></div>
            <div className="relative bg-card rounded-full p-2 shadow-xl">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="/Clarisse/Clarisse.png"
                  alt="Clarisse"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button variant="ghost" size="icon" className="rounded-full animate-bounce" onClick={scrollToAbout}>
          <ArrowDown className="h-6 w-6 text-primary" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </motion.div>
    </div>
  )
}


"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "testimonials", "blog", "contact"]
      const scrollPosition = window.scrollY + 200

      // Find the last section that has been scrolled past
      let currentSection = sections[0]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const offsetTop = element.offsetTop

        if (scrollPosition >= offsetTop) {
          currentSection = section
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleSectionChange = (e: CustomEvent) => {
      setActiveSection(e.detail)
    }

    document.addEventListener("sectionChange", handleSectionChange as EventListener)

    return () => {
      document.removeEventListener("sectionChange", handleSectionChange as EventListener)
    }
  }, [])

  return (
    <main className="min-h-screen relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <Navbar activeSection={activeSection} />

      <section id="home">
        <Hero />
      </section>

      <section id="about" className="py-20 section-container">
        <About />
      </section>

      <section
        id="projects"
        className="py-20 bg-black/30 dark:bg-black/30 light:bg-pink-50/50 animated-bg section-container"
      >
        <Projects />
      </section>

      <section id="skills" className="py-20 section-container">
        <Skills />
      </section>

      <section
        id="testimonials"
        className="py-20 bg-black/30 dark:bg-black/30 light:bg-pink-50/50 animated-bg section-container"
      >
        <Testimonials />
      </section>

      <section id="blog" className="py-20 section-container">
        <Blog />
      </section>

      <section
        id="contact"
        className="py-20 bg-black/30 dark:bg-black/30 light:bg-pink-50/50 animated-bg section-container"
      >
        <Contact />
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}


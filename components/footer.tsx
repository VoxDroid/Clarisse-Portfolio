"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Code, Coffee } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/VoxDroid", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:voxdroid@github.com", label: "Email" },
  ]

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold gradient-text mb-2">Clarisse</div>
            <p className="text-muted-foreground text-sm">&copy; {currentYear} All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-right text-sm text-muted-foreground"
          >
            <p className="flex items-center justify-center md:justify-end">
              <Code className="h-4 w-4 mr-1 text-primary" /> <a href="https://github.com/VoxDroid">github.com/VoxDroid</a>
            </p>
          </motion.div>

          <motion.div
            className="flex space-x-4 mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label={link.label}
                data-tooltip-id="social-tooltip"
                data-tooltip-content={`Visit ${link.label}`}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}


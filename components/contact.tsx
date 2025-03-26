"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "voxdroid@github.com",
      link: "mailto:voxdroid@github.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Tokyo, Japan",
      link: null,
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        className="section-heading text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <p className="text-muted-foreground mb-8">
            I'm always open to new opportunities, collaborations, or just a friendly chat about technology. Feel free to
            reach out through the form or via my contact information.
          </p>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex items-start group hover:bg-primary/5 p-3 rounded-lg transition-all duration-300 -ml-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                data-tooltip-id="global-tooltip"
                data-tooltip-content={item.link ? `Contact via ${item.title}` : item.value}
              >
                <div className="mr-4 mt-1 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-muted-foreground hover:text-primary transition-colors relative overflow-hidden group-hover:underline"
                    >
                      <span className="relative z-10">{item.value}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-500">
            <CardContent className="p-6">
              {isSubmitted ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                    <Send className="h-8 w-8 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="contact-input focus:ring-primary/50 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="contact-input focus:ring-primary/50 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="contact-input resize-none focus:ring-primary/50 focus:border-primary/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary relative overflow-hidden group glow-effect"
                    disabled={isSubmitting}
                    data-tooltip-id="global-tooltip"
                    data-tooltip-content={isSubmitting ? "Sending message..." : "Send your message"}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}


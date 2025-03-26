"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        "Clarisse is an exceptional developer who delivered our Rust-based backend system ahead of schedule. The performance improvements were remarkable, and her communication throughout the project was excellent.",
      author: "VoxDroid",
      position: "CTO, TechInnovate",
      avatar: "/Clarisse/Clarisse.png",
    },
    {
      id: 2,
      content:
        "Working with Clarisse on our Next.js project was a pleasure. She has a keen eye for design and user experience, while also ensuring the code is clean, maintainable, and performant.",
      author: "VoxDroid",
      position: "Product Manager, DesignHub",
      avatar: "/Clarisse/Clarisse.png",
    },
    {
      id: 3,
      content:
        "Clarisse's expertise in Rust helped us optimize our data processing pipeline, resulting in a 40% reduction in processing time. Her ability to explain complex concepts in simple terms was invaluable.",
      author: "VoxDroid",
      position: "Lead Engineer, DataFlow",
      avatar: "/Clarisse/Clarisse.png",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        className="section-heading text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Testimonials
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute -top-10 -left-10 text-primary opacity-20">
          <Quote size={80} />
        </div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8">
              <div className="min-h-[250px] flex flex-col items-center justify-center text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <p className="text-lg md:text-xl mb-8 italic">"{testimonials[activeIndex].content}"</p>
                    <Avatar className="h-16 w-16 mb-4 border-2 border-primary/20">
                      <AvatarImage src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].author} />
                      <AvatarFallback>{testimonials[activeIndex].author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonials[activeIndex].author}</h3>
                      <p className="text-muted-foreground">{testimonials[activeIndex].position}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/20 hover:bg-primary/10"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              data-tooltip-id="testimonial-tooltip"
              data-tooltip-content="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-6 bg-primary" : "w-2 bg-primary/30"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  data-tooltip-id="testimonial-tooltip"
                  data-tooltip-content={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/20 hover:bg-primary/10"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              data-tooltip-id="testimonial-tooltip"
              data-tooltip-content="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


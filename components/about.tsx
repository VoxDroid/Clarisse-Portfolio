"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Cpu, Globe, Rocket } from "lucide-react"

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  const features = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Full Stack Development",
      description: "Building complete web applications from frontend to backend with modern technologies.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "Rust Programming",
      description: "Leveraging Rust for high-performance, memory-safe systems and web applications.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Web Technologies",
      description: "Creating responsive, accessible, and interactive web experiences with Next.js and React.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, efficiency, and exceptional user experience.",
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
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg mb-6">
            I'm a passionate developer with expertise in full-stack web development and a special interest in Rust
            programming. With a strong foundation in modern web technologies, I create elegant, efficient, and
            user-friendly applications.
          </p>

          <p className="text-lg mb-6">
            My journey in software development began with web technologies, and I've since expanded my skills to include
            systems programming with Rust, allowing me to build high-performance applications that are both reliable and
            secure.
          </p>

          <p className="text-lg">
            I'm constantly learning and exploring new technologies to stay at the cutting edge of software development.
            I believe in writing clean, maintainable code and creating intuitive user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


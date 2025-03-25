"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      title: "Rust Web API",
      description: "A high-performance RESTful API built with Rust and Actix Web framework.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["rust", "backend", "api"],
      github: "#",
      demo: "#",
    },
    {
      title: "Next.js Portfolio",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["next.js", "frontend", "tailwind"],
      github: "#",
      demo: "#",
    },
    {
      title: "Rust CLI Tool",
      description: "A command-line utility built with Rust for efficient file processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["rust", "cli", "tool"],
      github: "#",
      demo: null,
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with Next.js frontend and Rust backend.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["next.js", "rust", "fullstack"],
      github: "#",
      demo: "#",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive data visualization dashboard built with React and D3.js.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["react", "frontend", "data"],
      github: "#",
      demo: "#",
    },
    {
      title: "Rust Game Engine",
      description: "A lightweight 2D game engine written in Rust with WebGL rendering.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["rust", "gamedev", "graphics"],
      github: "#",
      demo: "#",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  const filters = ["all", "rust", "next.js", "frontend", "backend", "fullstack"]

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        className="section-heading text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {filters.map((filter, index) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            className={activeFilter === filter ? "bg-primary" : "hover:bg-primary/10"}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </Button>
        ))}
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="overflow-hidden project-card h-full">
              <div className="aspect-video relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="project-content">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-black/50 border-white/20 hover:bg-black/70"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-black/50 border-white/20 hover:bg-black/70"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


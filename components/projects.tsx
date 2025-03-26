"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, Cpu, Globe, Rocket, Zap, Database } from "lucide-react"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      title: "Rust Web API",
      description: "A high-performance RESTful API built with Rust and Actix Web framework.",
      image: "/Clarisse/Clarisse.png",
      tags: ["rust", "backend", "api"],
      github: "#",
      demo: "#",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      title: "Next.js Portfolio",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
      image: "/Clarisse/Clarisse.png",
      tags: ["next.js", "frontend", "tailwind"],
      github: "#",
      demo: "#",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Rust CLI Tool",
      description: "A command-line utility built with Rust for efficient file processing.",
      image: "/Clarisse/Clarisse.png",
      tags: ["rust", "cli", "tool"],
      github: "#",
      demo: null,
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with Next.js frontend and Rust backend.",
      image: "/Clarisse/Clarisse.png",
      tags: ["next.js", "rust", "fullstack"],
      github: "#",
      demo: "#",
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive data visualization dashboard built with React and D3.js.",
      image: "/Clarisse/Clarisse.png",
      tags: ["react", "frontend", "data"],
      github: "#",
      demo: "#",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Rust Game Engine",
      description: "A lightweight 2D game engine written in Rust with WebGL rendering.",
      image: "/Clarisse/Clarisse.png",
      tags: ["rust", "gamedev", "graphics"],
      github: "#",
      demo: "#",
      icon: <Database className="h-6 w-6" />,
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  const filters = ["all", "rust", "next.js", "frontend", "backend", "fullstack"]

  // Icon mapping for tags
  const tagIcons = {
    rust: <Cpu className="h-4 w-4" />,
    "next.js": <Globe className="h-4 w-4" />,
    frontend: <Code className="h-4 w-4" />,
    backend: <Database className="h-4 w-4" />,
    fullstack: <Rocket className="h-4 w-4" />,
    api: <Zap className="h-4 w-4" />,
    cli: <Code className="h-4 w-4" />,
    tool: <Rocket className="h-4 w-4" />,
    tailwind: <Globe className="h-4 w-4" />,
    gamedev: <Rocket className="h-4 w-4" />,
    graphics: <Zap className="h-4 w-4" />,
    react: <Code className="h-4 w-4" />,
    data: <Database className="h-4 w-4" />,
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
            className={`${
              activeFilter === filter ? "bg-primary" : "hover:bg-primary/10"
            } transition-all duration-300 group relative overflow-hidden`}
            onClick={() => setActiveFilter(filter)}
            data-tooltip-id="filter-tooltip"
            data-tooltip-content={`Filter by ${filter.charAt(0).toUpperCase() + filter.slice(1)}`}
          >
            {filter === "all" ? (
              "All"
            ) : (
              <span className="flex items-center">
                <span className="inline-flex mr-1 continuous-spin">{tagIcons[filter as keyof typeof tagIcons]}</span>
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </span>
            )}
            <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse"></span>
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
            className="h-full"
          >
            <Card className="overflow-hidden project-card h-full flex flex-col">
              <div className="aspect-video relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/50 p-2 rounded-full backdrop-blur-sm">
                  <div className="text-white">{project.icon}</div>
                </div>
                <div className="project-content flex flex-col h-full justify-end">
                  <div className="p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-white/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/20 text-primary-foreground group hover:bg-primary/40 transition-all duration-300"
                        >
                          <span className="flex items-center">
                            <span className="icon-wrapper mr-1 inline-flex items-center justify-center">
                              <span className="icon-rotate">{tagIcons[tag as keyof typeof tagIcons]}</span>
                            </span>
                            {tag}
                          </span>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-black/50 border-white/20 hover:bg-black/70 transition-all duration-300 hover:scale-105"
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
                          className="bg-black/50 border-white/20 hover:bg-black/70 transition-all duration-300 hover:scale-105"
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
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, Bookmark, Heart, MessageCircle, Share2 } from "lucide-react"
import { useState } from "react"

export default function Blog() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  const blogPosts = [
    {
      title: "Building High-Performance Web Applications with Rust and WebAssembly",
      excerpt: "Learn how to leverage Rust's performance benefits in web applications by compiling to WebAssembly.",
      date: "May 15, 2023",
      readTime: "8 min read",
      image: "/Clarisse/Clarisse.png",
      tags: ["Rust", "WebAssembly", "Performance"],
      link: "#",
      likes: 124,
      comments: 32,
    },
    {
      title: "Modern State Management in Next.js Applications",
      excerpt:
        "Explore different state management approaches in Next.js and how to choose the right one for your project.",
      date: "June 22, 2023",
      readTime: "6 min read",
      image: "/Clarisse/Clarisse.png",
      tags: ["Next.js", "React", "State Management"],
      link: "#",
      likes: 98,
      comments: 24,
    },
    {
      title: "Creating Accessible UI Components from Scratch",
      excerpt:
        "A deep dive into building accessible UI components that work for everyone, with a focus on keyboard navigation and screen readers.",
      date: "July 10, 2023",
      readTime: "10 min read",
      image: "/Clarisse/Clarisse.png",
      tags: ["Accessibility", "UI", "Frontend"],
      link: "#",
      likes: 156,
      comments: 47,
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
        Blog
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            onMouseEnter={() => setHoveredPost(index)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-500 flex flex-col card-3d-effect hover:border-primary/30 group">
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={post.image || "/Clarisse/Clarisse.png"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-2 right-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-primary/70 hover:text-white transition-all duration-300 hover:scale-110"
                    data-tooltip-id="blog-tooltip"
                    data-tooltip-content="Save for later"
                  >
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardHeader className="p-4 pb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 group"
                    >
                      <span className="group-hover:scale-105 transition-transform duration-300">{tag}</span>
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto group hover:bg-primary/10 rounded-full px-3 py-1 transition-all duration-300"
                  asChild
                  data-tooltip-id="blog-tooltip"
                  data-tooltip-content="Read full article"
                >
                  <a href={post.link} className="flex items-center text-primary hover:text-primary/80">
                    Read
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardFooter>
              <div className="px-4 pb-4 flex items-center justify-between border-t border-border/30 pt-2 mt-2">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground hover:text-primary">
                    <Heart className={`h-4 w-4 mr-1 ${hoveredPost === index ? "text-primary animate-pulse" : ""}`} />
                    <span>{post.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground hover:text-primary">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    <span>{post.comments}</span>
                  </Button>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button
          variant="outline"
          className="border-primary/20 hover:bg-primary/10 group relative overflow-hidden btn-hover-effect"
        >
          <span className="relative z-10 flex items-center">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Button>
      </div>
    </div>
  )
}


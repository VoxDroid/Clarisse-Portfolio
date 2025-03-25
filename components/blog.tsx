"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      title: "Building High-Performance Web Applications with Rust and WebAssembly",
      excerpt: "Learn how to leverage Rust's performance benefits in web applications by compiling to WebAssembly.",
      date: "May 15, 2023",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Rust", "WebAssembly", "Performance"],
      link: "#",
    },
    {
      title: "Modern State Management in Next.js Applications",
      excerpt:
        "Explore different state management approaches in Next.js and how to choose the right one for your project.",
      date: "June 22, 2023",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Next.js", "React", "State Management"],
      link: "#",
    },
    {
      title: "Creating Accessible UI Components from Scratch",
      excerpt:
        "A deep dive into building accessible UI components that work for everyone, with a focus on keyboard navigation and screen readers.",
      date: "July 10, 2023",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Accessibility", "UI", "Frontend"],
      link: "#",
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
          >
            <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="p-4 pb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold line-clamp-2">{post.title}</h3>
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
                <Button variant="ghost" size="sm" className="p-0 h-auto" asChild>
                  <a href={post.link} className="flex items-center text-primary hover:underline">
                    Read <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
          View All Posts
        </Button>
      </div>
    </div>
  )
}


"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Rust", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 85 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "Next.js", level: 90 },
        { name: "React", level: 85 },
        { name: "Actix Web", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Node.js", level: 80 },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "GraphQL", level: 70 },
        { name: "CI/CD", level: 75 },
      ],
    },
  ]

  const rustCode = `
// A simple Rust function to calculate Fibonacci numbers
fn fibonacci(n: u32) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

// Using Rust's pattern matching and recursion
fn main() {
    let result = fibonacci(10);
    println!("The 10th Fibonacci number is: {}", result);
}
  `.trim()

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        className="section-heading text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-xl font-semibold">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2"
                      indicatorClassName="bg-gradient-to-r from-pink-500 to-pink-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="skill-card overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 bg-black/50">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-sm font-medium">fibonacci.rs</span>
                </div>
                <pre className="text-sm overflow-x-auto p-4 rounded bg-black/30 text-pink-300">
                  <code>{rustCode}</code>
                </pre>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Rust Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  I specialize in Rust programming, leveraging its performance benefits and memory safety guarantees to
                  build robust applications.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Systems programming and low-level optimization</li>
                  <li>• Web services with Actix and Rocket frameworks</li>
                  <li>• Concurrent and parallel programming</li>
                  <li>• WebAssembly (WASM) development</li>
                  <li>• Cross-platform application development</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}


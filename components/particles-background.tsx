"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color?: string
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.min(120, Math.floor((window.innerWidth * window.innerHeight) / 9000))

    // Color palette
    const colors = [
      "rgba(236, 72, 153, opacity)", // Pink
      "rgba(219, 39, 119, opacity)", // Darker pink
      "rgba(244, 114, 182, opacity)", // Lighter pink
      "rgba(251, 207, 232, opacity)", // Very light pink
    ]

    for (let i = 0; i < particleCount; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      const opacity = Math.random() * 0.5 + 0.1
      const color = randomColor.replace("opacity", opacity.toString())

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.3 + 0.1, // Diagonal movement (positive X)
        speedY: Math.random() * 0.3 + 0.1, // Diagonal movement (positive Y)
        opacity,
        color,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Use the particle's color or fallback to theme-based color
        const color =
          particle.color ||
          (theme === "dark"
            ? `rgba(236, 72, 153, ${particle.opacity})` // Pink in dark mode
            : `rgba(236, 72, 153, ${particle.opacity * 0.7})`) // Lighter pink in light mode

        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Add a subtle glow effect
        ctx.shadowBlur = 15
        ctx.shadowColor = color

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Reset particle when it goes off screen
        if (particle.x > canvas.width) {
          particle.x = 0
          particle.y = Math.random() * canvas.height
        }

        if (particle.y > canvas.height) {
          particle.y = 0
          particle.x = Math.random() * canvas.width
        }
      })

      // Reset shadow effect to avoid performance issues
      ctx.shadowBlur = 0

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  )
}


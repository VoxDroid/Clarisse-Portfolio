"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useTooltipContext } from "@/context/tooltip-context"

interface TooltipProps {
  id: string
  content: string
  position?: "top" | "bottom" | "left" | "right"
}

export function Tooltip({ id, content, position = "top" }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const tooltipRef = useRef<HTMLDivElement>(null)
  const { tooltipsEnabled } = useTooltipContext()

  useEffect(() => {
    const handleTooltipPosition = () => {
      const elements = document.querySelectorAll(`[data-tooltip-id="${id}"]`)

      elements.forEach((element) => {
        const showTooltip = () => {
          if (document.body.classList.contains("tooltips-disabled")) return

          const rect = element.getBoundingClientRect()
          const tooltipContent = element.getAttribute("data-tooltip-content") || content

          let x = rect.left + rect.width / 2
          let y = rect.top - 10

          if (position === "bottom") {
            y = rect.bottom + 10
          } else if (position === "left") {
            x = rect.left - 10
            y = rect.top + rect.height / 2
          } else if (position === "right") {
            x = rect.right + 10
            y = rect.top + rect.height / 2
          }

          setTooltipPosition({ x, y })
          setIsVisible(tooltipsEnabled)

          if (tooltipRef.current) {
            tooltipRef.current.textContent = tooltipContent
          }
        }

        const hideTooltip = () => {
          setIsVisible(false)
        }

        element.addEventListener("mouseenter", showTooltip)
        element.addEventListener("mouseleave", hideTooltip)
        element.addEventListener("focus", showTooltip)
        element.addEventListener("blur", hideTooltip)
      })

      return () => {
        elements.forEach((element) => {
          element.removeEventListener("mouseenter", () => {})
          element.removeEventListener("mouseleave", () => {})
          element.removeEventListener("focus", () => {})
          element.removeEventListener("blur", () => {})
        })
      }
    }

    handleTooltipPosition()

    const observer = new MutationObserver(handleTooltipPosition)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [id, content, position, tooltipsEnabled])

  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  let positionClass = "translate-x(-50%) translate-y(-100%)"
  let arrowClass = "bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-t-primary/70"

  if (position === "bottom") {
    positionClass = "translate-x(-50%) translate-y(0)"
    arrowClass = "top-0 left-1/2 transform -translate-x-1/2 -translate-y-full border-b-primary/70"
  } else if (position === "left") {
    positionClass = "translate-x(-100%) translate-y(-50%)"
    arrowClass = "right-0 top-1/2 transform translate-x-full -translate-y-1/2 border-l-primary/70"
  } else if (position === "right") {
    positionClass = "translate-x(0) translate-y(-50%)"
    arrowClass = "left-0 top-1/2 transform -translate-x-full -translate-y-1/2 border-r-primary/70"
  }

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={tooltipRef}
          className="fixed z-50 px-3 py-1.5 text-sm font-medium text-white bg-primary/70 backdrop-blur-sm rounded-md shadow-md pointer-events-none"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform:
              position === "top"
                ? "translate(-50%, -100%)"
                : position === "bottom"
                  ? "translate(-50%, 10px)"
                  : position === "left"
                    ? "translate(-100%, -50%)"
                    : "translate(10px, -50%)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15 }}
        >
          {content}
          <div
            className={`absolute w-0 h-0 border-4 border-transparent ${
              position === "top"
                ? "bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-primary/70"
                : position === "bottom"
                  ? "top-0 left-1/2 -translate-x-1/2 -translate-y-full border-b-primary/70"
                  : position === "left"
                    ? "right-0 top-1/2 translate-x-full -translate-y-1/2 border-l-primary/70"
                    : "left-0 top-1/2 -translate-x-full -translate-y-1/2 border-r-primary/70"
            }`}
          />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}


"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { EyeOff, Eye } from "lucide-react"
import { useTooltipContext } from "@/context/tooltip-context"

export function TooltipToggle() {
  const { tooltipsEnabled, setTooltipsEnabled } = useTooltipContext()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full opacity-0">
        <Eye className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTooltipsEnabled(!tooltipsEnabled)}
      className="rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
      aria-label={tooltipsEnabled ? "Disable tooltips" : "Enable tooltips"}
      data-tooltip-id="global-tooltip"
      data-tooltip-content={tooltipsEnabled ? "Disable tooltips" : "Enable tooltips"}
    >
      {tooltipsEnabled ? (
        <Eye className="h-5 w-5 transition-transform duration-300 hover:scale-110" />
      ) : (
        <EyeOff className="h-5 w-5 transition-transform duration-300 hover:scale-110" />
      )}
    </Button>
  )
}


"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type TooltipContextType = {
  tooltipsEnabled: boolean
  setTooltipsEnabled: (enabled: boolean) => void
}

const TooltipContext = createContext<TooltipContextType>({
  tooltipsEnabled: true,
  setTooltipsEnabled: () => {},
})

export function TooltipContextProvider({ children }: { children: ReactNode }) {
  const [tooltipsEnabled, setTooltipsEnabled] = useState(true)

  return <TooltipContext.Provider value={{ tooltipsEnabled, setTooltipsEnabled }}>{children}</TooltipContext.Provider>
}

export const useTooltipContext = () => useContext(TooltipContext)


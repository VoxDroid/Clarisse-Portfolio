import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import ParticlesBackground from "@/components/particles-background"
import { TooltipProvider } from "@/components/tooltip-provider"
import { TooltipContextProvider } from "@/context/tooltip-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Clarisse | Portfolio",
  description: "Personal portfolios",
  generator: "VoxDroid",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins bg-background">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TooltipContextProvider>
            <ParticlesBackground />
            <TooltipProvider />
            {children}
          </TooltipContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
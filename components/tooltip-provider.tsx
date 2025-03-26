"use client"

import { Tooltip } from "./tooltip"

export function TooltipProvider() {
  return (
    <>
      <Tooltip id="filter-tooltip" content="Filter projects" position="top" />
      <Tooltip id="blog-tooltip" content="Read article" position="top" />
      <Tooltip id="testimonial-tooltip" content="Navigate testimonials" position="bottom" />
      <Tooltip id="skill-tooltip" content="Skill level" position="right" />
      <Tooltip id="social-tooltip" content="Visit profile" position="bottom" />
      <Tooltip id="nav-tooltip" content="Navigate to section" position="bottom" />
      <Tooltip id="global-tooltip" content="Action" position="left" />
    </>
  )
}


"use client"

export function BackgroundSpline() {
  return (
    <>
      {/* 
        The corrupt Spline integration has been entirely removed to prevent Next.js crashes.
        We now rely entirely on a highly optimized, infinitely animating CSS radial mesh 
        gradient (liquid-bg) that closely mimics Apple's liquid glass design.
      */}
      <div className="fixed top-0 left-0 w-full h-full -z-20 liquid-bg" />
      
      {/* High-end SVG noise texture overlay */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 noise-bg" />
    </>
  )
}


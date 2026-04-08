"use client"

import { useEffect, useState } from "react"

export function AnimatedMouse({ className = "" }: { className?: string }) {
  const [position, setPosition] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % 100)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <svg
        width="40"
        height="32"
        viewBox="0 0 40 32"
        fill="none"
        className="animate-wiggle"
        style={{ transform: `translateX(${Math.sin(position * 0.1) * 20}px)` }}
      >
        {/* Body */}
        <ellipse cx="20" cy="18" rx="14" ry="10" fill="#888888" />
        {/* Head */}
        <circle cx="32" cy="14" r="6" fill="#888888" />
        {/* Ears */}
        <circle cx="29" cy="8" r="4" fill="#888888" />
        <circle cx="35" cy="8" r="4" fill="#888888" />
        <circle cx="29" cy="8" r="2.5" fill="#FFB6C1" />
        <circle cx="35" cy="8" r="2.5" fill="#FFB6C1" />
        {/* Eye */}
        <circle cx="34" cy="13" r="1.5" fill="#1a1a1a" />
        {/* Nose */}
        <circle cx="37" cy="15" r="1" fill="#FFB6C1" />
        {/* Tail */}
        <path
          d="M6 18 Q2 14 4 10 Q6 6 10 8"
          stroke="#888888"
          strokeWidth="2"
          fill="none"
        />
        {/* Whiskers */}
        <line x1="36" y1="14" x2="40" y2="12" stroke="#1a1a1a" strokeWidth="0.5" />
        <line x1="36" y1="15" x2="40" y2="15" stroke="#1a1a1a" strokeWidth="0.5" />
        <line x1="36" y1="16" x2="40" y2="18" stroke="#1a1a1a" strokeWidth="0.5" />
      </svg>
    </div>
  )
}

export function AnimatedMouseTrail() {
  return (
    <div className="fixed bottom-4 left-0 right-0 pointer-events-none z-50 overflow-hidden">
      <div className="animate-walk">
        <AnimatedMouse />
      </div>
    </div>
  )
}

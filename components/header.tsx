"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { MouseIcon } from "./mouse-icon"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-[#c94277]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <MouseIcon className="w-14 h-8 text-[#c94277]" />
            <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-wider text-black">
              ARTE EMO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <NavLink href="/#galeria">GALERIA</NavLink>
            <NavLink href="/#sobre">SOBRE</NavLink>
            <NavLink href="/#contato">CONTATO</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-black hover:text-[#c94277] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t-2 border-[#c94277] pt-4">
            <NavLink href="/#galeria" onClick={() => setIsMenuOpen(false)}>GALERIA</NavLink>
            <NavLink href="/#sobre" onClick={() => setIsMenuOpen(false)}>SOBRE</NavLink>
            <NavLink href="/#contato" onClick={() => setIsMenuOpen(false)}>CONTATO</NavLink>
          </nav>
        )}
      </div>
    </header>
  )
}

function NavLink({ 
  href, 
  children, 
  onClick 
}: { 
  href: string
  children: React.ReactNode
  onClick?: () => void 
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-[family-name:var(--font-space)] text-sm tracking-widest text-black hover:text-[#c94277] transition-colors"
    >
      {children}
    </Link>
  )
}

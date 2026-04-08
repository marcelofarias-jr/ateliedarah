import { Instagram, Mail } from "lucide-react"
import Link from "next/link"
import { MouseIcon } from "./mouse-icon"

export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-[#c94277] py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1">
            <MouseIcon className="w-12 h-8 text-[#c94277]" />
            <span className="font-[family-name:var(--font-bebas)] text-lg text-white/60 tracking-wider">
              ARTE EMO
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="https://instagram.com" 
              target="_blank"
              className="text-white/60 hover:text-[#c94277] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link 
              href="mailto:contato@arteemo.com"
              className="text-white/60 hover:text-[#c94277] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>

          <p className="font-[family-name:var(--font-space)] text-xs text-white/40 tracking-widest">
            2024 ARTE EMO
          </p>
        </div>
      </div>
    </footer>
  )
}

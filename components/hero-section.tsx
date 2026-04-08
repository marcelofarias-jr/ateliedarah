"use client"

import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center checkered-bg-pink overflow-hidden">
      {/* Main content */}
      <div className="text-center px-4">
        <h1 className="font-[family-name:var(--font-bebas)] text-white text-[clamp(4rem,15vw,12rem)] leading-[0.9] tracking-tight">
          <span className="text-[#3d7a5a]">ARTE.</span>
          <br />
          CAOS.
          <br />
          <span className="text-[#3d7a5a]">TATTOO.</span>
        </h1>
        
        <p className="font-[family-name:var(--font-space)] text-white/80 text-sm md:text-base tracking-[0.3em] mt-8 max-w-xl mx-auto uppercase">
          Exploração visual entre pele, tela e cerâmica.
          <br />
          Estética emo dos anos 2000.
        </p>

        <Link 
          href="/#galeria"
          className="inline-block mt-10 border-2 border-[#c94277] text-white font-[family-name:var(--font-space)] text-sm tracking-[0.2em] px-10 py-4 hover:bg-[#c94277] transition-all duration-300"
        >
          VER PORTFÓLIO
        </Link>
      </div>

      {/* Bottom line decoration with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c94277] via-white to-[#3d7a5a]" />
    </section>
  )
}

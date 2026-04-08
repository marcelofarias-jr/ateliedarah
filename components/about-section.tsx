"use client"

import { MouseIcon } from "./mouse-icon"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-bebas)] text-6xl md:text-8xl text-black inline-block">
              SOBRE
            </h2>
            <div className="h-1 w-24 mx-auto mt-4 bg-gradient-to-r from-[#c94277] to-[#3d7a5a]"></div>
            <div className="flex justify-center gap-4 mt-8">
              <MouseIcon className="w-12 h-8 text-[#c94277]" />
            </div>
          </div>

          {/* About content */}
          <div className="space-y-6 text-center">
            <p className="font-[family-name:var(--font-space)] text-base md:text-lg text-black/80 leading-relaxed">
              Artista multidisciplinar com foco em tatuagem, cerâmica fria e aquarela. 
              Meu trabalho explora a estética dos anos 90 e 2000, trazendo elementos 
              visuais que transitam entre o caos e a delicadeza.
            </p>
            <p className="font-[family-name:var(--font-space)] text-base md:text-lg text-black/80 leading-relaxed">
              Cada peça é uma expressão única, criada com atenção aos detalhes e 
              profundo respeito pelo processo artístico. Do sketch inicial à arte 
              finalizada, cada etapa é uma jornada de descoberta.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t-2 border-[#c94277]/30">
            <div className="text-center">
              <span className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-[#c94277]">100+</span>
              <p className="font-[family-name:var(--font-space)] text-xs tracking-widest text-black/60 mt-2 uppercase">Trabalhos</p>
            </div>
            <div className="text-center">
              <span className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-[#3d7a5a]">5+</span>
              <p className="font-[family-name:var(--font-space)] text-xs tracking-widest text-black/60 mt-2 uppercase">Anos</p>
            </div>
            <div className="text-center">
              <span className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-[#c94277]">50+</span>
              <p className="font-[family-name:var(--font-space)] text-xs tracking-widest text-black/60 mt-2 uppercase">Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

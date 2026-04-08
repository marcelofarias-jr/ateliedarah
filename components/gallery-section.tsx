"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { artworks, categories, type Artwork, type Category } from "@/lib/artworks"

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<Category>("todos")

  const filteredArtworks = activeFilter === "todos" 
    ? artworks 
    : artworks.filter(art => art.category === activeFilter)

  return (
    <section id="galeria" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-bebas)] text-6xl md:text-8xl text-white inline-block">
            PORTFÓLIO
          </h2>
          <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-[#c94277] to-[#3d7a5a]"></div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                font-[family-name:var(--font-space)] text-xs tracking-[0.15em] uppercase
                px-4 py-2 border transition-all duration-300
                ${activeFilter === category 
                  ? 'bg-[#c94277] text-white border-[#c94277]' 
                  : 'bg-transparent text-white border-white/50 hover:border-[#c94277] hover:text-white'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <p className="text-center text-white/50 font-[family-name:var(--font-space)] text-sm mt-12">
            Nenhuma arte encontrada nesta categoria.
          </p>
        )}
      </div>
    </section>
  )
}

function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <Link href={`/arte/${artwork.id}`} className="group">
      <div className="relative">
        {/* Image container */}
        <div className={`aspect-square border-2 transition-colors duration-300 overflow-hidden bg-zinc-900 relative ${
          artwork.sold 
            ? 'border-[#3d7a5a] group-hover:border-[#3d7a5a]' 
            : 'border-white/30 group-hover:border-[#c94277]'
        }`}>
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            width={400}
            height={400}
            className={`w-full h-full object-cover transition-all duration-500 ${
              artwork.sold 
                ? 'grayscale group-hover:grayscale-0' 
                : ''
            }`}
          />
          
          {/* Sold badge - always visible */}
          {artwork.sold && (
            <div className="absolute top-3 left-3 z-10">
              <div className="bg-[#3d7a5a] px-3 py-1.5">
                <span className="font-[family-name:var(--font-bebas)] text-white text-sm tracking-wider">
                  VENDIDA
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="mt-4">
          <h3 className={`font-[family-name:var(--font-bebas)] text-xl tracking-wide transition-colors ${
            artwork.sold 
              ? 'text-[#3d7a5a]' 
              : 'text-white group-hover:text-[#c94277]'
          }`}>
            {artwork.title.toUpperCase()}
          </h3>
          <p className="font-[family-name:var(--font-space)] text-xs text-white/60 tracking-widest uppercase mt-1">
            {artwork.category}
          </p>
        </div>
      </div>
    </Link>
  )
}

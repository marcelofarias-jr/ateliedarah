import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { artworks } from "@/lib/artworks"
import { MouseIcon } from "@/components/mouse-icon"

interface ArtworkPageProps {
  params: Promise<{ id: string }>
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { id } = await params
  const artwork = artworks.find((a) => a.id === id)

  if (!artwork) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="py-8 md:py-16">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Link 
            href="/#galeria"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-space)] text-sm text-white hover:text-[#c94277] transition-colors tracking-widest uppercase mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Artwork Display */}
            <div className="relative">
              <div className={`aspect-[4/5] border-2 overflow-hidden bg-zinc-900 relative ${
                artwork.sold ? 'border-[#3d7a5a]' : 'border-[#c94277]'
              }`}>
                <Image
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
                
                {/* Sold badge */}
                {artwork.sold && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-[#3d7a5a] px-4 py-2">
                      <span className="font-[family-name:var(--font-bebas)] text-white text-sm tracking-[0.2em]">
                        VENDIDA
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Artwork Details */}
            <div className="flex flex-col justify-center">
              {/* Category */}
              <div className="flex items-center gap-2 mb-4">
                <MouseIcon className={`w-10 h-7 ${artwork.sold ? 'text-[#3d7a5a]' : 'text-[#c94277]'}`} />
                <span className={`font-[family-name:var(--font-space)] text-xs tracking-[0.3em] uppercase ${
                  artwork.sold ? 'text-[#3d7a5a]' : 'text-[#c94277]'
                }`}>
                  {artwork.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-white tracking-wide mb-8">
                {artwork.title.toUpperCase()}
              </h1>

              {/* Process Section */}
              <div className={`border-t-2 pt-8 ${artwork.sold ? 'border-[#3d7a5a]/50' : 'border-[#c94277]/50'}`}>
                <h2 className="font-[family-name:var(--font-bebas)] text-2xl text-white tracking-wide mb-4">
                  PROCESSO CRIATIVO
                </h2>
                <p className="font-[family-name:var(--font-space)] text-sm text-white/70 leading-relaxed">
                  {artwork.creationProcess}
                </p>
              </div>

              {/* Date */}
              <div className={`border-t-2 mt-8 pt-8 ${artwork.sold ? 'border-[#3d7a5a]/50' : 'border-[#c94277]/50'}`}>
                <p className="font-[family-name:var(--font-space)] text-xs text-white/50 tracking-widest">
                  Criado em {artwork.createdAt || "2026"}
                </p>
              </div>

              {/* CTA Button */}
              {artwork.sold ? (
                <div className="mt-8 border-2 border-[#3d7a5a] bg-[#3d7a5a]/10 text-[#3d7a5a] font-[family-name:var(--font-space)] text-sm tracking-[0.2em] px-10 py-4 text-center uppercase">
                  Arte Vendida
                </div>
              ) : (
                <Link 
                  href="/#contato"
                  className="inline-block mt-8 border-2 border-[#c94277] text-white font-[family-name:var(--font-space)] text-sm tracking-[0.2em] px-10 py-4 hover:bg-[#c94277] transition-all duration-300 text-center uppercase"
                >
                  Solicitar Orçamento
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  return artworks.map((artwork) => ({
    id: artwork.id,
  }))
}

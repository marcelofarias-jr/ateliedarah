"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    artType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", artType: "", message: "" })
    
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const artTypes = [
    "Tatuagem",
    "Cerâmica Fria",
    "Aquarela",
    "Arte Digital",
    "Outro",
  ]

  return (
    <section id="contato" className="py-20 md:py-32 bg-zinc-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-bebas)] text-6xl md:text-8xl text-white inline-block">
            CONTATO
          </h2>
          <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-[#c94277] to-[#3d7a5a]"></div>
          <p className="font-[family-name:var(--font-space)] text-sm text-white/60 tracking-widest mt-8 uppercase">
            Vamos criar algo juntos
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto">
          {isSubmitted ? (
            <div className="text-center py-12 border-2 border-[#3d7a5a] bg-[#3d7a5a]/10">
              <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-[#3d7a5a] mb-4">
                MENSAGEM ENVIADA
              </h3>
              <p className="font-[family-name:var(--font-space)] text-sm text-white/60">
                Retornarei em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-[family-name:var(--font-space)] text-xs text-[#c94277] tracking-widest uppercase block mb-2">
                    Nome
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent border-2 border-white/30 text-white font-[family-name:var(--font-space)] focus:border-[#c94277] rounded-none h-12 placeholder:text-white/40"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="font-[family-name:var(--font-space)] text-xs text-[#c94277] tracking-widest uppercase block mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-2 border-white/30 text-white font-[family-name:var(--font-space)] focus:border-[#c94277] rounded-none h-12 placeholder:text-white/40"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="font-[family-name:var(--font-space)] text-xs text-[#c94277] tracking-widest uppercase block mb-3">
                  Tipo de Arte
                </label>
                <div className="flex flex-wrap gap-2">
                  {artTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, artType: type })}
                      className={`px-4 py-2 font-[family-name:var(--font-space)] text-xs tracking-wider uppercase transition-all border-2 ${
                        formData.artType === type
                          ? "bg-[#c94277] text-white border-[#c94277]"
                          : "bg-transparent text-white border-white/30 hover:border-[#c94277]"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-[family-name:var(--font-space)] text-xs text-[#c94277] tracking-widest uppercase block mb-2">
                  Mensagem
                </label>
                <Textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-transparent border-2 border-white/30 text-white font-[family-name:var(--font-space)] focus:border-[#c94277] rounded-none resize-none placeholder:text-white/40"
                  placeholder="Descreva sua ideia..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#c94277] hover:bg-[#d4638f] text-white font-[family-name:var(--font-space)] text-sm tracking-widest uppercase py-6 rounded-none transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  "ENVIANDO..."
                ) : (
                  <>
                    ENVIAR MENSAGEM <Send className="ml-2 inline-block w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

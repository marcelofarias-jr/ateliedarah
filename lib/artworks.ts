export interface Artwork {
  id: string
  title: string
  category: string
  price: number
  shortDescription: string
  fullDescription: string
  creationProcess: string
  dimensions?: string
  materials?: string[]
  timeToCreate?: string
  imageUrl: string
  createdAt?: string
  sold?: boolean
}

export const categories = [
  "todos",
  "tatuagem",
  "aquarela", 
  "escultura",
  "cerâmica fria",
  "nanquim",
  "fotografia",
  "pintura em madeira"
] as const

export type Category = (typeof categories)[number]

export const artworks: Artwork[] = [
  {
    id: "abstract-silence",
    title: "Abstract Silence",
    category: "escultura",
    price: 1200.00,
    shortDescription: "Escultura abstrata em metal representando o silêncio interior.",
    fullDescription: "Uma peça escultural que explora a dualidade entre forma e vazio. A silhueta humana fragmentada convida à reflexão sobre identidade e introspecção.",
    creationProcess: "Trabalho de modelagem em argila, seguido de molde em silicone e fundição em resina metalizada. Processo: sketches conceituais, prototipagem, molde, fundição final. Acabamento em pátina escura.",
    dimensions: "35x20x15 cm",
    materials: ["Resina", "Pigmento metálico", "Pátina"],
    timeToCreate: "3 semanas",
    imageUrl: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=600&h=600&fit=crop",
    createdAt: "15/02/2026",
    sold: true
  },
  {
    id: "void-watercolor",
    title: "Void Watercolor",
    category: "aquarela",
    price: 450.00,
    shortDescription: "Aquarela abstrata explorando o caos e a ordem.",
    fullDescription: "Composição em aquarela que transita entre o figurativo e o abstrato. Camadas de cor se sobrepõem criando profundidade e mistério.",
    creationProcess: "Técnica wet-on-wet para as camadas base, seguida de detalhamento com wet-on-dry. Incorporação de elementos de colagem e tinta nanquim para contraste.",
    dimensions: "A3 (29.7x42 cm)",
    materials: ["Aquarela profissional", "Papel Arches 300g", "Nanquim"],
    timeToCreate: "2 dias",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=600&fit=crop",
    createdAt: "28/02/2026",
    sold: false
  },
  {
    id: "skin-and-ink",
    title: "Skin & Ink",
    category: "tatuagem",
    price: 350.00,
    shortDescription: "Trabalho de line work minimalista em pele.",
    fullDescription: "Tatuagem botânica minimalista, trabalho de linhas finas representando flora nativa. Design exclusivo desenvolvido em colaboração com o cliente.",
    creationProcess: "Trabalho de line work minimalista. Processo: desenho vetorial, impressão em stencil, aplicação precisa com agulha liner. Tempo de execução: 3 horas.",
    dimensions: "12x8 cm",
    materials: ["Tinta vegana", "Agulhas 3RL/5RL"],
    timeToCreate: "3 horas",
    imageUrl: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=600&fit=crop",
    createdAt: "31/03/2026",
    sold: true
  },
  {
    id: "metal-birds",
    title: "Metal Birds",
    category: "pintura em madeira",
    price: 680.00,
    shortDescription: "Pintura sobre madeira com pássaros em estilo geométrico.",
    fullDescription: "Série de pássaros estilizados pintados sobre madeira tratada. Influências de arte popular brasileira com estética contemporânea.",
    creationProcess: "Base de madeira preparada com gesso acrílico. Pintura em camadas com acrílica, finalização com verniz fosco para proteção UV.",
    dimensions: "60x40 cm",
    materials: ["Madeira pinus", "Acrílica", "Verniz UV"],
    timeToCreate: "1 semana",
    imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&h=600&fit=crop",
    createdAt: "10/01/2026",
    sold: false
  },
  {
    id: "ceramic-vessel",
    title: "Vessel I",
    category: "cerâmica fria",
    price: 280.00,
    shortDescription: "Vaso escultural em cerâmica fria com textura orgânica.",
    fullDescription: "Peça funcional que transita entre arte e design. Formas orgânicas inspiradas em conchas e erosão natural.",
    creationProcess: "Modelagem manual em cerâmica fria com técnica de coiling. Texturização com ferramentas improvisadas. Acabamento em branco mate.",
    dimensions: "25x15 cm",
    materials: ["Cerâmica fria", "Pigmento branco", "Verniz mate"],
    timeToCreate: "4 dias",
    imageUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop",
    createdAt: "05/03/2026",
    sold: false
  },
  {
    id: "ink-study",
    title: "Ink Study #7",
    category: "nanquim",
    price: 180.00,
    shortDescription: "Estudo em nanquim sobre papel algodão.",
    fullDescription: "Parte de uma série de estudos explorando manchas, linhas e a imprevisibilidade da tinta nanquim sobre papel absorvente.",
    creationProcess: "Técnica de dripping controlado combinada com pincel seco. Cada peça da série é única e irreproduzível.",
    dimensions: "A4 (21x29.7 cm)",
    materials: ["Nanquim", "Papel algodão 200g"],
    timeToCreate: "2 horas",
    imageUrl: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=600&h=600&fit=crop",
    createdAt: "20/03/2026",
    sold: true
  },
  {
    id: "body-fragment",
    title: "Body Fragment",
    category: "fotografia",
    price: 520.00,
    shortDescription: "Fotografia artística em preto e branco.",
    fullDescription: "Estudo fotográfico do corpo humano como paisagem. Jogo de luz e sombra que abstrai a forma reconhecível.",
    creationProcess: "Fotografia analógica em filme P&B, revelação manual em laboratório. Impressão fine art em papel algodão.",
    dimensions: "40x50 cm",
    materials: ["Filme Ilford HP5", "Papel Hahnemühle"],
    timeToCreate: "1 dia",
    imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=600&fit=crop",
    createdAt: "12/03/2026",
    sold: false
  },
  {
    id: "sacred-geometry",
    title: "Sacred Geometry",
    category: "tatuagem",
    price: 600.00,
    shortDescription: "Tatuagem de geometria sagrada em pontilhismo.",
    fullDescription: "Mandala geométrica utilizando técnica de dotwork. Símbolos ancestrais reinterpretados com precisão matemática.",
    creationProcess: "Design digital seguido de impressão em stencil. Aplicação com técnica de pontilhismo manual, ponto a ponto. Trabalho de paciência e precisão.",
    dimensions: "15x15 cm",
    materials: ["Tinta preta", "Agulhas RL variadas"],
    timeToCreate: "5 horas",
    imageUrl: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=600&fit=crop&sat=-100",
    createdAt: "25/02/2026",
    sold: false
  },
]

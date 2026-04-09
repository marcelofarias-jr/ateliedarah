# 🎨 Ateliê Darah

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://ateliedarah.vercel.app)
![GitHub repo size](https://img.shields.io/github/repo-size/marcelofarias-jr/ateliedarah)
![GitHub package.json version](https://img.shields.io/github/package-json/v/marcelofarias-jr/ateliedarah)
![TypeScript](https://img.shields.io/badge/TypeScript-96%25-blue?logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green)

> **Status do Projeto:** 🚧 Em desenvolvimento ativo

Website oficial do **Ateliê Darah** – um espaço criativo dedicado à expressão artística, peças autorais e design único. Desenvolvido com tecnologias modernas para oferecer uma experiência visual elegante, performática e acessível.

🔗 **Acesse o site em produção:** [ateliedarah.vercel.app](https://ateliedarah.vercel.app)

---

## ✨ Funcionalidades

- 🖼️ **Galeria de Portfólio** – Exposição de trabalhos artísticos e coleções autorais
- 📱 **Design Responsivo** – Experiência fluida em qualquer dispositivo
- ⚡ **Alta Performance** – Carregamento rápido com Next.js App Router
- ♿ **Acessibilidade** – Navegação por teclado, semântica HTML e suporte a leitores de tela
- 🎨 **Estilização Utilitária** – Interface moderna e consistente com Tailwind CSS
- 🔍 **SEO Otimizado** – Meta tags e estrutura semântica para melhor indexação

---

## 🚀 Tecnologias Utilizadas

| Categoria         | Tecnologias                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| **Framework**     | [Next.js 15](https://nextjs.org/) (App Router) + [React 19](https://react.dev/) |
| **Linguagem**     | [TypeScript](https://www.typescriptlang.org/) (96% do código base)          |
| **Estilização**   | [Tailwind CSS](https://tailwindcss.com/) + [PostCSS](https://postcss.org/)  |
| **Gerenciador**   | [pnpm](https://pnpm.io/) (rápido e eficiente)                               |
| **Deploy**        | [Vercel](https://vercel.com/) (CI/CD contínuo)                              |
| **Controle Versão**| [Git](https://git-scm.com/) + [GitHub](https://github.com/)                 |

---

## 📁 Estrutura de Pastas

```text
ateliedarah/
├── 📂 app/                    # App Router do Next.js
│   ├── layout.tsx             # Layout principal
│   ├── page.tsx               # Página inicial
│   └── globals.css            # Estilos globais
├── 📂 components/             # Componentes React reutilizáveis
│   ├── ui/                    # Componentes de UI primitivos
│   ├── layout/                # Header, Footer, Sidebar
│   └── sections/              # Seções da página (Hero, Galeria, etc.)
├── 📂 hooks/                  # Custom hooks React
├── 📂 lib/                    # Utilitários e configurações
├── 📂 public/                 # Arquivos estáticos (imagens, fontes)
├── 📂 styles/                 # Configurações adicionais de estilo
├── .gitignore                 # Arquivos ignorados pelo Git
├── components.json            # Configuração de componentes shadcn/ui
├── next.config.mjs            # Configuração do Next.js
├── next-env.d.ts              # Tipos do Next.js
├── package.json               # Dependências e scripts
├── pnpm-lock.yaml             # Lockfile do pnpm
├── postcss.config.mjs         # Configuração do PostCSS
├── tailwind.config.js         # Configuração do Tailwind
└── tsconfig.json              # Configuração do TypeScript

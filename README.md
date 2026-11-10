<div align="center">

# MindFlow Routines

**Daily Clarity & Visual Intentions for Life, Mindset, Money, and Mood.**

An editorial wellness platform designed to turn visual inspiration from [@mindflowroutines](https://www.pinterest.com/mindflowroutines/) into calm, practical daily reading rituals.

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/Motion-GSAP%20%2B%20Lenis-88CE02)](https://greensock.com/)
[![Pinterest](https://img.shields.io/badge/Pinterest-@mindflowroutines-E60023?logo=pinterest&logoColor=white)](https://www.pinterest.com/mindflowroutines/)

</div>

---

## ✨ Overview

**MindFlow Routines** pairs high-aesthetic Pinterest quote artwork with deep, actionable long-form editorial essays across four core life pillars:

* 🧠 **Mindset & Stoicism** — Rewiring daily self-talk, shifting from scarcity into sufficiency, and widening the pause before emotional reaction.
* 💸 **Money & Abundance** — Financial habits, intentional wealth building, weekly Sunday resets, and clarifying your personal definition of "enough."
* 🌿 **Mood & Emotional Balance** — Nervous system regulation, gentle self-compassion, morning cortisol resets, and choosing daily emotional anchors.
* ⏳ **Life & Daily Routines** — Deep focus rituals, eliminating attention residue, environment design, and building automatic consistency.

---

## 🎨 Key Features & Motion Architecture

- **Custom GSAP 3D Scroll Stack (`[data-featured-stack]`)**: Interactive 3D layered card stacks dynamically presenting featured article artwork.
- **Sticky Crossfading 3-Step Reader (`[data-sticky-steps-init]`)**: Smooth scroll-linked sticky reader pairing progressive editorial insights with 4:5 visual artwork frames.
- **Dynamic Parallax Parter Grids (`[data-team-parallax]`)**: Staggered multi-column responsive gallery celebrating visual quote art.
- **Interactive Cursor Interactions**: Dynamic cursor follow cards, smooth marquee effects, and vector graphic trails.
- **Butter-Smooth Smooth Scroll**: Integrated with Lenis and Barba page transition engine for seamless SPA-level navigation.
- **Typographic Craft**: Curated typography system featuring *Roughwell* display accents, *ABC Normal* structural headlines, and *Plus Jakarta Sans* reading typography.

---

## 📂 Project Structure

```text
mindflow-routines/
├── public/
│   ├── bundle.js               # GSAP, Lenis, DrawSVG, and Webflow motion runtime
│   ├── webflow.css             # Base design system & layout styling
│   └── images/
│       ├── badges/             # Custom SVG badges, stickers, and marquee icons
│       ├── features-articles/  # Featured landscape editorial artwork
│       ├── pinterest/          # Curated Pinterest quote art
│       └── quotes/             # Vector quote art fallbacks
├── src/
│   ├── data/
│   │   └── articles.ts         # Structured editorial data layer (slugs, steps, metadata)
│   ├── App.tsx                 # Client router, transition controller & Barba hooks
│   ├── pageHtml.ts             # Templating engine for Home, Hub, and dynamic Article views
│   ├── index.css               # Global typography, color variables & layout resets
│   └── main.tsx                # React root entry point
├── index.html
├── metadata.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` / `yarn` / `pnpm`

### Installation

```bash
# Clone the repository
git clone https://github.com/dyglo/mindflow-routines.git

# Navigate into the project directory
cd mindflow-routines

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Build & Production Preview

```bash
# Type check and build bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📌 Community & Socials

- **Pinterest**: [@mindflowroutines](https://www.pinterest.com/mindflowroutines/)
- **Live Platform**: [mindflow-routines.vercel.app](https://mindflow-routines.vercel.app)

---

## 📄 License

Private repository © [MindFlow Routines](https://www.pinterest.com/mindflowroutines/). All rights reserved.

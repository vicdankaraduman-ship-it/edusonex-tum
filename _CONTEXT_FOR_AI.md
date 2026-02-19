# PROJECT CONTEXT: EDUSONEX-TUM
Generated: 2026-02-18 22:26:39.964638

## CONFIGURATION & META

### package.json
```
{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@tanstack/react-query": "^5.83.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.61.1",
    "react-resizable-panels": "^2.1.9",
    "react-router-dom": "^6.30.1",
    "recharts": "^2.15.4",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.9",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@tailwindcss/typography": "^0.5.16",
    "@testing-library/jest-dom": "^6.6.0",
    "@testing-library/react": "^16.0.0",
    "@types/node": "^22.16.5",
    "@types/react": "^18.3.23",
    "@types/react-dom": "^18.3.7",
    "@vitejs/plugin-react-swc": "^3.11.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.32.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "jsdom": "^20.0.3",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.38.0",
    "vite": "^5.4.19",
    "vitest": "^3.2.4"
  }
}
```

### tsconfig.json
```
{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "noImplicitAny": false,
    "noUnusedParameters": false,
    "skipLibCheck": true,
    "allowJs": true,
    "noUnusedLocals": false,
    "strictNullChecks": false
  }
}

```

### vite.config.ts
```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

```

### tailwind.config.ts
```
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

```

### README.md
```
# Edusonex - AI Destekli Eğitim Teknolojileri Ekosistemi

Türkiye'nin ilk bütünleşik yapay zeka destekli eğitim işletim sistemi.

## 🌟 Vizyon

Okullar için özel dijital üretim sistemleri. Her okul kendi markasıyla, yapay zekâ destekli altyapılarla büyür.

## 🚀 Aktif Projeler

| Proje | Subdomain | Durum | Teknoloji |
|-------|-----------|-------|-----------|
| **Edusonex Ana Platform** | `edusonex.com.tr` | 🟢 Aktif | React + Vite + TypeScript |
| **ÖdevGPT** | `odev.edusonex.com.tr` | 🟢 Aktif (%95) | Groq Llama 3.3 + Supabase |
| **HEM AI** | `hem.edusonex.com.tr` | 🟢 Aktif (%90) | React + Supabase |
| **Anket Sistemi** | `anket.edusonex.com.tr` | 🟢 Aktif (%80) | WebSocket + Realtime |
| **Sınav Fabrikası** | `sinav.edusonex.com.tr` | 🟡 Beta (%60) | FastAPI + LangChain |

## 🏗️ Teknoloji Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend**: Supabase (Auth, DB, Storage)
- **AI Engine**: Groq, Claude, GPT-4
- **Deployment**: Cloudflare Pages, Vercel
- **DNS**: Cloudflare

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
```

## 🌐 Deployment

### Cloudflare Pages (Ana Platform)
- **Domain**: `edusonex.com.tr`
- **Build Command**: `npm run build`
- **Build Output**: `dist`
- **Node Version**: 18+

### Vercel (Subdomain Projeleri)
- **ÖdevGPT**: `odev.edusonex.com.tr`
- **HEM**: `hem.edusonex.com.tr`
- **Anket**: `anket.edusonex.com.tr`

## 🎯 Özellikler

### Kurumsal
- ✅ **Edusonex CRM**: Kommo altyapılı okul yönetim sistemi
- ✅ **DokumanOS**: Öğretmen doküman ve içerik üretim sistemi

### Hibrit (AI + İnsan)
- ✅ **Sınav Fabrikası**: Sınırsız deneme sınavı üretimi
- ✅ **ÖdevGPT**: Sokratik AI ödev asistanı

### AI / Creator
- ✅ **Studio**: Video içerik üretim platformu
- ✅ **HEM AI**: Sektörel yapay zeka eğitimleri
- ✅ **Gamer**: Oyunlaştırılmış öğrenme deneyimleri

## 📄 Lisans

© 2026 Edusonex. Tüm hakları saklıdır.

---

**Bismillahirrahmanirrahim** 🌟

```

## SOURCE CODE

### src\App.css
```
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

### src\App.tsx
```
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import HemAI from "./pages/HemAI";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

import Universe from "./pages/Universe";
import ProjectDetail from "./pages/ProjectDetail";
import References from "./pages/References";
import Blog from "./pages/Blog";
import Kommo from "./pages/Kommo";
import Paradigm from "./pages/Paradigm";

import { ThemeProvider } from "@/components/theme-provider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/universe" element={<Universe />} />
            <Route path="/universe/layer-7-paradigm" element={<Paradigm />} />
            <Route path="/universe/:projectId" element={<ProjectDetail />} />
            <Route path="/kommo" element={<Kommo />} />
            <Route path="/referanslar" element={<References />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/urunler" element={<Products />} />
            <Route path="/cozumler" element={<Solutions />} />
            <Route path="/hem-ai" element={<HemAI />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features" element={<Products />} />
            <Route path="/gizlilik" element={<Privacy />} />
            <Route path="/kullanim-sartlari" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

```

### src\index.css
```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 220 30% 15%;

    --card: 0 0% 100%;
    --card-foreground: 220 30% 15%;

    --popover: 0 0% 100%;
    --popover-foreground: 220 30% 15%;

    /* Lacivert - Kurumsal Güven */
    --primary: 220 60% 20%;
    --primary-foreground: 0 0% 100%;

    /* Turkuaz - Teknoloji & İnovasyon */
    --secondary: 180 60% 45%;
    --secondary-foreground: 0 0% 100%;

    --muted: 210 20% 96%;
    --muted-foreground: 220 15% 45%;

    --accent: 180 55% 50%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 220 15% 90%;
    --input: 220 15% 90%;
    --ring: 220 60% 20%;

    --radius: 0.5rem;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 220 30% 8%;
    --foreground: 210 40% 98%;

    --card: 220 30% 10%;
    --card-foreground: 210 40% 98%;

    --popover: 220 30% 10%;
    --popover-foreground: 210 40% 98%;

    --primary: 180 60% 45%;
    --primary-foreground: 220 30% 8%;

    --secondary: 220 40% 25%;
    --secondary-foreground: 210 40% 98%;

    --muted: 220 25% 15%;
    --muted-foreground: 215 20% 65%;

    --accent: 180 50% 40%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 220 25% 20%;
    --input: 220 25% 20%;
    --ring: 180 60% 45%;

    --sidebar-background: 220 30% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 180 60% 45%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 220 25% 15%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 220 25% 20%;
    --sidebar-ring: 180 60% 45%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-sans antialiased;
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
  }
}

@layer utilities {
  .font-display {
    font-family: 'Playfair Display', serif;
  }
  
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary;
  }

  .bg-corporate {
    @apply bg-gradient-to-br from-primary via-primary to-secondary/20;
  }

  .bg-subtle {
    @apply bg-gradient-to-b from-muted/30 to-background;
  }
}

/* Minimal animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }
.animation-delay-400 { animation-delay: 400ms; }

```

### src\main.tsx
```
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

```

### src\vite-env.d.ts
```
/// <reference types="vite/client" />

```

### src\components\Footer.tsx
```
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Sol - Marka */}
          <div className="space-y-4">
            <span className="text-2xl font-bold tracking-tight text-white">EDUSONEX</span>
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-xs font-light">
              Okullara özel yapay zekâ destekli
              eğitim teknolojileri altyapıları.
            </p>
          </div>

          {/* Orta - Hızlı Bağlantılar */}
          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">Hızlı Bağlantılar</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <Link to="/hakkimizda" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/universe" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                  Evren
                </Link>
              </li>
              <li>
                <Link to="/referanslar" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Sağ - İletişim */}
          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">İletişim</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-white/70 group-hover:text-white transition-colors" />
                <span className="leading-relaxed">
                  Çakır Mah. Fevzipaşa Cad. No: 248<br />
                  03500 Sandıklı – Afyonkarahisar / Türkiye
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 shrink-0 text-white/70 group-hover:text-white transition-colors" />
                <a href="tel:+905320674063" className="hover:text-white transition-colors font-medium">
                  +90 532 067 40 63
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 shrink-0 text-white/70 group-hover:text-white transition-colors" />
                <a href="mailto:info@edusonex.com" className="hover:text-white transition-colors font-medium">
                  info@edusonex.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© 2026 Edusonex. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <Link to="/gizlilik" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            <Link to="/kullanim-sartlari" className="hover:text-white transition-colors">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

```

### src\components\Header.tsx
```
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

const navigation = [
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Evren", href: "/universe" },
  { name: "Referanslar", href: "/referanslar" },
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/iletisim" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold tracking-tight text-primary">
            EDUSONEX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted ${location.pathname === item.href
                ? "text-primary bg-muted"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Theme Toggle & Official Kommo Partner */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full w-10 h-10 bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-accent hover:text-accent-foreground"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <a
            href="https://www.kommo.com/tr/partnerler/bir-partner-bulun/edusonex-egitim-teknolojileri/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-secondary/30 rounded-md bg-secondary/5 hover:bg-secondary/10 transition-colors group"
          >
            <div className="w-6 h-6 rounded bg-secondary/20 flex items-center justify-center">
              <span className="text-xs font-bold text-secondary">K</span>
            </div>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">
              Official Partner
            </span>
            <ExternalLink className="h-3 w-3 text-muted-foreground" />
          </a>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${location.pathname === item.href
                  ? "text-primary bg-muted"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-border space-y-4">
              <div className="flex items-center justify-between px-4">
                <span className="text-sm font-medium text-muted-foreground">Görünüm</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="h-9 w-9 px-0 rounded-full border border-border/50"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>

              <a
                href="https://www.kommo.com/tr/partnerler/bir-partner-bulun/edusonex-egitim-teknolojileri/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 border border-secondary/30 rounded-md bg-secondary/5 mx-4"
              >
                <div className="w-6 h-6 rounded bg-secondary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-secondary">K</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Official Kommo Partner
                </span>
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

```

### src\components\Layout.tsx
```
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;

```

### src\components\NavLink.tsx
```
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };

```

### src\components\theme-provider.tsx
```
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    )

    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove("light", "dark")

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light"

            root.classList.add(systemTheme)
            return
        }

        root.classList.add(theme)
    }, [theme])

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme)
            setTheme(theme)
        },
    }

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}

```

### src\components\WhatsAppButton.tsx
```
import { MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const WhatsAppButton = () => {
    const phoneNumber = "905320674063";
    const message = "Merhaba, Edusonex hakkında bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-[#25D366]/50 transition-all duration-300 group animate-in fade-in zoom-in slide-in-from-bottom-5"
                        aria-label="WhatsApp ile İletişime Geçin"
                    >
                        {/* Pulse Effect */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:animate-none"></span>

                        {/* Icon */}
                        <MessageCircle className="relative h-8 w-8 fill-current" />
                    </a>
                </TooltipTrigger>
                <TooltipContent side="left" className="mr-2 bg-white text-black border-none shadow-xl">
                    <p className="font-medium">WhatsApp Destek Hattı</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default WhatsAppButton;

```

### src\hooks\use-mobile.tsx
```
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

```

### src\hooks\use-toast.ts
```
import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };

```

### src\lib\utils.ts
```
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

```

### src\pages\About.tsx
```
import { Target, Eye, Shield, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Shield,
    title: "Güvenilirlik",
    description: "Kurumsal standartlarda güvenli ve sürdürülebilir çözümler.",
  },
  {
    icon: Lightbulb,
    title: "İnovasyon",
    description: "Yapay zekâ ve teknoloji odaklı yenilikçi yaklaşımlar.",
  },
  {
    icon: Users,
    title: "İşbirliği",
    description: "Eğitim kurumlarıyla uzun vadeli stratejik ortaklıklar.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-corporate">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Edusonex Hakkında
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Eğitim kurumları için hazır yazılımlar değil,<br />
              kuruma özel dijital altyapılar tasarlar ve kurarız.
            </p>
          </div>
        </div>
      </section>

      {/* About Text */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Edusonex, eğitim kurumları için hazır yazılımlar sunmaz. Her okulun ihtiyacına göre, kendi markası ve alan adıyla çalışan özel dijital altyapılar kurar.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CRM'den sınav sistemlerine, doküman yönetiminden yapay zekâ destekli üretim araçlarına kadar okulların dijital dönüşümünü uçtan uca ele alır.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Vizyonumuz</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Eğitim kurumlarının teknolojiye bağımlı değil, teknolojiyi üreten ve yöneten yapılar haline gelmesini sağlamak.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Misyonumuz</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Okullara sürdürülebilir, güvenilir ve ölçeklenebilir dijital altyapılar kazandırmak.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Değerlerimiz
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Tüm çalışmalarımıza yön veren temel ilkeler.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

```

### src\pages\Blog.tsx
```
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CalendarDays, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
    {
        id: 1,
        title: "Yapay Zeka Destekli Eğitimde Yeni Dönem: Kişiselleştirilmiş Öğrenme",
        excerpt: "Her öğrencinin öğrenme hızı ve stili farklıdır. Yapay zeka teknolojileri ile bu farkı avantaja çeviriyoruz.",
        category: "Eğitim Teknolojileri",
        author: "Dr. Ahmet Yılmaz",
        date: "15 Şubat 2026",
        readTime: "5 dk",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
        slug: "yapay-zeka-egitim"
    },
    {
        id: 2,
        title: "Okul Yönetiminde Veri Odaklı Karar Alma Süreçleri",
        excerpt: "Büyük veri analitiği sayesinde okul yöneticileri artık daha stratejik ve isabetli kararlar alabiliyor.",
        category: "Yönetim",
        author: "Zeynep Demir",
        date: "8 Şubat 2026",
        readTime: "7 dk",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        slug: "veri-odakli-yonetim"
    },
    {
        id: 3,
        title: "Sanal Gerçeklik (VR) ile Sınıf Duvarlarını Aşmak",
        excerpt: "Öğrencileri tarih öncesi çağlara veya uzayın derinliklerine götüren sürükleyici eğitim deneyimleri.",
        category: "İnovasyon",
        author: "Mehmet Kaya",
        date: "2 Şubat 2026",
        readTime: "4 dk",
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop",
        slug: "sanal-gerceklik-egitim"
    },
    {
        id: 4,
        title: "Öğretmenler İçin Dijital Yetkinlik Rehberi",
        excerpt: "21. yüzyılın eğitimcisi olmak için sahip olunması gereken temel dijital beceriler ve araçlar.",
        category: "Akademi",
        author: "Elif Şahin",
        date: "28 Ocak 2026",
        readTime: "6 dk",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
        slug: "ogretmen-dijital-yetkinlik"
    },
    {
        id: 5,
        title: "Oyunlaştırma (Gamification) ile Motivasyonu Artırmak",
        excerpt: "Dersleri daha eğlenceli ve rekabetçi hale getirerek öğrenci katılımını maksimize etmenin yolları.",
        category: "Metodoloji",
        author: "Burak Çelik",
        date: "20 Ocak 2026",
        readTime: "5 dk",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
        slug: "oyunlastirma-motivasyon"
    },
    {
        id: 6,
        title: "Hibrit Eğitim Modelleri ve Geleceğin Okulu",
        excerpt: "Fiziksel ve dijital öğrenme ortamlarının en iyi yönlerini birleştiren esnek eğitim yapıları.",
        category: "Vizyon",
        author: "Ayşe Yurt",
        date: "15 Ocak 2026",
        readTime: "8 dk",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
        slug: "hibrit-egitim-gelecek"
    }
];

const Blog = () => {
    return (
        <Layout>
            <div className="bg-background min-h-screen py-16 lg:py-24">
                <div className="container mx-auto px-4">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                        <Badge variant="secondary" className="mb-4 text-primary bg-primary/10 hover:bg-primary/20 border-primary/20 px-4 py-1.5 rounded-full text-sm font-medium">
                            Blog & Görüşler
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Eğitim Teknolojilerindeki <br />
                            <span className="text-primary">Son Gelişmeler</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Yapay zeka, dijital dönüşüm ve modern eğitim metodolojileri üzerine uzman görüşleri, rehberler ve başarı hikayeleri.
                        </p>
                    </div>

                    {/* Featured Post (Optional - Highlight the first one) */}
                    <div className="mb-16 hidden lg:block animate-fade-in">
                        <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="h-full overflow-hidden">
                                    <img
                                        src={posts[0].image}
                                        alt={posts[0].title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-8 md:p-12">
                                    <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90">
                                        {posts[0].category}
                                    </Badge>
                                    <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                                        {posts[0].title}
                                    </h2>
                                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                                        {posts[0].excerpt}
                                    </p>
                                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                                        <div className="flex items-center gap-2">
                                            <User className="h-4 w-4" />
                                            {posts[0].author}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CalendarDays className="h-4 w-4" />
                                            {posts[0].date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            {posts[0].readTime}
                                        </div>
                                    </div>
                                    <Button className="group-hover:translate-x-2 transition-transform">
                                        Devamını Oku <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.slice(1).map((post) => (
                            <Card key={post.id} className="group flex flex-col border-border/50 bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <Badge className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur text-foreground border-border/50 hover:bg-background/90">
                                        {post.category}
                                    </Badge>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <CardHeader className="flex-1 p-6">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                        <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" /> {post.date}</span>
                                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </CardHeader>
                                <CardFooter className="p-6 pt-0 mt-auto border-t border-border/30">
                                    <div className="flex items-center justify-between w-full pt-4">
                                        <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                                                {post.author.charAt(0)}
                                            </div>
                                            {post.author}
                                        </div>
                                        <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary p-0 h-auto font-semibold">
                                            Oku
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button variant="outline" size="lg" className="px-8 min-w-[200px]">
                            Tüm Yazıları Gör
                        </Button>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Blog;

```

### src\pages\Contact.tsx
```
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:info@edusonex.com?subject=Edusonex İletişim Formu: ${formData.subject}&body=Ad Soyad: ${formData.name}%0D%0AE-posta: ${formData.email}%0D%0ATelefon: ${formData.phone}%0D%0A%0D%0AMesaj:%0D%0A${formData.message}`;

    window.location.href = mailtoLink;

    toast({
      title: "E-posta istemciniz açılıyor...",
      description: "Mesajınızı göndermek için açılan pencereden ilerleyebilirsiniz.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-corporate">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              İletişim
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Sorularınız ve işbirliği fırsatları için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Bize Ulaşın
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Ad Soyad *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-posta *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Konu *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Mesaj konusu"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mesajınız *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Mesajınızı buraya yazın..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  <Send className="mr-2 h-4 w-4" />
                  Gönder
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                İletişim Bilgileri
              </h2>

              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    Adres
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Çakır Mah. Fevzipaşa Cad. No: 248<br />
                  03500 Sandıklı – Afyonkarahisar / Türkiye
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    Telefon & WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:+905320674063"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +90 532 067 40 63
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    E-posta
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:info@edusonex.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    info@edusonex.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

```

### src\pages\HemAI.tsx
```
import { Brain, Lightbulb, Target, Users, Layers, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Layout from "@/components/Layout";

const highlights = [
  {
    icon: Layers,
    title: "Eğitim Sektörü İçin Özel AI Senaryoları",
    description: "Genel AI eğitimi değil, eğitim sektörüne özel tasarlanmış pratik uygulamalar.",
  },
  {
    icon: Users,
    title: "Öğretmenler ve Yöneticiler İçin Pratik Kullanım",
    description: "Günlük iş akışlarına entegre edilebilecek, hemen uygulanabilir AI becerileri.",
  },
  {
    icon: Sparkles,
    title: "Kuruma Özel İçerik ve Uygulamalar",
    description: "Her kurumun ihtiyacına göre özelleştirilmiş eğitim programları ve AI araçları.",
  },
];

const HemAI = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-corporate">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4" />
              Sektörel Yapay Zekâ Eğitimleri
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              HEM AI
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              HEM AI, eğitimciler ve kurumlar için teorik değil, <strong className="text-primary-foreground">üretken ve uygulamalı</strong> yapay zekâ eğitimleri sunar.
            </p>
          </div>
        </div>
      </section>

      {/* Core Message */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-8 mb-10">
              <Card className="border-border/50 flex-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-7 w-7 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground line-through">Yapay zekâyı anlatmak</p>
                </CardContent>
              </Card>
              <Card className="border-secondary/50 flex-1 bg-secondary/5">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-7 w-7 text-secondary" />
                  </div>
                  <p className="text-foreground font-semibold">Yapay zekâyı kullandırmak</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Amaç, AI'ı sadece öğretmek değil; eğitimcilerin ve kurumların günlük iş akışlarında <strong className="text-foreground">aktif olarak kullanmasını</strong> sağlamaktır.
            </p>
          </div>
        </div>
      </section>

      {/* Kimler İçin */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
              Kimler İçin?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-5 py-3 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
                Okul yöneticileri
              </div>
              <div className="px-5 py-3 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
                Öğretmenler
              </div>
              <div className="px-5 py-3 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
                Eğitim kurumu ekipleri
              </div>
            </div>
            <p className="mt-6 text-center text-muted-foreground">
              Teknik bilgi gerektirmeden, doğrudan uygulamaya yönelik.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-24 bg-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              HEM AI Farkı
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Yapay zekâ destekli eğitim teknolojileri alanında uzmanlaşmış, uygulamaya odaklı yaklaşım.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <Card key={item.title} className="border-border/50 hover:border-secondary/50 transition-colors bg-gradient-to-br from-card to-secondary/5">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Kurumunuzda AI Dönüşümünü Birlikte Başlatalım
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HEM AI programları ile öğretmen iş yükünü azaltan, üretkenliği artıran ve kurumunuzu geleceğe hazırlayan yapay zekâ yetkinlikleri kazanın.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HemAI;

```

### src\pages\Index.tsx
```
import { Link } from "react-router-dom";
import { ArrowRight, Building2, FileText, GraduationCap, Sparkles, Brain, Gamepad2, Globe, Layers, Users, TrendingUp, ExternalLink, Shield, Archive, BarChart3, FileCheck, Fingerprint, Video, Network, Glasses, Files } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 py-2 px-4 text-sm bg-background/50 backdrop-blur-sm border-primary/20 text-primary animate-fade-in">
              ✨ Geleceğin Eğitim Teknolojisi
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in [animation-delay:200ms]">
              Okulunuz İçin <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary">
                Yapay Zeka Destekli
              </span>
              <br />
              Dijital Dönüşüm
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
              Edusonex, okulların ihtiyaç duyduğu tüm dijital araçları tek bir platformda birleştirir.
              Yönetimden eğitime, ölçmeden iletişime kadar her şey burada.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:600ms]">
              <Link to="/iletisim">
                <Button size="lg" className="h-12 px-8 text-lg group">
                  Hemen Başlayın
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/urunler">
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
                  Özellikleri Keşfet
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Tek Platform</h3>
              <p className="mt-2 text-sm text-muted-foreground">Tüm eğitim süreçlerinizi tek bir noktadan yönetin.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Modüler Yapı</h3>
              <p className="mt-2 text-sm text-muted-foreground">İhtiyacınız olan modülleri seçin, kullandıkça ödeyin.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Okul Markası Güçlenir</h3>
              <p className="mt-2 text-sm text-muted-foreground">Okul markası ve alan adıyla çalışan sistemler ile dijital kimlik oluşur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Edusonex Ekosistemi Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              🚀 Edusonex Evreni
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Bütünleşik Eğitim Teknolojileri Ekosistemi
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Okulunuzun dijital dönüşümü için ihtiyacınız olan her şey tek bir çatıda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {/* 1. ÖdevGPT */}
            <Card className="border-green-500/30 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10 bg-gradient-to-br from-card to-green-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Brain className="h-6 w-6 text-green-600" />
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">ÖdevGPT</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">odev.</div>
                <CardDescription>Sokratik yapay zeka ile kişiselleştirilmiş ödev asistanı.</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://odev.edusonex.com.tr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-green-500/20 hover:bg-green-500/10 hover:text-green-600 group-hover:border-green-500/40">
                    Projeye Git <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* 2. DokumanOS */}
            <Card className="border-blue-600/30 hover:border-blue-600/50 transition-all hover:shadow-lg hover:shadow-blue-600/10 bg-gradient-to-br from-card to-blue-600/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Files className="h-6 w-6 text-blue-700" />
                  </div>
                  <Badge className="bg-blue-600/10 text-blue-700 border-blue-600/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">DokumanOS</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">evrak.edusonex.com.tr</div>
                <CardDescription>Kurumsal hafıza ve doküman yönetim sistemi.</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://evrak.edusonex.com.tr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-blue-600/20 hover:bg-blue-600/10 hover:text-blue-700 group-hover:border-blue-600/40">
                    Projeye Git <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* 3. HEM */}
            <Card className="border-blue-500/30 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 bg-gradient-to-br from-card to-blue-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Archive className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">HEM</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">hem.edusonex.com.tr</div>
                <CardDescription>Halk Eğitim Merkezleri için dijital kurs ve içerik yönetimi.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-600 group-hover:border-blue-500/40" disabled>
                  Yakında Yayında <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* 4. Anket */}
            <Card className="border-purple-500/30 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 bg-gradient-to-br from-card to-purple-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Anket</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">anket.edusonex.com.tr</div>
                <CardDescription>Gerçek zamanlı oylama ve interaktif anket sistemi.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-purple-500/20 hover:bg-purple-500/10 hover:text-purple-600 group-hover:border-purple-500/40" disabled>
                  Yakında Yayında <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* 5. Sınav (Nebula) */}
            <Card className="border-orange-500/30 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10 bg-gradient-to-br from-card to-orange-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileCheck className="h-6 w-6 text-orange-600" />
                  </div>
                  <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/20">🚧 Beta</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Sınav Fabrikası</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">sinav.edusonex.com.tr</div>
                <CardDescription>Yapay zeka destekli sınırsız soru ve sınav üretim motoru.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-orange-500/20 hover:bg-orange-500/10 hover:text-orange-600 group-hover:border-orange-500/40" disabled>
                  Geliştiriliyor <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* 6. CRM */}
            <Card className="border-blue-500/30 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 bg-gradient-to-br from-card to-blue-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex CRM</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">edusonex.com/kommo</div>
                <CardDescription>Kommo tabanlı öğrenci ve veli ilişkileri yönetimi.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/kommo">
                  <Button variant="outline" className="w-full border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-600 group-hover:border-blue-500/40">
                    Projeye Git <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 7. HumanOS */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Fingerprint className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">HumanOS</CardTitle>
                <CardDescription>İnsan kaynakları ve performans yönetim sistemi.</CardDescription>
              </CardHeader>
            </Card>

            {/* 8. Studio */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Studio</CardTitle>
                <CardDescription>AI destekli video ve eğitim içeriği üretim stüdyosu.</CardDescription>
              </CardHeader>
            </Card>

            {/* 9. Gamer */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Gamepad2 className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Gamer</CardTitle>
                <CardDescription>Eğitimde oyunlaştırma ve e-spor modülleri.</CardDescription>
              </CardHeader>
            </Card>

            {/* 10. Akademi */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Akademi</CardTitle>
                <CardDescription>Öğretmen ve veli eğitimleri, sertifika programları.</CardDescription>
              </CardHeader>
            </Card>

            {/* 11. Network */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Network</CardTitle>
                <CardDescription>Eğitimciler ve okullar arası sosyal işbirliği ağı.</CardDescription>
              </CardHeader>
            </Card>

            {/* 12. Metaverse */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Glasses className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Metaverse</CardTitle>
                <CardDescription>Sanal gerçeklik tabanlı sürükleyici eğitim ortamları.</CardDescription>
              </CardHeader>
            </Card>


          </div>

          <div className="text-center mt-16 p-8 bg-muted/50 rounded-xl border border-border/50">
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              Edusonex Evreni sürekli genişliyor. Yeni modüller çok yakında!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Eğitimin Geleceğini Bugünden İnşa Edin
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Edusonex teknolojileriyle okulunuzu yapay zeka çağına hazırlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/iletisim">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-primary font-semibold hover:bg-white/90">
                Bizimle İletişime Geçin <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

```

### src\pages\Kommo.tsx
```
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    MessageCircle,
    Mail,
    Send,
    Instagram,
    Phone,
    Globe,
    TrendingDown,
    Search,
    Target,
    Cpu,
    Layers,
    ShieldCheck,
    Brain,
    CheckCircle2,
    ArrowRight,
    Play,
    Zap
} from "lucide-react";
import { useState } from "react";

const Kommo = () => {
    const [phone, setPhone] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.open(`https://wa.me/905320674063?text=Selam, okulun dijital karnesi için rapor almak istiyorum. Numaram: ${phone}`, '_blank');
    };

    return (
        <Layout>
            <div className="min-h-screen bg-[#0a0a0F] text-white overflow-hidden relative">

                {/* 1. Hero Section */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    {/* Floating Icons Background */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                        <MessageCircle className="absolute top-[10%] left-[15%] h-12 w-12 text-green-500 animate-bounce [animation-duration:3s]" />
                        <Mail className="absolute top-[15%] right-[20%] h-10 w-10 text-blue-400 animate-pulse" />
                        <Send className="absolute top-[40%] left-[10%] h-10 w-10 text-cyan-500 -rotate-12" />
                        <Instagram className="absolute top-[20%] right-[10%] h-12 w-12 text-pink-500 animate-bounce [animation-duration:4s]" />
                        <Phone className="absolute bottom-[20%] left-[5%] h-10 w-10 text-orange-500 rotate-12" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <Badge variant="outline" className="mb-6 bg-blue-500/10 border-blue-500/20 text-blue-400 px-4 py-1.5 text-sm">
                            Eğitim Kurumları İçin Büyüme CRM'i
                        </Badge>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-5xl mx-auto leading-tight">
                            Eğitim kurumunuzu yönetmenizi sağlayacak <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                                tüm eşsiz yöntemler
                            </span> <br />
                            tek bir sistemde toplandı
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Rastgele reklamlar vermeyi bırakın. EdusonEX ile ölçülebilir, yapay zeka destekli ve sonuç garantili öğrenci kazanım sistemine geçin.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 h-14 text-lg font-semibold group rounded-full">
                                Ücretsiz Büyüme Analizi Alın
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 2. Problem Section */}
                <section className="py-24 bg-[#13131A]/50 relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <Badge variant="outline" className="mb-4 bg-red-500/10 border-red-500/20 text-red-400">
                                Tanıdık Geliyor mu?
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Eğitim Pazarlamasında 'Parçalanmışlık' <br />
                                Sizi Yavaşlatıyor mu?
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Çoğu okul, dijital dünyada kaybolmuş durumda. Ayrı ayrı araçlar, koordinasyonsuz çalışmalar ve ölçülemeyen sonuçlar...
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    icon: Globe,
                                    title: "Web Siteniz Sadece Bir Broşür mü?",
                                    desc: "Statik, etkileşimsiz web siteleri ziyaretçileri potansiyel veliye dönüştüremiyor. Siteniz çalışmıyor, sadece var."
                                },
                                {
                                    icon: Phone,
                                    title: "Veli Telefonlarını Takip Edemiyor Musunuz?",
                                    desc: "Sosyal medyadan gelen sorular, kaçırılan aramalar, kayıp fırsatlar... Her gün potansiyel öğrenci kaybediyorsunuz."
                                },
                                {
                                    icon: TrendingDown,
                                    title: "Reklam Bütçeniz Boşa mı Gidiyor?",
                                    desc: "Hangi reklamın ne getirdiğini bilmiyorsunuz. Para harcıyorsunuz ama sonucu ölçemiyorsunuz."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#1A1A23] border border-white/5 p-8 rounded-3xl hover:border-red-500/30 transition-all hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                                        <item.icon className="h-6 w-6 text-red-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-center mt-12 text-blue-400 font-medium tracking-wide italic">
                            Bu problemleri tek bir sistemle çözmenin zamanı geldi.
                        </p>
                    </div>
                </section>

                {/* 3. Solution Section */}
                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <Badge variant="outline" className="mb-4 bg-blue-500/10 border-blue-500/20 text-blue-400">
                                Çözüm
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Biz Reklam Ajansı Değil, <span className="text-orange-500">Büyüme Motoruyuz</span>
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                EdusonEX, okulunuzun dijital pazarlama süreçlerini tek bir platformda birleştirir. Parçalı çözümler yerine bütünleşik bir sistem.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
                            {[
                                { icon: Search, title: "Akıllı Kayıt Hunileri", desc: "Potansiyel veliyi yakalayan, bilgi toplayan ve otomatik takip eden özel tasarım landing page'ler." },
                                { icon: Zap, title: "Çok Kanallı Otomasyon", desc: "SMS, E-posta ve WhatsApp üzerinden otomatik bilgilendirme ve hatırlatma mesajları." },
                                { icon: Brain, title: "AI Destekli İçerik", desc: "EduBox yapay zeka altyapısı ile kişiselleştirilmiş iletişim ve içerik önerileri." },
                                { icon: Target, title: "Şeffaf CRM Paneli", desc: "Hangi reklamdan kaç öğrenci geldiğini, dönüşüm oranlarını anlık görün." },
                                { icon: MessageCircle, title: "Mesajlaşma Merkezi", desc: "Tüm sosyal medya mesajlarınızı tek bir yerden yönetin, hiçbir soruyu kaçırmayın." },
                                { icon: Layers, title: "Veli Takip Sistemi", desc: "Her velinin yolculuğunu baştan sona izleyin, doğru zamanda doğru mesajı gönderin." }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#13131A] border border-white/5 p-6 rounded-2xl hover:border-blue-500/30 transition-all flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex-shrink-0 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                        <item.icon className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Kommo Partner Banner */}
                        <div className="max-w-4xl mx-auto bg-blue-700/20 border border-blue-500/20 rounded-3xl p-8 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 blur-[80px] opacity-20 pointer-events-none" />
                            <h3 className="text-2xl font-bold mb-4">Kommo CRM Türkiye Resmi Partneri</h3>
                            <p className="text-gray-400 mb-8">
                                Dünya çapında 15.000+ işletmenin tercih ettiği Kommo CRM altyapısını eğitim sektörüne özel olarak Türkiye'de sunuyoruz.
                            </p>
                            <div className="flex justify-center gap-8 items-center flex-wrap opacity-80">
                                <div className="bg-white/10 px-6 py-3 rounded-xl border border-white/5 flex items-center gap-2">
                                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold text-white text-xs">K</div>
                                    <span className="font-bold tracking-tight">Kommo <span className="text-blue-400">partner</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Video & Detail Section */}
                <section className="py-24 bg-[#13131A]/30">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                            <div>
                                <h3 className="text-3xl font-bold mb-6">CRM Integrated System</h3>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Edusonex CRM ile okul süreçlerinizi otomatize edin. Manuel takibi bırakın, yapay zekanın gücünü arkanıza alın.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "15 dakikada hızlı kurulum",
                                        "%100 bulut tabanlı erişim",
                                        "Esnek API entegrasyonu",
                                        "Gelişmiş analitik raporlama"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative aspect-video bg-black/50 rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/992Nd7PtBiA"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. CTA Section (Lead Magnet) */}
                <section className="py-24 bg-blue-800/20 relative border-t border-white/5">
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-orange-500/20">
                            <Phone className="h-8 w-8 text-orange-500" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Okulunuzun Dijital Karnesini <br />
                            <span className="text-orange-500">Merak Ediyor Musunuz?</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Sadece WhatsApp numaranızı girin, size eksiklerinizi ve fırsatlarınızı içeren 3 sayfalık ücretsiz bir rapor gönderelim.
                        </p>

                        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-[#1A1A23] p-2 rounded-2xl border border-white/10 flex flex-col sm:flex-row gap-2 shadow-2xl">
                            <input
                                type="tel"
                                placeholder="WhatsApp numaranız (Örn: 5XX XXX XX XX)"
                                className="flex-1 bg-transparent border-0 focus:ring-0 text-white px-4 py-3 placeholder:text-gray-500"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <Button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2">
                                <Send className="h-4 w-4" />
                                Gönder
                            </Button>
                        </form>
                        <p className="mt-4 text-xs text-gray-500">
                            Bilgileriniz gizli tutulacak ve sadece rapor göndermek için kullanılacaktır.
                        </p>
                    </div>

                    {/* Background Gradients */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-blue-500/10 blur-[120px]" />
                        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-orange-500/5 blur-[120px]" />
                    </div>
                </section>

            </div>
        </Layout>
    );
};

export default Kommo;

```

### src\pages\NotFound.tsx
```
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

```

### src\pages\Paradigm.tsx
```
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    School,
    RefreshCw,
    Castle,
    Clock,
    Box,
    Cpu,
    CheckCircle2,
    ArrowRight,
    Play,
    Zap,
    TrendingUp,
    Globe,
    Glasses,
    Monitor,
    ShieldCheck,
    Crown,
    Sparkles
} from "lucide-react";

const Paradigm = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-[#0a0a0F] text-white overflow-hidden relative">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 py-24 relative z-10">

                    {/* 1. Top Icons & Sync Status */}
                    <div className="flex flex-col items-center justify-center mb-16 animate-fade-in">
                        <div className="flex items-center gap-12 md:gap-24 mb-8">
                            <div className="flex flex-col items-center gap-3 group text-gray-500 hover:text-white transition-colors">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all">
                                    <School className="h-8 w-8" />
                                </div>
                                <span className="text-xs font-medium uppercase tracking-widest">Fiziksel Okul</span>
                            </div>

                            <div className="flex flex-col items-center gap-3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-amber-500/20 blur-xl animate-pulse" />
                                    <RefreshCw className="h-6 w-6 text-amber-500 animate-spin [animation-duration:4s]" />
                                </div>
                                <span className="text-[10px] font-bold text-amber-500/80 uppercase tracking-[0.2em]">Senkronizasyon</span>
                            </div>

                            <div className="flex flex-col items-center gap-3 group text-amber-500">
                                <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-transform">
                                    <Castle className="h-10 w-10" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest">Dijital İkiz</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-6">
                            Okulunuzun Metaverse'deki İkizi
                        </h1>
                        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto leading-relaxed">
                            Katman 7, sadece bir yazılım değil — okulunuzun dijital kopyasıdır. Fiziksel dünyadaki her veri, her etkinlik, her öğrenci burada yaşayan bir simülasyona dönüşür.
                        </p>
                    </div>

                    {/* 2. Quick Status Pills */}
                    <div className="flex flex-wrap justify-center gap-4 mb-24 animate-fade-in [animation-delay:200ms]">
                        {[
                            { icon: Clock, label: "Gerçek Zamanlı" },
                            { icon: Box, label: "3D Simülasyon" },
                            { icon: Cpu, label: "AI Destekli" }
                        ].map((pill, i) => (
                            <div key={i} className="flex items-center gap-2 px-6 py-3 bg-[#13131A] border border-amber-500/20 rounded-xl text-amber-500 font-bold text-sm hover:bg-amber-500/5 transition-colors cursor-default">
                                <pill.icon className="h-4 w-4" />
                                {pill.label}
                            </div>
                        ))}
                    </div>

                    {/* 3. Main Feature Block */}
                    <div className="max-w-6xl mx-auto mb-24 animate-fade-in [animation-delay:400ms]">
                        <div className="bg-[#13131A] border border-white/5 rounded-[40px] p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 group">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />

                            <div className="flex-1 relative z-10">
                                <div className="flex items-center gap-2 text-amber-500 mb-4">
                                    <Crown className="h-5 w-5" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Nihai Model</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                    Tüm Katmanların Birleştiği Nokta
                                </h2>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Diğer 6 katman, bu dijital ikizin birer parçasıdır. Interface'den Network'e kadar her şey burada tek bir bütün halinde çalışır. Okulunuz artık sadece bir bina değil — yaşayan, öğrenen, evrilen bir dijital varlıktır.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Fiziksel okulla gerçek zamanlı senkronizasyon",
                                        "Öğrenci ve personel avatarları",
                                        "Sanal sınıflar ve etkinlik alanları"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex-1 w-full lg:w-auto relative">
                                <div className="relative aspect-square max-w-[400px] mx-auto flex items-center justify-center">
                                    {/* Abstract Visual for Platform */}
                                    <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
                                    <div className="relative z-10 w-48 h-48 bg-amber-500/10 border border-amber-500/30 rounded-3xl flex items-center justify-center shadow-2xl shadow-amber-500/20 group-hover:scale-110 transition-transform duration-500">
                                        <Castle className="h-20 w-20 text-amber-500" />
                                    </div>
                                    {/* Floating Orbits */}
                                    <div className="absolute w-[120%] h-[120%] border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute w-[150%] h-[150%] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                    {/* Orbits Points */}
                                    <div className="absolute top-[10%] left-[20%] w-2 h-2 rounded-full bg-blue-500/50" />
                                    <div className="absolute bottom-[20%] right-[10%] w-3 h-3 rounded-full bg-amber-500/50" />
                                    <div className="absolute top-[50%] right-0 w-2 h-2 rounded-full bg-purple-500/50" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Secondary Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-24 animate-fade-in [animation-delay:600ms]">
                        {[
                            { title: "Simülasyon & Tahmin", desc: "Gelecek senaryolarını dijital ikizde test edin.", icon: TrendingUp },
                            { title: "Sanal Turlar", desc: "Veliler ve öğrenciler okulu metaverse'de gezsin.", icon: Globe },
                            { title: "Veri Görselleştirme", desc: "Tüm okul verileri 3D ortamda canlı olarak.", icon: Monitor },
                            { title: "Uzaktan Yönetim", Okulu: "Okulu dünyanın her yerinden yönetin.", icon: Glasses }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#13131A] border border-white/5 p-6 rounded-2xl hover:bg-white/5 transition-colors group">
                                <h4 className="font-bold text-amber-500 mb-2">{item.title}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* 5. Video Section */}
                    <div className="max-w-4xl mx-auto mb-24 animate-fade-in [animation-delay:700ms]">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl font-bold mb-4">Paradigm Tanıtım Videosu</h3>
                            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
                        </div>
                        <div className="relative aspect-video bg-black/50 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/QX-jsFuny-E"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* 6. Layers Connection */}
                    <div className="max-w-6xl mx-auto mb-24 text-center animate-fade-in [animation-delay:800ms]">
                        <h3 className="text-2xl font-bold mb-4">Bu İkizi Oluşturan Katmanlar</h3>
                        <p className="text-gray-500 text-sm mb-12">Her biri dijital ikizin bir parçası — detaylar için tıklayın</p>

                        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
                            {[
                                { n: 1, name: "Interface", color: "border-blue-500/30 text-blue-400" },
                                { n: 2, name: "Core", color: "border-red-500/30 text-red-400" },
                                { n: 3, name: "Architecture", color: "border-purple-500/30 text-purple-400" },
                                { n: 4, name: "Dynamics", color: "border-green-500/30 text-green-400" },
                                { n: 5, name: "Intelligence", color: "border-yellow-500/30 text-yellow-400" },
                                { n: 6, name: "Network", color: "border-cyan-500/30 text-cyan-400" }
                            ].map((layer) => (
                                <div key={layer.n} className={`bg-[#13131A] border ${layer.color} p-4 rounded-xl flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-all cursor-pointer`}>
                                    <span className="text-xl font-bold mb-1">{layer.n}</span>
                                    <span className="text-[10px] uppercase tracking-tighter">{layer.name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="w-full bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl flex items-center justify-center gap-3">
                            <Crown className="h-4 w-4 text-amber-500" />
                            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Katman 7: Paradigm — Tüm bu parçaların birleştiği nihai form</span>
                        </div>
                    </div>

                    {/* 7. Footer Banner */}
                    <div className="max-w-5xl mx-auto rounded-[32px] overflow-hidden relative group animate-fade-in [animation-delay:900ms]">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 to-blue-900/40 transition-all duration-500 group-hover:scale-105" />
                        <div className="relative z-10 p-12 md:p-20 text-center border border-white/10 rounded-[32px]">
                            <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-amber-500/30 group-hover:scale-110 transition-transform">
                                <Crown className="h-8 w-8 text-amber-500" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                EdusonEX Evreni'nin Zirvesi
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Dijital ikiziniz hazır olduğunda, okulunuz artık zaman ve mekandan bağımsız — her an, her yerde, sınırsız.
                            </p>
                            <a href="https://wa.me/905320674063" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-12 h-14 text-lg font-bold rounded-full group">
                                    <Sparkles className="mr-2 h-5 w-5" />
                                    Kemalât — Mükemmelliğin Dijital Formu
                                </Button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Paradigm;

```

### src\pages\Privacy.tsx
```
import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Gizlilik Politikası</h1>
        <p className="text-muted-foreground mb-12">Son Güncelleme: 1 Ocak 2026</p>

        <div className="prose prose-blue dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Giriş</h2>
            <p className="leading-relaxed">
              Edusonex Eğitim Teknolojileri ("Edusonex", "Biz", "Şirket"), okullara özel yapay zeka destekli dijital altyapılar sunan bir teknoloji şirketidir.
              Kullanıcılarımızın (Okul yöneticileri, öğretmenler, öğrenciler ve veliler) gizliliği bizim için en öncelikli konudur.
              Bu Gizlilik Politikası, Edusonex platformu, uygulamaları ve hizmetleri ("Hizmetler") kullanılırken kişisel verilerin nasıl toplandığını,
              işlendiğini ve korunduğunu açıklar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Toplanan Veriler</h2>
            <p className="mb-4">Hizmetlerimizi sağlarken aşağıdaki veri türlerini toplayabiliriz:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası (gerekli hallerde), okul numarası.</li>
              <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, adres.</li>
              <li><strong>Eğitim Verileri:</strong> Sınav sonuçları, ödev performansları, devam-devamsızlık bilgileri, öğrenme analitikleri.</li>
              <li><strong>Sistem Kullanım Verileri:</strong> IP adresi, cihaz bilgileri, oturum süreleri, tıklama analizleri.</li>
              <li><strong>Yapay Zeka Etkileşimleri:</strong> ÖdevGPT, Sınav Fabrikası gibi modüllerle yapılan etkileşimler ve oluşturulan içerikler.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Verilerin Kullanım Amacı</h2>
            <p className="mb-4">Toplanan veriler şu amaçlarla kullanılır:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li><strong>Eğitim Hizmetlerinin Sunulması:</strong> Okul yönetim süreçlerinin dijitalleştirilmesi, öğrenci takibi ve raporlama.</li>
              <li><strong>Yapay Zeka Destekli Analiz:</strong> HumanOS modülü ile öğrenci yetenek haritalarının çıkarılması ve kişiselleştirilmiş öğrenme önerilerinin sunulması.</li>
              <li><strong>İletişim:</strong> Veli bilgilendirme mesajları, sistem bildirimleri ve güncellemeler.</li>
              <li><strong>Hizmet İyileştirme:</strong> Sistem performansının analizi ve kullanıcı deneyiminin geliştirilmesi.</li>
              <li><strong>Yasal Yükümlülükler:</strong> MEB ve diğer resmi kurumların mevzuatlarına uyum.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Veri Güvenliği ve Altyapı</h2>
            <p className="leading-relaxed">
              Edusonex, verilerinizi korumak için endüstri standardı güvenlik önlemleri uygular. Verileriniz, SSL/TLS şifreleme ile korunur ve
              yetkisiz erişimlere karşı sürekli izlenen güvenli sunucularda saklanır. Yapay zeka modellerimiz, veri anonimleştirme prensiplerine uygun olarak çalışır.
              Her okulun verisi kendi özel alanında (tenant) izole edilir ve diğer kurumlarla paylaşılmaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Üçüncü Taraflarla Paylaşım</h2>
            <p className="leading-relaxed">
              Kişisel verileriniz, yasal zorunluluklar haricinde ve hizmetin ifası için gerekli olan (örn. SMS sağlayıcıları, bulut altyapı sağlayıcıları)
              iş ortaklarımız dışında üçüncü şahıslarla paylaşılmaz, satılmaz veya kiralanmaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Haklarınız</h2>
            <p className="mb-4">KVKK ve ilgili mevzuat uyarınca aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li>Verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>İşlenen verilerinizle ilgili bilgi talep etme,</li>
              <li>Verilerin eksik veya yanlış işlenmesi halinde düzeltilmesini isteme,</li>
              <li>Verilerinizin silinmesini veya yok edilmesini talep etme.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">7. İletişim</h2>
            <p className="leading-relaxed">
              Gizlilik politikamız veya veri işleme süreçlerimizle ilgili sorularınız için aşağıdaki kanallardan bize ulaşabilirsiniz:
            </p>
            <div className="mt-4 p-6 bg-muted rounded-lg border border-border/50">
              <p><strong>Edusonex Eğitim Teknolojileri</strong></p>
              <p>Adres: Çakır Mah. Fevzipaşa Cad. No: 248, 03500 Sandıklı – Afyonkarahisar / Türkiye</p>
              <p>Telefon: +90 532 067 40 63</p>
              <p>E-posta: info@edusonex.com</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;

```

### src\pages\Products.tsx
```
import { Building2, FileText, GraduationCap, Sparkles, Brain, Gamepad2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const corporateProducts = [
  {
    icon: Building2,
    name: "Edusonex CRM",
    description: "Kommo altyapısı üzerine kurulu, eğitim kurumları için müşteri, veli, öğrenci ve süreç yönetimi sistemi.",
    note: "Bu ürün white-label değildir.",
  },
  {
    icon: FileText,
    name: "Edusonex DokumanOS",
    description: "Öğretmenlerin doküman, planlama ve içerik üretim süreçlerini sadeleştiren okula özel sistem.",
  },
];

const hybridProducts = [
  {
    icon: GraduationCap,
    name: "Edusonex Sınav",
    description: "Okula özel alan adıyla çalışan, sınırsız deneme sınavı üretimine odaklı yapay zekâ destekli sistem.",
    highlight: "Yayınevi bağımlılığını azaltır.",
  },
];

const aiProducts = [
  {
    icon: Sparkles,
    name: "Edusonex Studio",
    description: "Yaratıcı içerik üretimi için yapay zekâ destekli stüdyo ortamı.",
  },
  {
    icon: Brain,
    name: "HEM AI",
    description: "Sektörel yapay zekâ eğitimleri ve uygulamalı AI çözümleri.",
  },
  {
    icon: Gamepad2,
    name: "Edusonex Gamer",
    description: "Eğitimde oyunlaştırma ve interaktif öğrenme deneyimleri.",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-corporate">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Okullara Özel Dijital Üretim Sistemleri
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Her okulun ihtiyacına göre özelleştirilen, kendi markası ve alan adıyla çalışan yapay zekâ destekli eğitim teknolojileri.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Products */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">Kurumsal</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Kurumsal Çözümler
            </h2>
            <p className="mt-2 text-muted-foreground">
              Eğitim kurumlarının idari ve operasyonel süreçleri için güvenilir altyapılar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {corporateProducts.map((product) => (
              <Card key={product.name} className="border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                {product.note && (
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground italic">
                      {product.note}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Products */}
      <section className="py-16 lg:py-20 bg-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <Badge className="mb-4 bg-secondary text-secondary-foreground hover:bg-secondary">Hibrit</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Hibrit Çözümler
            </h2>
            <p className="mt-2 text-muted-foreground">
              Kurumsal yapı ile yapay zekâ teknolojilerinin bütünleşik gücü.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hybridProducts.map((product) => (
              <Card key={product.name} className="border-border/50 hover:border-secondary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <product.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                {product.highlight && (
                  <CardContent className="pt-0">
                    <p className="text-sm text-secondary font-medium">
                      {product.highlight}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Products */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <Badge variant="outline" className="mb-4 border-secondary text-secondary">AI / Creator</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              AI & Yaratıcı Araçlar
            </h2>
            <p className="mt-2 text-muted-foreground">
              Yapay zekâ destekli üretken ve yaratıcı eğitim teknolojileri.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiProducts.map((product) => (
              <Card key={product.name} className="border-border/50 hover:border-secondary/50 transition-colors bg-gradient-to-br from-card to-secondary/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-4">
                    <product.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Message */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Okulu teknolojik, üretken ve öğrenci dostu bir ortama dönüştürür.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;

```

### src\pages\ProjectDetail.tsx
```
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Clock, ShieldCheck, Zap, ArrowRight, Play, CheckCircle2 } from "lucide-react";

// Proje verileri (Dummy Data - Gerçek verilerle güncellenebilir)
const projects = {
    "layer-2-core": {
        badge: "layer2.hero.badge",
        title: "CORE",
        subtitle: "Cevher / HumanOS",
        description: "Teknolojinin kalbindeki biyolojik cevher. Öğrencinin öğrenme profilini çıkaran, güçlü ve zayıf yönlerini gösteren, karar alırken güvenebileceğiniz öğrenme analitiği platformu.",
        stats: [
            { icon: Clock, value: "3 dk", label: "Analiz Süresi" },
            { icon: ShieldCheck, value: "%100", label: "Gizlilik" },
            { icon: Zap, value: "Anlık", label: "Öneriler" }
        ],
        features: [
            "Biyolojik Veri Analizi",
            "Kişiselleştirilmiş Öğrenme Yolu",
            "Yetenek Haritalama",
            "Duygu Durum Tespiti"
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Örnek video
        gradient: "from-red-500/20 to-orange-500/20",
        accentColor: "text-red-400",
        buttonColor: "bg-red-600 hover:bg-red-700",
        bg: "bg-red-500/20"
    },
    "layer-3-architecture": {
        badge: "layer3.hero.badge",
        title: "ARCHITECTURE",
        subtitle: "Tasavvur / Studio",
        description: "Yaratıcılığın sınırlarını zorlayın. Yapay zeka destekli içerik üretim stüdyosu ile eğitim materyallerini saniyeler içinde oluşturun.",
        stats: [
            { icon: Clock, value: "Saniyeler", label: "Üretim Hızı" },
            { icon: ShieldCheck, value: "4K", label: "Çözünürlük" },
            { icon: Zap, value: "Sınırsız", label: "Yaratıcılık" }
        ],
        features: [
            "Metinden Video Üretimi",
            "Otomatik Seslendirme",
            "Akıllı Montaj",
            "İçerik Zenginleştirme"
        ],
        videoUrl: "",
        gradient: "from-purple-500/20 to-pink-500/20",
        accentColor: "text-purple-400",
        buttonColor: "bg-purple-600 hover:bg-purple-700",
        bg: "bg-purple-500/20"
    },
    "layer-4-dynamics": {
        badge: "layer4.hero.badge",
        title: "DYNAMICS",
        subtitle: "Vecd / Gamer",
        description: "Eğitimi oyuna dönüştürün. Rekabet, işbirliği ve eğlenceyi bir araya getiren oyunlaştırma modülü.",
        stats: [
            { icon: Clock, value: "7/24", label: "Erişim" },
            { icon: ShieldCheck, value: "+%40", label: "Motivasyon" },
            { icon: Zap, value: "Canlı", label: "Skor Tablosu" }
        ],
        features: [
            "Rozet ve Puan Sistemi",
            "Liderlik Tabloları",
            "Takım Görevleri",
            "Sanal Ödüller"
        ],
        videoUrl: "https://www.youtube.com/embed/hxtcxpU8pEk",
        gradient: "from-green-500/20 to-emerald-500/20",
        accentColor: "text-green-400",
        buttonColor: "bg-green-600 hover:bg-green-700",
        bg: "bg-green-500/20"
    },
    "layer-5-intelligence": {
        badge: "layer5.hero.badge",
        title: "INTELLIGENCE",
        subtitle: "Hikmet / Akademi",
        description: "Sürekli gelişim merkezi. Öğretmenler, veliler ve yöneticiler için yapay zeka destekli eğitim programları.",
        stats: [
            { icon: Clock, value: "Modüler", label: "Eğitimler" },
            { icon: ShieldCheck, value: "Sertifikalı", label: "Programlar" },
            { icon: Zap, value: "Uzman", label: "Eğitmenler" }
        ],
        features: [
            "Online Seminerler",
            "Atölye Çalışmaları",
            "Kaynak Kütüphanesi",
            "Mentörlük Sistemi"
        ],
        videoUrl: "",
        gradient: "from-yellow-500/20 to-amber-500/20",
        accentColor: "text-yellow-400",
        buttonColor: "bg-yellow-600 hover:bg-yellow-700",
        bg: "bg-yellow-500/20"
    },
    "layer-6-network": {
        badge: "layer6.hero.badge",
        title: "NETWORK",
        subtitle: "Ülfet / Guild",
        description: "Birlikten kuvvet doğar. Okullar arası işbirliği, proje paylaşımı ve ortak etkinlik platformu.",
        stats: [
            { icon: Clock, value: "Global", label: "Ağ" },
            { icon: ShieldCheck, value: "Güvenli", label: "Paylaşım" },
            { icon: Zap, value: "Hızlı", label: "İletişim" }
        ],
        features: [
            "Proje Pazarı",
            "Ortak Etkinlikler",
            "Forumlar",
            "Haberleşme Ağı"
        ],
        videoUrl: "https://www.youtube.com/embed/zvbWO9-AnlI",
        gradient: "from-cyan-500/20 to-blue-500/20",
        accentColor: "text-cyan-400",
        buttonColor: "bg-cyan-600 hover:bg-cyan-700",
        bg: "bg-cyan-500/20"
    }
};

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projects[projectId as keyof typeof projects];

    if (!project) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center bg-[#0a0a0F] text-white">
                    <h1 className="text-2xl font-bold">Proje Bulunamadı</h1>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="min-h-screen bg-[#0a0a0F] text-white overflow-hidden relative">
                {/* Hero Background */}
                <div className={`absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b ${project.gradient} to-[#0a0a0F] opacity-30 pointer-events-none`} />

                <div className="container mx-auto px-4 py-24 relative z-10">

                    {/* Header Content */}
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in">
                        <Badge variant="outline" className="mb-6 bg-white/5 border-white/10 text-gray-300 px-3 py-1 text-xs tracking-widest uppercase">
                            {project.badge}
                        </Badge>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                            {project.title}
                        </h1>

                        <p className={`text-2xl md:text-3xl font-light ${project.accentColor} mb-8`}>
                            {project.subtitle}
                        </p>

                        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12">
                            {project.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-20">
                            <a href="https://wa.me/905320674063" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                                <Button size="lg" className={`${project.buttonColor} text-white px-8 h-12 text-lg font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full`}>
                                    <Play className="mr-2 h-5 w-5 fill-current" /> Demo Talep Et
                                </Button>
                            </a>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-6 w-full max-w-3xl mx-auto mb-24">
                            {project.stats.map((stat, index) => (
                                <div key={index} className="bg-[#13131A] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-[#1A1A23] transition-colors">
                                    <stat.icon className={`h-6 w-6 ${project.accentColor} mb-3`} />
                                    <span className="text-2xl font-bold text-white mb-1">{stat.value}</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features / Content Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* Left Content */}
                        <div className="bg-[#13131A] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2`} />

                            <h3 className="text-2xl font-bold mb-2">School Operating System</h3>
                            <p className="text-gray-400 text-sm mb-8">
                                {project.subtitle} vizyonunu ve okul işletim sistemi konseptini anlatan kısa tanıtım.
                            </p>

                            <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all border border-white/5">
                                {project.videoUrl ? (
                                    <iframe
                                        className="w-full h-full"
                                        src={project.videoUrl}
                                        title={project.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <>
                                        {/* Video Placeholder */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className={`w-16 h-16 rounded-full ${project.buttonColor} flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform`}>
                                                <Play className="h-6 w-6 text-white fill-white ml-1" />
                                            </div>
                                        </div>
                                        {/* Background Pattern for Video */}
                                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Right Features List */}
                        <div className="bg-[#13131A] border border-white/10 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-8">Öne Çıkan Özellikler</h3>
                            <ul className="space-y-6">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-4 group">
                                        <div className={`w-8 h-8 rounded-full ${project.bg || 'bg-white/10'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            <CheckCircle2 className={`h-5 w-5 ${project.accentColor}`} />
                                        </div>
                                        <span className="text-lg text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <ArrowRight className={`h-6 w-6 ${project.accentColor} mt-auto self-end opacity-50 group-hover:opacity-100 transition-opacity`} />
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default ProjectDetail;

```

### src\pages\References.tsx
```
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, Users, Globe, TrendingUp, Headphones, ExternalLink, CheckCircle2 } from "lucide-react";

// Müşteri Yorumları Verisi
const testimonials = [
    {
        name: "Murat Yılmaz",
        role: "Satış Direktörü",
        company: "Premium Emlak",
        content: "Kommo, web sitem, sosyal medya hesaplarım arasında entegrasyon sağlamama ve potansiyel müşterileri takip etmeme yardımcı oldu. Gerçekten çok güçlü bir araç!",
        rating: 5,
        initial: "M",
        color: "bg-blue-100 text-blue-600"
    },
    {
        name: "Selin Demir",
        role: "Müşteri Deneyimi Uzmanı",
        company: "Millennium Hosting",
        content: "Salesforce, Freshsales ve Microsoft Dynamics CRM'i kullandıktan sonra Kommo'yu kullanmaya karar kıldık ve onunla devam ettik. Çünkü basit arayüzü, kolay kişiselleştirilebilir yapısı ve entegrasyon çeşitliliği harika.",
        rating: 5,
        initial: "S",
        color: "bg-purple-100 text-purple-600"
    },
    {
        name: "Hakan Klimacı",
        role: "Kurucu & CEO",
        company: "CRM Hopes",
        content: "Satış ekipleri, kullandıkları araçlar basit ve kolay kullanıldığında çok daha iyi performans gösteriyor. Kommo tam olarak bunu sunuyor. Özellikle mesajlaşma uygulamalarıyla olan entegrasyon çeşitliliği harika.",
        rating: 5,
        initial: "H",
        color: "bg-green-100 text-green-600"
    },
    {
        name: "Barış Canbula",
        role: "Eğitim Sahibi",
        company: "Team Travel Host",
        content: "Daha bilinen, yüksek fiyatlı CRM'leri kullandıktan sonra Kommo benim için hem ciddi bir tasarruf sağladı hem de ihtiyaçlarımı karşılayan üstün bir ürün sundu.",
        rating: 5,
        initial: "B",
        color: "bg-orange-100 text-orange-600"
    },
    {
        name: "Buse Karahan",
        role: "Şirket Başkanı",
        company: "Quety Capital",
        content: "Kommo'yu kullanmaya başladıktan sonra satışlarımız iki katına çıktı. Maliyet açısından da çok verimli bir çözüm, şiddetle tavsiye ederim.",
        rating: 5,
        initial: "B",
        color: "bg-pink-100 text-pink-600"
    },
    {
        name: "John Garner",
        role: "Kurucu & CEO",
        company: "Cardilines",
        content: "Kommo, ekibimizin gerçekten severek kullandığı bir araç oldu. Ekibimize aracı zorla uygulatmak ya da özendirmek zorunda kalmadık, tamamen organik bir şekilde hızla benimsendi.",
        rating: 5,
        initial: "J",
        color: "bg-cyan-100 text-cyan-600"
    }
];

const stats = [
    { value: "109", label: "Ülke", icon: Globe },
    { value: "15K+", label: "Mutlu İşletme", icon: Users },
    { value: "%200", label: "Ort. Satış Artışı", icon: TrendingUp },
    { value: "24/7", label: "Destek", icon: Headphones },
];

const References = () => {
    return (
        <Layout>
            {/* Hero Section - Official Partner */}
            <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
                {/* Abstract Background Pattern */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 text-center relative z-10">
                    <Badge className="mb-6 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm uppercase tracking-wider">
                        Resmi İş Ortaklığı
                    </Badge>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Kommo CRM Türkiye Resmi Partneri
                    </h1>

                    <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Dünya çapında 15.000+ işletmenin tercih ettiği Kommo CRM altyapısını,
                        eğitim sektörüne özel çözümlerle Türkiye'de sunuyoruz.
                    </p>

                    <div className="flex justify-center gap-6">
                        <div className="bg-white p-4 rounded-xl shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                            <img src="/images/kommo-partner1.png" alt="Kommo Partner" className="h-20 w-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 -mt-8 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {stats.map((stat, index) => (
                            <Card key={index} className="border-none shadow-xl bg-card">
                                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                    <stat.icon className="h-8 w-8 text-primary mb-3 opacity-80" />
                                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                                    <div className="h-1 w-12 bg-primary/20 rounded-full mt-3" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
                            Müşteri Yorumları
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Dünya Çapında İşletmeler <br />
                            <span className="text-primary">Kommo ile Büyüyor</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Kommo, dünya çapında 109 ülkedeki işletmeler arasında büyük bir popülerlik kazandı.
                            İşte kullanıcılarımızın deneyimleri.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {testimonials.map((item, index) => (
                            <Card key={index} className="border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group">
                                <CardHeader className="pb-4">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                                        ))}
                                    </div>
                                    <Quote className="h-8 w-8 text-primary/20 mb-2" />
                                    <p className="text-muted-foreground italic text-sm leading-relaxed min-h-[80px]">
                                        "{item.content}"
                                    </p>
                                </CardHeader>
                                <CardContent className="pt-0 border-t border-border/40 mt-4">
                                    <div className="flex items-center gap-4 pt-4">
                                        <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center font-bold text-lg`}>
                                            {item.initial}
                                        </div>
                                        <div>
                                            <div className="font-bold text-foreground">{item.name}</div>
                                            <div className="text-xs text-muted-foreground">{item.role}</div>
                                            <div className="text-xs font-semibold text-primary/80 mt-0.5 flex items-center gap-1">
                                                {item.company}
                                                <ExternalLink className="h-2.5 w-2.5 opacity-50" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-lg text-muted-foreground mb-6">
                            Siz de eğitim kurumunuzu Kommo CRM ile güçlendirin.
                        </p>
                        <a href="https://www.kommo.com/tr/partnerler/bir-partner-bulun/edusonex-egitim-teknolojileri/" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="px-8 h-12 text-lg shadow-xl shadow-primary/20">
                                Kommo Profilimizi İnceleyin <ExternalLink className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Edusonex Integration Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold">Edusonex ile Tam Entegrasyon</h3>
                            <p className="text-lg text-muted-foreground">
                                Edusonex ekosistemi, Kommo CRM ile kusursuz bir uyum içinde çalışır. Öğrenci kayıtları, veli görüşmeleri ve finansal takipler otomatik olarak senkronize edilir.
                            </p>
                            <ul className="space-y-3">
                                {["Otomatik Öğrenci Kaydı", "Veli WhatsApp Entegrasyonu", "Ödeme Hatırlatmaları", "Satış Hunisi Yönetimi"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full" />
                                <div className="relative bg-card p-6 rounded-2xl shadow-2xl border border-border">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <img src="/favicon.ico" alt="Edusonex" className="h-8 w-8 opacity-80" />
                                        </div>
                                        <div className="h-px bg-border flex-1 w-12" />
                                        <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center">
                                            <TrendingUp className="h-6 w-6 text-blue-600" />
                                        </div>
                                    </div>
                                    <div className="text-center font-bold text-sm text-muted-foreground">Güçlü İşbirliği</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default References;

```

### src\pages\Solutions.tsx
```
import { Building, GraduationCap, Users, Briefcase, Clock, Globe, TrendingDown, Layers, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Layout from "@/components/Layout";

const targetAudiences = [
  {
    icon: Building,
    title: "Okul Sahipleri İçin",
    description: "Kurumsal dijital dönüşüm ve marka güçlendirme.",
    benefits: [
      "Okula özel dijital altyapı kurulumu",
      "Yayıncı maliyetlerinin azalması",
      "Okul markasının güçlenmesi",
      "Okul markası ve alan adıyla çalışan sistemler",
    ],
  },
  {
    icon: Users,
    title: "Öğretmenler İçin",
    description: "Verimlilik artışı ve iş yükü optimizasyonu.",
    benefits: [
      "Doküman ve sınav yükünün azalması",
      "Yapay zekâ destekli üretim araçları",
      "Öğretmen iş yükünü azaltan çözümler",
      "Daha fazla öğrenci odaklı zaman",
    ],
  },
  {
    icon: Briefcase,
    title: "Kurumlar İçin",
    description: "Uzun vadeli dijital dönüşüm ortaklığı.",
    benefits: [
      "Ölçeklenebilir sistemler",
      "Uzun vadeli dijital dönüşüm",
      "Güvenilir altyapı",
      "Yapay zekâ destekli eğitim teknolojileri",
    ],
  },
];

const valuePropositions = [
  {
    icon: TrendingDown,
    title: "Yayınevi Bağımlılığı Azalır",
    description: "Sınırsız deneme sınavı üretimi ile dışa bağımlılık sona erer. Kendi içerik üretim sisteminizle maliyetleri düşürün.",
  },
  {
    icon: Clock,
    title: "Öğretmen İş Yükü Hafifler",
    description: "Öğretmen iş yükünü azaltan çözümler ile doküman, planlama ve içerik üretim süreçleri sadeleşir.",
  },
  {
    icon: Globe,
    title: "Okul Markası Güçlenir",
    description: "Okul markası ve alan adıyla çalışan sistemler ile dijital kimliğiniz ön plana çıkar.",
  },
  {
    icon: Layers,
    title: "Okullara Özel Dijital Altyapı",
    description: "Hazır yazılım değil, okulunuza özel tasarlanmış ve birlikte kurduğumuz bütünleşik sistemler.",
  },
  {
    icon: Shield,
    title: "Güvenilir Teknoloji Ortaklığı",
    description: "Yapay zekâ destekli eğitim teknolojileri ekosistemiyle uzun vadeli dijital dönüşüm yolculuğunuzda yanınızdayız.",
  },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-corporate">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Birlikte Kurduğumuz Çözümler
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Eğitim kurumları için danışmanlık ve çözüm ortağı olarak dijital dönüşüm yolculuğunuzda yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Kimlerle Çalışıyoruz?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Her paydaş grubunun ihtiyaçlarına özel tasarlanmış çözümler birlikte kuruyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {targetAudiences.map((audience) => (
              <Card key={audience.title} className="border-border/50 h-full hover:border-secondary/50 transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <audience.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{audience.title}</CardTitle>
                  <CardDescription className="text-base">
                    {audience.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {audience.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 lg:py-24 bg-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Neden Birlikte Çalışmalıyız?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Edusonex ile kurduğunuz dijital altyapının somut kazanımları.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuePropositions.map((item) => (
              <Card key={item.title} className="border-border/50 hover:border-secondary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Message */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Okulunuzun dijital dönüşüm ihtiyaçlarını birlikte değerlendirelim.
              <br className="hidden md:block" />
              <strong className="text-secondary">Çözüm ortağınız olarak yanınızdayız.</strong>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;

```

### src\pages\Terms.tsx
```
import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Kullanım Şartları</h1>
        <p className="text-muted-foreground mb-12">Yürürlük Tarihi: 1 Ocak 2026</p>

        <div className="prose prose-blue dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Hizmetin Tanımı</h2>
            <p className="leading-relaxed">
              Edusonex ("Hizmet Sağlayıcı"), okullara, öğretmenlere, öğrencilere ve velilere yönelik bulut tabanlı eğitim yönetim sistemleri,
              yapay zeka destekli analiz araçları ve içerik üretim modülleri ("Hizmetler") sunan bir SaaS (Software as a Service) platformudur.
              Bu Hizmetler, abonelik modeli ile sağlanır ve kullanıcılar ("Müşteri") bu şartları kabul ederek hizmeti kullanmaya başlar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Kullanım Hakkı ve Lisans</h2>
            <p className="mb-4">
              Edusonex, Müşteri'ye, Hizmetleri yalnızca kendi kurum içi eğitim faaliyetleri kapsamında kullanması için münhasır olmayan,
              devredilemez, süreli bir kullanım lisansı verir.
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li>Müşteri, Hizmetleri kopyalayamaz, tersine mühendislik yapamaz veya kaynak koduna erişmeye çalışamaz.</li>
              <li>Hizmetler, üçüncü şahıslara kiralanamaz veya satılamaz.</li>
              <li>Lisans, abonelik süresi boyunca geçerlidir ve abonelik sona erdiğinde otomatik olarak feshedilir.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Kullanıcı Hesapları ve Güvenlik</h2>
            <p className="leading-relaxed">
              Müşteri, kullanıcı hesaplarının güvenliğinden sorumludur. Şifrelerin gizliliğinin korunması ve yetkisiz erişimlerin önlenmesi Müşteri'nin sorumluluğundadır.
              Edusonex, hesap bilgilerinin çalınması veya kötüye kullanılması durumunda doğacak zararlardan sorumlu tutulamaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Fikri Mülkiyet Hakları</h2>
            <p className="leading-relaxed">
              Hizmetlerin tüm fikri mülkiyet hakları, telif hakları, ticari markalar, patentler ve diğer mülkiyet hakları Edusonex'e aittir.
              Müşteri, Hizmetleri kullanarak hiçbir mülkiyet hakkı elde etmez. Oluşturulan içeriklerin (örn. sınav soruları, analiz raporları)
              mülkiyeti ise içeriği oluşturan Müşteri'ye aittir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Hizmet Seviyesi ve Garanti</h2>
            <p className="leading-relaxed">
              Edusonex, Hizmetlerin sürekliliğini sağlamak için makul ticari çabayı gösterecektir. Ancak, planlı bakım çalışmaları,
              mücbir sebepler veya internet altyapısından kaynaklanan kesintiler nedeniyle Hizmetlerin %100 kesintisiz olacağını garanti etmez.
              Hizmetler "olduğu gibi" (as is) sunulmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Sorumluluk Reddi</h2>
            <p className="leading-relaxed">
              Edusonex, Hizmetlerin kullanımından kaynaklanan dolaylı, arızi, özel veya cezai zararlardan (kar kaybı, veri kaybı vb.) sorumlu değildir.
              Yapay zeka modülleri tarafından üretilen içeriklerin ve analizlerin doğruluğu %100 garanti edilmez; bu çıktılar pedagojik bir destek aracı olarak değerlendirilmelidir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">7. Abonelik İptali ve İade</h2>
            <p className="leading-relaxed">
              Müşteri, aboneliğini dilediği zaman iptal edebilir. İptal talepleri, bir sonraki fatura döneminden itibaren geçerli olur.
              Peşin ödenen abonelik ücretlerinde iade yapılmaz, ancak hizmet süresi dolana kadar erişim hakkı devam eder.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">8. Değişiklikler</h2>
            <p className="leading-relaxed">
              Edusonex, bu Kullanım Şartlarını herhangi bir zamanda güncelleyebilir. Güncellenen şartlar, web sitesinde yayınlandığı tarihte yürürlüğe girer.
              Hizmetleri kullanmaya devam etmeniz, değişiklikleri kabul ettiğiniz anlamına gelir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">9. İletişim</h2>
            <div className="mt-4 p-6 bg-muted rounded-lg border border-border/50">
              <p>Hukuki sorularınız için:</p>
              <p className="mt-2 font-medium">legal@edusonex.com</p>
              <p className="mt-4"><strong>Edusonex Eğitim Teknolojileri</strong></p>
              <p>Adres: Çakır Mah. Fevzipaşa Cad. No: 248, 03500 Sandıklı – Afyonkarahisar / Türkiye</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;

```

### src\pages\Universe.tsx
```
import Layout from "@/components/Layout";
import { ArrowRight, Brain, Cpu, Gamepad2, Globe, GraduationCap, Layers, Server, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const tiers = [
    {
        layer: "LAYER I",
        category: "ETKİLEŞİM",
        title: "Interface",
        subtitle: "Suret / Edubot",
        description: "Kullanıcı ile yapay zeka arasındaki ilk temas noktası. Sokratik diyalog ve kişiselleştirilmiş asistan deneyimi.",
        icon: Brain,
        href: "/kommo",
        active: true,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        badge: "bg-blue-500/20 text-blue-300"
    },
    {
        layer: "LAYER II",
        category: "ÇEKİRDEK",
        title: "Core",
        subtitle: "Cevher / HumanOS",
        description: "Öğrencinin dijital ikizi. Performans analizi, yetenek haritası ve biyolojik verilerin işlendiği merkezi işletim sistemi.",
        icon: Cpu,
        href: "/universe/layer-2-core",
        active: false,
        color: "text-red-400",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        badge: "bg-red-500/20 text-red-300"
    },
    {
        layer: "LAYER III",
        category: "SENTEZ",
        title: "Architecture",
        subtitle: "Tasavvur / Studio",
        description: "Yaratıcı zekanın merkezi. Multimedya içerik üretimi, video sentezi ve sanatsal ifade alanı.",
        icon: Sparkles,
        href: "/universe/layer-3-architecture",
        active: false,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        badge: "bg-purple-500/20 text-purple-300"
    },
    {
        layer: "LAYER IV",
        category: "AKIŞ",
        title: "Dynamics",
        subtitle: "Vecd / Gamer",
        description: "Oyunlaştırma ve motivasyon katmanı. Öğrenme sürecini rekabetçi ve eğlenceli hale getiren dinamik yapı.",
        icon: Gamepad2,
        href: "/universe/layer-4-dynamics",
        active: false,
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
        badge: "bg-green-500/20 text-green-300"
    },
    {
        layer: "LAYER V",
        category: "İRFAN",
        title: "Intelligence",
        subtitle: "Hikmet / Akademi",
        description: "Derin öğrenme ve akademik gelişim. Öğretmenler ve veliler için sürekli eğitim ve sertifikasyon merkezi.",
        icon: GraduationCap,
        href: "/universe/layer-5-intelligence",
        active: false,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
        badge: "bg-yellow-500/20 text-yellow-300"
    },
    {
        layer: "LAYER VI",
        category: "EKOSİSTEM",
        title: "Network",
        subtitle: "Ülfet / Guild",
        description: "Sosyal işbirliği ağı. Okullar, öğretmenler ve öğrenciler arasındaki etkileşim ve paylaşım platformu.",
        icon: Globe,
        href: "/universe/layer-6-network",
        active: false,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        badge: "bg-cyan-500/20 text-cyan-300"
    },
    {
        layer: "LAYER VII",
        category: "NİHAİ MODEL",
        title: "Paradigm",
        subtitle: "Kemalât / Kolej",
        description: "Ölçme, değerlendirme ve mükemmellik. Sınav sistemleri ve başarı standartlarının belirlendiği zirve.",
        icon: Layers,
        href: "/universe/layer-7-paradigm",
        active: true,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        badge: "bg-amber-500/20 text-amber-300"
    }
];

const Universe = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-[#0a0a0F] text-white py-24 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
                            Edusonex Evreni
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Sistemimizin derinliklerinde yatan mimariyi keşfedin.
                            Her katman, mükemmelliğe giden yolda bir basamak.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {tiers.map((tier, index) => (
                            <div
                                key={tier.title}
                                className={`
                  group relative p-8 rounded-2xl border ${tier.border} bg-[#13131A] 
                  hover:bg-[#1A1A23] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-${tier.color}/10
                  animate-fade-in
                `}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <span className={`text-xs font-bold tracking-widest ${tier.color}`}>
                                            {tier.layer}
                                        </span>
                                        <Badge variant="outline" className={`${tier.badge} border-0 text-[10px] px-2 py-0.5 tracking-wider`}>
                                            {tier.category}
                                        </Badge>
                                    </div>
                                    <tier.icon className={`h-6 w-6 ${tier.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                                </div>

                                {/* Content */}
                                <div className="mb-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">{tier.title}</h3>
                                    <p className={`text-sm font-medium ${tier.color} mb-4`}>{tier.subtitle}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {tier.description}
                                    </p>
                                </div>

                                {/* Footer / Action */}
                                <div className="mt-auto">
                                    {tier.active ? (
                                        tier.href.startsWith("http") ? (
                                            <a href={tier.href} target="_blank" rel="noopener noreferrer" className="block w-full">
                                                <Button variant="ghost" className={`w-full justify-between hover:bg-white/5 ${tier.color} group-hover:pl-4 transition-all`}>
                                                    <span className="text-sm font-medium">Platforma Git</span>
                                                    <ArrowRight className="h-4 w-4" />
                                                </Button>
                                            </a>
                                        ) : (
                                            <Link to={tier.href} className="block w-full">
                                                <Button variant="ghost" className={`w-full justify-between hover:bg-white/5 ${tier.color} group-hover:pl-4 transition-all`}>
                                                    <span className="text-sm font-medium">Platforma Git</span>
                                                    <ArrowRight className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                        )
                                    ) : (
                                        <Link to={tier.href} className="block w-full">
                                            <Button variant="ghost" className="w-full justify-between hover:bg-white/5 text-gray-400 group-hover:text-white group-hover:pl-4 transition-all">
                                                <span className="text-sm font-medium">Keşfetmek için tıklayın</span>
                                                <ArrowRight className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                    )}
                                </div>

                                {/* Hover Glow Effect */}
                                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 bg-gradient-to-br from-${tier.color}/5 to-transparent`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Universe;

```

### src\test\example.test.ts
```
import { describe, it, expect } from "vitest";

describe("example", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});

```

### src\test\setup.ts
```
import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

```

### src\components\ui\accordion.tsx
```
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

```

### src\components\ui\alert-dialog.tsx
```
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};

```

### src\components\ui\alert.tsx
```
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  ),
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };

```

### src\components\ui\aspect-ratio.tsx
```
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };

```

### src\components\ui\avatar.tsx
```
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };

```

### src\components\ui\badge.tsx
```
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

```

### src\components\ui\breadcrumb.tsx
```
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return <Comp ref={ref} className={cn("transition-colors hover:text-foreground", className)} {...props} />;
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li role="presentation" aria-hidden="true" className={cn("[&>svg]:size-3.5", className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};

```

### src\components\ui\button.tsx
```
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

```

### src\components\ui\calendar.tsx
```
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

```

### src\components\ui\card.tsx
```
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

```

### src\components\ui\carousel.tsx
```
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };

```

### src\components\ui\chart.tsx
```
import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> });
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>;
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center",
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          })}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center",
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">{itemConfig?.label || item.name}</span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className={cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground")}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };

```

### src\components\ui\checkbox.tsx
```
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

```

### src\components\ui\collapsible.tsx
```
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

```

### src\components\ui\command.tsx
```
import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

type CommandDialogProps = DialogProps;

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-border", className)} {...props} />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};

```

### src\components\ui\context-menu.tsx
```
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};

```

### src\components\ui\dialog.tsx
```
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};

```

### src\components\ui\drawer.tsx
```
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};

```

### src\components\ui\dropdown-menu.tsx
```
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};

```

### src\components\ui\form.tsx
```
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return <Label ref={ref} className={cn(error && "text-destructive", className)} htmlFor={formItemId} {...props} />;
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
        aria-invalid={!!error}
        {...props}
      />
    );
  },
);
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return <p ref={ref} id={formDescriptionId} className={cn("text-sm text-muted-foreground", className)} {...props} />;
  },
);
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p ref={ref} id={formMessageId} className={cn("text-sm font-medium text-destructive", className)} {...props}>
        {body}
      </p>
    );
  },
);
FormMessage.displayName = "FormMessage";

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };

```

### src\components\ui\hover-card.tsx
```
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };

```

### src\components\ui\input-otp.tsx
```
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";

import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef<React.ElementRef<typeof OTPInput>, React.ComponentPropsWithoutRef<typeof OTPInput>>(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  ),
);
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center", className)} {...props} />,
);
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
      <Dot />
    </div>
  ),
);
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

```

### src\components\ui\input.tsx
```
import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

```

### src\components\ui\label.tsx
```
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

```

### src\components\ui\menubar.tsx
```
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className)}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};

```

### src\components\ui\navigation-menu.tsx
```
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};

```

### src\components\ui\pagination.tsx
```
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="default" className={cn("gap-1 pl-2.5", className)} {...props}>
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="default" className={cn("gap-1 pr-2.5", className)} {...props}>
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};

```

### src\components\ui\popover.tsx
```
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };

```

### src\components\ui\progress.tsx
```
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

```

### src\components\ui\radio-group.tsx
```
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };

```

### src\components\ui\resizable.tsx
```
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };

```

### src\components\ui\scroll-area.tsx
```
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };

```

### src\components\ui\select.tsx
```
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};

```

### src\components\ui\separator.tsx
```
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

```

### src\components\ui\sheet.tsx
```
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

type SheetContentProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> &
  VariantProps<typeof sheetVariants>;

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  ),
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title ref={ref} className={cn("text-lg font-semibold text-foreground", className)} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};

```

### src\components\ui\sidebar.tsx
```
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
});
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        className={cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      ref={ref}
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]",
        )}
      />
      <div
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
        >
          {children}
        </div>
      </div>
    </div>
  );
});
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<React.ElementRef<typeof Button>, React.ComponentProps<typeof Button>>(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <Button
        ref={ref}
        data-sidebar="trigger"
        variant="ghost"
        size="icon"
        className={cn("h-7 w-7", className)}
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  },
);
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<"main">>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className,
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<React.ElementRef<typeof Input>, React.ComponentProps<typeof Input>>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        data-sidebar="input"
        className={cn(
          "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="header" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="footer" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<React.ElementRef<typeof Separator>, React.ComponentProps<typeof Separator>>(
  ({ className, ...props }, ref) => {
    return (
      <Separator
        ref={ref}
        data-sidebar="separator"
        className={cn("mx-2 w-auto bg-sidebar-border", className)}
        {...props}
      />
    );
  },
);
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-label"
        className={cn(
          "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-action"
        className={cn(
          "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-sidebar="group-content" className={cn("w-full text-sm", className)} {...props} />
  ),
);
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(({ className, ...props }, ref) => (
  <ul ref={ref} data-sidebar="menu" className={cn("flex w-full min-w-0 flex-col gap-1", className)} {...props} />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} data-sidebar="menu-item" className={cn("group/menu-item relative", className)} {...props} />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      ref={ref}
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center" hidden={state !== "collapsed" || isMobile} {...tooltip} />
    </Tooltip>
  );
});
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-[--skeleton-width] flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ ...props }, ref) => (
  <li ref={ref} {...props} />
));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};

```

### src\components\ui\skeleton.tsx
```
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };

```

### src\components\ui\slider.tsx
```
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

```

### src\components\ui\sonner.tsx
```
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };

```

### src\components\ui\switch.tsx
```
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };

```

### src\components\ui\table.tsx
```
import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />,
);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  ),
);
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)} {...props} />
  ),
);
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", className)}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  ),
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
  ),
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => (
    <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
  ),
);
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };

```

### src\components\ui\tabs.tsx
```
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };

```

### src\components\ui\textarea.tsx
```
import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };

```

### src\components\ui\toast.tsx
```
import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />;
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};

```

### src\components\ui\toaster.tsx
```
import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}

```

### src\components\ui\toggle-group.tsx
```
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root ref={ref} className={cn("flex items-center justify-center gap-1", className)} {...props}>
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };

```

### src\components\ui\toggle.tsx
```
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };

```

### src\components\ui\tooltip.tsx
```
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

```

### src\components\ui\use-toast.ts
```
import { useToast, toast } from "@/hooks/use-toast";

export { useToast, toast };

```
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

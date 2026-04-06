import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const Products = lazy(() => import("./pages/Products"));
const Solutions = lazy(() => import("./pages/Solutions"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Universe = lazy(() => import("./pages/Universe"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const References = lazy(() => import("./pages/References"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Kommo = lazy(() => import("./pages/Kommo"));
const Paradigm = lazy(() => import("./pages/Paradigm"));
const SSS = lazy(() => import("./pages/SSS"));
const RaporPage = lazy(() => import("./pages/RaporPage"));
const Kvkk = lazy(() => import("./pages/Kvkk"));
const Admin = lazy(() => import("./pages/Admin"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

import { ThemeProvider } from "@/components/theme-provider";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ExitIntentPopup />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted-foreground p-4">Yükleniyor...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
            <Route path="/universe" element={<Universe />} />
            <Route path="/universe/layer-7-paradigm" element={<Paradigm />} />
            <Route path="/universe/:projectId" element={<ProjectDetail />} />
            <Route path="/kommo" element={<Kommo />} />
            <Route path="/referanslar" element={<References />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/urunler" element={<Products />} />
            <Route path="/cozumler" element={<Solutions />} />

            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features" element={<Products />} />
            <Route path="/gizlilik" element={<Privacy />} />
            <Route path="/kullanim-sartlari" element={<Terms />} />
            <Route path="/kvkk" element={<Kvkk />} />
            <Route path="/sss" element={<SSS />} />
            <Route path="/rapor/2026" element={<RaporPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;

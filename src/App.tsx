import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects"; // This is the original Projects page
import Contact from "./pages/Contact";
import ProjectsPage from "./pages/ProjectsPage"; // Renamed from Portfolio
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}> {/* QueryClientProvider receives one child: TooltipProvider */}
    <TooltipProvider> {/* TooltipProvider receives one child: React Fragment */}
      <> {/* This React Fragment correctly wraps multiple children */}
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects-old" element={<Projects />} /> {/* Renamed original Projects route to avoid conflict */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<ProjectsPage />} /> {/* New Projects route, renamed from /portfolio */}
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
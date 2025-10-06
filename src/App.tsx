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
import CalculatorProject from "./components/portfolio/CalculatorProject"; // Import the new CalculatorProject

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects-old" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/calculator" element={<CalculatorProject />} /> {/* New route for calculator */}
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
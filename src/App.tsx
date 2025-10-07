import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectsPage from "./pages/ProjectsPage";
import NotFound from "./pages/NotFound";
import CalculatorProject from "./components/portfolio/CalculatorProject";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <> {/* Added a React Fragment to wrap all children */}
      <Toaster />
      <Sonner />
      <TooltipProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects-old" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/calculator" element={<CalculatorProject />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </>
  </QueryClientProvider>
);

export default App;
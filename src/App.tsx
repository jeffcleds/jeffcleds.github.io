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
import ScrollToTop from "./components/layout/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { DarkVeilProvider, useDarkVeil } from "./components/layout/DarkVeilProvider";
import DarkVeil from "./components/animations/DarkVeil";
// Removed useEffect import as it's no longer needed for body background

const queryClient = new QueryClient();

const AppContent = () => {
  const { isDarkVeilActive } = useDarkVeil();
  // Removed useTheme and useEffect for body background as it's now handled by ThemeAndVeilSwitcher

  return (
    <>
      {isDarkVeilActive && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1, // Changed zIndex to -1 to place it in the background
          pointerEvents: 'none',
        }}>
          <DarkVeil />
        </div>
      )}
      <Toaster />
      <Sonner />
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
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
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <DarkVeilProvider>
        <AppContent />
      </DarkVeilProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
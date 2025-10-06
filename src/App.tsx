import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"; // Import the new Layout component
import Index from "./pages/Index";
import About from "./pages/About"; // Import the new About page
import Projects from "./pages/Projects"; // Import the new Projects page
import Contact from "./pages/Contact"; // Import the new Contact page
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout> {/* Wrap routes with the Layout component */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} /> {/* New About route */}
            <Route path="/projects" element={<Projects />} /> {/* New Projects route */}
            <Route path="/contact" element={<Contact />} /> {/* New Contact route */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
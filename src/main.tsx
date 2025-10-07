import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { ThemeProvider } from "./components/layout/ThemeProvider.tsx"; // Import ThemeProvider

console.log("main.tsx: Rendering App with ThemeProvider"); // Added console log

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <App />
  </ThemeProvider>
);
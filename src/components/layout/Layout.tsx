import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LiquidBackground from "../animations/LiquidBackground"; // Import the new component

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden"> {/* Added relative and overflow-hidden */}
      <LiquidBackground /> {/* Render the background component */}
      <Navbar />
      <main className="flex-1 relative z-10"> {/* Added relative z-10 to ensure content is above background */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
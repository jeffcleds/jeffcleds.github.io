"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DarkVeil from "../DarkVeil"; // Import DarkVeil
import { useTheme } from "next-themes"; // Import useTheme

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="relative flex min-h-screen flex-col">
      {isDarkMode && (
        <div className="absolute inset-0 z-0">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0.02}
            scanlineIntensity={0.05}
            speed={0.5}
            scanlineFrequency={1000}
            warpAmount={0.05}
            resolutionScale={0.5}
          />
        </div>
      )}
      <Navbar />
      <main className="relative z-10 flex-1">{children}</main> {/* Ensure content is above the veil */}
      <Footer />
    </div>
  );
};

export default Layout;
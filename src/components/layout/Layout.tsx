import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticlesBackground from "../animations/ParticlesBackground"; // Import the new ParticlesBackground component

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col"> {/* Added relative to contain fixed particles */}
      <ParticlesBackground /> {/* Add the particles background */}
      <Navbar />
      <main className="flex-1 relative z-0">{children}</main> {/* Added relative z-0 to ensure content is above particles */}
      <Footer />
    </div>
  );
};

export default Layout;
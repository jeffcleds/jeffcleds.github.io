import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Particles from "../animations/Particles"; // Import the new Particles component

interface LayoutProps {
  children: React.ReactNode;
}

// Define particle colors outside the component to ensure a stable reference
const PARTICLE_COLORS = ['#ffffff', '#ffffff'];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col"> {/* Added relative to contain fixed particles */}
      <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <Particles
          particleColors={PARTICLE_COLORS} // Use the stable reference
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Navbar />
      <main className="flex-1 relative z-0">{children}</main> {/* Added relative z-0 to ensure content is above particles */}
      <Footer />
    </div>
  );
};

export default Layout;
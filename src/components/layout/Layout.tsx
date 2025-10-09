"use client";

import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useDarkVeil } from "./DarkVeilProvider";

gsap.registerPlugin(ScrollTrigger);

interface LayoutProps {
  children: React.ReactNode;
}

const NAVBAR_HEIGHT = 56; // Assuming h-14 is 56px

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const mainRef = useRef<HTMLElement>(null);
  const { isDarkVeilActive } = useDarkVeil();

  useGSAP(() => {
    if (!mainRef.current) return;

    // Kill any existing ScrollTriggers on this element to prevent duplicates
    ScrollTrigger.getById("main-fade-scroll")?.kill();

    if (isDarkVeilActive) {
      gsap.to(mainRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          id: "main-fade-scroll", // Assign an ID for easier killing
          trigger: mainRef.current,
          start: `top ${NAVBAR_HEIGHT}px`, // Start fading when content top reaches bottom of navbar
          end: `top 0px`, // End fading when content top reaches top of viewport (fully under navbar)
          scrub: true,
        },
      });
    } else {
      // Ensure opacity is reset if DarkVeil is not active
      gsap.set(mainRef.current, { opacity: 1 });
    }
  }, { dependencies: [isDarkVeilActive], scope: mainRef });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main ref={mainRef} className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
import React from "react";
import { useDarkVeil } from "./DarkVeilProvider"; // Import useDarkVeil

const Footer = () => {
  const { isDarkVeilActive } = useDarkVeil(); // Get the Dark Veil active state

  return (
    <footer className={`border-t py-6 md:py-0 ${isDarkVeilActive ? 'bg-transparent border-t-transparent' : 'bg-background'}`}>
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className={`text-center text-sm leading-loose ${isDarkVeilActive ? 'text-white/80' : 'text-foreground/80'}`}>
          © 2025 Ernie Joseph Cledera. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
"use client";

import React from 'react';

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ children, className }) => {
  return (
    <span
      className={`
        inline-flex
        animate-shine
        bg-[linear-gradient(110deg,hsl(var(--muted-foreground)),45%,hsl(var(--primary-foreground)),55%,hsl(var(--muted-foreground)))]
        bg-[length:200%_100%]
        bg-clip-text
        text-transparent
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default ShinyText;
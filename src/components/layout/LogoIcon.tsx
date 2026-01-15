"use client";

import React from 'react';
import { useDarkVeil } from './DarkVeilProvider';
import { useTheme } from 'next-themes';

const LogoIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isDarkVeilActive } = useDarkVeil();
  const { theme } = useTheme();

  const isDarkBackground = isDarkVeilActive || theme === 'dark';

  // CSS filter classes to apply color tinting to the grayscale image
  // Light Mode (Blue Tint): hue-rotate(180deg) saturate(150%) brightness(110%)
  // Dark Mode (Purple Tint): hue-rotate(270deg) saturate(150%) brightness(110%)
  const filterClass = isDarkBackground
    ? 'filter hue-rotate-[270deg] saturate-[1.5] brightness-[1.1]' // Purple tint for dark mode
    : 'filter hue-rotate-[180deg] saturate-[1.5] brightness-[1.1]'; // Blue tint for light mode

  return (
    <img
      src="/ernie-joseph-cledera.jpg"
      alt="EJC Logo"
      className={`h-6 w-6 rounded-full object-cover transition-all duration-300 ${filterClass} ${className}`}
    />
  );
};

export default LogoIcon;
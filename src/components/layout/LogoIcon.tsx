"use client";

import React from 'react';
import { useDarkVeil } from './DarkVeilProvider';
import { useTheme } from 'next-themes';

const LogoIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isDarkVeilActive } = useDarkVeil();
  const { theme } = useTheme();

  const isDarkBackground = isDarkVeilActive || theme === 'dark';

  // Use the paths requested by the user
  const logoSrc = isDarkBackground
    ? '/Logo Purple.png' // Dark mode logo
    : '/Logo Blue.png';  // Light mode logo

  return (
    <img
      src={logoSrc}
      alt="EJC Logo"
      // Removed filter class since the images are expected to be pre-colored
      className={`h-6 w-6 rounded-full object-cover transition-all duration-300 ${className}`}
    />
  );
};

export default LogoIcon;
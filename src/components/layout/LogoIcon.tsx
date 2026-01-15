"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import { useDarkVeil } from './DarkVeilProvider';

const LogoIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme } = useTheme();
  const { isDarkVeilActive } = useDarkVeil();

  const isDarkBackground = isDarkVeilActive || theme === 'dark';

  // Use Logo Yellow.png when in dark mode or Dark Veil mode, otherwise use Logo Blue.png
  const logoSrc = isDarkBackground ? '/Logo Yellow.png' : '/Logo Blue.png';

  return (
    <img
      src={logoSrc}
      alt="EJC Logo"
      className={`h-6 w-6 rounded-full object-cover transition-all duration-300 ${className}`}
    />
  );
};

export default LogoIcon;
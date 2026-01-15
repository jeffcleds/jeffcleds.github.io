"use client";

import React from 'react';

const LogoIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  // Always use the blue logo, regardless of theme/Dark Veil state
  const logoSrc = '/Logo Blue.png';

  return (
    <img
      src={logoSrc}
      alt="EJC Logo"
      className={`h-6 w-6 rounded-full object-cover transition-all duration-300 ${className}`}
    />
  );
};

export default LogoIcon;
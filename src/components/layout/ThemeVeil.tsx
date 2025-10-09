"use client";

import React from 'react';
import { useTheme } from 'next-themes';

const ThemeVeil: React.FC = () => {
  const { theme } = useTheme();

  if (theme === 'dark') {
    return (
      <div className="fixed inset-0 bg-black/20 z-[999]" aria-hidden="true" />
    );
  }

  return null;
};

export default ThemeVeil;
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DarkVeilContextType {
  isDarkVeilActive: boolean;
  toggleDarkVeil: () => void;
}

const DarkVeilContext = createContext<DarkVeilContextType | undefined>(undefined);

const DARK_VEIL_STORAGE_KEY = 'dyad-dark-veil-active';

export const DarkVeilProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state from localStorage, defaulting to false if not found.
  const [isDarkVeilActive, setIsDarkVeilActive] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(DARK_VEIL_STORAGE_KEY);
      // If storedValue is null/undefined, default to false. Otherwise, parse 'true'/'false'.
      return storedValue === 'true';
    }
    // Default to false during SSR or initial render
    return false;
  });

  const toggleDarkVeil = () => {
    setIsDarkVeilActive(prev => {
      const newState = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem(DARK_VEIL_STORAGE_KEY, String(newState));
      }
      return newState;
    });
  };

  return (
    <DarkVeilContext.Provider value={{ isDarkVeilActive, toggleDarkVeil }}>
      {children}
    </DarkVeilContext.Provider>
  );
};

export const useDarkVeil = () => {
  const context = useContext(DarkVeilContext);
  if (context === undefined) {
    throw new Error('useDarkVeil must be used within a DarkVeilProvider');
  }
  return context;
};
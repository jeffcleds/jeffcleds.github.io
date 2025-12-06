"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DarkVeilContextType {
  isDarkVeilActive: boolean;
  toggleDarkVeil: () => void;
}

const DarkVeilContext = createContext<DarkVeilContextType | undefined>(undefined);

const DARK_VEIL_STORAGE_KEY = 'dyad-dark-veil-active';

export const DarkVeilProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state from localStorage.
  const [isDarkVeilActive, setIsDarkVeilActive] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(DARK_VEIL_STORAGE_KEY);
      
      // If storedValue is null (first visit), default to TRUE. Otherwise, parse 'true'/'false'.
      if (storedValue === null) {
        return true; // Default to Dark Veil active on first load
      }
      return storedValue === 'true';
    }
    // Default to true during SSR or initial render if window is undefined
    return true;
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
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DarkVeilContextType {
  isDarkVeilActive: boolean;
  toggleDarkVeil: () => void;
}

const DarkVeilContext = createContext<DarkVeilContextType | undefined>(undefined);

export const DarkVeilProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkVeilActive, setIsDarkVeilActive] = useState(false);

  const toggleDarkVeil = () => {
    setIsDarkVeilActive(prev => !prev);
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
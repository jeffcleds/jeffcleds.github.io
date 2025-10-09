"use client";

import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDarkVeil } from './DarkVeilProvider';
import { useTheme } from 'next-themes'; // Import useTheme

const DarkVeilToggle: React.FC = () => {
  const { isDarkVeilActive, toggleDarkVeil } = useDarkVeil();
  const { setTheme } = useTheme(); // Get the setTheme function from next-themes

  const handleToggle = () => {
    toggleDarkVeil(); // Toggle the Dark Veil state
    if (!isDarkVeilActive) {
      setTheme('dark'); // If Dark Veil is being activated, set theme to dark
    } else {
      setTheme('light'); // If Dark Veil is being deactivated, set theme to light
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className={isDarkVeilActive ? "text-primary" : "text-muted-foreground"}
    >
      <Sparkles className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle Dark Veil</span>
    </Button>
  );
};

export default DarkVeilToggle;
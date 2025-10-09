"use client";

import * as React from "react";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useDarkVeil } from "./DarkVeilProvider";

type AppMode = 'light' | 'dark' | 'sparkle';

const ThemeAndVeilSwitcher: React.FC = () => {
  const { setTheme, theme } = useTheme();
  const { isDarkVeilActive, toggleDarkVeil } = useDarkVeil();

  // Determine the current active mode
  const currentMode: AppMode = React.useMemo(() => {
    if (isDarkVeilActive) {
      return 'sparkle';
    }
    return (theme as AppMode) || 'light'; // Default to light if theme is not set
  }, [isDarkVeilActive, theme]);

  const cycleMode = () => {
    let nextMode: AppMode;

    if (currentMode === 'light') {
      nextMode = 'dark';
    } else if (currentMode === 'dark') {
      nextMode = 'sparkle';
    } else { // currentMode === 'sparkle'
      nextMode = 'light';
    }

    applyMode(nextMode);
  };

  const applyMode = (mode: AppMode) => {
    if (mode === 'sparkle') {
      if (!isDarkVeilActive) {
        toggleDarkVeil();
      }
      setTheme('dark'); // Dark Veil always implies dark theme
    } else {
      if (isDarkVeilActive) {
        toggleDarkVeil(); // Deactivate Dark Veil if switching to light/dark
      }
      setTheme(mode);
    }
  };

  // Determine the icon to display based on the current mode
  const ActiveIcon = React.useMemo(() => {
    if (currentMode === 'sparkle') {
      return Sparkles;
    }
    return currentMode === 'dark' ? Moon : Sun;
  }, [currentMode]);

  return (
    <Button variant="ghost" size="icon" onClick={cycleMode}>
      <ActiveIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      <span className="sr-only">Toggle theme and veil</span>
    </Button>
  );
};

export default ThemeAndVeilSwitcher;
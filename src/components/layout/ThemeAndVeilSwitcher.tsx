"use client";

import * as React from "react";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { toast } from "sonner"; // Import toast from sonner

import { Button } from "@/components/ui/button";
import { useDarkVeil } from "./DarkVeilProvider";

type AppMode = 'light' | 'dark' | 'sparkle';

const INTRO_TOAST_KEY = 'dyad-intro-theme-toast-shown';

const ThemeAndVeilSwitcher: React.FC = () => {
  const { setTheme, theme } = useTheme();
  const { isDarkVeilActive, toggleDarkVeil } = useDarkVeil();

  // --- Introductory Toast Logic ---
  React.useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem(INTRO_TOAST_KEY)) {
      toast('💡 Click me to cycle between Light, Dark, and Sparkle modes!', {
        duration: 8000, // Show for 8 seconds
        id: 'intro-theme-guide',
        position: 'bottom-right',
      });
      localStorage.setItem(INTRO_TOAST_KEY, 'true');
    }
  }, []);
  // --------------------------------

  // Determine the current active mode
  const currentMode: AppMode = React.useMemo(() => {
    if (isDarkVeilActive) {
      return 'sparkle';
    }
    return (theme as AppMode) || 'light'; // Default to light if theme is not set
  }, [isDarkVeilActive, theme]);

  const cycleMode = () => {
    // Dismiss the introductory toast if the user interacts with the button
    toast.dismiss('intro-theme-guide');
    
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
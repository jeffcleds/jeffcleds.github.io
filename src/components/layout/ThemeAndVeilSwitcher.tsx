"use client";

import * as React from "react";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDarkVeil } from "./DarkVeilProvider";

const ThemeAndVeilSwitcher: React.FC = () => {
  const { setTheme, theme } = useTheme();
  const { isDarkVeilActive, toggleDarkVeil } = useDarkVeil();

  const handleSelect = (selectedMode: 'light' | 'dark' | 'sparkle') => {
    if (selectedMode === 'sparkle') {
      if (!isDarkVeilActive) {
        toggleDarkVeil();
        setTheme('dark'); // Dark Veil always implies dark theme
      }
    } else {
      if (isDarkVeilActive) {
        toggleDarkVeil(); // Deactivate Dark Veil if switching to light/dark
      }
      setTheme(selectedMode);
    }
  };

  // Determine the current active icon for the trigger button
  const ActiveIcon = React.useMemo(() => {
    if (isDarkVeilActive) {
      return Sparkles;
    }
    return theme === 'dark' ? Moon : Sun;
  }, [isDarkVeilActive, theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <ActiveIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle theme and veil</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleSelect("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("sparkle")}>
          <Sparkles className="mr-2 h-4 w-4" />
          <span>Sparkle</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeAndVeilSwitcher;
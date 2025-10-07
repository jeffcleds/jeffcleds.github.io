"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    console.log("ThemeToggle mounted. Current theme:", theme, "setTheme function:", setTheme);
  }, [theme, setTheme]);

  const toggleTheme = () => {
    if (setTheme) { // Ensure setTheme is available before calling it
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
      console.log("Toggled theme to:", newTheme);
    } else {
      console.error("setTheme function is not available from useTheme hook.");
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
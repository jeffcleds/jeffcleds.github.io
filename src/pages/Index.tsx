"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import IntroCard from '@/components/portfolio/IntroCard';
import TypewriterEffect from '@/components/TypewriterEffect';
import ShinyText from '@/components/animations/ShinyText'; // Import ShinyText
import { useDarkVeil } from '@/components/layout/DarkVeilProvider';
import { useTheme } from 'next-themes';

// Define a type that allows custom CSS variables (prefixed with --)
type CustomCSSProperties = React.CSSProperties & Record<`--${string}`, string | number>;

export default function Index() {
  const { isDarkVeilActive } = useDarkVeil();
  const { theme } = useTheme();

  const isDarkBackground = isDarkVeilActive || theme === 'dark';

  // Define dynamic styles for ShinyText, matching Navbar logic
  const shinyTextStyle: CustomCSSProperties = isDarkBackground
    ? {
        // Base text color (Dark Mode): hsl(240, 4%, 85%)
        '--muted-foreground': '240 4% 85%', 
        // Shine color: Golden Yellow (45 100% 50%)
        '--primary-foreground': '45 100% 50%', 
      }
    : {
        // Base text color (Light Mode): hsl(217, 53%, 15%)
        '--muted-foreground': '217 53% 15%', 
        '--primary-foreground': '220 80% 50%', // Brighter navy shine color
      };

  const jobTitles = [
    "IT Specialist",
    "Web Developer",
    "Virtual Assistant",
    "Network Engineer",
    "Dispatcher",
    "Software Developer"
  ];

  // Determine the shadow class dynamically
  const shadowClass = isDarkBackground 
    ? 'hover:shadow-golden-glow/50' // Use custom golden glow in dark mode
    : 'hover:shadow-primary/50'; // Use default primary color in light mode

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] text-center px-4 py-12">
      <img
        src="/ernie-joseph-cledera.jpg"
        alt="Ernie Joseph Cledera"
        className={`w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover mb-8 transition-transform duration-300 ease-in-out border-4 border-primary shadow-lg hover:scale-105 hover:shadow-xl ${shadowClass}`}
      />
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">
        <span className={isDarkBackground ? 'text-foreground/65' : ''}>Hello, I'm</span>{' '}
        <span className="">
          <ShinyText style={shinyTextStyle}>Ernie Joseph Cledera</ShinyText>
        </span>
      </h1>
      <TypewriterEffect
        words={jobTitles}
        className="text-xl text-muted-foreground mb-8 max-w-2xl"
      />
      <div className="mb-12 flex gap-4">
        {/* Removed MagnetEffect wrapper */}
        <Button asChild size="lg">
          <Link to="/projects">View My Work</Link>
        </Button>
        {/* Removed MagnetEffect wrapper */}
        <Button asChild size="lg" variant="outline">
          <Link to="/about">About Me</Link>
        </Button>
      </div>
      <IntroCard />

      {/* The LogoLoop component has been removed */}
    </div>
  );
}
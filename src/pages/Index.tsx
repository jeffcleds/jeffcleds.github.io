"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import IntroCard from '@/components/portfolio/IntroCard';
import TypewriterEffect from '@/components/TypewriterEffect';
import ShinyText from '@/components/ShinyText'; // Import ShinyText
import ScrollReveal from '@/components/ScrollReveal'; // Keep existing import

export default function Index() {
  const jobTitles = [
    "IT Specialist",
    "Web Developer",
    "Virtual Assistant",
    "Network Engineer",
    "Dispatcher",
    "Software Developer"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] text-center px-4 py-12">
      <img
        src="/ernie-joseph-cledera.jpg"
        alt="Ernie Joseph Cledera"
        className="w-48 h-48 rounded-full object-cover mb-8 transition-transform duration-300 ease-in-out border-4 border-primary shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/50"
      />
      <ShinyText
        text="Hello, I'm Ernie Joseph Cledera"
        speed={5} // You can adjust the speed as needed
        className="text-5xl font-extrabold tracking-tight mb-4" // Apply existing styling
      />
      <TypewriterEffect
        words={jobTitles}
        className="text-xl text-muted-foreground mb-8 max-w-2xl"
      />
      <div className="mb-12">
        <Button asChild size="lg">
          <Link to="/projects">View My Work</Link>
        </Button>
      </div>
      <IntroCard />
    </div>
  );
}
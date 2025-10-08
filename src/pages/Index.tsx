"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import IntroCard from '@/components/portfolio/IntroCard';
import TypewriterEffect from '@/components/TypewriterEffect';
import ShinyText from '@/components/animations/ShinyText';
import GlareCard from '@/components/animations/GlareCard'; // Import GlareCard

export default function Index() {
  const jobTitles = [
    "IT Specialist",
    "Web Developer",
    "Virtual Assistant",
    "Network Engineer",
    "Dispatcher",
    "Software Developer"
  ];

  const handleAnimationComplete = () => {
    console.log('Main heading animation complete!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] text-center px-4 py-12">
      <img
        src="/ernie-joseph-cledera.jpg"
        alt="Ernie Joseph Cledera"
        className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover mb-8 transition-transform duration-300 ease-in-out border-4 border-primary shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/50"
      />
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">
        Hello, I'm <ShinyText className="bg-[linear-gradient(110deg,hsl(218_47%_16%),45%,hsl(218_60%_30%),55%,hsl(218_47%_16%))]">Ernie Joseph Cledera</ShinyText>
      </h1>
      <TypewriterEffect
        words={jobTitles}
        className="text-xl text-muted-foreground mb-8 max-w-2xl"
      />
      <div className="mb-12 flex gap-4">
        <GlareCard className="rounded-lg"> {/* Wrap with GlareCard */}
          <Button asChild size="lg">
            <Link to="/projects">View My Work</Link>
          </Button>
        </GlareCard>
        <GlareCard className="rounded-lg"> {/* Wrap with GlareCard */}
          <Button asChild size="lg" variant="outline">
            <Link to="/about">About Me</Link>
          </Button>
        </GlareCard>
      </div>
      <IntroCard />

      {/* The LogoLoop component has been removed */}
    </div>
  );
}
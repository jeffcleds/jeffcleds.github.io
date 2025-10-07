"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import IntroCard from '@/components/portfolio/IntroCard';
import TypewriterEffect from '@/components/TypewriterEffect';
import SplitText from '@/components/SplitText';
import MagnetEffect from '@/components/animations/MagnetEffect';
import { softwareUsedData } from '@/data/portfolioData';

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
        className="w-48 h-48 rounded-full object-cover mb-8 transition-transform duration-300 ease-in-out border-4 border-primary shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/50"
      />
      <SplitText
        text="Hello, I'm Ernie Joseph Cledera"
        className="text-5xl font-extrabold tracking-tight mb-4"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        tag="h1"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <TypewriterEffect
        words={jobTitles}
        className="text-xl text-muted-foreground mb-8 max-w-2xl"
      />
      <div className="mb-12">
        <MagnetEffect strength={20} tolerance={0.8}>
          <Button asChild size="lg">
            <Link to="/projects">View My Work</Link>
          </Button>
        </MagnetEffect>
      </div>
      <IntroCard />

      {/* The LogoLoop component has been removed */}
    </div>
  );
}
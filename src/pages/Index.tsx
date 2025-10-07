"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import IntroCard from '@/components/portfolio/IntroCard';
import TypewriterEffect from '@/components/TypewriterEffect';

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] text-center px-4 py-12">
      <img
        src="/ernie-joseph-cledera.jpg"
        alt="Ernie Joseph Cledera"
        className="w-48 h-48 rounded-full object-cover mb-8 transition-transform duration-300 ease-in-out border-4 border-primary shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/50" // Added hover:shadow-xl hover:shadow-primary/50 for glow
      />
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">
        Hello, I'm Ernie Joseph Cledera
      </h1>
      <TypewriterEffect
        text="Virtual Assistant | Data Management Specialist | Web Developer"
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
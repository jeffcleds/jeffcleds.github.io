"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import IntroCard from '@/components/portfolio/IntroCard';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] text-center px-4 py-12">
      <img
        src="/ernie-joseph-cledera-new.jpg"
        alt="Ernie Joseph Cledera"
        className="w-48 h-48 rounded-full object-cover mb-8 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out border-4 border-primary shadow-lg"
      />
      <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-foreground">
        Ernie Joseph Cledera
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
        Virtual Assistant | Data Management Specialist | Web Developer
      </p>
      <div className="mb-12">
        <IntroCard />
      </div>
      <div className="flex space-x-4">
        <Button asChild size="lg">
          <Link to="/portfolio">
            View My Work <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/contact">
            Contact Me
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
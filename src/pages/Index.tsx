"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TypewriterEffect from '@/components/TypewriterEffect';
import SplitText from '@/components/SplitText';
import MagnetEffect from '@/components/animations/MagnetEffect';
import SocialLinks from '@/components/SocialLinks'; // Import the new SocialLinks component
import { profileData } from '@/data/portfolioData'; // Import profileData

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
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-14rem)] px-4 py-12 gap-12">
      {/* Left Section: Profile Image */}
      <div className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-slow" style={{ transform: 'scale(1.1)' }}></div> {/* Lighter red circle background */}
        <img
          src={profileData.profileImage}
          alt={profileData.name}
          className="relative z-10 w-full h-full rounded-full object-cover border-4 border-primary shadow-lg"
        />
      </div>

      {/* Right Section: Text Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Hi, It's</h2>
        <SplitText
          text={profileData.name}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-primary" // Apply primary color here
          delay={50}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left" // Align text to left
          tag="h1"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <div className="flex items-center text-xl md:text-2xl text-foreground mb-6">
          <span className="mr-2">I'm a</span>
          <TypewriterEffect
            words={jobTitles}
            className="font-bold text-primary" // Apply primary color here
          />
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          {profileData.introduction.split('<span class="highlight">').map((segment, index) => {
            if (index === 0) {
              return segment;
            } else {
              const partsAfterHighlight = segment.split('</span>');
              const highlightedText = partsAfterHighlight[0];
              const remainingText = partsAfterHighlight.slice(1).join('</span>');

              return (
                <React.Fragment key={index}>
                  <span className="text-primary font-semibold">{highlightedText}</span>
                  {remainingText}
                </React.Fragment>
              );
            }
          })}
        </p>
        <SocialLinks className="mb-8" />
        <MagnetEffect strength={20} tolerance={0.8}>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/contact">Hire me</Link>
          </Button>
        </MagnetEffect>
      </div>
    </div>
  );
}
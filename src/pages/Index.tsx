"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { IntroCard } from '@/components/portfolio/IntroCard';
import TypewriterEffect from '@/components/TypewriterEffect'; // Import the new component

const profileData = {
  name: "Ernie Joseph Cledera",
  tagline: "Passionate about creating impactful digital experiences.",
  introduction: "I am <span class=\"highlight\">Ernie Joseph Cledera</span>, a dedicated professional with a strong background in virtual assistance, data management, and web development. My goal is to leverage technology to streamline processes and build user-friendly applications. I thrive in dynamic environments and am always eager to learn new technologies and improve my skills."
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] text-center px-4 py-12">
      <img
        src="/ernie-joseph-cledera.jpg" // Ensure this image is in your 'public' folder
        alt="Ernie Joseph Cledera"
        className="w-48 h-48 rounded-full object-cover mb-8 transition-transform duration-300 ease-in-out border-4 border-primary shadow-lg hover:scale-105" // Removed grayscale, added hover:scale-105
      />
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">
        Hello, I'm Ernie Joseph Cledera
      </h1>
      <TypewriterEffect // Using the new TypewriterEffect component
        text="Virtual Assistant | Data Management Specialist | Web Developer"
        className="text-xl text-muted-foreground mb-8 max-w-2xl"
      />
      <div className="mb-12">
        <Button asChild size="lg">
          <Link to="/portfolio">View My Work</Link>
        </Button>
      </div>
      <IntroCard profileData={profileData} />
    </div>
  );
}
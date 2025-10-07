"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

// This profileData is assumed to be defined here or passed as props.
// We're updating the introduction string to include the highlight tags around the name.
const profileData = {
  introduction: `Hello! I'm <span class="highlight">Ernie Joseph B. Cledera</span>, a passionate and dedicated Full Stack Web Developer with a strong foundation in creating dynamic and responsive web applications. I specialize in both front-end and back-end development, bringing ideas to life with clean, efficient, and scalable code.`,
};

const IntroCard = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto p-6 shadow-lg rounded-lg">
      <CardContent className="p-0">
        <p className="text-lg leading-relaxed text-muted-foreground">
          {profileData.introduction.split('<span class="highlight">').map((part, index) => (
            index % 2 === 0 ? part : <span key={index} className="text-primary font-semibold">{part.split('</span>')[0]}</span>
          ))}
        </p>
      </CardContent>
    </Card>
  );
};

export default IntroCard;
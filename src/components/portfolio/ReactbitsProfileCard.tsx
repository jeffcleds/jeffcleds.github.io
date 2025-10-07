"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Link as LinkIcon } from 'lucide-react';
import { profileData } from '@/data/portfolioData';

const ReactbitsProfileCard: React.FC = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto p-6 shadow-lg rounded-lg text-center">
      <CardHeader className="p-0 pb-4 flex flex-col items-center">
        <img
          src={profileData.profileImage}
          alt={profileData.name}
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary shadow-md"
        />
        <CardTitle className="text-3xl font-bold text-foreground mb-1">{profileData.name}</CardTitle>
        <CardDescription className="text-lg text-muted-foreground">Software Developer & IT Specialist</CardDescription>
      </CardHeader>
      <CardContent className="p-0 flex flex-col items-center gap-4">
        <div className="flex gap-4 mt-4">
          <Button asChild variant="outline">
            <a href="https://github.com/jeffcleds" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" /> GitHub
            </a>
          </Button>
          <Button asChild>
            <a href="https://www.linkedin.com/in/ernie-cledera/" target="_blank" rel="noopener noreferrer">
              <LinkIcon className="h-4 w-4 mr-2" /> LinkedIn
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReactbitsProfileCard;
"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import { useDarkVeil } from '@/components/layout/DarkVeilProvider';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

interface GithubCalendarProps {
  username: string;
}

const GithubContributionsCalendar: React.FC<GithubCalendarProps> = ({ username }) => {
  const { theme } = useTheme();
  const { isDarkVeilActive } = useDarkVeil();

  const isDark = isDarkVeilActive || theme === 'dark';
  const cardClassNames = isDarkVeilActive ? 'bg-card/50 border border-primary/20' : '';

  return (
    <Card className={`p-6 ${cardClassNames}`}>
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">GitHub Contributions</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-col items-center justify-center space-y-4 py-8">
        <p className="text-muted-foreground text-center">
          The interactive contribution calendar is currently unavailable.
        </p>
        <Button asChild>
          <a 
            href={`https://github.com/${username}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Github className="h-5 w-5 mr-2" /> View Contributions on GitHub
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default GithubContributionsCalendar;
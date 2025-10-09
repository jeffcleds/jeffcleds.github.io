"use client";

import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDarkVeil } from './DarkVeilProvider';

const DarkVeilToggle: React.FC = () => {
  const { isDarkVeilActive, toggleDarkVeil } = useDarkVeil();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkVeil}
      className={isDarkVeilActive ? "text-primary" : "text-muted-foreground"}
    >
      <Sparkles className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle Dark Veil</span>
    </Button>
  );
};

export default DarkVeilToggle;
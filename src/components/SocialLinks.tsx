"use client";

import React from 'react';
import { socialLinks } from '@/data/portfolioData';
import { Button } from '@/components/ui/button';
import * as LucideIcons from 'lucide-react'; // Import all Lucide icons

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link) => {
        const IconComponent = (LucideIcons as any)[link.icon];
        if (!IconComponent) {
          console.warn(`Icon "${link.icon}" not found in LucideIcons.`);
          return null;
        }
        return (
          <Button key={link.id} asChild variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
              <IconComponent className="h-4 w-4" />
            </a>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialLinks;
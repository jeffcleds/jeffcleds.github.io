"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { profileData } from '@/data/portfolioData'; // Import profileData

const IntroCard = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto p-6 shadow-lg rounded-lg">
      <CardContent className="p-0">
        <p className="text-lg leading-relaxed text-muted-foreground">
          {profileData.introduction.split('<span class="highlight">').map((segment, index) => {
            if (index === 0) {
              // This is the part before the first highlight tag
              return segment;
            } else {
              // This segment contains the highlighted text and potentially text after it
              const partsAfterHighlight = segment.split('</span>');
              const highlightedText = partsAfterHighlight[0];
              const remainingText = partsAfterHighlight.slice(1).join('</span>'); // Join any subsequent parts if there were multiple </span>

              return (
                <React.Fragment key={index}>
                  <span className="text-primary font-semibold">{highlightedText}</span>
                  {remainingText}
                </React.Fragment>
              );
            }
          })}
        </p>
      </CardContent>
    </Card>
  );
};

export default IntroCard;
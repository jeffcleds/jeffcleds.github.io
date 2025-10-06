import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { profileData } from "@/data/portfolioData";

const IntroCard: React.FC = () => {
  return (
    <Card className="p-6">
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
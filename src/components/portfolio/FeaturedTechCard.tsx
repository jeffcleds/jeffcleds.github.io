import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { technicalSkillsData, languagesData } from "@/data/portfolioData";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";
import { Separator } from "@/components/ui/separator";

const FeaturedTechCard: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil();
  const cardClassNames = isDarkVeilActive ? 'bg-card/50 border border-primary/20' : '';

  // Select a few key technologies and languages to feature
  const featuredTech = technicalSkillsData.slice(0, 6);
  const featuredLanguages = languagesData.slice(0, 6);

  return (
    <Card className={`p-6 ${cardClassNames}`}>
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">Featured Technologies</CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-6">
        <div>
          <h4 className="text-lg font-semibold mb-3">Core Technical Skills</h4>
          <div className="flex flex-wrap gap-2">
            {featuredTech.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <Separator />
        <div>
          <h4 className="text-lg font-semibold mb-3">Programming Languages</h4>
          <div className="flex flex-wrap gap-2">
            {featuredLanguages.map((lang, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedTechCard;
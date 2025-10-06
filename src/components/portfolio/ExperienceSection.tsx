import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ExperienceItem from "./ExperienceItem";
import { experienceData } from "@/data/portfolioData";

const ExperienceSection: React.FC = () => {
  return (
    <Card className="p-6">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">Experience</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {experienceData.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </CardContent>
    </Card>
  );
};

export default ExperienceSection;
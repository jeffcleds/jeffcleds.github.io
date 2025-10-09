import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EducationItem from "./EducationItem";
import { educationData } from "@/data/portfolioData";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider"; // Import useDarkVeil

const EducationSection: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil(); // Use DarkVeil hook

  return (
    <Card className={`p-6 ${isDarkVeilActive ? 'bg-card/50 border border-primary/20' : ''}`}>
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">Education</CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-6">
        {educationData.map((education) => (
          <EducationItem key={education.id} education={education} />
        ))}
      </CardContent>
    </Card>
  );
};

export default EducationSection;
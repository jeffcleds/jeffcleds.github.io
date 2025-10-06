import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { interestsData } from "@/data/portfolioData";

const InterestsCard: React.FC = () => {
  return (
    <Card className="p-6">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">Interests</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-wrap gap-2">
        {interestsData.map((interest, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
          >
            {interest}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default InterestsCard;
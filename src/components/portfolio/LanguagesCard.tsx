import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { languagesData } from "@/data/portfolioData"; // Import languagesData

const LanguagesCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Languages</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-wrap gap-2">
        {languagesData.map((lang, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-md bg-accent px-3 py-1 text-sm font-medium text-accent-foreground"
          >
            {lang}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default LanguagesCard;
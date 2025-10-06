import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { languagesData } from "@/data/portfolioData";

const LanguagesCard: React.FC = () => {
  return (
    <Card className="p-6">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">Languages</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-wrap gap-3">
        {languagesData.map((lang, index) => (
          <span
            key={index}
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-muted text-2xl"
            title={lang.name}
          >
            {lang.flag}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default LanguagesCard;
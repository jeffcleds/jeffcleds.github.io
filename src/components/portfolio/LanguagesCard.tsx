import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { languagesData } from "@/data/portfolioData";

const LanguagesCard: React.FC = () => {
  return (
    <Card className="p-6"> {/* Added p-6 for overall card padding */}
      <CardHeader className="p-0 pb-4"> {/* Added p-0 pb-4 for header padding */}
        <CardTitle className="text-2xl font-bold">Languages</CardTitle>
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
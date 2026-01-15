import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AffiliationItem from "./AffiliationItem";
import { affiliationsData } from "@/data/portfolioData";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";

const AffiliationsSection: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil();

  return (
    <Card className={`p-6 ${isDarkVeilActive ? 'border border-primary/20 backdrop-blur-md' : ''}`}>
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">Affiliations</CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-6">
        {affiliationsData.map((affiliation) => (
          <AffiliationItem key={affiliation.id} affiliation={affiliation} />
        ))}
      </CardContent>
    </Card>
  );
};

export default AffiliationsSection;
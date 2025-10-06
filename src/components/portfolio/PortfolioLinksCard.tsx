import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioLinksData } from "@/data/portfolioData";

const PortfolioLinksCard: React.FC = () => {
  return (
    <Card className="p-6">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">Portfolio</CardTitle>
      </CardHeader>
      <CardContent className="p-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {portfolioLinksData.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center p-3 rounded-lg text-lg font-semibold transition-colors hover:opacity-80 ${link.className || 'bg-primary text-primary-foreground'}`}
          >
            <span className="mr-2 text-xl">{link.icon}</span>
            <span>{link.name}</span>
          </a>
        ))}
      </CardContent>
    </Card>
  );
};

export default PortfolioLinksCard;
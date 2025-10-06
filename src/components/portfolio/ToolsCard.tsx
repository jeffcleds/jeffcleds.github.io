import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { softwareUsedData } from "@/data/portfolioData"; // Updated import

const ToolsCard: React.FC = () => {
  return (
    <Card className="p-6">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">Software Used</CardTitle> {/* Renamed title */}
      </CardHeader>
      <CardContent className="p-0 flex flex-wrap gap-3">
        {softwareUsedData.map((tool, index) => (
          <span
            key={index}
            className={`inline-flex items-center justify-center h-10 w-10 rounded-full text-lg font-bold ${tool.className || 'bg-muted text-muted-foreground'}`}
            title={tool.name}
          >
            {tool.icon}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default ToolsCard;
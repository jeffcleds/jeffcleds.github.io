import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { editingToolsData } from "@/data/portfolioData";

const ToolsCard: React.FC = () => {
  return (
    <Card className="p-6">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">Editing Tools</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-wrap gap-3">
        {editingToolsData.map((tool, index) => (
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
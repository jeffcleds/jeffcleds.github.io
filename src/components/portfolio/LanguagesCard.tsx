import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const languagesData = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Python" },
  { name: "Java" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "PHP" },
  { name: "C++" },
];

const LanguagesCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Languages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {languagesData.map((lang, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-lg font-medium">{lang.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguagesCard;
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Javascript, Typescript, Python, Java, Html5, Css3, Php, Cpp } from "@icons-pack/react-simple-icons";

const languagesData = [
  { name: "JavaScript", icon: Javascript },
  { name: "TypeScript", icon: Typescript },
  { name: "Python", icon: Python },
  { name: "Java", icon: Java },
  { name: "HTML5", icon: Html5 },
  { name: "CSS3", icon: Css3 },
  { name: "PHP", icon: Php },
  { name: "C++", icon: Cpp },
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
              {/* Removed the span for the icon */}
              <span className="text-lg font-medium">{lang.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguagesCard;
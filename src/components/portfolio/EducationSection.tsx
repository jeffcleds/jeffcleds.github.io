import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EducationItem from "./EducationItem";
import { educationData, diplomaData, graduationData } from "@/data/portfolioData";

const EducationSection: React.FC = () => {
  return (
    <Card className="p-6">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">Education</CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-6">
        {educationData.map((education) => (
          <EducationItem key={education.id} education={education} />
        ))}
        {/* Diploma */}
        <div className="mb-6 last:mb-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{diplomaData.title}</h3>
              <p className="text-muted-foreground">{diplomaData.subtitle}</p>
              <p className="text-muted-foreground text-sm">{diplomaData.location}</p>
            </div>
            <span className="mt-2 sm:mt-0 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {diplomaData.date}
            </span>
          </div>
        </div>
        {/* Graduation */}
        <div className="mb-6 last:mb-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{graduationData.title}</h3>
              <p className="text-muted-foreground">{graduationData.subtitle}</p>
              <p className="text-muted-foreground text-sm">{graduationData.location}</p>
            </div>
            <span className="mt-2 sm:mt-0 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {graduationData.date}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationSection;
import React from "react";
import { Education } from "@/data/portfolioData";

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-foreground">{education.title}</h3>
          <p className="text-muted-foreground">{education.location}</p>
          <p className="text-muted-foreground text-sm">{education.subtitle}</p>
        </div>
        <div className="flex flex-col sm:items-end mt-2 sm:mt-0"> {/* Adjusted alignment here */}
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
            {education.date}
          </span>
          {education.logo && (
            <img
              src={education.logo}
              alt={`${education.title} Logo`}
              className="h-10 w-10 object-contain mt-1"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
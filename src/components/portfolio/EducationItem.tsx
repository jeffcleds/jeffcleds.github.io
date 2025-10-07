import React from "react";
import { Education } from "@/data/portfolioData";

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
        {/* Left side: Title, Date, Location, Subtitle */}
        <div className="flex-grow">
          <div className="flex items-center flex-wrap gap-x-2"> {/* Group title and date */}
            <h3 className="text-xl font-semibold text-foreground">{education.title}</h3>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mt-1 sm:mt-0 whitespace-nowrap">
              {education.date}
            </span>
          </div>
          <p className="text-muted-foreground mt-1">{education.location}</p> {/* Added mt-1 for spacing */}
          <p className="text-muted-foreground text-sm">{education.subtitle}</p>
        </div>
        {/* Right side: Logo */}
        {education.logo && (
          <img
            src={education.logo}
            alt={`${education.title} Logo`}
            className="h-10 w-10 object-contain mt-2 sm:mt-0"
          />
        )}
      </div>
    </div>
  );
};

export default EducationItem;
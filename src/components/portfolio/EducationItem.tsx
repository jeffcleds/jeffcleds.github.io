import React from "react";
import { Education } from "@/data/portfolioData";

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="mb-6 last:mb-0 flex items-start justify-between gap-4">
      {/* Left side: Title, mobile date, location, subtitle */}
      <div className="flex-grow">
        <div className="flex items-center flex-wrap gap-x-2">
          <h3 className="text-xl font-semibold text-foreground">{education.title}</h3>
          {/* Date only visible on mobile, next to title */}
          <span className="inline-flex sm:hidden items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mt-1 whitespace-nowrap">
            {education.date}
          </span>
        </div>
        <p className="text-muted-foreground mt-1">{education.location}</p>
        <p className="text-muted-foreground text-sm">{education.subtitle}</p>
      </div>

      {/* Right side: Desktop date and Logo */}
      <div className="flex flex-col items-end flex-shrink-0">
        {/* Date only visible on desktop */}
        <span className="hidden sm:inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary whitespace-nowrap mb-2">
          {education.date}
        </span>
        {education.logo && (
          <img
            src={education.logo}
            alt={`${education.title} Logo`}
            className="h-10 w-10 object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default EducationItem;
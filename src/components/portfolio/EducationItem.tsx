import React from "react";
import { Education } from "@/data/portfolioData";

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        {/* Main content block (title, location, subtitle) */}
        <div className="flex-grow">
          {/* Title and Date for mobile, Title only for desktop */}
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

        {/* Right-aligned block for desktop (Date and Logo) */}
        <div className="flex items-center gap-x-4 mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
          {/* Date only visible on desktop */}
          <span className="hidden sm:inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary whitespace-nowrap">
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
    </div>
  );
};

export default EducationItem;
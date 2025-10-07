import React from "react";
import { Education } from "@/data/portfolioData";

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2"> {/* Changed to flex (defaults to row) and items-center for vertical alignment */}
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-foreground">{education.title}</h3>
          <p className="text-muted-foreground">{education.location}</p>
          <p className="text-muted-foreground text-sm">{education.subtitle}</p>
        </div>
        <div className="flex flex-col items-end"> {/* Ensures date/logo stack and align to the right */}
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
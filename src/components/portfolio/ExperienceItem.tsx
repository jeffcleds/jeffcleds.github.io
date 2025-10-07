import React from "react";
import { Experience } from "@/data/portfolioData";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        {/* Main content block (title, subtitle, responsibilities) */}
        <div className="flex-grow">
          {/* Title and Date for mobile, Title only for desktop */}
          <div className="flex items-center flex-wrap gap-x-2">
            <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
            {/* Date only visible on mobile, next to title */}
            <span className="inline-flex sm:hidden items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mt-1 whitespace-nowrap">
              {experience.date}
            </span>
          </div>
          <p className="text-muted-foreground mt-1">{experience.subtitle}</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        {/* Right-aligned block for desktop (Date and Logo) */}
        <div className="flex items-center gap-x-4 mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
          {/* Date only visible on desktop */}
          <span className="hidden sm:inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary whitespace-nowrap">
            {experience.date}
          </span>
          {experience.logo && (
            <img
              src={experience.logo}
              alt={`${experience.title} Logo`}
              className="h-10 w-10 object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
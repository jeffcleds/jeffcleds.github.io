import React from "react";
import { Experience } from "@/data/portfolioData";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="mb-6 last:mb-0 flex items-start justify-between gap-4">
      {/* Left side: Title, mobile date, subtitle, responsibilities */}
      <div className="flex-grow">
        <div className="flex items-center flex-wrap gap-x-2">
          <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
          {/* Date only visible on mobile, next to title */}
          <span className="inline-flex sm:hidden items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mt-1 whitespace-nowrap">
            {experience.date}
          </span>
        </div>
        <p className="text-muted-foreground mt-1">{experience.subtitle}</p>
        <ul className="list-disc space-y-1 text-muted-foreground mt-2 pl-5"> {/* Removed list-inside and added pl-5 */}
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      {/* Right side: Desktop date and Logo */}
      <div className="flex flex-col items-end flex-shrink-0">
        {/* Date only visible on desktop */}
        <span className="hidden sm:inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary whitespace-nowrap mb-2">
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
  );
};

export default ExperienceItem;
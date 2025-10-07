import React from "react";
import { Experience } from "@/data/portfolioData";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
        {/* Left side: Title and Date, always inline */}
        <div className="flex items-center flex-wrap gap-x-2">
          <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mt-1 sm:mt-0 whitespace-nowrap">
            {experience.date}
          </span>
        </div>
        {/* Right side: Logo */}
        {experience.logo && (
          <img
            src={experience.logo}
            alt={`${experience.title} Logo`}
            className="h-10 w-10 object-contain mt-2 sm:mt-0"
          />
        )}
      </div>
      <p className="text-muted-foreground">{experience.subtitle}</p> {/* Moved subtitle here */}
      <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2"> {/* Added mt-2 for spacing */}
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
import React from "react";
import { Experience } from "@/data/portfolioData";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2"> {/* Changed to flex (defaults to row) and items-center for vertical alignment */}
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
          <p className="text-muted-foreground">{experience.subtitle}</p>
        </div>
        <div className="flex flex-col items-end"> {/* Ensures date/logo stack and align to the right */}
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
            {experience.date}
          </span>
          {experience.logo && (
            <img
              src={experience.logo}
              alt={`${experience.title} Logo`}
              className="h-10 w-10 object-contain mt-1"
            />
          )}
        </div>
      </div>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
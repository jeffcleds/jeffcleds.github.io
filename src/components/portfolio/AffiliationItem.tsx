import React from "react";
import { Affiliation } from "@/data/portfolioData";
import { Users } from "lucide-react";

interface AffiliationItemProps {
  affiliation: Affiliation;
}

const AffiliationItem: React.FC<AffiliationItemProps> = ({ affiliation }) => {
  return (
    <div className="mb-6 last:mb-0 flex items-start justify-between gap-4">
      {/* Left side: Name, Status, mobile date */}
      <div className="flex-grow">
        <div className="flex items-center flex-wrap gap-x-2">
          <h3 className="text-xl font-semibold text-foreground">{affiliation.name}</h3>
          {/* Date only visible on mobile, next to title */}
          <span className="inline-flex sm:hidden items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mt-1 whitespace-nowrap">
            {affiliation.date}
          </span>
        </div>
        <p className="text-muted-foreground mt-1">{affiliation.status}</p>
      </div>

      {/* Right side: Desktop date and Logo/Placeholder */}
      <div className="flex flex-col items-end flex-shrink-0">
        {/* Date only visible on desktop */}
        <span className="hidden sm:inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary whitespace-nowrap mb-2">
          {affiliation.date}
        </span>
        {affiliation.logo ? (
          <img
            src={affiliation.logo}
            alt={`${affiliation.name} Logo`}
            className="h-10 w-10 object-contain rounded-full bg-muted p-1"
          />
        ) : (
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-muted p-1">
            <Users className="h-6 w-6 text-muted-foreground" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AffiliationItem;
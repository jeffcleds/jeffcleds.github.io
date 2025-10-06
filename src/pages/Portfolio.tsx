import React from "react";
import ProfileCard from "@/components/portfolio/ProfileCard";
import PortfolioLinksCard from "@/components/portfolio/PortfolioLinksCard";

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">My Portfolio</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile */}
        <div className="lg:col-span-1 space-y-8">
          <ProfileCard />
        </div>

        {/* Right Column - Portfolio Links */}
        <div className="lg:col-span-2 space-y-8">
          <PortfolioLinksCard />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
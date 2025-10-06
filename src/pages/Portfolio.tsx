import React from "react";
import ProfileCard from "@/components/portfolio/ProfileCard";
import IntroCard from "@/components/portfolio/IntroCard";
import DetailsCard from "@/components/portfolio/DetailsCard";
import InterestsCard from "@/components/portfolio/InterestsCard";
import SkillsCard from "@/components/portfolio/SkillsCard";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ToolsCard from "@/components/portfolio/ToolsCard";
import LanguagesCard from "@/components/portfolio/LanguagesCard";
import PortfolioLinksCard from "@/components/portfolio/PortfolioLinksCard";

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column */}
      <div className="lg:col-span-1 space-y-8">
        <ProfileCard />
        <DetailsCard />
        <InterestsCard />
        <ToolsCard />
        <LanguagesCard />
        <PortfolioLinksCard />
      </div>

      {/* Right Column */}
      <div className="lg:col-span-2 space-y-8">
        <IntroCard />
        <ExperienceSection />
        <SkillsCard />
        <EducationSection />
      </div>
    </div>
  );
};

export default Portfolio;
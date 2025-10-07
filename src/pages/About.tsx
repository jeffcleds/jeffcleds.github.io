import React from "react";
import { Separator } from "@/components/ui/separator";
import IntroCard from "@/components/portfolio/IntroCard";
import DetailsCard from "@/components/portfolio/DetailsCard";
import InterestsCard from "@/components/portfolio/InterestsCard";
import SkillsCard from "@/components/portfolio/SkillsCard";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ToolsCard from "@/components/portfolio/ToolsCard";
import LanguagesCard from "@/components/portfolio/LanguagesCard";
import EducationSection from "@/components/portfolio/EducationSection";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>

      <div className="space-y-8">
        <IntroCard /> {/* Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DetailsCard />
          <InterestsCard />
        </div>
        <SkillsCard /> {/* Moved SkillsCard here */}
        <ExperienceSection />
        <EducationSection />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ToolsCard />
          <LanguagesCard />
        </div>
      </div>

      <Separator className="my-12" />

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">My Philosophy</h2>
        <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
          Don’t chase busywork. Build assets — skills, tools, networks, and habits that multiply output without multiplying effort. Anything that doesn’t scale or compound is either a stepping stone or dead weight. Learn to tell the difference fast.
        </p>
      </div>
    </div>
  );
};

export default About;
import React from "react";
import ProjectCards from "@/components/portfolio/ProjectCards"; // Import the ProjectCards component
import FeaturedTechCard from "@/components/portfolio/FeaturedTechCard"; // Import new component
import ScrollReveal from "@/components/animations/ScrollReveal"; // Import ScrollReveal

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
      
      <ScrollReveal delay={0}>
        <ProjectCards />
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="mt-12">
        <FeaturedTechCard />
      </ScrollReveal>
    </div>
  );
};

export default ProjectsPage;
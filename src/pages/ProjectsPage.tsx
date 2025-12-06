import React from "react";
import ProjectCards from "@/components/portfolio/ProjectCards"; // Import the ProjectCards component
import GithubContributionsCalendar from "@/components/portfolio/GithubCalendar"; // Import new component
import ScrollReveal from "@/components/animations/ScrollReveal"; // Import ScrollReveal

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
      
      <ScrollReveal delay={0}>
        <ProjectCards />
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="mt-12">
        <GithubContributionsCalendar username="jeffcleds" />
      </ScrollReveal>
    </div>
  );
};

export default ProjectsPage;
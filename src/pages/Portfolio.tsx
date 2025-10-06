import React from "react";
import ProjectsSection from "@/components/portfolio/ProjectsSection"; // Import the new ProjectsSection

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">My Portfolio</h1>
      <div className="grid grid-cols-1 gap-8">
        {/* Replaced with ProjectsSection */}
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Portfolio;
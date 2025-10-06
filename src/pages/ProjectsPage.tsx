import React from "react";
import ProjectCards from "@/components/portfolio/ProjectCards"; // Import the renamed ProjectCards

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1> {/* Changed from My Portfolio to My Projects */}
      <div className="grid grid-cols-1 gap-8">
        <ProjectCards />
      </div>
    </div>
  );
};

export default ProjectsPage;
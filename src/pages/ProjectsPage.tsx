import React, { useEffect } from "react";
import ProjectCards from "@/components/portfolio/ProjectCards"; // Import the ProjectCards component

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    // Check if GitHubCalendar function is available globally and initialize it
    if (typeof (window as any).GitHubCalendar === 'function') {
      (window as any).GitHubCalendar(".calendar", "jeffcleds", { responsive: true });
    }
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
      
      {/* GitHub Calendar Container */}
      <div className="calendar mb-12">
        <p className="text-center text-muted-foreground">Loading GitHub contributions...</p>
      </div>

      <ProjectCards /> {/* Render the ProjectCards component directly */}
    </div>
  );
};

export default ProjectsPage;
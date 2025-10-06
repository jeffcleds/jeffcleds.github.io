import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Link as LinkIcon } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
}

const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my skills and projects.",
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://yourportfolio.com",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "A dashboard for managing e-commerce operations, including product inventory, orders, and customer data. Built with React and a mock API.",
    githubLink: "https://github.com/yourusername/ecommerce-dashboard",
    liveLink: "https://ecommerce-dashboard.com",
  },
  {
    id: 3,
    title: "Task Management CLI Tool",
    description: "A command-line interface tool for managing daily tasks, built with Python. Features include adding, deleting, and marking tasks as complete.",
    githubLink: "https://github.com/yourusername/task-cli",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <Card className="p-6">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">My Projects</CardTitle>
      </CardHeader>
      <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleProjects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end gap-2">
              {project.githubLink && (
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> GitHub
                  </a>
                </Button>
              )}
              {project.liveLink && (
                <Button asChild size="sm">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="h-4 w-4 mr-2" /> Live Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProjectsSection;
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Link as LinkIcon } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Storefront",
    description: "A full-stack e-commerce application with product listings, shopping cart, and user authentication.",
    image: "/placeholder.svg", // Using a placeholder image
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/johndoe/ecommerce-store",
    liveLink: "https://ecommerce.johndoe.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality and real-time updates.",
    image: "/placeholder.svg",
    technologies: ["Vue.js", "Firebase", "TypeScript", "SCSS"],
    githubLink: "https://github.com/johndoe/task-manager",
    liveLink: "https://tasks.johndoe.com",
  },
  {
    id: 3,
    title: "Personal Blog",
    description: "A static blog generated with Next.js, featuring markdown support and a clean, minimalist design.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "React", "Markdown", "Tailwind CSS"],
    githubLink: "https://github.com/johndoe/personal-blog",
    liveLink: "https://blog.johndoe.com",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A simple weather application that fetches data from a public API and displays current weather conditions.",
    image: "/placeholder.svg",
    technologies: ["React", "OpenWeather API", "CSS Modules"],
    githubLink: "https://github.com/johndoe/weather-dashboard",
    liveLink: "https://weather.johndoe.com",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
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
      </div>
    </div>
  );
};

export default Projects;
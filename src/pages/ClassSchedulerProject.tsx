import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, ArrowLeft } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";

const ClassSchedulerProject: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil();
  const project = projectsData.find(p => p.id === 3);

  if (!project) {
    return <div className="container mx-auto py-12 text-center">Project not found.</div>;
  }

  const cardClassNames = isDarkVeilActive ? 'bg-card/50 border border-primary/20' : '';

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link to="/projects">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
          </Link>
        </Button>
      </div>

      <Card className={`p-6 ${cardClassNames}`}>
        <CardHeader className="p-0 pb-6">
          <CardTitle className="text-4xl font-bold mb-2">{project.title}</CardTitle>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </CardHeader>
        <Separator className="mb-6" />
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
          <CardContent className="p-0 space-y-4">
            <h3 className="text-2xl font-semibold">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold pt-4">Links</h3>
            <div className="flex flex-col space-y-2">
              {project.githubLink && (
                <Button asChild variant="outline">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> View GitHub Repo
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </div>

        <Separator className="my-6" />

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Project Overview & Features</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Class Scheduler is a productivity tool designed to help students and educators efficiently manage their academic timetables, assignments, and deadlines in a centralized digital environment.
          </p>

          <h3 className="text-2xl font-semibold">Key Features:</h3>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>**Interactive Calendar View:** Allows users to visualize their weekly schedule and upcoming events easily.</li>
            <li>**Assignment Tracking:** Features for adding, editing, and marking assignments as complete, with deadline reminders.</li>
            <li>**User Authentication:** Secure login and personalized data storage using Firebase.</li>
            <li>**Filtering and Sorting:** Tools to quickly find specific classes or assignments based on criteria like course name or priority.</li>
          </ul>

          <h3 className="text-2xl font-semibold pt-4">My Role & Contributions:</h3>
          <p className="text-muted-foreground leading-relaxed">
            I focused on developing the front-end interface and state management using React and TypeScript, ensuring a smooth and intuitive user experience. I also implemented the integration with Firebase for real-time data synchronization.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ClassSchedulerProject;
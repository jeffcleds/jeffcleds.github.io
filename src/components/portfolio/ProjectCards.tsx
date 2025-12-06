import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { Link } from "react-router-dom";
import TiltedCard from "@/components/animations/TiltedCard"; // Import the new TiltedCard component

const ProjectCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project) => (
        <TiltedCard key={project.id} className="h-full"> {/* Wrap each card with TiltedCard */}
          <Card 
            className="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary" // Removed scale effect as TiltedCard handles transform
          >
            <img
              src={project.images[0]}
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
              {project.liveLink && (
                project.liveLink.startsWith('/') ? (
                  <Button asChild size="sm">
                    <Link to={project.liveLink}>
                      <Info className="h-4 w-4 mr-2" /> View Details
                    </Link>
                  </Button>
                ) : (
                  <Button asChild size="sm">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Info className="h-4 w-4 mr-2" /> View Details
                    </a>
                  </Button>
                )
              )}
            </CardFooter>
          </Card>
        </TiltedCard>
      ))}
    </div>
  );
};

export default ProjectCards;
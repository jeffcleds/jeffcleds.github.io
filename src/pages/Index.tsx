import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] text-center px-4 py-12">
      <img
        src="/ernie-joseph-cledera.jpg"
        alt="Ernie Joseph Cledera"
        className="w-48 h-48 rounded-full object-cover mb-8 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out border-4 border-primary shadow-lg"
      />
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
        Hi, I'm <span className="text-primary animate-fade-in-up">Ernie Joseph Cledera</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10">
        A tech-savvy Virtual Assistant with 3+ years of experience optimizing workflows, data management, and digital tools to deliver accurate, high-quality support.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link to="/projects">View My Projects</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/contact">Contact Me</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
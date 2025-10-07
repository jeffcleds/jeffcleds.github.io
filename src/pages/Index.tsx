import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] text-center px-4 py-12">
      <img
        src="/ernie-joseph-cledera.jpg"
        alt="Ernie Joseph Cledera"
        className="w-48 h-48 rounded-full object-cover mb-8 transition-transform duration-300 ease-in-out border-4 border-primary shadow-lg hover:scale-105 hover:shadow-primary/50 hover:shadow-2xl" // Added hover glow effect
      />
      <h1 className="text-5xl font-bold mb-4">Ernie Joseph Cledera</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
        A passionate Full-Stack Developer with expertise in building modern, responsive, and scalable web applications.
        I love bringing ideas to life through code.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link to="/portfolio">
            View My Work <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/contact">
            Get in Touch
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
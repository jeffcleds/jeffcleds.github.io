import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] text-center px-4 py-12">
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
        Hi, I'm <span className="text-primary animate-fade-in-up">Ernie Joseph Cledera</span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mb-8">
        A passionate software developer specializing in building modern, responsive, and user-friendly web applications.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link to="/projects">View My Work</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
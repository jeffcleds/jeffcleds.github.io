import React from "react";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";
import ScrollReveal from "@/components/animations/ScrollReveal";

const WorkstationPage: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil();

  const cardClassNames = isDarkVeilActive ? 'border border-primary/20 backdrop-blur-md' : '';

  return (
    <div className="container mx-auto py-12 px-4">
      <ScrollReveal delay={0}>
        <h1 className="text-4xl font-bold text-center mb-10">My Workstation</h1>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
          Welcome to my digital command center! Here's a glimpse into the tools and setup that power my work.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="mb-12 flex justify-center">
          <img
            src="/Workstation.png"
            alt="My Workstation Setup"
            className="w-full max-w-4xl h-auto object-cover rounded-lg shadow-xl border border-border"
          />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder for workstation items */}
        <ScrollReveal delay={0.3}>
          <div className={`p-6 rounded-lg shadow-lg text-center ${cardClassNames}`}>
            <h2 className="text-2xl font-semibold mb-2">Hardware</h2>
            <p className="text-muted-foreground">Coming Soon!</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <div className={`p-6 rounded-lg shadow-lg text-center ${cardClassNames}`}>
            <h2 className="text-2xl font-semibold mb-2">Software</h2>
            <p className="text-muted-foreground">Coming Soon!</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <div className={`p-6 rounded-lg shadow-lg text-center ${cardClassNames}`}>
            <h2 className="text-2xl font-semibold mb-2">Peripherals</h2>
            <p className="text-muted-foreground">Coming Soon!</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default WorkstationPage;
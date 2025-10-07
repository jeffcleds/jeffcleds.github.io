import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FuzzyText from "@/components/animations/FuzzyText";
import ParticlesBackground from "@/components/animations/ParticlesBackground"; // New import

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden"> {/* Added relative and overflow-hidden, removed bg colors */}
      <ParticlesBackground /> {/* Render the particles background */}
      <div className="relative z-10 p-8 bg-background/80 dark:bg-background/80 rounded-lg shadow-xl max-w-md mx-auto"> {/* Added styling for content container */}
        <div className="text-center">
          <FuzzyText
            fontSize="clamp(3rem, 10vw, 10rem)"
            fontWeight={900}
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover={true}
            className="text-foreground mb-4 mx-auto"
          >
            404
          </FuzzyText>
          <FuzzyText
            fontSize="clamp(1.5rem, 5vw, 2.5rem)"
            fontWeight={600}
            baseIntensity={0.1}
            hoverIntensity={0.3}
            enableHover={true}
            className="text-muted-foreground mb-8 mx-auto"
          >
            This section is under maintenance.
          </FuzzyText>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
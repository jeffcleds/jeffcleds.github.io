import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FuzzyText from "@/components/animations/FuzzyText"; // Import FuzzyText

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <FuzzyText
          fontSize="clamp(3rem, 10vw, 10rem)"
          fontWeight={900}
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
          className="text-foreground mb-4"
        >
          404
        </FuzzyText>
        <FuzzyText
          fontSize="clamp(1.5rem, 5vw, 2.5rem)"
          fontWeight={600}
          baseIntensity={0.1}
          hoverIntensity={0.3}
          enableHover={true}
          className="text-muted-foreground mb-8"
        >
          This section is under maintenance.
        </FuzzyText>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
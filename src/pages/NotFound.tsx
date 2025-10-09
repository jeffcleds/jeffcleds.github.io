import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FuzzyText from "@/components/animations/FuzzyText";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider"; // Import useDarkVeil

const NotFound = () => {
  const location = useLocation();
  const { isDarkVeilActive } = useDarkVeil(); // Use the DarkVeil hook

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkVeilActive ? 'bg-transparent' : 'bg-gray-100 dark:bg-gray-900'}`}>
      <div className="text-center">
        <FuzzyText
          fontSize="clamp(3rem, 10vw, 10rem)"
          fontWeight={900}
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
          className="mb-4 mx-auto"
          color={isDarkVeilActive ? 'white' : 'hsl(var(--foreground))'} // Conditional color
        >
          404
        </FuzzyText>
        <FuzzyText
          fontSize="clamp(1.5rem, 5vw, 2.5rem)"
          fontWeight={600}
          baseIntensity={0.1}
          hoverIntensity={0.3}
          enableHover={true}
          className="mb-8 mx-auto"
          color={isDarkVeilActive ? 'hsl(var(--muted))' : 'hsl(var(--muted-foreground))'} // Conditional color
        >
          This section is under maintenance.
        </FuzzyText>
      </div>
    </div>
  );
};

export default NotFound;
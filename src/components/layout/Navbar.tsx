import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ShinyText from "@/components/animations/ShinyText";
import ThemeAndVeilSwitcher from "./ThemeAndVeilSwitcher";
import { useDarkVeil } from "./DarkVeilProvider";
import { useTheme } from "next-themes";

// Define a type that allows custom CSS variables (prefixed with --)
type CustomCSSProperties = React.CSSProperties & Record<`--${string}`, string | number>;

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const { isDarkVeilActive } = useDarkVeil();
  const { theme } = useTheme();

  const isDarkBackground = isDarkVeilActive || theme === 'dark';

  // Determine the active link color based on DarkVeil state and current theme
  const activeLinkColorClass = isDarkBackground
    ? "text-white after:bg-white"
    : "text-[#14243d] after:bg-[#14243d]";

  // Define dynamic styles for ShinyText
  const shinyTextStyle: CustomCSSProperties = isDarkBackground
    ? {
        // Base text color: White (100% lightness)
        '--muted-foreground': '210 40% 100%', 
        // Shine color: #280674 (HSL: 260 88% 24%)
        '--primary-foreground': '260 88% 24%', 
      }
    : {
        // Use original dark colors for contrast in light mode
        '--muted-foreground': '220 30% 15%', // Dark navy base color
        '--primary-foreground': '220 80% 50%', // Brighter navy shine color
      };

  return (
    <header className={`sticky top-0 z-50 w-full ${isDarkVeilActive ? 'border-b bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'}`}>
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <ShinyText
              className="font-bold"
              style={shinyTextStyle}
            >
              cledera.ernie
            </ShinyText>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`relative transition-colors text-foreground/60 hover:text-foreground/80 
                  ${location.pathname === item.to ? `font-semibold ${activeLinkColorClass}` : ""}
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300 after:ease-in-out
                  ${location.pathname === item.to ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className={`pr-0 ${isDarkVeilActive ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : ''}`}>
            <Link to="/" className="flex items-center space-x-2">
              <ShinyText
                className="font-bold"
                style={shinyTextStyle}
              >
                cledera.ernie
              </ShinyText>
            </Link>
            <nav className="flex flex-col gap-2 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`flex w-full items-center py-2 text-lg font-semibold relative
                    ${location.pathname === item.to ? activeLinkColorClass : "text-foreground/60 hover:text-foreground/80"}
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300 after:ease-in-out
                    ${location.pathname === item.to ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeAndVeilSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
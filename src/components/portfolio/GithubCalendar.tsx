"use client";

import React from 'react';
import * as GitHubCalendarModule from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { useDarkVeil } from '@/components/layout/DarkVeilProvider';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollReveal from '@/components/animations/ScrollReveal';

// Access the default export from the module
const GitHubCalendar = GitHubCalendarModule.default || GitHubCalendarModule;

interface GithubCalendarProps {
  username: string;
}

const GithubContributionsCalendar: React.FC<GithubCalendarProps> = ({ username }) => {
  const { theme } = useTheme();
  const { isDarkVeilActive } = useDarkVeil();

  // Determine the color scheme based on the current theme/veil state
  const isDark = isDarkVeilActive || theme === 'dark';
  
  // The colors are overridden in src/globals.css, but we pass a theme
  // to the component so it renders the correct base structure (dark/light).
  const colorTheme = isDark ? 'dark' : 'light';

  const cardClassNames = isDarkVeilActive ? 'bg-card/50 border border-primary/20' : '';

  return (
    <Card className={`p-6 ${cardClassNames}`}>
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">GitHub Contributions</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* The 'calendar' class is targeted in globals.css for custom styling */}
        <div className="calendar w-full overflow-x-auto">
          <GitHubCalendar
            username={username}
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            // We don't pass specific colors here as they are handled by CSS overrides in globals.css
            theme={colorTheme === 'dark' ? undefined : undefined} 
            hideColorLegend={false}
            hideMonthLabels={false}
            hideTotalCount={false}
            showWeekdayLabels={true}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default GithubContributionsCalendar;
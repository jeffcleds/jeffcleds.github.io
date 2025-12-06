"use client";

import React from 'react';
import * as GitHubCalendarModule from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { useDarkVeil } from '@/components/layout/DarkVeilProvider';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollReveal from '@/components/animations/ScrollReveal';

// Robustly resolve the GitHubCalendar component function
const GitHubCalendar = (() => {
  if (typeof GitHubCalendarModule.default === 'function') {
    return GitHubCalendarModule.default;
  }
  if (typeof GitHubCalendarModule === 'function') {
    return GitHubCalendarModule;
  }
  // Check for double nesting, which sometimes occurs with CJS modules in ESM wrappers
  if (typeof (GitHubCalendarModule.default as any)?.default === 'function') {
    return (GitHubCalendarModule.default as any).default;
  }
  return null;
})();

interface GithubCalendarProps {
  username: string;
}

const GithubContributionsCalendar: React.FC<GithubCalendarProps> = ({ username }) => {
  const { theme } = useTheme();
  const { isDarkVeilActive } = useDarkVeil();

  // Determine the color scheme based on the current theme/veil state
  const isDark = isDarkVeilActive || theme === 'dark';
  
  const cardClassNames = isDarkVeilActive ? 'bg-card/50 border border-primary/20' : '';

  if (!GitHubCalendar) {
    return (
      <Card className={`p-6 ${cardClassNames}`}>
        <CardHeader className="p-0 pb-4">
          <CardTitle className="text-2xl font-bold">GitHub Contributions</CardTitle>
        </CardHeader>
        <CardContent className="p-0 text-muted-foreground">
          Error loading GitHub Calendar component.
        </CardContent>
      </Card>
    );
  }

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
            theme={isDark ? 'dark' : 'light'} // Pass theme string explicitly
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
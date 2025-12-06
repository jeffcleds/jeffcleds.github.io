"use client";

import React, { Suspense } from 'react';
import { useTheme } from 'next-themes';
import { useDarkVeil } from '@/components/layout/DarkVeilProvider';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

// Dynamically import the GitHubCalendar component
const LazyGitHubCalendar = React.lazy(() => 
  import('react-github-calendar').then(module => {
    // Handle various export structures (default, named, nested default)
    const GitHubCalendar = module.default || module;
    if (typeof GitHubCalendar === 'function') {
      return { default: GitHubCalendar };
    }
    // Fallback for deeply nested default exports
    if (typeof (module.default as any)?.default === 'function') {
      return { default: (module.default as any).default };
    }
    // If all else fails, return a component that renders null or an error
    return { default: () => <div>Error loading calendar component.</div> };
  })
);

interface GithubCalendarProps {
  username: string;
}

const GithubContributionsCalendar: React.FC<GithubCalendarProps> = ({ username }) => {
  const { theme } = useTheme();
  const { isDarkVeilActive } = useDarkVeil();

  const isDark = isDarkVeilActive || theme === 'dark';
  const cardClassNames = isDarkVeilActive ? 'bg-card/50 border border-primary/20' : '';

  return (
    <Card className={`p-6 ${cardClassNames}`}>
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">GitHub Contributions</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Suspense fallback={<Skeleton className="h-48 w-full rounded-lg" />}>
          <div className="calendar w-full overflow-x-auto">
            <LazyGitHubCalendar
              username={username}
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              theme={isDark ? 'dark' : 'light'}
              hideColorLegend={false}
              hideMonthLabels={false}
              hideTotalCount={false}
              showWeekdayLabels={true}
            />
          </div>
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default GithubContributionsCalendar;
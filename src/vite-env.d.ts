/// <reference types="vite/client" />

declare function GitHubCalendar(
  container: string | HTMLElement,
  username: string,
  options?: { responsive?: boolean; global_stats?: boolean; summary_text?: string }
): void;
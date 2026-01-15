import React from "react";

export default function VercelWebAnalyticsGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Getting started with Vercel Web Analytics
          </h1>
          <p className="text-xl text-slate-300">
            This guide will help you get started with using Vercel Web Analytics on your project, showing you how to enable it, 
            add the package to your project, deploy your app to Vercel, and view your data in the dashboard.
          </p>
          <p className="text-lg text-slate-400 mt-4">
            <strong>Select your framework to view instructions on using the Vercel Web Analytics in your project.</strong>
          </p>
        </div>

        {/* Prerequisites Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Prerequisites</h2>
          
          <ul className="space-y-6">
            <li>
              <p className="text-lg font-semibold text-slate-100 mb-2">
                A Vercel account. If you don't have one, you can{" "}
                <a 
                  href="https://vercel.com/signup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  sign up for free
                </a>
                .
              </p>
            </li>
            <li>
              <p className="text-lg font-semibold text-slate-100 mb-2">
                A Vercel project. If you don't have one, you can{" "}
                <a 
                  href="https://vercel.com/new" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  create a new project
                </a>
                .
              </p>
            </li>
            <li>
              <p className="text-lg font-semibold text-slate-100 mb-4">
                The Vercel CLI installed. If you don't have it, you can install it using the following command:
              </p>
              <div className="bg-slate-950 border border-slate-700 rounded-lg p-6 space-y-4 font-mono text-sm">
                <div>
                  <p className="text-slate-400 mb-2">pnpm:</p>
                  <code className="text-green-400">pnpm i vercel</code>
                </div>
                <div>
                  <p className="text-slate-400 mb-2">yarn:</p>
                  <code className="text-green-400">yarn i vercel</code>
                </div>
                <div>
                  <p className="text-slate-400 mb-2">npm:</p>
                  <code className="text-green-400">npm i vercel</code>
                </div>
                <div>
                  <p className="text-slate-400 mb-2">bun:</p>
                  <code className="text-green-400">bun i vercel</code>
                </div>
              </div>
            </li>
          </ul>
        </section>

        {/* Enable Web Analytics */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Enable Web Analytics in Vercel</h3>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-4">
            <p className="text-slate-200">
              On the <a href="/dashboard" className="text-cyan-400 hover:text-cyan-300 underline">Vercel dashboard</a>, 
              select your Project and then click the <strong>Analytics</strong> tab and click <strong>Enable</strong> from the dialog.
            </p>
            <div className="bg-slate-900 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-yellow-300 font-semibold">💡 Note:</p>
              <p className="text-slate-300">
                Enabling Web Analytics will add new routes (scoped at <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">/_vercel/insights/*</code>) 
                after your next deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Add Package Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Add @vercel/analytics to your project</h3>
          <p className="text-slate-200 mb-6">
            Using the package manager of your choice, add the <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">@vercel/analytics</code> package to your project:
          </p>
          <div className="bg-slate-950 border border-slate-700 rounded-lg p-6 space-y-4 font-mono text-sm">
            <div>
              <p className="text-slate-400 mb-2">pnpm:</p>
              <code className="text-green-400">pnpm i @vercel/analytics</code>
            </div>
            <div>
              <p className="text-slate-400 mb-2">yarn:</p>
              <code className="text-green-400">yarn i @vercel/analytics</code>
            </div>
            <div>
              <p className="text-slate-400 mb-2">npm:</p>
              <code className="text-green-400">npm i @vercel/analytics</code>
            </div>
            <div>
              <p className="text-slate-400 mb-2">bun:</p>
              <code className="text-green-400">bun i @vercel/analytics</code>
            </div>
          </div>
        </section>

        {/* Framework Specific Instructions */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Add the Analytics component to your app</h3>
          
          {/* React/Create React App Example */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-cyan-300 mb-4">React / Create React App</h4>
            <p className="text-slate-300 mb-4">
              The <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">Analytics</code> component is a wrapper around 
              the tracking script, offering more seamless integration with React.
            </p>
            <p className="text-slate-400 italic mb-6">
              💡 Note: When using the plain React implementation, there is no route support.
            </p>
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 mb-3 font-mono text-sm">App.tsx / App.jsx</p>
              <pre className="text-green-400 overflow-x-auto text-sm"><code>{`import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics />
    </div>
  );
}`}</code></pre>
            </div>
          </div>

          {/* Next.js Pages Example */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-cyan-300 mb-4">Next.js (Pages Router)</h4>
            <p className="text-slate-300 mb-4">
              The <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">Analytics</code> component is a wrapper around 
              the tracking script, offering more seamless integration with Next.js, including route support.
            </p>
            <p className="text-slate-400 mb-6">If you are using the <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">pages</code> directory, 
            add the following code to your main app file:</p>
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 mb-3 font-mono text-sm">pages/_app.tsx</p>
              <pre className="text-green-400 overflow-x-auto text-sm"><code>{`import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;`}</code></pre>
            </div>
          </div>

          {/* Next.js App Router Example */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-cyan-300 mb-4">Next.js (App Router)</h4>
            <p className="text-slate-300 mb-4">
              The <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">Analytics</code> component is a wrapper around 
              the tracking script, offering more seamless integration with Next.js, including route support.
            </p>
            <p className="text-slate-400 mb-6">Add the following code to the root layout:</p>
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 mb-3 font-mono text-sm">app/layout.tsx</p>
              <pre className="text-green-400 overflow-x-auto text-sm"><code>{`import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}`}</code></pre>
            </div>
          </div>

          {/* Remix Example */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-cyan-300 mb-4">Remix</h4>
            <p className="text-slate-300 mb-4">
              The <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">Analytics</code> component is a wrapper around 
              the tracking script, offering a seamless integration with Remix, including route detection.
            </p>
            <p className="text-slate-400 mb-6">Add the following code to your root file:</p>
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 mb-3 font-mono text-sm">app/root.tsx</p>
              <pre className="text-green-400 overflow-x-auto text-sm"><code>{`import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Analytics />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}`}</code></pre>
            </div>
          </div>

          {/* Vue Example */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-cyan-300 mb-4">Vue</h4>
            <p className="text-slate-300 mb-4">
              The <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">Analytics</code> component is a wrapper around 
              the tracking script, offering more seamless integration with Vue.
            </p>
            <p className="text-slate-400 italic mb-6">
              💡 Note: Route support is automatically enabled if you're using <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">vue-router</code>.
            </p>
            <p className="text-slate-400 mb-6">Add the following code to your main component:</p>
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 mb-3 font-mono text-sm">src/App.vue</p>
              <pre className="text-green-400 overflow-x-auto text-sm"><code>{`<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics />
  <!-- your content -->
</template>`}</code></pre>
            </div>
          </div>

          {/* Nuxt Example */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-cyan-300 mb-4">Nuxt</h4>
            <p className="text-slate-300 mb-4">
              The <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">Analytics</code> component is a wrapper around 
              the tracking script, offering more seamless integration with Nuxt, including route support.
            </p>
            <p className="text-slate-400 mb-6">Add the following code to your main component.</p>
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 mb-3 font-mono text-sm">app.vue</p>
              <pre className="text-green-400 overflow-x-auto text-sm"><code>{`<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <Analytics />
  <NuxtPage />
</template>`}</code></pre>
            </div>
          </div>

          {/* SvelteKit Example */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-cyan-300 mb-4">SvelteKit</h4>
            <p className="text-slate-300 mb-4">
              The <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">injectAnalytics</code> function is a wrapper around 
              the tracking script, offering more seamless integration with SvelteKit.js, including route support.
            </p>
            <p className="text-slate-400 mb-6">Add the following code to the main layout:</p>
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 mb-3 font-mono text-sm">src/routes/+layout.ts</p>
              <pre className="text-green-400 overflow-x-auto text-sm"><code>{`import { dev } from "$app/environment";
import { injectAnalytics } from "@vercel/analytics/sveltekit";

injectAnalytics({ mode: dev ? "development" : "production" });`}</code></pre>
            </div>
          </div>

          {/* Astro Example */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-cyan-300 mb-4">Astro</h4>
            <p className="text-slate-300 mb-4">
              The <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">Analytics</code> component is a wrapper around 
              the tracking script, offering more seamless integration with Astro, including route support.
            </p>
            <p className="text-slate-400 mb-6">Add the following code to your base layout:</p>
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 mb-3 font-mono text-sm">src/layouts/Base.astro</p>
              <pre className="text-green-400 overflow-x-auto text-sm"><code>{`---
import Analytics from '@vercel/analytics/astro';
{/* ... */}
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- ... -->
    <Analytics />
  </head>
  <body>
    <slot />
  </body>
</html>`}</code></pre>
            </div>
            <p className="text-slate-400 mt-6 italic">
              💡 Note: The <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">Analytics</code> component is available 
              in version <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">@vercel/analytics@1.4.0</code> and later. 
              If you are using an earlier version, you must configure the <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">webAnalytics</code> property 
              of the Vercel adapter in your <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">astro.config.mjs</code> file.
            </p>
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-6 mt-4">
              <p className="text-slate-400 mb-3 font-mono text-sm">astro.config.mjs</p>
              <pre className="text-green-400 overflow-x-auto text-sm"><code>{`import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true, // set to false when using @vercel/analytics@1.4.0
    },
  }),
});`}</code></pre>
            </div>
          </div>

          {/* HTML Example */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-cyan-300 mb-4">Plain HTML</h4>
            <p className="text-slate-300 mb-4">
              For plain HTML sites, you can add the following script to your <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">.html</code> files:
            </p>
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 mb-3 font-mono text-sm">index.html</p>
              <pre className="text-green-400 overflow-x-auto text-sm"><code>{`<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>`}</code></pre>
            </div>
            <p className="text-slate-400 mt-6 italic">
              💡 Note: When using the HTML implementation, there is no need to install the 
              <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">@vercel/analytics</code> package. 
              However, there is no route support.
            </p>
          </div>

          {/* Other Frameworks Example */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-cyan-300 mb-4">Other Frameworks</h4>
            <p className="text-slate-300 mb-4">
              Import the <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">inject</code> function from the package, 
              which will add the tracking script to your app. 
              <strong>This should only be called once in your app, and must run in the client</strong>.
            </p>
            <p className="text-slate-400 italic mb-6">
              💡 Note: There is no route support with the <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">inject</code> function.
            </p>
            <p className="text-slate-400 mb-6">Add the following code to your main app file:</p>
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 mb-3 font-mono text-sm">main.ts / main.js</p>
              <pre className="text-green-400 overflow-x-auto text-sm"><code>{`import { inject } from "@vercel/analytics";

inject();`}</code></pre>
            </div>
          </div>
        </section>

        {/* Deploy Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Deploy your app to Vercel</h3>
          <p className="text-slate-200 mb-6">Deploy your app using the following command:</p>
          <div className="bg-slate-950 border border-slate-700 rounded-lg p-6 font-mono text-sm mb-6">
            <code className="text-green-400">vercel deploy</code>
          </div>
          <p className="text-slate-200 mb-6">
            If you haven't already, we also recommend connecting your project's Git repository, 
            which will enable Vercel to deploy your latest commits to main without terminal commands.
          </p>
          <p className="text-slate-200">
            Once your app is deployed, it will start tracking visitors and page views.
          </p>
          <div className="bg-slate-900 border-l-4 border-blue-500 p-4 rounded mt-6">
            <p className="text-blue-300 font-semibold">💡 Note:</p>
            <p className="text-slate-300">
              If everything is set up properly, you should be able to see a Fetch/XHR 
              request in your browser's Network tab from <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">/_vercel/insights/view</code> when you 
              visit any page.
            </p>
          </div>
        </section>

        {/* View Data Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">View your data in the dashboard</h3>
          <p className="text-slate-200 mb-6">
            Once your app is deployed, and users have visited your site, you can view your data in the dashboard.
          </p>
          <p className="text-slate-200 mb-6">
            To do so, go to your <a href="/dashboard" className="text-cyan-400 hover:text-cyan-300 underline">dashboard</a>, 
            select your project, and click the <strong>Analytics</strong> tab.
          </p>
          <p className="text-slate-200">
            After a few days of visitors, you'll be able to start exploring your data by viewing and filtering the panels.
          </p>
          <p className="text-slate-200 mt-6">
            Users on Pro and Enterprise plans can also add custom events to their data to track user interactions such as 
            button clicks, form submissions, or purchases.
          </p>
        </section>

        {/* Learn More Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Learn more about privacy and compliance</h3>
          <p className="text-slate-200">
            Vercel supports <a 
              href="/docs/analytics/privacy-policy" 
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              privacy and data compliance standards
            </a> with Vercel Web Analytics.
          </p>
        </section>

        {/* Next Steps Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Next steps</h2>
          <p className="text-slate-200 mb-8">Now that you have Vercel Web Analytics set up, you can explore the following topics to learn more:</p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3 mt-1">→</span>
              <a href="/docs/analytics/package" className="hover:text-cyan-300 underline">
                Learn how to use the <code className="bg-slate-950 px-2 py-1 rounded text-cyan-300">@vercel/analytics</code> package
              </a>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3 mt-1">→</span>
              <a href="/docs/analytics/custom-events" className="hover:text-cyan-300 underline">
                Learn how to set update custom events
              </a>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3 mt-1">→</span>
              <a href="/docs/analytics/filtering" className="hover:text-cyan-300 underline">
                Learn about filtering data
              </a>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3 mt-1">→</span>
              <a href="/docs/analytics/privacy-policy" className="hover:text-cyan-300 underline">
                Read about privacy and compliance
              </a>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3 mt-1">→</span>
              <a href="/docs/analytics/limits-and-pricing" className="hover:text-cyan-300 underline">
                Explore pricing
              </a>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3 mt-1">→</span>
              <a href="/docs/analytics/troubleshooting" className="hover:text-cyan-300 underline">
                Troubleshooting
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

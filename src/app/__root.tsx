import { SideBar } from "@/components/SideBar";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router"
import appCss from "./globals.css?url"
import { NavBar } from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "TanStack Start Starter" }
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: RootLayout,
})

function RootLayout() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <div className="relative flex min-h-screen">
            <SideBar />

            <div className="flex flex-1 flex-col">
              <NavBar />

              <main className="flex-1 p-4 md:p-6 lg:p-8">
                <Outlet />
              </main>
            </div>
          </div>
          
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}

import type { Metadata } from "next";
import { SideBar } from "@/components/SideBar";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Richards Hub",
  description: "This is a portfolio website for Richard Kisivii",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grid grid-cols-12 dark:text-white bg-gradient-to-r dark:from-gray-900 dark:to-gray-900 from-green-500 to-blue-400 gap-6 my-14 px-2 sm:px-20 md:px-48 lg:px-10">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="p-4 text-center dark:bg-black rounded-2xl col-span-12 lg:col-span-3 bg-white">
            <SideBar />
          </div>
          <div className="rounded-2xl col-span-12 lg:col-span-9 bg-white dark:bg-black flex flex-col overflow-hidden">
            <NavBar />
            {children}
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

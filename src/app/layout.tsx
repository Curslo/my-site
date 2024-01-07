import type { Metadata } from "next";
import { SideBar } from "@/components/SideBar";
import "./globals.css";

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
      <body className="grid grid-cols-12 bg-gradient-to-r from-green-500 to-blue-400 gap-6 my-14 px-4 sm:px-20 md:px-48 lg:px-10">
        <div className="p-4 text-center rounded-2xl col-span-12 lg:col-span-3 bg-white">
          <SideBar />
        </div>
        <div className="rounded-2xl col-span-12 lg:col-span-9 bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}

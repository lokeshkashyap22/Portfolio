import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Lokesh Kashyap | Developer",
  description: "About Page for Lokesh Kashyap, Software Developer",
  keywords:
    "Lokesh Kashyap, Software Developer, MERN Stack, DevOps, Data Structures, Algorithms, Portfolio, Projects, Blog, Resume, Contact, Connect, LinkedIn, LeetCode, GeeksForGeeks, GitHub",
  author: "Lokesh Kashyap",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  themeColor: "#4A90E2",
} as Metadata;

import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="theme-color" content={metadata.themeColor} />
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

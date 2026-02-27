import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { ConsoleMessage } from "./console-message";
import { SITE_URL } from "./constants";
import { ThemeProvider } from "@/components/theme-provider";

const font = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "WIP — Product Design & Engineering Lab",
  description:
    "WIP is a product design and engineering lab focused on building thoughtful, well-crafted digital products.",
  openGraph: {
    title: "WIP — Product Design & Engineering Lab",
    description: "Building products at the intersection of design and code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[var(--app-bg)] font-light" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#222222" />
      </head>
      <body className={`${font.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <ConsoleMessage />
        </ThemeProvider>
      </body>
    </html>
  );
}

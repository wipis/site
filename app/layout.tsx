import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";

import { Analytics } from "@vercel/analytics/react";
import { ConsoleMessage } from "./console-message";
import { SITE_URL } from "./constants";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ThemeProvider } from "@/components/theme-provider";

const font = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "WIP — Studio of Bridger Tower",
  description:
    "Studio of Bridger Tower. Applying design, code, and AI to drive revenue.",
  openGraph: {
    title: "WIP — Studio of Bridger Tower",
    description:
      "Applying design, code, and AI to drive revenue across AI, brand, design, marketing, product, and web.",
    url: SITE_URL,
    siteName: "WIP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WIP — Studio of Bridger Tower",
    description:
      "Applying design, code, and AI to drive revenue across AI, brand, design, marketing, product, and web.",
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
          <LenisProvider>
            {children}
            <Analytics />
            <ConsoleMessage />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

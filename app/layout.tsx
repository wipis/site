import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { ConsoleMessage } from "./console-message";
import { APP_BACKGROUND, SITE_URL } from "./constants";

const font = Manrope({
  subsets: ["latin"],
  weight: ["300", "400"],
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
    <html
      lang="en"
      className="bg-[var(--app-bg)] font-light"
      style={{ backgroundColor: APP_BACKGROUND }}
    >
      <head>
        <meta name="theme-color" content={APP_BACKGROUND} />
        <style>{`
          html, body {
            background-color: ${APP_BACKGROUND};
          }
        `}</style>
      </head>
      <body className={font.className} style={{ backgroundColor: APP_BACKGROUND }}>
        {children}
        <Analytics />
        <ConsoleMessage />
      </body>
    </html>
  );
}

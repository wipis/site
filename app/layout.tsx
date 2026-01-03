import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const font = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wip.ac"),
  title: "Work In Progress / Applied Creative",
  description: "Software Design and Development by Bridger Tower.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#222] font-light">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { ThemeProvider } from "~/components/theme-provider";
import { LenisProvider } from "~/components/providers/lenis-provider";
import { ConsoleMessage } from "~/components/console-message";
import { SITE_URL } from "~/lib/constants";
import appCss from "~/styles/globals.css?url";
import lenisCss from "lenis/dist/lenis.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "WIP — Studio of Bridger Tower" },
      {
        name: "description",
        content:
          "Studio of Bridger Tower. Applying design, code, and AI to drive revenue.",
      },
      { name: "theme-color", content: "#222222" },
      // OpenGraph
      { property: "og:title", content: "WIP — Studio of Bridger Tower" },
      {
        property: "og:description",
        content:
          "Applying design, code, and AI to drive revenue across AI, brand, design, marketing, product, and web.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "WIP" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}/opengraph-image.png` },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "WIP — Studio of Bridger Tower" },
      {
        name: "twitter:description",
        content:
          "Applying design, code, and AI to drive revenue across AI, brand, design, marketing, product, and web.",
      },
      { name: "twitter:image", content: `${SITE_URL}/twitter-image.png` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: lenisCss },
      { rel: "icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
      },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <html
      lang="en"
      className="bg-[var(--app-bg)] font-light"
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <Outlet />
            <ConsoleMessage />
          </LenisProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}

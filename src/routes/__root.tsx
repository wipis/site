import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { ThemeProvider } from "~/components/theme-provider";
import { LenisProvider } from "~/components/providers/lenis-provider";
import { ConsoleMessage } from "~/components/console-message";
import {
  BRAND_NAME,
  CONTACT_EMAIL,
  COPYRIGHT_NAME,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  SOCIAL_LINKS,
} from "~/lib/constants";
import appCss from "~/styles/globals.css?url";
import lenisCss from "lenis/dist/lenis.css?url";

const ogImageUrl = `${SITE_URL}${OG_IMAGE_PATH}`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: BRAND_NAME,
      alternateName: "WIP",
      url: SITE_URL,
      description: SITE_DESCRIPTION,
    },
    {
      "@type": "ProfessionalService",
      name: BRAND_NAME,
      alternateName: "WIP",
      url: SITE_URL,
      email: CONTACT_EMAIL,
      description: SITE_DESCRIPTION,
      image: ogImageUrl,
      founder: {
        "@type": "Person",
        name: COPYRIGHT_NAME,
        url: "https://bridger.to",
      },
      sameAs: [...SOCIAL_LINKS],
    },
  ],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "theme-color", content: "#222222" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "WIP" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: ogImageUrl },
      { property: "og:image:width", content: String(OG_IMAGE_WIDTH) },
      { property: "og:image:height", content: String(OG_IMAGE_HEIGHT) },
      {
        property: "og:image:alt",
        content: "WIP — Design and Engineering Studio by Bridger Tower",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@wipdes" },
      { name: "twitter:creator", content: "@wipdes" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/twitter-image.png` },
      {
        name: "twitter:image:alt",
        content: "WIP — Design and Engineering Studio by Bridger Tower",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: lenisCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
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

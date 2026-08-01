import { defineEventHandler } from "nitro/h3";

import { CANONICAL_HOST } from "~/lib/constants";

/**
 * Redirects every non-canonical hostname to CANONICAL_HOST.
 *
 * wip.is, wip-design.com, wipdes.com, wip0.com and wip.ad are all attached to
 * the same Pages project, so without this they each serve a full 200 copy of
 * the site. Cloudflare Pages has no "primary domain" setting, so the canonical
 * choice has to be enforced here.
 *
 * Note: dist/_routes.json excludes /assets/*, /favicon.ico and /robots.txt from
 * the Worker, so those are served by Pages directly and never reach this
 * middleware. Document requests — the ones that matter for canonicalisation —
 * all pass through here.
 */
const EXEMPT_SUFFIXES = [
  // Preview deployments must keep working on their own hostname.
  ".pages.dev",
  // Local development.
  ".local",
  ".localhost",
];

const EXEMPT_HOSTS = new Set([
  CANONICAL_HOST,
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "[::1]",
]);

function isExempt(hostname: string) {
  if (EXEMPT_HOSTS.has(hostname)) return true;
  return EXEMPT_SUFFIXES.some((suffix) => hostname.endsWith(suffix));
}

export default defineEventHandler((event) => {
  const url = new URL(event.req.url);

  if (isExempt(url.hostname)) return;

  url.protocol = "https:";
  url.hostname = CANONICAL_HOST;
  url.port = "";

  return new Response(null, {
    status: 301,
    headers: {
      location: url.href,
      "cache-control": "public, max-age=3600",
    },
  });
});

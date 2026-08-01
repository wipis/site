import type { ReactNode } from "react";
import { CopyEmail } from "~/components/copy-email";
import { DOTTED_LINK_CLASSNAME } from "~/lib/constants";

interface WorkItem {
  company: string;
  href: string;
}

const WORK_ITEMS: WorkItem[] = [
  { company: "Vercel", href: "https://vercel.com" },
  { company: "Laravel", href: "https://laravel.com" },
  { company: "Browserbase", href: "https://browserbase.com" },
  { company: "Supermetal", href: "https://supermetal.io" },
  { company: "Julius", href: "https://julius.ai" },
  { company: "Route", href: "https://route.com" },
  { company: "Tackle.io", href: "https://tackle.io" },
  { company: "Outr.ai", href: "https://outr.ai" },
  { company: "File Logic", href: "https://filelogic.ai" },
  { company: "Ampry", href: "https://ampry.com" },
  { company: "Swyftfin", href: "https://swyftfin.com" },
  { company: "MatterOS", href: "https://matter-os.com" },
  { company: "Advocate Media", href: "https://advocatemedia.com" },
  { company: "Offer Arc", href: "https://offerarc.com" },
  { company: "Alpine Codex", href: "https://alpinecodex.com" },
];

const PROJECT_ITEMS: WorkItem[] = [
  { company: "ShipGTM", href: "https://shipgtm.com" },
  { company: "Router.so", href: "https://router.so" },
  { company: "Wrk.so", href: "https://wrk.so" },
  { company: "Components", href: "https://components.work" },
  { company: "Next WP", href: "https://next-wp.com" },
  { company: "Craft Design System", href: "https://craft-ds.com" },
  { company: "Emoji to Favicon", href: "https://github.com/brijr/favicon" },
  { company: "Meta MCP", href: "https://github.com/brijr/meta-mcp" },
];

const SOCIAL_ITEMS: WorkItem[] = [
  { company: "X", href: "https://x.com/wipdes" },
  {
    company: "LinkedIn",
    href: "https://www.linkedin.com/company/104856918",
  },
  { company: "GitHub", href: "https://github.com/wipis" },
  { company: "Telegram", href: "https://t.me/wipis" },
];

function LinkedList({
  label,
  items,
  prefix,
}: {
  label: string;
  items: WorkItem[];
  prefix?: ReactNode;
}) {
  return (
    <p className="text-[var(--app-fg)] leading-relaxed">
      <span className="text-[var(--app-fg-muted)]">{label}</span>
      <span className="text-[var(--app-fg-muted)]"> — </span>
      {prefix}
      {prefix && items.length > 0 ? (
        <span className="text-[var(--app-fg-muted)]">, </span>
      ) : null}
      {items.map((item, index) => (
        <span key={item.company}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={DOTTED_LINK_CLASSNAME}
          >
            {item.company}
          </a>
          {index < items.length - 1 ? (
            <span className="text-[var(--app-fg-muted)]">, </span>
          ) : null}
        </span>
      ))}
    </p>
  );
}

export function WorkList() {
  return (
    <section aria-label="Selected work" className="grid gap-4">
      <LinkedList label="Work" items={WORK_ITEMS} />
      <LinkedList label="Projects" items={PROJECT_ITEMS} />
      <LinkedList
        label="Social"
        prefix={<CopyEmail className={DOTTED_LINK_CLASSNAME} />}
        items={SOCIAL_ITEMS}
      />
    </section>
  );
}

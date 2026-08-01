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
  { company: "Craft Design System", href: "https://github.com/brijr/craft" },
  { company: "Emoji to Favicon", href: "https://github.com/brijr/favicon" },
  { company: "Meta MCP", href: "https://github.com/brijr/meta-mcp" },
];

function LinkedList({
  label,
  items,
}: {
  label: string;
  items: WorkItem[];
}) {
  return (
    <p className="text-[var(--app-fg-muted)]">
      {label}{" "}
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const separator = isLast
          ? "."
          : index === items.length - 2
            ? ", and "
            : ", ";

        return (
          <span key={item.company}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={DOTTED_LINK_CLASSNAME}
            >
              {item.company}
            </a>
            {separator}
          </span>
        );
      })}
    </p>
  );
}

export function WorkList() {
  return (
    <section aria-label="Selected work" className="grid gap-3">
      <LinkedList label="Work includes" items={WORK_ITEMS} />
      <LinkedList label="Projects include" items={PROJECT_ITEMS} />
    </section>
  );
}

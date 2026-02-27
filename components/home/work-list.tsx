interface WorkItem {
  company: string;
  contributions: string[];
  href?: string;
}

const WORK_ITEMS: WorkItem[] = [
  { company: "File Logic", contributions: ["AI", "Brand", "Design", "Product", "Web"], href: "https://filelogic.ai" },
  { company: "Outr.ai", contributions: ["AI", "Brand", "Design", "Product", "Web"], href: "https://outr.ai" },
  { company: "Vercel", contributions: ["Design", "Web"], href: "https://vercel.com" },
  { company: "Browserbase", contributions: ["Design", "Web", "Marketing"], href: "https://browserbase.com" },
  { company: "Julius", contributions: ["Design", "Product"], href: "https://julius.ai" },
  { company: "Laravel", contributions: ["Web", "Marketing"], href: "https://laravel.com" },
  { company: "Swyftfin", contributions: ["Brand", "Design", "Product"], href: "https://swyftfin.com" },
  { company: "Ampry", contributions: ["Brand", "Design", "Product", "Marketing"], href: "https://ampry.com" },
  { company: "Router.so", contributions: ["Brand", "Design", "Product"], href: "https://router.so" },
  { company: "Tackle.io", contributions: ["Brand", "Design", "Marketing"], href: "https://tackle.io" },
  { company: "Fly Super", contributions: ["AI", "Brand", "Design", "Product", "Web"], href: "https://flysuper.com" },
  { company: "Offer Arc", contributions: ["AI", "Brand", "Design", "Product", "Web"], href: "https://offer.com" },
  { company: "RetainerOS", contributions: ["AI", "Design", "Product"], href: "https://retaineros.com" },
  { company: "Route", contributions: ["Brand", "Marketing"], href: "https://route.com" },
];

export function WorkList() {
  return (
    <section className="pt-12 animate-blur-in-delay-4" aria-labelledby="work-heading">
      <h3
        id="work-heading"
        className="text-sm tracking-[0.08em] uppercase text-[var(--app-fg)] mb-4 pb-1 border-b border-[var(--app-fg)]/20"
      >
        Work
      </h3>

      <ul className="space-y-1">
        {WORK_ITEMS.map((item) => (
          <li key={item.company} className="py-1.5">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2"
              >
                <span className="shrink-0 text-sm leading-none font-light tracking-tight text-[var(--app-fg)]">
                  {item.company}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-[var(--app-fg-muted)]/20"
                />
                <span className="shrink-0 flex flex-wrap gap-1 justify-end">
                  {item.contributions.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-[var(--app-fg)]/[0.08] px-2 py-0.5 text-[10px] leading-none tracking-[0.02em] text-[var(--app-fg-muted)] group-hover:text-[var(--app-fg)] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
              </a>
            ) : (
              <span className="flex items-center gap-2">
                <span className="shrink-0 text-sm leading-none font-light tracking-tight text-[var(--app-fg)]/80">
                  {item.company}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-[var(--app-fg-muted)]/20"
                />
                <span className="shrink-0 flex flex-wrap gap-1 justify-end">
                  {item.contributions.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-[var(--app-fg)]/[0.08] px-2 py-0.5 text-[10px] leading-none tracking-[0.02em] text-[var(--app-fg-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

interface WorkItem {
  company: string;
  contribution: string;
  href?: string;
}

const WORK_ITEMS: WorkItem[] = [
  { company: "File Logic", contribution: "AI, Design, Product", href: "https://filelogic.ai" },
  { company: "Outr.ai", contribution: "AI, Design, Product", href: "https://outr.ai" },
  { company: "Vercel", contribution: "Design, Web",  href: "https://vercel.com", },
  { company: "Browserbase", contribution: "Design, Web, Marketing", href: "https://browserbase.com" },
  { company: "Julius", contribution: "Design, Product", href: "https://julius.ai" },
  { company: "Laravel", contribution: "Web, Marketing", href: "https://laravel.com" },
  { company: "Swyftfin", contribution: "Design, Product", href: "https://swyftfin.com" },
  { company: "Ampry", contribution: "Design, Product, Marketing", href: "https://ampry.com" },
  { company: "Router.so", contribution: "Design, Product", href: "https://router.so" },
  { company: "Tackle.io", contribution: "Design, Marketing", href: "https://tackle.io" },
  { company: "Fly Super", contribution: "AI, Design, Product", href: "https://flysuper.com" },
  { company: "Offer Arc", contribution: "AI, Design, Product", href: "https://offer.com" },
  { company: "RetainerOS", contribution: "AI, Design, Product", href: "https://retaineros.com" },
];

export function WorkList() {
  return (
    <section className="animate-blur-in-delay-3" aria-labelledby="work-heading">
      <h3
        id="work-heading"
        className="text-xs tracking-[0.06em] uppercase text-[var(--app-fg-muted)] mb-2"
      >
        Work
      </h3>

      <ul className="grid grid-cols-3 gap-3">
        {WORK_ITEMS.map((item) => (
          <li key={item.company} className="min-w-0">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-24 w-full flex-col items-start justify-between rounded-md bg-[var(--surface-soft)] p-3"
              >
                <span className="text-sm leading-none font-medium tracking-tight text-[var(--app-fg)]">
                  {item.company}
                </span>
                <span className="text-xs tracking-[0.01em] text-[var(--app-fg-muted)] group-hover:text-[var(--app-fg)] transition-colors">
                  {item.contribution}
                </span>
              </a>
            ) : (
              <span className="flex h-24 w-full flex-col items-start justify-between rounded-md bg-[var(--surface-soft)] p-3">
                <span className="text-sm leading-none font-medium tracking-tight text-[var(--app-fg)]/80">
                  {item.company}
                </span>
                <span className="text-xs tracking-[0.01em] text-[var(--app-fg-muted)]">
                  {item.contribution}
                </span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

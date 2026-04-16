interface ServiceItem {
  tag: "AI" | "Brand" | "Design" | "Marketing" | "Product" | "Web";
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    tag: "AI",
    description:
      "I design and ship practical AI features, assistants, and workflows that improve customer outcomes and operational speed.",
  },
  {
    tag: "Brand",
    description:
      "I shape positioning, messaging, and identity so your product feels distinct, consistent, and easier to trust.",
  },
  {
    tag: "Design",
    description:
      "I craft interfaces and interaction systems that are clear, fast, and conversion-focused from first click to daily use.",
  },
  {
    tag: "Marketing",
    description:
      "I align narrative, funnel, and launch execution so product value is obvious and performance compounds over time.",
  },
  {
    tag: "Product",
    description:
      "I translate strategy into roadmap and shipped experiences, balancing user needs, technical reality, and business goals.",
  },
  {
    tag: "Web",
    description:
      "I build and launch high-quality web experiences, from landing pages to full product surfaces and integrations.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="pt-12 animate-blur-in-delay-7"
      aria-labelledby="services-heading"
    >
      <h3
        id="services-heading"
        className="text-sm tracking-[0.08em] uppercase text-[var(--app-fg)] mb-4 pb-1 border-b border-[var(--app-fg)]/20"
      >
        Services
      </h3>

      <ul className="space-y-3 text-sm text-[var(--app-fg-muted)] font-light">
        {SERVICES.map((service) => (
          <li key={service.tag}>
            <p className="leading-relaxed">
              <span className="text-[var(--app-fg)]">{service.tag}</span> -{" "}
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

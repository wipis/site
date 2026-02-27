import { CONTACT_EMAIL } from "@/app/constants";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <h3
        id="about-heading"
        className="text-xs tracking-[0.06em] uppercase text-[var(--app-fg-muted)] mb-3 animate-blur-in-delay-5"
      >
        About
      </h3>

      <div className="space-y-4 text-sm text-[var(--app-fg-muted)]">
        <p className="animate-blur-in-delay-6">
          WIP is a software design and engineering studio focused on building at
          the intersection of design, AI, and human-computer interaction.
        </p>

        <p className="animate-blur-in-delay-7">
          Here&apos;s what we believe: AI is extraordinarily powerful, but most
          AI tools are extraordinarily bad at helping people actually use that
          power. They&apos;re built by engineers who understand the technology
          but not the people using it. And that&apos;s a problem.
        </p>

        <p className="animate-blur-in-delay-7">
          WIP comes from a background in marketing and advertising, which means
          years of understanding what makes people click, what makes them
          frustrated, and what makes them come back.
        </p>

        <p className="animate-blur-in-delay-7">
          Our focus is on closing the gap between what AI can do and what
          people need it to do. We design systems that feel simple and
          intuitive on the surface while running sophisticated technology
          underneath. No confusing interfaces. No fighting with prompts. Just
          tools that work the way you think.
        </p>

        <p className="animate-blur-in-delay-7">
          We&apos;re interested in the hard problems: How do you make AI feel
          natural? How do you design interfaces that make complex technology
          accessible? How do you build software that actually solves problems
          instead of creating new ones?
        </p>

        <p className="animate-blur-in-delay-7">
          If you&apos;re working on similar questions,{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[var(--app-fg)] hover:opacity-70 transition-opacity underline underline-offset-2"
          >
            let&apos;s talk
          </a>
          .
        </p>
      </div>
    </section>
  );
}

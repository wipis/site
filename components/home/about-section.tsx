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
          I&apos;m Bridger Tower. WIP is my design and engineering studio,
          focused on building products at the intersection of AI, design, and
          human-computer interaction.
        </p>

        <p className="animate-blur-in-delay-7">
          I come from a marketing and advertising background, so I care deeply
          about what people actually do, not just what software can do in
          theory.
        </p>

        <p className="animate-blur-in-delay-7">
          My work is about making advanced systems feel clear and practical:
          strong product thinking, sharp interaction design, clean execution,
          and business outcomes.
        </p>

        <p className="animate-blur-in-delay-7">
          I focus on closing the gap between technical capability and usable
          experience, especially in AI products where most teams still
          over-index on complexity.
        </p>

        <div className="pt-2">
          <h4 className="text-xs tracking-[0.06em] uppercase text-[var(--app-fg-muted)] mb-2 animate-blur-in-delay-7">
            Services
          </h4>
          <p className="animate-blur-in-delay-7">
            Core focus: AI, Brand, Design, Marketing, Product, Web.
          </p>
        </div>

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

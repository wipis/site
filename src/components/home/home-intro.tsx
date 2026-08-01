import { DOTTED_LINK_CLASSNAME } from "~/lib/constants";

export function HomeIntro() {
  return (
    <section className="pr-20 md:pr-0">
      <h2 className="font-light tracking-tight mb-3">
        Work in Progress / Applied Design
      </h2>

      <p className="text-[var(--app-fg-muted)]">
        Design and Engineering Studio by{" "}
        <a
          href="https://bridger.to"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-[var(--app-fg)] ${DOTTED_LINK_CLASSNAME}`}
        >
          Bridger Tower
        </a>
        .
      </p>
    </section>
  );
}

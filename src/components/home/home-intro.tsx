import { CopyEmail } from "~/components/copy-email";
import { DOTTED_LINK_CLASSNAME } from "~/lib/constants";

export function HomeIntro() {
  return (
    <section className="pr-20 md:pr-0">
      <h2 className="font-light tracking-tight mb-12">
        Work in Progress / Applied Design
      </h2>

      <div className="grid gap-3">
        <p className="text-[var(--app-fg)]">
          Design and Engineering Studio by{" "}
          <a
            href="https://bridger.to"
            target="_blank"
            rel="noopener noreferrer"
            className={DOTTED_LINK_CLASSNAME}
          >
            Bridger Tower
          </a>
          .
        </p>

        <p className="text-[var(--app-fg-muted)]">
          A small number of engagements at a time.
        </p>

        <p className="text-[var(--app-fg-muted)]">
          <CopyEmail className={DOTTED_LINK_CLASSNAME} />
        </p>
      </div>
    </section>
  );
}

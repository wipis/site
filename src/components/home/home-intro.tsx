export function HomeIntro() {
  return (
    <section className="grid gap-3 pr-20 md:pr-0">
      <h2 className="text-[2rem] font-light tracking-tight mb-2">
        Work in Progress / Applied Design
      </h2>

      <p className="text-[var(--app-fg)]">
        Studio of{" "}
        <a
          href="https://bridger.to"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          Bridger Tower
        </a>
        . Applying design, code, and AI to drive revenue.
      </p>

      <p className="text-[var(--app-fg-muted)]">
        I help teams shape brand, product, and web experiences that are clear,
        useful, and built to convert.
      </p>
    </section>
  );
}

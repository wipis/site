export function HomeIntro() {
  return (
    <section className="grid gap-3">
      <h2 className="text-[2rem] font-light tracking-tight animate-blur-in-delay-1 mb-2">
        Work in Progress
      </h2>

      <p className="text-[var(--app-fg)] animate-blur-in-delay-2">
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

      <p className="text-[var(--app-fg-muted)] animate-blur-in-delay-3">
        I help teams shape brand, product, and web experiences that are clear,
        useful, and built to convert.
      </p>
    </section>
  );
}

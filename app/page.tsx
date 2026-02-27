import Link from "next/link";

import { Shader } from "./shader";
import { CopyEmail } from "./copy-email";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

export default function Home() {
  return (
    <main className="bg-[var(--app-bg)] min-h-screen text-[var(--app-fg)]">
      <SiteHeader />

      <article className="relative z-40 max-w-2xl mx-auto px-6 pt-32 pb-24">
        <h2 className="text-3xl font-light mb-12 animate-blur-in-delay-1">
          Work In Progress
        </h2>

        <div className="space-y-6 text-[var(--app-fg-muted)] leading-relaxed">
          <p className="animate-blur-in-delay-2">
            Studio of Bridger Tower. Applying design, code, and AI to drive
            revenue.
          </p>

          <p className="animate-blur-in-delay-4">
            <Link
              href="/about"
              className="text-[var(--app-fg)] hover:text-neutral-300 transition-colors underline underline-offset-4"
            >
              Learn more about WIP
            </Link>
            .
          </p>
        </div>

        <div className="mt-10 w-full max-w-xl aspect-[3/2] relative overflow-hidden border border-white/10 animate-blur-in-delay-3">
          <Shader className="absolute inset-0 w-full h-full pointer-events-none bg-[var(--app-bg)]" />
        </div>
      </article>

      <SiteFooter rightContent={<CopyEmail />} />
    </main>
  );
}

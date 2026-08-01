import { COPYRIGHT_NAME } from "~/lib/constants";
import { ModeToggle } from "~/components/mode-toggle";

export function SiteFooter() {
  return (
    <footer className="pointer-events-none fixed inset-x-0 bottom-0 z-50">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[var(--app-bg)] from-50% to-transparent"
      />

      <div className="pointer-events-auto relative flex items-center justify-end gap-3 p-6">
        <p className="font-light text-sm text-[var(--app-fg-muted)]">
          &copy; {new Date().getFullYear()} /{" "}
          <a
            href="https://bridger.to"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--app-fg)] transition-colors"
          >
            {COPYRIGHT_NAME}
          </a>
        </p>

        <ModeToggle />
      </div>
    </footer>
  );
}

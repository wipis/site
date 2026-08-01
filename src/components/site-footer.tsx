import type { ReactNode } from "react";
import { COPYRIGHT_NAME } from "~/lib/constants";
import { ModeToggle } from "~/components/mode-toggle";

interface SiteFooterProps {
  rightContent?: ReactNode;
}

export function SiteFooter({ rightContent }: SiteFooterProps) {
  return (
    <footer className="fixed bottom-0 right-0 z-50 flex items-center gap-3 p-6">
      <ModeToggle />
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

      {rightContent}
    </footer>
  );
}

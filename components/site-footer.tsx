import type { ReactNode } from "react";
import { COPYRIGHT_NAME } from "@/app/constants";
import { ModeToggle } from "@/components/mode-toggle";

interface SiteFooterProps {
  rightContent?: ReactNode;
}

export function SiteFooter({ rightContent }: SiteFooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between p-6">
      <div className="flex items-center gap-3">
        <ModeToggle />
        <p className="font-thin text-sm text-[var(--app-fg-muted)] animate-blur-in-delay-3">
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
      </div>

      {rightContent}
    </footer>
  );
}

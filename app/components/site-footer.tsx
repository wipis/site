import type { ReactNode } from "react";
import { COPYRIGHT_NAME } from "../constants";

interface SiteFooterProps {
  rightContent?: ReactNode;
}

export function SiteFooter({ rightContent }: SiteFooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between p-6">
      <p className="font-thin text-sm text-neutral-500 animate-blur-in-delay-3">
        &copy; {new Date().getFullYear()} /{" "}
        <a
          href="https://bridger.to"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-300 transition-colors"
        >
          {COPYRIGHT_NAME}
        </a>
      </p>

      {rightContent}
    </footer>
  );
}

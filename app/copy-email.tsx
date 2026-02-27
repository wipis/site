"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL } from "./constants";

interface CopyEmailProps {
  className?: string;
}

export function CopyEmail({ className = "" }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(CONTACT_EMAIL);
        setCopied(true);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback: open mail client
        window.location.href = `mailto:${CONTACT_EMAIL}`;
      }
    } catch {
      // Fallback: open mail client
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`font-light text-sm text-[var(--app-fg-muted)] hover:text-[var(--app-fg)] transition-colors animate-blur-in-delay-3 cursor-pointer ${className}`}
    >
      {copied ? "copied" : CONTACT_EMAIL}
    </button>
  );
}

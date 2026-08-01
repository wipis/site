import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL } from "~/lib/constants";

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
        window.location.href = `mailto:${CONTACT_EMAIL}`;
      }
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline font-light text-[var(--app-fg)] hover:opacity-70 transition-opacity cursor-pointer ${className}`}
    >
      {copied ? "copied" : CONTACT_EMAIL}
    </button>
  );
}

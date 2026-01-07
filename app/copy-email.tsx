"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL } from "./constants";

export function CopyEmail() {
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
      onClick={handleCopy}
      className="z-100 fixed font-thin text-sm bottom-5 right-6 text-neutral-300 sm:text-neutral-500 hover:text-neutral-300 transition-colors animate-blur-in-delay-3 cursor-pointer px-2 py-1 rounded-sm"
    >
      {copied ? "copied" : CONTACT_EMAIL}
    </button>
  );
}

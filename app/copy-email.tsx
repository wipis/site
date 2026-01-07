"use client";

import { useState } from "react";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText("bt@wip.is");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback: open mail client
        window.location.href = "mailto:bt@wip.is";
      }
    } catch {
      // Fallback: open mail client
      window.location.href = "mailto:bt@wip.is";
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="z-100 fixed font-thin text-sm bottom-5 right-6 text-neutral-300 sm:text-neutral-500 hover:text-neutral-300 transition-colors animate-blur-in-delay-3 cursor-pointer px-2 py-1 rounded-sm"
    >
      {copied ? "copied" : "bt@wip.is"}
    </button>
  );
}

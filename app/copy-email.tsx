"use client";

import { useState } from "react";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("bt@wip.ac");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="z-50 absolute font-thin text-sm bottom-5 left-6 text-neutral-500 hover:text-neutral-300 transition-colors animate-blur-in-delay-3 cursor-pointer"
    >
      {copied ? "copied" : "bt@wip.ac"}
    </button>
  );
}

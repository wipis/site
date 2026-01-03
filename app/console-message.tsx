"use client";

import { useEffect } from "react";

export function ConsoleMessage() {
  useEffect(() => {
    console.log(
      `%c
██╗    ██╗██╗██████╗
██║    ██║██║██╔══██╗
██║ █╗ ██║██║██████╔╝
██║███╗██║██║██╔═══╝
╚███╔███╔╝██║██║
 ╚══╝╚══╝ ╚═╝╚═╝
`,
      "color: #f5f5f5; background: #222;"
    );
    console.log(
      "%cLooking under the hood? I like that.",
      "color: #888; font-size: 14px;"
    );
    console.log(
      "%cGet in touch → bt@wip.ac",
      "color: #888; font-size: 12px;"
    );
  }, []);

  return null;
}

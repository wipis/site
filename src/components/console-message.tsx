import { useEffect } from "react";
import {
  APP_BACKGROUND,
  APP_FOREGROUND,
  APP_FOREGROUND_MUTED,
  CONTACT_EMAIL,
} from "~/lib/constants";

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
      `color: ${APP_FOREGROUND}; background: ${APP_BACKGROUND};`
    );
    console.log(
      "%cLooking under the hood? I like that.",
      `color: ${APP_FOREGROUND_MUTED}; font-size: 14px;`
    );
    console.log(
      `%cGet in touch → ${CONTACT_EMAIL}`,
      `color: ${APP_FOREGROUND_MUTED}; font-size: 12px;`
    );
  }, []);

  return null;
}

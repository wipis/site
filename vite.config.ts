import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    nitro({
      preset: "cloudflare-pages",
      handlers: [
        // Runs before every Worker request. Not auto-scanned: the nitro Vite
        // plugin does not pick up server/middleware/ unless serverDir is set.
        {
          middleware: true,
          handler: "./server/middleware/canonical-host.ts",
        },
      ],
    }),
  ],
});

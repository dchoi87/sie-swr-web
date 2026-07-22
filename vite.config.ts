/// <reference types="vitest/config" />
// https://vite.dev/config/
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vite";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Lets `@use "styles/tokens"` resolve from src/.
        loadPaths: [path.resolve(dirname, "src")],
        // Auto-inject the SCSS token layer into every module so $palette and
        // mixins are available without an import. `_tokens.scss` emits no CSS,
        // so there's nothing to duplicate — and it must not be injected into
        // itself (that would be a circular @use).
        additionalData: (source: string, filename: string) => {
          if (filename.replace(/\\/g, "/").endsWith("/styles/_tokens.scss")) {
            return source;
          }
          return `@use "styles/tokens" as *;\n${source}`;
        },
      },
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
    ],
  },
});

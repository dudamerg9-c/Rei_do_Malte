// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import type { Plugin } from "vite";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

function injectedHeadScriptsPlugin(): Plugin {
  return {
    name: "tanstack-start-injected-head-scripts-stub",
    apply: "serve",
    resolveId(id) {
      if (id === "tanstack-start-injected-head-scripts:v") {
        return id;
      }
      return null;
    },
    load(id) {
      if (id === "tanstack-start-injected-head-scripts:v") {
        return `export const injectedHeadScripts = undefined;`;
      }
      return null;
    },
  };
}

function previewServerEntryPlugin(): Plugin {
  return {
    name: "tanstack-start-preview-server-entry",
    applyToEnvironment(environment) {
      return environment.name === "ssr";
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "server.js",
        source: `export { default } from "./index.js";\n`,
      });
    },
  };
}

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  vite: {
    base: "/Rei_do_Malte/",
  },

  tanstackStart: {
    server: { entry: "server" },
  },

  plugins: [injectedHeadScriptsPlugin(), previewServerEntryPlugin()],

  environments: {
    client: {
      build: {
        rollupOptions: {
          input: "./src/main.tsx",
        },
      },
    },
    ssr: {
      build: {
        rollupOptions: {
          input: "./src/server.ts",
          output: {
            entryFileNames: "server.js",
          },
        },
      },
    },
  },
});

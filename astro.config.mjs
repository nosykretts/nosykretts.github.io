import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  outDir: "dist",
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
  site: "https://fajar.dev",
  integrations: [tailwind()],
});

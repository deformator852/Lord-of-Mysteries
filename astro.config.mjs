import { defineConfig } from "astro/config";

const rawBase = process.env.BASE_PATH ?? "/";
const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

export default defineConfig({
  output: "static",
  base,
  build: {
    assets: "assets",
  },
});

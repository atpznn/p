import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
const isProduction = process.env.NODE_ENV != "development";

export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), icon()],
  prefetch: true,
  site: "https://atpznn.github.io",
  base: isProduction ? "/p" : "",
});

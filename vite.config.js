import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "My Portfolio",
        short_name: "Portfolio",
        description: "Portfolio Website",
        icons: [
          {
            src: "/images/icons/icon-180x180.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/images/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/images/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#131313",
        background_color: "#131313",
        display: "standalone",
        start_url: "/",
        scope: "/",
        orientation: "portrait",
      },
    }),
  ],
  base: "/Portfolio/",
});

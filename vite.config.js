import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "hero.png","pwa2-192x192.png", "pwa1-192x192.png", "robots.txt"],
      workbox: {
        navigateFallback: "/index.html",
        globPatterns: ["**/*.{js,jsx,css,html,png,svg}"],
      },
      manifest: {
        name: "Mi PWA",
        short_name: "PWA",
        description: "Aplicación web progresiva creada para buscar un mejor controlor para tus gastos de tu vida pesada",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",

        screenshots: [
          {
            src: "/img/hero.png",
            sizes: '343x361',
            type: 'image/png',
            form_factor: 'narrow' // wide es para el nav
          },
          {
            src: '/img/hero.png',
            sizes: '512x512',
            type: 'image/png',
            form_factor: 'wide'
          }
        ],
        icons: [
          {
            src: "/img/pwa2-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/img/pwa1-192x192.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
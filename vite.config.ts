import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./routes",
      generatedRouteTree: "./app/routeTree.gen.ts",
      enableRouteGeneration: true,
    }),
    react(),
  ],
  build: {
    outDir: "public",
    emptyOutDir: true,
  },
});

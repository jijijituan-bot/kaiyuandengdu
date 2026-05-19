import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: "dist/static",
  },
  preview: {
    host: true,
    strictPort: true,
    port: Number(process.env.PORT) || 4173,
    allowedHosts: ["kaiyuandengdu-production.up.railway.app", ".railway.app"],
  },
});

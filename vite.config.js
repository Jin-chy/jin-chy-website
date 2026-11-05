// Vite = the tool that runs a local dev server and bundles the site for production.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});

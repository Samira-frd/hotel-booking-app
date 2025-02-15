import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { UserConfigExport } from "vitest/config";


export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: { // ✅ This should now work!
    globals: true,
    environment: "jsdom",
  },
}as UserConfigExport);

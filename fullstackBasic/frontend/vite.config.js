import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        //Any url with /api apeend the target value on that url
        target: "http://localhost:4000",
      },
    },
  },
});

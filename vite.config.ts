import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@molecules": path.resolve(__dirname, "./src/molecules"),
      "@organisms": path.resolve(__dirname, "./src/organisms"),
      "@templates": path.resolve(__dirname, "./src/templates"),
      "@data": path.resolve(__dirname, "./src/data"),
    },
  },
  plugins: [react()],
});

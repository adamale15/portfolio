import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    outDir: "dist", // Ensure the output directory is specified
    assetsDir: "assets", // Directory for CSS, JS, and other assets
    cssMinify: false, // Disable CSS minification for debugging
    cssCodeSplit: true, // Ensure CSS is split into separate files
    rollupOptions: {
      output: {
        manualChunks: {
          // Example: Split dependencies into chunks (adjust as needed)
          react: ["react", "react-dom"],
        },
      },
    },
  },
  server: {
    host: "127.0.0.1", // Ensure local hosting
    port: 3000, // Development server port
    strictPort: true, // Prevent fallback to another port
    open: true, // Automatically open the app in the default browser
  },
  resolve: {
    alias: {
      "@": "/src", // Example alias for simplifying imports
    },
  },
});

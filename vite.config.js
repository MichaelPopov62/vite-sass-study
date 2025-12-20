import path from "path";
import { defineConfig } from "vite";
import glob from "fast-glob";
import { fileURLToPath } from "url";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  base: '/vite-sass-study/', // <-- тут назва твого репозиторію на GitHub
  plugins: [
    ViteImageOptimizer({
      png: { quality: 86 },
      jpeg: { quality: 86 },
      jpg: { quality: 86 },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // абсолютні імпорти JS/SCSS
    },
  },
  build: {
    minify: false,
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync(["./*.html", "./pages/**/*.html"])
          .map((file) => [
            path.relative(__dirname, file.slice(0, file.length - path.extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});

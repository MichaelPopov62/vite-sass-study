// vite.config.js
import imagemin from "file:///D:/vite-sass--study/node_modules/imagemin/index.js";
import imageminWebp from "file:///D:/vite-sass--study/node_modules/imagemin-webp/index.js";
import path from "path";
import { defineConfig } from "file:///D:/vite-sass--study/node_modules/vite/dist/node/index.js";
import glob from "file:///D:/vite-sass--study/node_modules/fast-glob/out/index.js";
import { fileURLToPath } from "url";
import { ViteImageOptimizer } from "file:///D:/vite-sass--study/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\vite-sass--study";
var __vite_injected_original_import_meta_url = "file:///D:/vite-sass--study/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 86
      },
      jpeg: {
        quality: 86
      },
      jpg: {
        quality: 86
      }
    }),
    {
      ...imagemin(["./src/img/**/*.{jpg,png,jpeg}"], {
        destination: "./src/img/webp/",
        plugins: [imageminWebp({ quality: 86 })]
      }),
      apply: "serve"
    }
  ],
  build: {
    minify: false,
    // disable minification
    rollupOptions: {
      input:{ main: path.resolve(__dirname, "src/main.scss"),
         app: Object.fromEntries (
        glob.sync(["./*.html", "./pages/**/*.html"]).map((file) => [
          path.relative(__vite_injected_original_dirname, file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url)),
          
        ])
      )},
      // output unminified CSS file
      output: {
        assetFileNames: "assets/[name].[ext]"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx2aXRlLXNhc3MtLXN0dWR5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx2aXRlLXNhc3MtLXN0dWR5XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi92aXRlLXNhc3MtLXN0dWR5L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IGltYWdlbWluIGZyb20gXCJpbWFnZW1pblwiO1xyXG5pbXBvcnQgaW1hZ2VtaW5XZWJwIGZyb20gXCJpbWFnZW1pbi13ZWJwXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCBnbG9iIGZyb20gXCJmYXN0LWdsb2JcIjtcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gXCJ1cmxcIjtcclxuaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSBcInZpdGUtcGx1Z2luLWltYWdlLW9wdGltaXplclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICBWaXRlSW1hZ2VPcHRpbWl6ZXIoe1xyXG4gICAgICBwbmc6IHtcclxuICAgICAgICBxdWFsaXR5OiA4NixcclxuICAgICAgfSxcclxuICAgICAganBlZzoge1xyXG4gICAgICAgIHF1YWxpdHk6IDg2LFxyXG4gICAgICB9LFxyXG4gICAgICBqcGc6IHtcclxuICAgICAgICBxdWFsaXR5OiA4NixcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAge1xyXG4gICAgICAuLi5pbWFnZW1pbihbXCIuL3NyYy9pbWcvKiovKi57anBnLHBuZyxqcGVnfVwiXSwge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi4vc3JjL2ltZy93ZWJwL1wiLFxyXG4gICAgICAgIHBsdWdpbnM6IFtpbWFnZW1pbldlYnAoeyBxdWFsaXR5OiA4NiB9KV0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBhcHBseTogXCJzZXJ2ZVwiLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBtaW5pZnk6IGZhbHNlLCAvLyBkaXNhYmxlIG1pbmlmaWNhdGlvblxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDogT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICAgIGdsb2JcclxuICAgICAgICAgIC5zeW5jKFtcIi4vKi5odG1sXCIsIFwiLi9wYWdlcy8qKi8qLmh0bWxcIl0pXHJcbiAgICAgICAgICAubWFwKChmaWxlKSA9PiBbXHJcbiAgICAgICAgICAgIHBhdGgucmVsYXRpdmUoX19kaXJuYW1lLCBmaWxlLnNsaWNlKDAsIGZpbGUubGVuZ3RoIC0gcGF0aC5leHRuYW1lKGZpbGUpLmxlbmd0aCkpLFxyXG4gICAgICAgICAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICAgICAgICBdKVxyXG4gICAgICApLFxyXG4gICAgICAvLyBvdXRwdXQgdW5taW5pZmllZCBDU1MgZmlsZVxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogXCJhc3NldHMvW25hbWVdLltleHRdXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStPLE9BQU8sY0FBYztBQUNwUSxPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxVQUFVO0FBQ2pCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsMEJBQTBCO0FBTm5DLElBQU0sbUNBQW1DO0FBQXdHLElBQU0sMkNBQTJDO0FBUWxNLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLG1CQUFtQjtBQUFBLE1BQ2pCLEtBQUs7QUFBQSxRQUNILFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsS0FBSztBQUFBLFFBQ0gsU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNEO0FBQUEsTUFDRSxHQUFHLFNBQVMsQ0FBQywrQkFBK0IsR0FBRztBQUFBLFFBQzdDLGFBQWE7QUFBQSxRQUNiLFNBQVMsQ0FBQyxhQUFhLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUFBLE1BQ3pDLENBQUM7QUFBQSxNQUNELE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixPQUFPLE9BQU87QUFBQSxRQUNaLEtBQ0csS0FBSyxDQUFDLFlBQVksbUJBQW1CLENBQUMsRUFDdEMsSUFBSSxDQUFDLFNBQVM7QUFBQSxVQUNiLEtBQUssU0FBUyxrQ0FBVyxLQUFLLE1BQU0sR0FBRyxLQUFLLFNBQVMsS0FBSyxRQUFRLElBQUksRUFBRSxNQUFNLENBQUM7QUFBQSxVQUMvRSxjQUFjLElBQUksSUFBSSxNQUFNLHdDQUFlLENBQUM7QUFBQSxRQUM5QyxDQUFDO0FBQUEsTUFDTDtBQUFBO0FBQUEsTUFFQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

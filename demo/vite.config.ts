import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 生成先 ../docs に変更
  build: {
    outDir: "../docs",
    // 生成先を空にする
    emptyOutDir: true,
  },
  // 相対パス化
  base: "./",
});

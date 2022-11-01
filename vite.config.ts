import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      'vue-acrylic': path.resolve(__dirname, './src/index.ts')
    }
  },
  build: {
    outDir: 'docs'
  }
})

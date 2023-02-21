import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '#': resolve(__dirname, './src/types'),
      components: resolve(__dirname, './src/components'),
      utils: resolve(__dirname, './src/utils'),
      request: resolve(__dirname, './src/request'),
      views: resolve(__dirname, './src/views')
    }
  },
  server: {
    port: 4000
  }
})

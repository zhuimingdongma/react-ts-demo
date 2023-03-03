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
      views: resolve(__dirname, './src/views'),
      store: resolve(__dirname, './src/store')
    }
  },
  server: {
    port: 5173,
    proxy: {
      '/web': {
        target: 'https://passport.bilibili.com/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 不可以省略rewrite
      },
      '/x': {
        target: 'https://api.bilibili.com/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 不可以省略rewrite
      },
      '/api': {
        target: 'http://localhost:3011/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 不可以省略rewrite
      }
    }
  }
})

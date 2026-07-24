import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Served from the apex domain billixapp.com, so assets resolve from the root.
// Entry points: the marketing site (index.html) and the interactive demo (demo.html).
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        demo: resolve(__dirname, 'demo.html'),
      },
    },
  },
})

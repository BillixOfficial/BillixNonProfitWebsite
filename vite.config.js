import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the apex domain billixapp.com, so assets resolve from the root.
export default defineConfig({
  plugins: [react()],
  base: '/',
})

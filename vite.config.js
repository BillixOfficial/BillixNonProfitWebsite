import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages project path so assets resolve in production.
// Locally (dev/preview) Vite ignores this for the dev server root.
export default defineConfig({
  plugins: [react()],
  base: '/BillixNonProfitWebsite/',
})

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/madison-morrow-personal/', // base path for GitHub Pages project site
  plugins: [react()],
})

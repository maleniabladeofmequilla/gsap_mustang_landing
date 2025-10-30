import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- 1. Import the plugin

export default defineConfig({
  server: {
    host: '0.0.0.0',},
  plugins: [
    react(),
    tailwindcss(),
  ],
})
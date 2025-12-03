import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  // 🎯 IMPORTANTE: Ruta base para GitHub Pages
  base: '/EstudioJuridico/', 
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // 🎯 SEGUNDO CAMBIO: Forzar la salida a la carpeta /docs
  build: {
    outDir: 'docs' 
  }
})

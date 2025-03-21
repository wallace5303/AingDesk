import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import UnoCss from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  base:"./",
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    UnoCss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 5173
  }
})

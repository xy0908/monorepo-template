import path from 'node:path'
import { UIResolver } from '@demo/ui'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    tailwindcss(),
    Components(UIResolver),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/core',
        '@vueuse/head',
      ],
      dirs: [
        'src/store/*',
        'src/composables',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css:{
    preprocessorOptions: {
      scss: {
         additionalData: `
          @use "@/styles/_variables.scss";
          @use "@/styles/_mixins.scss";
        `
      }
    }
  }
})

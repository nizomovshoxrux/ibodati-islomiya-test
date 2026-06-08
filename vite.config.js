import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // GitHub Pages / statik hosting uchun nisbiy yo'l
  base: './',
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Ibodati Islomiya — Test',
        short_name: 'Ibodat Test',
        description: 'Ahmad Hodiy Maqsudiy «Ibodati Islomiya» kitobi asosida imtihon testlari',
        lang: 'uz',
        theme_color: '#2f9e6f',
        background_color: '#0f1419',
        display: 'standalone',
        orientation: 'portrait',
        start_url: './',
        scope: './',
        icons: [
          { src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
          { src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,woff2,png,svg,ico}'],
        cleanupOutdatedCaches: true
      }
    })
  ]
})

import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import './styles/app.css'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'ibodatDark',
    themes: {
      ibodatDark: {
        dark: true,
        colors: {
          background: '#070b16',
          surface: '#111829',
          'surface-bright': '#1b2440',
          'surface-light': '#243056',
          primary: '#13c08a',
          secondary: '#f5b53d',
          accent: '#22d3a8',
          error: '#f25c54',
          success: '#1ed98a',
          info: '#4aa8ff',
          warning: '#f5b53d',
          'on-surface': '#eef3fb',
          'on-background': '#eef3fb'
        }
      }
    }
  },
  icons: { defaultSet: 'mdi', aliases, sets: { mdi } },
  defaults: {
    VCard: { rounded: 'lg' },
    VBtn: { rounded: 'lg', class: 'text-none' }
  }
})

createApp(App).use(vuetify).mount('#app')

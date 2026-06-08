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
          background: '#0f1419',
          surface: '#1b232e',
          'surface-bright': '#212c39',
          primary: '#2f9e6f',
          secondary: '#d4a23a',
          accent: '#d4a23a',
          error: '#e0564f',
          success: '#36b37e',
          info: '#4a9fd4',
          warning: '#d4a23a'
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

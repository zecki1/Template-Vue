import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { MotionPlugin } from '@vueuse/motion'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'

import en from './locales/en.json'
import ptBr from './locales/pt-br.json'

const i18n = createI18n({
  legacy: false,
  locale: 'pt-br',
  fallbackLocale: 'en',
  messages: {
    en,
    'pt-br': ptBr
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(MotionPlugin)

app.mount('#app')

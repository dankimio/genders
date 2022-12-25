import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from "@vueuse/head"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const head = createHead()

app.use(pinia)
app.use(head)
app.use(router)
app.mount('#app')

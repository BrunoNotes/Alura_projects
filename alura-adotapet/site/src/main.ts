import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import roteador from './router'

createApp(App)
    .use(roteador)
    .mount('#app')

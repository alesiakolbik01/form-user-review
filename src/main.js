import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import components from './components/global/index.js'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App)



app.use(VueTheMask)

app.use(components)
app.use(createPinia())

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"

import axios from './helpers/axios'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .provide("$axios", axios)
    .mount('#app')


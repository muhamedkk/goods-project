import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
require('@/assets/css/style.css')

require('@/assets/js/js.js')

createApp(App).use(store).use(router,axios).mount('#app')

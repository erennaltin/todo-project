import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './styles/main.less'
import './styles/urls.css'

createApp(App).use(store).use(router).mount('#app')

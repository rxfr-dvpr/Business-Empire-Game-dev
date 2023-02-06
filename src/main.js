import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router/router.js'

import '@/assets/scss/main.scss';
import '@/assets/css/all.min.css';

const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')

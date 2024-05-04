import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

/* 引入createPinia，用于创建pinia */
import { createPinia } from 'pinia'

/* 创建pinia */
const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')

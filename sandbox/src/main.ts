import { createRouter, createWebHashHistory } from 'vue-router'
import { createApp } from 'vue'
import { routes } from './router'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')

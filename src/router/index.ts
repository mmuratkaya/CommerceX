import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import About from '../views/About.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/product/:id', component: Product },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

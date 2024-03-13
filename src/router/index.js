import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Views/Home.vue'
import About from '@/Views/About.vue'
import OnlyProfit from '@/Views/OnlyProfit.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, 
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/profit',
        name: 'OnlyProfit',
        component: OnlyProfit
    } 
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
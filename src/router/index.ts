import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Check from '../views/Check.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/check',
      name: 'check',
      component: Check
    }
  ]
})

export default router

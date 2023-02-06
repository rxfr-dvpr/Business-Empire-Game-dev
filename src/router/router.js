import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'income',
      alias: ['/income'],
      component: () => import('@/views/Income.vue')
    },
    {
      path: '/invest',
      name: 'invest',
      component: () => import('@/views/Invest.vue')
    },
    {
      path: '/business',
      name: 'business',
      component: () => import('@/views/Business.vue')
    },
    {
      path: '/items',
      name: 'items',
      component: () => import('@/views/Items.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile.vue')
    }
  ]
})

export default router

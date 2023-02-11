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
      component: () => import('@/views/Items.vue'),
      children: [
        {
          path: '/items/garage',
          name: 'items garage',
          component: () => import('@/views/ItemsViews/Garage.vue')
        },
        {
          path: '/items/hangar',
          name: 'items hangar',
          component: () => import('@/views/ItemsViews/Hangar.vue')
        },
        {
          path: '/items/harbour',
          name: 'items harbour',
          component: () => import('@/views/ItemsViews/Harbour.vue')
        },
        {
          path: '/items/showroom',
          name: 'items showroom',
          component: () => import('@/views/ItemsViews/Showroom.vue')
        },
        {
          path: '/items/aircrafts',
          name: 'items aircrafts',
          component: () => import('@/views/ItemsViews/Aircrafts.vue')
        },
        {
          path: '/items/yachtshop',
          name: 'items yachtshop',
          component: () => import('@/views/ItemsViews/Yachtshop.vue')
        },
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile.vue')
    },
    {
      path: '/:pathMath(.*)*',
      name: 'NotFound',
      component: () => import('@/views/Business.vue')
    }
  ]
})

export default router

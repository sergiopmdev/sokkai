import HomeViewVue from '@/views/HomeView.vue'
import NotFoundViewVue from '@/views/NotFoundView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeViewVue
    },
    {
      name: 'not-found',
      path: '/:pathMatch(.*)*',
      component: NotFoundViewVue
    }
  ]
})

export default router

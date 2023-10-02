import { createRouter, createWebHistory } from 'vue-router'
import PageSearch from '@/components/PageSearch.vue'
import PageJoke from '@/components/PageJoke.vue'

const routes = [
  {
    path: '/',
    name: 'PageSearch',
    component: PageSearch
  },
  {
    path: '/preview',
    name: 'PageJoke',
    component: PageJoke
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import PageSearch from '@/views/PageSearch.vue'
import PageJoke from '@/views/PageJoke.vue'

const routes = [
  {
    path: '/',
    name: 'PageSearch',
    component: PageSearch
  },
  {
    path: '/joke/:id',
    name: 'PageJoke',
    component: PageJoke
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
